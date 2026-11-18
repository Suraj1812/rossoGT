// Geometry-only integration smoke check. No browser or renderer is launched.
import test from 'node:test';
import {createPark} from '../src/park.js';
import {makeDriveRoute} from '../src/drive-routes.js';
import {createRoadNetwork} from '../src/road-network.js';
import * as T from '../src/vendor/three.module.js';
const gradient={addColorStop(){}};
const ctx=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient,measureText:()=>({width:40})},{get(target,key){return target[key]??(()=>{});},set(target,key,value){target[key]=value;return true;}});
globalThis.document={createElement:()=>({getContext:()=>ctx}),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
for(const id of ['india','newyork','japan','germany'])test(id+' builds finite geometry with a safe spawn and moving traffic',()=>{
 const world=createPark(id),spawn=world.spawn();
 const camera=new T.PerspectiveCamera();
 world.update(0,0,spawn,camera);
 const {curve,profile}=makeDriveRoute(id),network=createRoadNetwork(curve,profile);
 const station=network.at(network.junctions[profile.urban?3:0].t,profile.urban?-62:60);
 if(world.interaction(station)?.type!=='fuel'||!world.onRoad(station.x,station.z)||world.collision(station.x,station.z))throw Error(id+' fuel station is not accessible');
 if(profile.urban) {
  const parking=network.at((network.junctions[0].distance-10)/curve.getLength(),62);
  if(world.interaction(parking)?.type!=='parking'||world.collision(parking.x,parking.z))throw Error(id+' parking area is blocked');
 }
 if(world.collision(spawn.x,spawn.z))throw Error(id+' spawn collides');
 if(!world.onRoad(spawn.x,spawn.z))throw Error(id+' spawn off road');
 let invalid=0;
 world.root.traverse(object=>{if(object.isMesh){const p=object.geometry.attributes.position;if(p)for(let i=0;i<p.array.length;i++)if(!Number.isFinite(p.array[i])){invalid++;break;}}});
 if(invalid)throw Error(id+' invalid geometry');
 for(let frame=1;frame<180;frame++)world.update(frame/60,1/60,spawn,camera);
 if(world.collision(spawn.x,spawn.z))throw Error(id+' traffic drives through parked player');

 world.dispose();
});
