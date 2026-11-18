import * as T from './vendor/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.module.js';
import { split,layout,assembleGroups,addModelMesh } from './parts.js';
import {extractSteering,mountSteering,steeringProfiles,digitalCluster} from './cockpit.js';
import {addTyres} from './tyres.js';

const pair = (left,right)=>split(0,0,left,right);
const wheel = split(2,0,pair('wheel_rr','wheel_rl'),pair('wheel_fr','wheel_fl'));
const brakes = split(2,0,pair('brake_wheel_rr','brake_wheel_rl'),pair('brake_wheel_fr','brake_wheel_fl'));
const body = split(2,-.91,'rear',split(2,1.03,
  split(1,.23,'floor',split(1,.88,pair('doorLeft','doorRight'),'cabin')),'front'));
const engine = ['engine',[.28,-.025],[.24,-.35,-.32],.12,.86];
const supercarLayout = [...layout,engine];

function lamboPart(node) {
  const {name} = node;
  if(name.startsWith('Headlights')) return pair('headlampLeft','headlampRight');
  if(name.startsWith('Taillights')) return pair('tailLeft','tailRight');
  if(name.startsWith('Tires') || name.startsWith('Wheels')) return wheel;
  if(name.startsWith('Brake')) return brakes;
  if(name.startsWith('Door') || name.startsWith('Inner_door')) return pair('doorLeft','doorRight');
  if(name.startsWith('Motor') || name.startsWith('EngineHood')) return 'engine';
  if(name.startsWith('Interior') || name.startsWith('Seam') || name.startsWith('Display')) return 'cockpit';
  if(name.includes('Window') && name!=='Window_base_Glossy_Black_0') return 'windshield';
  if(name.startsWith('Undercarriage')) return 'floor';
  if(name.startsWith('Trunk')) return 'front';
  return body;
}

function lamboFinish(material) {
  if(material.name==='Body') {
    return new T.MeshPhysicalMaterial({
      color:0x5e9026,metalness:.46,roughness:.26,clearcoat:.9,
      clearcoatRoughness:.12,side:material.side,envMapIntensity:1.1
    });
  }
  if(material.name==='Window_Glass') {
    return new T.MeshPhysicalMaterial({
      color:0x8c9aa0,metalness:.1,roughness:.13,opacity:.22,transparent:true,
      depthWrite:false,clearcoat:1,clearcoatRoughness:.08,side:material.side
    });
  }
  material.envMapIntensity = .88;
  if(material.transparent) material.depthWrite = false;
  return material;
}

async function loadSupercar(profile) {
  const asset = new URL('./assets/'+profile.file,import.meta.url);
  const model = (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(asset.href)).scene;
  const rotated = new T.Group();
  rotated.rotation.y = profile.yaw ?? 0;
  rotated.add(model);
  const bounds = new T.Box3().setFromObject(rotated,true);
  const center = bounds.getCenter(new T.Vector3());
  const scale = 4.79/(bounds.max.z-bounds.min.z);
  rotated.scale.setScalar(scale);
  rotated.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);
  rotated.updateMatrixWorld(true);

  const groups = Object.fromEntries(supercarLayout.map(([name])=>[name,new T.Group()]));
  const wheelGroup=new T.Group();
  const steeringProfile=steeringProfiles[profile.id];
  let updateInstruments;
  const finishes = new Map();
  model.traverse(node=>{
    if(!node.isMesh) return;
    if(profile.tyres?.(node,groups)) return;
    const rule = profile.part(node);
    if(!rule) return;
    const source = node.material;
    const key = profile.materialKey?.(node) ?? source;
    if(!finishes.has(key)) finishes.set(key,profile.finish(source,node));
    node.material = finishes.get(key);
    if(extractSteering(node,groups.cockpit,wheelGroup,steeringProfile))return;
    if(profile.id==='lamborghini'&&node.name==='Display_Display_0') {
      updateInstruments=digitalCluster(node,'lamborghini');
    }
    addModelMesh(node,groups,rule);
  });
  if(profile.addInterior)updateInstruments=await profile.addInterior(groups,wheelGroup);
  const steering=mountSteering(groups.cockpit,wheelGroup,steeringProfile);
  return {...assembleGroups(groups,supercarLayout),seats:profile.seats,steering,updateInstruments};
}

export function createLamborghini() {
  return loadSupercar({
    id:'lamborghini',file:'lamborghini.glb',part:lamboPart,finish:lamboFinish,
    seats:{driverX:.348,eyeHeight:.915,eyeDepth:-.035}
  });
}

function bugattiPart(node) {
  const material = node.material.name;
  const parent = node.parent.name;
  if(parent.startsWith('mycar-wheelbrake') || material==='Wheel Brake Disk.007') return brakes;
  if(parent.startsWith('mycar-wheel')) return wheel;
  if(material==='Window Glass') return 'windshield';
  if(material==='Engine' || material==='Material.008') return 'engine';
  if(['Plane035','Plane036','Cube','Mesh_36','Mesh_37','Mesh_38'].includes(node.name)) return pair('headlampLeft','headlampRight');
  if(['Plane040','Plane044'].includes(node.name)) return pair('tailLeft','tailRight');
  if(material.includes('second body color door') || node.name==='Plane066') return pair('doorLeft','doorRight');
  if(material==='UnderBody') return 'floor';
  // Registration plates and the donor's duplicate rear cabin wall are omitted.
  if(/plate|Number plate/i.test(material) || node.name==='Plane017') return undefined;
  return body;
}

function dialMap() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const c = 256;
  const gradient = ctx.createRadialGradient(c,c,20,c,c,255);
  gradient.addColorStop(0,'#151e2c');
  gradient.addColorStop(1,'#090c12');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,512,512);
  ctx.strokeStyle = '#8eaac8';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(c,c,225,Math.PI*.77,Math.PI*2.23);
  ctx.stroke();
  for(let index=0;index<=50;index++) {
    const angle = Math.PI*(.77+1.46*index/50);
    const major = index%5===0;
    ctx.lineWidth = major?5:2;
    ctx.beginPath();
    ctx.moveTo(c+Math.cos(angle)*221,c+Math.sin(angle)*221);
    const radius = major?194:207;
    ctx.lineTo(c+Math.cos(angle)*radius,c+Math.sin(angle)*radius);
    ctx.stroke();
    if(major) {
      ctx.font='22px Arial';
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      ctx.fillStyle='#d4e1ea';
      ctx.fillText(index*10,c+Math.cos(angle)*171,c+Math.sin(angle)*171);
    }
  }
  ctx.fillStyle='#879eae';
  ctx.font='20px Arial';
  ctx.fillText('km/h',c,c+72);
  const background=ctx.getImageData(0,0,512,512);
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  const update=({speed,gear})=>{
    ctx.putImageData(background,0,0);
    const angle=Math.PI*(.77+1.46*Math.min(1,speed/500));
    ctx.strokeStyle='#c54334';ctx.lineWidth=6;
    ctx.beginPath();ctx.moveTo(c,c);ctx.lineTo(c+Math.cos(angle)*188,c+Math.sin(angle)*188);ctx.stroke();
    ctx.fillStyle='#eee';ctx.font='bold 34px monospace';ctx.fillText(String(speed),c,c+107);
    ctx.fillStyle='#94a9c2';ctx.font='bold 30px monospace';ctx.fillText(gear,c,c-70);
    texture.needsUpdate=true;
  };
  update({speed:0,gear:'N'});
  return {texture,update};
}

function bugattiDetail(node) {
  if(node.name!=='Object_9') return;
  const geometry = node.geometry.clone();
  const position = geometry.attributes.position;
  const uv = new Float32Array(position.count*2);
  const world = new T.Vector3();
  for(let index=0;index<position.count;index++) {
    world.fromBufferAttribute(position,index).applyMatrix4(node.matrixWorld);
    uv[index*2] = (.471-world.x)/.12;
    uv[index*2+1] = (world.y-.775)/.118;
  }
  geometry.setAttribute('uv',new T.BufferAttribute(uv,2));
  node.geometry = geometry;
  const dial=dialMap();
  node.material=new T.MeshBasicMaterial({map:dial.texture,side:T.DoubleSide,toneMapped:false});
  dial.update.setLighting=night=>node.material.color.setScalar(night?.58:1);
  return dial.update;
}

function bugattiFinish(material) {
  const {name} = material;
  material.envMapIntensity = .92;
  if(name==='Window Glass') {
    return new T.MeshPhysicalMaterial({
      color:0x9aadb8,metalness:.08,roughness:.10,opacity:.18,transparent:true,
      depthWrite:false,clearcoat:1,clearcoatRoughness:.07,side:T.DoubleSide
    });
  }
  if(name==='Material.002') {
    return new T.MeshPhysicalMaterial({
      color:0xc00810,roughness:.2,metalness:.1,emissive:0xa00308,emissiveIntensity:.65,
      clearcoat:1,side:T.DoubleSide
    });
  }
  if(name==='Headlights plastic parts' || name==='Mesh') {
    material.color.setHex(name==='Mesh'?0x111318:0x0d1017);
    material.roughness = .43;
    material.metalness = .45;
  }
  if(material.transparent) material.depthWrite = false;
  return material;
}

function cabinSurface(material,node) {
  const velvet = new T.MeshStandardMaterial({
    color:0x26242a,metalness:.03,roughness:.87,side:T.DoubleSide
  });
  const leather = new T.MeshPhysicalMaterial({
    color:0x332726,metalness:0,roughness:.74,clearcoat:.12,side:T.DoubleSide
  });
  const chrome = new T.MeshStandardMaterial({
    color:0x79828c,metalness:.82,roughness:.28,side:T.DoubleSide
  });
  const carbon = new T.MeshPhysicalMaterial({
    color:0x1a2028,roughness:.35,metalness:.46,clearcoat:.3,side:T.DoubleSide
  });
  if(['Object_13','Object_21'].includes(node.name)) return leather;
  if(['Object_32','Object_33','Object_34'].includes(node.name)) return velvet;
  if(node.name==='Object_11') return chrome;
  return carbon;
}

async function addBugattiCabin(groups,wheelGroup) {
  const url = new URL('./assets/chiron-cabin.glb',import.meta.url);
  const cabin = (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(url.href)).scene;
  cabin.updateMatrixWorld(true);
  const materials = new Map();
  let updateInstruments;
  cabin.traverse(node=>{
    if(!node.isMesh) return;
    const source = node.material;
    const key = node.name;
    if(!materials.has(key)) materials.set(key,cabinSurface(source,node));
    node.material = materials.get(key);
    if(extractSteering(node,groups.cockpit,wheelGroup,steeringProfiles.bugatti))return;
    const update=bugattiDetail(node);
    if(update)updateInstruments=update;
    addModelMesh(node,groups,'cockpit');
  });
  return updateInstruments;
}

export function createBugatti({driving=false}={}) {
  return loadSupercar({
    id:'bugatti',file:driving?'chiron-drive.glb':'chiron-detailed.glb',part:bugattiPart,finish:bugattiFinish,
    addInterior:addBugattiCabin,
    seats:{driverX:.409,eyeHeight:1.045,eyeDepth:.05}
  });
}
