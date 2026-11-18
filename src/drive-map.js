export function createDriveMap(canvas,route,roads=[]) {
 const ctx=canvas.getContext('2d');
 const points=route.getSpacedPoints(600);
 const streets=roads.map(road=>road.points);
 canvas.width=320;canvas.height=230;
 let previous=-1;
 function update(now,state,force=false) {
  if(!force&&now-previous<100)return;previous=now;
  // A local navigation map follows the driver rather than displaying a lap.
  const scale=.32;
  const x=value=>160+(value-state.x)*scale;
  const y=value=>115+(value-state.z)*scale;
  ctx.fillStyle='#172127';ctx.fillRect(0,0,320,230);
  ctx.lineJoin='round';ctx.lineCap='round';
  const draw=(path,width,color)=>{
   ctx.beginPath();path.forEach((p,i)=>i?ctx.lineTo(x(p.x),y(p.z)):ctx.moveTo(x(p.x),y(p.z)));
   ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();
  };
  for(const street of streets)draw(street,4,'#657377');
  draw(points,11,'#8b999b');draw(points,3,'#dfc18b');
  ctx.save();ctx.translate(160,115);ctx.rotate(Math.PI-state.heading);
  ctx.fillStyle='#f5deac';ctx.strokeStyle='#172127';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(0,-9);ctx.lineTo(6,7);ctx.lineTo(0,4);ctx.lineTo(-6,7);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
  ctx.fillStyle='#bec8c9';ctx.font='11px system-ui';ctx.fillText('N',300,18);
  ctx.fillRect(15,210,64,2);ctx.fillText('200 m',15,204);
 }
 return {update};
}
