import * as T from './vendor/three.module.js';
import {loadDriverGrip} from './driver-hands.js';

const up=new T.Vector3(0,1,0);

// One driver fits the seat and wheel coordinates of each car.
export function createDriver(seats,steering) {
  if(!steering)return undefined;
  const rig=new T.Group();
  const suit=new T.MeshStandardMaterial({color:0x202b37,roughness:.85});
  const seams=new T.MeshStandardMaterial({color:0x576473,roughness:.9});
  const skin=new T.MeshStandardMaterial({color:0xb98261,roughness:.8});
  const hair=new T.MeshStandardMaterial({color:0x211b1a,roughness:.94});
  const gloves=new T.MeshStandardMaterial({color:0x57453c,roughness:.79});
  const axis=steering.axis;
  const vertical=new T.Vector3(0,axis.z,-axis.y).normalize();
  const horizontal=new T.Vector3(1,0,0);
  const handRest=new T.Quaternion().setFromRotationMatrix(new T.Matrix4().makeBasis(
    horizontal.clone().negate(),axis.clone().negate(),vertical.clone().negate()
  ));
  const handTurn=new T.Quaternion();

  function ellipsoid(material,x,y,z) {
    const mesh=new T.Mesh(new T.SphereGeometry(1,16,12),material);
    mesh.scale.set(x,y,z);
    rig.add(mesh);
    return mesh;
  }
  function limb(material,radius) {
    const mesh=new T.Mesh(new T.CapsuleGeometry(radius,1,4,10),material);
    rig.add(mesh);
    return mesh;
  }
  const delta=new T.Vector3();
  function connect(mesh,a,b) {
    delta.subVectors(b,a);
    const distance=delta.length();
    mesh.position.copy(a).lerp(b,.5);
    mesh.quaternion.setFromUnitVectors(up,delta.normalize());
    mesh.scale.y=distance/(mesh.geometry.parameters.height+2*mesh.geometry.parameters.radius);
  }

  const x=seats.driverX;
  const eye=seats.eyeHeight;
  const shouldersY=eye-.23;
  const shouldersZ=seats.eyeDepth-.115;
  const torso=ellipsoid(suit,.168,.187,.099);
  torso.position.set(x,shouldersY-.075,shouldersZ-.028);
  const neck=ellipsoid(skin,.046,.073,.042);
  neck.position.set(x,eye-.123,seats.eyeDepth-.075);
  const head=ellipsoid(skin,.078,.105,.083);
  head.position.set(x,eye-.027,seats.eyeDepth-.065);
  const hairline=ellipsoid(hair,.080,.068,.084);
  hairline.position.copy(head.position).add(new T.Vector3(0,.046,-.012));
  const nose=ellipsoid(skin,.025,.031,.026);
  nose.position.copy(head.position).add(new T.Vector3(0,-.002,.078));
  const ears=[-1,1].map(side=>{
    const ear=ellipsoid(skin,.019,.033,.022);
    ear.position.copy(head.position).add(new T.Vector3(side*.073,-.015,0));
    return ear;
  });

  const arms=[-1,1].map(side=>({
    side,
    shoulder:new T.Vector3(x+side*.145,shouldersY,shouldersZ),
    elbow:new T.Vector3(),
    grip:new T.Vector3(),
    wrist:new T.Vector3(),
    upper:limb(suit,.050),
    forearm:limb(suit,.043),
    cuff:ellipsoid(seams,.034,.023,.031),
    hand:null
  }));

  for(const arm of arms) {
    loadDriverGrip(arm.side,gloves).then(hand=>{
      arm.hand=hand;
      rig.add(hand);
      update(previousTurn,previousCabin);
    }).catch(error=>console.warn('Driver hands unavailable',error));
  }

  let previousTurn=0,previousCabin=false;
  function update(turn,cabin) {
    previousTurn=turn;
    previousCabin=cabin;
    handTurn.setFromAxisAngle(axis,turn);

    for(const object of [head,hairline,nose,neck,torso,...ears])object.visible=!cabin;
    for(const arm of arms) {
      arm.grip.copy(horizontal).multiplyScalar(arm.side*(steering.radius+.022))
        .addScaledVector(vertical,steering.radius*.22).applyAxisAngle(axis,turn).add(steering.pivot);
      arm.wrist.copy(arm.grip).addScaledVector(axis,-.067);
      arm.wrist.y-=.012;
      arm.elbow.copy(arm.shoulder).lerp(arm.wrist,.48);
      arm.elbow.x+=arm.side*.055;
      arm.elbow.y-=.125;
      connect(arm.upper,arm.shoulder,arm.elbow);
      connect(arm.forearm,arm.elbow,arm.wrist);
      arm.cuff.position.copy(arm.wrist).lerp(arm.elbow,.06);
      arm.cuff.quaternion.copy(arm.forearm.quaternion);
      if(arm.hand) {
        arm.hand.position.copy(arm.wrist);
        arm.hand.quaternion.multiplyQuaternions(handTurn,handRest);
      }
    }
  }
  update(0,false);
  return {rig,update};
}
