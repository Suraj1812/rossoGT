import {driveSpecs} from './drive-specs.js';

export function stepVehicle(state,input,delta,onRoad,traction=1) {
  const dt=Math.min(Math.max(delta,0),.05);
  // Cars face +Z; the driver's right is -X.
  const target=input.steer??input.left-input.right;
  const steeringLimit=.52/(1+Math.pow(Math.abs(state.speed)/15,1.5));
  const steeringTarget=Math.max(-1,Math.min(1,target))*steeringLimit;
  state.steering+=(steeringTarget-state.steering)*(1-Math.exp(-dt*(target===0?9:6)));
  const grip=(onRoad?1:.55)*traction;
  const throttle=input.brake?0:input.forward-input.reverse;
  const direction=Math.sign(state.speed);
  const spec = state.spec ?? driveSpecs.ferrari;
  const topSpeed = spec.topKmh / 3.6;
  const speedFraction = Math.min(1, Math.abs(state.speed) / topSpeed);
  const resistance = direction * (.38 + state.speed ** 2 * .00012 + (onRoad ? 0 : 3.7));
  const reversing=throttle!==0&&direction!==0&&Math.sign(throttle)!==direction;
  // Available wheel force drops as the transmission shifts into taller gears.
  const engineForce = spec.launchAcceleration / (1 + 3.2 * speedFraction ** 2);
  const acceleration=throttle*(reversing?13:engineForce)*grip-resistance;
  let nextSpeed=state.speed+acceleration*dt;
  if(input.brake) {
    nextSpeed=Math.sign(nextSpeed)*Math.max(0,Math.abs(nextSpeed)-13.5*grip*dt);
  } else if(throttle===0&&direction!==0&&Math.sign(nextSpeed)!==direction)nextSpeed=0;
  state.speed=Math.max(-7,Math.min(onRoad?topSpeed:12,nextSpeed));
  if(Math.abs(state.speed)<.035&&throttle===0)state.speed=0;
  const requestedYaw=state.speed/2.8*Math.tan(state.steering);
  const lateralLimit=8.5*grip/Math.max(3,Math.abs(state.speed));
  state.yawRate=Math.max(-lateralLimit,Math.min(lateralLimit,requestedYaw));
  state.heading+=state.yawRate*dt;
  state.x+=Math.sin(state.heading)*state.speed*dt;
  state.z+=Math.cos(state.heading)*state.speed*dt;
  state.wheelRotation+=state.speed*dt/.37;
  return state;
}
