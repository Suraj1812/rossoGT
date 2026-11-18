import * as T from './vendor/three.module.js';

// Merge stationary objects by material and neighbourhood, retaining frustum culling.
function mergeGeometry(objects) {
  const sizes=objects.map(object=>object.geometry.index?.count??object.geometry.attributes.position.count);
  const count=sizes.reduce((sum,value)=>sum+value,0);
  const geometry=new T.BufferGeometry();
  for(const [name,size] of [['position',3],['normal',3],['uv',2]]) {
    const values=new Float32Array(count*size);
    let offset=0;
    for(const object of objects) {
      const source=object.geometry.clone().applyMatrix4(object.matrixWorld);
      const attribute=source.getAttribute(name);
      const index=source.index;
      const length=index?.count??source.attributes.position.count;
      for(let i=0;i<length;i++) {
        const vertex=index?index.getX(i):i;
        for(let component=0;component<size;component++) values[offset++]=attribute?attribute.getComponent(vertex,component):0;
      }
      source.dispose();
    }
    geometry.setAttribute(name,new T.BufferAttribute(values,size));
  }
  geometry.computeBoundingSphere();
  return geometry;
}

export function batchPark(root,actors) {
  root.updateMatrixWorld(true);
  const dynamic=new Set();
  for(const actor of actors) actor.traverse(object=>{if(object.isMesh)dynamic.add(object);});
  const stationary=new Map();
  const moving=new Map();
  let original=0;
  root.traverse(object=>{
    if(!object.isMesh||object.isInstancedMesh||Array.isArray(object.material))return;
    const mat=object.material;
    if(mat.transparent||mat.isShaderMaterial)return;
    original++;
    if(dynamic.has(object)) {
      const key=object.geometry.type+JSON.stringify(object.geometry.parameters)+mat.type+mat.roughness+mat.metalness;
      if(!moving.has(key))moving.set(key,[]);
      moving.get(key).push(object);
    } else {
      const position=new T.Vector3().setFromMatrixPosition(object.matrixWorld);
      const key=[mat.uuid,Math.floor(position.x/40),Math.floor(position.z/40),object.castShadow].join(':');
      if(!stationary.has(key))stationary.set(key,[]);
      stationary.get(key).push(object);
    }
  });
  let stationaryBatches=0;
  for(const objects of stationary.values()) {
    if(objects.length<2){stationaryBatches++;continue;}
    const combined=new T.Mesh(mergeGeometry(objects),objects[0].material);
    combined.castShadow=objects[0].castShadow;combined.receiveShadow=true;
    root.add(combined);stationaryBatches++;
    for(const object of objects){object.removeFromParent();object.geometry.dispose();}
  }
  const instances=[];
  for(const objects of moving.values()) {
    const surface=objects[0].material.clone();surface.color.set(0xffffff);
    const batch=new T.InstancedMesh(objects[0].geometry,surface,objects.length);
    batch.instanceMatrix.setUsage(T.DynamicDrawUsage);
    batch.castShadow=true;batch.receiveShadow=true;
    // Moving pedestrians range around the track; per-batch bounds are updated below.
    batch.frustumCulled=false;
    objects.forEach((object,index)=>{object.visible=false;batch.setColorAt(index,object.material.color);});
    root.add(batch);instances.push({batch,objects});
  }
  function update() {
    for(const actor of actors)actor.updateMatrixWorld(true);
    for(const {batch,objects} of instances) {
      objects.forEach((object,index)=>batch.setMatrixAt(index,object.matrixWorld));
      batch.instanceMatrix.needsUpdate=true;
    }
  }
  update();
  return {update,stats:{original,batches:stationaryBatches+instances.length}};
}
