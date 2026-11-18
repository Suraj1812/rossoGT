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
