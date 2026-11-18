import * as T from './vendor/three.module.js';

import {createTyre} from './tyres.js';

export function createHardware() {
  const holes=new T.MeshStandardMaterial({color:0x292a2b,metalness:.22,roughness:.73});
  const hub=new T.MeshStandardMaterial({color:0x6b6b6f,metalness:.8,roughness:.39});

  function detailTire(mesh) {
    mesh.geometry.computeBoundingBox();
    const size = mesh.geometry.boundingBox.getSize(new T.Vector3());
    const center = mesh.geometry.boundingBox.getCenter(new T.Vector3());
    const tyre = createTyre(size.x/2,Math.max(size.y,size.z)/2,'PERFORMANCE');
    tyre.geometry.translate(center.x,center.y,center.z);
    mesh.geometry = tyre.geometry;
    mesh.material = tyre.material;
  }

  function detailRotor(mesh) {
    mesh.geometry.computeBoundingBox();
    const bounds=mesh.geometry.boundingBox;
    const radius=(bounds.max.y-bounds.min.y)/2;
    const z=(bounds.min.z+bounds.max.z)/2;
    const y=(bounds.min.y+bounds.max.y)/2;
    const outerSide=mesh.position.x<0?-1:1;
    const x=outerSide<0?bounds.min.x:bounds.max.x;
    const group=new T.Group();
    group.position.copy(mesh.position);
    group.quaternion.copy(mesh.quaternion);
    group.scale.copy(mesh.scale);
    const center=new T.Mesh(new T.CylinderGeometry(radius*.55,radius*.55,.012,42),hub);
    center.position.set(x+outerSide*.004,y,z);
    center.rotation.z=Math.PI/2;
    group.add(center);
    const matrix=new T.Matrix4();
    const geometry=new T.SphereGeometry(radius*.022,8,5);
    geometry.scale(.16,1,1);
    const drillings=new T.InstancedMesh(geometry,holes,72);
    for(let i=0;i<72;i++) {
      const spoke=Math.floor(i/4)*Math.PI/9;
      const row=i%4;
      const angle=spoke+row*.031;
      const r=radius*(.67+row*.076);
      matrix.makeTranslation(x+outerSide*.003,y+Math.cos(angle)*r,z+Math.sin(angle)*r);
      drillings.setMatrixAt(i,matrix);
    }
    group.add(drillings);
    return group;
  }
  return {detailTire,detailRotor};
}
