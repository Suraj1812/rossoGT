import * as T from './vendor/three.module.js';

// Split triangles at panel boundaries so moving panels have clean edges.
export function split(axis, threshold, lower, upper) {
  return {axis,threshold,lower,upper};
}
export function partition(vertices, rule, addFace) {
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

export const layout = [
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

export function assembleGroups(groups, partLayout) {
  const rig = new T.Group();
  const parts = partLayout.filter(([name])=>groups[name].children.length>0).map(([name,position,rotation,delay,size])=>{
    const group = groups[name];
    const center = new T.Box3().setFromObject(group).getCenter(new T.Vector3());
    for(const child of group.children) child.position.sub(center);
    rig.add(group);
    return {name,group,center,position,rotation,delay,size};
  });
  return {rig,parts};
}

export function bakeGeometry(mesh) {
  const geometry = mesh.geometry.clone();
  for(const name of ['position','normal']) {
    const source = geometry.getAttribute(name);
    const vertices = new Float32Array(source.count*3);
    for(let index=0;index<source.count;index++) {
      vertices.set([source.getX(index),source.getY(index),source.getZ(index)],index*3);
    }
    geometry.setAttribute(name,new T.BufferAttribute(vertices,3));
  }
  return geometry.applyMatrix4(mesh.matrixWorld);
}

export function addModelMesh(mesh, groups, rule) {
  const geometry = bakeGeometry(mesh);
  const surface = mesh.material;
  if(typeof rule==='string') {
    groups[rule].add(new T.Mesh(geometry,surface));
    return;
  }
  const {position,normal,uv} = geometry.attributes;
  const index = geometry.index;
  const count = index?.count ?? position.count;
  const panels = new Map();
  function pushFace(name,vertices) {
    if(!panels.has(name)) panels.set(name,{positions:[],normals:[],uvs:[]});
    const values = panels.get(name);
    for(let i=1;i<vertices.length-1;i++) {
      for(const [x,y,z,nx,ny,nz,u,v] of [vertices[0],vertices[i],vertices[i+1]]) {
        values.positions.push(x,y,z);
        values.normals.push(nx,ny,nz);
        values.uvs.push(u,v);
      }
    }
  }
  for(let i=0;i<count;i+=3) {
    const triangle = [i,i+1,i+2].map(offset=>{
      const v = index ? index.getX(offset) : offset;
      return [
        position.getX(v),position.getY(v),position.getZ(v),
        normal.getX(v),normal.getY(v),normal.getZ(v),uv?.getX(v) ?? 0,uv?.getY(v) ?? 0
      ];
    });
    partition(triangle,rule,pushFace);
  }
  geometry.dispose();
  for(const [name,values] of panels) {
    const panel = new T.BufferGeometry();
    panel.setAttribute('position',new T.Float32BufferAttribute(values.positions,3));
    panel.setAttribute('normal',new T.Float32BufferAttribute(values.normals,3));
    panel.setAttribute('uv',new T.Float32BufferAttribute(values.uvs,2));
    groups[name].add(new T.Mesh(panel,surface));
  }
}

