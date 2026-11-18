import * as T from './vendor/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { DRACOLoader } from './vendor/DRACOLoader.js';
import { createHardware } from './hardware.js';
import {mountSteering,steeringProfiles} from './cockpit.js';
import { createFinishes } from './finishes.js';
import { createSuspension,createUnderbody } from './underbody.js';
import { split,partition,layout,assembleGroups } from './parts.js';

const asset = file => new URL('./assets/'+file,import.meta.url).href;

function tuneFinish(mesh) {
  const material=mesh.material;
  const name=material.name;
  if(name==='Body_Color') {
    mesh.material=new T.MeshPhysicalMaterial({
      color:0xb51010,metalness:.33,roughness:.30,clearcoat:.9,clearcoatRoughness:.165,envMapIntensity:.69
    });
  } else if(name==='Glass_Gray' || name==='Projector_Glass') {
    mesh.material=new T.MeshPhysicalMaterial({
      color:name==='Glass_Gray'?0x5c6d77:0xb6bcba,metalness:.13,
      roughness:.09,clearcoat:1,clearcoatRoughness:.07,transparent:true,
      opacity:name==='Glass_Gray'?.28:.23,depthWrite:false,envMapIntensity:.8
    });
  } else if(name==='Carbon_Fiber') {
    material.color.setHex(0x2c2b2b);
    material.roughness=.38;
    material.metalness=.35;
  } else if(name==='metal_chrome' || name==='metal_gray') {
    material.color.setHex(name==='metal_chrome'?0xb1b2b4:0x85868a);
    material.metalness=.86;
    material.roughness=name==='metal_chrome'?.22:.36;
  } else if(name==='Carpet' || name==='Interior_light' || name==='Interior_dark' || name==='plastic_gray' || name==='Leather') {
    const shades={Carpet:0x22201e,Interior_light:0x595653,Interior_dark:0x373637,plastic_gray:0x494747,Leather:0x252322};
    material.color.setHex(shades[name]);
    material.metalness=.06;
    material.roughness=.68;
  } else if(name==='Taillight_Glass') {
    material.color.setHex(0x891317);
    material.roughness=.21;
  } else if(name==='Ferrari_Yellow') {
    material.color.setHex(0xffc94a);
    material.roughness=.38;
  }
}

const sidePanels=split(0,-.642,'doorLeft',split(0,.642,'cabin','doorRight'));
const bodyPanels=split(2,-.99,'rear',split(2,.92,
  split(1,.189,'floor',split(1,.851,sidePanels,'cabin')),'front'));
const headlights=split(0,0,'headlampLeft','headlampRight');
const taillights=split(0,0,'tailLeft','tailRight');
const glazingPanels=split(2,-1.40,'rear',split(2,1.27,'windshield',headlights));
const rearLighting=split(2,-1.68,taillights,bodyPanels);
const frontLighting=split(2,1.2,bodyPanels,headlights);
const cockpitMeshes=new Set(['trim','leather','carpet','carbon_fibre_trim','wipers','metal','yellow_trim','blue']);
const interiorPanels=split(2,-.94,'rear',split(2,1.16,'cockpit','front'));
const specialPanels=new Map([
  ['glass',glazingPanels],['lights_red',rearLighting],
  ['lights',frontLighting],['leds',frontLighting]
]);

function separatePanels(mesh, groups, finishes) {
  const geometry=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
  const {position,normal}=geometry.attributes;
  const index=geometry.index;
  const count=index?index.count:position.count;
  const batches=new Map();
  const rule=mesh.parent.name==='steering_wheel'?'steering':specialPanels.get(mesh.name) ?? (cockpitMeshes.has(mesh.name) || mesh.parent.name==='steering_wheel' ? interiorPanels : bodyPanels);
  function addFace(panel, vertices, finish, plane) {
    const key = panel+'/'+finish;
    if(!batches.has(key)) batches.set(key,{panel,finish,positions:[],normals:[],uv:[]});
    const output = batches.get(key);
    for(let i=1;i<vertices.length-1;i++) {
      for(const vertex of [vertices[0],vertices[i],vertices[i+1]]) {
        output.positions.push(...vertex.slice(0,3));
        output.normals.push(...vertex.slice(3));
        output.uv.push(...finishes.uvFor(finish,vertex,plane));
      }
    }
  }
  for(let i=0;i<count;i+=3) {
    const triangle = [i,i+1,i+2].map(offset=>{
      const v = index?index.getX(offset):offset;
      return [position.getX(v),position.getY(v),position.getZ(v),normal.getX(v),normal.getY(v),normal.getZ(v)];
    });
    const mean = component => (triangle[0][component]+triangle[1][component]+triangle[2][component])/3;
    const finish = finishes.finishFor(mesh,mean(0),mean(1),mean(2));
    const [nx,ny,nz] = [3,4,5].map(component=>Math.abs(mean(component)));
    const plane = ny>=nx && ny>=nz ? [0,2] : nx>=nz ? [2,1] : [0,1];
    if(finish.startsWith('mirror:')) {
      if(mean(5)<0) addFace(finishes.mirrorPlanes[finish.split(':')[1]].part,triangle,finish,plane);
    } else {
      partition(triangle,rule,(panel,vertices)=>addFace(panel,vertices,finish,plane));
    }
  }
  geometry.dispose();
  for(const {panel,finish,positions,normals,uv} of batches.values()) {
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
    geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    groups[panel].add(finishes.meshFor(finish,geometry,mesh.material));
  }
}

export async function createCar() {
  const draco=new DRACOLoader();
  // The model is Draco-compressed. Use the bundled WebAssembly decoder and a single worker.
  draco.setDecoderPath(asset('draco/gltf/')).setDecoderConfig({type:'wasm'}).setWorkerLimit(1);
  const loader=new GLTFLoader().setDRACOLoader(draco);
  let model;
  try {
    model=(await loader.loadAsync(asset('ferrari.glb'))).scene;
  } finally {
    draco.dispose();
  }
  model.rotation.y=Math.PI;
  model.updateMatrixWorld(true);

  const steeringWheel=model.getObjectByName('steering_wheel');
  const driverX=steeringWheel.getWorldPosition(new T.Vector3()).x;
  const groups=Object.fromEntries(layout.map(([name])=>[name,new T.Group()]));
  groups.steering=new T.Group();
  const {detailTire,detailRotor}=createHardware();
  const finishes=createFinishes(model);
  model.traverse(node=>{
    if(!node.isMesh) return;
    tuneFinish(node);
    if(node.parent.name==='steering_wheel') {
      separatePanels(node,groups,finishes);
    } else if(groups[node.parent.name]) {
      const component=node.clone(false);
      node.matrixWorld.decompose(component.position,component.quaternion,component.scale);
      if(node.name.startsWith('tire')) detailTire(component);
      if(node.name.startsWith('centre')) finishes.wheelCenter(component);
      if(node.name.startsWith('brake')) {
        const rotor=groups['brake_'+node.parent.name];
        rotor.add(component,detailRotor(component));
      } else {
        groups[node.parent.name].add(component);
      }
    } else {
      separatePanels(node,groups,finishes);
    }
  });

  groups.floor.add(createUnderbody(finishes.undertray));
  groups.front.add(createSuspension(1.155));
  groups.rear.add(createSuspension(-1.496));
  groups.cockpit.add(finishes.instrumentScreens(driverX));
  const steering=mountSteering(groups.cockpit,groups.steering,steeringProfiles.ferrari);
  return {
    ...assembleGroups(groups,layout),
    seats:{driverX,eyeHeight:1.085,eyeDepth:-.263},
    steering,updateInstruments:finishes.updateInstruments,
    setMirrors:finishes.setMirrors
  };
}
