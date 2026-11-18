// Lucide's official UMD library is loaded from jsDelivr, with a local fallback.
const names={back:'ArrowLeft',sun:'Sun',moon:'Moon',rain:'CloudRain',sound:'Volume2',mute:'VolumeX',cabin:'Armchair',chase:'CarFront',horn:'Megaphone',reset:'RotateCcw',play:'Play',pause:'Pause',route:'Route',settings:'SlidersHorizontal',park:'Flower2',forest:'Trees',coast:'Waves',desert:'Mountain',brake:'CircleStop',forward:'ChevronsUp',reverse:'ArrowDown'};
const pending=new Map();
function render(button,name) {
 const lucide=window.lucide;
 const definition=lucide?.icons[names[name]]??lucide?.icons.CarFront;
 if(!definition)return;
 const icon=lucide.createElement(definition);
 icon.setAttribute('aria-hidden','true');icon.setAttribute('stroke-width','1.7');
 button.replaceChildren(icon);
}
export function setDriveIcon(button,name,label) {
 if(!button)return;
 pending.set(button,name);render(button,name);
 button.dataset.icon=name;
 button.setAttribute('aria-label',label);button.setAttribute('title',label);
}
window.addEventListener('iconsready',()=>{for(const [button,name]of pending)render(button,name);});
export function initDriveIcons(ui) {
 for(const [selector,icon,label] of [
  ['[data-exit-drive]','back','Return to car'],['[data-day]','sun','Switch to night'],['[data-rain]','rain','Toggle rain'],['[data-sound]','sound','Mute sound'],['[data-camera]','cabin','Driver seat view'],['[data-control="horn"]','horn','Hold for horn'],['[data-reset]','reset','Reset car on the road'],['[data-resume]','play','Resume drive'],['[data-pause]','pause','Pause drive'],['[data-theme]','route','Choose route'],['[data-settings]','settings','Drive settings'],['[data-control="brake"]','brake','Brake'],['[data-control="forward"]','forward','Accelerate'],['[data-control="reverse"]','reverse','Reverse']])setDriveIcon(ui.querySelector(selector),icon,label);
}
