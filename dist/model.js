import * as T from './assets/three.module.js';
import { GLTFLoader } from './assets/GLTFLoader.js';
import { DRACOLoader } from './assets/DRACOLoader.js';
import { createHardware } from './hardware.js';

const asset = file => new URL('./assets/'+file,import.meta.url).href;

function tuneFinish(mesh) {
  const material=mesh.material;
  const name=material.name;
  if(name==='Body_Color') {
    mesh.material=new T.MeshPhysicalMaterial({
      color:0xbd100a,metalness:.45,roughness:.28,clearcoat:.84,clearcoatRoughness:.18,envMapIntensity:.63
    });
  } else if(name==='Glass_Gray' || name==='Projector_Glass') {
    mesh.material=new T.MeshPhysicalMaterial({
      color:name==='Glass_Gray'?0x424b50:0xc9cfd2,metalness:.24,
      roughness:.09,clearcoat:1,clearcoatRoughness:.07,transparent:true,
      opacity:name==='Glass_Gray'?.5:.34,depthWrite:false,envMapIntensity:.85
    });
  } else if(name==='Carbon_Fiber') {
    material.color.setHex(0x2c2b2b);
    material.roughness=.38;
    material.metalness=.35;
  } else if(name==='metal_chrome' || name==='metal_gray') {
    material.metalness=.76;
    material.roughness=.34;
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

// Split triangles at panel boundaries so moving panels have clean edges.
function split(axis, threshold, lower, upper) {
  return {axis,threshold,lower,upper};
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

function partition(vertices, rule, addFace) {
  if(typeof rule==='string') {
    addFace(rule,vertices);
    return;
  }
  const {axis,threshold,lower,upper}=rule;
  const below=vertices.map(vertex=>vertex[axis]<=threshold);
  if(below.every(Boolean)) {
    partition(vertices,lower,addFace);
  } else if(!below.some(Boolean)) {
    partition(vertices,upper,addFace);
  } else {
    const sides=[[],[]];
    for(let i=0;i<vertices.length;i++) {
      const j=(i+1)%vertices.length;
      const a=vertices[i], b=vertices[j];
      sides[below[i]?0:1].push(a);
      if(below[i]!==below[j]) {
        const fraction=(threshold-a[axis])/(b[axis]-a[axis]);
        const crossing=a.map((value,k)=>T.MathUtils.lerp(value,b[k],fraction));
        sides[0].push(crossing);
        sides[1].push(crossing);
      }
    }
    partition(sides[0],lower,addFace);
    partition(sides[1],upper,addFace);
  }
}

function separatePanels(mesh, groups) {
  const geometry=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
  const {position,normal}=geometry.attributes;
  const index=geometry.index;
  const count=index?index.count:position.count;
  const batches=new Map();
  const rule=specialPanels.get(mesh.name) ?? (cockpitMeshes.has(mesh.name) || mesh.parent.name==='steering' ? interiorPanels : bodyPanels);
  function addFace(panel,vertices) {
    if(!batches.has(panel)) batches.set(panel,{positions:[],normals:[]});
    const {positions,normals}=batches.get(panel);
    for(let i=1;i<vertices.length-1;i++) {
      for(const [x,y,z,nx,ny,nz] of [vertices[0],vertices[i],vertices[i+1]]) {
        positions.push(x,y,z);
        normals.push(nx,ny,nz);
      }
    }
  }
  for(let i=0;i<count;i+=3) {
    const triangle=[i,i+1,i+2].map(offset=>{
      const v=index?index.getX(offset):offset;
      return [position.getX(v),position.getY(v),position.getZ(v),normal.getX(v),normal.getY(v),normal.getZ(v)];
    });
    partition(triangle,rule,addFace);
  }
  geometry.dispose();
  for(const [name,{positions,normals}] of batches) {
    const panel=new T.BufferGeometry();
    panel.setAttribute('position',new T.Float32BufferAttribute(positions,3));
    panel.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
    groups[name].add(new T.Mesh(panel,mesh.material));
  }
}

const layout = [
  ['front',[-.094,.082],[-.08,-.31,-.025],.13,1.26],
  ['rear',[.274,-.235],[.08,2.65,-.075],.06,.97],
  ['cabin',[-.222,-.158],[.11,.31,-.07],.22,.79],
  ['floor',[.025,-.366],[.33,-.61,.05],0,.62],
  ['doorRight',[.031,.325],[.25,-.73,.23],.21,.86],
  ['doorLeft',[-.347,.092],[-.02,.53,-.15],.23,.77],
  ['wheel_fl',[.254,.245],[.08,-.15,.04],.32,1.25],
  ['wheel_fr',[.365,.162],[-.17,1.23,-.18],.28,1.02],
  ['wheel_rl',[.42,-.06],[-.13,.03,-.23],.34,.99],
  ['wheel_rr',[-.405,-.289],[.12,1.88,-.19],.3,.93],
  ['brake_wheel_fl',[.138,.21],[.04,-.27,.17],.19,1.05],
  ['brake_wheel_fr',[.43,.262],[-.035,1.35,-.23],.16,.78],
  ['brake_wheel_rl',[.315,.045],[.12,-.4,.34],.18,.98],
  ['brake_wheel_rr',[-.335,-.158],[.09,1.64,-.18],.17,.85],
  ['headlampLeft',[-.23,.171],[.07,1.09,-.06],.38,1.06],
  ['headlampRight',[-.199,.256],[.11,-.05,.29],.39,1.1],
  ['tailLeft',[.43,-.226],[.07,2.8,-.22],.42,1.12],
  ['tailRight',[.372,-.351],[.22,2.9,-.22],.42,1.15],
  ['windshield',[-.103,-.323],[.23,.58,.11],.4,.88],
  ['cockpit',[-.264,-.355],[.18,.46,-.14],.11,.67]
];

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

  const groups=Object.fromEntries(layout.map(([name])=>[name,new T.Group()]));
  const {detailTire,detailRotor}=createHardware();
  model.traverse(node=>{
    if(!node.isMesh) return;
    tuneFinish(node);
    if(groups[node.parent.name]) {
      const component=node.clone(false);
      node.matrixWorld.decompose(component.position,component.quaternion,component.scale);
      if(node.name.startsWith('tire')) detailTire(component);
      if(node.name.startsWith('brake')) {
        const rotor=groups['brake_'+node.parent.name];
        rotor.add(component,detailRotor(component));
      } else {
        groups[node.parent.name].add(component);
      }
    } else {
      separatePanels(node,groups);
    }
  });

  const rig=new T.Group();
  const parts=layout.filter(([name])=>groups[name].children.length>0).map(([name,position,rotation,delay,size])=>{
    const group=groups[name];
    const center=new T.Box3().setFromObject(group).getCenter(new T.Vector3());
    for(const child of group.children) child.position.sub(center);
    rig.add(group);
    return {name,group,center,position,rotation,delay,size};
  });
  return {rig,parts};
}
