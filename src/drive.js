import * as T from './vendor/three.module.js';
import {createPark} from './park.js';
import {createDriveAudio} from './drive-audio.js';
import {stepVehicle} from './drive-physics.js';
import {driveSpecs,readPowertrain} from './drive-specs.js';
import {createDriver} from './driver.js';
import {createDriveSession,interactSession,stepDriveSession} from './drive-session.js';
import {createCabinLighting} from './cabin-lighting.js';
import {createDriveQuality} from './drive-quality.js';
import {createDriveMap} from './drive-map.js';
import {initDriveIcons,setDriveIcon} from './drive-icons.js';
import {driveRoutes,makeDriveRoute} from './drive-routes.js';

export function createDrive(renderer,scene,onExit) {
  const ui=document.querySelector('.drive-hud');
  initDriveIcons(ui);
  const speedText=ui.querySelector('[data-speed]');
  const gearText=ui.querySelector('[data-gear]');
  const revBar=ui.querySelector('[data-revs]');
  const modelText=ui.querySelector('[data-drive-model]');
  const pauseButton=ui.querySelector('[data-resume]');
  const audio=createDriveAudio();
  const camera=new T.PerspectiveCamera(49,1,.04,900);
  const keys=new Set();
  const touchControls=new Set();
  const forward=new T.Vector3();
  const lookTarget=new T.Vector3();
  let chaseHeading=0;
  let spec=driveSpecs.ferrari;
  let park;
  let model;
  let driver;
  let session=createDriveSession();
  const interactionButton=ui.querySelector('[data-interaction]');
  const fuelGauge=ui.querySelector('[data-fuel]');
  let cabinLighting;
  let readingLight=false;
  let instrumentTime=-Infinity;
  let running=false;
  let paused=false;
  let cabin=false;
  let night=false;
  let raining=false;
  let state;
  let elapsed=0;
  let previous;
  let saved;
  let environment;
  let quality;
  let minimap;
  const themes=Object.keys(driveRoutes).filter(id=>!driveRoutes[id].legacy);
  const worlds=new Map();
  let themeIndex=0;
  let renderWidth=0,renderHeight=0;
  let analogSteering=0;
  const previousPosition={x:0,z:0};
  const headlights=[];
  const brakeMaterials=new Map();
  const lampNames=new Set(['Taillight_Glass','Meshesredlight1Mtl','Red_Lights','Material.002']);
  let brakeLights=false;
  let pitch=0;
  let roll=0;
  let cabinSway=0;
  const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=128;
  const contactCtx=contactCanvas.getContext('2d');
  const contactFade=contactCtx.createRadialGradient(64,64,14,64,64,62);
  contactFade.addColorStop(0,'#0b1118aa');contactFade.addColorStop(1,'#0b111800');
  contactCtx.fillStyle=contactFade;contactCtx.fillRect(0,0,128,128);
  const contact=new T.Mesh(new T.PlaneGeometry(3.4,6.1),new T.MeshBasicMaterial({map:new T.CanvasTexture(contactCanvas),transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}));
  contact.rotation.x=-Math.PI/2;contact.position.y=.003;

  function clearControls() {
    analogSteering=0;
    const thumb=ui.querySelector('[data-steering-pad] span');
    if(thumb)thumb.style.transform='';
    keys.clear();
    touchControls.clear();
    audio.setHorn(false);
  }
  function input() {
    const held=(code,name)=>keys.has(code)||touchControls.has(name);
    return {
      forward:Number(held('KeyW','forward')||keys.has('ArrowUp')),
      reverse:Number(held('KeyS','reverse')||keys.has('ArrowDown')),
      left:Number(held('KeyA','left')||keys.has('ArrowLeft')),
      right:Number(held('KeyD','right')||keys.has('ArrowRight')),
      brake:held('Space','brake'),
      steer:analogSteering||Number(held('KeyA','left')||keys.has('ArrowLeft'))-Number(held('KeyD','right')||keys.has('ArrowRight'))
    };
  }

  function updateCabinLighting() {
    cabinLighting?.update({night,cabin,reading:readingLight});
    model?.updateInstruments?.setLighting?.(night);
    model?.setInstrumentLighting?.(night);
    ui.querySelector('[data-cabin-light]').setAttribute('aria-pressed',String(readingLight));
  }

  function updateWeather() {
    if(!park || !running) return;
    scene.fog=park.weather(night,raining);
    scene.background=night?new T.Color(0x07101f):null;
    ui.querySelector('[data-day]').setAttribute('aria-pressed',String(night));
    setDriveIcon(ui.querySelector('[data-day]'),night?'moon':'sun',night?'Switch to daylight':'Switch to night');
    ui.querySelector('[data-rain]').setAttribute('aria-pressed',String(raining));
    for(const light of headlights) light.visible=night||raining;
    renderer.toneMappingExposure=night?1.05:raining?.9:.84;
    scene.environmentIntensity=night?.12:raining?.24:.32;
    updateCabinLighting();
  }

  function reset() {
    session=createDriveSession();
    interactionButton.hidden=true;fuelGauge.value=1;
    state={...park.spawn(),speed:0,steering:0,wheelRotation:0,spec};
    previousPosition.x=state.x;
    previousPosition.z=state.z;
    model.rig.position.set(state.x,.025,state.z);
    model.rig.rotation.set(0,state.heading,0);
    model.rig.updateMatrixWorld(true);
    chaseHeading=state.heading;
    pitch=0;roll=0;
    setBrakeLights(false);
    positionCamera(0);
    park.update(elapsed,0,state,camera);
    minimap.update(performance.now(),state,true);
    updateCabin(0,{speed:0,gear:'N',revs:.12,brake:false},true);
    speedText.textContent='000';
    gearText.textContent='N';
    revBar.style.transform='scaleX(.12)';
    clearControls();
  }

  function begin(vehicle,{id,name}) {
    audio.start().catch(error=>console.warn('Audio unavailable',error));
    if(!park) {
      park=createPark(themes[themeIndex]);worlds.set(themes[themeIndex],park);
      park.root.visible=false;
      scene.add(park.root);
      quality=createDriveQuality(renderer,park,ui.querySelector('[data-quality]'));
      minimap=createDriveMap(ui.querySelector('[data-drive-map]'),park.route,park.mapRoads);
    }
    saved={
      background:scene.background,fog:scene.fog,environment:scene.environment,
      intensity:scene.environmentIntensity,exposure:renderer.toneMappingExposure,
      shadow:renderer.shadowMap.enabled,ratio:renderer.getPixelRatio(),size:renderer.getSize(new T.Vector2()),
      lights:scene.children.filter(child=>child.isLight).map(light=>[light,light.visible])
    };
    for(const [light] of saved.lights) light.visible=false;
    scene.environmentIntensity=.7;
    if(!environment) {
      const capture=new T.Scene();
      const captureSky=park.root.children.find(child=>child.isSky)?.clone();
      if(captureSky) capture.add(captureSky);
      const reflectionGround=new T.Mesh(
        new T.PlaneGeometry(4000,4000),
        new T.MeshBasicMaterial({color:0x494642})
      );
      reflectionGround.rotation.x=-Math.PI/2;
      reflectionGround.position.y=-1;
      capture.add(reflectionGround);
      const generator=new T.PMREMGenerator(renderer);
      environment=generator.fromScene(capture,.04,.1,2000);
      generator.dispose();
      reflectionGround.geometry.dispose();
      reflectionGround.material.dispose();
    }
    scene.environment=environment.texture;
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=T.PCFSoftShadowMap;
    model=vehicle;
    spec=driveSpecs[id];
    modelText.textContent=name;
    model.rig.visible=true;
    model.setMirrors?.(false);
    for(const part of model.parts) {
      part.group.position.copy(part.center);
      part.group.rotation.set(0,0,0);
      part.group.scale.setScalar(1);
    }
    model.rig.traverse(mesh=>{
      if(!mesh.isMesh) return;
      mesh.castShadow=!mesh.material.transparent&&!mesh.isReflector;
      mesh.receiveShadow=true;
      const material=mesh.material;
      if(material.emissive&&lampNames.has(material.name)&&!brakeMaterials.has(material)) {
        brakeMaterials.set(material,{color:material.emissive.clone(),intensity:material.emissiveIntensity});
      }
    });
    park.root.visible=true;
    running=true;paused=false;elapsed=0;previous=undefined;cabin=false;
    setDriveIcon(ui.querySelector('[data-camera]'),'cabin','Driver seat view');
    ui.hidden=false;
    pauseButton.hidden=true;
    document.body.setAttribute('data-driving','');
    driver=model.driver??=createDriver(model.seats,model.steering);
    if(driver)model.rig.add(driver.rig);
    cabinLighting=model.cabinLighting??=createCabinLighting(id);
    model.rig.add(cabinLighting.root);
    reset();
    if(headlights.length===0) {
      for(const x of [-.65,.65]) {
        const light=new T.SpotLight(0xd5e9ff,46,50,.36,.5,1.1);
        light.position.set(x,.64,1.8);
        light.target.position.set(x,.25,25);
        headlights.push(light);
      }
    }
    for(const light of headlights) model.rig.add(light,light.target);
    model.rig.add(contact);
    quality.reset();renderWidth=0;renderHeight=0;
    updateWeather();
  }

  function end() {
    if(!running) return;
    running=false;
    audio.stop();
    clearControls();
    ui.hidden=true;
    closePanels();
    document.body.removeAttribute('data-driving');
    model.setMirrors?.(false);
    driver?.rig.removeFromParent();
    cabinLighting?.root.removeFromParent();
    model.updateInstruments?.setLighting?.(false);
    model.setInstrumentLighting?.(false);
    updateCabin(0,{speed:0,gear:'N',revs:.12,brake:false},true);
    model.rig.visible=false;
    model.rig.position.set(0,0,0);
    model.rig.rotation.set(0,0,0);
    for(const part of model.parts) part.group.quaternion.identity();
    for(const light of headlights) {
      light.removeFromParent();
      light.target.removeFromParent();
    }
    contact.removeFromParent();
    setBrakeLights(false);
    brakeMaterials.clear();
    park.root.visible=false;
    scene.background=saved.background;
    scene.fog=saved.fog;
    scene.environment=saved.environment;
    scene.environmentIntensity=saved.intensity;
    renderer.toneMappingExposure=saved.exposure;
    renderer.shadowMap.enabled=saved.shadow;
    renderer.setPixelRatio(saved.ratio);
    renderer.setSize(renderWidth||saved.size.x,renderHeight||saved.size.y,false);
    for(const [light,visible] of saved.lights) light.visible=visible;
    onExit();
  }
  function toggleView() {
    cabin=!cabin;
    setDriveIcon(ui.querySelector('[data-camera]'),cabin?'chase':'cabin',cabin?'Chase camera':'Driver seat view');
    model.setMirrors?.(cabin,{driving:true});
    driver?.update(steeringTurn(),cabin);
    updateCabinLighting();
    instrumentTime=-Infinity;
    chaseHeading=state.heading;
    positionCamera(0);
  }
  function pause() {
    if(!running||paused) return;
    paused=true;clearControls();audio.stop();
    closePanels();pauseButton.hidden=false;
  }
  function resume() {
    if(!running) return;
    paused=false;previous=undefined;pauseButton.hidden=true;clearControls();document.querySelector('#car').focus({preventScroll:true});
    audio.start().catch(error=>console.warn('Audio unavailable',error));
  }
  const routeButton=ui.querySelector('[data-theme]'),settingsButton=ui.querySelector('[data-settings]');
  const routePanel=ui.querySelector('#drive-routes'),settingsPanel=ui.querySelector('#drive-settings');
  const routeOptions=ui.querySelector('[data-route-options]');
  function closePanels() {
    for(const [button,panel] of [[routeButton,routePanel],[settingsButton,settingsPanel]]) {
      panel.hidden=true;button.setAttribute('aria-expanded','false');
    }
  }
  function togglePanel(button,panel) {
    const open=panel.hidden;closePanels();
    if(open){panel.hidden=false;button.setAttribute('aria-expanded','true');clearControls();}
  }
  routeButton.addEventListener('click',()=>togglePanel(routeButton,routePanel));
  settingsButton.addEventListener('click',()=>togglePanel(settingsButton,settingsPanel));
  for(const name of themes) {
    const profile=driveRoutes[name];
    const option=document.createElement('button');option.type='button';option.dataset.routeOption=name;
    const glyph=document.createElement('span');
    const label=document.createElement('span');label.textContent=profile.name;
    const length=document.createElement('small');length.textContent=(makeDriveRoute(name).curve.getLength()/1000).toFixed(1)+' km';
    setDriveIcon(glyph,profile.icon,profile.name);glyph.setAttribute('aria-hidden','true');
    option.append(glyph,label,length);routeOptions.append(option);
    option.setAttribute('aria-pressed',String(name===themes[themeIndex]));
    option.addEventListener('click',()=>{
      setTheme(name);closePanels();routeButton.focus();
      const url=new URL(location.href);url.searchParams.set('theme',name);history.replaceState(null,'',url);
    });
  }
  function setTheme(name) {
    const index=themes.indexOf(name);if(!driveRoutes[name]||!running)return;
    if(!worlds.has(name)) {
      // Retain one detailed destination, not four complete GPU worlds.
      park.root.visible=false;park.dispose();worlds.clear();
      const world=createPark(name);world.root.visible=false;scene.add(world.root);worlds.set(name,world);
    }
    if(index>=0)themeIndex=index;park.root.visible=false;park=worlds.get(name);park.root.visible=true;
    quality.setPark(park);minimap=createDriveMap(ui.querySelector('[data-drive-map]'),park.route,park.mapRoads);
    routeButton.title=driveRoutes[name].name+' · choose route';
    for(const button of routeOptions.children)button.setAttribute('aria-pressed',String(button.dataset.routeOption===name));
    reset();elapsed=0;previous=undefined;updateWeather();
  }
  function interact(){interactSession(session,park.interaction?.(state),state.speed);}
  interactionButton.addEventListener('click',interact);
  ui.querySelector('[data-exit-drive]').addEventListener('click',end);
  ui.querySelector('[data-camera]').addEventListener('click',toggleView);
  ui.querySelector('[data-reset]').addEventListener('click',()=>{reset();audio.start().catch(error=>console.warn('Audio unavailable',error));});
  ui.querySelector('[data-cabin-light]').addEventListener('click',()=>{readingLight=!readingLight;updateCabinLighting();});
  ui.querySelector('[data-day]').addEventListener('click',()=>{night=!night;updateWeather();});
  ui.querySelector('[data-rain]').addEventListener('click',()=>{raining=!raining;updateWeather();});
  ui.querySelector('[data-sound]').addEventListener('click',event=>{
    const muted=audio.toggleMute();
    setDriveIcon(event.currentTarget,muted?'mute':'sound',muted?'Unmute sound':'Mute sound');
    event.currentTarget.setAttribute('aria-pressed',String(muted));
  });
  pauseButton.addEventListener('click',resume);
  ui.querySelector('[data-pause]').addEventListener('click',pause);

  const steeringPad=ui.querySelector('[data-steering-pad]');
  const steeringThumb=steeringPad.querySelector('span');
  function steerAt(event) {
    const box=steeringPad.getBoundingClientRect();
    const x=Math.max(-1,Math.min(1,(event.clientX-box.left-box.width/2)/(box.width*.36)));
    analogSteering=-x;steeringThumb.style.transform='translateX('+(x*30)+'px)';
  }
  steeringPad.addEventListener('pointerdown',event=>{event.preventDefault();steeringPad.setPointerCapture(event.pointerId);steerAt(event);});
  steeringPad.addEventListener('pointermove',event=>{if(steeringPad.hasPointerCapture(event.pointerId))steerAt(event);});
  for(const name of ['pointerup','pointercancel','lostpointercapture'])steeringPad.addEventListener(name,()=>{analogSteering=0;steeringThumb.style.transform='';});
  for(const button of ui.querySelectorAll('[data-control]')) {
    const control=button.dataset.control;
    const release=()=>{
      touchControls.delete(control);
      if(control==='horn') audio.setHorn(false);
    };
    button.addEventListener('pointerdown',event=>{
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      touchControls.add(control);
      if(control==='horn') audio.setHorn(true);
    });
    for(const name of ['pointerup','pointercancel','lostpointercapture']) button.addEventListener(name,release);
  }
  window.addEventListener('keydown',event=>{
    if(!running) return;
    if(!routePanel.hidden||!settingsPanel.hidden){if(event.code==='Escape'){event.preventDefault();closePanels();}return;}
    if(paused&&event.code!=='Escape')return;
    if(event.code==='Space'&&event.target instanceof HTMLButtonElement)return;
    const action={Escape:end,KeyC:toggleView,KeyR:reset,KeyE:interact};
    if(action[event.code]) {
      event.preventDefault();
      if(!event.repeat) action[event.code]();
      return;
    }
    if(!['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyH'].includes(event.code)) return;
    event.preventDefault();
    keys.add(event.code);
    if(event.code==='KeyH') audio.setHorn(true);
  });
  window.addEventListener('keyup',event=>{
    keys.delete(event.code);
    if(event.code==='KeyH') audio.setHorn(false);
  });
  window.addEventListener('blur',pause);
  document.addEventListener('visibilitychange',()=>{if(document.hidden) pause();});

  function setBrakeLights(braking) {
    if(brakeLights===braking)return;
    brakeLights=braking;
    for(const [material,original] of brakeMaterials) {
      material.emissive.copy(original.color);
      if(braking)material.emissive.setHex(0xd42615);
      material.emissiveIntensity=braking?2.5:original.intensity;
    }
  }

  function steeringTurn() {
    return -state.steering*4;
  }

  function updateCabin(turn,reading,force=false) {
    const steering=model.steering;
    steering?.wheel.quaternion.setFromAxisAngle(steering.axis,turn);
    driver?.update(turn,cabin);
    if(force||cabin&&elapsed-instrumentTime>=1/24) {
      instrumentTime=elapsed;
      model.updateInstruments?.(reading);
    }
  }

  function positionCamera(delta) {
    if(cabin) {
      const {driverX,eyeHeight,eyeDepth}=model.seats;
      camera.position.set(driverX,eyeHeight,eyeDepth).applyMatrix4(model.rig.matrixWorld);
      forward.set(Math.sin(state.heading),0,Math.cos(state.heading));
      lookTarget.copy(camera.position).addScaledVector(forward,15);
      const lateral=(state.yawRate??0)*state.speed;
      cabinSway=T.MathUtils.lerp(cabinSway,T.MathUtils.clamp(lateral*.003,-.035,.035),1-Math.exp(-delta*5));
      camera.position.addScaledVector(new T.Vector3(forward.z,0,-forward.x),cabinSway);
      lookTarget.y-=.7;
    } else {
      const difference=state.heading-chaseHeading;
      const shortestTurn=Math.atan2(Math.sin(difference),Math.cos(difference));
      chaseHeading+=shortestTurn*(1-Math.exp(-delta*8));
      forward.set(Math.sin(chaseHeading),0,Math.cos(chaseHeading));
      const pace=Math.min(1,Math.abs(state.speed)/(spec.topKmh/3.6));
      const portrait=camera.aspect<1;
      const distance=(portrait?7.4:5.9)+pace*.45;
      camera.position.copy(model.rig.position).addScaledVector(forward,-distance);
      camera.position.y+=2.35;
      // Track position directly so acceleration cannot leave the camera behind.
      lookTarget.copy(model.rig.position).addScaledVector(forward,4.2);
      lookTarget.y+=.88;
    }
    camera.lookAt(lookTarget);
  }

  function frame(now,width,height) {
    if(!running) return false;
    const delta=previous===undefined?0:Math.min((now-previous)/1000,.05);
    previous=now;
    if(width!==renderWidth||height!==renderHeight){renderWidth=width;renderHeight=height;quality.resize(width,height);}
    if(!paused)quality.sample(now);
    camera.aspect=width/height;
    camera.fov=T.MathUtils.lerp(camera.fov,cabin?61:49+Math.min(5,Math.abs(state.speed)*.045),1-Math.exp(-delta*3));
    camera.updateProjectionMatrix();
    if(!paused&&routePanel.hidden&&settingsPanel.hidden) {
      elapsed+=delta;
      const controls=input();
      const place=park.interaction?.(state);
      stepDriveSession(session,state.speed,controls.forward,delta,place);
      if(session.fuel<=0||session.parked||session.refueling){controls.forward=0;controls.reverse=0;controls.brake=session.parked||session.refueling;}
      interactionButton.hidden=!session.parked&&(!place||Math.abs(state.speed)>.6);
      if(!interactionButton.hidden) {
        const name=session.parked?'play':place.type==='fuel'?'fuel':'parking';
        const label=session.parked?'Leave parking · E':session.refueling?'Stop refueling · E':place.type==='fuel'?'Refuel · E':'Park car · E';
        if(interactionButton.title!==label)setDriveIcon(interactionButton,name,label);
        interactionButton.setAttribute('aria-pressed',String(session.parked||session.refueling));
      }
      fuelGauge.value=session.fuel;fuelGauge.setAttribute('aria-valuetext',Math.round(session.fuel*100)+' percent');
      const speedBefore=state.speed;
      // Check guardrails in substeps, including at 420 km/h on a slow frame.
      const steps=Math.max(1,Math.ceil(Math.abs(state.speed)*delta/.65));
      for(let step=0;step<steps;step++) {
        previousPosition.x=state.x;
        previousPosition.z=state.z;
        stepVehicle(state,controls,delta/steps,park.onRoad(state.x,state.z),raining?.8:1);
        if(park.collision(state.x,state.z)) {
          state.x=previousPosition.x;
          state.z=previousPosition.z;
          state.speed=0;
          break;
        }
      }
      const roadMotion=Math.min(Math.abs(state.speed)/20,1)*(Math.sin(state.wheelRotation*.19)*.0015+Math.sin(state.wheelRotation*.53)*.0008);
      model.rig.position.set(state.x,.025+roadMotion,state.z);
      const acceleration=delta>0?(state.speed-speedBefore)/delta:0;
      const damping=1-Math.exp(-delta*8);
      pitch=T.MathUtils.lerp(pitch,T.MathUtils.clamp(-acceleration*.0016,-.019,.024),damping);
      const bank=T.MathUtils.clamp((state.yawRate??0)*state.speed*.002,-.028,.028);
      roll=T.MathUtils.lerp(roll,bank,damping);
      model.rig.rotation.set(pitch,state.heading,roll,'YXZ');
      setBrakeLights(controls.brake||controls.reverse>0&&state.speed>0);
      for(const part of model.parts) {
        if(!part.name.startsWith('wheel_')) continue;
        part.group.rotation.set(state.wheelRotation,part.name.startsWith('wheel_f')?state.steering:0,0,'YXZ');
      }
      model.rig.updateMatrixWorld(true);
      positionCamera(delta);
      park.update(elapsed,delta,state,camera);
      minimap.update(now,state);
      const {gear,revs}=readPowertrain(state.speed,controls.forward,spec);
      const speed=Math.round(Math.abs(state.speed)*3.6);
      updateCabin(steeringTurn(),{speed,gear,revs,brake:controls.brake});
      audio.update(revs,controls.forward);
      speedText.textContent=String(speed).padStart(3,'0');
      gearText.textContent=gear;
      revBar.style.transform='scaleX('+revs+')';
    }
    renderer.render(scene,camera);
    return true;
  }
  return {begin,end,frame,pause,setTheme,unlockAudio:()=>audio.unlock().catch(error=>console.warn('Audio unavailable',error)),get running(){return running;}};
}
