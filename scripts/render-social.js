import * as T from '../src/vendor/three.module.js';
import {HDRLoader} from '../src/vendor/HDRLoader.js';
import {createCar} from '../src/model.js';
import {createBmw} from '../src/bmw.js';
import {createLamborghini,createBugatti} from '../src/supercars.js';
import {cars} from '../src/routes.js';

const width=1200,height=629;
const renderer=new T.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
renderer.setSize(width,height);renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;
const scene=new T.Scene();
const hdr=await new HDRLoader().loadAsync('/assets/studio.hdr');hdr.mapping=T.EquirectangularReflectionMapping;
scene.environment=hdr;scene.environmentIntensity=.75;
scene.add(new T.HemisphereLight(0xf6f7ff,0x91867b,.6));
for(const [position,color,intensity] of [[[1,5,5],0xfff1d8,2],[[-5,3,2],0xd5e8ff,1.1],[[3,5,-4],0xfff0d7,1.7]]) {
  const light=new T.DirectionalLight(color,intensity);light.position.set(...position);scene.add(light);
}
const camera=new T.PerspectiveCamera(32,width/height,.1,60);
const art=document.querySelector('canvas');const ctx=art.getContext('2d');
const bg=new Image();bg.src='/assets/social/studio-backdrop.jpg';await bg.decode();
const gradient=ctx.createLinearGradient(0,0,0,height);gradient.addColorStop(0,'#0b1016b0');gradient.addColorStop(1,'#141c2560');
const shade=document.createElement('canvas');shade.width=256;shade.height=128;
const shadowContext=shade.getContext('2d');
shadowContext.save();shadowContext.translate(128,64);shadowContext.scale(2,1);
const shadowGradient=shadowContext.createRadialGradient(0,0,13,0,0,63);
shadowGradient.addColorStop(0,'#08090bdc');shadowGradient.addColorStop(.6,'#08090b88');shadowGradient.addColorStop(1,'#08090b00');
shadowContext.fillStyle=shadowGradient;shadowContext.fillRect(-64,-64,128,128);shadowContext.restore();
const shadow=new T.Mesh(new T.PlaneGeometry(3.8,5.8),new T.MeshBasicMaterial({map:new T.CanvasTexture(shade),transparent:true,depthWrite:false}));
shadow.rotation.x=-Math.PI/2;scene.add(shadow);
const loads=[createCar,createBmw,createLamborghini,createBugatti];
const accents=['#fc746e','#78bce7','#c0d884','#6ac8f3'];
const renders=[];
function backdrop(){ctx.drawImage(bg,0,0,width,height);ctx.fillStyle=gradient;ctx.fillRect(0,0,width,height);}
function caption(brand,model,color) {
 ctx.fillStyle=color;ctx.fillRect(47,51,28,2);
 ctx.fillStyle='#f6f3eb';ctx.font='600 15px system-ui';ctx.fillText(brand,47,79);
 ctx.font='italic 800 48px Barlow, system-ui';ctx.fillText(model,44,128);
}
async function save(name) {
 const blob=await new Promise(resolve=>art.toBlob(resolve,'image/jpeg',.91));
 const response=await fetch('/save/'+name,{method:'POST',body:blob});if(!response.ok)throw Error(name+' could not be saved');
}
await document.fonts.load('italic 900 48px Barlow');
document.querySelector('button').disabled=false;
document.querySelector('button').onclick=async event=>{
 event.currentTarget.disabled=true;
 try{
 for(const [index,load] of loads.entries()){
  document.querySelector('p').textContent='Rendering '+cars[index].name;
  const car=await load();car.setMirrors?.(false);
  for(const part of car.parts){part.group.position.copy(part.center);part.group.quaternion.identity();part.group.scale.setScalar(1);}
  scene.add(car.rig);
  camera.position.set(index===2?-3.8:3.8,1.9,5.15);camera.lookAt(0,.75,0);
  renderer.render(scene,camera);
  const frame=document.createElement('canvas');frame.width=width;frame.height=height;frame.getContext('2d').drawImage(renderer.domElement,0,0);renders.push(frame);
  backdrop();ctx.drawImage(frame,72,84,1150,603);
  caption(cars[index].brand,['458 Spider','M4 Competition','Aventador SVJ','Chiron'][index],accents[index]);
  await save(cars[index].id);scene.remove(car.rig);
 }
 backdrop();
 for(const [index,frame] of renders.entries())ctx.drawImage(frame,48+(index%2)*552,97+Math.floor(index/2)*216,552,290);
 caption('THE GARAGE','Apex Drive','#a8bfd3');await save('collection');
 document.querySelector('p').textContent='Five model renders saved.';
 }catch(error){document.querySelector('p').textContent=String(error);document.querySelector('button').disabled=false;}
};
