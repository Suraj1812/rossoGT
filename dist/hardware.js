import * as T from './assets/three.module.js';

function tireTextures() {
  const map=document.createElement('canvas');
  map.width=1024;
  map.height=256;
  const ctx=map.getContext('2d');
  // Across the texture, the tread is flanked by two separate sidewalls.
  ctx.fillStyle='#b4b4b4';
  ctx.fillRect(0,0,1024,256);
  for(const y of [62,96,128,160,194]) {
    ctx.fillStyle='#454545';
    ctx.fillRect(0,y-2,1024,4);
  }
  ctx.lineCap='round';
  for(let x=0;x<1024;x+=32) {
    for(const side of [-1,1]) {
      ctx.strokeStyle='#626262';
      ctx.lineWidth=3;
      ctx.beginPath();
      ctx.moveTo(x,128+side*7);
      ctx.lineTo(x+8,128+side*28);
      ctx.lineTo(x+4,128+side*48);
      ctx.lineTo(x+18,128+side*83);
      ctx.stroke();
    }
  }
  for(const y of [14,26,36,220,230,242]) {
    ctx.fillStyle='#7d7d7d';
    ctx.fillRect(0,y,1024,1.5);
  }
  ctx.fillStyle='#ececec';
  ctx.font='bold 12px monospace';
  for(const x of [40,550]) {
    ctx.fillText('ROSSO  •  SPORT',x,24);
    ctx.fillText('ROSSO  •  SPORT',x,240);
  }
  const texture=new T.CanvasTexture(map);
  texture.wrapS=T.RepeatWrapping;
  texture.anisotropy=4;
  return texture;
}

export function createHardware() {
  const texture=tireTextures();
  const tireMaterial=new T.MeshStandardMaterial({
    color:0x29292b,roughness:.87,metalness:0,map:texture,bumpMap:texture,bumpScale:.015
  });
  const holes=new T.MeshStandardMaterial({color:0x292a2b,metalness:.22,roughness:.73});
  const hub=new T.MeshStandardMaterial({color:0x6b6b6f,metalness:.8,roughness:.39});

  function detailTire(mesh) {
    const geometry=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
    const positions=geometry.attributes.position;
    const normals=geometry.attributes.normal;
    const uv=new Float32Array(positions.count*2);
    for(let i=0;i<positions.count;i+=3) {
      const around=[0,1,2].map(j=>Math.atan2(positions.getZ(i+j),positions.getY(i+j))/(2*Math.PI)+.5);
      const seam=Math.max(...around)-Math.min(...around)>.5;
      for(let j=0;j<3;j++) {
        const index=i+j;
        const x=positions.getX(index);
        const radius=Math.hypot(positions.getY(index),positions.getZ(index));
        const shoulder=Math.abs(normals.getX(index));
        const band=T.MathUtils.clamp(.5+x/.329,.17,.83);
        // Across the sidewalls, UV follows radius so the molded lettering reads concentrically.
        const face=.5+Math.sign(x)*T.MathUtils.lerp(.47,.33,T.MathUtils.clamp((radius-.278)/.077,0,1));
        uv[index*2]=around[j]+(seam&&around[j]<.5?1:0);
        uv[index*2+1]=T.MathUtils.lerp(band,face,shoulder**2);
      }
    }
    geometry.setAttribute('uv',new T.BufferAttribute(uv,2));
    mesh.geometry=geometry;
    mesh.material=tireMaterial;
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
