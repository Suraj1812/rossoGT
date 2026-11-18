import test from 'node:test';
import assert from 'node:assert/strict';
import {stepVehicle} from '../src/drive-physics.js';
import {driveSpecs,readPowertrain} from '../src/drive-specs.js';
import {createRoadIndex,makeDriveRoute} from '../src/drive-routes.js';

const parked=()=>({x:0,z:0,heading:0,speed:0,steering:0,wheelRotation:0});
const input=overrides=>({forward:0,reverse:0,left:0,right:0,brake:false,...overrides});
function advance(state,controls,seconds,onRoad=true,traction=1) {
  for(let i=0;i<seconds*60;i++) stepVehicle(state,controls,1/60,onRoad,traction);
  return state;
}

test('accelerates forward, rolls wheels and stops with the brake',()=>{
  const state=advance(parked(),input({forward:1}),4);
  assert(state.z>40);
  assert(state.speed>25);
  assert(state.wheelRotation>0);
  advance(state,input({brake:true}),3);
  assert.equal(state.speed,0);
});

test('steers right toward the driver’s right when facing +Z',()=>{
  const state=advance(parked(),input({forward:1,right:1}),1);
  assert(state.heading<0);
  assert(state.x<0);
});

test('can reverse, with steering direction following vehicle motion',()=>{
  const state=advance(parked(),input({reverse:1,right:1}),1);
  assert(state.speed<0);
  assert(state.z<0);
  assert(state.heading>0);
});

test('grass limits speed and rain reduces acceleration',()=>{
  const dry=advance(parked(),input({forward:1}),5);
  const wet=advance(parked(),input({forward:1}),5,true,.8);
  const grass=advance(parked(),input({forward:1}),5,false);
  assert(wet.speed<dry.speed);
  assert(grass.speed<=12);
  assert(grass.speed<wet.speed);
});

test('caps elapsed time after a stalled frame and never drifts when parked',()=>{
  const state=parked();
  stepVehicle(state,input({forward:1}),30,true);
  assert(state.speed<1);
  const stationary=advance(parked(),input(),10);
  assert.equal(stationary.speed,0);
  assert.equal(stationary.z,0);
});

test('high-speed steering respects lateral grip instead of spinning the car',()=>{
  const state={...parked(),speed:45};
  advance(state,input({right:1}),1);
  assert(Math.abs(state.yawRate*state.speed)<=8.51);
  assert(Math.abs(state.heading)<.5);
});

test('the brake overrides the accelerator when both pedals are held',()=>{
  const state={...parked(),speed:20};
  advance(state,input({forward:1,brake:true}),2);
  assert.equal(state.speed,0);
});

test('all four cars can reach their own top speed on the Red Rock straight',()=>{
  const {curve,profile}=makeDriveRoute('desert');
  const point=curve.getPointAt(profile.start);
  const tangent=curve.getTangentAt(profile.start);
  const distance=createRoadIndex(curve.getSpacedPoints(2400));
  for(const [id,spec] of Object.entries(driveSpecs)) {
    const state={...parked(),spec,heading:Math.atan2(tangent.x,tangent.z),
      x:point.x-tangent.z*6.2,z:point.z+tangent.x*6.2};
    const controls=input({forward:1});
    for(let frame=0;frame<60*45&&state.speed<spec.topKmh/3.6;frame++) {
      stepVehicle(state,controls,1/60,true);
      const laneOffset=distance(state.x,state.z);
      assert(laneOffset>=1.25&&laneOffset<=10.38,id+' hit a guardrail');
    }
    assert.equal(state.speed,spec.topKmh/3.6,id);
    assert.deepEqual(readPowertrain(state.speed,1,spec),{
      gear:String(spec.shiftSpeeds.length+1),revs:1
    });
  }
});
