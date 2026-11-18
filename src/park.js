import * as T from './vendor/three.module.js';
import {Sky} from './vendor/Sky.js';
import {batchPark} from './scene-batching.js';
import {makeDriveRoute,createRoadIndex} from './drive-routes.js';

const up = new T.Vector3(0,1,0);
const dummy = new T.Object3D();
const material = (color,roughness=.85,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
function mesh(parent,geometry,surface,position=[0,0,0]) {
  const object = new T.Mesh(geometry,surface);
  object.position.set(...position);
  object.castShadow = true;
  object.receiveShadow = true;
  parent.add(object);
  return object;
}
function beam(parent,a,b,radius,surface) {
  const start = new T.Vector3(...a);
  const end = new T.Vector3(...b);
  const object = mesh(parent,new T.CylinderGeometry(radius,radius,start.distanceTo(end),8),surface);
  object.position.copy(start).lerp(end,.5);
  object.quaternion.setFromUnitVectors(up,end.sub(start).normalize());
  return object;
}
function randomGenerator() {
  let seed = 231475;
  return ()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
}
function canvasTexture(size,paint) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  paint(canvas.getContext('2d'),size);
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  return texture;
}
function loadTexture(file,repeat,color=true) {
  const texture = new T.TextureLoader().load(new URL('./assets/drive/'+file,import.meta.url).href);
  texture.colorSpace = color?T.SRGBColorSpace:T.NoColorSpace;
  texture.wrapS = texture.wrapT = T.RepeatWrapping;
  texture.repeat.set(...repeat);
  texture.anisotropy = 8;
  texture.userData.asset = file;
  return texture;
}

export function createPark(theme='forest') {
  const highway=theme!=='park';
  const scale=highway?18:1;
  const desert=theme==='desert',coast=theme==='coast';
  const segments=highway?2400:600;
  const roadHalfWidth=highway?10.5:6.5;
  const root = new T.Group();
  const random = randomGenerator();
  const {curve:route,profile}=makeDriveRoute(theme);
  const samples=route.getSpacedPoints(segments);
  const roadDistance=createRoadIndex(samples);
  const roadSurface = new T.MeshStandardMaterial({
    map:loadTexture('asphalt.jpg',[1,85*scale]),color:0x878c91,roughness:.9,metalness:.02
  });
  const grassSurface = new T.MeshStandardMaterial({
    map:loadTexture(desert?'sand.jpg':'grass.jpg',[72*scale,72*scale]),color:desert?0xe7cfac:0x95ab6f,roughness:.98
  });
  roadSurface.normalMap=loadTexture('asphalt-normal.jpg',[1,85*scale],false);
  roadSurface.normalScale.set(.4,.4);
  grassSurface.normalMap=loadTexture(desert?'sand-normal.jpg':'grass-normal.jpg',[72*scale,72*scale],false);
  grassSurface.normalScale.set(.65,.65);
  const terrain=new T.PlaneGeometry(700*scale,700*scale,80,80);
  const terrainPositions=terrain.attributes.position;
  for(let i=0;i<terrainPositions.count;i++) {
    const x=terrainPositions.getX(i),z=terrainPositions.getY(i);
    const rise=Math.max(0,Math.min(1,(Math.max(Math.abs(x),Math.abs(z))-185*scale)/(95*scale)));
    terrainPositions.setZ(i,rise*rise*(8+Math.sin(x*.018/scale)*5+Math.cos(z*.023/scale)*4)*Math.sqrt(scale));
  }
  terrain.computeVertexNormals();
  const ground = mesh(root,terrain,grassSurface,[0,-.025,0]);
  ground.rotation.x = -Math.PI/2;
  const paving = material(0x9e9a8b,.96);
  const curb = material(0xbbb7ab,.82);
  const paint = material(0xe3ddbd,.88);
  const steel = material(0x353a3b,.42,.75);
  const wood = material(0x644b36,.9);
  const stone = material(0x777d79,.95);
  function pointAt(t,offset=0,height=0) {
    const position = route.getPointAt((t%1+1)%1);
    const tangent = route.getTangentAt((t%1+1)%1);
    return position.add(new T.Vector3(tangent.z,0,-tangent.x).multiplyScalar(offset)).setY(height);
  }
  function ribbon(offset,width,height,surface) {
    const points = [], uv = [], indices = [];
    for(let i=0;i<=segments;i++) {
      const t = i/segments;
      for(const side of [-1,1]) points.push(...pointAt(t,offset+side*width/2,height).toArray());
      uv.push(0,t,1,t);
      if(i<segments) {
        const a=i*2;
        indices.push(a,a+2,a+1,a+1,a+2,a+3);
      }
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const object = mesh(root,geometry,surface);
    object.castShadow = false;
    return object;
  }
  ribbon(0,roadHalfWidth*2,.02,roadSurface);
  for(const side of [-1,1]) {
    ribbon(side*(roadHalfWidth+.18),.34,.10,curb);
    ribbon(side*(roadHalfWidth+(highway?3.35:2.85)),highway?2:4.6,.015,paving);
    ribbon(side*(roadHalfWidth-.62),.095,.027,paint);
    if(highway)ribbon(side*.60,.11,.03,paint);
  }
  const dashCount=Math.round(route.getLength()/(highway?13:5));
  const offsets=highway?[-4.1,4.1]:[0];
  // Bounded strips keep offscreen lane markings out of each frame.
  for(let start=0;start<dashCount;start+=24) {
    const batch=new T.InstancedMesh(new T.PlaneGeometry(.13,highway?3.8:2.7),paint,Math.min(24,dashCount-start)*offsets.length);
    let index=0;
    for(let i=start;i<Math.min(start+24,dashCount);i++) {
      const tangent=route.getTangentAt(i/dashCount);
      for(const offset of offsets) {
        dummy.position.copy(pointAt(i/dashCount,offset,.032));
        dummy.rotation.set(-Math.PI/2,Math.atan2(tangent.x,tangent.z),0,"YXZ");dummy.scale.setScalar(1);dummy.updateMatrix();
        batch.setMatrixAt(index++,dummy.matrix);
      }
    }
    batch.receiveShadow=true;root.add(batch);
  }
  if(highway) {
    const barrierSurface=material(0x9ba5ad,.44,.52);
    function guardrail(offset) {
      const profile=[[-.075,.51],[-.105,.60],[-.042,.67],[-.105,.74],[-.075,.82],[.075,.82],[.075,.51]];
      for(let start=0;start<segments;start+=80) {
        const end=Math.min(segments,start+80);
        const points=[],indices=[];
        for(let i=start;i<=end;i++) {
          for(const [x,y] of profile)points.push(...pointAt(i/segments,offset+x,y).toArray());
          if(i<end)for(let j=0;j<profile.length;j++) {
            const a=(i-start)*profile.length+j,b=(i-start)*profile.length+(j+1)%profile.length;
            indices.push(a,b,a+profile.length,b,b+profile.length,a+profile.length);
          }
        }
        const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));geometry.setIndex(indices);geometry.computeVertexNormals();
        const rail=mesh(root,geometry,barrierSurface);rail.castShadow=false;
      }
    }
    const count=Math.round(route.getLength()/12);
    const posts=new T.InstancedMesh(new T.BoxGeometry(.10,.85,.10),barrierSurface,count*3);
    for(const [sideIndex,offset]of [-10.45,0,10.45].entries()) {
      guardrail(offset);
      for(let i=0;i<count;i++) {
        dummy.position.copy(pointAt(i/count,offset,.425));dummy.rotation.set(0,0,0);dummy.scale.setScalar(1);dummy.updateMatrix();
        posts.setMatrixAt(sideIndex*count+i,dummy.matrix);
      }
    }
    posts.castShadow=true;root.add(posts);
  }

  // Trees share geometry and materials while retaining irregular crowns and branch structure.
  const treePositions = [];
  const treeCount=desert?0:highway?440:170;
  for(let attempt=0;attempt<1600&&treePositions.length<treeCount;attempt++) {
    let x,z;
    if(highway) {
      const point=pointAt(random(),(random()<.5?-1:1)*(22+random()*115),0);x=point.x;z=point.z;
    } else {x=(random()-.5)*330;z=(random()-.5)*270;}
    if(roadDistance(x,z)<(highway?23:15)||(!highway&&Math.abs(x)<35&&Math.abs(z)<29))continue;
    treePositions.push({x,z,height:7+random()*8,seed:random()});
  }
  const bark = canvasTexture(128,(ctx,size)=>{
    ctx.fillStyle='#4f4639';ctx.fillRect(0,0,size,size);
    for(let i=0;i<140;i++) {
      ctx.strokeStyle=i%2?'#302b24':'#6f6651';ctx.lineWidth=1+random()*2;
      const x=random()*size;ctx.beginPath();ctx.moveTo(x,0);ctx.bezierCurveTo(x+8,30,x-9,80,x+3,size);ctx.stroke();
    }
  });
  bark.wrapS=bark.wrapT=T.RepeatWrapping;
  bark.repeat.set(2,4);
  const trunkSurface = new T.MeshStandardMaterial({map:bark,roughness:1,color:0xaaa18a});
  const trunks = new T.InstancedMesh(new T.CylinderGeometry(.16,.31,1,7),trunkSurface,treePositions.length);
  const branches = new T.InstancedMesh(new T.CylinderGeometry(.06,.13,1,6),trunkSurface,treePositions.length*5);
  // Crossed leaf cards preserve individual leaf silhouettes, including in shadows.
  const leafPositions=[],leafNormals=[],leafUvs=[],leafIndices=[];
  for(let side=0;side<3;side++) {
    const angle=side*Math.PI/3;
    const x=Math.cos(angle),z=Math.sin(angle),base=side*4;
    leafPositions.push(-x,-1,-z,x,-1,z,-x,1,-z,x,1,z);
    for(let i=0;i<4;i++) leafNormals.push(-z,0,x);
    leafUvs.push(0,0,1,0,0,1,1,1);
    leafIndices.push(base,base+1,base+2,base+1,base+3,base+2);
  }
  const crownGeometry=new T.BufferGeometry();
  crownGeometry.setAttribute('position',new T.Float32BufferAttribute(leafPositions,3));
  crownGeometry.setAttribute('normal',new T.Float32BufferAttribute(leafNormals,3));
  crownGeometry.setAttribute('uv',new T.Float32BufferAttribute(leafUvs,2));
  crownGeometry.setIndex(leafIndices);
  const foliageTexture = canvasTexture(512,(ctx,size)=>{
    ctx.clearRect(0,0,size,size);
    for(let i=0;i<1400;i++) {
      const angle=random()*Math.PI*2,r=Math.sqrt(random())*.46;
      const x=(.5+Math.cos(angle)*r)*size,y=(.5+Math.sin(angle)*r*.9)*size;
      const length=7+random()*10,width=length*.42,rotation=random()*Math.PI*2;
      ctx.save();ctx.translate(x,y);ctx.rotate(rotation);
      ctx.fillStyle=['#264329','#3f6332','#608344','#789a51','#8da75c'][Math.floor(random()*5)];
      ctx.beginPath();ctx.moveTo(0,-length/2);ctx.bezierCurveTo(width,-length*.2,width,length*.28,0,length/2);ctx.bezierCurveTo(-width,length*.28,-width,-length*.2,0,-length/2);ctx.fill();
      ctx.strokeStyle='#b8bd7460';ctx.lineWidth=.65;ctx.beginPath();ctx.moveTo(0,-length*.4);ctx.lineTo(0,length*.4);ctx.stroke();ctx.restore();
    }
  });
  const crownSurface = new T.MeshLambertMaterial({map:foliageTexture,color:0xffffff,emissive:0x14200a,emissiveIntensity:.12,alphaTest:.45,side:T.DoubleSide});
  const crowns = new T.InstancedMesh(crownGeometry,crownSurface,treePositions.length*8);
  treePositions.forEach((tree,index)=>{
    dummy.position.set(tree.x,tree.height*.3,tree.z);
    dummy.scale.set(1,tree.height*.6,1);
    dummy.rotation.set(0,tree.seed*6,.025);
    dummy.updateMatrix();trunks.setMatrixAt(index,dummy.matrix);
    for(let n=0;n<8;n++) {
      const angle=n*2.399+tree.seed*6;
      const spread=(n<5?1.75:.9)*tree.height/10;
      dummy.position.set(tree.x+Math.sin(angle)*spread,tree.height*(.56+(n%3)*.12),tree.z+Math.cos(angle)*spread);
      dummy.scale.set(2.35*tree.height/11,1.65*tree.height/11,2.1*tree.height/11);
      dummy.rotation.set(.1,angle,.05);dummy.updateMatrix();crowns.setMatrixAt(index*8+n,dummy.matrix);
      crowns.setColorAt(index*8+n,new T.Color().setRGB(.78+tree.seed*.2,.86+tree.seed*.14,.72+tree.seed*.25));
      if(n<5) {
        const start=new T.Vector3(tree.x,tree.height*.34,tree.z);
        const end=dummy.position.clone();
        dummy.position.copy(start).lerp(end,.5);
        const direction=end.sub(start);
        const length=direction.length();
        dummy.quaternion.setFromUnitVectors(up,direction.normalize());
        dummy.scale.set(1,length,1);dummy.updateMatrix();
        branches.setMatrixAt(index*5+n,dummy.matrix);
      }
    }
  });
  for(const object of [trunks,branches,crowns]) {object.castShadow=true;object.receiveShadow=true;root.add(object);}

  // Planting beds, rocks, and benches furnish the inner garden.
  const flowers = new T.InstancedMesh(new T.IcosahedronGeometry(.095,1),material(0xe9b3ab),900);
  for(let i=0;i<900;i++) {
    const angle=random()*Math.PI*2;
    const radius=15+random()*2;
    dummy.position.set(Math.cos(angle)*radius,.15+random()*.25,Math.sin(angle)*radius*.68);
    dummy.rotation.set(random(),random(),random());dummy.scale.setScalar(.7+random()*.7);
    dummy.updateMatrix();flowers.setMatrixAt(i,dummy.matrix);
    flowers.setColorAt(i,new T.Color([0xd4b468,0xb65e73,0xe0ddbd,0x6c8d62][i%4]));
  }
  root.add(flowers);
  const waterMaterial = new T.MeshPhysicalMaterial({color:0x355e66,metalness:.62,roughness:.21,clearcoat:1});
  const pond = mesh(root,new T.CircleGeometry(12,80),waterMaterial,[0,.015,0]);
  pond.rotation.x=-Math.PI/2;pond.scale.y=.62;pond.castShadow=false;
  for(let i=0;i<36;i++) {
    const a=i*Math.PI/18;
    const rock=mesh(root,new T.IcosahedronGeometry(.65+random()*.4,1),stone,[Math.cos(a)*12.3,.18,Math.sin(a)*7.7]);
    rock.scale.set(1.3,.55,.85);rock.rotation.y=a;
  }
  for(let i=0;i<24;i++) {
    const t=i/24;
    const p=pointAt(t,-(highway?16.4:12.4),0);
    const tangent=route.getTangentAt(t);
    const bench=new T.Group();bench.position.copy(p);bench.rotation.y=Math.atan2(tangent.x,tangent.z);
    for(let n=0;n<4;n++) mesh(bench,new T.BoxGeometry(.1,.075,2),wood,[n*.11-.15,.48,0]);
    for(const z of [-.72,.72]) {
      mesh(bench,new T.BoxGeometry(.13,.47,.12),steel,[.05,.235,z]);
      mesh(bench,new T.BoxGeometry(.12,.8,.12),steel,[-.25,.4,z]);
    }
    for(let n=0;n<3;n++) mesh(bench,new T.BoxGeometry(.08,.11,2),wood,[-.27,.68+n*.13,0]);
    root.add(bench);
    const lamp=new T.Group();lamp.position.copy(pointAt(t,highway?16.8:12.8,0));
    mesh(lamp,new T.CylinderGeometry(.035,.055,4.8,8),steel,[0,2.4,0]);
    mesh(lamp,new T.BoxGeometry(.45,.16,.42),steel,[0,4.83,0]);
    const bulb=mesh(lamp,new T.PlaneGeometry(.34,.30),new T.MeshBasicMaterial({color:0xffd590}),[0,4.735,0]);
    bulb.rotation.x=Math.PI/2;
    root.add(lamp);
  }

  const walkers = [];
  const skinColors = [0xb18463,0x805940,0xe0b99b];
  function person(index) {
    const group = new T.Group();
    const skin=material(skinColors[index%3],.88);
    const shirt=material([0x41526c,0x8b675c,0xbba88a,0x5e6e59][index%4]);
    const trousers=material([0x333941,0x4a4b49,0x343a52][index%3]);
    const shoes=material(0x292a29,.85);
    const head=mesh(group,new T.SphereGeometry(.105,12,10),skin,[0,1.58,0]);head.scale.set(.85,1.18,.92);
    const hair=mesh(group,new T.SphereGeometry(.108,12,8,0,Math.PI*2,0,Math.PI*.57),material(0x35291f),[0,1.63,0]);
    hair.scale.set(.87,.86,.97);
    const torso=mesh(group,new T.CapsuleGeometry(.15,.31,4,10),shirt,[0,1.21,0]);torso.scale.set(1,.95,.67);
    mesh(group,new T.SphereGeometry(.125,10,8),trousers,[0,.89,0]).scale.set(1.28,.87,.8);
    const limbs=[];
    for(const side of [-1,1]) {
      const leg=new T.Group();leg.position.set(side*.088,.88,0);
      mesh(leg,new T.CapsuleGeometry(.056,.63,4,8),trousers,[0,-.35,0]);
      mesh(leg,new T.BoxGeometry(.10,.085,.22),shoes,[0,-.79,.04]);
      const arm=new T.Group();arm.position.set(side*.19,1.39,0);
      mesh(arm,new T.CapsuleGeometry(.047,.22,4,8),shirt,[0,-.12,0]);
      mesh(arm,new T.CapsuleGeometry(.033,.21,3,8),skin,[0,-.35,0]);
      mesh(arm,new T.SphereGeometry(.038,8,6),skin,[0,-.49,0]);
      group.add(leg,arm);limbs.push({leg,arm,side});
    }
    root.add(group);
    walkers.push({group,limbs,t:index/11,offset:index%2?(highway?13.8:9.2):-(highway?13.8:9.2),speed:(.0007+random()*.0006)/scale,phase:random()*6});
  }
  for(let i=0;i<(desert?4:11);i++) person(i);

  const animals=[];
  for(let index=0;index<6;index++) {
    const group=new T.Group();
    const fur=material([0x9b7951,0x675245,0xd0b68b][index%3]);
    const body=mesh(group,new T.SphereGeometry(.25,14,10),fur,[0,.48,0]);body.scale.set(.7,.85,1.4);
    const neck=mesh(group,new T.SphereGeometry(.15,12,8),fur,[0,.64,.30]);neck.scale.set(.88,1.2,1);
    mesh(group,new T.SphereGeometry(.15,12,10),fur,[0,.78,.38]);
    mesh(group,new T.CapsuleGeometry(.065,.12,3,8),fur,[0,.72,.54]).rotation.x=Math.PI/2;
    const black=material(0x171515,.65);
    mesh(group,new T.SphereGeometry(.036,8,6),black,[0,.73,.64]);
    for(const side of [-1,1]) {
      const ear=mesh(group,new T.ConeGeometry(.07,.19,5),fur,[side*.102,.92,.37]);ear.rotation.z=-side*.27;
      mesh(group,new T.SphereGeometry(.015,7,6),black,[side*.125,.8,.45]);
    }
    const legs=[];
    for(const x of [-.12,.12]) for(const z of [-.23,.23]) {
      const leg=mesh(group,new T.CapsuleGeometry(.038,.30,3,7),fur,[x,.22,z]);legs.push(leg);
    }
    const tail=beam(group,[0,.55,-.3],[0,.78,-.68],.045,fur);
    root.add(group);
    animals.push({group,legs,tail,t:.1+index*.14,phase:random()*6});
  }

  if(highway) {
    const hillShape=new T.SphereGeometry(1,34,20);
    const hillVertices=hillShape.attributes.position;
    for(let i=0;i<hillVertices.count;i++){
      const x=hillVertices.getX(i),y=hillVertices.getY(i),z=hillVertices.getZ(i);
      const roughness=.07*Math.sin(x*13+z*12)+.04*Math.cos(z*28+x*17);
      hillVertices.setY(i,y*(1+roughness));
    }
    hillShape.computeVertexNormals();
    const hills=new T.InstancedMesh(hillShape,material(desert?0xa97853:coast?0x667b70:0x4a633e,.98),72);
    for(let i=0;i<72;i++) {
      const point=pointAt(i/72,(i%2?1:-1)*(230+random()*250),0);
      dummy.position.copy(point);dummy.rotation.set(0,random()*6,0);
      dummy.scale.set(60+random()*100,18+random()*50,50+random()*100);dummy.updateMatrix();hills.setMatrixAt(i,dummy.matrix);
    }
    hills.receiveShadow=true;root.add(hills);
  }
  if(coast) {
    const seaNormal=new Uint8Array(128*128*4);
    for(let y=0;y<128;y++)for(let x=0;x<128;x++) {
      const i=(y*128+x)*4;seaNormal.set([128+Math.sin(x*.35+y*.18)*22,128+Math.cos(y*.4+x*.17)*18,249,255],i);
    }
    const waves=new T.DataTexture(seaNormal,128,128);waves.wrapS=waves.wrapT=T.RepeatWrapping;waves.repeat.set(110,160);waves.needsUpdate=true;
    const sea=mesh(root,new T.PlaneGeometry(5000,7700),new T.MeshPhysicalMaterial({color:0x216f83,normalMap:waves,normalScale:new T.Vector2(.45,.45),roughness:.26,metalness:.3,clearcoat:.8}),[3600,-.012,0]);
    sea.rotation.x=-Math.PI/2;sea.castShadow=false;
    const beach=mesh(root,new T.PlaneGeometry(320,7700),new T.MeshStandardMaterial({map:loadTexture('sand.jpg',[8,190]),color:0xc6b68e,roughness:1}),[1220,-.015,0]);beach.rotation.x=-Math.PI/2;
  }

  if(highway) {
    const boardMap=canvasTexture(512,(ctx,size)=>{
      ctx.fillStyle=coast?'#174b62':'#21433c';ctx.fillRect(0,0,size,size);
      ctx.strokeStyle='#dce8de';ctx.lineWidth=9;ctx.strokeRect(18,135,476,242);
      ctx.fillStyle='#e8f0eb';ctx.textAlign='center';
      ctx.font='600 38px system-ui';ctx.fillText(profile.name.toUpperCase(),256,217,430);
      ctx.font='500 26px system-ui';ctx.fillText((route.getLength()/1000).toFixed(1)+' KM LOOP',256,278);
      ctx.font='42px system-ui';ctx.fillText('↑',256,331);
    });
    const board=new T.MeshStandardMaterial({map:boardMap,roughness:.92});
    // A roadside marker gives each route a landmark at the start.
    const t=profile.start+.009,p=pointAt(t,-15.5,0),direction=route.getTangentAt(t);
    const sign=new T.Group();sign.position.copy(p);sign.rotation.y=Math.atan2(-direction.x,-direction.z);
    mesh(sign,new T.BoxGeometry(3.8,1.9,.13),steel,[0,2.55,0]);
    const face=mesh(sign,new T.PlaneGeometry(3.76,1.88),board,[0,2.55,.071]);
    boardMap.repeat.set(1,.50);boardMap.offset.y=.25;face.castShadow=false;
    for(const x of [-1.24,1.24])mesh(sign,new T.BoxGeometry(.09,2,.09),steel,[x,1,0]);
    root.add(sign);
  }
  const sky = new Sky();sky.scale.setScalar(highway?20000:1200);sky.frustumCulled=false;root.add(sky);
  const skyUniforms=sky.material.uniforms;
  skyUniforms.turbidity.value=3.4;skyUniforms.rayleigh.value=2.1;
  skyUniforms.mieCoefficient.value=.006;skyUniforms.mieDirectionalG.value=.83;
  const sun=new T.DirectionalLight(0xfff0d7,3.1);sun.position.set(65,coast?55:95,-70);
  sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-42;sun.shadow.camera.right=42;sun.shadow.camera.top=42;sun.shadow.camera.bottom=-42;
  sun.shadow.camera.near=.1;sun.shadow.camera.far=220;sun.shadow.bias=-.00025;sun.shadow.normalBias=.055;
  root.add(sun,sun.target);
  const ambient=new T.HemisphereLight(0xb9d7f2,0x647352,1.7);root.add(ambient);
  const moon=mesh(root,new T.SphereGeometry(8,28,18),new T.MeshBasicMaterial({color:0xd8e1f5}),[-190,240,350]);
  moon.castShadow=false;
  const starsGeometry=new T.BufferGeometry();
  const starPositions=[];
  for(let i=0;i<900;i++) {
    const az=random()*Math.PI*2, elevation=random()*Math.PI*.5;
    starPositions.push(Math.cos(az)*Math.cos(elevation)*700,Math.sin(elevation)*700+50,Math.sin(az)*Math.cos(elevation)*700);
  }
  starsGeometry.setAttribute('position',new T.Float32BufferAttribute(starPositions,3));
  const stars=new T.Points(starsGeometry,new T.PointsMaterial({color:0xdce8fc,size:1.5,sizeAttenuation:true}));root.add(stars);
  const cloudMap=canvasTexture(256,(ctx,size)=>{
    ctx.clearRect(0,0,size,size);
    for(let i=0;i<34;i++) {
      const x=50+random()*155,y=90+random()*65,r=20+random()*40;
      const gradient=ctx.createRadialGradient(x,y,0,x,y,r);
      gradient.addColorStop(0,'rgba(255,255,255,.35)');gradient.addColorStop(.6,'rgba(245,249,255,.15)');gradient.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle=gradient;ctx.fillRect(x-r,y-r,r*2,r*2);
    }
  });
  const clouds=[];
  const cloudMaterial=new T.MeshBasicMaterial({map:cloudMap,transparent:true,opacity:.7,depthWrite:false,side:T.DoubleSide,fog:false});
  for(let i=0;i<22;i++) {
    const cloud=mesh(root,new T.PlaneGeometry(100+random()*80,55+random()*45),cloudMaterial,[(random()-.5)*650,110+random()*65,(random()-.5)*650]);
    cloud.castShadow=false;cloud.rotation.y=random()*6;
    clouds.push(cloud);
  }

  const rainGeometry=new T.BufferGeometry();
  const rainPositions=new Float32Array(2300*6);
  for(let i=0;i<2300;i++) {
    const offset=i*6;const x=(random()-.5)*65,y=random()*40,z=(random()-.5)*65;
    rainPositions.set([x,y,z,x-.11,y-.7,z-.05],offset);
  }
  rainGeometry.setAttribute('position',new T.BufferAttribute(rainPositions,3));
  const rain=new T.LineSegments(rainGeometry,new T.LineBasicMaterial({color:0xb8cad8,transparent:true,opacity:.38,depthWrite:false}));root.add(rain);

  const batches=batchPark(root,[...walkers,...animals].map(actor=>actor.group));
  let isNight=false,isRain=false;
  function weather(night,raining) {
    isNight=night;isRain=raining;
    sky.visible=!night;moon.visible=stars.visible=night;
    rain.visible=raining;
    skyUniforms.sunPosition.value.set(65,coast?55:95,-70).normalize();
    skyUniforms.turbidity.value=raining?18:3.4;
    sun.color.setHex(night?0x93b3ec:0xffeed4);
    sun.intensity=night?.32:raining?1.1:2.5;
    ambient.intensity=night?.32:raining?.85:1.0;
    ambient.color.setHex(night?0x7492bc:raining?0x9ba8b4:0xc7d7ea);
    cloudMaterial.color.setHex(raining?0x6e7b89:0xffffff);
    cloudMaterial.opacity=night?.14:raining?.94:.7;
    roadSurface.roughness=raining?.25:.9;
    roadSurface.metalness=raining?.2:.02;
    return new T.FogExp2(night?0x0d1726:raining?0x88949c:0xb4c9d8,raining?.006:night?.0033:.0018);
  }

  function update(time,delta,position,camera) {
    const step=Math.min(delta,.05);
    sun.target.position.set(position.x,0,position.z);
    sun.position.set(position.x+65,coast?55:95,position.z-70);
    moon.position.set(position.x-190,240,position.z+350);
    stars.position.set(position.x,0,position.z);
    for(const cloud of clouds) {
      cloud.position.x+=step*.6;
      if(cloud.position.x>350) cloud.position.x=-350;
      cloud.quaternion.copy(camera.quaternion);
    }
    for(const walker of walkers) {
      const t=walker.t+time*walker.speed;
      const p=pointAt(t,walker.offset,0);
      const direction=route.getTangentAt((t%1+1)%1);
      walker.group.position.copy(p);
      walker.group.rotation.y=Math.atan2(direction.x,direction.z);
      walker.group.position.y=.015+Math.abs(Math.sin(time*3.5+walker.phase))*.012;
      for(const limb of walker.limbs) {
        limb.leg.rotation.x=Math.sin(time*5+walker.phase)*.42*limb.side;
        limb.arm.rotation.x=-Math.sin(time*5+walker.phase)*.33*limb.side;
      }
    }
    animals.forEach((animal,index)=>{
      const t=animal.t+time*.00045;
      animal.group.position.copy(pointAt(t,-(highway?23:17)-index%2*3,0));
      const tangent=route.getTangentAt((t%1+1)%1);
      animal.group.rotation.y=Math.atan2(tangent.x,tangent.z);
      animal.legs.forEach((leg,i)=>leg.rotation.x=Math.sin(time*6+animal.phase+i*Math.PI)*.23);
      animal.tail.rotation.z=Math.sin(time*4+animal.phase)*.19;
    });
    batches.update();
    if(isRain) {
      rain.position.set(position.x,0,position.z);
      for(let i=0;i<rainPositions.length;i+=6) {
        rainPositions[i+1]-=step*30;rainPositions[i+4]-=step*30;
        if(rainPositions[i+1]<.1) {rainPositions[i+1]+=40;rainPositions[i+4]+=40;}
      }
      rainGeometry.attributes.position.needsUpdate=true;
    }
  }

  function collision(x,z) {
    const distance=roadDistance(x,z);
    if(highway&&(distance<1.25||distance>roadHalfWidth-.12))return true;
    for(const tree of treePositions) if((tree.x-x)**2+(tree.z-z)**2<2.2) return true;
    for(const actor of [...walkers,...animals]) {
      if((actor.group.position.x-x)**2+(actor.group.position.z-z)**2<2.3) return true;
    }
    return Math.abs(x)>180*scale || Math.abs(z)>145*scale;
  }
  function quality(preset) {
    if(sun.shadow.mapSize.x!==preset.shadow) {
      sun.shadow.map?.dispose();sun.shadow.map=null;
      sun.shadow.mapSize.set(preset.shadow,preset.shadow);sun.shadow.needsUpdate=true;
    }
    crowns.castShadow=preset.foliageShadows;
    rainGeometry.setDrawRange(0,preset.rain);
    clouds.forEach((cloud,index)=>{cloud.visible=preset.shadow>512||index<10;});
  }
  function spawn() {
    const point=pointAt(profile.start,highway?-6.2:-3.1,0);
    const tangent=route.getTangentAt(profile.start);
    return {x:point.x,z:point.z,heading:Math.atan2(tangent.x,tangent.z)};
  }
  weather(false,false);
  return {root,route,roadDistance,update,weather,spawn,collision,quality,roadHalfWidth,theme,length:route.getLength(),stats:batches.stats};
}
