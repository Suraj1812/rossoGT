import * as T from './vendor/three.module.js';
import {GLTFLoader} from './vendor/GLTFLoader.js';

const files=new Map();
const jointAxis=new T.Vector3(0,0,1);

async function loadModel(side) {
  const file=side>0?'left':'right';
  if(!files.has(file)) {
    const url=new URL('./assets/driver/'+file+'.glb',import.meta.url);
    files.set(file,fetch(url).then(response=>{
      if(!response.ok)throw new Error('Driver hand unavailable');
      return response.arrayBuffer();
    }).catch(error=>{files.delete(file);throw error;}));
  }
  return (await new GLTFLoader().parseAsync(await files.get(file),'')).scene;
}

// The WebXR asset stores all joints in armature space. Rotate each downstream
// joint around its parent knuckle, including both its position and orientation.
function poseFinger(model,names,bends,side) {
  const joints=names.map(name=>model.getObjectByName(name));
  const rotation=new T.Quaternion();
  for(let i=0;i<bends.length;i++) {
    const pivot=joints[i].position;
    rotation.setFromAxisAngle(jointAxis,bends[i]*side);
    for(let j=i;j<joints.length;j++) {
      joints[j].position.sub(pivot).applyQuaternion(rotation).add(pivot);
      joints[j].quaternion.premultiply(rotation);
    }
  }
}

export async function loadDriverGrip(side,material) {
  const model=await loadModel(side);
  for(const [index,name] of ['index','middle','ring','pinky'].entries()) {
    const finger=name+'-finger-';
    poseFinger(model,['phalanx-proximal','phalanx-intermediate','phalanx-distal','tip'].map(segment=>finger+segment),
      [.77+index*.09,.86,.57],side);
  }
  poseFinger(model,['thumb-phalanx-proximal','thumb-phalanx-distal','thumb-tip'],[-.39,-.25],side);
  model.traverse(object=>{
    if(!object.isSkinnedMesh)return;
    object.material=material;
    object.frustumCulled=false;
  });
  const wrist=model.getObjectByName('wrist').position;
  model.scale.setScalar(.82);
  model.position.copy(wrist).multiplyScalar(-.82);
  const grip=new T.Group();
  grip.add(model);
  return grip;
}
