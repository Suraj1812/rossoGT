import {Vector3} from './vendor/three.module.js';
import {createRoadIndex} from './drive-routes.js';

// Open roads with actual driveable side streets. No hidden return leg or lap.
export function createRoadNetwork(route,profile) {
  const length=route.getLength(),urban=!!profile.urban;
  const junctions=[],roads=[];
  const spacing=profile.region==='newyork'?160:profile.region==='japan'?360:1400;
  const at=(t,offset)=>{
    const p=route.getPointAt(Math.max(0,Math.min(1,t))),d=route.getTangentAt(Math.max(0,Math.min(1,t)));
    return p.add(new Vector3(d.z,0,-d.x).multiplyScalar(offset));
  };
  for(let distance=120;distance<length-100;distance+=spacing) {
    const t=distance/length;
    junctions.push({t,point:at(t,0),distance});
    if(profile.region==='germany') {
      for(const side of [-1,1])roads.push({points:Array.from({length:17},(_,i)=>{
        const u=i/16,s=u*u*(3-2*u);
        return at(t+(u-.5)*180/length,side*(8+22*s));
      }),halfWidth:3.6});
    } else roads.push({points:[at(t,urban?-310:-43),at(t,urban?310:43)],halfWidth:urban?6:5});
  }
  if(urban)for(const side of [-1,1])for(const offset of [92,220]) {
    const points=Array.from({length:181},(_,i)=>at(i/180,side*offset));
    roads.push({points,halfWidth:5.5});
  }
  else for(const side of [-1,1]) {
    roads.push({points:Array.from({length:361},(_,i)=>at(i/360,side*30)),halfWidth:4});
  }
  const indices=roads.map(road=>({distance:createRoadIndex(road.points),halfWidth:road.halfWidth}));
  const main=createRoadIndex(route.getSpacedPoints(2400));
  const bounds={minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity};
  const include=p=>{bounds.minX=Math.min(bounds.minX,p.x);bounds.maxX=Math.max(bounds.maxX,p.x);bounds.minZ=Math.min(bounds.minZ,p.z);bounds.maxZ=Math.max(bounds.maxZ,p.z);};
  route.getSpacedPoints(180).forEach(include);
  roads.forEach(road=>road.points.forEach(include));
  const endpoints=[route.getPointAt(0),route.getPointAt(1)];
  const atTerminus=(x,z)=>endpoints.some(p=>Math.hypot(p.x-x,p.z-z)<27);
  return {roads,junctions,at,bounds,atTerminus,
    onRoad(x,z){return atTerminus(x,z)||main(x,z)<10.5||indices.some(road=>road.distance(x,z)<road.halfWidth);},
    atJunction(x,z){return junctions.some(j=>Math.hypot(x-j.point.x,z-j.point.z)<48);},
    mainDistance:main
  };
}
