import * as T from './assets/three.module.js';
import {createCar} from './model.js';
import {HDRLoader} from './assets/HDRLoader.js';

const select = selector => document.querySelector(selector);
const screen = select('.screen');
const journey = select('.journey');
const canvas = select('#car');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const stageLabel = select('#stageLabel');
const stageView = select('#stageView');
const percent = select('#percent');
const next = select('.next');
const nextIcon = select('#nextIcon');
const zoomControls = select('.zoom-controls');
const zoomOut = select('#zoomOut');
const zoomIn = select('#zoomIn');

const chapters = [
  {label:'EXPLODED VIEW',view:'',next:'Start assembly',href:'#assembly',image:'Red supercar components floating in an exploded view'},
  {label:'ASSEMBLY',view:'',next:'See the car',href:'#reveal',image:'Body panels, lights, brakes, and wheels moving into position'},
  {label:'COMPLETE',view:'DRAG TO ROTATE',next:'Replay',href:'#exploded',image:'Completed red Ferrari 458. Use the arrow keys to rotate it, or plus and minus to zoom.'}
];
const clamp = value => T.MathUtils.clamp(value,0,1);
const smooth = value => {
  const x=clamp(value);
  return x*x*(3-2*x);
};
let stage=-1;
let assembly=0;
let dirty=true;
let view;
let angle=0;
let zoom=1;
const maximumZoom=1.75;
function setZoom(value) {
  zoom=T.MathUtils.clamp(value,1,maximumZoom);
  zoomOut.disabled=zoom===1;
  zoomIn.disabled=zoom===maximumZoom;
  dirty=true;
}
zoomOut.addEventListener('click',()=>setZoom(zoom-.25));
zoomIn.addEventListener('click',()=>setZoom(zoom+.25));
let activePointer=null;

function syncProgress() {
  const range=Math.max(1,journey.offsetHeight-screen.offsetHeight);
  const travel=clamp(-journey.getBoundingClientRect().top/range);
  const incoming=travel<.235?0:travel<.955?1:2;
  const value=clamp((travel-.235)/.72);
  assembly=reduceMotion.matches ? Math.floor(value*4+.001)/4 : value;
  if (incoming!==stage) {
    stage=incoming;
    const data=chapters[stage];
    const number=String(stage+1).padStart(2,'0');
    screen.dataset.stage=stage;
    stageLabel.textContent=number+' / '+data.label;
    stageView.textContent=data.view;
    next.href=data.href;
    next.setAttribute('aria-label',data.next);
    next.title=data.next;
    nextIcon.textContent=stage===2?'↺':'↓';
    canvas.tabIndex=stage===2&&view?0:-1;
    zoomControls.hidden=stage!==2||!view;
    canvas.setAttribute('aria-label',data.image);
    select('.assembly-title').setAttribute('aria-hidden',String(stage!==1));
    select('.reveal-title').setAttribute('aria-hidden',String(stage!==2));
  }
  if(stage!==2) {
    angle=0;
    if(zoom!==1) setZoom(1);
    activePointer=null;
  }
  percent.textContent=Math.round(value*100)+'%';
  dirty=true;
}
window.addEventListener('scroll',syncProgress,{passive:true});
window.addEventListener('resize',syncProgress);
reduceMotion.addEventListener('change',syncProgress);

next.addEventListener('click',event=>{
  if (event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
  const hash=next.hash;
  const target=select(hash);
  if (!target) return;
  event.preventDefault();
  if(location.hash!==hash) history.pushState(null,'',hash);
  target.scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth'});
});

function studioLighting(renderer) {
  const map=document.createElement('canvas');
  map.width=1024;
  map.height=512;
  const ctx=map.getContext('2d');
  const sky=ctx.createLinearGradient(0,0,0,512);
  for (const [position,color] of [[0,'#faf5ec'],[.23,'#bdb9b5'],[.43,'#797978'],[.49,'#303432'],[.56,'#555450'],[.75,'#8c857b'],[1,'#b4aca0']]) sky.addColorStop(position,color);
  ctx.fillStyle=sky;
  ctx.fillRect(0,0,1024,512);
  for (const [x,y,w,h,color] of [
    [55,82,329,77,'#fffaf0'],[489,65,315,107,'#fffdf7'],
    [887,130,82,128,'#f8f4eb'],[378,174,68,111,'#cbcdd1'],
    [68,202,224,14,'#eae8e3'],[564,227,220,15,'#eae9e4']
  ]) {
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);
  }
  const texture=new T.CanvasTexture(map);
  texture.mapping=T.EquirectangularReflectionMapping;
  texture.colorSpace=T.SRGBColorSpace;
  const generator=new T.PMREMGenerator(renderer);
  const environment=generator.fromEquirectangular(texture);
  texture.dispose();
  generator.dispose();
  return environment;
}
function shadowTexture() {
  const image=document.createElement('canvas');
  image.width=image.height=128;
  const ctx=image.getContext('2d');
  const shadow=ctx.createRadialGradient(64,64,0,64,64,63);
  shadow.addColorStop(0,'rgba(0,0,0,.77)');
  shadow.addColorStop(.43,'rgba(0,0,0,.55)');
  shadow.addColorStop(.73,'rgba(0,0,0,.17)');
  shadow.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=shadow;
  ctx.fillRect(0,0,128,128);
  const texture=new T.CanvasTexture(image);
  texture.colorSpace=T.SRGBColorSpace;
  return texture;
}

async function init() {
  const renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
  renderer.setClearColor(0,0);
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.16;
  const scene=new T.Scene();
  const lighting=new HDRLoader().loadAsync(new URL('./assets/studio.hdr',import.meta.url))
    .then(texture=>{
      texture.mapping=T.EquirectangularReflectionMapping;
      return texture;
    })
    .catch(()=>studioLighting(renderer).texture);
  const [{rig,parts},environment]=await Promise.all([createCar(),lighting]);
  scene.environment=environment;
  scene.environmentIntensity=.69;
  scene.environmentRotation.y=-.9;
  const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);
  camera.position.set(6.9,3.3,6.18);
  camera.lookAt(0,.66,0);
  camera.updateMatrixWorld();
  const across=new T.Vector3().setFromMatrixColumn(camera.matrixWorld,0);
  const up=new T.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
  const center=new T.Vector3(0,.66,0);
  const shadow=shadowTexture();
  scene.add(new T.HemisphereLight(0xfff7e8,0x666d80,.65));
  for (const [position,color,intensity] of [[[1,7,5],0xfff6ed,1.35],[[-3,3,1],0xdbe6ff,.94],[[2,5,-6],0xffede0,1.55]]) {
    const light=new T.DirectionalLight(color,intensity);
    light.position.set(...position);
    scene.add(light);
  }
  scene.add(rig);
  const floorMaterial=new T.MeshBasicMaterial({map:shadow,transparent:true,depthWrite:false,opacity:0});
  const floor=new T.Mesh(new T.PlaneGeometry(3.34,5.65),floorMaterial);
  floor.rotation.x=-Math.PI/2;
  floor.position.y=.021;
  rig.add(floor);
  const mobilePositions={
    front:[-.09,.078],rear:[.19,-.218],cabin:[-.255,-.171],floor:[.009,-.347],
    doorRight:[.067,.359],doorLeft:[-.363,.044],
    wheel_fl:[.233,.239],wheel_fr:[.36,.114],wheel_rl:[.33,-.09],wheel_rr:[-.305,-.294],
    brake_wheel_fl:[.111,.138],brake_wheel_fr:[.391,.326],
    brake_wheel_rl:[.35,.01],brake_wheel_rr:[-.346,-.123],
    headlampLeft:[-.274,.135],headlampRight:[-.087,.283],
    tailLeft:[.374,-.261],tailRight:[.254,-.321],
    windshield:[-.11,-.274],cockpit:[-.272,-.384]
  };
  const temporaryPosition=new T.Vector3();
  const heroRotation=new T.Quaternion();
  const bodyRotation=new T.Quaternion();
  const assembledRotation=new T.Quaternion();
  const euler=new T.Euler();
  const axis=new T.Vector3(0,1,0);
  const inverseRotation=new T.Quaternion();
  let width=0,height=0,aspect=1,verticalSize=4.9;
  let resized=true;
  const observer=new ResizeObserver(()=>{resized=true;dirty=true;});
  observer.observe(canvas);
  const started=performance.now();
  let rotation=0;
  let lens=1;
  let rendered=false;
  let contextLost=false;
  const status=select('.graphics-status');
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();
    contextLost=true;
    status.textContent='3D rendering paused. Waiting for graphics to recover…';
    status.hidden=false;
  });
  canvas.addEventListener('webglcontextrestored',()=>{
    contextLost=false;
    status.hidden=true;
    dirty=true;
  });

  function draw(now) {
    requestAnimationFrame(draw);
    if(contextLost) return;
    const idle=!reduceMotion.matches&&stage===0;
    const moving=Math.abs(angle-rotation)>.0008;
    const zooming=Math.abs(zoom-lens)>.0008;
    if(!dirty&&!idle&&!moving&&!zooming&&rendered) return;
    dirty=false;
    if(resized) {
      resized=false;
      width=Math.max(1,canvas.clientWidth);
      height=Math.max(1,canvas.clientHeight);
      aspect=width/height;
      verticalSize=Math.max(4.58,5.5/aspect);
      renderer.setPixelRatio(Math.min(devicePixelRatio,width<650?1.65:1.85));
      renderer.setSize(width,height,false);
      camera.left=-verticalSize*aspect/2;
      camera.right=verticalSize*aspect/2;
      camera.top=verticalSize/2;
      camera.bottom=-verticalSize/2;
      camera.updateProjectionMatrix();
    }
    const t=(now-started)/1000;
    const isCompact=width<650;
    const horizontalSize=verticalSize*aspect;
    const start=smooth(t/1.1);
    const completion=smooth(assembly);
    rotation=reduceMotion.matches||!moving?angle:T.MathUtils.lerp(rotation,angle,.15);
    const pose=T.MathUtils.lerp(-.08,.035,completion)+rotation*completion;
    bodyRotation.setFromAxisAngle(axis,pose);
    inverseRotation.copy(bodyRotation).invert();
    rig.quaternion.copy(bodyRotation);
    rig.position.copy(up).multiplyScalar(T.MathUtils.lerp(0,-verticalSize*(isCompact?.032:.075),completion));
    rig.scale.setScalar(T.MathUtils.lerp(1,isCompact?1.05:1.24,completion));
    lens=reduceMotion.matches||!zooming?zoom:T.MathUtils.lerp(lens,zoom,.22);
    if(camera.zoom!==lens) {
      camera.zoom=lens;
      camera.updateProjectionMatrix();
    }
    floorMaterial.opacity=completion*.82;
    parts.forEach((part,index)=>{
      const fraction=smooth((assembly-part.delay*.45)/(.88-part.delay*.45));
      const [x,y]=isCompact?mobilePositions[part.name]:part.position;
      const float=idle?Math.sin(t*.92+index*1.17)*.042:0;
      temporaryPosition.copy(center)
        .addScaledVector(across,x*Math.min(horizontalSize,12)+(reduceMotion.matches?0:(1-start)*(x<0?-.16:.16)))
        .addScaledVector(up,y*verticalSize+float);
      temporaryPosition.applyQuaternion(inverseRotation);
      part.group.position.copy(temporaryPosition).lerp(part.center,fraction);
      const [pitch,yaw,roll]=part.rotation;
      euler.set(pitch,yaw+(idle?Math.sin(t*.63+index)*.04:0),roll);
      heroRotation.setFromEuler(euler);
      part.group.quaternion.copy(heroRotation).slerp(assembledRotation,fraction);
      const compactScale=isCompact?Math.min(.92,width/476):1;
      const heroScale=part.size*compactScale*(reduceMotion.matches?1:.94+.06*start);
      part.group.scale.setScalar(T.MathUtils.lerp(heroScale,1,fraction));
    });
    renderer.render(scene,camera);
    rendered=true;
  }
  requestAnimationFrame(draw);
  return {renderer};
}

canvas.addEventListener('pointerdown',event=>{
  if(stage!==2||activePointer||event.button!==0||!view) return;
  activePointer={id:event.pointerId,x:event.clientX};
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener('pointermove',event=>{
  if(activePointer?.id!==event.pointerId) return;
  angle+=(event.clientX-activePointer.x)*.011;
  activePointer.x=event.clientX;
  dirty=true;
});
for(const type of ['pointerup','pointercancel','lostpointercapture']) {
  canvas.addEventListener(type,event=>{
    if(activePointer?.id===event.pointerId) activePointer=null;
  });
}
canvas.addEventListener('keydown',event=>{
  if(stage!==2||!view) return;
  if(['+','=','-'].includes(event.key)) {
    event.preventDefault();
    setZoom(zoom+(event.key==='-'?-.25:.25));
  } else if(event.key==='ArrowLeft'||event.key==='ArrowRight') {
    event.preventDefault();
    angle+=event.key==='ArrowRight'?.21:-.21;
    dirty=true;
  }
});

const status=select('.graphics-status');
syncProgress();
init().then(result=>{
  view=result;
  screen.classList.add('is-ready');
  status.hidden=true;
  canvas.tabIndex=stage===2?0:-1;
  zoomControls.hidden=stage!==2;
}).catch(error=>{
  status.textContent='The 3D scene could not load.';
  console.error(error);
});
