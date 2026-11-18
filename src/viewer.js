import * as T from './vendor/three.module.js';

const target = new T.Vector3(0,.62,0);
const orbitStart = new T.Spherical().setFromVector3(new T.Vector3(6.9,2.68,6.18));
const seatStartPitch = -.17;
const pitchLimit = Math.PI/2-.012;

function seatBox(x) {
  return new T.Box3(new T.Vector3(x-.205,.66,-.72),new T.Vector3(x+.205,1.12,.17));
}

export function createViewer(canvas,onChange,openCatalog) {
  const camera = new T.PerspectiveCamera(39,1,.017,100);
  let rig;
  let vehicleName = '';
  let seats = {};
  let scrollTouch = false;
  const orbit = orbitStart.clone();
  const look = new T.Vector3();
  const raycaster = new T.Raycaster();
  const touch = new Map();
  let complete = false;
  let mode = 'exterior';
  let orbitZoom = 1;
  let seatZoom = 1;
  let heading = 0;
  let tilt = seatStartPitch;
  let click;
  let pinchDistance = 0;

  function exteriorLabel() {
    return `${vehicleName} exterior. Drag or use the arrow keys to orbit. Select a seat or press 1 for the driver or 2 for the passenger.`;
  }

  function setVehicle(vehicle,name) {
    const {driverX,eyeHeight,eyeDepth} = vehicle.seats;
    rig = vehicle.rig;
    vehicleName = name;
    seats = {
      driver:{eye:new T.Vector3(driverX,eyeHeight,eyeDepth),box:seatBox(driverX)},
      passenger:{eye:new T.Vector3(-driverX,eyeHeight,eyeDepth),box:seatBox(-driverX)}
    };
    setMode('exterior');
    complete = false;
    orbit.copy(orbitStart);
    orbitZoom = 1;
    touch.clear();
    click = undefined;
    canvas.style.cursor = '';
    canvas.setAttribute('aria-label',`${name} components. Scroll to assemble the car.`);
  }

  function setMode(nextMode) {
    if(mode === nextMode) return;
    mode = nextMode;
    heading = 0;
    tilt = seatStartPitch;
    seatZoom = 1;
    const label = nextMode === 'exterior'
      ? exteriorLabel()
      : `${vehicleName} ${nextMode} seat. Drag or use the arrow keys to look around. Press Escape or tap to return outside.`;
    canvas.setAttribute('aria-label', label);
    canvas.style.cursor = '';
    onChange(nextMode);
  }

  function setComplete(value) {
    if(complete === value) return;
    complete = value;
    if(!complete) {
      orbit.copy(orbitStart);
      orbitZoom = 1;
      setMode('exterior');
      canvas.style.cursor = '';
      canvas.setAttribute('aria-label',`${vehicleName} components. Scroll to assemble the car.`);
      return;
    }
    canvas.setAttribute('aria-label',exteriorLabel());
  }

  function position(aspect, verticalSize) {
    camera.aspect = aspect;
    if(mode === 'exterior') {
      camera.fov = 39;
      orbit.radius = verticalSize / (2 * Math.tan(T.MathUtils.degToRad(camera.fov / 2))) / orbitZoom;
      camera.position.setFromSpherical(orbit).add(target);
      camera.lookAt(target);
    } else {
      const seat = seats[mode];
      camera.fov = (aspect < .8 ? 82 : 70) / seatZoom;
      camera.position.copy(seat.eye);
      look.set(
        Math.sin(heading)*Math.cos(tilt),
        Math.sin(tilt),
        Math.cos(heading)*Math.cos(tilt)
      ).add(seat.eye);
      camera.lookAt(look);
    }
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }

  function turn(dx, dy) {
    if(mode === 'exterior') {
      orbit.theta -= dx;
      orbit.phi = T.MathUtils.clamp(orbit.phi - dy,.012,Math.PI-.012);
    } else {
      heading += dx;
      tilt = T.MathUtils.clamp(tilt + dy,-pitchLimit,pitchLimit);
    }
    onChange(mode);
  }

  function zoom(factor) {
    if(mode === 'exterior') {
      orbitZoom = T.MathUtils.clamp(orbitZoom * factor,.76,1.85);
    } else {
      seatZoom = T.MathUtils.clamp(seatZoom * factor,.9,1.45);
    }
    onChange(mode);
  }

  function aimRay(x,y) {
    const bounds = canvas.getBoundingClientRect();
    raycaster.setFromCamera({
      x:(x-bounds.left)/bounds.width*2-1,
      y:1-(y-bounds.top)/bounds.height*2
    },camera);
  }

  function seatAt(x,y,checkOcclusion) {
    aimRay(x,y);
    let nearest = Infinity;
    let selection;
    for(const [name,seat] of Object.entries(seats)) {
      if(name === mode) continue;
      if(raycaster.ray.origin.y < .53) continue;
      const hit = raycaster.ray.intersectBox(seat.box,look);
      if(!hit) continue;
      const distance = hit.distanceTo(raycaster.ray.origin);
      if(distance < nearest) {
        nearest = distance;
        selection = name;
      }
    }
    if(!selection || !checkOcclusion) return selection;
    const hit = raycaster.intersectObject(rig,true).find(item => !item.object.material.transparent);
    return !hit || hit.distance + .16 >= nearest ? selection : undefined;
  }

  function touchesCar(x,y) {
    aimRay(x,y);
    return raycaster.ray.intersectsBox(new T.Box3().setFromObject(rig));
  }

  function distanceBetweenPointers() {
    const [first,second] = touch.values();
    return Math.hypot(first.x-second.x,first.y-second.y);
  }

  canvas.addEventListener('pointerdown',event=>{
    if(!complete || event.button !== 0) return;
    canvas.setAttribute('data-pointer-focus','');
    canvas.focus({preventScroll:true});
    touch.set(event.pointerId,{x:event.clientX,y:event.clientY});
    canvas.setPointerCapture(event.pointerId);
    if(touch.size === 1) {
      click = {x:event.clientX,y:event.clientY,dragged:false,canScroll:event.pointerType==='touch' && mode==='exterior' && !touchesCar(event.clientX,event.clientY)};
      scrollTouch = false;
    } else {
      click = undefined;
      scrollTouch = false;
      pinchDistance = distanceBetweenPointers();
    }
  });

  canvas.addEventListener('pointermove',event=>{
    if(!complete) return;
    const previous = touch.get(event.pointerId);
    if(!previous) {
      const seat = mode === 'exterior' ? seatAt(event.clientX,event.clientY,false) : undefined;
      canvas.style.cursor = seat ? 'zoom-in' : '';
      return;
    }
    touch.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(touch.size > 1) {
      const distance = distanceBetweenPointers();
      if(pinchDistance > 0 && distance > 0) zoom(distance/pinchDistance);
      pinchDistance = distance;
      return;
    }
    if(click && !click.dragged) {
      if(Math.hypot(event.clientX-click.x,event.clientY-click.y) < 5) return;
      click.dragged = true;
      scrollTouch = click.canScroll && Math.abs(event.clientY-click.y)>Math.abs(event.clientX-click.x);
    }
    if(scrollTouch) {
      window.scrollBy(0,previous.y-event.clientY);
      return;
    }
    turn((event.clientX-previous.x)*.008,(event.clientY-previous.y)*.008);
  });

  function release(event,allowClick) {
    if(!touch.delete(event.pointerId)) return;
    if(allowClick && complete && click && !click.dragged) {
      const seat = seatAt(event.clientX,event.clientY,true);
      if(seat) setMode(seat);
      else if(mode !== 'exterior') setMode('exterior');
    }
    click = undefined;
    pinchDistance = touch.size > 1 ? distanceBetweenPointers() : 0;
  }

  canvas.addEventListener('pointerup',event=>release(event,true));
  canvas.addEventListener('pointercancel',event=>release(event,false));
  canvas.addEventListener('lostpointercapture',event=>release(event,false));
  canvas.addEventListener('wheel',event=>{
    if(!complete || (!event.ctrlKey && !event.shiftKey)) return;
    event.preventDefault();
    zoom(Math.exp(-event.deltaY*.009));
  },{passive:false});

  canvas.addEventListener('blur',()=>canvas.removeAttribute('data-pointer-focus'));
  canvas.addEventListener('keydown',event=>{
    if(!complete) return;
    canvas.removeAttribute('data-pointer-focus');
    const keyActions = {
      '1':()=>setMode('driver'),
      '2':()=>setMode('passenger'),
      Escape:()=>mode==='exterior'?openCatalog():setMode('exterior'),
      ArrowLeft:()=>turn(-.16,0),
      ArrowRight:()=>turn(.16,0),
      ArrowUp:()=>turn(0,-.13),
      ArrowDown:()=>turn(0,.13),
      '+':()=>zoom(1.14),
      '=':()=>zoom(1.14),
      '-':()=>zoom(1/1.14)
    };
    const action = keyActions[event.key];
    if(!action) return;
    event.preventDefault();
    action();
  });

  return {camera,position,setVehicle,setComplete,get mode(){return mode;}};
}
