import {CatmullRomCurve3,Vector3} from './vendor/three.module.js';

export const driveRoutes={
 forest:{name:'Forest Ridge',icon:'forest',start:.012,points:[
  [-1380,-770],[-780,-810],[-300,-730],[80,-880],[660,-880],[1390,-660],[1590,-140],
  [1350,430],[1560,910],[1020,1220],[410,1150],[-85,890],[-520,1100],[-1170,1170],[-1590,710],[-1640,30]
 ]},
 coast:{name:'Coastal Causeway',icon:'coast',start:.29,points:[
  [-1180,-1040],[-530,-1130],[200,-1050],[850,-790],[1040,-290],[1010,220],[1130,770],
  [820,1270],[230,1500],[-600,1420],[-1150,1120],[-1380,560],[-1260,120],[-1500,-450]
 ]},
 desert:{name:'Red Rock Highway',icon:'desert',start:.031,points:[
  [-3000,-1000],[-2675,-1000],[-1800,-1000],[-300,-1000],[1200,-1000],[2290,-1000],[2730,-1000],[3010,-730],[2840,-195],[2120,-180],
  [1590,330],[1110,650],[1330,1120],[740,1490],[-180,1400],[-920,1220],[-1660,1260],[-2410,670],[-3030,-230],[-3190,-770]
 ]},
 park:{name:'Garden Circuit',icon:'park',start:.025,points:[
  [-78,-59],[0,-69],[74,-59],[93,-25],[93,30],[74,59],[0,69],[-74,59],[-93,25],[-93,-28]
 ]}
};
export function makeDriveRoute(id) {
 const profile=driveRoutes[id]??driveRoutes.forest;
 const curve=new CatmullRomCurve3(profile.points.map(([x,z])=>new Vector3(x,0,z)),true,'centripetal');
 curve.arcLengthDivisions=2048;
 return {curve,profile};
}

// Road queries stay local as the route grows, including between sample points.
export function createRoadIndex(samples,cellSize=48) {
 const cells=new Map(),key=(x,z)=>x+':'+z;
 for(let i=0;i<samples.length-1;i++) {
  const a=samples[i],b=samples[i+1],dx=b.x-a.x,dz=b.z-a.z;
  const segment={x:a.x,z:a.z,dx,dz,inverse:1/(dx*dx+dz*dz||1)};
  for(let x=Math.floor((Math.min(a.x,b.x)-24)/cellSize);x<=Math.floor((Math.max(a.x,b.x)+24)/cellSize);x++)
   for(let z=Math.floor((Math.min(a.z,b.z)-24)/cellSize);z<=Math.floor((Math.max(a.z,b.z)+24)/cellSize);z++){
    const id=key(x,z);if(!cells.has(id))cells.set(id,[]);cells.get(id).push(segment);
   }
 }
 return (x,z)=>{
  const local=cells.get(key(Math.floor(x/cellSize),Math.floor(z/cellSize)));
  let distance=Infinity;
  if(local)for(const s of local) {
   const t=Math.max(0,Math.min(1,((x-s.x)*s.dx+(z-s.z)*s.dz)*s.inverse));
   distance=Math.min(distance,(s.x+t*s.dx-x)**2+(s.z+t*s.dz-z)**2);
  }
  return Math.sqrt(distance);
 };
}
