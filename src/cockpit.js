import * as T from './vendor/three.module.js';
import {bakeGeometry} from './parts.js';
import {driveSpecs} from './drive-specs.js';

export const steeringProfiles = {
  ferrari:{center:[.346,.799,.346],tilt:.36,radius:.133},
  bmw:{center:[.375,.905,.354],tilt:.41,radius:.166,meshes:['Object_10','Object_19'],min:[.178,.728,.253],max:[.568,1.093,.445]},
  lamborghini:{center:[.348,.686,.407],tilt:.38,radius:.145,meshes:['Interior_Interior_0'],min:[.175,.525,.325],max:[.520,.848,.497]},
  bugatti:{center:[.411,.767,.558],tilt:.31,radius:.139,meshes:['Object_21','Object_32'],min:[.23,.656,.50],max:[.59,.86,.639]}
};

export function mountSteering(cockpit, wheel, profile) {
  if (!wheel.children.length) return undefined;
  const pivot = new T.Vector3(...profile.center);
  for (const mesh of wheel.children) mesh.position.sub(pivot);
  wheel.position.copy(pivot);
  cockpit.add(wheel);
  const axis = new T.Vector3(0,-profile.tilt,1).normalize();
  return {wheel,axis,radius:profile.radius,pivot};
}

// The donor models combine the steering wheel and dashboard into one mesh.
// Use connected geometry to move the complete wheel without cutting the dash.
export function extractSteering(node, cockpit, wheel, profile) {
  if (!profile?.meshes?.includes(node.name)) return false;
  const geometry = bakeGeometry(node);
  const position = geometry.attributes.position;
  const index = geometry.index;
  const parent = Int32Array.from({length:position.count},(_,i)=>i);
  function root(i) {
    while (parent[i]!==i) {
      parent[i]=parent[parent[i]];
      i=parent[i];
    }
    return i;
  }
  const welded = new Map();
  for(let i=0;i<position.count;i++) {
    const key=[position.getX(i),position.getY(i),position.getZ(i)].map(value=>Math.round(value*1e5)).join(',');
    const match=welded.get(key);
    if(match===undefined) welded.set(key,i);
    else parent[root(i)]=root(match);
  }
  const count=index?.count??position.count;
  const vertex=i=>index?index.getX(i):i;
  for(let i=0;i<count;i+=3) {
    const first=root(vertex(i));
    parent[root(vertex(i+1))]=first;
    parent[root(vertex(i+2))]=first;
  }
  const outside=new Set();
  const bounds=new T.Box3(new T.Vector3(...profile.min),new T.Vector3(...profile.max));
  const point=new T.Vector3();
  for(let i=0;i<position.count;i++) {
    if(!bounds.containsPoint(point.fromBufferAttribute(position,i)))outside.add(root(i));
  }
  const moving=[],fixed=[];
  for(let i=0;i<count;i+=3) {
    const triangle=outside.has(root(vertex(i)))?fixed:moving;
    triangle.push(vertex(i),vertex(i+1),vertex(i+2));
  }
  for(const [group,indices] of [[cockpit,fixed],[wheel,moving]]) {
    if(!indices.length)continue;
    const piece=geometry.clone();
    piece.setIndex(indices);
    group.add(new T.Mesh(piece,node.material));
  }
  geometry.dispose();
  return true;
}

export function liveInstrument(width,height,paint) {
  const canvas=document.createElement('canvas');
  canvas.width=width;
  canvas.height=height;
  const ctx=canvas.getContext('2d');
  const map=new T.CanvasTexture(canvas);
  map.colorSpace=T.SRGBColorSpace;
  return {
    map,
    update(reading) {
      paint(ctx,canvas.width,canvas.height,reading);
      map.needsUpdate=true;
    }
  };
}

export function digitalCluster(node,id) {
  const lambo=id==='lamborghini';
  const bounds=new T.Box3(
    new T.Vector3(lambo?.173:-.19,lambo?.636:.816,0),
    new T.Vector3(lambo?.522:.545,lambo?.792:.996,0)
  );
  const maxRpm=driveSpecs[id].redline;
  const gauge=liveInstrument(768,384,(ctx,w,h,{speed,gear,revs})=>{
    const background=ctx.createLinearGradient(0,0,0,h);
    background.addColorStop(0,'#111c27');background.addColorStop(1,'#04090e');
    ctx.fillStyle=background;ctx.fillRect(0,0,w,h);
    const center=lambo?w/2:w*.265;
    const color=lambo?'#d4e7c4':'#89c5ff';
    ctx.textAlign='center';
    if(lambo) {
      const radius=157,y=230,start=Math.PI*1.03,end=Math.PI*1.97;
      for(let index=0;index<=32;index++) {
        const angle=start+(end-start)*index/32;
        const major=index%4===0;
        ctx.strokeStyle=index>=28?'#fb6756':index/32<=revs?color:'#516069';
        ctx.lineWidth=major?4:2;
        ctx.beginPath();
        ctx.moveTo(center+Math.cos(angle)*(radius-9),y+Math.sin(angle)*(radius-9));
        ctx.lineTo(center+Math.cos(angle)*(radius+(major?10:3)),y+Math.sin(angle)*(radius+(major?10:3)));
        ctx.stroke();
        if(major) {
          ctx.fillStyle='#d7e1e5';ctx.font='bold 22px system-ui';
          ctx.fillText(String(index/4+1),center+Math.cos(angle)*132,y+Math.sin(angle)*132+7);
        }
      }
      const needle=start+(end-start)*revs;
      ctx.strokeStyle='#fc6753';ctx.lineWidth=6;ctx.beginPath();
      ctx.moveTo(center+Math.cos(needle)*76,y+Math.sin(needle)*76);
      ctx.lineTo(center+Math.cos(needle)*147,y+Math.sin(needle)*147);ctx.stroke();
    } else {
      ctx.lineJoin='bevel';
      for(const [index,x] of [47,90,133,176,219,262,305,348].entries()) {
        ctx.fillStyle=index/8<=revs?(index>=6?'#ef6353':'#6bade8'):'#32434f';
        const y=56+(7-index)*4;
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+37,y-4);ctx.lineTo(x+42,y+10);ctx.lineTo(x+4,y+14);ctx.fill();
      }
    }
    ctx.fillStyle='#eef4f7';ctx.textAlign='center';ctx.font='bold '+(lambo?100:122)+'px system-ui';
    ctx.fillText(String(speed),center,lambo?274:222);
    ctx.fillStyle=color;ctx.font='bold 31px system-ui';
    ctx.fillText('km/h',center,lambo?317:264);
    ctx.fillStyle='#edf3f6';ctx.font='bold 65px system-ui';
    ctx.fillText(gear,lambo?523:324,lambo?271:227);
    ctx.fillStyle='#a9bfd1';ctx.font='bold 28px monospace';
    ctx.fillText(Math.round(maxRpm*revs/100)*100+' RPM',lambo?center:w*.75,lambo?342:238);
  });
  gauge.update({speed:0,gear:'N',revs:.12});
  const geometry=node.geometry.clone();
  const position=geometry.attributes.position;
  const uv=new Float32Array(position.count*2);
  const vertex=new T.Vector3();
  for(let i=0;i<position.count;i++) {
    vertex.fromBufferAttribute(position,i).applyMatrix4(node.matrixWorld);
    uv[i*2]=T.MathUtils.clamp((bounds.max.x-vertex.x)/(bounds.max.x-bounds.min.x),0,1);
    uv[i*2+1]=T.MathUtils.clamp((vertex.y-bounds.min.y)/(bounds.max.y-bounds.min.y),0,1);
  }
  geometry.setAttribute('uv',new T.BufferAttribute(uv,2));
  node.geometry=geometry;
  node.material=new T.MeshBasicMaterial({map:gauge.map,side:node.material.side,toneMapped:false,polygonOffset:true,polygonOffsetFactor:-1});
  return gauge.update;
}
