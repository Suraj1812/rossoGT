import test from 'node:test';
import assert from 'node:assert/strict';
import {makeDriveRoute,createRoadIndex} from '../src/drive-routes.js';
test('highway routes are distinct, closed and at least 8 km',()=>{
 const fingerprints=new Set();
 for(const id of ['forest','coast','desert']){
  const {curve,profile}=makeDriveRoute(id);
  assert(curve.getLength()>8000,id);assert(curve.getPoint(0).distanceTo(curve.getPoint(1))<.001);
  const spawn=curve.getPointAt(profile.start),tangent=curve.getTangentAt(profile.start);
  const distance=createRoadIndex(curve.getSpacedPoints(2400));
  assert(Math.abs(distance(spawn.x-tangent.z*6.2,spawn.z+tangent.x*6.2)-6.2)<.1,id);
  fingerprints.add(curve.getPointAt(.25).toArray().join());
 }
 assert.equal(fingerprints.size,3);assert(makeDriveRoute('park').curve.getLength()<1000);
});
test('road index measures between samples and rejects distant terrain',()=>{
 const distance=createRoadIndex([{x:-10,z:0},{x:10,z:0}]);
 assert.equal(distance(0,5),5);assert.equal(distance(200,200),Infinity);
});

test('regional destinations are open roads with realistic traffic sides',async()=>{
 const {createRoadNetwork}=await import('../src/road-network.js');
 for(const id of ['india','newyork','japan','germany']) {
  const {curve,profile}=makeDriveRoute(id);
  assert.equal(curve.closed,false,id);
  assert(curve.getPoint(0).distanceTo(curve.getPoint(1))>5000,id+' must not return to the start');
  assert.equal(!!profile.leftHand,id==='india'||id==='japan');
  const network=createRoadNetwork(curve,profile);
  const j=network.junctions[2];
  const sideStreet=network.at(j.t,profile.urban?150:30);
  assert(network.onRoad(sideStreet.x,sideStreet.z),id+' side road must be driveable');
  assert(network.atJunction(j.point.x,j.point.z));
  const far=network.at(j.t,profile.urban?450:100);
  assert(!network.onRoad(far.x,far.z),id+' scenery must not be treated as road');
  assert(network.atTerminus(curve.getPointAt(1).x,curve.getPointAt(1).z));
 }
});
