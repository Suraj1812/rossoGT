import * as T from './vendor/three.module.js';
import {createRoadNetwork} from './road-network.js';

const box=new T.BoxGeometry(1,1,1);
const cylinder=new T.CylinderGeometry(1,1,1,10);
const surfaces=new Map();
const surface=(color,roughness=.8,metalness=0)=>{
 const key=[color,roughness,metalness].join();
 if(!surfaces.has(key))surfaces.set(key,new T.MeshStandardMaterial({color,roughness,metalness}));
 return surfaces.get(key);
};
function block(parent,size,position,mat) {
 const object=new T.Mesh(box.clone(),mat);object.scale.set(...size);object.position.set(...position);
 object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;
}
function pole(parent,x,y,z,height=8) {
 const mesh=new T.Mesh(cylinder.clone(),surface(0x424b50,.55,.5));mesh.scale.set(.075,height,.075);mesh.position.set(x,y+height/2,z);parent.add(mesh);return mesh;
}
function labelTexture(text,background='#174c36',foreground='#f2efe4',width=512) {
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=256;
 const ctx=canvas.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,width,256);
 ctx.strokeStyle=foreground;ctx.lineWidth=5;ctx.strokeRect(10,10,width-20,236);
 ctx.fillStyle=foreground;ctx.textAlign='center';ctx.font='600 45px system-ui';
 const lines=text.split('\n');lines.forEach((line,i)=>ctx.fillText(line,width/2,lines.length===1?145:92+i*82,width-45));
 const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;return map;
}
const signs=new Map();
function sign(parent,text,position,width=5,background) {
 const key=text+':'+background;
 if(!signs.has(key))signs.set(key,new T.MeshStandardMaterial({map:labelTexture(text,background),roughness:.8,side:T.DoubleSide}));
 const mat=signs.get(key);
 const face=block(parent,[width,width*.5,.08],position,mat);return face;
}
function asphaltStrip(parent,points,width,mat,height=.036,referenceLength=1) {
 const vertices=[],uv=[],indices=[];
 let travelled=0;
 points.forEach((p,i)=>{
  const d=points[Math.min(points.length-1,i+1)].clone().sub(points[Math.max(0,i-1)]).normalize();
  for(const side of [-1,1])vertices.push(p.x+d.z*side*width/2,height,p.z-d.x*side*width/2);
  if(i)travelled+=p.distanceTo(points[i-1]);
  uv.push(0,travelled/referenceLength,1,travelled/referenceLength);
  if(i<points.length-1){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}
 });
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();
 const mesh=new T.Mesh(g,mat);mesh.receiveShadow=true;parent.add(mesh);
}
let atlas;
function facade(region,seed) {
 if(!atlas){atlas=new T.TextureLoader().load('/assets/drive/regional-facades.jpg');atlas.colorSpace=T.SRGBColorSpace;atlas.anisotropy=4;}
 const map=atlas.clone();map.needsUpdate=true;
 const quadrant=({newyork:[0,.5],japan:[.5,.5],india:[0,0],germany:[.5,0]})[region];
 const material=new T.MeshStandardMaterial({map,color:[0xffffff,0xddd9d0,0xcbd0ce,0xeee7dd][seed%4],roughness:.88});
 material.onBeforeCompile=shader=>{
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
    vec2 facadeUv=fract(vMapUv)*0.495+vec2(${quadrant[0]+.0025},${quadrant[1]+.0025});
    diffuseColor*=texture2D(map,facadeUv);
  #endif`);
 };
 material.customProgramCacheKey=()=>region+'-facade';
 return material;
}

export function createRegionalWorld(root,route,profile,roadSurface,random) {
 const network=createRoadNetwork(route,profile),region=profile.region,urban=!!profile.urban;
 const obstacles=[],actors=[],signals=[],traffic=[],places=[],gates=[];
 const sidewalk=surface(0xaaa69b),kerb=surface(0xc2bbaa),paint=surface(0xe2ddd0),glass=surface(0x233844,.2,.35);
 for(const road of network.roads) {
  asphaltStrip(root,road.points,road.halfWidth*2,roadSurface,.036,route.getLength());
  // Small kerb margins, rather than barriers enclosing every street.
  if(urban)asphaltStrip(root,road.points,road.halfWidth*2+3,sidewalk,.018,route.getLength());
 }
 // Turnaround forecourts make finite route endings visible and navigable.
 for(const t of [0,1]) {
  const pad=new T.Mesh(new T.CircleGeometry(27,48),roadSurface);pad.rotation.x=-Math.PI/2;pad.position.copy(network.at(t,0));pad.position.y=.04;pad.receiveShadow=true;root.add(pad);
  const end=oriented(t,t===0?18:-18);
  sign(end,'ROUTE END\nTURN AROUND',[0,2,0],3.5,'#535b55').rotation.y=t===0?0:Math.PI;
 }
 const facades=Array.from({length:4},(_,i)=>facade(region,i));
 const length=route.getLength();
 const rotors=[];
 function oriented(t,offset) {
  const g=new T.Group(),p=network.at(t,offset),d=route.getTangentAt(t);
  g.position.copy(p);g.rotation.y=Math.atan2(d.x,d.z);root.add(g);return g;
 }
 function building(t,offset,width,depth,height,index) {
  const g=oriented(t,offset);
  const shell=block(g,[width,height,depth],[0,height/2,0],facades[index%4]);
  const uv=shell.geometry.attributes.uv;
  for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*width/10.4,uv.getY(i)*height/13.6);
  uv.needsUpdate=true;
  block(g,[width+.35,.45,depth+.35],[0,height,0],surface(0x676a68));
  block(g,[width,.75,depth+.7],[0,3.4,0],surface(region==='japan'?0x394b47:0x4e555b));
  const p=g.position;obstacles.push({x:p.x,z:p.z,r:Math.max(width,depth)*.58});
  if(region==='newyork'&&index%3===0) {
   block(g,[2,2.3,2],[0,height+1.4,0],surface(0x665e50));
   for(const x of [-.7,.7])pole(g,x,height,0,1.1);
   // Iron fire escapes interrupt the otherwise flat facade.
   for(let y=5;y<Math.min(height,30);y+=3.5) {
    block(g,[width*.65,.12,1.2],[0,y,-depth/2-.6],surface(0x303a3d,.6,.5));
    for(const x of [-width*.3,width*.3])pole(g,x,y,-depth/2-1,1);
   }
  }
  if(index%4===0) {
   const names=region==='newyork'?['DELI · COFFEE','WESTSIDE MARKET','PHARMACY']:region==='japan'?['喫茶 · COFFEE','ラーメン','コンビニ']:['ढाबा · DHABA','TYRE SERVICE','चाय · TEA'];
   const shop=sign(g,names[index%names.length],[-Math.sign(offset)*(width/2+.08),2.5,0],Math.min(depth-1,7),region==='japan'?'#a34135':'#3a574e');
   shop.rotation.y=-Math.sign(offset)*Math.PI/2;shop.scale.y=1.15;
  }
 }
 // Streets have blocks and varied setbacks. Highways move between villages,
 // services and farmland, rather than copying a skyline around a circuit.
 const stride=urban?(region==='newyork'?40:70):180;
 for(let distance=50,index=0;distance<length-60;distance+=stride,index++) {
  const t=distance/length;
  if(network.junctions.some(j=>Math.abs(j.distance-distance)<(urban?25:65)))continue;
  for(const side of [-1,1]) {
   if(urban) {
    const h=region==='newyork'?18+random()*65:7+random()*15;
    building(t,side*(29+random()*8),20+random()*10,22+random()*9,h,index);
    if(index%2===0)building(t,side*(145+random()*15),28,34,h*.8,index+1);
   } else if(region==='india'&&(index<12||index%9<5))building(t,side*(48+random()*12),12+random()*12,14,4+random()*6,index);
   else if(region==='germany'&&index%16===0)building(t,side*58,36,24,9,index);
  }
  if(region==='india'&&index%5===0) {
   const g=oriented(t,49);pole(g,0,0,0,9);
   block(g,[2.4,.10,.14],[0,8.8,0],surface(0x4b4940));
   // Utility wires along the service road, safely away from the carriageway.
   const wire=new T.Mesh(new T.CylinderGeometry(.012,.012,Math.min(stride*5,700),4),surface(0x292b2b));
   wire.rotation.x=Math.PI/2;wire.position.set(0,8.5,Math.min(stride*5,700)/2);g.add(wire);
  }
 }
 if(!urban)for(let distance=350,index=0;distance<length;distance+=550,index++) {
  for(const side of [-1,1]) {
   const field=oriented(distance/length,side*165);
   block(field,[180,.035,340],[0,.003,0],surface([0x66734d,0x8c885b,0x7b8550,0x92856a][index%4]));
  }
  if(region==='germany'&&index%5===0) {
   const turbine=oriented(distance/length,220);pole(turbine,0,0,0,42);
   const rotor=new T.Group();rotor.position.set(0,42,0);turbine.add(rotor);
   for(let blade=0;blade<3;blade++) {
    const arm=new T.Group();arm.rotation.z=blade*Math.PI*2/3;rotor.add(arm);
    block(arm,[.7,19,.22],[0,9,0],surface(0xc9cfca));
   }
   actors.push(rotor);rotors.push(rotor);
  }
 }
 for(const [index,junction] of network.junctions.entries()) {
  const g=oriented(junction.t,0);
  if(urban) {
   for(const side of [-1,1]) {
    // Zebra crossings are part of the road geometry and can be driven over.
    for(let x=-9;x<10;x+=1.5)block(g,[.75,.01,3],[x,.055,side*10],paint).castShadow=false;
    const signal=new T.Group();signal.position.set(side*12,0,side*13);g.add(signal);
    pole(signal,0,0,0,4.6);block(signal,[.38,1.05,.3],[0,4.2,0],surface(0x24292c));
    const lamps=[];
    for(let i=0;i<3;i++) {
     const lamp=new T.Mesh(new T.SphereGeometry(.115,8,6),new T.MeshBasicMaterial({color:[0xe55842,0xe7b355,0x65bb83][i],toneMapped:false}));
     lamp.position.set(0,4.52-i*.31,-.16);signal.add(lamp);lamps.push(lamp);
    }
    signals.push({lamps,index});
   }
   if(index%2===0) {
    const stop=oriented(junction.t+.002,17);
    block(stop,[1.5,2.5,4],[0,1.25,0],glass);block(stop,[2,.16,4.5],[0,2.6,0],kerb);
    pole(stop,-1,0,3,3);sign(stop,region==='japan'?'バス · BUS':'BUS STOP',[0,2.8,3],1.6,'#224e62');
   }
  } else {
   const gantry=oriented(junction.t-.003,0);
   for(const side of [-1,1])pole(gantry,side*12,0,0,7);
   block(gantry,[24,.22,.22],[0,7,0],surface(0x707b80,.5,.6));
   const names=region==='india'?['NH 44 · दिल्ली / DELHI','NH 44 · आगरा / AGRA','SERVICES · 500 m']:['A7 · HAMBURG','A7 · HANNOVER','RASTSTÄTTE · 500 m'];
   const board=sign(gantry,names[index%3]+'\n↑ THROUGH     ↗ EXIT',[0,6.1,0],10,region==='germany'?'#20517e':'#1f6047');
   board.rotation.y=Math.PI;
   // Service forecourt with pumps and a canopy, reachable via side roads.
   const service=oriented(junction.t,60);
   block(service,[32,.04,42],[0,0,0],surface(0x777b79));
   block(service,[20,.45,12],[0,4.5,0],surface(region==='india'?0x85704e:0x30506a));
   for(const x of [-7,7])for(const z of [-4,4])pole(service,x,0,z,4.4);
   for(const x of [-5,5])block(service,[1.1,1.8,.8],[x,.9,0],surface(0xd6d2bf));
   places.push({type:'fuel',position:service.position.clone(),radius:17});
  }
 }
 // Roadside delineators give highways a useful sense of speed and scale.
 if(!urban)for(let d=25;d<length;d+=50)for(const side of [-1,1]) {
  const g=oriented(d/length,side*12.1);
  block(g,[.13,1,.13],[0,.5,0],surface(0xe5e2d6));block(g,[.16,.2,.15],[0,.78,0],surface(0x303839));
 }
 const wheelSurface=surface(0x171c21,.98),bodyColors=[0xc1c6c4,0x465564,0x8c3a31,0x858b8e,0xe3d9b8];
 function vehicle(index,parked) {
  const g=new T.Group(),bus=region==='india'&&index%9===0,truck=!urban&&index%7===0;
  const taxi=region==='newyork'&&index%3===0;
  const body=surface(taxi?0xd8ac32:bus?0xa47c47:bodyColors[index%bodyColors.length],.34,.28);
  const width=bus||truck?2.3:1.8,front=bus?4:truck?3:2.2;
  block(g,[width,bus?1.8:.65,bus?8:truck?6:4.4],[0,bus?1.5:.73,0],body);
  block(g,[width*.9,bus?1:.65,bus?7:truck?1.8:2.45],[0,bus?2:1.3,truck?1.8:-.25],glass);
  if(truck)block(g,[2.3,2.5,4.1],[0,1.8,-1],surface(0x99968b,.9));
  block(g,[width,.12,.2],[0,.47,front],surface(0x3c4246,.45,.4));
  if(taxi)block(g,[.5,.18,.32],[0,1.83,-.2],surface(0xf2dc91));
  const wheels=[];
  for(const x of [-width*.51,width*.51])for(const z of [-(front-.65),front-.7]) {
   const wheel=new T.Mesh(new T.CylinderGeometry(.34,.34,.22,16),wheelSurface);wheel.rotation.z=Math.PI/2;wheel.position.set(x,.35,z);g.add(wheel);wheels.push(wheel);
   const hub=new T.Mesh(new T.CylinderGeometry(.19,.19,.235,12),surface(0x929b9e,.4,.6));hub.rotation.z=Math.PI/2;hub.position.copy(wheel.position);g.add(hub);
  }
  const brakeMaterial=new T.MeshStandardMaterial({color:0xa6342e,roughness:.38,emissive:0xdb3427,emissiveIntensity:.14});
  for(const x of [-width*.34,width*.34]) {
   block(g,[.32,.15,.03],[x,.78,front+.02],new T.MeshBasicMaterial({color:0xd6d5ba,toneMapped:false}));
   block(g,[.28,.15,.03],[x,.78,-(bus?4:truck?3:2.2)-.02],brakeMaterial);
  }
  root.add(g);
  if(parked){g.position.copy(parked.position);g.rotation.y=parked.heading;obstacles.push({x:g.position.x,z:g.position.z,r:1.9});return;}
  actors.push(g);
  const direction=index%3===0?-1:1;
  const lane=(profile.leftHand?1:-1)*direction*(index%2?6.2:2.6);
  const distance=profile.start*length+110+index*42;
  traffic.push({group:g,wheels,brakeMaterial,velocity:0,direction,lane,distance,speed:bus?14:truck?17:urban?10+index%4*2:23+index%6,halfLength:front});
 }
 for(let i=0;i<30;i++)vehicle(i);
 if(urban)for(const [i,j]of network.junctions.entries())if(i%3===0) {
  const lot=oriented(j.t,62);
  block(lot,[32,.025,34],[0,.018,0],roadSurface);
  for(let n=0;n<5;n++) {
   block(lot,[.09,.015,5],[n*5-10,.047,12],paint).castShadow=false;
   if(n!==2)vehicle(i+n,{position:network.at((j.distance+12)/length,52+n*5),heading:lot.rotation.y});
  }
  const point=network.at((j.distance-10)/length,62);
  places.push({type:'parking',position:point,radius:7});
  sign(lot,'P',[0,2,-15],1.8,'#234e76');
 }
 if(region==='india') {
  const t=profile.start+240/length;
  const toll=oriented(t,0);
  for(const x of [-12,12])pole(toll,x,0,0,5.3);
  block(toll,[26,.4,7],[0,5.4,0],surface(0x7d8c7d));
  sign(toll,'FASTag · टोल PLAZA',[0,6,0],10,'#295f45').rotation.y=Math.PI;
  for(const lane of [-6.2,-2.6,2.6,6.2]) {
   block(toll,[.8,2.3,2],[lane-2,1.15,0],surface(0x8b9489));
   const arm=new T.Group();arm.position.set(lane-2,1.15,-2);toll.add(arm);
   block(arm,[3.7,.09,.1],[1.85,0,0],surface(0xe1cfad));
   for(let n=0;n<4;n++)block(arm,[.30,.105,.11],[n*.85+.4,0,0],surface(0xba4b3a));
   actors.push(arm);gates.push({arm,position:network.at(t,lane),angle:0});
  }
 }
 // Fill stations on the city outskirts without obstructing their cross streets.
 if(urban) {
  const j=network.junctions[3],g=oriented(j.t,-62);
  block(g,[28,.025,30],[0,.02,0],roadSurface);block(g,[16,.4,10],[0,4.3,0],surface(0x47685c));
  for(const x of [-6,6])pole(g,x,0,0,4.1);
  for(const x of [-4,4])block(g,[.8,1.6,.7],[x,.8,0],surface(0xcec7b6));
  sign(g,'FUEL',[0,5,0],3,'#35594b');
  places.push({type:'fuel',position:g.position.clone(),radius:12});
 }

 let playerDistance=profile.start*length;
 const navSamples=route.getSpacedPoints(320);
 function signalRed(distance,time,direction){return urban&&network.junctions.some(j=>{const gap=(j.distance-distance)*direction;return gap>9&&gap<32&&(time+j.t*20)%26>16;});}
 function update(time,dt,player) {
  for(const rotor of rotors)rotor.rotation.z+=dt*.23;
  for(const gate of gates) {
   const open=Math.hypot(player.x-gate.position.x,player.z-gate.position.z)<70||traffic.some(car=>car.group.position.distanceTo(gate.position)<40);
   gate.angle=T.MathUtils.lerp(gate.angle,open?1.5:0,1-Math.exp(-dt*5));gate.arm.rotation.z=gate.angle;
  }
  // Reuse traffic around the current neighbourhood; no ever-growing actors.
  // Nearest main-road sample is cheap at 60 Hz (and works while on side roads).
  let closest=Infinity;
  for(let i=0;i<navSamples.length;i++) {
   const p=navSamples[i],d=(p.x-player.x)**2+(p.z-player.z)**2;
   if(d<closest){closest=d;playerDistance=i/(navSamples.length-1)*length;}
  }
  for(const car of traffic) {
   if(Math.abs(car.distance-playerDistance)>1350)car.distance=T.MathUtils.clamp(playerDistance+car.direction*(300+random()*800),30,length-30);
   let blocked=signalRed(car.distance,time,car.direction);
   const p=network.at(car.distance/length,car.lane),d=route.getTangentAt(car.distance/length).multiplyScalar(car.direction);
   const dx=player.x-p.x,dz=player.z-p.z;
   if(dx*d.x+dz*d.z>0&&dx*d.x+dz*d.z<12+car.velocity**2/10&&Math.abs(dx*d.z-dz*d.x)<2.8)blocked=true;
   for(const other of traffic)if(other!==car&&other.direction===car.direction&&other.lane===car.lane) {
    const gap=(other.distance-car.distance)*car.direction;if(gap>0&&gap<car.halfLength+other.halfLength+9+car.velocity**2/10)blocked=true;
   }
   if(car.direction===1&&length-car.distance<60||car.direction===-1&&car.distance<60)blocked=true;
   car.velocity=blocked?Math.max(0,car.velocity-dt*5):Math.min(car.speed,car.velocity+dt*2);
   const speed=car.velocity;
   car.brakeMaterial.emissiveIntensity=blocked?1.2:.14;
   car.distance=T.MathUtils.clamp(car.distance+speed*dt*car.direction,1,length-1);
   car.group.position.copy(network.at(car.distance/length,car.lane));
   const tangent=route.getTangentAt(car.distance/length);
   car.group.rotation.y=Math.atan2(tangent.x,tangent.z)+(car.direction<0?Math.PI:0);
   for(const wheel of car.wheels)wheel.rotateY(speed*dt/.34);
  }
  for(const signal of signals) {
   const phase=(time+network.junctions[signal.index].t*20)%26;
   const active=phase>16?0:phase>13?1:2;
   signal.lamps.forEach((lamp,i)=>lamp.material.color.setHex(i===active?[0xe55842,0xe7b355,0x65bb83][i]:0x242b2b));
  }
 }
 function collision(x,z) {
  if(obstacles.some(o=>(o.x-x)**2+(o.z-z)**2<(o.r+1)**2))return true;
  if(traffic.some(car=>{
   const p=car.group.position,d=car.group.rotation.y;
   const dx=x-p.x,dz=z-p.z;
   return Math.abs(dx*Math.cos(d)-dz*Math.sin(d))<1.65&&Math.abs(dx*Math.sin(d)+dz*Math.cos(d))<car.halfLength+1.6;
  }))return true;
  const b=network.bounds;
  return x<b.minX-120||x>b.maxX+120||z<b.minZ-28||z>b.maxZ+28;
 }
 return {network,actors,update,collision,mapRoads:network.roads,
  occupied:(x,z)=>obstacles.some(o=>Math.hypot(o.x-x,o.z-z)<o.r+2),
  interaction:player=>places.find(place=>Math.hypot(place.position.x-player.x,place.position.z-player.z)<place.radius)
 };
}
