export function createDriveSession() {
 return {fuel:1,refueling:false,parked:false};
}
export function interactSession(session,place,speed) {
 if(session.parked){session.parked=false;return;}
 if(Math.abs(speed)>.6||!place)return;
 if(place.type==='fuel')session.refueling=!session.refueling;
 if(place.type==='parking')session.parked=true;
}
export function stepDriveSession(session,speed,throttle,delta,place) {
 const dt=Math.max(0,Math.min(delta,.05));
 if(session.refueling) {
  if(place?.type!=='fuel'||Math.abs(speed)>.6)session.refueling=false;
  else {session.fuel=Math.min(1,session.fuel+dt/8);if(session.fuel===1)session.refueling=false;}
 } else if(!session.parked)session.fuel=Math.max(0,session.fuel-dt*(Math.abs(speed)/500000*(1+throttle*.7)+.000001));
 return session;
}
