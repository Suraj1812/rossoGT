import * as T from './vendor/three.module.js';

const materials = new Map();

function treadMap(marking, heightMap) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  ctx.fillStyle = heightMap ? '#aaa' : '#4a4b4d';
  ctx.fillRect(0,0,width,512);
  const shade = (bump,color)=>heightMap?bump:color;
  let seed = 613733;
  for(let i=0;i<18000;i++) {
    seed = (Math.imul(seed,1664525)+1013904223)>>>0;
    const x = seed%width;
    const y = (seed>>>12)%512;
    ctx.fillStyle = seed%3===0 ? 'rgba(255,255,255,.055)' : 'rgba(0,0,0,.09)';
    ctx.fillRect(x,y,3,1);
  }
  const track = (y,bevel,channel)=>{
    ctx.fillStyle = shade('#808080','#383a3c');
    ctx.fillRect(0,y-bevel/2,width,bevel);
    ctx.fillStyle = shade('#3a3a3a','#252629');
    ctx.fillRect(0,y-channel/2,width,channel);
  };
  for(const y of [171,222,289,337]) track(y,11,7);
  for(const y of [22,34,103,114,398,410,478,490]) track(y,3,1);
  ctx.lineCap = 'round';

  function cut(points, breadth) {
    for(const [lineWidth,lineColor] of [[breadth+3,shade('#777','#393b3e')],[breadth,shade('#494949','#25272a')]]) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.beginPath();
      points.forEach(([x,y],index)=>index===0?ctx.moveTo(x,y):ctx.lineTo(x,y));
      ctx.stroke();
    }
  }
  for(let x=-64;x<=width+64;x+=64) {
    cut([[x,112],[x+13,139],[x+36,174],[x+35,200],[x+49,223]],5);
    cut([[x+26,291],[x+14,310],[x+17,339],[x+41,370],[x+51,402]],5);
    cut([[x+36,221],[x+41,241],[x+29,256]],3);
    cut([[x+61,290],[x+57,264],[x+46,252]],3);
    cut([[x+12,129],[x+23,159]],2);
    cut([[x+8,383],[x+3,363]],2);
  }

  function stamp(y,flip) {
    ctx.save();
    ctx.translate(0,y);
    if(flip) {ctx.translate(width,0);ctx.scale(-1,-1);}
    ctx.textBaseline = 'middle';
    const letters = shade('#dedede','#646668');
    ctx.fillStyle = letters;
    for(const x of [100,1124]) {
      ctx.font = '900 33px Arial';
      ctx.fillText(marking,x,0);
      ctx.font = '700 17px Arial';
      ctx.fillText('TUBELESS  •  RADIAL',x+385,-1);
      ctx.font = '700 14px monospace';
      ctx.fillText('OUTSIDE',x+675,10);
      for(let ticks=0;ticks<6;ticks++) {
        ctx.fillRect(x+802+ticks*7,-8,2,16);
      }
    }
    ctx.restore();
  }
  stamp(68,false);
  stamp(444,true);
  const map = new T.CanvasTexture(canvas);
  map.wrapS = T.RepeatWrapping;
  map.anisotropy = 8;
  if(!heightMap) map.colorSpace = T.SRGBColorSpace;
  return map;
}

function materialFor(marking) {
  if(!materials.has(marking)) {
    materials.set(marking,new T.MeshStandardMaterial({
      color:0xbbbdc2,metalness:0,roughness:.81,map:treadMap(marking,false),
      bumpMap:treadMap(marking,true),bumpScale:.012
    }));
  }
  return materials.get(marking);
}

// The profile keeps the reference rim fit and rounds the tyre shoulder into the tread.
const tyreProfile = [
  [-1,.784],[-1,.818],[-.996,.848],[-.98,.875],[-.958,.902],
  [-.902,.926],[-.825,.951],[-.715,.971],[-.575,.984],
  [-.42,.993],[-.24,.998],[0,1],[.24,.998],[.42,.993],
  [.575,.984],[.715,.971],[.825,.951],[.902,.926],[.958,.902],
  [.98,.875],[.996,.848],[1,.818],[1,.784]
];

export function createTyre(halfWidth,radius,marking,innerRadius=radius*.784) {
  const profile = tyreProfile.map(([axial,radial])=>new T.Vector2(
    T.MathUtils.lerp(innerRadius,radius,(radial-.784)/.216),axial*halfWidth
  ));
  const geometry = new T.LatheGeometry(profile,160);
  geometry.rotateZ(-Math.PI/2);
  const uv = geometry.attributes.uv;
  for(let index=0;index<uv.count;index++) {
    const ring = index%profile.length;
    const axial = tyreProfile[ring][0];
    const radial = tyreProfile[ring][1];
    const track = .5+axial*.315;
    const shoulder = Math.sign(axial)*(T.MathUtils.lerp(.48,.315,(radial-.784)/.216))+.5;
    const weight = T.MathUtils.smoothstep(Math.abs(axial),.72,1);
    uv.setY(index,T.MathUtils.lerp(track,shoulder,weight));
  }
  return new T.Mesh(geometry,materialFor(marking));
}

export function addTyres(mesh,groups,frontProfile,rearProfile) {
  const bounds = Object.fromEntries(['wheel_fl','wheel_fr','wheel_rl','wheel_rr'].map(name=>[name,new T.Box3()]));
  const vertices = mesh.geometry.attributes.position;
  const point = new T.Vector3();
  for(let index=0;index<vertices.count;index++) {
    point.fromBufferAttribute(vertices,index).applyMatrix4(mesh.matrixWorld);
    const axle = point.z>0?'f':'r';
    const side = point.x>0?'l':'r';
    bounds['wheel_'+axle+side].expandByPoint(point);
  }
  for(const [name,box] of Object.entries(bounds)) {
    const center = box.getCenter(new T.Vector3());
    const size = box.getSize(new T.Vector3());
    const front = name.startsWith('wheel_f');
    const {marking,innerRadius} = front ? frontProfile : rearProfile;
    const tyre = createTyre(size.x/2,Math.max(size.y,size.z)/2,marking,innerRadius);
    tyre.position.copy(center);
    groups[name].add(tyre);
  }
}

