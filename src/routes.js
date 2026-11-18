export const cars=[
 {id:'ferrari',slug:'ferrari-458',name:'Ferrari 458',brand:'Ferrari'},
 {id:'bmw',slug:'bmw-m4-competition',name:'BMW M4 Competition',brand:'BMW'},
 {id:'lamborghini',slug:'lamborghini-aventador-svj',name:'Lamborghini Aventador SVJ',brand:'Lamborghini'},
 {id:'bugatti',slug:'bugatti-chiron',name:'Bugatti Chiron',brand:'Bugatti'}
];
export function carPath(index,mode='assembly') {
 const car=cars[index];if(!car)return '/';
 return mode==='drive'?'/drive/'+car.slug+'/':'/cars/'+car.slug+'/'+(mode==='explore'?'explore/':'');
}
export const allRoutes=[{path:'/',mode:'garage',index:-1},...cars.flatMap((_,index)=>['assembly','explore','drive'].map(mode=>({path:carPath(index,mode),mode,index})))];
export function resolveRoute(input) {
 const url=new URL(input,'https://route.invalid');
 let path=url.pathname.replace(/\/+$/,'')+'/';
 if(path==='/index.html/')path='/';
 if(path==='/'&&url.hash) {
  const hash=url.hash.slice(1),id=hash.replace(/-reveal$/,'');
  const index=cars.findIndex(car=>car.id===id);
  if(index>=0){const mode=hash.endsWith('-reveal')?'explore':'assembly';return {path:carPath(index,mode),mode,index,legacy:true};}
  if(['assembly','exploded','reveal'].includes(hash)){const mode=hash==='reveal'?'explore':'assembly';return {path:carPath(0,mode),mode,index:0,legacy:true};}
 }
 return allRoutes.find(route=>route.path===path)??{path,mode:'not-found',index:-1};
}
export function pageMetadata(route,origin) {
 const car=cars[route.index];
 const title=car?(route.mode==='drive'?'Test Drive '+car.name:car.name+' — '+(route.mode==='explore'?'360° Interior & Exterior':'3D Assembly'))+' | Apex Drive':'Apex Drive — Assemble. Explore. Drive.';
 const description=car?(route.mode==='drive'?'Take the '+car.name+' onto long forest, coastal and desert highways. Switch camera views, weather and time of day in an interactive browser test drive.':route.mode==='explore'?'Explore the '+car.name+' from every angle. Rotate the exterior, inspect the details and step into the driver or passenger seat in 3D.':'Watch the '+car.name+' come together as you scroll, then explore its exterior and cabin in 360° and head out for a test drive.'):'Four remarkable cars. Discover what goes into them, assemble every detail and take the wheel. Explore Ferrari, BMW, Lamborghini and Bugatti in 3D.';
 const image='/assets/social/models/'+(car?.id??'collection')+'.jpg';
 const absolute=path=>new URL(path,origin).href;
 return {title,description,url:absolute(route.path),image:absolute(image),imageAlt:car?'Render of the in-app 3D model of the '+car.name+' in a concrete automotive studio.':'Render of the in-app 3D model of the Ferrari 458, BMW M4 Competition, Lamborghini Aventador and Bugatti Chiron.',car};
}
