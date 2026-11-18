import * as T from './vendor/three.module.js';
import {HDRLoader} from './vendor/HDRLoader.js';
import {createCar} from './model.js';
import {createBmw} from './bmw.js';
import {createLamborghini,createBugatti} from './supercars.js';
import {createViewer} from './viewer.js';
import {createDrive} from './drive.js';
import {styleVehicleName} from './vehicle-name.js';
import {resolveRoute,carPath} from './routes.js';
import {updatePageMetadata} from './page-meta.js';

const screen = document.querySelector('.screen');
const journey = document.querySelector('.journey');
const canvas = document.querySelector('#car');
const title = document.querySelector('h1');
const status = document.querySelector('[role="status"]');
const garage = document.querySelector('.garage');
const choices = [...garage.querySelectorAll('a')];
const driveButton = document.querySelector('.test-drive');
choices.forEach((choice,index)=>styleVehicleName(choice.querySelector('span'),index));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

const clamp = value => T.MathUtils.clamp(value,0,1);
function smooth(value) {
  const x = clamp(value);
  return x*x*(3-2*x);
}

const vehicles = [
  {id:'ferrari',name:'Ferrari 458',load:createCar},
  {id:'bmw',name:'BMW M4 Competition',load:createBmw},
  {id:'lamborghini',name:'Lamborghini Aventador SVJ',load:createLamborghini},
  {id:'bugatti',name:'Bugatti Chiron',load:createBugatti}
];
let viewer;
let drive;
let selectVehicle;
let vehicleIndex = -1;
let assembly = 0;
let complete = false;
let dirty = true;
let active;
let routing=false;
let startDrive;
let appReady=false;
let pendingDrive=false;

function syncView() {
  screen.toggleAttribute('data-complete',complete && Boolean(active));
  title.hidden = !complete || !active || viewer.mode !== 'exterior' || drive?.running;
  driveButton.hidden = title.hidden;
  dirty = true;
}

function syncProgress() {
  if(drive?.running) return;
  const range = Math.max(1,journey.offsetHeight-screen.offsetHeight);
  const offset = Math.max(0,-journey.getBoundingClientRect().top);
  const progress = clamp(offset/range);
  const value = vehicleIndex < 0 ? 0 : clamp((progress-.235)/.72);
  complete = value === 1;
  assembly = reduceMotion.matches ? Math.floor(value*4)/4 : value;
  selectVehicle?.(vehicleIndex);
  viewer?.setComplete(complete && Boolean(active));
  syncView();
}

function readRoute(resetScroll) {
  const route=resolveRoute(location.href);
  if(route.mode==='not-found'){location.replace('/404.html');return;}
  routing=true;
  if(drive?.running)drive.end();
  routing=false;
  if(route.legacy)history.replaceState(null,'',route.path);
  updatePageMetadata(route);
  vehicleIndex=route.index;
  const catalog=vehicleIndex<0;
  screen.toggleAttribute('data-catalog',catalog);
  screen.dataset.model=catalog?'':vehicles[vehicleIndex].id;
  journey.toggleAttribute('data-selected',!catalog);
  canvas.tabIndex=catalog?-1:0;canvas.setAttribute('aria-hidden',String(catalog));
  if(catalog)canvas.setAttribute('aria-label','Four cars in the collection.');
  if(['explore','drive'].includes(route.mode)&&!catalog)window.scrollTo(0,journey.offsetHeight);
  else if(resetScroll||catalog)window.scrollTo(0,0);
  syncProgress();maybeStartDrive();
}
function choose(path,replace=false) {
  const url=new URL(path,location.href);
  if(url.href!==location.href)history[replace?'replaceState':'pushState'](null,'',url);
  readRoute(true);
}
function maybeStartDrive() {
  if(!appReady||!active||drive?.running||pendingDrive||resolveRoute(location.href).mode!=='drive')return;
  pendingDrive=true;
  Promise.resolve().then(()=>startDrive(true)).finally(()=>{pendingDrive=false;});
}
choices.forEach(choice=>choice.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.altKey||event.shiftKey)return;
  event.preventDefault();choose(choice.getAttribute('href'));canvas.focus({preventScroll:true});
}));
function openCatalog() {
  const previous = vehicleIndex;
  choose('/');
  choices[previous]?.focus({preventScroll:true});
}
window.addEventListener('scroll',syncProgress,{passive:true});
window.addEventListener('resize',syncProgress);
window.addEventListener('hashchange',()=>readRoute(true));
window.addEventListener('popstate',()=>readRoute(true));
window.addEventListener('keydown',event=>{
  if(!drive?.running && event.key==='Escape' && !event.defaultPrevented && vehicleIndex>=0 && viewer?.mode==='exterior') openCatalog();
});
reduceMotion.addEventListener('change',syncProgress);

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
async function init() {
  const renderer = new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
  renderer.setClearColor(0,0);
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.07;
  const scene = new T.Scene();
  drive = createDrive(renderer,scene,()=>{
    active.rig.visible=true;
    viewer.setVehicle(active,vehicles[vehicleIndex].name);
    if(!routing&&resolveRoute(location.href).mode==='drive')choose(carPath(vehicleIndex,'explore'),true);
    else syncProgress();
  });
  const drivingModels=new Map();
  startDrive=async(deeplink=false)=>{
    if(!active||!complete||drive.running||driveButton.disabled)return;
    if(!deeplink)drive.unlockAudio();
    const selected=vehicleIndex;
    const requestedPath=location.pathname;
    driveButton.disabled=true;
    driveButton.textContent='Preparing drive…';
    try {
      let vehicle=active;
      if(vehicles[selected].id==='bugatti'&&matchMedia('(pointer: coarse)').matches) {
        if(!drivingModels.has(selected))drivingModels.set(selected,createBugatti({driving:true}));
        vehicle=await drivingModels.get(selected);
        if(selected!==vehicleIndex||!complete||location.pathname!==requestedPath)return;
        if(!vehicle.rig.parent)scene.add(vehicle.rig);
      }
      drive.begin(vehicle,vehicles[selected]);
      const theme=new URL(location.href).searchParams.get('theme');if(theme)drive.setTheme(theme);
      if(deeplink)drive.pause();
      else {history.pushState(null,'',carPath(selected,'drive'));updatePageMetadata(resolveRoute(location.href));}
      if(vehicle!==active)active.rig.visible=false;
      viewer.setComplete(false);
      canvas.setAttribute('aria-label','Driving '+vehicles[selected].name+'. Use WASD or arrow keys to drive, Space to brake, H for horn, C for cabin and Escape to exit.');
      canvas.focus({preventScroll:true});syncView();
    } catch(error) {
      drivingModels.delete(selected);
      status.textContent='Drive could not start. Please try again.';
      console.error(error);
    } finally {
      driveButton.disabled=false;driveButton.innerHTML='Test drive <span aria-hidden="true">↗</span>';
    }
  };
  driveButton.addEventListener('click',()=>startDrive(false));
  const lighting = new HDRLoader().loadAsync(new URL('./assets/studio.hdr',import.meta.url)).catch(()=>null);
  const pending = new Map();
  const loaded = new Map();
  const previewCamera = new T.PerspectiveCamera(38,1,.05,50);
  let hovered = -1;
  choices.forEach((choice,index)=>{
    choice.addEventListener('pointerenter',()=>{hovered = index; dirty = true;});
    choice.addEventListener('pointerleave',()=>{hovered = -1; dirty = true;});
  });
  function loadVehicle(index) {
    if(!pending.has(index)) {
      const request = vehicles[index].load().then(model=>{
        model.rig.visible = false;
        scene.add(model.rig);
        loaded.set(index,model);
        if(index===vehicleIndex) syncProgress();
        dirty = true;
        return model;
      }).catch(error=>{
        pending.delete(index);
        throw error;
      });
      pending.set(index,request);
    }
    return pending.get(index);
  }

  viewer = createViewer(canvas,mode=>{
    active?.setMirrors?.(mode!=='exterior');
    syncView();
  },openCatalog);
  selectVehicle = index=>{
    if(active && (index<0 || active!==loaded.get(index))) {
      active.rig.visible = false;
      active.setMirrors?.(false);
      active = undefined;
    }
    if(index<0) return;
    const model = loaded.get(index);
    if(!model) {
      const name = vehicles[index].name;
      canvas.setAttribute('aria-label',name+' 3D model');
      status.textContent = 'Loading '+name+'.';
      loadVehicle(index).catch(error=>{
        if(index===vehicleIndex) status.textContent = name+' could not load. Reload to try again.';
        console.error(error);
      });
      return;
    }
    if(active===model){maybeStartDrive();return;}
    active = model;
    active.rig.visible = true;
    active.catalogReady = false;
    styleVehicleName(title,index);
    status.textContent = '';
    viewer.setVehicle(active,vehicles[index].name);
    maybeStartDrive();
  };
  readRoute(false);
  const initial = Math.max(vehicleIndex,0);
  await loadVehicle(initial);
  for(const [index,vehicle] of vehicles.entries()) {
    if(index===initial) continue;
    loadVehicle(index).catch(error=>{
      if(index===vehicleIndex) status.textContent = vehicle.name+' could not load. Reload to try again.';
      console.error(error);
    });
  }
  scene.environment = studioLighting(renderer).texture;
  lighting.then(texture=>{
    if(!texture) return;
    texture.mapping = T.EquirectangularReflectionMapping;
    scene.environment = texture;
    dirty = true;
  });
  scene.environmentIntensity = .62;
  scene.environmentRotation.y = -.9;
  scene.add(new T.HemisphereLight(0xfff7e8,0x575e76,.45));
  for(const [position,color,intensity] of [
    [[1,7,5],0xfff6ed,1.42],[[-3,3,1],0xdbe6ff,.72],[[2,5,-6],0xffede0,1.27],[[-4,-5,1],0xd3e3f4,.64]
  ]) {
    const light = new T.DirectionalLight(color,intensity);
    light.position.set(...position);
    scene.add(light);
  }
  const mobilePositions={
    front:[-.09,.078],rear:[.19,-.218],cabin:[-.255,-.171],floor:[.009,-.347],
    doorRight:[.067,.359],doorLeft:[-.363,.044],
    wheel_fl:[.233,.239],wheel_fr:[.36,.114],wheel_rl:[.33,-.09],wheel_rr:[-.305,-.294],
    brake_wheel_fl:[.111,.138],brake_wheel_fr:[.391,.326],
    brake_wheel_rl:[.35,.01],brake_wheel_rr:[-.346,-.123],
    headlampLeft:[-.274,.135],headlampRight:[-.087,.283],
    tailLeft:[.374,-.261],tailRight:[.254,-.321],
    windshield:[-.11,-.274],cockpit:[-.272,-.384],engine:[.19,.365]
  };
  const across = new T.Vector3();
  const up = new T.Vector3();
  const center = new T.Vector3(0,.62,0);
  const heroRotation = new T.Quaternion();
  const assembledRotation = new T.Quaternion();
  const euler = new T.Euler();
  const started = performance.now();
  let width = 1;
  let height = 1;
  let resized = true;
  let contextLost = false;
  let assembledModel;
  const observer = new ResizeObserver(()=>{resized = true; dirty = true;});
  observer.observe(canvas);
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();
    contextLost = true;
    status.textContent = '3D rendering paused.';
  });
  canvas.addEventListener('webglcontextrestored',()=>{
    contextLost = false;
    status.textContent = '';
    dirty = true;
  });

  function drawCatalog() {
    renderer.setScissorTest(false);
    renderer.setViewport(0,0,width,height);
    renderer.clear();
    renderer.setScissorTest(true);
    for(const [index,model] of loaded.entries()) {
      if(!model.catalogReady) {
        for(const part of model.parts) {
          part.group.position.copy(part.center);
          part.group.quaternion.identity();
          part.group.scale.setScalar(1);
        }
        model.catalogReady = true;
      }
      const box = choices[index].getBoundingClientRect();
      if(box.width===0 || box.height===0) continue;
      const aspect = box.width/box.height;
      const distance = Math.max(4.35,5.25/aspect)/(2*Math.tan(Math.PI*19/180));
      const yaw = .77 + (hovered === index ? .14 : 0);
      previewCamera.aspect = aspect;
      previewCamera.updateProjectionMatrix();
      previewCamera.position.set(Math.sin(yaw)*distance,.62+distance*.25,Math.cos(yaw)*distance);
      previewCamera.lookAt(0,.62,0);
      renderer.setViewport(box.left,height-box.bottom,box.width,box.height);
      renderer.setScissor(box.left,height-box.bottom,box.width,box.height);
      model.rig.visible = true;
      renderer.render(scene,previewCamera);
      model.rig.visible = false;
    }
    renderer.setScissorTest(false);
    renderer.setViewport(0,0,width,height);
  }

  function draw(now) {
    if(contextLost) return;
    const idle = drive.running || vehicleIndex>=0 && !reduceMotion.matches && assembly === 0;
    if(!dirty && !idle) return;
    dirty = false;
    if(resized) {
      resized = false;
      width = Math.max(1,canvas.clientWidth);
      height = Math.max(1,canvas.clientHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio,width<650 ? 1.65 : 1.85));
      renderer.setSize(width,height,false);
    }
    if(drive.running) {
      drive.frame(now,width,height);
      return;
    }
    if(vehicleIndex<0) {
      drawCatalog();
      assembledModel = undefined;
      return;
    }
    const compact = width < 720;
    const aspect = width / height;
    const verticalSize = Math.max(4.8,5.35/aspect);
    if(!active) {
      renderer.clear();
      return;
    }
    viewer.position(aspect,verticalSize);
    // Once joined, keep the car in world space while the camera orbits it.
    if(assembledModel!==active || !complete) {
      across.setFromMatrixColumn(viewer.camera.matrixWorld,0);
      up.setFromMatrixColumn(viewer.camera.matrixWorld,1);
      const t = (now-started)/1000;
      const horizontalSize = verticalSize*aspect;
      const launch = reduceMotion.matches ? 1 : smooth(t/1.1);
      for(const [index,part] of active.parts.entries()) {
        const fraction = smooth((assembly-part.delay*.45)/(.99-part.delay*.45));
        const [x,y] = compact ? mobilePositions[part.name] : part.position;
        const float = idle ? Math.sin(t*.92+index*1.17)*.042 : 0;
        part.group.position.copy(center)
          .addScaledVector(across,x*Math.min(horizontalSize,12)+(1-launch)*Math.sign(x)*.16)
          .addScaledVector(up,y*verticalSize+float)
          .lerp(part.center,fraction);
        const [pitch,yaw,roll] = part.rotation;
        euler.set(pitch,yaw+(idle ? Math.sin(t*.63+index)*.04 : 0),roll);
        part.group.quaternion.copy(heroRotation.setFromEuler(euler)).slerp(assembledRotation,fraction);
        const compactScale = compact ? Math.min(.92,width/476) : 1;
        part.group.scale.setScalar(T.MathUtils.lerp(part.size*compactScale*(.94+.06*launch),1,fraction));
      }
      assembledModel = complete ? active : undefined;
    }
    renderer.render(scene,viewer.camera);
  }

  function frame(now) {
    draw(now);
    requestAnimationFrame(frame);
  }
  // Reveal the title only after a successful first frame.
  syncProgress();
  draw(performance.now());
  syncView();
  requestAnimationFrame(frame);
  appReady=true;maybeStartDrive();
}

export async function start() {
  await init();
}
