export function createDriveAudio() {
  let context;
  let master;
  let engine;
  let engineGain;
  let horn;
  let muted = false;
  let active = false;
  let generation = 0;

  function unlock() {
    if(!context) {
      context=new AudioContext();master=context.createGain();
      master.gain.value=muted?0:.7;master.connect(context.destination);
    }
    return context.resume();
  }

  async function start() {
    active = true;
    const token = ++generation;
    await unlock();
    if(engine) return;
    try {
      const response = await fetch(new URL('./assets/drive/engine.wav',import.meta.url));
      if(!response.ok) throw new Error('Engine recording unavailable');
      const buffer = await context.decodeAudioData(await response.arrayBuffer());
      if(!active || token!==generation) return;
      engine = context.createBufferSource();
      engine.buffer = buffer;
      engine.loop = true;
      engineGain = context.createGain();
      engineGain.gain.value = .14;
      engine.connect(engineGain).connect(master);
      engine.start();
    } catch(error) {
      console.warn('Engine audio could not start',error);
    }
  }

  function stopHorn() {
    if(!horn) return;
    const old = horn;
    horn = undefined;
    old.gain.gain.setTargetAtTime(0,context.currentTime,.025);
    for(const oscillator of old.oscillators) oscillator.stop(context.currentTime+.15);
  }

  function setHorn(pressed) {
    if(!pressed || !active || !context) {
      stopHorn();
      return;
    }
    if(horn) return;
    const gain = context.createGain();
    gain.gain.value = .075;
    gain.connect(master);
    const oscillators = [392,494].map(frequency=>{
      const oscillator = context.createOscillator();
      oscillator.type = 'sawtooth';
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
      return oscillator;
    });
    horn = {gain,oscillators};
  }

  function update(revs,throttle) {
    if(!engine || !active) return;
    engine.playbackRate.setTargetAtTime(.65+revs*1.25,context.currentTime,.13);
    engineGain.gain.setTargetAtTime(.11+revs*.23+throttle*.06,context.currentTime,.12);
  }

  function stop() {
    active = false;
    generation++;
    stopHorn();
    engine?.stop();
    engine = undefined;
    context?.suspend();
  }

  function toggleMute() {
    muted = !muted;
    if(master) master.gain.setTargetAtTime(muted?0:.7,context.currentTime,.04);
    return muted;
  }
  return {start,stop,update,setHorn,toggleMute,unlock};
}
