import * as T from './vendor/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.module.js';
import { split,layout,assembleGroups,addModelMesh } from './parts.js';
import {extractSteering,mountSteering,steeringProfiles,digitalCluster} from './cockpit.js';
import {addTyres} from './tyres.js';

const bmwLayout = [
  ...layout.map(([name,position,rotation,delay,size])=>[
    name,position,rotation,delay,name==='cabin'?.72:size*.92
  ]),
  ['engine',[.28,-.025],[.24,-.35,-.32],.12,.86]
];
const sides = split(0,-.57,'doorLeft',split(0,.57,'cockpit','doorRight'));
const body = split(2,-1.14,'rear',split(2,1.03,
  split(1,.235,'floor',split(1,1.065,sides,'cabin')),'front'));
const axle = (front,rear)=>split(2,0,rear,front);
const leftRight = (left,right)=>split(0,0,left,right);
const wheels = axle(leftRight('wheel_fr','wheel_fl'),leftRight('wheel_rr','wheel_rl'));
const calipers = axle(leftRight('brake_wheel_fr','brake_wheel_fl'),leftRight('brake_wheel_rr','brake_wheel_rl'));
const lamps = axle(leftRight('headlampLeft','headlampRight'),leftRight('tailLeft','tailRight'));
const rules = {
  Meshesheadlight51Mtl:lamps,
  Meshesled111Mtl:lamps,
  Meshesredlight1Mtl:lamps,
  Mesheswindows1Mtl:'windshield',
  Meshesinterior71Mtl:'cockpit',
  Meshesinterior231Mtl:'cockpit',
  Caliper1Mtl:calipers,
  Meshesm8rim1Mtl:wheels,
  Meshesm8rim0011Mtl:wheels
};

function tuneMaterial(material) {
  if(material.name==='Meshesbody151Mtl') {
    return new T.MeshPhysicalMaterial({
      map:material.map,color:0x8fac4e,metalness:.42,roughness:.25,
      clearcoat:.85,clearcoatRoughness:.16,side:material.side
    });
  }
  if(material.name==='Mesheswindows1Mtl') {
    return new T.MeshPhysicalMaterial({
      color:0x607581,metalness:.08,roughness:.12,opacity:.25,transparent:true,
      depthWrite:false,clearcoat:1,clearcoatRoughness:.065,side:material.side
    });
  }
  if(material.transparent) material.depthWrite = false;
  material.envMapIntensity = .85;
  return material;
}

export async function createBmw() {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const asset = new URL('./assets/bmw-m4.glb',import.meta.url).href;
  const model = (await loader.loadAsync(asset)).scene;
  const bounds = new T.Box3().setFromObject(model,true);
  const center = bounds.getCenter(new T.Vector3());
  const scale = 4.79/(bounds.max.z-bounds.min.z);
  model.scale.setScalar(scale);
  model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);
  model.updateMatrixWorld(true);

  const groups = Object.fromEntries(bmwLayout.map(([name])=>[name,new T.Group()]));
  const wheelGroup=new T.Group();
  let updateInstruments;
  const materials = new Map();
  model.traverse(node=>{
    if(!node.isMesh) return;
    if(node.name==='Object_34') {
      addTyres(node,groups,{marking:'275/35 ZR19',innerRadius:.280},{marking:'285/30 ZR20',innerRadius:.288});
      return;
    }
    const source = node.material;
    if(!materials.has(source)) {
      const finish = tuneMaterial(source);
      finish.name = source.name;
      materials.set(source,finish);
    }
    node.material = materials.get(source);
    if(extractSteering(node,groups.cockpit,wheelGroup,steeringProfiles.bmw))return;
    if(node.name==='Object_15') {
      updateInstruments=digitalCluster(node,'bmw');
      addModelMesh(node,groups,'cockpit');
      return;
    }
    const rule = node.name==='Object_21' ? 'engine' : rules[source.name] ?? body;
    addModelMesh(node,groups,rule);
  });
  const steering=mountSteering(groups.cockpit,wheelGroup,steeringProfiles.bmw);
  return {
    steering,updateInstruments,
    ...assembleGroups(groups,bmwLayout),
    seats:{driverX:.335,eyeHeight:1.155,eyeDepth:-.255}
  };
}
