import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {allRoutes,cars,carPath,resolveRoute,pageMetadata} from '../src/routes.js';

test('every car has distinct assembly, exploration and drive routes',()=>{
 assert.equal(allRoutes.length,13);
 assert.equal(new Set(allRoutes.map(route=>route.path)).size,13);
 for(const route of allRoutes)assert.deepEqual(resolveRoute(route.path),route);
});

test('legacy links resolve to the correct car and viewing mode',()=>{
 for(let index=0;index<cars.length;index++)for(const suffix of['','-reveal']){
  const route=resolveRoute('/#'+cars[index].id+suffix);
  assert.equal(route.index,index);assert.equal(route.mode,suffix?'explore':'assembly');
  assert.equal(route.path,carPath(index,route.mode));assert(route.legacy);
 }
});

test('route queries do not change canonical identity and unknown paths stay unknown',()=>{
 assert.equal(resolveRoute('/drive/bugatti-chiron/?theme=coast').mode,'drive');
 assert.equal(resolveRoute('/cars/not-a-car/').mode,'not-found');
 assert.equal(resolveRoute('/assets/unknown.glb').mode,'not-found');
 assert.equal(resolveRoute('/cars/bmw-m4-competition').index,1);
});

test('generated HTML exposes each route’s metadata before JavaScript executes',async()=>{
 const site=JSON.parse(await readFile(new URL('../site.config.json',import.meta.url),'utf8'));
 for(const route of allRoutes) {
  const meta=pageMetadata(route,site.url);
  const file=new URL('../dist'+route.path+'index.html',import.meta.url);
  const html=await readFile(file,'utf8');
  assert(html.includes('content="'+meta.image+'"'),route.path);
  assert(html.includes('href="'+meta.url+'"'),route.path);
  assert(html.includes('summary_large_image'),route.path);
  assert(html.includes('og:image:alt'),route.path);
  assert(!html.includes('__PAGE_HEAD__'));assert(!html.includes('__SCENE_MODULE__'));
  const schema=JSON.parse(html.match(/id="page-schema">(.*?)<\/script>/s)[1]);
  assert.equal(schema.url,meta.url);if(meta.car)assert.equal(schema.about.name,meta.car.name);
  assert((await stat(new URL('../dist'+new URL(meta.image).pathname,import.meta.url))).size>10000);
 }
});
