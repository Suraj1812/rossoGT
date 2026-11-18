export function createDriveMap(canvas,route) {
  const ctx=canvas.getContext('2d');
  const points=route.getSpacedPoints(160);
  canvas.width=320;canvas.height=230;
  let previous=-1;
  const minX=Math.min(...points.map(p=>p.x)),maxX=Math.max(...points.map(p=>p.x));
  const minZ=Math.min(...points.map(p=>p.z)),maxZ=Math.max(...points.map(p=>p.z));
  const scale=Math.min(280/(maxX-minX),190/(maxZ-minZ));
  const x=value=>160+(value-(minX+maxX)/2)*scale;
  const y=value=>115+(value-(minZ+maxZ)/2)*scale;
  function update(now,state,force=false) {
    if(!force&&now-previous<100)return;previous=now;
    ctx.clearRect(0,0,320,230);
    ctx.lineJoin='round';ctx.lineCap='round';
    ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(x(p.x),y(p.z)):ctx.moveTo(x(p.x),y(p.z)));ctx.closePath();
    ctx.strokeStyle='#b7c7b440';ctx.lineWidth=18;ctx.stroke();
    ctx.strokeStyle='#e5e6d6b0';ctx.lineWidth=2;ctx.stroke();
    ctx.save();ctx.translate(x(state.x),y(state.z));ctx.rotate(Math.PI-state.heading);
    ctx.fillStyle='#f2ce85';ctx.beginPath();ctx.moveTo(0,-9);ctx.lineTo(6,7);ctx.lineTo(0,4);ctx.lineTo(-6,7);ctx.closePath();ctx.fill();ctx.restore();
  }
  return {update};
}
