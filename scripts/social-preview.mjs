import {build} from 'esbuild';
import {createServer} from 'node:http';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');const output=resolve(root,'assets/social/models');
await mkdir(output,{recursive:true});
const {outputFiles}=await build({entryPoints:['scripts/render-social.js'],bundle:true,format:'esm',target:'es2022',write:false});
const types={'.glb':'model/gltf-binary','.js':'application/javascript','.jpg':'image/jpeg','.woff2':'font/woff2','.hdr':'application/octet-stream','.wasm':'application/wasm'};
createServer(async(req,res)=>{
 try {
 const url=new URL(req.url,'http://localhost');
 if(req.method==='POST'&&/^\/save\/(ferrari|bmw|lamborghini|bugatti|collection)$/.test(url.pathname)) {
   const chunks=[];let size=0;
   for await(const chunk of req){size+=chunk.length;if(size>3e6){res.writeHead(413).end();return;}chunks.push(chunk);}
   const data=Buffer.concat(chunks);if(data.readUInt16BE(0)!==0xffd8){res.writeHead(400).end();return;}
   await writeFile(resolve(output,url.pathname.split('/').at(-1)+'.jpg'),data);res.writeHead(201).end();return;
 }
 if(url.pathname==='/'){res.setHeader('Content-Type','text/html');res.end('<!doctype html><title>Apex Drive model preview renderer</title><style>@font-face{font-family:Barlow;src:url(/assets/barlow.woff2);font-style:italic;font-weight:900}body{background:#111;color:#fff;font:16px system-ui}canvas{width:min(100%,1000px);display:block;margin-top:14px}</style><button disabled>Render model previews</button><p>Ready when assets are loaded.</p><canvas width="1200" height="629"></canvas><script type="module" src="/render.js"></script>');return;}
 if(url.pathname==='/render.js'){res.setHeader('Content-Type','application/javascript');res.end(outputFiles[0].contents);return;}
 const path=resolve(root,'.'+decodeURIComponent(url.pathname));if(!path.startsWith(root+sep)){res.writeHead(403).end();return;}
 const data=await readFile(path);res.setHeader('Content-Type',types[extname(path)]??'application/octet-stream');res.end(data);
 }catch{res.writeHead(404).end();}
}).listen(4413,'127.0.0.1',()=>console.log('Model artwork renderer: http://127.0.0.1:4413'));
