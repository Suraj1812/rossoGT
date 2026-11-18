import {build} from 'esbuild';
import {readFile,readdir,rm,writeFile,rename,mkdir} from 'node:fs/promises';
import {basename,dirname,join} from 'node:path';
import {allRoutes,pageMetadata} from './src/routes.js';
const site=JSON.parse(await readFile('site.config.json','utf8'));
const origin=new URL(process.env.PUBLIC_SITE_URL||site.url).origin;
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const result=await build({entryPoints:{scene:'src/main.js'},outdir:'dist',bundle:true,minify:true,format:'esm',entryNames:'[name]-[hash]',target:'es2022',metafile:true});
const bundle=basename(Object.keys(result.metafile.outputs).find(path=>path.endsWith('.js')));
const template=await readFile('src/index.html','utf8');
for(const route of allRoutes) {
 const meta=pageMetadata(route,origin);
 const schema={
  '@context':'https://schema.org','@type':'WebPage',name:meta.title,description:meta.description,url:meta.url,image:meta.image,
  isPartOf:{'@type':'WebSite',name:'Apex Drive',url:origin+'/'},
  ...(meta.car?{about:{'@type':'Vehicle',name:meta.car.name,brand:{'@type':'Brand',name:meta.car.brand}}}:{mainEntity:{'@type':'WebApplication',name:'Apex Drive',applicationCategory:'GameApplication',operatingSystem:'Web browser',browserRequirements:'WebGL 2'}})
 };
 const tags=[
  '<title>'+escape(meta.title)+'</title>',
  '<meta name="description" content="'+escape(meta.description)+'">',
  '<meta name="site-origin" content="'+escape(origin)+'">',
  '<meta name="theme-color" content="#11151b">',
  '<meta name="robots" content="index,follow,max-image-preview:large">',
  '<link rel="canonical" href="'+escape(meta.url)+'">',
  '<link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml">',
  '<link rel="apple-touch-icon" href="/assets/icons/app-192.png">',
  '<link rel="manifest" href="/manifest.webmanifest">',
  ...Object.entries({'og:type':'website','og:locale':'en_US','og:site_name':'Apex Drive','og:title':meta.title,'og:description':meta.description,'og:url':meta.url,'og:image':meta.image,'og:image:type':'image/jpeg','og:image:width':'1200','og:image:height':'629','og:image:alt':meta.imageAlt}).map(([key,value])=>'<meta property="'+key+'" content="'+escape(value)+'">'),
  ...Object.entries({'twitter:card':'summary_large_image','twitter:title':meta.title,'twitter:description':meta.description,'twitter:image':meta.image,'twitter:image:alt':meta.imageAlt}).map(([key,value])=>'<meta name="'+key+'" content="'+escape(value)+'">'),
  '<script type="application/ld+json" id="page-schema">'+JSON.stringify(schema).replaceAll('<','\\u003c')+'</script>'
 ].join('\n  ');
 const file=join('dist',route.path,'index.html');
 await mkdir(dirname(file),{recursive:true});
 await writeFile(file+'.new',template.replace('__SCENE_MODULE__','/'+bundle).replace('__PAGE_HEAD__',tags));await rename(file+'.new',file);
}
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+allRoutes.map(route=>'<url><loc>'+origin+route.path+'</loc></url>').join('')+'</urlset>');
await writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
await writeFile('dist/manifest.webmanifest',JSON.stringify({name:'Apex Drive',short_name:'Apex Drive',description:'Assemble, explore and drive four remarkable cars in 3D.',start_url:'/',scope:'/',display:'standalone',background_color:'#11151b',theme_color:'#11151b',icons:[{src:'/assets/icons/app-192.png',sizes:'192x192',type:'image/png'},{src:'/assets/icons/app-512.png',sizes:'512x512',type:'image/png'}]}));
await writeFile('dist/404.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><meta name="theme-color" content="#11151b"><title>Road not found | Apex Drive</title><link rel="icon" href="/assets/icons/favicon.svg"><style>body{margin:0;background:#11151b;color:#eceeed;font:16px system-ui;min-height:100svh;display:grid;place-items:center}main{max-width:32rem;padding:3rem}small{color:#8ba7bf;letter-spacing:.2em}h1{font-size:clamp(2rem,8vw,4rem);line-height:1.05}p{color:#a9b4bd;line-height:1.6}a{display:inline-block;margin-top:1rem;color:#f2f2e9;text-underline-offset:7px}</style></head><body><main><small>APEX / DRIVE · 404</small><h1>This road ends here.</h1><p>The page you’re looking for has moved or doesn’t exist. Your next drive starts in the garage.</p><a href="/">Back to the garage →</a></main></body></html>');
for(const file of await readdir('dist'))if(/^scene-[A-Z0-9]+\.js$/.test(file)&&file!==bundle)await rm('dist/'+file);
console.log('Built '+allRoutes.length+' routes with page-specific sharing metadata.');
