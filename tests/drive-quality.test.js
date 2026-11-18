import test from 'node:test';
import assert from 'node:assert/strict';
import {createDriveQuality} from '../src/drive-quality.js';

function setup(coarse=false) {
  globalThis.matchMedia=()=>({matches:coarse});
  globalThis.devicePixelRatio=3;
  const applied=[];
  const renderer={setPixelRatio(value){this.ratio=value;},setSize(width,height){this.size=[width,height];}};
  const button=new EventTarget();button.setAttribute=()=>{};
  const quality=createDriveQuality(renderer,{quality:settings=>applied.push(settings)},button);
  quality.resize(1200,800);
  return {quality,renderer,button,applied};
}

test('caps resolution on high-density screens and starts mobile at balanced',()=>{
  assert.equal(setup().renderer.ratio,1.5);
  assert.equal(setup(true).renderer.ratio,1.15);
});

test('sustained slow frames reduce resolution and shadow cost automatically',()=>{
  const {quality,renderer,applied}=setup();
  for(let frame=0;frame<500;frame++)quality.sample(frame*40);
  assert.equal(quality.label,'performance');
  assert.equal(renderer.ratio,.85);
  assert.equal(applied.at(-1).shadow,512);
});

test('manual graphics selection remains stable during slow frames',()=>{
  const {quality,renderer,button}=setup();
  button.dispatchEvent(new Event('click'));
  for(let frame=0;frame<500;frame++)quality.sample(frame*40);
  assert.equal(quality.label,'high');
  assert.equal(renderer.ratio,1.5);
});
