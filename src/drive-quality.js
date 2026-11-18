const presets={
  high:{ratio:1.5,shadow:1536,foliageShadows:true,rain:4600},
  balanced:{ratio:1.15,shadow:1024,foliageShadows:false,rain:3200},
  performance:{ratio:.85,shadow:512,foliageShadows:false,rain:2000}
};
export function createDriveQuality(renderer,park,button) {
  const compact=matchMedia('(pointer: coarse)').matches;
  const order=['high','balanced','performance'];
  let mode='auto',tier=compact?1:0,width=1,height=1;
  let samples=0,total=0,warmup=90;
  let previous=0;
  function apply() {
    const preset=presets[order[tier]];
    renderer.setPixelRatio(Math.min(devicePixelRatio,preset.ratio));
    renderer.setSize(width,height,false);
    park.quality(preset);
    button.textContent=mode==='auto'?'Auto':order[tier][0].toUpperCase()+order[tier].slice(1);
    button.setAttribute('aria-label','Graphics quality: '+button.textContent+'. Click to change.');
  }
  function resize(w,h) {width=w;height=h;apply();}
  function cycle() {
    mode=({auto:'high',high:'balanced',balanced:'performance',performance:'auto'})[mode];
    tier=mode==='auto'?(compact?1:0):order.indexOf(mode);
    warmup=90;samples=0;total=0;apply();
  }
  function sample(now) {
    const milliseconds=previous?now-previous:0;previous=now;
    if(mode!=='auto'||warmup-->0||milliseconds<=0||milliseconds>100)return;
    total+=milliseconds;samples++;
    if(samples<90)return;
    const average=total/samples;
    if(average>(compact?29:23)&&tier<2){tier++;apply();warmup=120;}
    samples=0;total=0;
  }
  button.addEventListener('click',cycle);
  return {resize,sample,setPark(next){park=next;apply();},reset(){previous=0;warmup=90;},get label(){return order[tier];}};
}
