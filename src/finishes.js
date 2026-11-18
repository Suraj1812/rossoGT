import * as T from './vendor/three.module.js';
import { Reflector } from './vendor/Reflector.js';

function texture(size, paint, repeating = false) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  paint(canvas.getContext('2d'),size);
  const result = new T.CanvasTexture(canvas);
  result.colorSpace = T.SRGBColorSpace;
  result.anisotropy = 8;
  if(repeating) result.wrapS = result.wrapT = T.RepeatWrapping;
  return result;
}

function grain(kind) {
  return texture(128,(ctx,size)=>{
    const pixels = ctx.createImageData(size,size);
    let seed = 726171;
    for(let y=0;y<size;y++) {
      for(let x=0;x<size;x++) {
        seed = (Math.imul(seed,1664525)+1013904223)>>>0;
        const noise = (seed/4294967296-.5)*2;
        const warp = Math.floor((x+y)/8)%4 < 2;
        const over = (Math.floor((x-y+size)/8)+Math.floor((x+y)/8))%2 === 0;
        const grain = kind === 'carbon'
          ? 66+(over ? 18 : -14)+16*Math.cos((warp ? x+y : x-y)*Math.PI/2)+noise*5
          : 153+noise*31+19*Math.sin(x*.34+Math.cos(y*.58))*Math.sin(y*.41);
        const i = (y*size+x)*4;
        pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = grain;
        pixels.data[i+3] = 255;
      }
    }
    ctx.putImageData(pixels,0,0);
  },true);
}

function drawHorse(ctx, triangles, x,y,width,height) {
  ctx.fillStyle = '#181413';
  // The source emblem contains coincident faces with opposite winding.
  // Fill triangles independently to preserve its silhouette.
  for(const [a,b,c] of triangles) {
    ctx.beginPath();
    ctx.moveTo(x+(a[0]+.028)/.059*width,y+(.331-a[1])/.085*height);
    ctx.lineTo(x+(b[0]+.028)/.059*width,y+(.331-b[1])/.085*height);
    ctx.lineTo(x+(c[0]+.028)/.059*width,y+(.331-c[1])/.085*height);
    ctx.fill();
  }
}

function emblemAtlas(chrome) {
  const geo = chrome.geometry;
  const positions = geo.attributes.position;
  const triangle = [];
  const emblem = [];
  const point = new T.Vector3();
  for(let i=0;i<geo.index.count;i+=3) {
    triangle.length = 0;
    for(let j=0;j<3;j++) {
      point.fromBufferAttribute(positions,geo.index.getX(i+j)).applyMatrix4(chrome.matrixWorld);
      if(Math.abs(point.x)>.034 || point.y<.242 || point.y>.334 || point.z<2.19 || point.z>2.205) break;
      triangle.push(point.toArray());
    }
    if(triangle.length===3) emblem.push([...triangle]);
  }
  function badge(shape) {
    return texture(384,(ctx,size)=>{
      const base = ctx.createLinearGradient(0,0,size,size);
      base.addColorStop(0,'#fce379');
      base.addColorStop(.5,'#f1bf29');
      base.addColorStop(1,'#b3790c');
      ctx.fillStyle = base;
      ctx.fillRect(0,0,size,size);
      if(shape==='shield') {
        ['#167248','#f2ead1','#a92624'].forEach((color,index)=>{
          ctx.fillStyle=color;
          ctx.fillRect(index*size/3,0,size/3,33);
        });
      }
      drawHorse(ctx,emblem,size*.26,size*.135,size*.48,size*.70);
    });
  }
  return {round:badge('round'),shield:badge('shield')};
}

function dialTexture() {
  let redraw;
  const map=texture(512,(ctx,size)=>{
    const c = size/2;
    const radius = size*.46;
    const dial = ctx.createRadialGradient(c,c,0,c,c,c);
    dial.addColorStop(0,'#e7ab21');
    dial.addColorStop(.76,'#efbb39');
    dial.addColorStop(1,'#9b6a13');
    ctx.fillStyle = dial;
    ctx.fillRect(0,0,size,size);
    const angle = fraction => (144+270*fraction)*Math.PI/180;
    const mark = (a,r)=>[c+Math.cos(a)*r,c+Math.sin(a)*r];
    ctx.strokeStyle = '#9a2119';
    ctx.lineWidth = 21;
    ctx.beginPath();
    ctx.arc(c,c,radius*.93,angle(8/9),angle(1));
    ctx.stroke();
    for(let index=0;index<=36;index++) {
      const a = angle(index/36);
      const major = index%4===0;
      ctx.strokeStyle = major ? '#1c180d' : '#382812';
      ctx.lineWidth = major ? 7 : 3;
      ctx.beginPath();
      ctx.moveTo(...mark(a,radius*.92));
      ctx.lineTo(...mark(a,radius*(major?.8:.86)));
      ctx.stroke();
      if(major) {
        ctx.fillStyle='#24180b';
        ctx.font='bold 46px Arial';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.fillText(String(index/4),...mark(a,radius*.69));
      }
    }
    ctx.fillStyle='#282015';
    ctx.font='bold 24px system-ui';
    ctx.fillText('RPM ×1000',c,c+106);
    const dialFace=ctx.getImageData(0,0,size,size);
    redraw=({gear,revs})=>{
      ctx.putImageData(dialFace,0,0);
      const needle=angle(revs);
      ctx.lineCap='round';
      ctx.strokeStyle='#821d14';
      ctx.lineWidth=8;
      ctx.beginPath();
      ctx.moveTo(...mark(needle+Math.PI,22));
      ctx.lineTo(...mark(needle,radius*.80));
      ctx.stroke();
      ctx.fillStyle='#211e18';
      ctx.beginPath();
      ctx.arc(c,c,14,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle='#090c10';
      ctx.fillRect(c+55,c+56,56,45);
      ctx.font='bold 32px monospace';
      ctx.fillStyle='#f0ead9';
      ctx.fillText(gear,c+83,c+79);
    };
    redraw({gear:'N',revs:.12});
  });
  return {map,update(reading){redraw(reading);map.needsUpdate=true;}};
}

const mirrorShader = {
  ...Reflector.ReflectorShader,
  fragmentShader:Reflector.ReflectorShader.fragmentShader.replace(
    'gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );',
    `float height = vUv.y / max(vUv.w,.001);
     float softbox = exp(-pow((height-.75)*9.0,2.0));
     vec3 studio = vec3(.025,.030,.041) * (1.0+1.7*softbox);
     vec3 surface = mix(studio,base.rgb,base.a);
     gl_FragColor = vec4(blendOverlay(surface,color),1.0);`
  )
};

const mirrorPlanes = {
  driver: {center:[1.025,.86,.425],normal:[-.441,.013,-.897],part:'doorRight'},
  passenger: {center:[-1.025,.86,.425],normal:[.441,.012,-.897],part:'doorLeft'},
  rearview: {center:[.007,1.093,.286],normal:[.134,.015,-.991],part:'cabin'}
};

function findMirror(x,y,z) {
  if(Math.abs(x)>.943 && y>.794 && y<.94 && z>.352 && z<.49) return x>0?'driver':'passenger';
  if(Math.abs(x-.007)<.122 && Math.abs(y-1.093)<.033 && Math.abs(z-.286)<.029) return 'rearview';
}

export function createFinishes(model) {
  const emblems = emblemAtlas(model.getObjectByName('chrome'));
  const material = (params)=>new T.MeshStandardMaterial(params);
  const leather = grain('leather');
  const weave = grain('carbon');
  const dial = dialTexture();
  const screenUpdates=[];
  const bump = (map, bumpScale) => ({bumpMap:map,bumpScale});
  const materials = {
    leather:material({color:0x202125,roughness:.86,metalness:0,...bump(leather,.007)}),
    trim:material({color:0x722b29,roughness:.73,metalness:0,...bump(leather,.003)}),
    carbon:material({color:0x55575d,map:weave,roughness:.38,metalness:.42,...bump(weave,.003)}),
    soft:material({color:0x292c30,roughness:.78,metalness:0,...bump(leather,.004)}),
    hard:material({color:0x25282b,roughness:.62,metalness:.07,...bump(leather,.002)}),
    carpet:material({color:0x242427,roughness:.97,metalness:0,...bump(leather,.014)}),
    undertray:material({color:0x55585d,map:weave,roughness:.61,metalness:.27,...bump(weave,.006)}),
    dial:material({map:dial.map,emissive:0xffffff,emissiveMap:dial.map,emissiveIntensity:.18,roughness:.58}),
    round:material({map:emblems.round,roughness:.3,metalness:.14}),
    shield:material({map:emblems.shield,roughness:.37,metalness:.2}),
    mirror:material({color:0x5b646e,roughness:.075,metalness:1,envMapIntensity:.5})
  };
  const reflective = [];
  let reflecting = false;

  function finishFor(mesh,x,y,z) {
    if(mesh.name==='chrome') {
      const mirror = findMirror(x,y,z);
      if(mirror) return 'mirror:'+mirror;
    }
    if(mesh.name==='yellow_trim') {
      if(z>1.8) return 'bonnetBadge';
      if(Math.abs(x)>.73) return x>0?'rightBadge':'leftBadge';
      if(Math.abs(x-.346)<.07 && Math.abs(y-.821)<.07 && Math.abs(z-.682)<.04) return 'dial';
    }
    if(mesh.name==='steering_centre') return 'steeringBadge';
    if(y<.22 && mesh.name==='interior_dark') return 'undertray';
    return {
      Leather:'leather', Leather_red:'trim', Carbon_Fiber:'carbon',
      Interior_dark:'hard', Interior_light:'soft', plastic_gray:'hard', Carpet:'carpet'
    }[mesh.material.name] ?? 'source';
  }

  const range = (value,min,max)=>(value-min)/(max-min);
  function uvFor(kind,vertex,plane) {
    const [x,y,z] = vertex;
    if(kind==='dial') return [range(x,.398,.293),range(y,.769,.873)];
    if(kind==='steeringBadge') return [range(x,.367,.325),range(y,.779,.819)];
    if(kind==='bonnetBadge') return [range(x,-.014,.022),range(z,2.123,2.066)];
    if(kind==='rightBadge') return [range(z,.847,.763),range(y,.694,.780)];
    if(kind==='leftBadge') return [range(z,.763,.847),range(y,.694,.780)];
    const repeat = kind==='carbon' || kind==='undertray' ? 38 : 13;
    return [repeat*vertex[plane[0]],repeat*vertex[plane[1]]];
  }
  function meshFor(kind,geometry,sourceMaterial) {
    if(kind.startsWith('mirror:')) {
      const spec = mirrorPlanes[kind.split(':')[1]];
      const normal = new T.Vector3(...spec.normal).normalize();
      const center = new T.Vector3(...spec.center);
      const orientation = new T.Quaternion().setFromUnitVectors(new T.Vector3(0,0,1),normal);
      const surface = geometry.clone().translate(-center.x,-center.y,-center.z).applyQuaternion(orientation.clone().invert());
      const positions = surface.attributes.position;
      for(let i=0;i<positions.count;i++) positions.setZ(i,0);
      surface.computeBoundingSphere();
      const reflector = new Reflector(surface,{textureWidth:512,textureHeight:384,multisample:0,color:0xb3bbc5,clipBias:.001,shader:mirrorShader});
      reflector.quaternion.copy(orientation);
      reflector.position.copy(center).addScaledVector(normal,.0013);
      reflector.visible = false;
      const render = reflector.onBeforeRender;
      reflector.onBeforeRender = function(renderer,scene,camera) {
        if(reflecting) return;
        const now=performance.now();
        if(reflector.userData.drive&&now-(reflector.userData.lastReflection??-Infinity)<100)return;
        reflector.userData.lastReflection=now;
        reflecting = true;
        try { render.call(this,renderer,scene,camera); }
        finally { reflecting = false; }
      };
      const face = new T.Mesh(geometry,materials.mirror);
      face.add(reflector);
      reflective.push(reflector);
      return face;
    }
    const name = kind==='steeringBadge' ? 'round' : kind.endsWith('Badge') ? 'shield' : kind;
    return new T.Mesh(geometry,materials[name] ?? sourceMaterial);
  }
  function wheelCenter(mesh) {
    const geometry = mesh.geometry.clone();
    const position = geometry.attributes.position;
    const uv = [];
    for(let i=0;i<position.count;i++) {
      uv.push(.5 + Math.sign(mesh.position.x)*position.getZ(i)/.073,.5+position.getY(i)/.073);
    }
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    mesh.geometry = geometry;
    mesh.material = materials.round;
  }
  function instrumentScreens(driverX) {
    const group = new T.Group();
    for(const [offset,layout] of [[-.13,'speed'],[.13,'telemetry']]) {
      let update;
      const face = texture(288,(ctx,size)=>{
        const scale=size/384;
        size=384;
        update=({speed,gear,brake})=>{
        ctx.setTransform(scale,0,0,scale,0,0);
        ctx.fillStyle='#0c1117';
        ctx.fillRect(0,0,size,size);
        ctx.strokeStyle='#2e3c48';
        ctx.lineWidth=7;
        ctx.strokeRect(13,13,size-26,size-26);
        ctx.textAlign='center';
        ctx.fillStyle='#acbdc7';
        ctx.font='30px monospace';
        ctx.fillText(layout==='speed'?'VEHICLE':'MANETTINO',size/2,76);
        ctx.fillStyle='#edecea';
        ctx.font=layout==='speed'?'120px monospace':'57px monospace';
        ctx.fillText(layout==='speed'?String(speed):brake?'BRAKE':'SPORT',size/2,224);
        ctx.fillStyle='#b83e32';
        ctx.fillRect(51,256,size-102,5);
        ctx.fillStyle='#8fa8ba';
        ctx.font='32px monospace';
        ctx.fillText(layout==='speed'?'km/h  ·  '+gear:'ESC ON',size/2,311);
        };
        update({speed:0,gear:'N',brake:false});
      });
      screenUpdates.push(reading=>{update(reading);face.needsUpdate=true;});
      const screen = new T.Mesh(new T.PlaneGeometry(.085,.061),new T.MeshBasicMaterial({map:face,color:0xc7d1dc}));
      screen.rotation.y = Math.PI;
      screen.position.set(driverX+offset,.79,.659);
      group.add(screen);
    }
    return group;
  }
  return {
    finishFor,uvFor,meshFor,wheelCenter,instrumentScreens,undertray:materials.undertray,
    updateInstruments(reading) {
      dial.update(reading);
      for(const update of screenUpdates)update(reading);
    },
    mirrorPlanes,
    setMirrors(enabled,{driving=false}={}) {
      for(const mirror of reflective) {
        mirror.visible=enabled;
        mirror.userData.drive=driving;
        mirror.userData.lastReflection=undefined;
      }
    }
  };
}
