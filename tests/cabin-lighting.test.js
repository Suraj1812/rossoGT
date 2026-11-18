import test from 'node:test';
import assert from 'node:assert/strict';
import {createCabinLighting} from '../src/cabin-lighting.js';

for(const id of ['ferrari','bmw','lamborghini','bugatti']) {
  test(`${id} cabin lights follow camera, night and reading switches`,()=>{
    const lighting=createCabinLighting(id);
    const lights=lighting.root.children.filter(node=>node.isLight);
    const active=()=>lights.filter(light=>light.visible).length;
    lighting.update({cabin:true});
    assert.equal(active(),0,'daytime cabin has no unnecessary light sources');
    lighting.update({cabin:true,night:true});
    assert.equal(active(),2,'night enables both footwells');
    lighting.update({cabin:true,night:true,reading:true});
    assert.equal(active(),4,'reading lamps can be enabled independently');
    lighting.update({cabin:false,night:true,reading:true});
    assert.equal(active(),0,'chase camera avoids interior light cost');
    lighting.update({cabin:true,night:false,reading:false});
    assert.equal(active(),0,'switching back to daylight clears night lighting');
    assert.ok(lights.every(light=>!light.castShadow),'no extra shadow passes');
  });
}
