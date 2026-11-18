import { build } from 'esbuild';
import { readFile, readdir, rm, writeFile, rename } from 'node:fs/promises';
import { basename } from 'node:path';

const result = await build({
  entryPoints: {scene:'src/main.js'},
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'esm',
  entryNames: '[name]-[hash]',
  target: 'es2022',
  metafile: true
});
const bundle=basename(Object.keys(result.metafile.outputs).find(path=>path.endsWith('.js')));
const template=await readFile('src/index.html','utf8');
await writeFile('dist/index.html.new',template.replace('__SCENE_MODULE__','./'+bundle));
await rename('dist/index.html.new','dist/index.html');
for(const file of await readdir('dist')) {
  if(/^scene-[A-Z0-9]+\.js$/.test(file)&&file!==bundle) await rm('dist/'+file);
}
