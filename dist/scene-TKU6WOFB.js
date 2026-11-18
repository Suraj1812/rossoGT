var qu=0,vl=1,ju=2;var Ml=1,xo=2,Zn=3,On=0,jt=1,Rt=2,mi=0,Xi=1,Sl=2,wl=3,Tl=4,Yu=5,Ai=100,Ku=101,Ju=102,Zu=103,$u=104,Qu=200,ed=201,td=202,nd=203,Wa=204,Xa=205,id=206,sd=207,rd=208,ad=209,od=210,cd=211,ld=212,hd=213,ud=214,_o=0,yo=1,vo=2,qi=3,Mo=4,So=5,wo=6,To=7,Ao=0,dd=1,fd=2,gi=0,pd=1,md=2,gd=3,Eo=4,bd=5,xd=6,_d=7,ll="attached",yd="detached",Al=300,rs=301,as=302,os=303,Ro=304,ta=306,$t=1e3,Tn=1001,ks=1002,Vt=1003,Co=1004;var cs=1005;var Lt=1006,Zs=1007;var Cn=1008;var Bn=1009,El=1010,Rl=1011,$s=1012,Io=1013,Di=1014,Qt=1015,_n=1016,Po=1017,Lo=1018,Qs=1020,Cl=35902,Il=35899,Pl=1021,Ll=1022,yn=1023,zs=1026,er=1027,Do=1028,Uo=1029,Dl=1030,Fo=1031;var No=1033,na=33776,ia=33777,sa=33778,ra=33779,Oo=35840,Bo=35841,ko=35842,zo=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,jo=37811,Yo=37812,Ko=37813,Jo=37814,Zo=37815,$o=37816,Qo=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,cc=36284,lc=36285,hc=36286;var ji=2300,Yi=2301,Va=2302,hl=2400,ul=2401,dl=2402,vd=2500;var Ul=0,aa=1,tr=2,Md=3200,Sd=3201;var uc=0,wd=1,kn="",tt="srgb",Dt="srgb-linear",Rr="linear",ft="srgb";var Wi=7680;var fl=519,Td=512,Ad=513,Ed=514,Fl=515,Rd=516,Cd=517,Id=518,Pd=519,qa=35044,Nl=35048;var Ol="300 es",Fn=2e3,Cr=2001;var li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,wr=Math.PI/180,Ki=180/Math.PI;function Nn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Bl(s,e){return(s%e+e)%e}function gp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bp(s,e,t){return s!==e?(t-s)/(e-s):0}function Tr(s,e,t){return(1-t)*s+t*e}function xp(s,e,t,n){return Tr(s,e,1-Math.exp(-t*n))}function _p(s,e=1){return e-Math.abs(Bl(s,e*2)-e)}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sp(s,e){return s+Math.random()*(e-s)}function wp(s){return s*(.5-Math.random())}function Tp(s){s!==void 0&&(ou=s);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(s){return s*wr}function Ep(s){return s*Ki}function Rp(s){return(s&s-1)===0&&s!==0}function Cp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mt={DEG2RAD:wr,RAD2DEG:Ki,generateUUID:Nn,clamp:Xe,euclideanModulo:Bl,mapLinear:gp,inverseLerp:bp,lerp:Tr,damp:xp,pingpong:_p,smoothstep:yp,smootherstep:vp,randInt:Mp,randFloat:Sp,randFloatSpread:wp,seededRandom:Tp,degToRad:Ap,radToDeg:Ep,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Pp,normalize:dt,denormalize:Un},be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let w=Math.sqrt(y),T=Math.atan2(w,p*b);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let _=o*b;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new R,cu=new Pt,qe=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],b=i[1],y=i[4],_=i[7],w=i[2],T=i[5],P=i[8];return r[0]=a*x+o*b+c*w,r[3]=a*m+o*y+c*T,r[6]=a*p+o*_+c*P,r[1]=l*x+h*b+u*w,r[4]=l*m+h*y+u*T,r[7]=l*p+h*_+u*P,r[2]=d*x+f*b+g*w,r[5]=d*m+f*y+g*T,r[8]=d*p+f*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new qe;function kl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ld(){let s=Hs("canvas");return s.style.display="block",s}var lu={};function Gs(s){s in lu||(lu[s]=!0,console.warn(s))}function Dd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lp(){let s={enabled:!0,workingColorSpace:Dt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Dt]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),s}var Ze=Lp();function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ws,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Hs("canvas")),ws.width=e.width,ws.height=e.height;let i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dp=0,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fc(i[a].image)):r.push(Fc(i[a]))}else r=Fc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ja.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Up=0,Nc=new R,Ot=class s extends li{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Tn,i=Tn,r=Lt,a=Cn,o=yn,c=Bn,l=s.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Nn(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Al;Ot.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,w=(p+1)/2,T=(h+d)/4,P=(u+x)/4,A=(g+m)/4;return y>_&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=P/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=A/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=P/r,i=A/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Ot(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_a.subVectors(this.max,gr),Ts.subVectors(e.a,gr),As.subVectors(e.b,gr),Es.subVectors(e.c,gr),_i.subVectors(As,Ts),yi.subVectors(Es,As),zi.subVectors(Ts,Es);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];return!Oc(t,Ts,As,Es,_a)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Ts,As,Es,_a))?!1:(ya.crossVectors(_i,yi),t=[ya.x,ya.y,ya.z],Oc(t,Ts,As,Es,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new R,new R,new R,new R,new R,new R,new R,new R],Pn=new R,xa=new xt,Ts=new R,As=new R,Es=new R,_i=new R,yi=new R,zi=new R,gr=new R,_a=new R,ya=new R,Hi=new R;function Oc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Fp=new xt,br=new R,Bc=new R,ln=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Bc)),this.expandByPoint(br.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ni=new R,kc=new R,va=new R,vi=new R,zc=new R,Ma=new R,Hc=new R,Ei=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){kc.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=vi.dot(this.direction),c=-vi.dot(va),l=vi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(kc).addScaledVector(va,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,r){zc.subVectors(t,e),Ma.subVectors(n,e),Hc.crossVectors(zc,Ma);let a=this.direction.dot(Hc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let c=o*this.direction.dot(Ma.crossVectors(vi,Ma));if(c<0)return null;let l=o*this.direction.dot(zc.cross(vi));if(l<0||c+l>a)return null;let h=-o*vi.dot(Hc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Op)}lookAt(e,t,n){let i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Mi.crossVectors(n,gn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Mi.crossVectors(n,gn)),Mi.normalize(),Sa.crossVectors(gn,Mi),i[0]=Mi.x,i[4]=Sa.x,i[8]=gn.x,i[1]=Mi.y,i[5]=Sa.y,i[9]=gn.y,i[2]=Mi.z,i[6]=Sa.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],y=n[7],_=n[11],w=n[15],T=i[0],P=i[4],A=i[8],v=i[12],M=i[1],C=i[5],I=i[9],B=i[13],k=i[2],z=i[6],U=i[10],X=i[14],W=i[3],oe=i[7],ce=i[11],ge=i[15];return r[0]=a*T+o*M+c*k+l*W,r[4]=a*P+o*C+c*z+l*oe,r[8]=a*A+o*I+c*U+l*ce,r[12]=a*v+o*B+c*X+l*ge,r[1]=h*T+u*M+d*k+f*W,r[5]=h*P+u*C+d*z+f*oe,r[9]=h*A+u*I+d*U+f*ce,r[13]=h*v+u*B+d*X+f*ge,r[2]=g*T+x*M+m*k+p*W,r[6]=g*P+x*C+m*z+p*oe,r[10]=g*A+x*I+m*U+p*ce,r[14]=g*v+x*B+m*X+p*ge,r[3]=b*T+y*M+_*k+w*W,r[7]=b*P+y*C+_*z+w*oe,r[11]=b*A+y*I+_*U+w*ce,r[15]=b*v+y*B+_*X+w*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,w=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,T=t*b+n*y+i*_+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=b*P,e[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*P,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*p+n*c*p)*P,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*P,e[4]=y*P,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*P,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*P,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*P,e[8]=_*P,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*P,e[12]=w*P,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*P,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=c*l,y=c*h,_=c*u,w=n.x,T=n.y,P=n.z;return i[0]=(1-(x+p))*w,i[1]=(f+_)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+y)*P,i[9]=(m-b)*P,i[10]=(1-(d+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Rs.set(i[0],i[1],i[2]).length(),a=Rs.set(i[4],i[5],i[6]).length(),o=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);let l=1/r,h=1/a,u=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Fn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new R,Ln=new Ne,Np=new R(0,0,0),Op=new R(1,1,1),Mi=new R,Sa=new R,gn=new R,du=new Ne,fu=new Pt,hn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bp=0,pu=new R,Cs=new Pt,ii=new Ne,wa=new R,xr=new R,kp=new R,zp=new Pt,mu=new R(1,0,0),gu=new R(0,1,0),bu=new R(0,0,1),xu={type:"added"},Hp={type:"removed"},Is={type:"childadded",child:null},Gc={type:"childremoved",child:null},Mt=class s extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new hn,n=new Pt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new qe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xr,wa,this.up):ii.lookAt(wa,xr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ii),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Mt.DEFAULT_UP=new R(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new R,si=new R,Vc=new R,ri=new R,Ps=new R,Ls=new R,_u=new R,Wc=new R,Xc=new R,qc=new R,jc=new st,Yc=new st,Kc=new st,Ti=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),si.subVectors(n,t),Vc.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(si),c=Dn.dot(Vc),l=si.dot(si),h=si.dot(Vc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return jc.setScalar(0),Yc.setScalar(0),Kc.setScalar(0),jc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,n),Kc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(Yc,r.y),a.addScaledVector(Kc,r.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),si.subVectors(e,t),Dn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ps.subVectors(i,n),Ls.subVectors(r,n),Wc.subVectors(e,n);let c=Ps.dot(Wc),l=Ls.dot(Wc);if(c<=0&&l<=0)return t.copy(n);Xc.subVectors(e,i);let h=Ps.dot(Xc),u=Ls.dot(Xc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ps,a);qc.subVectors(e,r);let f=Ps.dot(qc),g=Ls.dot(qc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ls,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _u.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(_u,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Bl(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jc(a,r,e+1/3),this.g=Jc(a,r,e),this.b=Jc(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Ze.workingToColorSpace(Zt.copy(this),e),Math.round(Xe(Zt.r*255,0,255))*65536+Math.round(Xe(Zt.g*255,0,255))*256+Math.round(Xe(Zt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,i=Zt.g,r=Zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=tt){Ze.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,i=Zt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ta);let n=Tr(Si.h,Ta.h,t),i=Tr(Si.s,Ta.s,t),r=Tr(Si.l,Ta.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Ce;Ce.NAMES=Ud;var Gp=0,rn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Xi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},St=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oi=Vp();function Vp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Wp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Xe(s,-65504,65504),oi.floatView[0]=s;let e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function Xp(s){let e=s>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(s&1023)]+oi.exponentTable[e],oi.floatView[0]}var Ri=class{static toHalfFloat(e){return Wp(e)}static fromHalfFloat(e){return Xp(e)}},Ft=new R,Aa=new be,qp=0,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}};var Pr=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lr=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},jp=0,Sn=new Ne,Zc=new Mt,Ds=new R,bn=new xt,_r=new xt,zt=new R,rt=class s extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?Lr:Pr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(bn.min,_r.min),bn.expandByPoint(zt),zt.addVectors(bn.max,_r.max),bn.expandByPoint(zt)):(bn.expandByPoint(_r.min),bn.expandByPoint(_r.max))}bn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(e,l),zt.add(Ds)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new R,c[A]=new R;let l=new R,h=new R,u=new R,d=new be,f=new be,g=new be,x=new R,m=new R;function p(A,v,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[A].add(x),o[v].add(x),o[M].add(x),c[A].add(m),c[v].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,v=b.length;A<v;++A){let M=b[A],C=M.start,I=M.count;for(let B=C,k=C+I;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new R,_=new R,w=new R,T=new R;function P(A){w.fromBufferAttribute(i,A),T.copy(w);let v=o[A];y.copy(v),y.sub(w.multiplyScalar(w.dot(v))).normalize(),_.crossVectors(T,v);let C=_.dot(c[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,v=b.length;A<v;++A){let M=b[A],C=M.start,I=M.count;for(let B=C,k=C+I;B<k;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yu=new Ne,Gi=new Ei,Ea=new ln,vu=new R,Ra=new R,Ca=new R,Ia=new R,$c=new R,Pa=new R,Mu=new R,La=new R,ke=class extends Mt{constructor(e=new rt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&($c.fromBufferAttribute(u,e),a?Pa.addScaledVector($c,h):Pa.addScaledVector($c.sub(t),h))}t.add(Pa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Ea.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ea,vu)===null||Gi.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,w=y;_<w;_+=3){let T=o.getX(_),P=o.getX(_+1),A=o.getX(_+2);i=Da(this,p,e,n,l,h,u,T,P,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Da(this,a,e,n,l,h,u,b,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,w=y;_<w;_+=3){let T=_,P=_+1,A=_+2;i=Da(this,p,e,n,l,h,u,T,P,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,y=m+1,_=m+2;i=Da(this,a,e,n,l,h,u,b,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Yp(s,e,t,n,i,r,a,o){let c;if(e.side===jt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===On,o),c===null)return null;La.copy(o),La.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(La);return l<t.near||l>t.far?null:{distance:l,point:La.clone(),object:s}}function Da(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ra),s.getVertexPosition(c,Ca),s.getVertexPosition(l,Ia);let h=Yp(s,e,t,n,Ra,Ca,Ia,Mu);if(h){let u=new R;Ti.getBarycoord(Mu,Ra,Ca,Ia,u),i&&(h.uv=Ti.getInterpolatedAttribute(i,o,c,l,u,new be)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,c,l,u,new be)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};Ti.getNormal(Ra,Ca,Ia,d.normal),h.face=d,h.barycoord=u}return h}var _t=class s extends rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(x,m,p,b,y,_,w,T,P,A,v){let M=_/P,C=w/A,I=_/2,B=w/2,k=T/2,z=P+1,U=A+1,X=0,W=0,oe=new R;for(let ce=0;ce<U;ce++){let ge=ce*C-B;for(let ve=0;ve<z;ve++){let ze=ve*M-I;oe[x]=ze*b,oe[m]=ge*y,oe[p]=k,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[p]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(ve/P),u.push(1-ce/A),X+=1}}for(let ce=0;ce<A;ce++)for(let ge=0;ge<P;ge++){let ve=d+ge+z*ce,ze=d+ge+z*(ce+1),Ke=d+(ge+1)+z*(ce+1),He=d+(ge+1)+z*ce;c.push(ve,ze,He),c.push(ze,Ke,He),W+=6}o.addGroup(f,W,v),f+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ls(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(s){let e={};for(let t=0;t<s.length;t++){let n=ls(s[t]);for(let i in n)e[i]=n[i]}return e}function Kp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var nr={clone:ls,merge:en},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dr=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new R,Su=new be,wu=new be,vt=class extends Dr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Su,wu),t.subVectors(wu,Su)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Fs=1,Ja=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vt(Us,Fs,e,t);i.layers=this.layers,this.add(i);let r=new vt(Us,Fs,e,t);r.layers=this.layers,this.add(r);let a=new vt(Us,Fs,e,t);a.layers=this.layers,this.add(a);let o=new vt(Us,Fs,e,t);o.layers=this.layers,this.add(o);let c=new vt(Us,Fs,e,t);c.layers=this.layers,this.add(c);let l=new vt(Us,Fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ur=class extends Ot{constructor(e=[],t=rs,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Za=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _t(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:mi});r.uniforms.tEquirect.value=t;let a=new ke(i,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Lt),new Ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},We=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$p={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ji=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new R,js=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Tu=new R,Au=new st,Eu=new st,Qp=new R,Ru=new Ne,Ua=new R,Qc=new ln,Cu=new Ne,el=new Ei,Nr=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ll,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qc.copy(this.boundingSphere),Qc.applyMatrix4(i),e.ray.intersectsSphere(Qc)!==!1&&(Cu.copy(i).invert(),el.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Au.fromBufferAttribute(i.attributes.skinIndex,e),Eu.fromBufferAttribute(i.attributes.skinWeight,e),Tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Eu.getComponent(r);if(a!==0){let o=Au.getComponent(r);Ru.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qp.copy(Tu).applyMatrix4(Ru),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ys=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ci=class extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Vt,h=Vt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Iu=new Ne,em=new Ne,Or=class s{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:em;Iu.multiplyMatrices(o,t[r]),Iu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ci(t,e,e,yn,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ys),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ns=new Ne,Pu=new Ne,Fa=[],Lu=new xt,tm=new Ne,yr=new ke,vr=new ln,Wt=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Lu.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),vr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Pu.multiplyMatrices(n,Ns),yr.matrixWorld=Pu,yr.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){let c=Fa[a];c.instanceId=r,c.object=this,t.push(c)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(i*this.count),i,this.count,Do,Qt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tl=new R,nm=new R,im=new qe,wn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=tl.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||im.getNormalMatrix(e),i=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new ln,sm=new be(.5,.5),Na=new R,Ks=class{constructor(e=new wn,t=new wn,n=new wn,i=new wn,r=new wn,a=new wn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],y=r[13],_=r[14],w=r[15];if(i[0].setComponents(l-a,f-h,p-g,w-b).normalize(),i[1].setComponents(l+a,f+h,p+g,w+b).normalize(),i[2].setComponents(l+o,f+u,p+x,w+y).normalize(),i[3].setComponents(l-o,f-u,p-x,w-y).normalize(),n)i[4].setComponents(c,d,m,_).normalize(),i[5].setComponents(l-c,f-d,p-m,w-_).normalize();else if(i[4].setComponents(l-c,f-d,p-m,w-_).normalize(),t===Fn)i[5].setComponents(l+c,f+d,p+m,w+_).normalize();else if(t===Cr)i[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=sm.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pi=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new R,Qa=new R,Du=new Ne,Mr=new Ei,Oa=new ln,nl=new R,Uu=new R,Zi=class extends Mt{constructor(e=new rt,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$a.fromBufferAttribute(t,i-1),Qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(Qa);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Du.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),b=h.getX(x+1),y=Ba(this,e,Mr,c,p,b,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Ba(this,e,Mr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Ba(this,e,Mr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ba(this,e,Mr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ba(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if($a.fromBufferAttribute(o,i),Qa.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Qa,nl,Uu)>n)return;nl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(nl);if(!(l<e.near||l>e.far))return{distance:l,point:Uu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Fu=new R,Nu=new R,$i=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fu.fromBufferAttribute(t,i),Nu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fu.distanceTo(Nu);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Br=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Li=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ou=new Ne,pl=new Ei,ka=new ln,za=new R,Qi=class extends Mt{constructor(e=new rt,t=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Ou.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);za.fromBufferAttribute(u,m),Bu(za,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)za.fromBufferAttribute(u,g),Bu(za,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bu(s,e,t,n,i,r,a){let o=pl.distanceSqToPoint(s);if(o<t){let c=new R;pl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xt=class extends Ot{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kr=class extends Ot{constructor(e,t,n=Di,i,r,a,o=Vt,c=Vt,l,h=zs,u=1){if(h!==zs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zr=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},En=class s extends rt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=i+1,m=new R,p=new R;for(let b=0;b<=g;b++){let y=0,_=0,w=0,T=0;if(b<=n){let v=b/n,M=v*Math.PI/2;_=-h-e*Math.cos(M),w=e*Math.sin(M),T=-e*Math.cos(M),y=v*u}else if(b<=n+r){let v=(b-n)/r;_=-h+v*t,w=e,T=0,y=u+v*d}else{let v=(b-n-r)/n,M=v*Math.PI/2;_=h+e*Math.sin(M),w=e*Math.cos(M),T=e*Math.sin(M),y=u+d+v*u}let P=Math.max(0,Math.min(1,y/f)),A=0;b===0?A=.5/i:b===g&&(A=-.5/i);for(let v=0;v<=i;v++){let M=v/i,C=M*Math.PI*2,I=Math.sin(C),B=Math.cos(C);p.x=-w*B,p.y=_,p.z=w*I,o.push(p.x,p.y,p.z),m.set(-w*B,T,w*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+A,P)}if(b>0){let v=(b-1)*x;for(let M=0;M<i;M++){let C=v+M,I=v+M+1,B=b*x+M,k=b*x+M+1;a.push(C,I,B),a.push(I,k,B)}}}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Hr=class s extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,h=new be;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class s extends rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function b(){let _=new R,w=new R,T=0,P=(t-e)/n;for(let A=0;A<=r;A++){let v=[],M=A/r,C=M*(t-e)+e;for(let I=0;I<=i;I++){let B=I/i,k=B*c+o,z=Math.sin(k),U=Math.cos(k);w.x=C*z,w.y=-M*n+m,w.z=C*U,u.push(w.x,w.y,w.z),_.set(z,P,U).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-M),v.push(g++)}x.push(v)}for(let A=0;A<i;A++)for(let v=0;v<r;v++){let M=x[v][A],C=x[v+1][A],I=x[v+1][A+1],B=x[v][A+1];(e>0||v!==0)&&(h.push(M,C,B),T+=3),(t>0||v!==r-1)&&(h.push(C,I,B),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){let w=g,T=new be,P=new R,A=0,v=_===!0?e:t,M=_===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let I=0;I<=i;I++){let k=I/i*c+o,z=Math.cos(k),U=Math.sin(k);P.x=v*U,P.y=m*M,P.z=v*z,u.push(P.x,P.y,P.z),d.push(0,M,0),T.x=z*.5+.5,T.y=U*.5*M+.5,f.push(T.x,T.y),g++}for(let I=0;I<i;I++){let B=w+I,k=C+I;_===!0?h.push(k,k+1,B):h.push(k+1,k,B),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gr=class s extends qt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},eo=class s extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new R,_=new R,w=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],_),f(t[T+2],w),c(y,_,w,b)}function c(b,y,_,w){let T=w+1,P=[];for(let A=0;A<=T;A++){P[A]=[];let v=b.clone().lerp(_,A/T),M=y.clone().lerp(_,A/T),C=T-A;for(let I=0;I<=C;I++)I===0&&A===T?P[A][I]=v:P[A][I]=v.clone().lerp(M,I/C)}for(let A=0;A<T;A++)for(let v=0;v<2*(T-A)-1;v++){let M=Math.floor(v/2);v%2===0?(d(P[A][M+1]),d(P[A+1][M]),d(P[A][M])):(d(P[A][M+1]),d(P[A+1][M+1]),d(P[A+1][M]))}}function l(b){let y=new R;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(b),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let b=new R;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let _=m(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(_,1-w)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let y=a[b+0],_=a[b+2],w=a[b+4],T=Math.max(y,_,w),P=Math.min(y,_,w);T>.9&&P<.1&&(y<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){let _=b*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let b=new R,y=new R,_=new R,w=new R,T=new be,P=new be,A=new be;for(let v=0,M=0;v<r.length;v+=9,M+=6){b.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),T.set(a[M+0],a[M+1]),P.set(a[M+2],a[M+3]),A.set(a[M+4],a[M+5]),w.copy(b).add(y).add(_).divideScalar(3);let C=m(w);x(T,M+0,b,C),x(P,M+2,y,C),x(A,M+4,_,C)}}function x(b,y,_,w){w<0&&b.x===1&&(a[y]=b.x-1),_.x===0&&_.z===0&&(a[y]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new be:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,c=new Ne;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new be){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},to=class extends Vr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ha=new R,il=new Hl,sl=new Hl,rl=new Hl,Xn=class extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ha.subVectors(i[0],i[1]).add(i[0]),l=Ha);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ha.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),il.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),sl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),rl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),rl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(il.calc(c),sl.calc(c),rl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ku(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function rm(s,e){let t=1-s;return t*t*e}function am(s,e){return 2*(1-s)*s*e}function om(s,e){return s*s*e}function Ar(s,e,t,n){return rm(s,e)+am(s,t)+om(s,n)}function cm(s,e){let t=1-s;return t*t*t*e}function lm(s,e){let t=1-s;return 3*t*t*s*e}function hm(s,e){return 3*(1-s)*s*s*e}function um(s,e){return s*s*s*e}function Er(s,e,t,n,i){return cm(s,e)+lm(s,t)+hm(s,n)+um(s,i)}var no=class extends Rn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,i.x,r.x,a.x,o.x),Er(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends Rn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,i.x,r.x,a.x,o.x),Er(e,i.y,r.y,a.y,o.y),Er(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},so=class extends Rn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Rn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Rn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,i.x,r.x,a.x),Ar(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Rn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,i.x,r.x,a.x),Ar(e,i.y,r.y,a.y),Ar(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ku(o,c.x,l.x,h.x,u.x),ku(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new be().fromArray(i))}return this}},dm=Object.freeze({__proto__:null,ArcCurve:to,CatmullRomCurve3:Xn,CubicBezierCurve:no,CubicBezierCurve3:io,EllipseCurve:Vr,LineCurve:so,LineCurve3:ro,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Wr,SplineCurve:oo});var Js=class s extends eo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Xr=class s extends rt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Xe(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,d=new be,f=new R,g=new R,x=new R,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let y=n+b*h*i,_=Math.sin(y),w=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=b/t,d.y=T/(e.length-1),o.push(d.x,d.y);let P=c[3*T+0]*_,A=c[3*T+1],v=c[3*T+0]*w;l.push(P,A,v)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let _=y+b*e.length,w=_,T=_+e.length,P=_+e.length+1,A=_+1;r.push(w,T,A),r.push(P,A,T)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ht=class s extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<l;y++){let _=y*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,_=b+l*(p+1),w=b+1+l*(p+1),T=b+1+l*p;f.push(y,_,T),f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ut=class s extends rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],y=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let y=h[p][b+1],_=h[p][b],w=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(y,_,T),(p!==n-1||c<Math.PI)&&f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class s extends rt{constructor(e=new Wr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new be,h=new R,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),b(),p()}function m(y){h=e.getPointAt(y/t,h);let _=a.normals[y],w=a.binormals[y];for(let T=0;T<=i;T++){let P=T/i*Math.PI*2,A=Math.sin(P),v=-Math.cos(P);c.x=v*_.x+A*w.x,c.y=v*_.y+A*w.y,c.z=v*_.z+A*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){let w=(i+1)*(y-1)+(_-1),T=(i+1)*y+(_-1),P=(i+1)*y+_,A=(i+1)*(y-1)+_;g.push(w,T,A),g.push(T,P,A)}}function b(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)l.x=y/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new dm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Je=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ht=class extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qr=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},co=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lo=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ga(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Fd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var hi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ho=class extends hi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ul:r=e,o=2*t-n;break;case dl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:a=e,c=2*n-t;break;case dl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+b*a[l+w]+y*a[c+w]+_*a[u+w];return r}},uo=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},fo=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ho(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ji:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ji;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&fm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Va,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Yi;var ui=class extends un{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=ji;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};jr.prototype.ValueTypeName="color";var qn=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};qn.prototype.ValueTypeName="number";var po=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Pt.slerpFlat(r,0,a,l-o,a,l,c);return r}},jn=class extends un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}};jn.prototype.ValueTypeName="quaternion";jn.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends un{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=ji;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};Yn.prototype.ValueTypeName="vector";var Yr=class{constructor(e="",t=-1,n=[],i=vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=pm(c);c=zu(c,1,h),l=zu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new qn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Fd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new qn(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Yn,f+".position",d,"pos",i),n(jn,f+".quaternion",d,"rot",i),n(Yn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function mm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qn;case"vector":case"vector2":case"vector3":case"vector4":return Yn;case"color":return jr;case"quaternion":return jn;case"bool":case"boolean":return ui;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mm(s.type);if(s.times===void 0){let t=[],n=[];Fd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},mo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nd=new mo,xn=class{constructor(e){this.manager=e!==void 0?e:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},ml=class extends Error{constructor(e,t){super(e),this.response=t}},Kn=class extends xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ai[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,P=h.length;T<P;T++){let A=h[T];A.onProgress&&A.onProgress(w)}p.enqueue(_),b()}},y=>{p.error(y)})}}});return new Response(m)}else throw new ml(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wn.add(`file:${e}`,l);let h=ai[e];delete ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,go=class extends xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Os.get(a);u===void 0&&(u=[],Os.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Hs("img");function c(){h(),t&&t(this);let u=Os.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Os.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Wn.remove(`image:${e}`);let d=Os.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Kr=class extends xn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Ci,o=new Kn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Tn,a.wrapT=l.wrapT!==void 0?l.wrapT:Tn,a.magFilter=l.magFilter!==void 0?l.magFilter:Lt,a.minFilter=l.minFilter!==void 0?l.minFilter:Lt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Cn),l.mipmapCount===1&&(a.minFilter=Lt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}},ts=class extends xn{constructor(e){super(e)}load(e,t,n,i){let r=new Ot,a=new go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ns=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},is=class extends ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},al=new Ne,Hu=new R,Gu=new R,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gl=class extends Jr{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ki*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jn=class extends ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vu=new Ne,Sr=new R,ol=new R,bl=class extends Jr{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),ol.copy(n.position),ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ol),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu,n.coordinateSystem,n.reversedDepth)}},Zr=class extends ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ss=class extends Dr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xl=class extends Jr{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cl=new WeakMap,$r=class extends xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(cl.has(a)===!0)i&&i(cl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),cl.set(c,l),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var bo=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Gl="\\[\\]\\.:\\/",bm=new RegExp("["+Gl+"]","g"),Vl="[^"+Gl+"]",xm="[^"+Gl.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",Vl),ym=/(WCOD+)?/.source.replace("WCOD",xm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Sm=new RegExp("^"+_m+ym+vm+Mm+"$"),wm=["material","materials","bones","map"],_l=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(e){let t=Sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=_l;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var Wu=new Ne,Qr=class{constructor(e,t,n=0,i=1/0){this.ray=new Ei(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(Xu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yl(e[i],this,n,t);return n.sort(Xu),n}};function Xu(s,e){return s.distance-e.distance}function yl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)yl(r[a],e,t,!0)}}var ea=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function Wl(s,e,t,n){let i=Tm(n);switch(t){case Pl:return s*e;case Do:return s*e/i.components*i.byteLength;case Uo:return s*e/i.components*i.byteLength;case Dl:return s*e*2/i.components*i.byteLength;case Fo:return s*e*2/i.components*i.byteLength;case Ll:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case No:return s*e*4/i.components*i.byteLength;case na:case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:case zo:return Math.max(s,16)*Math.max(e,8)/4;case Oo:case ko:return Math.max(s,8)*Math.max(e,8)/2;case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oc:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(s){switch(s){case Bn:case El:return{byteLength:1,components:1};case $s:case Rl:case _n:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case Di:case Io:case Qt:return{byteLength:4,components:1};case Cl:case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function of(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Em(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Im,alphamap_pars_fragment:Pm,alphatest_fragment:Lm,alphatest_pars_fragment:Dm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:Nm,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:km,bsdfs:zm,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:jm,color_pars_fragment:Ym,color_pars_vertex:Km,color_vertex:Jm,common:Zm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Qm,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:sg,colorspace_pars_fragment:rg,envmap_fragment:ag,envmap_common_pars_fragment:og,envmap_pars_fragment:cg,envmap_pars_vertex:lg,envmap_physical_pars_fragment:yg,envmap_vertex:hg,fog_vertex:ug,fog_pars_vertex:dg,fog_fragment:fg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:wg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Eg,lights_fragment_maps:Rg,lights_fragment_end:Cg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Dg,map_fragment:Ug,map_pars_fragment:Fg,map_particle_fragment:Ng,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:kg,morphinstance_vertex:zg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:jg,normal_pars_vertex:Yg,normal_vertex:Kg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:b0,specularmap_pars_fragment:x0,tonemapping_fragment:_0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:w0,uv_vertex:T0,worldpos_vertex:A0,background_vert:E0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:I0,cube_vert:P0,cube_frag:L0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:F0,distanceRGBA_frag:N0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:H0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:j0,meshnormal_frag:Y0,meshphong_vert:K0,meshphong_frag:J0,meshphysical_vert:Z0,meshphysical_frag:$0,meshtoon_vert:Q0,meshtoon_frag:eb,points_vert:tb,points_frag:nb,shadow_vert:ib,shadow_frag:sb,sprite_vert:rb,sprite_frag:ab},pe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},$n={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};$n.physical={uniforms:en([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var dc={r:0,b:0,g:0},hs=new hn,ob=new Ne;function cb(s,e,t,n,i,r,a){let o=new Ce(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,w=g(y);w===null?p(o,c):w&&w.isColor&&(p(w,1),_=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){let w=g(_);w&&(w.isCubeTexture||w.mapping===ta)?(h===void 0&&(h=new ke(new _t(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hs.copy(_.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ob.makeRotationFromEuler(hs)),h.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ft,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ke(new Ht(2,2),new an({name:"BackgroundMaterial",uniforms:ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(dc,zl(s)),n.buffers.color.setClear(dc.r,dc.g,dc.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:x,addToRenderList:m,dispose:b}}function lb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,C,I,B,k){let z=!1,U=u(B,I,C);r!==U&&(r=U,l(r.object)),z=f(M,B,I,k),z&&g(M,B,I,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,_(M,C,I,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,I){let B=I.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let z=k[C.id];z===void 0&&(z={},k[C.id]=z);let U=z[B];return U===void 0&&(U=d(c()),z[B]=U),U}function d(M){let C=[],I=[],B=[];for(let k=0;k<t;k++)C[k]=0,I[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,C,I,B){let k=r.attributes,z=C.attributes,U=0,X=I.getAttributes();for(let W in X)if(X[W].location>=0){let ce=k[W],ge=z[W];if(ge===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(M,C,I,B){let k={},z=C.attributes,U=0,X=I.getAttributes();for(let W in X)if(X[W].location>=0){let ce=z[W];ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));let ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),k[W]=ge,U++}r.attributes=k,r.attributesNum=U,r.index=B}function x(){let M=r.newAttributes;for(let C=0,I=M.length;C<I;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let I=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;I[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),k[M]!==C&&(s.vertexAttribDivisor(M,C),k[M]=C)}function b(){let M=r.newAttributes,C=r.enabledAttributes;for(let I=0,B=C.length;I<B;I++)C[I]!==M[I]&&(s.disableVertexAttribArray(I),C[I]=0)}function y(M,C,I,B,k,z,U){U===!0?s.vertexAttribIPointer(M,C,I,k,z):s.vertexAttribPointer(M,C,I,B,k,z)}function _(M,C,I,B){x();let k=B.attributes,z=I.getAttributes(),U=C.defaultAttributeValues;for(let X in z){let W=z[X];if(W.location>=0){let oe=k[X];if(oe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let ce=oe.normalized,ge=oe.itemSize,ve=e.get(oe);if(ve===void 0)continue;let ze=ve.buffer,Ke=ve.type,He=ve.bytesPerElement,ie=Ke===s.INT||Ke===s.UNSIGNED_INT||oe.gpuType===Io;if(oe.isInterleavedBufferAttribute){let re=oe.data,_e=re.stride,Pe=oe.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)m(W.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Ae=0;Ae<W.locationSize;Ae++)y(W.location+Ae,ge/W.locationSize,Ke,ce,_e*He,(Pe+ge/W.locationSize*Ae)*He,ie)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)p(W.location+re,oe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let re=0;re<W.locationSize;re++)y(W.location+re,ge/W.locationSize,Ke,ce,ge*He,ge/W.locationSize*re*He,ie)}}else if(U!==void 0){let ce=U[X];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(W.location,ce);break;case 3:s.vertexAttrib3fv(W.location,ce);break;case 4:s.vertexAttrib4fv(W.location,ce);break;default:s.vertexAttrib1fv(W.location,ce)}}}}b()}function w(){A();for(let M in n){let C=n[M];for(let I in C){let B=C[I];for(let k in B)h(B[k].object),delete B[k];delete C[I]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let I in C){let B=C[I];for(let k in B)h(B[k].object),delete B[k];delete C[I]}delete n[M.id]}function P(M){for(let C in n){let I=n[C];if(I[M.id]===void 0)continue;let B=I[M.id];for(let k in B)h(B[k].object),delete B[k];delete I[M.id]}}function A(){v(),a=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function hb(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ub(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==yn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let A=P===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Bn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Qt&&!A)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:T}}function db(s){let e=this,t=null,n=0,i=!1,r=!1,a=new wn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,y=b*4,_=p.clippingState||null;c.value=_,_=h(g,d,y,f);for(let w=0;w!==y;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fb(s){let e=new WeakMap;function t(a,o){return o===os?a.mapping=rs:o===Ro&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===os||o===Ro)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Za(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var sr=4,Od=[.125,.215,.35,.446,.526,.582],fs=20,Xl=new ss,Bd=new Ce,ql=null,jl=0,Yl=0,Kl=!1,ds=(1+Math.sqrt(5))/2,ir=1/ds,kd=[new R(-ds,ir,0),new R(ds,ir,0),new R(-ir,0,ds),new R(ir,0,ds),new R(0,ds,-ir),new R(0,ds,ir),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],pb=new R,Ui=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=pb}=r;ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,jl,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:_n,format:yn,colorSpace:Dt,depthBuffer:!1},i=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(r)),this._blurMaterial=gb(r,e,t)}return i}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,i,r){let c=new vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Bd),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new St({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new ke(new _t,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Bd),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let w=this._cubeSize;fc(i,_*w,y>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===rs||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;fc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kd[(i-r-1)%kd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let p=[],b=0;for(let P=0;P<fs;++P){let A=P/x,v=Math.exp(-A*A/2);p.push(v),P===0?b+=v:P<m&&(b+=2*v)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[i],w=3*_*(i>y-sr?i-y+sr:0),T=4*(this._cubeSize-_);fc(t,w,T,3*_,2*_),c.setRenderTarget(t),c.render(u,Xl)}};function mb(s){let e=[],t=[],n=[],i=s,r=s-sr+1+Od.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-sr?c=Od[a-s+sr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,A=T>2?0:-1,v=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];b.set(v,x*g*T),y.set(d,m*g*T);let M=[T,T,T,T,T,T];_.set(M,p*g*T)}let w=new rt;w.setAttribute("position",new at(b,x)),w.setAttribute("uv",new at(y,m)),w.setAttribute("faceIndex",new at(_,p)),e.push(w),i>sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(s,e,t){let n=new An(s,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gb(s,e,t){let n=new Float32Array(fs),i=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Gd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bb(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===os||c===Ro,h=c===rs||c===as;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ui(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ui(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _b(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,_=b.length;y<_;y+=3){let w=b[y+0],T=b[y+1],P=b[y+2];d.push(w,T,T,P,P,w)}}else if(g!==void 0){let b=g.array;x=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){let w=y+0,T=y+1,P=y+2;d.push(w,T,T,P,P,w)}}else return;let m=new(kl(d)?Lr:Pr)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function yb(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mb(s,e,t){let n=new WeakMap,i=new st;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*w*4*u),P=new Ir(T,_,w,u);P.type=Qt,P.needsUpdate=!0;let A=y*4;for(let M=0;M<u;M++){let C=m[M],I=p[M],B=b[M],k=_*w*4*M;for(let z=0;z<C.count;z++){let U=z*A;f===!0&&(i.fromBufferAttribute(C,z),T[k+U+0]=i.x,T[k+U+1]=i.y,T[k+U+2]=i.z,T[k+U+3]=0),g===!0&&(i.fromBufferAttribute(I,z),T[k+U+4]=i.x,T[k+U+5]=i.y,T[k+U+6]=i.z,T[k+U+7]=0),x===!0&&(i.fromBufferAttribute(B,z),T[k+U+8]=i.x,T[k+U+9]=i.y,T[k+U+10]=i.z,T[k+U+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new be(_,w)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Sb(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var cf=new Ot,Vd=new kr(1,1),lf=new Ir,hf=new Ka,uf=new Ur,Wd=[],Xd=[],qd=new Float32Array(16),jd=new Float32Array(9),Yd=new Float32Array(4);function ar(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Wd[i];if(r===void 0&&(r=new Float32Array(i),Wd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function gc(s,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Tb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function Ab(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function Eb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function Rb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Yd.set(n),s.uniformMatrix2fv(this.addr,!1,Yd),kt(t,n)}}function Cb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;jd.set(n),s.uniformMatrix3fv(this.addr,!1,jd),kt(t,n)}}function Ib(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;qd.set(n),s.uniformMatrix4fv(this.addr,!1,qd),kt(t,n)}}function Pb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function Db(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function Ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function Fb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function Ob(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function Bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function kb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vd.compareFunction=Fl,r=Vd):r=cf,t.setTexture2D(e||r,i)}function zb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function Hb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function Gb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function Vb(s){switch(s){case 5126:return wb;case 35664:return Tb;case 35665:return Ab;case 35666:return Eb;case 35674:return Rb;case 35675:return Cb;case 35676:return Ib;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ub;case 5125:return Fb;case 36294:return Nb;case 36295:return Ob;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}function Wb(s,e){s.uniform1fv(this.addr,e)}function Xb(s,e){let t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function qb(s,e){let t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function jb(s,e){let t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Yb(s,e){let t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Kb(s,e){let t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jb(s,e){let t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Zb(s,e){s.uniform1iv(this.addr,e)}function $b(s,e){s.uniform2iv(this.addr,e)}function Qb(s,e){s.uniform3iv(this.addr,e)}function ex(s,e){s.uniform4iv(this.addr,e)}function tx(s,e){s.uniform1uiv(this.addr,e)}function nx(s,e){s.uniform2uiv(this.addr,e)}function ix(s,e){s.uniform3uiv(this.addr,e)}function sx(s,e){s.uniform4uiv(this.addr,e)}function rx(s,e,t){let n=this.cache,i=e.length,r=gc(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cf,r[a])}function ax(s,e,t){let n=this.cache,i=e.length,r=gc(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hf,r[a])}function ox(s,e,t){let n=this.cache,i=e.length,r=gc(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uf,r[a])}function cx(s,e,t){let n=this.cache,i=e.length,r=gc(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lf,r[a])}function lx(s){switch(s){case 5126:return Wb;case 35664:return Xb;case 35665:return qb;case 35666:return jb;case 35674:return Yb;case 35675:return Kb;case 35676:return Jb;case 5124:case 35670:return Zb;case 35667:case 35671:return $b;case 35668:case 35672:return Qb;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return cx}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vb(t.type)}},$l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lx(t.type)}},Ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Kd(s,e){s.seq.push(e),s.map[e.id]=e}function hx(s,e,t){let n=s.name,i=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),a=Jl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Kd(t,l===void 0?new Zl(o,s,e):new $l(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ql(o),Kd(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);hx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Jd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ux=37297,dx=0;function fx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zd=new qe;function px(s){Ze._getMatrix(Zd,Ze.workingColorSpace,s);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Rr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $d(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fx(s.getShaderSource(e),o)}else return r}function mx(s,e){let t=px(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gx(s,e){let t;switch(e){case pd:t="Linear";break;case md:t="Reinhard";break;case gd:t="Cineon";break;case Eo:t="ACESFilmic";break;case xd:t="AgX";break;case _d:t="Neutral";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new R;function bx(){Ze.getLuminanceCoefficients(pc);let s=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function _x(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function oa(s){return s!==""}function Qd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(s){return s.replace(vx,Sx)}var Mx=new Map;function Sx(s,e){let t=Ye[e];if(t===void 0){let n=Mx.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(s){return s.replace(wx,Tx)}function Tx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ax(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case as:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Px(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ax(t),l=Ex(t),h=Rx(t),u=Cx(t),d=Ix(t),f=xx(t),g=_x(r),x=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==gi?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),a=eh(a),a=Qd(a,t),a=ef(a,t),o=eh(o),o=Qd(o,t),o=ef(o,t),a=tf(a),o=tf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+a,_=b+p+o,w=Jd(i,i.VERTEX_SHADER,y),T=Jd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,w),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(C){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(w)||"",k=i.getShaderInfoLog(T)||"",z=I.trim(),U=B.trim(),X=k.trim(),W=!0,oe=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,T);else{let ce=$d(i,w,"vertex"),ge=$d(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ce+`
`+ge)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||X==="")&&(oe=!1);oe&&(C.diagnostics={runnable:W,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(w),i.deleteShader(T),A=new rr(i,x),v=yx(i,x)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,ux)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var Lx=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nh(e),t.set(e,n)),n}},nh=class{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}};function Dx(s,e,t,n,i,r,a){let o=new Ws,c=new th,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,C,I,B){let k=I.fog,z=B.geometry,U=v.isMeshStandardMaterial?I.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||U),W=X&&X.mapping===ta?X.image.height:null,oe=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=ce!==void 0?ce.length:0,ve=0;z.morphAttributes.position!==void 0&&(ve=1),z.morphAttributes.normal!==void 0&&(ve=2),z.morphAttributes.color!==void 0&&(ve=3);let ze,Ke,He,ie;if(oe){let Ve=$n[oe];ze=Ve.vertexShader,Ke=Ve.fragmentShader}else ze=v.vertexShader,Ke=v.fragmentShader,c.update(v),He=c.getVertexShaderID(v),ie=c.getFragmentShaderID(v);let re=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,je=!!v.map,yt=!!v.matcap,F=!!X,it=!!v.aoMap,xe=!!v.lightMap,Ie=!!v.bumpMap,Se=!!v.normalMap,lt=!!v.displacementMap,ye=!!v.emissiveMap,Oe=!!v.metalnessMap,Ct=!!v.roughnessMap,ut=v.anisotropy>0,L=v.clearcoat>0,S=v.dispersion>0,J=v.iridescence>0,te=v.sheen>0,ae=v.transmission>0,ee=ut&&!!v.anisotropyMap,Te=L&&!!v.clearcoatMap,ue=L&&!!v.clearcoatNormalMap,Me=L&&!!v.clearcoatRoughnessMap,Ee=J&&!!v.iridescenceMap,le=J&&!!v.iridescenceThicknessMap,fe=te&&!!v.sheenColorMap,N=te&&!!v.sheenRoughnessMap,G=!!v.specularMap,V=!!v.specularColorMap,se=!!v.specularIntensityMap,D=ae&&!!v.transmissionMap,H=ae&&!!v.thicknessMap,ne=!!v.gradientMap,O=!!v.alphaMap,Y=v.alphaTest>0,j=!!v.alphaHash,Q=!!v.extensions,de=gi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(de=s.toneMapping);let Le={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:Ke,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Dt,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:yt,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:W,aoMap:it,lightMap:xe,bumpMap:Ie,normalMap:Se,displacementMap:d&&lt,emissiveMap:ye,normalMapObjectSpace:Se&&v.normalMapType===wd,normalMapTangentSpace:Se&&v.normalMapType===uc,metalnessMap:Oe,roughnessMap:Ct,anisotropy:ut,anisotropyMap:ee,clearcoat:L,clearcoatMap:Te,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,dispersion:S,iridescence:J,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:te,sheenColorMap:fe,sheenRoughnessMap:N,specularMap:G,specularColorMap:V,specularIntensityMap:se,transmission:ae,transmissionMap:D,thicknessMap:H,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Xi&&v.alphaToCoverage===!1,alphaMap:O,alphaTest:Y,alphaHash:j,combine:v.combine,mapUv:je&&x(v.map.channel),aoMapUv:it&&x(v.aoMap.channel),lightMapUv:xe&&x(v.lightMap.channel),bumpMapUv:Ie&&x(v.bumpMap.channel),normalMapUv:Se&&x(v.normalMap.channel),displacementMapUv:lt&&x(v.displacementMap.channel),emissiveMapUv:ye&&x(v.emissiveMap.channel),metalnessMapUv:Oe&&x(v.metalnessMap.channel),roughnessMapUv:Ct&&x(v.roughnessMap.channel),anisotropyMapUv:ee&&x(v.anisotropyMap.channel),clearcoatMapUv:Te&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:N&&x(v.sheenRoughnessMap.channel),specularMapUv:G&&x(v.specularMap.channel),specularColorMapUv:V&&x(v.specularColorMap.channel),specularIntensityMapUv:se&&x(v.specularIntensityMap.channel),transmissionMapUv:D&&x(v.transmissionMap.channel),thicknessMapUv:H&&x(v.thicknessMap.channel),alphaMapUv:O&&x(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Se||ut),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(je||O),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rt,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Q&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&v.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(b(M,v),y(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function _(v){let M=g[v.type],C;if(M){let I=$n[M];C=nr.clone(I.uniforms)}else C=v.uniforms;return C}function w(v,M){let C;for(let I=0,B=h.length;I<B;I++){let k=h[I];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Px(s,M,v,r),h.push(C)),C}function T(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:A}}function Ux(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Fx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Fx),n.length>1&&n.sort(d||sf),i.length>1&&i.sort(d||sf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Nx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new rf,s.set(n,[a])):i>=r.length?(a=new rf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ox(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ce};break;case"SpotLight":t={position:new R,direction:new R,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Bx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var kx=0;function zx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hx(s){let e=new Ox,t=Bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,r=new Ne,a=new Ne;function o(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,y=0,_=0,w=0,T=0,P=0;l.sort(zx);for(let v=0,M=l.length;v<M;v++){let C=l[v],I=C.color,B=C.intensity,k=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*B,u+=I.g*B,d+=I.b*B;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],B);P++}else if(C.isDirectionalLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=U,f++}else if(C.isSpotLight){let U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(I).multiplyScalar(B),U.distance=k,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[x]=U;let X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[x]=X.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=z,_++}x++}else if(C.isRectAreaLight){let U=e.get(C);U.color.copy(I).multiplyScalar(B),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let X=C.shadow,W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=U,g++}else if(C.isHemisphereLight){let U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(B),U.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==b||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==w||A.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=b,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=w,A.numLightProbes=P,n.version=kx++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function af(s){let e=new Hx(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Gx(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new af(s),e.set(i,[o])):r>=a.length?(o=new af(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xx(s,e,t){let n=new Ks,i=new be,r=new be,a=new st,o=new co({depthPacking:Sd}),c=new lo,l={},h=t.maxTextureSize,u={[On]:jt,[jt]:On,[Rt]:Rt},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new rt;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let p=this.type;this.render=function(T,P,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),I=s.state;I.setBlending(mi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=p!==Zn&&this.type===Zn,k=p===Zn&&this.type!==Zn;for(let z=0,U=T.length;z<U;z++){let X=T[z],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let oe=W.getFrameExtents();if(i.multiply(oe),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||B===!0||k===!0){let ge=this.type!==Zn?{minFilter:Vt,magFilter:Vt}:{};W.map!==null&&W.map.dispose(),W.map=new An(i.x,i.y,ge),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let ce=W.getViewportCount();for(let ge=0;ge<ce;ge++){let ve=W.getViewport(ge);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),I.viewport(a),W.updateMatrices(X,ge),n=W.getFrustum(),_(P,A,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&b(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,M,C)};function b(T,P){let A=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,A,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,A,f,x,null)}function y(T,P,A,v){let M=null,C=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=A.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let I=M.uuid,B=P.uuid,k=l[I];k===void 0&&(k={},l[I]=k);let z=k[B];z===void 0&&(z=M.clone(),k[B]=z,P.addEventListener("dispose",w)),M=z}if(M.visible=P.visible,M.wireframe=P.wireframe,v===Zn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=s.properties.get(M);I.light=A}return M}function _(T,P,A,v,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let B=e.update(T),k=T.material;if(Array.isArray(k)){let z=B.groups;for(let U=0,X=z.length;U<X;U++){let W=z[U],oe=k[W.materialIndex];if(oe&&oe.visible){let ce=y(T,oe,v,M);T.onBeforeShadow(s,T,P,A,B,ce,W),s.renderBufferDirect(A,null,B,ce,T,W),T.onAfterShadow(s,T,P,A,B,ce,W)}}}else if(k.visible){let z=y(T,k,v,M);T.onBeforeShadow(s,T,P,A,B,z,null),s.renderBufferDirect(A,null,B,z,T,null),T.onAfterShadow(s,T,P,A,B,z,null)}}let I=T.children;for(let B=0,k=I.length;B<k;B++)_(I[B],P,A,v,M)}function w(T){T.target.removeEventListener("dispose",w);for(let A in l){let v=l[A],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var qx={[_o]:yo,[vo]:wo,[Mo]:To,[qi]:So,[yo]:_o,[wo]:vo,[To]:Mo,[So]:qi};function jx(s,e){function t(){let D=!1,H=new st,ne=null,O=new st(0,0,0,0);return{setMask:function(Y){ne!==Y&&!D&&(s.colorMask(Y,Y,Y,Y),ne=Y)},setLocked:function(Y){D=Y},setClear:function(Y,j,Q,de,Le){Le===!0&&(Y*=de,j*=de,Q*=de),H.set(Y,j,Q,de),O.equals(H)===!1&&(s.clearColor(Y,j,Q,de),O.copy(H))},reset:function(){D=!1,ne=null,O.set(-1,0,0,0)}}}function n(){let D=!1,H=!1,ne=null,O=null,Y=null;return{setReversed:function(j){if(H!==j){let Q=e.get("EXT_clip_control");j?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT),H=j;let de=Y;Y=null,this.setClear(de)}},getReversed:function(){return H},setTest:function(j){j?re(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(j){ne!==j&&!D&&(s.depthMask(j),ne=j)},setFunc:function(j){if(H&&(j=qx[j]),O!==j){switch(j){case _o:s.depthFunc(s.NEVER);break;case yo:s.depthFunc(s.ALWAYS);break;case vo:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case wo:s.depthFunc(s.GREATER);break;case To:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}O=j}},setLocked:function(j){D=j},setClear:function(j){Y!==j&&(H&&(j=1-j),s.clearDepth(j),Y=j)},reset:function(){D=!1,ne=null,O=null,Y=null,H=!1}}}function i(){let D=!1,H=null,ne=null,O=null,Y=null,j=null,Q=null,de=null,Le=null;return{setTest:function(Ve){D||(Ve?re(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Ve){H!==Ve&&!D&&(s.stencilMask(Ve),H=Ve)},setFunc:function(Ve,Nt,Gt){(ne!==Ve||O!==Nt||Y!==Gt)&&(s.stencilFunc(Ve,Nt,Gt),ne=Ve,O=Nt,Y=Gt)},setOp:function(Ve,Nt,Gt){(j!==Ve||Q!==Nt||de!==Gt)&&(s.stencilOp(Ve,Nt,Gt),j=Ve,Q=Nt,de=Gt)},setLocked:function(Ve){D=Ve},setClear:function(Ve){Le!==Ve&&(s.clearStencil(Ve),Le=Ve)},reset:function(){D=!1,H=null,ne=null,O=null,Y=null,j=null,Q=null,de=null,Le=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,_=null,w=null,T=null,P=new Ce(0,0,0),A=0,v=!1,M=null,C=null,I=null,B=null,k=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,X=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=X>=2);let oe=null,ce={},ge=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),ze=new st().fromArray(ge),Ke=new st().fromArray(ve);function He(D,H,ne,O){let Y=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Q=0;Q<ne;Q++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,O,0,s.RGBA,s.UNSIGNED_BYTE,Y):s.texImage2D(H+Q,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Y);return j}let ie={};ie[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc(qi),Ie(!1),Se(vl),re(s.CULL_FACE),it(mi);function re(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function _e(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pe(D,H){return u[D]!==H?(s.bindFramebuffer(D,H),u[D]=H,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=H),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=H),!0):!1}function Ae(D,H){let ne=f,O=!1;if(D){ne=d.get(H),ne===void 0&&(ne=[],d.set(H,ne));let Y=D.textures;if(ne.length!==Y.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Q=Y.length;j<Q;j++)ne[j]=s.COLOR_ATTACHMENT0+j;ne.length=Y.length,O=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,O=!0);O&&s.drawBuffers(ne)}function je(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let yt={[Ai]:s.FUNC_ADD,[Ku]:s.FUNC_SUBTRACT,[Ju]:s.FUNC_REVERSE_SUBTRACT};yt[Zu]=s.MIN,yt[$u]=s.MAX;let F={[Qu]:s.ZERO,[ed]:s.ONE,[td]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[od]:s.SRC_ALPHA_SATURATE,[rd]:s.DST_COLOR,[id]:s.DST_ALPHA,[nd]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[ad]:s.ONE_MINUS_DST_COLOR,[sd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[hd]:s.CONSTANT_ALPHA,[ud]:s.ONE_MINUS_CONSTANT_ALPHA};function it(D,H,ne,O,Y,j,Q,de,Le,Ve){if(D===mi){x===!0&&(_e(s.BLEND),x=!1);return}if(x===!1&&(re(s.BLEND),x=!0),D!==Yu){if(D!==m||Ve!==v){if((p!==Ai||_!==Ai)&&(s.blendEquation(s.FUNC_ADD),p=Ai,_=Ai),Ve)switch(D){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFunc(s.ONE,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,y=null,w=null,T=null,P.set(0,0,0),A=0,m=D,v=Ve}return}Y=Y||H,j=j||ne,Q=Q||O,(H!==p||Y!==_)&&(s.blendEquationSeparate(yt[H],yt[Y]),p=H,_=Y),(ne!==b||O!==y||j!==w||Q!==T)&&(s.blendFuncSeparate(F[ne],F[O],F[j],F[Q]),b=ne,y=O,w=j,T=Q),(de.equals(P)===!1||Le!==A)&&(s.blendColor(de.r,de.g,de.b,Le),P.copy(de),A=Le),m=D,v=!1}function xe(D,H){D.side===Rt?_e(s.CULL_FACE):re(s.CULL_FACE);let ne=D.side===jt;H&&(ne=!ne),Ie(ne),D.blending===Xi&&D.transparent===!1?it(mi):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let O=D.stencilWrite;o.setTest(O),O&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Se(D){D!==qu?(re(s.CULL_FACE),D!==C&&(D===vl?s.cullFace(s.BACK):D===ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),C=D}function lt(D){D!==I&&(U&&s.lineWidth(D),I=D)}function ye(D,H,ne){D?(re(s.POLYGON_OFFSET_FILL),(B!==H||k!==ne)&&(s.polygonOffset(H,ne),B=H,k=ne)):_e(s.POLYGON_OFFSET_FILL)}function Oe(D){D?re(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Ct(D){D===void 0&&(D=s.TEXTURE0+z-1),oe!==D&&(s.activeTexture(D),oe=D)}function ut(D,H,ne){ne===void 0&&(oe===null?ne=s.TEXTURE0+z-1:ne=oe);let O=ce[ne];O===void 0&&(O={type:void 0,texture:void 0},ce[ne]=O),(O.type!==D||O.texture!==H)&&(oe!==ne&&(s.activeTexture(ne),oe=ne),s.bindTexture(D,H||ie[D]),O.type=D,O.texture=H)}function L(){let D=ce[oe];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){ze.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ze.copy(D))}function N(D){Ke.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function G(D,H){let ne=l.get(H);ne===void 0&&(ne=new WeakMap,l.set(H,ne));let O=ne.get(D);O===void 0&&(O=s.getUniformBlockIndex(H,D.name),ne.set(D,O))}function V(D,H){let O=l.get(H).get(D);c.get(H)!==O&&(s.uniformBlockBinding(H,O,D.__bindingPointIndex),c.set(H,O))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,ce={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,_=null,w=null,T=null,P=new Ce(0,0,0),A=0,v=!1,M=null,C=null,I=null,B=null,k=null,ze.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:_e,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:je,setBlending:it,setMaterial:xe,setFlipSided:Ie,setCullFace:Se,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:Oe,activeTexture:Ct,bindTexture:ut,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:J,texImage2D:Ee,texImage3D:le,updateUBOMapping:G,uniformBlockBinding:V,texStorage2D:ue,texStorage3D:Me,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:Te,scissor:fe,viewport:N,reset:se}}function Yx(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):Hs("canvas")}function x(L,S,J){let te=1,ae=ut(L);if((ae.width>J||ae.height>J)&&(te=J/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ee=Math.floor(te*ae.width),Te=Math.floor(te*ae.height);u===void 0&&(u=g(ee,Te));let ue=S?g(ee,Te):u;return ue.width=ee,ue.height=Te,ue.getContext("2d").drawImage(L,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Te+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(L,S,J,te,ae=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ee=S;if(S===s.RED&&(J===s.FLOAT&&(ee=s.R32F),J===s.HALF_FLOAT&&(ee=s.R16F),J===s.UNSIGNED_BYTE&&(ee=s.R8)),S===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ee=s.R8UI),J===s.UNSIGNED_SHORT&&(ee=s.R16UI),J===s.UNSIGNED_INT&&(ee=s.R32UI),J===s.BYTE&&(ee=s.R8I),J===s.SHORT&&(ee=s.R16I),J===s.INT&&(ee=s.R32I)),S===s.RG&&(J===s.FLOAT&&(ee=s.RG32F),J===s.HALF_FLOAT&&(ee=s.RG16F),J===s.UNSIGNED_BYTE&&(ee=s.RG8)),S===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ee=s.RG8UI),J===s.UNSIGNED_SHORT&&(ee=s.RG16UI),J===s.UNSIGNED_INT&&(ee=s.RG32UI),J===s.BYTE&&(ee=s.RG8I),J===s.SHORT&&(ee=s.RG16I),J===s.INT&&(ee=s.RG32I)),S===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),J===s.UNSIGNED_INT&&(ee=s.RGB32UI),J===s.BYTE&&(ee=s.RGB8I),J===s.SHORT&&(ee=s.RGB16I),J===s.INT&&(ee=s.RGB32I)),S===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),J===s.UNSIGNED_INT&&(ee=s.RGBA32UI),J===s.BYTE&&(ee=s.RGBA8I),J===s.SHORT&&(ee=s.RGBA16I),J===s.INT&&(ee=s.RGBA32I)),S===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),S===s.RGBA){let Te=ae?Rr:Ze.getTransfer(te);J===s.FLOAT&&(ee=s.RGBA32F),J===s.HALF_FLOAT&&(ee=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ee=Te===ft?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(L,S){let J;return L?S===null||S===Di||S===Qs?J=s.DEPTH24_STENCIL8:S===Qt?J=s.DEPTH32F_STENCIL8:S===$s&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===Qs?J=s.DEPTH_COMPONENT24:S===Qt?J=s.DEPTH_COMPONENT32F:S===$s&&(J=s.DEPTH_COMPONENT16),J}function w(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Vt&&L.minFilter!==Lt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function T(L){let S=L.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&h.delete(S)}function P(L){let S=L.target;S.removeEventListener("dispose",P),M(S)}function A(L){let S=n.get(L);if(S.__webglInit===void 0)return;let J=L.source,te=d.get(J);if(te){let ae=te[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&v(L),Object.keys(te).length===0&&d.delete(J)}n.remove(L)}function v(L){let S=n.get(L);s.deleteTexture(S.__webglTexture);let J=L.source,te=d.get(J);delete te[S.__cacheKey],a.memory.textures--}function M(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let ae=0;ae<S.__webglFramebuffer[te].length;ae++)s.deleteFramebuffer(S.__webglFramebuffer[te][ae]);else s.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)s.deleteFramebuffer(S.__webglFramebuffer[te]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let J=L.textures;for(let te=0,ae=J.length;te<ae;te++){let ee=n.get(J[te]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(J[te])}n.remove(L)}let C=0;function I(){C=0}function B(){let L=C;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function k(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function z(L,S){let J=n.get(L);if(L.isVideoTexture&&Oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){let te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(J,L,S);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+S)}function U(L,S){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){ie(J,L,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+S)}function X(L,S){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){ie(J,L,S);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+S)}function W(L,S){let J=n.get(L);if(L.version>0&&J.__version!==L.version){re(J,L,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+S)}let oe={[$t]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[ks]:s.MIRRORED_REPEAT},ce={[Vt]:s.NEAREST,[Co]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Zs]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},ge={[Td]:s.NEVER,[Pd]:s.ALWAYS,[Ad]:s.LESS,[Fl]:s.LEQUAL,[Ed]:s.EQUAL,[Id]:s.GEQUAL,[Rd]:s.GREATER,[Cd]:s.NOTEQUAL};function ve(L,S){if(S.type===Qt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Lt||S.magFilter===Zs||S.magFilter===cs||S.magFilter===Cn||S.minFilter===Lt||S.minFilter===Zs||S.minFilter===cs||S.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ce[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==cs&&S.minFilter!==Cn||S.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ze(L,S){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",T));let te=S.source,ae=d.get(te);ae===void 0&&(ae={},d.set(te,ae));let ee=k(S);if(ee!==L.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ae[ee].usedTimes++;let Te=ae[L.__cacheKey];Te!==void 0&&(ae[L.__cacheKey].usedTimes--,Te.usedTimes===0&&v(S)),L.__cacheKey=ee,L.__webglTexture=ae[ee].texture}return J}function Ke(L,S,J){return Math.floor(Math.floor(L/J)/S)}function He(L,S,J,te){let ee=L.updateRanges;if(ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,J,te,S.data);else{ee.sort((le,fe)=>le.start-fe.start);let Te=0;for(let le=1;le<ee.length;le++){let fe=ee[Te],N=ee[le],G=fe.start+fe.count,V=Ke(N.start,S.width,4),se=Ke(fe.start,S.width,4);N.start<=G+1&&V===se&&Ke(N.start+N.count-1,S.width,4)===V?fe.count=Math.max(fe.count,N.start+N.count-fe.start):(++Te,ee[Te]=N)}ee.length=Te+1;let ue=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let le=0,fe=ee.length;le<fe;le++){let N=ee[le],G=Math.floor(N.start/4),V=Math.ceil(N.count/4),se=G%S.width,D=Math.floor(G/S.width),H=V,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,se,D,H,ne,J,te,S.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function ie(L,S,J){let te=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=s.TEXTURE_3D);let ae=ze(L,S),ee=S.source;t.bindTexture(te,L.__webglTexture,s.TEXTURE0+J);let Te=n.get(ee);if(ee.version!==Te.__version||ae===!0){t.activeTexture(s.TEXTURE0+J);let ue=Ze.getPrimaries(Ze.workingColorSpace),Me=S.colorSpace===kn?null:Ze.getPrimaries(S.colorSpace),Ee=S.colorSpace===kn||ue===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let le=x(S.image,!1,i.maxTextureSize);le=Ct(S,le);let fe=r.convert(S.format,S.colorSpace),N=r.convert(S.type),G=y(S.internalFormat,fe,N,S.colorSpace,S.isVideoTexture);ve(te,S);let V,se=S.mipmaps,D=S.isVideoTexture!==!0,H=Te.__version===void 0||ae===!0,ne=ee.dataReady,O=w(S,le);if(S.isDepthTexture)G=_(S.format===er,S.type),H&&(D?t.texStorage2D(s.TEXTURE_2D,1,G,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,G,le.width,le.height,0,fe,N,null));else if(S.isDataTexture)if(se.length>0){D&&H&&t.texStorage2D(s.TEXTURE_2D,O,G,se[0].width,se[0].height);for(let Y=0,j=se.length;Y<j;Y++)V=se[Y],D?ne&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,V.width,V.height,fe,N,V.data):t.texImage2D(s.TEXTURE_2D,Y,G,V.width,V.height,0,fe,N,V.data);S.generateMipmaps=!1}else D?(H&&t.texStorage2D(s.TEXTURE_2D,O,G,le.width,le.height),ne&&He(S,le,fe,N)):t.texImage2D(s.TEXTURE_2D,0,G,le.width,le.height,0,fe,N,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,G,se[0].width,se[0].height,le.depth);for(let Y=0,j=se.length;Y<j;Y++)if(V=se[Y],S.format!==yn)if(fe!==null)if(D){if(ne)if(S.layerUpdates.size>0){let Q=Wl(V.width,V.height,S.format,S.type);for(let de of S.layerUpdates){let Le=V.data.subarray(de*Q/V.data.BYTES_PER_ELEMENT,(de+1)*Q/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,de,V.width,V.height,1,fe,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,V.width,V.height,le.depth,fe,V.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,G,V.width,V.height,le.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,V.width,V.height,le.depth,fe,N,V.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,G,V.width,V.height,le.depth,0,fe,N,V.data)}else{D&&H&&t.texStorage2D(s.TEXTURE_2D,O,G,se[0].width,se[0].height);for(let Y=0,j=se.length;Y<j;Y++)V=se[Y],S.format!==yn?fe!==null?D?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,V.width,V.height,fe,V.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,G,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ne&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,V.width,V.height,fe,N,V.data):t.texImage2D(s.TEXTURE_2D,Y,G,V.width,V.height,0,fe,N,V.data)}else if(S.isDataArrayTexture)if(D){if(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,G,le.width,le.height,le.depth),ne)if(S.layerUpdates.size>0){let Y=Wl(le.width,le.height,S.format,S.type);for(let j of S.layerUpdates){let Q=le.data.subarray(j*Y/le.data.BYTES_PER_ELEMENT,(j+1)*Y/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,le.width,le.height,1,fe,N,Q)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,N,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,G,le.width,le.height,le.depth,0,fe,N,le.data);else if(S.isData3DTexture)D?(H&&t.texStorage3D(s.TEXTURE_3D,O,G,le.width,le.height,le.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,N,le.data)):t.texImage3D(s.TEXTURE_3D,0,G,le.width,le.height,le.depth,0,fe,N,le.data);else if(S.isFramebufferTexture){if(H)if(D)t.texStorage2D(s.TEXTURE_2D,O,G,le.width,le.height);else{let Y=le.width,j=le.height;for(let Q=0;Q<O;Q++)t.texImage2D(s.TEXTURE_2D,Q,G,Y,j,0,fe,N,null),Y>>=1,j>>=1}}else if(se.length>0){if(D&&H){let Y=ut(se[0]);t.texStorage2D(s.TEXTURE_2D,O,G,Y.width,Y.height)}for(let Y=0,j=se.length;Y<j;Y++)V=se[Y],D?ne&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,fe,N,V):t.texImage2D(s.TEXTURE_2D,Y,G,fe,N,V);S.generateMipmaps=!1}else if(D){if(H){let Y=ut(le);t.texStorage2D(s.TEXTURE_2D,O,G,Y.width,Y.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,N,le)}else t.texImage2D(s.TEXTURE_2D,0,G,fe,N,le);m(S)&&p(te),Te.__version=ee.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function re(L,S,J){if(S.image.length!==6)return;let te=ze(L,S),ae=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);let ee=n.get(ae);if(ae.version!==ee.__version||te===!0){t.activeTexture(s.TEXTURE0+J);let Te=Ze.getPrimaries(Ze.workingColorSpace),ue=S.colorSpace===kn?null:Ze.getPrimaries(S.colorSpace),Me=S.colorSpace===kn||Te===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!Ee&&!le?fe[j]=x(S.image[j],!0,i.maxCubemapSize):fe[j]=le?S.image[j].image:S.image[j],fe[j]=Ct(S,fe[j]);let N=fe[0],G=r.convert(S.format,S.colorSpace),V=r.convert(S.type),se=y(S.internalFormat,G,V,S.colorSpace),D=S.isVideoTexture!==!0,H=ee.__version===void 0||te===!0,ne=ae.dataReady,O=w(S,N);ve(s.TEXTURE_CUBE_MAP,S);let Y;if(Ee){D&&H&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,se,N.width,N.height);for(let j=0;j<6;j++){Y=fe[j].mipmaps;for(let Q=0;Q<Y.length;Q++){let de=Y[Q];S.format!==yn?G!==null?D?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,0,0,de.width,de.height,G,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,0,0,de.width,de.height,G,V,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q,se,de.width,de.height,0,G,V,de.data)}}}else{if(Y=S.mipmaps,D&&H){Y.length>0&&O++;let j=ut(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,O,se,j.width,j.height)}for(let j=0;j<6;j++)if(le){D?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,G,V,fe[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,fe[j].width,fe[j].height,0,G,V,fe[j].data);for(let Q=0;Q<Y.length;Q++){let Le=Y[Q].image[j].image;D?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,0,0,Le.width,Le.height,G,V,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,se,Le.width,Le.height,0,G,V,Le.data)}}else{D?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,G,V,fe[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,G,V,fe[j]);for(let Q=0;Q<Y.length;Q++){let de=Y[Q];D?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,0,0,G,V,de.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q+1,se,G,V,de.image[j])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),ee.__version=ae.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function _e(L,S,J,te,ae,ee){let Te=r.convert(J.format,J.colorSpace),ue=r.convert(J.type),Me=y(J.internalFormat,Te,ue,J.colorSpace),Ee=n.get(S),le=n.get(J);if(le.__renderTarget=S,!Ee.__hasExternalTextures){let fe=Math.max(1,S.width>>ee),N=Math.max(1,S.height>>ee);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Me,fe,N,S.depth,0,Te,ue,null):t.texImage2D(ae,ee,Me,fe,N,0,Te,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ae,le.__webglTexture,0,lt(S)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ae,le.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(L,S,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){let te=S.depthTexture,ae=te&&te.isDepthTexture?te.type:null,ee=_(S.stencilBuffer,ae),Te=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=lt(S);ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,ee,S.width,S.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ee,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,L)}else{let te=S.textures;for(let ae=0;ae<te.length;ae++){let ee=te[ae],Te=r.convert(ee.format,ee.colorSpace),ue=r.convert(ee.type),Me=y(ee.internalFormat,Te,ue,ee.colorSpace),Ee=lt(S);J&&ye(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Me,S.width,S.height):ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,Me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let ae=te.__webglTexture,ee=lt(S);if(S.depthTexture.format===zs)ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(S.depthTexture.format===er)ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function je(L){let S=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=te}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let te=L.texture.mipmaps;te&&te.length>0?Ae(S.__webglFramebuffer[0],L):Ae(S.__webglFramebuffer,L)}else if(J){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=s.createRenderbuffer(),Pe(S.__webglDepthbuffer[te],L,!1);else{let ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ee)}}else{let te=L.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Pe(S.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(L,S,J){let te=n.get(L);S!==void 0&&_e(te.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&je(L)}function F(L){let S=L.texture,J=n.get(L),te=n.get(S);L.addEventListener("dispose",P);let ae=L.textures,ee=L.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=S.version,a.memory.textures++),ee){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let Me=0;Me<S.mipmaps.length;Me++)J.__webglFramebuffer[ue][Me]=s.createFramebuffer()}else J.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)J.__webglFramebuffer[ue]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ue=0,Me=ae.length;ue<Me;ue++){let Ee=n.get(ae[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&ye(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Me=ae[ue];J.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);let Ee=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),fe=y(Me.internalFormat,Ee,le,Me.colorSpace,L.isXRRenderTarget===!0),N=lt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,N,fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),ve(s.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(J.__webglFramebuffer[ue][Me],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me);else _e(J.__webglFramebuffer[ue],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,Me=ae.length;ue<Me;ue++){let Ee=ae[ue],le=n.get(Ee),fe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,le.__webglTexture),ve(fe,Ee),_e(J.__webglFramebuffer,L,Ee,s.COLOR_ATTACHMENT0+ue,fe,0),m(Ee)&&p(fe)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),ve(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(J.__webglFramebuffer[Me],L,S,s.COLOR_ATTACHMENT0,ue,Me);else _e(J.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}L.depthBuffer&&je(L)}function it(L){let S=L.textures;for(let J=0,te=S.length;J<te;J++){let ae=S[J];if(m(ae)){let ee=b(L),Te=n.get(ae).__webglTexture;t.bindTexture(ee,Te),p(ee),t.unbindTexture()}}}let xe=[],Ie=[];function Se(L){if(L.samples>0){if(ye(L)===!1){let S=L.textures,J=L.width,te=L.height,ae=s.COLOR_BUFFER_BIT,ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(L),ue=S.length>1;if(ue)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Me=L.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let le=n.get(S[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,J,te,0,0,J,te,ae,s.NEAREST),c===!0&&(xe.length=0,Ie.length=0,xe.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xe.push(ee),Ie.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let le=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function lt(L){return Math.min(i.maxSamples,L.samples)}function ye(L){let S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(L){let S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Ct(L,S){let J=L.colorSpace,te=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Dt&&J!==kn&&(Ze.getTransfer(J)===ft?(te!==yn||ae!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),S}function ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ye}function Kx(s,e){function t(n,i=kn){let r,a=Ze.getTransfer(i);if(n===Bn)return s.UNSIGNED_BYTE;if(n===Po)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return s.BYTE;if(n===Rl)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===Io)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===Qt)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===Pl)return s.ALPHA;if(n===Ll)return s.RGB;if(n===yn)return s.RGBA;if(n===zs)return s.DEPTH_COMPONENT;if(n===er)return s.DEPTH_STENCIL;if(n===Do)return s.RED;if(n===Uo)return s.RED_INTEGER;if(n===Dl)return s.RG;if(n===Fo)return s.RG_INTEGER;if(n===No)return s.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===ko||n===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Go||n===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Go)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===jo||n===Yo||n===Ko||n===Jo||n===Zo||n===$o||n===Qo||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===cc||n===lc||n===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new an({vertexShader:Jx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends li{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new ih,p={},b=t.getContextAttributes(),y=null,_=null,w=[],T=[],P=new be,A=null,v=new vt;v.viewport=new st;let M=new vt;M.viewport=new st;let C=[v,M],I=new bo,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let re=w[ie];return re===void 0&&(re=new Xs,w[ie]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ie){let re=w[ie];return re===void 0&&(re=new Xs,w[ie]=re),re.getGripSpace()},this.getHand=function(ie){let re=w[ie];return re===void 0&&(re=new Xs,w[ie]=re),re.getHandSpace()};function z(ie){let re=T.indexOf(ie.inputSource);if(re===-1)return;let _e=w[re];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,l||a),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function U(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",X);for(let ie=0;ie<w.length;ie++){let re=T[ie];re!==null&&(T[ie]=null,w[ie].disconnect(re))}B=null,k=null,m.reset();for(let ie in p)delete p[ie];e.setRenderTarget(y),f=null,d=null,u=null,i=null,_=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,Ae=null;b.depth&&(Ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?er:zs,Pe=b.stencil?Qs:Di);let je={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new An(d.textureWidth,d.textureHeight,{format:yn,type:Bn,depthTexture:new kr(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(ie){for(let re=0;re<ie.removed.length;re++){let _e=ie.removed[re],Pe=T.indexOf(_e);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(_e))}for(let re=0;re<ie.added.length;re++){let _e=ie.added[re],Pe=T.indexOf(_e);if(Pe===-1){for(let je=0;je<w.length;je++)if(je>=T.length){T.push(_e),Pe=je;break}else if(T[je]===null){T[je]=_e,Pe=je;break}if(Pe===-1)break}let Ae=w[Pe];Ae&&Ae.connect(_e)}}let W=new R,oe=new R;function ce(ie,re,_e){W.setFromMatrixPosition(re.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);let Pe=W.distanceTo(oe),Ae=re.projectionMatrix.elements,je=_e.projectionMatrix.elements,yt=Ae[14]/(Ae[10]-1),F=Ae[14]/(Ae[10]+1),it=(Ae[9]+1)/Ae[5],xe=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],Se=(je[8]+1)/je[0],lt=yt*Ie,ye=yt*Se,Oe=Pe/(-Ie+Se),Ct=Oe*-Ie;if(re.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ct),ie.translateZ(Oe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ae[10]===-1)ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ut=yt+Oe,L=F+Oe,S=lt-Ct,J=ye+(Pe-Ct),te=it*F/L*ut,ae=xe*F/L*ut;ie.projectionMatrix.makePerspective(S,J,te,ae,ut,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,re){re===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(re.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let re=ie.near,_e=ie.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),I.near=M.near=v.near=re,I.far=M.far=v.far=_e,(B!==I.near||k!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,k=I.far),I.layers.mask=ie.layers.mask|6,v.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;let Pe=ie.parent,Ae=I.cameras;ge(I,Pe);for(let je=0;je<Ae.length;je++)ge(Ae[je],Pe);Ae.length===2?ce(I,v,M):I.projectionMatrix.copy(v.projectionMatrix),ve(ie,I,Pe)};function ve(ie,re,_e){_e===null?ie.matrix.copy(re.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(re.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ki*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ie){c=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ie){return p[ie]};let ze=null;function Ke(ie,re){if(h=re.getViewerPose(l||a),g=re,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Pe=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let F=0;F<_e.length;F++){let it=_e[F],xe=null;if(f!==null)xe=f.getViewport(it);else{let Se=u.getViewSubImage(d,it);xe=Se.viewport,F===0&&(e.setRenderTargetTextures(_,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(_))}let Ie=C[F];Ie===void 0&&(Ie=new vt,Ie.layers.enable(F),Ie.viewport=new st,C[F]=Ie),Ie.matrix.fromArray(it.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(it.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(xe.x,xe.y,xe.width,xe.height),F===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(Ie)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let F=u.getDepthInformation(_e[0]);F&&F.isValid&&F.texture&&m.init(F,i.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let F=0;F<_e.length;F++){let it=_e[F].camera;if(it){let xe=p[it];xe||(xe=new zr,p[it]=xe);let Ie=u.getCameraImage(it);xe.sourceTexture=Ie}}}}for(let _e=0;_e<w.length;_e++){let Pe=T[_e],Ae=w[_e];Pe!==null&&Ae!==void 0&&Ae.update(Pe,re,l||a)}ze&&ze(ie,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let He=new of;He.setAnimationLoop(Ke),this.setAnimationLoop=function(ie){ze=ie},this.dispose=function(){}}},us=new hn,$x=new Ne;function Qx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,_=b.envMapRotation;y&&(m.envMap.value=y,us.copy(_),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(us)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=i[b.id];_===void 0&&(g(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",m));let w=y.program;n.updateUBOMapping(b,w);let T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let y=u();b.__bindingPointIndex=y;let _=s.createBuffer(),w=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=i[b.id],_=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,P=_.length;T<P;T++){let A=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,M=A.length;v<M;v++){let C=A[v];if(f(C,T,v,w)===!0){let I=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],k=0;for(let z=0;z<B.length;z++){let U=B[z],X=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,I+k,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,y,_,w){let T=b.value,P=y+"_"+_;if(w[P]===void 0)return typeof T=="number"||typeof T=="boolean"?w[P]=T:w[P]=T.clone(),!0;{let A=w[P];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return w[P]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){let y=b.uniforms,_=0,w=16;for(let P=0,A=y.length;P<A;P++){let v=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,C=v.length;M<C;M++){let I=v[M],B=Array.isArray(I.value)?I.value:[I.value];for(let k=0,z=B.length;k<z;k++){let U=B[k],X=x(U),W=_%w,oe=W%X.boundary,ce=W+oe;_+=oe,ce!==0&&w-ce<X.storage&&(_+=w-ce),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=X.storage}}}let T=_%w;return T>0&&(_+=w-T),b.__size=_,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var mc=class{constructor(e={}){let{canvas:t=Ld(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,w=!1;this._outputColorSpace=tt;let T=0,P=0,A=null,v=-1,M=null,C=new st,I=new st,B=null,k=new Ce(0),z=0,U=t.width,X=t.height,W=1,oe=null,ce=null,ge=new st(0,0,U,X),ve=new st(0,0,U,X),ze=!1,Ke=new Ks,He=!1,ie=!1,re=new Ne,_e=new R,Pe=new st,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function yt(){return A===null?W:1}let F=n;function it(E,q){return t.getContext(E,q)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Y,!1),F===null){let q="webgl2";if(F=it(q,E),F===null)throw it(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Ie,Se,lt,ye,Oe,Ct,ut,L,S,J,te,ae,ee,Te,ue,Me,Ee,le,fe,N,G,V,se;function D(){xe=new xb(F),xe.init(),G=new Kx(F,xe),Ie=new ub(F,xe,e,G),Se=new jx(F,xe),Ie.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),lt=new vb(F),ye=new Ux,Oe=new Yx(F,xe,Se,ye,Ie,G,lt),Ct=new fb(_),ut=new bb(_),L=new Em(F),V=new lb(F,L),S=new _b(F,L,lt,V),J=new Sb(F,S,L,lt),le=new Mb(F,Ie,Oe),ue=new db(ye),te=new Dx(_,Ct,ut,xe,Ie,V,ue),ae=new Qx(_,ye),ee=new Nx,Te=new Gx(xe),Ee=new cb(_,Ct,ut,Se,J,f,c),Me=new Xx(_,J,Ie),se=new e_(F,lt,Ie,Se),fe=new hb(F,xe,lt),N=new yb(F,xe,lt),lt.programs=te.programs,_.capabilities=Ie,_.extensions=xe,_.properties=ye,_.renderLists=ee,_.shadowMap=Me,_.state=Se,_.info=lt}D();let H=new sh(_,F);this.xr=H,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(U,X,!1))},this.getSize=function(E){return E.set(U,X)},this.setSize=function(E,q,Z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,X=q,t.width=Math.floor(E*W),t.height=Math.floor(q*W),Z===!0&&(t.style.width=E+"px",t.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(U*W,X*W).floor()},this.setDrawingBufferSize=function(E,q,Z){U=E,X=q,W=Z,t.width=Math.floor(E*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,q,Z,$){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,q,Z,$),Se.viewport(C.copy(ge).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,q,Z,$){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,q,Z,$),Se.scissor(I.copy(ve).multiplyScalar(W).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(E){Se.setScissorTest(ze=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(E=!0,q=!0,Z=!0){let $=0;if(E){let K=!1;if(A!==null){let he=A.texture.format;K=he===No||he===Fo||he===Uo}if(K){let he=A.texture.type,me=he===Bn||he===Di||he===$s||he===Qs||he===Po||he===Lo,Re=Ee.getClearColor(),we=Ee.getClearAlpha(),Be=Re.r,Ge=Re.g,De=Re.b;me?(g[0]=Be,g[1]=Ge,g[2]=De,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Be,x[1]=Ge,x[2]=De,x[3]=we,F.clearBufferiv(F.COLOR,0,x))}else $|=F.COLOR_BUFFER_BIT}q&&($|=F.DEPTH_BUFFER_BIT),Z&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Ee.dispose(),ee.dispose(),Te.dispose(),ye.dispose(),Ct.dispose(),ut.dispose(),J.dispose(),V.dispose(),se.dispose(),te.dispose(),H.dispose(),H.removeEventListener("sessionstart",Gt),H.removeEventListener("sessionend",ma),Vn.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=lt.autoReset,q=Me.enabled,Z=Me.autoUpdate,$=Me.needsUpdate,K=Me.type;D(),lt.autoReset=E,Me.enabled=q,Me.autoUpdate=Z,Me.needsUpdate=$,Me.type=K}function Y(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let q=E.target;q.removeEventListener("dispose",j),Q(q)}function Q(E){de(E),ye.remove(E)}function de(E){let q=ye.get(E).programs;q!==void 0&&(q.forEach(function(Z){te.releaseProgram(Z)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,Z,$,K,he){q===null&&(q=Ae);let me=K.isMesh&&K.matrixWorld.determinant()<0,Re=hp(E,q,Z,$,K);Se.setMaterial($,me);let we=Z.index,Be=1;if($.wireframe===!0){if(we=S.getWireframeAttribute(Z),we===void 0)return;Be=2}let Ge=Z.drawRange,De=Z.attributes.position,et=Ge.start*Be,pt=(Ge.start+Ge.count)*Be;he!==null&&(et=Math.max(et,he.start*Be),pt=Math.min(pt,(he.start+he.count)*Be)),we!==null?(et=Math.max(et,0),pt=Math.min(pt,we.count)):De!=null&&(et=Math.max(et,0),pt=Math.min(pt,De.count));let It=pt-et;if(It<0||It===1/0)return;V.setup(K,$,Re,Z,we);let wt,gt=fe;if(we!==null&&(wt=L.get(we),gt=N,gt.setIndex(wt)),K.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*yt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(K.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*yt()),K.isLineSegments?gt.setMode(F.LINES):K.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else K.isPoints?gt.setMode(F.POINTS):K.isSprite&&gt.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Fe=K._multiDrawStarts,At=K._multiDrawCounts,ot=K._multiDrawCount,pn=we?L.get(we).bytesPerElement:1,Ss=ye.get($).currentProgram.getUniforms();for(let mn=0;mn<ot;mn++)Ss.setValue(F,"_gl_DrawID",mn),gt.render(Fe[mn]/pn,At[mn])}else if(K.isInstancedMesh)gt.renderInstances(et,It,K.count);else if(Z.isInstancedBufferGeometry){let Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,At=Math.min(Z.instanceCount,Fe);gt.renderInstances(et,It,At)}else gt.render(et,It)};function Le(E,q,Z){E.transparent===!0&&E.side===Rt&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,ba(E,q,Z),E.side=On,E.needsUpdate=!0,ba(E,q,Z),E.side=Rt):ba(E,q,Z)}this.compile=function(E,q,Z=null){Z===null&&(Z=E),p=Te.get(Z),p.init(q),y.push(p),Z.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),E!==Z&&E.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let $=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let he=K.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){let Re=he[me];Le(Re,Z,K),$.add(Re)}else Le(he,Z,K),$.add(he)}),p=y.pop(),$},this.compileAsync=function(E,q,Z=null){let $=this.compile(E,q,Z);return new Promise(K=>{function he(){if($.forEach(function(me){ye.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){K(E);return}setTimeout(he,10)}xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ve=null;function Nt(E){Ve&&Ve(E)}function Gt(){Vn.stop()}function ma(){Vn.start()}let Vn=new of;Vn.setAnimationLoop(Nt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(E){Ve=E,H.setAnimationLoop(E),E===null?Vn.stop():Vn.start()},H.addEventListener("sessionstart",Gt),H.addEventListener("sessionend",ma),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(q),q=H.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,q,A),p=Te.get(E,y.length),p.init(q),y.push(p),re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ke.setFromProjectionMatrix(re,Fn,q.reversedDepth),ie=this.localClippingEnabled,He=ue.init(this.clippingPlanes,ie),m=ee.get(E,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){let he=_.xr.getDepthSensingMesh();he!==null&&Bi(he,q,-1/0,_.sortObjects)}Bi(E,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,ce),je=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,je&&Ee.addToRenderList(m,E),this.info.render.frame++,He===!0&&ue.beginShadows();let Z=p.state.shadowsArray;Me.render(Z,E,q),He===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,K=m.transmissive;if(p.setupLights(),q.isArrayCamera){let he=q.cameras;if(K.length>0)for(let me=0,Re=he.length;me<Re;me++){let we=he[me];ei($,K,E,we)}je&&Ee.render(E);for(let me=0,Re=he.length;me<Re;me++){let we=he[me];pr(m,E,we,we.viewport)}}else K.length>0&&ei($,K,E,q),je&&Ee.render(E),pr(m,E,q);A!==null&&P===0&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,q),V.resetDefaultState(),v=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],He===!0&&ue.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Bi(E,q,Z,$){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ke.intersectsSprite(E)){$&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);let me=J.update(E),Re=E.material;Re.visible&&m.push(E,me,Re,Z,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ke.intersectsObject(E))){let me=J.update(E),Re=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Pe.copy(me.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Re)){let we=me.groups;for(let Be=0,Ge=we.length;Be<Ge;Be++){let De=we[Be],et=Re[De.materialIndex];et&&et.visible&&m.push(E,me,et,Z,Pe.z,De)}}else Re.visible&&m.push(E,me,Re,Z,Pe.z,null)}}let he=E.children;for(let me=0,Re=he.length;me<Re;me++)Bi(he[me],q,Z,$)}function pr(E,q,Z,$){let K=E.opaque,he=E.transmissive,me=E.transparent;p.setupLightsView(Z),He===!0&&ue.setGlobalState(_.clippingPlanes,Z),$&&Se.viewport(C.copy($)),K.length>0&&ga(K,q,Z),he.length>0&&ga(he,q,Z),me.length>0&&ga(me,q,Z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ei(E,q,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new An(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?_n:Bn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let he=p.state.transmissionRenderTarget[$.id],me=$.viewport||C;he.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);let Re=_.getRenderTarget(),we=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(he),_.getClearColor(k),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),je&&Ee.render(Z);let Ge=_.toneMapping;_.toneMapping=gi;let De=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),He===!0&&ue.setGlobalState(_.clippingPlanes,$),ga(E,Z,$),Oe.updateMultisampleRenderTarget(he),Oe.updateRenderTargetMipmap(he),xe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let pt=0,It=q.length;pt<It;pt++){let wt=q[pt],gt=wt.object,Fe=wt.geometry,At=wt.material,ot=wt.group;if(At.side===Rt&&gt.layers.test($.layers)){let pn=At.side;At.side=jt,At.needsUpdate=!0,su(gt,Z,$,Fe,At,ot),At.side=pn,At.needsUpdate=!0,et=!0}}et===!0&&(Oe.updateMultisampleRenderTarget(he),Oe.updateRenderTargetMipmap(he))}_.setRenderTarget(Re,we,Be),_.setClearColor(k,z),De!==void 0&&($.viewport=De),_.toneMapping=Ge}function ga(E,q,Z){let $=q.isScene===!0?q.overrideMaterial:null;for(let K=0,he=E.length;K<he;K++){let me=E[K],Re=me.object,we=me.geometry,Be=me.group,Ge=me.material;Ge.allowOverride===!0&&$!==null&&(Ge=$),Re.layers.test(Z.layers)&&su(Re,q,Z,we,Ge,Be)}}function su(E,q,Z,$,K,he){E.onBeforeRender(_,q,Z,$,K,he),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(_,q,Z,$,E,he),K.transparent===!0&&K.side===Rt&&K.forceSinglePass===!1?(K.side=jt,K.needsUpdate=!0,_.renderBufferDirect(Z,q,$,K,E,he),K.side=On,K.needsUpdate=!0,_.renderBufferDirect(Z,q,$,K,E,he),K.side=Rt):_.renderBufferDirect(Z,q,$,K,E,he),E.onAfterRender(_,q,Z,$,K,he)}function ba(E,q,Z){q.isScene!==!0&&(q=Ae);let $=ye.get(E),K=p.state.lights,he=p.state.shadowsArray,me=K.state.version,Re=te.getParameters(E,K.state,he,q,Z),we=te.getProgramCacheKey(Re),Be=$.programs;$.environment=E.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(E.isMeshStandardMaterial?ut:Ct).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",j),Be=new Map,$.programs=Be);let Ge=Be.get(we);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===me)return au(E,Re),Ge}else Re.uniforms=te.getUniforms(E),E.onBeforeCompile(Re,_),Ge=te.acquireProgram(Re,we),Be.set(we,Ge),$.uniforms=Re.uniforms;let De=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ue.uniform),au(E,Re),$.needsLights=dp(E),$.lightsStateVersion=me,$.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function ru(E){if(E.uniformsList===null){let q=E.currentProgram.getUniforms();E.uniformsList=rr.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function au(E,q){let Z=ye.get(E);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.batchingColor=q.batchingColor,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function hp(E,q,Z,$,K){q.isScene!==!0&&(q=Ae),Oe.resetTextureUnits();let he=q.fog,me=$.isMeshStandardMaterial?q.environment:null,Re=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dt,we=($.isMeshStandardMaterial?ut:Ct).get($.envMap||me),Be=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,pt=!!Z.morphAttributes.color,It=gi;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(It=_.toneMapping);let wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=wt!==void 0?wt.length:0,Fe=ye.get($),At=p.state.lights;if(He===!0&&(ie===!0||E!==M)){let nn=E===M&&$.id===v;ue.setState($,E,nn)}let ot=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==At.state.version||Fe.outputColorSpace!==Re||K.isBatchedMesh&&Fe.batching===!1||!K.isBatchedMesh&&Fe.batching===!0||K.isBatchedMesh&&Fe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Fe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Fe.instancing===!1||!K.isInstancedMesh&&Fe.instancing===!0||K.isSkinnedMesh&&Fe.skinning===!1||!K.isSkinnedMesh&&Fe.skinning===!0||K.isInstancedMesh&&Fe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Fe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Fe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Fe.instancingMorph===!1&&K.morphTexture!==null||Fe.envMap!==we||$.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==Ge||Fe.morphTargets!==De||Fe.morphNormals!==et||Fe.morphColors!==pt||Fe.toneMapping!==It||Fe.morphTargetsCount!==gt)&&(ot=!0):(ot=!0,Fe.__version=$.version);let pn=Fe.currentProgram;ot===!0&&(pn=ba($,q,K));let Ss=!1,mn=!1,mr=!1,Et=pn.getUniforms(),vn=Fe.uniforms;if(Se.useProgram(pn.program)&&(Ss=!0,mn=!0,mr=!0),$.id!==v&&(v=$.id,mn=!0),Ss||M!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",E.projectionMatrix),Et.setValue(F,"viewMatrix",E.matrixWorldInverse);let cn=Et.map.cameraPosition;cn!==void 0&&cn.setValue(F,_e.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,mn=!0,mr=!0)}if(K.isSkinnedMesh){Et.setOptional(F,K,"bindMatrix"),Et.setOptional(F,K,"bindMatrixInverse");let nn=K.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Et.setValue(F,"boneTexture",nn.boneTexture,Oe))}K.isBatchedMesh&&(Et.setOptional(F,K,"batchingTexture"),Et.setValue(F,"batchingTexture",K._matricesTexture,Oe),Et.setOptional(F,K,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",K._indirectTexture,Oe),Et.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",K._colorsTexture,Oe));let Mn=Z.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&le.update(K,Z,pn),(mn||Fe.receiveShadow!==K.receiveShadow)&&(Fe.receiveShadow=K.receiveShadow,Et.setValue(F,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=we,vn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),mn&&(Et.setValue(F,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&up(vn,mr),he&&$.fog===!0&&ae.refreshFogUniforms(vn,he),ae.refreshMaterialUniforms(vn,$,W,X,p.state.transmissionRenderTarget[E.id]),rr.upload(F,ru(Fe),vn,Oe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(rr.upload(F,ru(Fe),vn,Oe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(F,"center",K.center),Et.setValue(F,"modelViewMatrix",K.modelViewMatrix),Et.setValue(F,"normalMatrix",K.normalMatrix),Et.setValue(F,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let nn=$.uniformsGroups;for(let cn=0,Lc=nn.length;cn<Lc;cn++){let ki=nn[cn];se.update(ki,pn),se.bind(ki,pn)}}return pn}function up(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,q,Z){let $=ye.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ye.get(E.texture).__webglTexture=q,ye.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,q){let Z=ye.get(E);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0};let fp=F.createFramebuffer();this.setRenderTarget=function(E,q=0,Z=0){A=E,T=q,P=Z;let $=!0,K=null,he=!1,me=!1;if(E){let we=ye.get(E);if(we.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(we.__hasExternalTextures)Oe.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let De=E.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&ye.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);let Ge=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[q])?K=Ge[q][Z]:K=Ge[q],he=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?K=ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[Z]:K=Ge,C.copy(E.viewport),I.copy(E.scissor),B=E.scissorTest}else C.copy(ge).multiplyScalar(W).floor(),I.copy(ve).multiplyScalar(W).floor(),B=ze;if(Z!==0&&(K=fp),Se.bindFramebuffer(F.FRAMEBUFFER,K)&&$&&Se.drawBuffers(E,K),Se.viewport(C),Se.scissor(I),Se.setScissorTest(B),he){let we=ye.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,Z)}else if(me){let we=q;for(let Be=0;Be<E.textures.length;Be++){let Ge=ye.get(E.textures[Be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,Z,we)}}else if(E!==null&&Z!==0){let we=ye.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,Z)}v=-1},this.readRenderTargetPixels=function(E,q,Z,$,K,he,me,Re=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Se.bindFramebuffer(F.FRAMEBUFFER,we);try{let Be=E.textures[Re],Ge=Be.format,De=Be.type;if(!Ie.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-$&&Z>=0&&Z<=E.height-K&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(q,Z,$,K,G.convert(Ge),G.convert(De),he))}finally{let Be=A!==null?ye.get(A).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,q,Z,$,K,he,me,Re=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we)if(q>=0&&q<=E.width-$&&Z>=0&&Z<=E.height-K){Se.bindFramebuffer(F.FRAMEBUFFER,we);let Be=E.textures[Re],Ge=Be.format,De=Be.type;if(!Ie.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(q,Z,$,K,G.convert(Ge),G.convert(De),0);let pt=A!==null?ye.get(A).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,pt);let It=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Dd(F,It,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(et),F.deleteSync(It),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,q=null,Z=0){let $=Math.pow(2,-Z),K=Math.floor(E.image.width*$),he=Math.floor(E.image.height*$),me=q!==null?q.x:0,Re=q!==null?q.y:0;Oe.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,me,Re,K,he),Se.unbindTexture()};let pp=F.createFramebuffer(),mp=F.createFramebuffer();this.copyTextureToTexture=function(E,q,Z=null,$=null,K=0,he=null){he===null&&(K!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=K,K=0):he=0);let me,Re,we,Be,Ge,De,et,pt,It,wt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(Z!==null)me=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,Ge=Z.min.y,De=Z.isBox3?Z.min.z:0;else{let Mn=Math.pow(2,-K);me=Math.floor(wt.width*Mn),Re=Math.floor(wt.height*Mn),E.isDataArrayTexture?we=wt.depth:E.isData3DTexture?we=Math.floor(wt.depth*Mn):we=1,Be=0,Ge=0,De=0}$!==null?(et=$.x,pt=$.y,It=$.z):(et=0,pt=0,It=0);let gt=G.convert(q.format),Fe=G.convert(q.type),At;q.isData3DTexture?(Oe.setTexture3D(q,0),At=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Oe.setTexture2DArray(q,0),At=F.TEXTURE_2D_ARRAY):(Oe.setTexture2D(q,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);let ot=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ss=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),mr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);let Et=E.isDataArrayTexture||E.isData3DTexture,vn=q.isDataArrayTexture||q.isData3DTexture;if(E.isDepthTexture){let Mn=ye.get(E),nn=ye.get(q),cn=ye.get(Mn.__renderTarget),Lc=ye.get(nn.__renderTarget);Se.bindFramebuffer(F.READ_FRAMEBUFFER,cn.__webglFramebuffer),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lc.__webglFramebuffer);for(let ki=0;ki<we;ki++)Et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(E).__webglTexture,K,De+ki),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(q).__webglTexture,he,It+ki)),F.blitFramebuffer(Be,Ge,me,Re,et,pt,me,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||ye.has(E)){let Mn=ye.get(E),nn=ye.get(q);Se.bindFramebuffer(F.READ_FRAMEBUFFER,pp),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,mp);for(let cn=0;cn<we;cn++)Et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,K,De+cn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,K),vn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,he,It+cn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,he),K!==0?F.blitFramebuffer(Be,Ge,me,Re,et,pt,me,Re,F.COLOR_BUFFER_BIT,F.NEAREST):vn?F.copyTexSubImage3D(At,he,et,pt,It+cn,Be,Ge,me,Re):F.copyTexSubImage2D(At,he,et,pt,Be,Ge,me,Re);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vn?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(At,he,et,pt,It,me,Re,we,gt,Fe,wt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(At,he,et,pt,It,me,Re,we,gt,wt.data):F.texSubImage3D(At,he,et,pt,It,me,Re,we,gt,Fe,wt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,he,et,pt,me,Re,gt,Fe,wt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,he,et,pt,wt.width,wt.height,gt,wt.data):F.texSubImage2D(F.TEXTURE_2D,he,et,pt,me,Re,gt,Fe,wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ss),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mr),he===0&&q.generateMipmaps&&F.generateMipmap(At),Se.unbindTexture()},this.initRenderTarget=function(E){ye.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){T=0,P=0,A=null,Se.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var bc=class extends Kr{constructor(e){super(e),this.type=_n}parse(e){let a=function(A,v){switch(A){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(v||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(v||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(v||""))}},u=function(A,v,M){v=v||1024;let I=A.pos,B=-1,k=0,z="",U=String.fromCharCode.apply(null,new Uint16Array(A.subarray(I,I+128)));for(;0>(B=U.indexOf(`
`))&&k<v&&I<A.byteLength;)z+=U,k+=U.length,I+=128,U+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(I,I+128)));return-1<B?(M!==!1&&(A.pos+=k+B+1),z+U.slice(0,B)):!1},d=function(A){let v=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},z,U;for((A.pos>=A.byteLength||!(z=u(A)))&&a(1,"no header found"),(U=z.match(v))||a(3,"bad initial token"),k.valid|=1,k.programtype=U[1],k.string+=z+`
`;z=u(A),z!==!1;){if(k.string+=z+`
`,z.charAt(0)==="#"){k.comments+=z+`
`;continue}if((U=z.match(M))&&(k.gamma=parseFloat(U[1])),(U=z.match(C))&&(k.exposure=parseFloat(U[1])),(U=z.match(I))&&(k.valid|=2,k.format=U[1]),(U=z.match(B))&&(k.valid|=4,k.height=parseInt(U[1],10),k.width=parseInt(U[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||a(3,"missing format specifier"),k.valid&4||a(3,"missing image size specifier"),k},f=function(A,v,M){let C=v;if(C<8||C>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);C!==(A[2]<<8|A[3])&&a(3,"wrong scanline width");let I=new Uint8Array(4*v*M);I.length||a(4,"unable to allocate buffer space");let B=0,k=0,z=4*C,U=new Uint8Array(4),X=new Uint8Array(z),W=M;for(;W>0&&k<A.byteLength;){k+4>A.byteLength&&a(1),U[0]=A[k++],U[1]=A[k++],U[2]=A[k++],U[3]=A[k++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=C)&&a(3,"bad rgbe scanline format");let oe=0,ce;for(;oe<z&&k<A.byteLength;){ce=A[k++];let ve=ce>128;if(ve&&(ce-=128),(ce===0||oe+ce>z)&&a(3,"bad scanline data"),ve){let ze=A[k++];for(let Ke=0;Ke<ce;Ke++)X[oe++]=ze}else X.set(A.subarray(k,k+ce),oe),oe+=ce,k+=ce}let ge=C;for(let ve=0;ve<ge;ve++){let ze=0;I[B]=X[ve+ze],ze+=C,I[B+1]=X[ve+ze],ze+=C,I[B+2]=X[ve+ze],ze+=C,I[B+3]=X[ve+ze],B+=4}W--}return I},g=function(A,v,M,C){let I=A[v+3],B=Math.pow(2,I-128)/255;M[C+0]=A[v+0]*B,M[C+1]=A[v+1]*B,M[C+2]=A[v+2]*B,M[C+3]=1},x=function(A,v,M,C){let I=A[v+3],B=Math.pow(2,I-128)/255;M[C+0]=Ri.toHalfFloat(Math.min(A[v+0]*B,65504)),M[C+1]=Ri.toHalfFloat(Math.min(A[v+1]*B,65504)),M[C+2]=Ri.toHalfFloat(Math.min(A[v+2]*B,65504)),M[C+3]=Ri.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),b=p.width,y=p.height,_=f(m.subarray(m.pos),b,y),w,T,P;switch(this.type){case Qt:P=_.length/4;let A=new Float32Array(P*4);for(let M=0;M<P;M++)g(_,M*4,A,M*4);w=A,T=Qt;break;case _n:P=_.length/4;let v=new Uint16Array(P*4);for(let M=0;M<P;M++)x(_,M*4,v,M*4);w=v,T=_n;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:y,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Qt:case _n:a.colorSpace=Dt,a.minFilter=Lt,a.magFilter=Lt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}};function ah(s,e){if(e===Ul)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===tr||e===aa){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===tr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var zn=class extends xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Eh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=pi.extractUrlBase(e);a=pi.resolveURL(l,this.path)}else a=pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gf){try{a[$e.KHR_BINARY_GLTF]=new Rh(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new uh;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ch(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new Ih;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new Ph;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function t_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zr(h),l.distance=u;break;case"spot":l=new Jn(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},uh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},fh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},mh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Dt),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Dt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,tt)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},wh=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Th=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ah=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Eh=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ne,m=new R,p=new Pt,b=new R(1,1,1),y=new Wt(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&b.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,b));for(let _ in c)if(_==="_COLOR_0"){let w=c[_];y.instanceColor=new Ii(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},gf="glTF",ca=12,df={JSON:1313821514,BIN:5130562},Rh=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ca,r=new DataView(e,ca),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===df.JSON){let l=new Uint8Array(e,ca+a,o);this.content=n.decode(l)}else if(c===df.BIN){let l=ca+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ch=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Dh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Dh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=or[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,Dt,d)})})}},Ih=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ph=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},xc=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,b=1-m,y=p-d+u;for(let _=0;_!==o;_++){let w=a[x+_+o],T=a[x+_+c]*h,P=a[g+_+o],A=a[g+_]*h;r[_]=b*w+y*T+m*P+p*A}return r}},n_=new Pt,Lh=class extends xc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return n_.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ff={9728:Vt,9729:Lt,9984:Co,9985:Zs,9986:cs,9987:Cn},pf={33071:Tn,33648:ks,10497:$t},oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i_={CUBICSPLINE:void 0,LINEAR:Yi,STEP:ji},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function r_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function a_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o_(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lh(t.attributes):e=s.indices+":"+lh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+lh(s.targets[n]);return e}function lh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var l_=new Ne,Fh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ts(this.options.manager):this.textureLoader=new $r(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ps(r,o,i),Qn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(pi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=oh[i.type],o=or[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new at(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=oh[i.type],l=or[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(b);y||(x=new l(o,p*f,i.count*f/h),y=new qs(x,f/h),t.cache.add(b,y)),m=new js(y,c,d%f/h,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),m=new at(x,c,g);if(i.sparse!==void 0){let p=oh.SCALAR,b=or[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new b(a[1],y,i.sparse.count*p),T=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new at(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,A=w.length;P<A;P++){let v=w[P];if(m.setX(v,T[P*c]),c>=2&&m.setY(v,T[P*c+1]),c>=3&&m.setZ(v,T[P*c+2]),c>=4&&m.setW(v,T[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=ff[d.magFilter]||Lt,h.minFilter=ff[d.minFilter]||Cn,h.wrapS=pf[d.wrapS]||$t,h.wrapT=pf[d.wrapT]||$t,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Ot(x);m.needsUpdate=!0,d(m)}),t.load(pi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Qn(u,a),u.userData.mimeType=a.mimeType||c_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Li,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Pi,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Je}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rt);let h=r.alphaMode||ch.OPAQUE;if(h===ch.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ch.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==St){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Dt)}return r.emissiveTexture!==void 0&&a!==St&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(i,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return mf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=o_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=mf(new rt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?s_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,b=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Nr(x,b):new ke(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=ah(p.geometry,aa):m.mode===In.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,tr));else if(m.mode===In.LINES)p=new $i(x,b);else if(m.mode===In.LINE_STRIP)p=new Zi(x,b);else if(m.mode===In.LINE_LOOP)p=new Br(x,b);else if(m.mode===In.POINTS)p=new Qi(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&a_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Qn(p,r),m.extensions&&ps(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ps(i,u[0],r),u[0];let d=new We;r.extensions&&ps(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(mt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ss(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ne;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Or(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,_=d.length;y<_;y++){let w=d[y],T=f[y],P=g[y],A=x[y],v=m[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let M=n._createAnimationTracks(w,T,P,A,v);if(M)for(let C=0;C<M.length;C++)p.push(M[C])}let b=new Yr(r,void 0,p);return Qn(b,i),b})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,l_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ys:l.length>1?h=new We:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Qn(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new We;n.name&&(r.name=i.createUniqueName(n.name)),Qn(r,n),n.extensions&&ps(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof rn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Fi[r.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Fi[r.path]){case Fi.weights:l=qn;break;case Fi.rotation:l=jn;break;case Fi.translation:case Fi.scale:l=Yn;break;default:switch(n.itemSize){case 1:l=qn;break;case 2:case 3:default:l=Yn;break}break}let h=i.interpolation!==void 0?i_[i.interpolation]:Yi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Fi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof jn?Lh:xc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function h_(s,e,t){let n=e.attributes,i=new xt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=Uh(or[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Uh(or[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function mf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Dh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Qn(s,e),h_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?r_(s,e.targets,t):s})}var Nh=new WeakMap,_c=class extends xn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new Kn(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,tt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Dt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Nh.has(e)){let c=Nh.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Nh.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new rt;e.index&&t.setIndex(new at(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,c=new at(a,o);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==tt)return;let n=new Ce;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ze.colorSpaceToWorking(n,tt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Kn(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=u_.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function u_(){let s,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":let c=o.buffer,l=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let x={index:null,attributes:[]};for(let m in h){let p=self[u[m]],b,y;if(l.useUniqueIDs)y=h[m],b=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,a[h[m]]),y===-1)continue;b=o.GetAttribute(d,y)}let _=i(a,o,d,m,p,b);m==="color"&&(_.vertexColorSpace=l.vertexColorSpace),x.attributes.push(_)}return g===a.TRIANGULAR_MESH&&(x.index=n(a,o,d)),a.destroy(d),x}function n(a,o,c){let h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,c,l,h,u){let d=u.num_components(),g=c.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=r(a,h),p=a._malloc(x);o.GetAttributeDataArrayForAllPoints(c,u,m,x,p);let b=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:l,array:b,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Oh=new Map;function bf(s,e){let t=document.createElement("canvas");t.width=2048,t.height=512;let n=t.getContext("2d"),i=t.width;n.fillStyle=e?"#aaa":"#4a4b4d",n.fillRect(0,0,i,512);let r=(u,d)=>e?u:d,a=613733;for(let u=0;u<18e3;u++){a=Math.imul(a,1664525)+1013904223>>>0;let d=a%i,f=(a>>>12)%512;n.fillStyle=a%3===0?"rgba(255,255,255,.055)":"rgba(0,0,0,.09)",n.fillRect(d,f,3,1)}let o=(u,d,f)=>{n.fillStyle=r("#808080","#383a3c"),n.fillRect(0,u-d/2,i,d),n.fillStyle=r("#3a3a3a","#252629"),n.fillRect(0,u-f/2,i,f)};for(let u of[171,222,289,337])o(u,11,7);for(let u of[22,34,103,114,398,410,478,490])o(u,3,1);n.lineCap="round";function c(u,d){for(let[f,g]of[[d+3,r("#777","#393b3e")],[d,r("#494949","#25272a")]])n.lineWidth=f,n.strokeStyle=g,n.beginPath(),u.forEach(([x,m],p)=>p===0?n.moveTo(x,m):n.lineTo(x,m)),n.stroke()}for(let u=-64;u<=i+64;u+=64)c([[u,112],[u+13,139],[u+36,174],[u+35,200],[u+49,223]],5),c([[u+26,291],[u+14,310],[u+17,339],[u+41,370],[u+51,402]],5),c([[u+36,221],[u+41,241],[u+29,256]],3),c([[u+61,290],[u+57,264],[u+46,252]],3),c([[u+12,129],[u+23,159]],2),c([[u+8,383],[u+3,363]],2);function l(u,d){n.save(),n.translate(0,u),d&&(n.translate(i,0),n.scale(-1,-1)),n.textBaseline="middle";let f=r("#dedede","#646668");n.fillStyle=f;for(let g of[100,1124]){n.font="900 33px Arial",n.fillText(s,g,0),n.font="700 17px Arial",n.fillText("TUBELESS  \u2022  RADIAL",g+385,-1),n.font="700 14px monospace",n.fillText("OUTSIDE",g+675,10);for(let x=0;x<6;x++)n.fillRect(g+802+x*7,-8,2,16)}n.restore()}l(68,!1),l(444,!0);let h=new Xt(t);return h.wrapS=$t,h.anisotropy=8,e||(h.colorSpace=tt),h}function d_(s){return Oh.has(s)||Oh.set(s,new Je({color:12303810,metalness:0,roughness:.81,map:bf(s,!1),bumpMap:bf(s,!0),bumpScale:.012})),Oh.get(s)}var Bh=[[-1,.784],[-1,.818],[-.996,.848],[-.98,.875],[-.958,.902],[-.902,.926],[-.825,.951],[-.715,.971],[-.575,.984],[-.42,.993],[-.24,.998],[0,1],[.24,.998],[.42,.993],[.575,.984],[.715,.971],[.825,.951],[.902,.926],[.958,.902],[.98,.875],[.996,.848],[1,.818],[1,.784]];function kh(s,e,t,n=e*.784){let i=Bh.map(([o,c])=>new be(mt.lerp(n,e,(c-.784)/.216),o*s)),r=new Xr(i,160);r.rotateZ(-Math.PI/2);let a=r.attributes.uv;for(let o=0;o<a.count;o++){let c=o%i.length,l=Bh[c][0],h=Bh[c][1],u=.5+l*.315,d=Math.sign(l)*mt.lerp(.48,.315,(h-.784)/.216)+.5,f=mt.smoothstep(Math.abs(l),.72,1);a.setY(o,mt.lerp(u,d,f))}return new ke(r,d_(t))}function xf(s,e,t,n){let i=Object.fromEntries(["wheel_fl","wheel_fr","wheel_rl","wheel_rr"].map(o=>[o,new xt])),r=s.geometry.attributes.position,a=new R;for(let o=0;o<r.count;o++){a.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld);let c=a.z>0?"f":"r",l=a.x>0?"l":"r";i["wheel_"+c+l].expandByPoint(a)}for(let[o,c]of Object.entries(i)){let l=c.getCenter(new R),h=c.getSize(new R),u=o.startsWith("wheel_f"),{marking:d,innerRadius:f}=u?t:n,g=kh(h.x/2,Math.max(h.y,h.z)/2,d,f);g.position.copy(l),e[o].add(g)}}function _f(){let s=new Je({color:2697771,metalness:.22,roughness:.73}),e=new Je({color:7039855,metalness:.8,roughness:.39});function t(i){i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getSize(new R),a=i.geometry.boundingBox.getCenter(new R),o=kh(r.x/2,Math.max(r.y,r.z)/2,"PERFORMANCE");o.geometry.translate(a.x,a.y,a.z),i.geometry=o.geometry,i.material=o.material}function n(i){i.geometry.computeBoundingBox();let r=i.geometry.boundingBox,a=(r.max.y-r.min.y)/2,o=(r.min.z+r.max.z)/2,c=(r.min.y+r.max.y)/2,l=i.position.x<0?-1:1,h=l<0?r.min.x:r.max.x,u=new We;u.position.copy(i.position),u.quaternion.copy(i.quaternion),u.scale.copy(i.scale);let d=new ke(new qt(a*.55,a*.55,.012,42),e);d.position.set(h+l*.004,c,o),d.rotation.z=Math.PI/2,u.add(d);let f=new Ne,g=new Ut(a*.022,8,5);g.scale(.16,1,1);let x=new Wt(g,s,72);for(let m=0;m<72;m++){let p=Math.floor(m/4)*Math.PI/9,b=m%4,y=p+b*.031,_=a*(.67+b*.076);f.makeTranslation(h+l*.003,c+Math.cos(y)*_,o+Math.sin(y)*_),x.setMatrixAt(m,f)}return u.add(x),u}return{detailTire:t,detailRotor:n}}function ct(s,e,t,n){return{axis:s,threshold:e,lower:t,upper:n}}function ms(s,e,t){if(typeof e=="string"){t(e,s);return}let{axis:n,threshold:i,lower:r,upper:a}=e,o=s.map(c=>c[n]<=i);if(o.every(Boolean))ms(s,r,t);else if(!o.some(Boolean))ms(s,a,t);else{let c=[[],[]];for(let l=0;l<s.length;l++){let h=(l+1)%s.length,u=s[l],d=s[h];if(c[o[l]?0:1].push(u),o[l]!==o[h]){let f=(i-u[n])/(d[n]-u[n]),g=u.map((x,m)=>mt.lerp(x,d[m],f));c[0].push(g),c[1].push(g)}}ms(c[0],r,t),ms(c[1],a,t)}}var gs=[["front",[-.094,.082],[-.08,-.31,-.025],.13,1.26],["rear",[.274,-.235],[.08,2.65,-.075],.06,.97],["cabin",[-.222,-.158],[.11,.31,-.07],.22,.79],["floor",[.025,-.366],[.33,-.61,.05],0,.62],["doorRight",[.031,.325],[.25,-.73,.23],.21,.86],["doorLeft",[-.347,.092],[-.02,.53,-.15],.23,.77],["wheel_fl",[.254,.245],[.08,-.15,.04],.32,1.25],["wheel_fr",[.365,.162],[-.17,1.23,-.18],.28,1.02],["wheel_rl",[.42,-.06],[-.13,.03,-.23],.34,.99],["wheel_rr",[-.405,-.289],[.12,1.88,-.19],.3,.93],["brake_wheel_fl",[.138,.21],[.04,-.27,.17],.19,1.05],["brake_wheel_fr",[.43,.262],[-.035,1.35,-.23],.16,.78],["brake_wheel_rl",[.315,.045],[.12,-.4,.34],.18,.98],["brake_wheel_rr",[-.335,-.158],[.09,1.64,-.18],.17,.85],["headlampLeft",[-.23,.171],[.07,1.09,-.06],.38,1.06],["headlampRight",[-.199,.256],[.11,-.05,.29],.39,1.1],["tailLeft",[.43,-.226],[.07,2.8,-.22],.42,1.12],["tailRight",[.372,-.351],[.22,2.9,-.22],.42,1.15],["windshield",[-.103,-.323],[.23,.58,.11],.4,.88],["cockpit",[-.264,-.355],[.18,.46,-.14],.11,.67]];function cr(s,e){let t=new We,n=e.filter(([i])=>s[i].children.length>0).map(([i,r,a,o,c])=>{let l=s[i],h=new xt().setFromObject(l).getCenter(new R);for(let u of l.children)u.position.sub(h);return t.add(l),{name:i,group:l,center:h,position:r,rotation:a,delay:o,size:c}});return{rig:t,parts:n}}function zh(s){let e=s.geometry.clone();for(let t of["position","normal"]){let n=e.getAttribute(t),i=new Float32Array(n.count*3);for(let r=0;r<n.count;r++)i.set([n.getX(r),n.getY(r),n.getZ(r)],r*3);e.setAttribute(t,new at(i,3))}return e.applyMatrix4(s.matrixWorld)}function lr(s,e,t){let n=zh(s),i=s.material;if(typeof t=="string"){e[t].add(new ke(n,i));return}let{position:r,normal:a,uv:o}=n.attributes,c=n.index,l=c?.count??r.count,h=new Map;function u(d,f){h.has(d)||h.set(d,{positions:[],normals:[],uvs:[]});let g=h.get(d);for(let x=1;x<f.length-1;x++)for(let[m,p,b,y,_,w,T,P]of[f[0],f[x],f[x+1]])g.positions.push(m,p,b),g.normals.push(y,_,w),g.uvs.push(T,P)}for(let d=0;d<l;d+=3){let f=[d,d+1,d+2].map(g=>{let x=c?c.getX(g):g;return[r.getX(x),r.getY(x),r.getZ(x),a.getX(x),a.getY(x),a.getZ(x),o?.getX(x)??0,o?.getY(x)??0]});ms(f,t,u)}n.dispose();for(let[d,f]of h){let g=new rt;g.setAttribute("position",new Ue(f.positions,3)),g.setAttribute("normal",new Ue(f.normals,3)),g.setAttribute("uv",new Ue(f.uvs,2)),e[d].add(new ke(g,i))}}var bs={ferrari:{topKmh:320,launchAcceleration:9.3,redline:9e3,shiftSpeeds:[67,106,146,186,231,277]},bmw:{topKmh:290,launchAcceleration:8.3,redline:7200,shiftSpeeds:[47,75,105,137,175,217,255]},lamborghini:{topKmh:350,launchAcceleration:10.9,redline:8500,shiftSpeeds:[74,114,158,205,250,302]},bugatti:{topKmh:420,launchAcceleration:12.1,redline:6700,shiftSpeeds:[88,127,177,226,279,342]}};function yf(s,e,t){if(s<-.1)return{gear:"R",revs:Math.min(1,.17+Math.abs(s)/8)};if(s<.1&&!e)return{gear:"N",revs:.12};let n=Math.max(0,s*3.6),i=t.shiftSpeeds.findIndex(l=>n<l),r=i<0?t.shiftSpeeds.length:i,a=t.shiftSpeeds[r-1]??0,o=t.shiftSpeeds[r]??t.topKmh,c=Math.min(1,(n-a)/(o-a));return{gear:String(r+1),revs:.15+(r>0?.33:0)+c*(r>0?.52:.85)}}var Ni={ferrari:{center:[.346,.799,.346],tilt:.36,radius:.133},bmw:{center:[.375,.905,.354],tilt:.41,radius:.166,meshes:["Object_10","Object_19"],min:[.178,.728,.253],max:[.568,1.093,.445]},lamborghini:{center:[.348,.686,.407],tilt:.38,radius:.145,meshes:["Interior_Interior_0"],min:[.175,.525,.325],max:[.52,.848,.497]},bugatti:{center:[.411,.767,.558],tilt:.31,radius:.139,meshes:["Object_21","Object_32"],min:[.23,.656,.5],max:[.59,.86,.639]}};function hr(s,e,t){if(!e.children.length)return;let n=new R(...t.center);for(let r of e.children)r.position.sub(n);e.position.copy(n),s.add(e);let i=new R(0,-t.tilt,1).normalize();return{wheel:e,axis:i,radius:t.radius,pivot:n}}function la(s,e,t,n){if(!n?.meshes?.includes(s.name))return!1;let i=zh(s),r=i.attributes.position,a=i.index,o=Int32Array.from({length:r.count},(p,b)=>b);function c(p){for(;o[p]!==p;)o[p]=o[o[p]],p=o[p];return p}let l=new Map;for(let p=0;p<r.count;p++){let b=[r.getX(p),r.getY(p),r.getZ(p)].map(_=>Math.round(_*1e5)).join(","),y=l.get(b);y===void 0?l.set(b,p):o[c(p)]=c(y)}let h=a?.count??r.count,u=p=>a?a.getX(p):p;for(let p=0;p<h;p+=3){let b=c(u(p));o[c(u(p+1))]=b,o[c(u(p+2))]=b}let d=new Set,f=new xt(new R(...n.min),new R(...n.max)),g=new R;for(let p=0;p<r.count;p++)f.containsPoint(g.fromBufferAttribute(r,p))||d.add(c(p));let x=[],m=[];for(let p=0;p<h;p+=3)(d.has(c(u(p)))?m:x).push(u(p),u(p+1),u(p+2));for(let[p,b]of[[e,m],[t,x]]){if(!b.length)continue;let y=i.clone();y.setIndex(b),p.add(new ke(y,s.material))}return i.dispose(),!0}function f_(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d"),r=new Xt(n);return r.colorSpace=tt,{map:r,update(a){t(i,n.width,n.height,a),r.needsUpdate=!0}}}function yc(s,e){let t=e==="lamborghini",n=new xt(new R(t?.173:-.19,t?.636:.816,0),new R(t?.522:.545,t?.792:.996,0)),i=bs[e].redline,r=f_(768,384,(h,u,d,{speed:f,gear:g,revs:x})=>{let m=h.createLinearGradient(0,0,0,d);m.addColorStop(0,"#111c27"),m.addColorStop(1,"#04090e"),h.fillStyle=m,h.fillRect(0,0,u,d);let p=t?u/2:u*.265,b=t?"#d4e7c4":"#89c5ff";if(h.textAlign="center",t){let w=Math.PI*1.03,T=Math.PI*1.97;for(let A=0;A<=32;A++){let v=w+(T-w)*A/32,M=A%4===0;h.strokeStyle=A>=28?"#fb6756":A/32<=x?b:"#516069",h.lineWidth=M?4:2,h.beginPath(),h.moveTo(p+Math.cos(v)*148,230+Math.sin(v)*148),h.lineTo(p+Math.cos(v)*(157+(M?10:3)),230+Math.sin(v)*(157+(M?10:3))),h.stroke(),M&&(h.fillStyle="#d7e1e5",h.font="bold 22px system-ui",h.fillText(String(A/4+1),p+Math.cos(v)*132,230+Math.sin(v)*132+7))}let P=w+(T-w)*x;h.strokeStyle="#fc6753",h.lineWidth=6,h.beginPath(),h.moveTo(p+Math.cos(P)*76,230+Math.sin(P)*76),h.lineTo(p+Math.cos(P)*147,230+Math.sin(P)*147),h.stroke()}else{h.lineJoin="bevel";for(let[y,_]of[47,90,133,176,219,262,305,348].entries()){h.fillStyle=y/8<=x?y>=6?"#ef6353":"#6bade8":"#32434f";let w=56+(7-y)*4;h.beginPath(),h.moveTo(_,w),h.lineTo(_+37,w-4),h.lineTo(_+42,w+10),h.lineTo(_+4,w+14),h.fill()}}h.fillStyle="#eef4f7",h.textAlign="center",h.font="bold "+(t?100:122)+"px system-ui",h.fillText(String(f),p,t?274:222),h.fillStyle=b,h.font="bold 31px system-ui",h.fillText("km/h",p,t?317:264),h.fillStyle="#edf3f6",h.font="bold 65px system-ui",h.fillText(g,t?523:324,t?271:227),h.fillStyle="#a9bfd1",h.font="bold 28px monospace",h.fillText(Math.round(i*x/100)*100+" RPM",t?p:u*.75,t?342:238)});r.update({speed:0,gear:"N",revs:.12});let a=s.geometry.clone(),o=a.attributes.position,c=new Float32Array(o.count*2),l=new R;for(let h=0;h<o.count;h++)l.fromBufferAttribute(o,h).applyMatrix4(s.matrixWorld),c[h*2]=mt.clamp((n.max.x-l.x)/(n.max.x-n.min.x),0,1),c[h*2+1]=mt.clamp((l.y-n.min.y)/(n.max.y-n.min.y),0,1);return a.setAttribute("uv",new at(c,2)),s.geometry=a,s.material=new St({map:r.map,side:s.material.side,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),r.update.setLighting=h=>s.material.color.setScalar(h?.58:1),r.update}var xs=class s extends ke{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new vt;let n=this,i=t.color!==void 0?new Ce(t.color):new Ce(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new wn,u=new R,d=new R,f=new R,g=new Ne,x=new R(0,0,-1),m=new st,p=new R,b=new R,y=new st,_=new Ne,w=this.camera,T=new An(r,a,{samples:l,type:_n}),P=new an({name:c.name!==void 0?c.name:"unspecified",uniforms:nr.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});P.uniforms.tDiffuse.value=T.texture,P.uniforms.color.value=i,P.uniforms.textureMatrix.value=_,this.material=P,this.onBeforeRender=function(A,v,M){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(d,f),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(d),g.extractRotation(M.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),b.subVectors(d,x),b.reflect(u).negate(),b.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(u),w.lookAt(b),w.far=M.far,w.updateMatrixWorld(),w.projectionMatrix.copy(M.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(w.projectionMatrix),_.multiply(w.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=w.projectionMatrix;y.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(y)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-o,I.elements[14]=m.w,n.visible=!1;let B=A.getRenderTarget(),k=A.xr.enabled,z=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(T),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(v,w),A.xr.enabled=k,A.shadowMap.autoUpdate=z,A.setRenderTarget(B);let U=M.viewport;U!==void 0&&A.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};xs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function vc(s,e,t=!1){let n=document.createElement("canvas");n.width=n.height=s,e(n.getContext("2d"),s);let i=new Xt(n);return i.colorSpace=tt,i.anisotropy=8,t&&(i.wrapS=i.wrapT=$t),i}function vf(s){return vc(128,(e,t)=>{let n=e.createImageData(t,t),i=726171;for(let r=0;r<t;r++)for(let a=0;a<t;a++){i=Math.imul(i,1664525)+1013904223>>>0;let o=(i/4294967296-.5)*2,c=Math.floor((a+r)/8)%4<2,l=(Math.floor((a-r+t)/8)+Math.floor((a+r)/8))%2===0,h=s==="carbon"?66+(l?18:-14)+16*Math.cos((c?a+r:a-r)*Math.PI/2)+o*5:153+o*31+19*Math.sin(a*.34+Math.cos(r*.58))*Math.sin(r*.41),u=(r*t+a)*4;n.data[u]=n.data[u+1]=n.data[u+2]=h,n.data[u+3]=255}e.putImageData(n,0,0)},!0)}function p_(s,e,t,n,i,r){s.fillStyle="#181413";for(let[a,o,c]of e)s.beginPath(),s.moveTo(t+(a[0]+.028)/.059*i,n+(.331-a[1])/.085*r),s.lineTo(t+(o[0]+.028)/.059*i,n+(.331-o[1])/.085*r),s.lineTo(t+(c[0]+.028)/.059*i,n+(.331-c[1])/.085*r),s.fill()}function m_(s){let e=s.geometry,t=e.attributes.position,n=[],i=[],r=new R;for(let o=0;o<e.index.count;o+=3){n.length=0;for(let c=0;c<3&&(r.fromBufferAttribute(t,e.index.getX(o+c)).applyMatrix4(s.matrixWorld),!(Math.abs(r.x)>.034||r.y<.242||r.y>.334||r.z<2.19||r.z>2.205));c++)n.push(r.toArray());n.length===3&&i.push([...n])}function a(o){return vc(384,(c,l)=>{let h=c.createLinearGradient(0,0,l,l);h.addColorStop(0,"#fce379"),h.addColorStop(.5,"#f1bf29"),h.addColorStop(1,"#b3790c"),c.fillStyle=h,c.fillRect(0,0,l,l),o==="shield"&&["#167248","#f2ead1","#a92624"].forEach((u,d)=>{c.fillStyle=u,c.fillRect(d*l/3,0,l/3,33)}),p_(c,i,l*.26,l*.135,l*.48,l*.7)})}return{round:a("round"),shield:a("shield")}}function g_(){let s,e=vc(512,(t,n)=>{let i=n/2,r=n*.46,a=t.createRadialGradient(i,i,0,i,i,i);a.addColorStop(0,"#e7ab21"),a.addColorStop(.76,"#efbb39"),a.addColorStop(1,"#9b6a13"),t.fillStyle=a,t.fillRect(0,0,n,n);let o=h=>(144+270*h)*Math.PI/180,c=(h,u)=>[i+Math.cos(h)*u,i+Math.sin(h)*u];t.strokeStyle="#9a2119",t.lineWidth=21,t.beginPath(),t.arc(i,i,r*.93,o(.8888888888888888),o(1)),t.stroke();for(let h=0;h<=36;h++){let u=o(h/36),d=h%4===0;t.strokeStyle=d?"#1c180d":"#382812",t.lineWidth=d?7:3,t.beginPath(),t.moveTo(...c(u,r*.92)),t.lineTo(...c(u,r*(d?.8:.86))),t.stroke(),d&&(t.fillStyle="#24180b",t.font="bold 46px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(String(h/4),...c(u,r*.69)))}t.fillStyle="#282015",t.font="bold 24px system-ui",t.fillText("RPM \xD71000",i,i+106);let l=t.getImageData(0,0,n,n);s=({gear:h,revs:u})=>{t.putImageData(l,0,0);let d=o(u);t.lineCap="round",t.strokeStyle="#821d14",t.lineWidth=8,t.beginPath(),t.moveTo(...c(d+Math.PI,22)),t.lineTo(...c(d,r*.8)),t.stroke(),t.fillStyle="#211e18",t.beginPath(),t.arc(i,i,14,0,Math.PI*2),t.fill(),t.fillStyle="#090c10",t.fillRect(i+55,i+56,56,45),t.font="bold 32px monospace",t.fillStyle="#f0ead9",t.fillText(h,i+83,i+79)},s({gear:"N",revs:.12})});return{map:e,update(t){s(t),e.needsUpdate=!0}}}var b_={...xs.ReflectorShader,fragmentShader:xs.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );",`float height = vUv.y / max(vUv.w,.001);
     float softbox = exp(-pow((height-.75)*9.0,2.0));
     vec3 studio = vec3(.025,.030,.041) * (1.0+1.7*softbox);
     vec3 surface = mix(studio,base.rgb,base.a);
     gl_FragColor = vec4(blendOverlay(surface,color),1.0);`)},Mf={driver:{center:[1.025,.86,.425],normal:[-.441,.013,-.897],part:"doorRight"},passenger:{center:[-1.025,.86,.425],normal:[.441,.012,-.897],part:"doorLeft"},rearview:{center:[.007,1.093,.286],normal:[.134,.015,-.991],part:"cabin"}};function x_(s,e,t){if(Math.abs(s)>.943&&e>.794&&e<.94&&t>.352&&t<.49)return s>0?"driver":"passenger";if(Math.abs(s-.007)<.122&&Math.abs(e-1.093)<.033&&Math.abs(t-.286)<.029)return"rearview"}function Sf(s){let e=m_(s.getObjectByName("chrome")),t=b=>new Je(b),n=vf("leather"),i=vf("carbon"),r=g_(),a=[],o=[],c=(b,y)=>({bumpMap:b,bumpScale:y}),l={leather:t({color:2105637,roughness:.86,metalness:0,...c(n,.007)}),trim:t({color:7482153,roughness:.73,metalness:0,...c(n,.003)}),carbon:t({color:5592925,map:i,roughness:.38,metalness:.42,...c(i,.003)}),soft:t({color:2698288,roughness:.78,metalness:0,...c(n,.004)}),hard:t({color:2435115,roughness:.62,metalness:.07,...c(n,.002)}),carpet:t({color:2368551,roughness:.97,metalness:0,...c(n,.014)}),undertray:t({color:5593181,map:i,roughness:.61,metalness:.27,...c(i,.006)}),dial:t({map:r.map,emissive:16777215,emissiveMap:r.map,emissiveIntensity:.18,roughness:.58}),round:t({map:e.round,roughness:.3,metalness:.14}),shield:t({map:e.shield,roughness:.37,metalness:.2}),mirror:t({color:5989486,roughness:.075,metalness:1,envMapIntensity:.5})},h=[],u=!1;function d(b,y,_,w){if(b.name==="chrome"){let T=x_(y,_,w);if(T)return"mirror:"+T}if(b.name==="yellow_trim"){if(w>1.8)return"bonnetBadge";if(Math.abs(y)>.73)return y>0?"rightBadge":"leftBadge";if(Math.abs(y-.346)<.07&&Math.abs(_-.821)<.07&&Math.abs(w-.682)<.04)return"dial"}return b.name==="steering_centre"?"steeringBadge":_<.22&&b.name==="interior_dark"?"undertray":{Leather:"leather",Leather_red:"trim",Carbon_Fiber:"carbon",Interior_dark:"hard",Interior_light:"soft",plastic_gray:"hard",Carpet:"carpet"}[b.material.name]??"source"}let f=(b,y,_)=>(b-y)/(_-y);function g(b,y,_){let[w,T,P]=y;if(b==="dial")return[f(w,.398,.293),f(T,.769,.873)];if(b==="steeringBadge")return[f(w,.367,.325),f(T,.779,.819)];if(b==="bonnetBadge")return[f(w,-.014,.022),f(P,2.123,2.066)];if(b==="rightBadge")return[f(P,.847,.763),f(T,.694,.78)];if(b==="leftBadge")return[f(P,.763,.847),f(T,.694,.78)];let A=b==="carbon"||b==="undertray"?38:13;return[A*y[_[0]],A*y[_[1]]]}function x(b,y,_){if(b.startsWith("mirror:")){let T=Mf[b.split(":")[1]],P=new R(...T.normal).normalize(),A=new R(...T.center),v=new Pt().setFromUnitVectors(new R(0,0,1),P),M=y.clone().translate(-A.x,-A.y,-A.z).applyQuaternion(v.clone().invert()),C=M.attributes.position;for(let z=0;z<C.count;z++)C.setZ(z,0);M.computeBoundingSphere();let I=new xs(M,{textureWidth:512,textureHeight:384,multisample:0,color:11779013,clipBias:.001,shader:b_});I.quaternion.copy(v),I.position.copy(A).addScaledVector(P,.0013),I.visible=!1;let B=I.onBeforeRender;I.onBeforeRender=function(z,U,X){if(u)return;let W=performance.now();if(!(I.userData.drive&&W-(I.userData.lastReflection??-1/0)<100)){I.userData.lastReflection=W,u=!0;try{B.call(this,z,U,X)}finally{u=!1}}};let k=new ke(y,l.mirror);return k.add(I),h.push(I),k}let w=b==="steeringBadge"?"round":b.endsWith("Badge")?"shield":b;return new ke(y,l[w]??_)}function m(b){let y=b.geometry.clone(),_=y.attributes.position,w=[];for(let T=0;T<_.count;T++)w.push(.5+Math.sign(b.position.x)*_.getZ(T)/.073,.5+_.getY(T)/.073);y.setAttribute("uv",new Ue(w,2)),b.geometry=y,b.material=l.round}function p(b){let y=new We;for(let[_,w]of[[-.13,"speed"],[.13,"telemetry"]]){let T,P=vc(288,(v,M)=>{let C=M/384;M=384,T=({speed:I,gear:B,brake:k})=>{v.setTransform(C,0,0,C,0,0),v.fillStyle="#0c1117",v.fillRect(0,0,M,M),v.strokeStyle="#2e3c48",v.lineWidth=7,v.strokeRect(13,13,M-26,M-26),v.textAlign="center",v.fillStyle="#acbdc7",v.font="30px monospace",v.fillText(w==="speed"?"VEHICLE":"MANETTINO",M/2,76),v.fillStyle="#edecea",v.font=w==="speed"?"120px monospace":"57px monospace",v.fillText(w==="speed"?String(I):k?"BRAKE":"SPORT",M/2,224),v.fillStyle="#b83e32",v.fillRect(51,256,M-102,5),v.fillStyle="#8fa8ba",v.font="32px monospace",v.fillText(w==="speed"?"km/h  \xB7  "+B:"ESC ON",M/2,311)},T({speed:0,gear:"N",brake:!1})});a.push(v=>{T(v),P.needsUpdate=!0});let A=new ke(new Ht(.085,.061),new St({map:P,color:13095388}));o.push(A.material),A.rotation.y=Math.PI,A.position.set(b+_,.79,.659),y.add(A)}return y}return{finishFor:d,uvFor:g,meshFor:x,wheelCenter:m,instrumentScreens:p,undertray:l.undertray,updateInstruments(b){r.update(b);for(let y of a)y(b)},setInstrumentLighting(b){l.dial.emissiveIntensity=b?.42:.18;for(let y of o)y.color.setHex(b?8162206:13095388)},mirrorPlanes:Mf,setMirrors(b,{driving:y=!1}={}){for(let _ of h)_.visible=b,_.userData.drive=y,_.userData.lastReflection=void 0}}}function dn(s,e,t,n,i,r){let a=new ke(e,t);return a.position.set(n,i,r),s.add(a),a}function wf(s){let e=new We,t=new Je({color:5131594,metalness:.8,roughness:.42}),n=new Je({color:10066069,metalness:.82,roughness:.39}),i=new Je({color:1052947,roughness:.86}),r=[];for(let a of[-1,1]){for(let o of[-1.39,-1.11,-.84,-.55,-.22,.15,.5,.84,1.14,1.45]){let c=(Math.abs(o)>1.08?.49:.69)*a;r.push([c,.144,o])}dn(e,new _t(.018,.006,1.83),i,a*.595,.147,-.026),dn(e,new _t(.036,.009,1.71),t,a*.49,.146,.04)}for(let a of[-.96,-.35,.29,.94])dn(e,new _t(1.26,.006,.012),i,0,.146,a),r.push([-.31,.144,a-.024],[.31,.144,a-.024]);for(let[a,o,c]of r)dn(e,new qt(.013,.013,.004,18),t,a,o,c),dn(e,new qt(.007,.008,.005,6),n,a,o-.003,c);dn(e,new _t(.44,.016,.36),s,0,.143,.58),dn(e,new _t(.39,.006,.31),t,0,.132,.58);for(let a of[-1,1]){for(let o=0;o<5;o++)dn(e,new _t(.074,.009,.012),i,a*.128,.127,.496+o*.043);for(let o of[.445,.715])dn(e,new qt(.011,.011,.007,6),n,a*.168,.129,o)}for(let a of[-1,1]){let o=dn(e,new _t(.145,.012,.58),t,a*.281,.14,-1.226);o.rotation.y=a*.11;for(let c=0;c<12;c++)dn(e,new _t(.115,.005,.011),n,a*(.31-c*.0056),.133,-1.479+c*.047)}return e}function Hh(s){let e=new We,t=new Je({color:2894635,metalness:.7,roughness:.42}),n=new Je({color:7634048,metalness:.78,roughness:.28}),i=new Je({color:10037796,metalness:.25,roughness:.44});for(let r of[-1,1]){let a=r*(s>0?.617:.636),o=[];for(let l=0;l<=112;l++){let h=l/112,u=h*Math.PI*13;o.push(new R(a+r*h*.03+Math.cos(u)*.037,.375+h*.245,s+Math.sin(u)*.037))}dn(e,new es(new Xn(o),112,.0055,8,!1),i,0,0,0);let c=dn(e,new qt(.016,.019,.263,16),n,a+r*.014,.495,s);c.rotation.z=-r*.13;for(let l of[.367,.622])dn(e,new qt(.041,.041,.012,22),t,a+r*(l>.5?.03:0),l,s)}return e}var Tf=s=>new URL("./assets/"+s,import.meta.url).href;function __(s){let e=s.material,t=e.name;if(t==="Body_Color")s.material=new ht({color:11866128,metalness:.33,roughness:.3,clearcoat:.9,clearcoatRoughness:.165,envMapIntensity:.69});else if(t==="Glass_Gray"||t==="Projector_Glass")s.material=new ht({color:t==="Glass_Gray"?6057335:11975866,metalness:.13,roughness:.09,clearcoat:1,clearcoatRoughness:.07,transparent:!0,opacity:t==="Glass_Gray"?.28:.23,depthWrite:!1,envMapIntensity:.8});else if(t==="Carbon_Fiber")e.color.setHex(2894635),e.roughness=.38,e.metalness=.35;else if(t==="metal_chrome"||t==="metal_gray")e.color.setHex(t==="metal_chrome"?11645620:8750730),e.metalness=.86,e.roughness=t==="metal_chrome"?.22:.36;else if(t==="Carpet"||t==="Interior_light"||t==="Interior_dark"||t==="plastic_gray"||t==="Leather"){let n={Carpet:2236446,Interior_light:5854803,Interior_dark:3618359,plastic_gray:4802375,Leather:2433826};e.color.setHex(n[t]),e.metalness=.06,e.roughness=.68}else t==="Taillight_Glass"?(e.color.setHex(8983319),e.roughness=.21):t==="Ferrari_Yellow"&&(e.color.setHex(16763210),e.roughness=.38)}var y_=ct(0,-.642,"doorLeft",ct(0,.642,"cabin","doorRight")),Gh=ct(2,-.99,"rear",ct(2,.92,ct(1,.189,"floor",ct(1,.851,y_,"cabin")),"front")),Rf=ct(0,0,"headlampLeft","headlampRight"),v_=ct(0,0,"tailLeft","tailRight"),M_=ct(2,-1.4,"rear",ct(2,1.27,"windshield",Rf)),S_=ct(2,-1.68,v_,Gh),Af=ct(2,1.2,Gh,Rf),w_=new Set(["trim","leather","carpet","carbon_fibre_trim","wipers","metal","yellow_trim","blue"]),T_=ct(2,-.94,"rear",ct(2,1.16,"cockpit","front")),A_=new Map([["glass",M_],["lights_red",S_],["lights",Af],["leds",Af]]);function Ef(s,e,t){let n=s.geometry.clone().applyMatrix4(s.matrixWorld),{position:i,normal:r}=n.attributes,a=n.index,o=a?a.count:i.count,c=new Map,l=s.parent.name==="steering_wheel"?"steering":A_.get(s.name)??(w_.has(s.name)||s.parent.name==="steering_wheel"?T_:Gh);function h(u,d,f,g){let x=u+"/"+f;c.has(x)||c.set(x,{panel:u,finish:f,positions:[],normals:[],uv:[]});let m=c.get(x);for(let p=1;p<d.length-1;p++)for(let b of[d[0],d[p],d[p+1]])m.positions.push(...b.slice(0,3)),m.normals.push(...b.slice(3)),m.uv.push(...t.uvFor(f,b,g))}for(let u=0;u<o;u+=3){let d=[u,u+1,u+2].map(y=>{let _=a?a.getX(y):y;return[i.getX(_),i.getY(_),i.getZ(_),r.getX(_),r.getY(_),r.getZ(_)]}),f=y=>(d[0][y]+d[1][y]+d[2][y])/3,g=t.finishFor(s,f(0),f(1),f(2)),[x,m,p]=[3,4,5].map(y=>Math.abs(f(y))),b=m>=x&&m>=p?[0,2]:x>=p?[2,1]:[0,1];g.startsWith("mirror:")?f(5)<0&&h(t.mirrorPlanes[g.split(":")[1]].part,d,g,b):ms(d,l,(y,_)=>h(y,_,g,b))}n.dispose();for(let{panel:u,finish:d,positions:f,normals:g,uv:x}of c.values()){let m=new rt;m.setAttribute("position",new Ue(f,3)),m.setAttribute("normal",new Ue(g,3)),m.setAttribute("uv",new Ue(x,2)),e[u].add(t.meshFor(d,m,s.material))}}async function Cf(){let s=new _c;s.setDecoderPath(Tf("draco/gltf/")).setDecoderConfig({type:"wasm"}).setWorkerLimit(1);let e=new zn().setDRACOLoader(s),t;try{t=(await e.loadAsync(Tf("ferrari.glb"))).scene}finally{s.dispose()}t.rotation.y=Math.PI,t.updateMatrixWorld(!0);let i=t.getObjectByName("steering_wheel").getWorldPosition(new R).x,r=Object.fromEntries(gs.map(([h])=>[h,new We]));r.steering=new We;let{detailTire:a,detailRotor:o}=_f(),c=Sf(t);t.traverse(h=>{if(h.isMesh)if(__(h),h.parent.name==="steering_wheel")Ef(h,r,c);else if(r[h.parent.name]){let u=h.clone(!1);h.matrixWorld.decompose(u.position,u.quaternion,u.scale),h.name.startsWith("tire")&&a(u),h.name.startsWith("centre")&&c.wheelCenter(u),h.name.startsWith("brake")?r["brake_"+h.parent.name].add(u,o(u)):r[h.parent.name].add(u)}else Ef(h,r,c)}),r.floor.add(wf(c.undertray)),r.front.add(Hh(1.155)),r.rear.add(Hh(-1.496)),r.cockpit.add(c.instrumentScreens(i));let l=hr(r.cockpit,r.steering,Ni.ferrari);return{...cr(r,gs),seats:{driverX:i,eyeHeight:1.085,eyeDepth:-.263},steering:l,updateInstruments:c.updateInstruments,setInstrumentLighting:c.setInstrumentLighting,setMirrors:c.setMirrors}}var ha=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);b[y]=_>96?_-97:_>64?_-39:_+4}for(var w=0,y=0;y<p.length;++y)b[w++]=b[y]<60?n[b[y]]:(b[y]-60)*64+b[++y];return b.buffer.slice(0,w)}function c(p,b,y,_,w,T,P){var A=p.exports.sbrk,v=_+3&-4,M=A(v*w),C=A(T.length),I=new Uint8Array(p.exports.memory.buffer);I.set(T,C);var B=b(M,_,w,C,T.length);if(B==0&&P&&P(M,v,w),y.set(I.subarray(M,M+_*w)),A(M-A(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(y){var _=y.data;b.pending-=_.count,b.requests[_.id][_.action](_.value),delete b.requests[_.id]},b}function g(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),y=new Blob([b],{type:"text/javascript"}),_=URL.createObjectURL(y),w=u.length;w<p;++w)u[w]=f(_);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function x(p,b,y,_,w){for(var T=u[0],P=1;P<u.length;++P)u[P].pending<T.pending&&(T=u[P]);return new Promise(function(A,v){var M=new Uint8Array(y),C=++d;T.pending+=p,T.requests[C]={resolve:A,reject:v},T.object.postMessage({id:C,count:p,size:b,source:M,mode:_,filter:w},[M.buffer])})}function m(p){var b=p.data;if(!b.id)return self.close();self.ready.then(function(y){try{var _=new Uint8Array(b.count*b.size);c(y,y.exports[b.mode],_,b.count,b.size,b.source,y.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:b.id,count:b.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,b,y,_,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,b,y,_,r.exports[l[w]])},decodeIndexBuffer:function(p,b,y,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,b,y,_)},decodeIndexSequence:function(p,b,y,_){c(r,r.exports.meshopt_decodeIndexSequence,p,b,y,_)},decodeGltfBuffer:function(p,b,y,_,w,T){c(r,r.exports[h[w]],p,b,y,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,b,y,_,w){return u.length>0?x(p,b,y,h[_],l[w]):a.then(function(){var T=new Uint8Array(p*b);return c(r,r.exports[h[_]],T,p,b,y,r.exports[l[w]]),T})}}})();var If=[...gs.map(([s,e,t,n,i])=>[s,e,t,n,s==="cabin"?.72:i*.92]),["engine",[.28,-.025],[.24,-.35,-.32],.12,.86]],E_=ct(0,-.57,"doorLeft",ct(0,.57,"cockpit","doorRight")),R_=ct(2,-1.14,"rear",ct(2,1.03,ct(1,.235,"floor",ct(1,1.065,E_,"cabin")),"front")),Wh=(s,e)=>ct(2,0,e,s),ur=(s,e)=>ct(0,0,s,e),Pf=Wh(ur("wheel_fr","wheel_fl"),ur("wheel_rr","wheel_rl")),C_=Wh(ur("brake_wheel_fr","brake_wheel_fl"),ur("brake_wheel_rr","brake_wheel_rl")),Vh=Wh(ur("headlampLeft","headlampRight"),ur("tailLeft","tailRight")),I_={Meshesheadlight51Mtl:Vh,Meshesled111Mtl:Vh,Meshesredlight1Mtl:Vh,Mesheswindows1Mtl:"windshield",Meshesinterior71Mtl:"cockpit",Meshesinterior231Mtl:"cockpit",Caliper1Mtl:C_,Meshesm8rim1Mtl:Pf,Meshesm8rim0011Mtl:Pf};function P_(s){return s.name==="Meshesbody151Mtl"?new ht({map:s.map,color:9415758,metalness:.42,roughness:.25,clearcoat:.85,clearcoatRoughness:.16,side:s.side}):s.name==="Mesheswindows1Mtl"?new ht({color:6321537,metalness:.08,roughness:.12,opacity:.25,transparent:!0,depthWrite:!1,clearcoat:1,clearcoatRoughness:.065,side:s.side}):(s.transparent&&(s.depthWrite=!1),s.envMapIntensity=.85,s)}async function Lf(){let s=new zn().setMeshoptDecoder(ha),e=new URL("./assets/bmw-m4.glb",import.meta.url).href,t=(await s.loadAsync(e)).scene,n=new xt().setFromObject(t,!0),i=n.getCenter(new R),r=4.79/(n.max.z-n.min.z);t.scale.setScalar(r),t.position.set(-i.x*r,-n.min.y*r,-i.z*r),t.updateMatrixWorld(!0);let a=Object.fromEntries(If.map(([u])=>[u,new We])),o=new We,c,l=new Map;return t.traverse(u=>{if(!u.isMesh)return;if(u.name==="Object_34"){xf(u,a,{marking:"275/35 ZR19",innerRadius:.28},{marking:"285/30 ZR20",innerRadius:.288});return}let d=u.material;if(!l.has(d)){let g=P_(d);g.name=d.name,l.set(d,g)}if(u.material=l.get(d),la(u,a.cockpit,o,Ni.bmw))return;if(u.name==="Object_15"){c=yc(u,"bmw"),lr(u,a,"cockpit");return}let f=u.name==="Object_21"?"engine":I_[d.name]??R_;lr(u,a,f)}),{steering:hr(a.cockpit,o,Ni.bmw),updateInstruments:c,...cr(a,If),seats:{driverX:.335,eyeHeight:1.155,eyeDepth:-.255}}}var Hn=(s,e)=>ct(0,0,s,e),Uf=ct(2,0,Hn("wheel_rr","wheel_rl"),Hn("wheel_fr","wheel_fl")),Ff=ct(2,0,Hn("brake_wheel_rr","brake_wheel_rl"),Hn("brake_wheel_fr","brake_wheel_fl")),Nf=ct(2,-.91,"rear",ct(2,1.03,ct(1,.23,"floor",ct(1,.88,Hn("doorLeft","doorRight"),"cabin")),"front")),L_=["engine",[.28,-.025],[.24,-.35,-.32],.12,.86],Df=[...gs,L_];function D_(s){let{name:e}=s;return e.startsWith("Headlights")?Hn("headlampLeft","headlampRight"):e.startsWith("Taillights")?Hn("tailLeft","tailRight"):e.startsWith("Tires")||e.startsWith("Wheels")?Uf:e.startsWith("Brake")?Ff:e.startsWith("Door")||e.startsWith("Inner_door")?Hn("doorLeft","doorRight"):e.startsWith("Motor")||e.startsWith("EngineHood")?"engine":e.startsWith("Interior")||e.startsWith("Seam")||e.startsWith("Display")?"cockpit":e.includes("Window")&&e!=="Window_base_Glossy_Black_0"?"windshield":e.startsWith("Undercarriage")?"floor":e.startsWith("Trunk")?"front":Nf}function U_(s){return s.name==="Body"?new ht({color:6197286,metalness:.46,roughness:.26,clearcoat:.9,clearcoatRoughness:.12,side:s.side,envMapIntensity:1.1}):s.name==="Window_Glass"?new ht({color:9214624,metalness:.1,roughness:.13,opacity:.22,transparent:!0,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08,side:s.side}):(s.envMapIntensity=.88,s.transparent&&(s.depthWrite=!1),s)}async function Of(s){let e=new URL("./assets/"+s.file,import.meta.url),t=(await new zn().setMeshoptDecoder(ha).loadAsync(e.href)).scene,n=new We;n.rotation.y=s.yaw??0,n.add(t);let i=new xt().setFromObject(n,!0),r=i.getCenter(new R),a=4.79/(i.max.z-i.min.z);n.scale.setScalar(a),n.position.set(-r.x*a,-i.min.y*a,-r.z*a),n.updateMatrixWorld(!0);let o=Object.fromEntries(Df.map(([f])=>[f,new We])),c=new We,l=Ni[s.id],h,u=new Map;t.traverse(f=>{if(!f.isMesh||s.tyres?.(f,o))return;let g=s.part(f);if(!g)return;let x=f.material,m=s.materialKey?.(f)??x;u.has(m)||u.set(m,s.finish(x,f)),f.material=u.get(m),!la(f,o.cockpit,c,l)&&(s.id==="lamborghini"&&f.name==="Display_Display_0"&&(h=yc(f,"lamborghini")),lr(f,o,g))}),s.addInterior&&(h=await s.addInterior(o,c));let d=hr(o.cockpit,c,l);return{...cr(o,Df),seats:s.seats,steering:d,updateInstruments:h}}function Bf(){return Of({id:"lamborghini",file:"lamborghini.glb",part:D_,finish:U_,seats:{driverX:.348,eyeHeight:.915,eyeDepth:-.035}})}function F_(s){let e=s.material.name,t=s.parent.name;if(t.startsWith("mycar-wheelbrake")||e==="Wheel Brake Disk.007")return Ff;if(t.startsWith("mycar-wheel"))return Uf;if(e==="Window Glass")return"windshield";if(e==="Engine"||e==="Material.008")return"engine";if(["Plane035","Plane036","Cube","Mesh_36","Mesh_37","Mesh_38"].includes(s.name))return Hn("headlampLeft","headlampRight");if(["Plane040","Plane044"].includes(s.name))return Hn("tailLeft","tailRight");if(e.includes("second body color door")||s.name==="Plane066")return Hn("doorLeft","doorRight");if(e==="UnderBody")return"floor";if(!(/plate|Number plate/i.test(e)||s.name==="Plane017"))return Nf}function N_(){let s=document.createElement("canvas");s.width=s.height=512;let e=s.getContext("2d"),t=256,n=e.createRadialGradient(t,t,20,t,t,255);n.addColorStop(0,"#151e2c"),n.addColorStop(1,"#090c12"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="#8eaac8",e.lineWidth=3,e.beginPath(),e.arc(t,t,225,Math.PI*.77,Math.PI*2.23),e.stroke();for(let o=0;o<=50;o++){let c=Math.PI*(.77+1.46*o/50),l=o%5===0;e.lineWidth=l?5:2,e.beginPath(),e.moveTo(t+Math.cos(c)*221,t+Math.sin(c)*221);let h=l?194:207;e.lineTo(t+Math.cos(c)*h,t+Math.sin(c)*h),e.stroke(),l&&(e.font="22px Arial",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#d4e1ea",e.fillText(o*10,t+Math.cos(c)*171,t+Math.sin(c)*171))}e.fillStyle="#879eae",e.font="20px Arial",e.fillText("km/h",t,t+72);let i=e.getImageData(0,0,512,512),r=new Xt(s);r.colorSpace=tt;let a=({speed:o,gear:c})=>{e.putImageData(i,0,0);let l=Math.PI*(.77+1.46*Math.min(1,o/500));e.strokeStyle="#c54334",e.lineWidth=6,e.beginPath(),e.moveTo(t,t),e.lineTo(t+Math.cos(l)*188,t+Math.sin(l)*188),e.stroke(),e.fillStyle="#eee",e.font="bold 34px monospace",e.fillText(String(o),t,t+107),e.fillStyle="#94a9c2",e.font="bold 30px monospace",e.fillText(c,t,t-70),r.needsUpdate=!0};return a({speed:0,gear:"N"}),{texture:r,update:a}}function O_(s){if(s.name!=="Object_9")return;let e=s.geometry.clone(),t=e.attributes.position,n=new Float32Array(t.count*2),i=new R;for(let a=0;a<t.count;a++)i.fromBufferAttribute(t,a).applyMatrix4(s.matrixWorld),n[a*2]=(.471-i.x)/.12,n[a*2+1]=(i.y-.775)/.118;e.setAttribute("uv",new at(n,2)),s.geometry=e;let r=N_();return s.material=new St({map:r.texture,side:Rt,toneMapped:!1}),r.update.setLighting=a=>s.material.color.setScalar(a?.58:1),r.update}function B_(s){let{name:e}=s;return s.envMapIntensity=.92,e==="Window Glass"?new ht({color:10137016,metalness:.08,roughness:.1,opacity:.18,transparent:!0,depthWrite:!1,clearcoat:1,clearcoatRoughness:.07,side:Rt}):e==="Material.002"?new ht({color:12584976,roughness:.2,metalness:.1,emissive:10486536,emissiveIntensity:.65,clearcoat:1,side:Rt}):((e==="Headlights plastic parts"||e==="Mesh")&&(s.color.setHex(e==="Mesh"?1119e3:856087),s.roughness=.43,s.metalness=.45),s.transparent&&(s.depthWrite=!1),s)}function k_(s,e){let t=new Je({color:2499626,metalness:.03,roughness:.87,side:Rt}),n=new ht({color:3352358,metalness:0,roughness:.74,clearcoat:.12,side:Rt}),i=new Je({color:7963276,metalness:.82,roughness:.28,side:Rt}),r=new ht({color:1712168,roughness:.35,metalness:.46,clearcoat:.3,side:Rt});return["Object_13","Object_21"].includes(e.name)?n:["Object_32","Object_33","Object_34"].includes(e.name)?t:e.name==="Object_11"?i:r}async function z_(s,e){let t=new URL("./assets/chiron-cabin.glb",import.meta.url),n=(await new zn().setMeshoptDecoder(ha).loadAsync(t.href)).scene;n.updateMatrixWorld(!0);let i=new Map,r;return n.traverse(a=>{if(!a.isMesh)return;let o=a.material,c=a.name;if(i.has(c)||i.set(c,k_(o,a)),a.material=i.get(c),la(a,s.cockpit,e,Ni.bugatti))return;let l=O_(a);l&&(r=l),lr(a,s,"cockpit")}),r}function Xh({driving:s=!1}={}){return Of({id:"bugatti",file:s?"chiron-drive.glb":"chiron-detailed.glb",part:F_,finish:B_,addInterior:z_,seats:{driverX:.409,eyeHeight:1.045,eyeDepth:.05}})}var kf=new R(0,.62,0),qh=new ea().setFromVector3(new R(6.9,2.68,6.18)),zf=-.17,Hf=Math.PI/2-.012;function Gf(s){return new xt(new R(s-.205,.66,-.72),new R(s+.205,1.12,.17))}function Vf(s,e,t){let n=new vt(39,1,.017,100),i,r="",a={},o=!1,c=qh.clone(),l=new R,h=new Qr,u=new Map,d=!1,f="exterior",g=1,x=1,m=0,p=zf,b,y=0;function _(){return`${r} exterior. Drag or use the arrow keys to orbit. Select a seat or press 1 for the driver or 2 for the passenger.`}function w(U,X){let{driverX:W,eyeHeight:oe,eyeDepth:ce}=U.seats;i=U.rig,r=X,a={driver:{eye:new R(W,oe,ce),box:Gf(W)},passenger:{eye:new R(-W,oe,ce),box:Gf(-W)}},T("exterior"),d=!1,c.copy(qh),g=1,u.clear(),b=void 0,s.style.cursor="",s.setAttribute("aria-label",`${X} components. Scroll to assemble the car.`)}function T(U){if(f===U)return;f=U,m=0,p=zf,x=1;let X=U==="exterior"?_():`${r} ${U} seat. Drag or use the arrow keys to look around. Press Escape or tap to return outside.`;s.setAttribute("aria-label",X),s.style.cursor="",e(U)}function P(U){if(d!==U){if(d=U,!d){c.copy(qh),g=1,T("exterior"),s.style.cursor="",s.setAttribute("aria-label",`${r} components. Scroll to assemble the car.`);return}s.setAttribute("aria-label",_())}}function A(U,X){if(n.aspect=U,f==="exterior")n.fov=39,c.radius=X/(2*Math.tan(mt.degToRad(n.fov/2)))/g,n.position.setFromSpherical(c).add(kf),n.lookAt(kf);else{let W=a[f];n.fov=(U<.8?82:70)/x,n.position.copy(W.eye),l.set(Math.sin(m)*Math.cos(p),Math.sin(p),Math.cos(m)*Math.cos(p)).add(W.eye),n.lookAt(l)}n.updateProjectionMatrix(),n.updateMatrixWorld()}function v(U,X){f==="exterior"?(c.theta-=U,c.phi=mt.clamp(c.phi-X,.012,Math.PI-.012)):(m+=U,p=mt.clamp(p+X,-Hf,Hf)),e(f)}function M(U){f==="exterior"?g=mt.clamp(g*U,.76,1.85):x=mt.clamp(x*U,.9,1.45),e(f)}function C(U,X){let W=s.getBoundingClientRect();h.setFromCamera({x:(U-W.left)/W.width*2-1,y:1-(X-W.top)/W.height*2},n)}function I(U,X,W){C(U,X);let oe=1/0,ce;for(let[ve,ze]of Object.entries(a)){if(ve===f||h.ray.origin.y<.53)continue;let Ke=h.ray.intersectBox(ze.box,l);if(!Ke)continue;let He=Ke.distanceTo(h.ray.origin);He<oe&&(oe=He,ce=ve)}if(!ce||!W)return ce;let ge=h.intersectObject(i,!0).find(ve=>!ve.object.material.transparent);return!ge||ge.distance+.16>=oe?ce:void 0}function B(U,X){return C(U,X),h.ray.intersectsBox(new xt().setFromObject(i))}function k(){let[U,X]=u.values();return Math.hypot(U.x-X.x,U.y-X.y)}s.addEventListener("pointerdown",U=>{!d||U.button!==0||(s.setAttribute("data-pointer-focus",""),s.focus({preventScroll:!0}),u.set(U.pointerId,{x:U.clientX,y:U.clientY}),s.setPointerCapture(U.pointerId),u.size===1?(b={x:U.clientX,y:U.clientY,dragged:!1,canScroll:U.pointerType==="touch"&&f==="exterior"&&!B(U.clientX,U.clientY)},o=!1):(b=void 0,o=!1,y=k()))}),s.addEventListener("pointermove",U=>{if(!d)return;let X=u.get(U.pointerId);if(!X){let W=f==="exterior"?I(U.clientX,U.clientY,!1):void 0;s.style.cursor=W?"zoom-in":"";return}if(u.set(U.pointerId,{x:U.clientX,y:U.clientY}),u.size>1){let W=k();y>0&&W>0&&M(W/y),y=W;return}if(b&&!b.dragged){if(Math.hypot(U.clientX-b.x,U.clientY-b.y)<5)return;b.dragged=!0,o=b.canScroll&&Math.abs(U.clientY-b.y)>Math.abs(U.clientX-b.x)}if(o){window.scrollBy(0,X.y-U.clientY);return}v((U.clientX-X.x)*.008,(U.clientY-X.y)*.008)});function z(U,X){if(u.delete(U.pointerId)){if(X&&d&&b&&!b.dragged){let W=I(U.clientX,U.clientY,!0);W?T(W):f!=="exterior"&&T("exterior")}b=void 0,y=u.size>1?k():0}}return s.addEventListener("pointerup",U=>z(U,!0)),s.addEventListener("pointercancel",U=>z(U,!1)),s.addEventListener("lostpointercapture",U=>z(U,!1)),s.addEventListener("wheel",U=>{!d||!U.ctrlKey&&!U.shiftKey||(U.preventDefault(),M(Math.exp(-U.deltaY*.009)))},{passive:!1}),s.addEventListener("blur",()=>s.removeAttribute("data-pointer-focus")),s.addEventListener("keydown",U=>{if(!d)return;s.removeAttribute("data-pointer-focus");let W={1:()=>T("driver"),2:()=>T("passenger"),Escape:()=>f==="exterior"?t():T("exterior"),ArrowLeft:()=>v(-.16,0),ArrowRight:()=>v(.16,0),ArrowUp:()=>v(0,-.13),ArrowDown:()=>v(0,.13),"+":()=>M(1.14),"=":()=>M(1.14),"-":()=>M(1/1.14)}[U.key];W&&(U.preventDefault(),W())}),{camera:n,position:A,setVehicle:w,setComplete:P,get mode(){return f}}}var ua=class s extends ke{constructor(){let e=s.SkyShader,t=new an({name:e.name,uniforms:nr.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:jt,depthWrite:!1});super(new _t(1,1,1),t),this.isSky=!0}};ua.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function H_(s){let t=s.map(i=>i.geometry.index?.count??i.geometry.attributes.position.count).reduce((i,r)=>i+r,0),n=new rt;for(let[i,r]of[["position",3],["normal",3],["uv",2]]){let a=new Float32Array(t*r),o=0;for(let c of s){let l=c.geometry.clone().applyMatrix4(c.matrixWorld),h=l.getAttribute(i),u=l.index,d=u?.count??l.attributes.position.count;for(let f=0;f<d;f++){let g=u?u.getX(f):f;for(let x=0;x<r;x++)a[o++]=h?h.getComponent(g,x):0}l.dispose()}n.setAttribute(i,new at(a,r))}return n.computeBoundingSphere(),n}function Wf(s,e){s.updateMatrixWorld(!0);let t=new Set;for(let l of e)l.traverse(h=>{h.isMesh&&t.add(h)});let n=new Map,i=new Map,r=0;s.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||Array.isArray(l.material))return;let h=l.material;if(!(h.transparent||h.isShaderMaterial))if(r++,t.has(l)){let u=l.geometry.type+JSON.stringify(l.geometry.parameters)+h.type+h.roughness+h.metalness;i.has(u)||i.set(u,[]),i.get(u).push(l)}else{let u=new R().setFromMatrixPosition(l.matrixWorld),d=[h.uuid,Math.floor(u.x/40),Math.floor(u.z/40),l.castShadow].join(":");n.has(d)||n.set(d,[]),n.get(d).push(l)}});let a=0;for(let l of n.values()){if(l.length<2){a++;continue}let h=new ke(H_(l),l[0].material);h.castShadow=l[0].castShadow,h.receiveShadow=!0,s.add(h),a++;for(let u of l)u.removeFromParent(),u.geometry.dispose()}let o=[];for(let l of i.values()){let h=l[0].material.clone();h.color.set(16777215);let u=new Wt(l[0].geometry,h,l.length);u.instanceMatrix.setUsage(Nl),u.castShadow=!0,u.receiveShadow=!0,u.frustumCulled=!1,l.forEach((d,f)=>{d.visible=!1,u.setColorAt(f,d.material.color)}),s.add(u),o.push({batch:u,objects:l})}function c(){for(let l of e)l.updateMatrixWorld(!0);for(let{batch:l,objects:h}of o)h.forEach((u,d)=>l.setMatrixAt(d,u.matrixWorld)),l.instanceMatrix.needsUpdate=!0}return c(),{update:c,stats:{original:r,batches:a+o.length}}}var dr={forest:{name:"Forest Ridge",icon:"forest",start:.012,points:[[-1380,-770],[-780,-810],[-300,-730],[80,-880],[660,-880],[1390,-660],[1590,-140],[1350,430],[1560,910],[1020,1220],[410,1150],[-85,890],[-520,1100],[-1170,1170],[-1590,710],[-1640,30]]},coast:{name:"Coastal Causeway",icon:"coast",start:.29,points:[[-1180,-1040],[-530,-1130],[200,-1050],[850,-790],[1040,-290],[1010,220],[1130,770],[820,1270],[230,1500],[-600,1420],[-1150,1120],[-1380,560],[-1260,120],[-1500,-450]]},desert:{name:"Red Rock Highway",icon:"desert",start:.031,points:[[-3e3,-1e3],[-2675,-1e3],[-1800,-1e3],[-300,-1e3],[1200,-1e3],[2290,-1e3],[2730,-1e3],[3010,-730],[2840,-195],[2120,-180],[1590,330],[1110,650],[1330,1120],[740,1490],[-180,1400],[-920,1220],[-1660,1260],[-2410,670],[-3030,-230],[-3190,-770]]},park:{name:"Garden Circuit",icon:"park",start:.025,points:[[-78,-59],[0,-69],[74,-59],[93,-25],[93,30],[74,59],[0,69],[-74,59],[-93,25],[-93,-28]]}};function Mc(s){let e=dr[s]??dr.forest,t=new Xn(e.points.map(([n,i])=>new R(n,0,i)),!0,"centripetal");return t.arcLengthDivisions=2048,{curve:t,profile:e}}function Xf(s,e=48){let t=new Map,n=(i,r)=>i+":"+r;for(let i=0;i<s.length-1;i++){let r=s[i],a=s[i+1],o=a.x-r.x,c=a.z-r.z,l={x:r.x,z:r.z,dx:o,dz:c,inverse:1/(o*o+c*c||1)};for(let h=Math.floor((Math.min(r.x,a.x)-24)/e);h<=Math.floor((Math.max(r.x,a.x)+24)/e);h++)for(let u=Math.floor((Math.min(r.z,a.z)-24)/e);u<=Math.floor((Math.max(r.z,a.z)+24)/e);u++){let d=n(h,u);t.has(d)||t.set(d,[]),t.get(d).push(l)}}return(i,r)=>{let a=t.get(n(Math.floor(i/e),Math.floor(r/e))),o=1/0;if(a)for(let c of a){let l=Math.max(0,Math.min(1,((i-c.x)*c.dx+(r-c.z)*c.dz)*c.inverse));o=Math.min(o,(c.x+l*c.dx-i)**2+(c.z+l*c.dz-r)**2)}return Math.sqrt(o)}}var qf=new R(0,1,0),nt=new Mt,tn=(s,e=.85,t=0)=>new Je({color:s,roughness:e,metalness:t});function Qe(s,e,t,n=[0,0,0]){let i=new ke(e,t);return i.position.set(...n),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function G_(s,e,t,n,i){let r=new R(...e),a=new R(...t),o=Qe(s,new qt(n,n,r.distanceTo(a),8),i);return o.position.copy(r).lerp(a,.5),o.quaternion.setFromUnitVectors(qf,a.sub(r).normalize()),o}function V_(){let s=231475;return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296)}function Sc(s,e){let t=document.createElement("canvas");t.width=t.height=s,e(t.getContext("2d"),s);let n=new Xt(t);return n.colorSpace=tt,n}function da(s,e,t=!0){let n=new ts().load(new URL("./assets/drive/"+s,import.meta.url).href);return n.colorSpace=t?tt:kn,n.wrapS=n.wrapT=$t,n.repeat.set(...e),n.anisotropy=8,n.userData.asset=s,n}function jh(s="forest"){let e=s!=="park",t=e?18:1,n=s==="desert",i=s==="coast",r=e?2400:600,a=e?10.5:6.5,o=new We,c=V_(),{curve:l,profile:h}=Mc(s),u=l.getSpacedPoints(r),d=Xf(u),f=new Je({map:da("asphalt.jpg",[1,85*t]),color:8883345,roughness:.9,metalness:.02}),g=new Je({map:da(n?"sand.jpg":"grass.jpg",[72*t,72*t]),color:n?15191980:9808751,roughness:.98});f.normalMap=da("asphalt-normal.jpg",[1,85*t],!1),f.normalScale.set(.4,.4),g.normalMap=da(n?"sand-normal.jpg":"grass-normal.jpg",[72*t,72*t],!1),g.normalScale.set(.65,.65);let x=new Ht(700*t,700*t,80,80),m=x.attributes.position;for(let N=0;N<m.count;N++){let G=m.getX(N),V=m.getY(N),se=Math.max(0,Math.min(1,(Math.max(Math.abs(G),Math.abs(V))-185*t)/(95*t)));m.setZ(N,se*se*(8+Math.sin(G*.018/t)*5+Math.cos(V*.023/t)*4)*Math.sqrt(t))}x.computeVertexNormals();let p=Qe(o,x,g,[0,-.025,0]);p.rotation.x=-Math.PI/2;let b=tn(10394251,.96),y=tn(12302251,.82),_=tn(14933437,.88),w=tn(3488315,.42,.75),T=tn(6572854,.9),P=tn(7830905,.95);function A(N,G=0,V=0){let se=l.getPointAt((N%1+1)%1),D=l.getTangentAt((N%1+1)%1);return se.add(new R(D.z,0,-D.x).multiplyScalar(G)).setY(V)}function v(N,G,V,se){let D=[],H=[],ne=[];for(let j=0;j<=r;j++){let Q=j/r;for(let de of[-1,1])D.push(...A(Q,N+de*G/2,V).toArray());if(H.push(0,Q,1,Q),j<r){let de=j*2;ne.push(de,de+2,de+1,de+1,de+2,de+3)}}let O=new rt;O.setAttribute("position",new Ue(D,3)),O.setAttribute("uv",new Ue(H,2)),O.setIndex(ne),O.computeVertexNormals();let Y=Qe(o,O,se);return Y.castShadow=!1,Y}v(0,a*2,.02,f);for(let N of[-1,1])v(N*(a+.18),.34,.1,y),v(N*(a+(e?3.35:2.85)),e?2:4.6,.015,b),v(N*(a-.62),.095,.027,_),e&&v(N*.6,.11,.03,_);let M=Math.round(l.getLength()/(e?13:5)),C=e?[-4.1,4.1]:[0];for(let N=0;N<M;N+=24){let G=new Wt(new Ht(.13,e?3.8:2.7),_,Math.min(24,M-N)*C.length),V=0;for(let se=N;se<Math.min(N+24,M);se++){let D=l.getTangentAt(se/M);for(let H of C)nt.position.copy(A(se/M,H,.032)),nt.rotation.set(-Math.PI/2,Math.atan2(D.x,D.z),0,"YXZ"),nt.scale.setScalar(1),nt.updateMatrix(),G.setMatrixAt(V++,nt.matrix)}G.receiveShadow=!0,o.add(G)}if(e){let G=function(D){let H=[[-.075,.51],[-.105,.6],[-.042,.67],[-.105,.74],[-.075,.82],[.075,.82],[.075,.51]];for(let ne=0;ne<r;ne+=80){let O=Math.min(r,ne+80),Y=[],j=[];for(let Le=ne;Le<=O;Le++){for(let[Ve,Nt]of H)Y.push(...A(Le/r,D+Ve,Nt).toArray());if(Le<O)for(let Ve=0;Ve<H.length;Ve++){let Nt=(Le-ne)*H.length+Ve,Gt=(Le-ne)*H.length+(Ve+1)%H.length;j.push(Nt,Gt,Nt+H.length,Gt,Gt+H.length,Nt+H.length)}}let Q=new rt;Q.setAttribute("position",new Ue(Y,3)),Q.setIndex(j),Q.computeVertexNormals();let de=Qe(o,Q,N);de.castShadow=!1}},N=tn(10200493,.44,.52),V=Math.round(l.getLength()/12),se=new Wt(new _t(.1,.85,.1),N,V*3);for(let[D,H]of[-10.45,0,10.45].entries()){G(H);for(let ne=0;ne<V;ne++)nt.position.copy(A(ne/V,H,.425)),nt.rotation.set(0,0,0),nt.scale.setScalar(1),nt.updateMatrix(),se.setMatrixAt(D*V+ne,nt.matrix)}se.castShadow=!0,o.add(se)}let I=[],B=n?0:e?440:170;for(let N=0;N<1600&&I.length<B;N++){let G,V;if(e){let se=A(c(),(c()<.5?-1:1)*(22+c()*115),0);G=se.x,V=se.z}else G=(c()-.5)*330,V=(c()-.5)*270;d(G,V)<(e?23:15)||!e&&Math.abs(G)<35&&Math.abs(V)<29||I.push({x:G,z:V,height:7+c()*8,seed:c()})}let k=Sc(128,(N,G)=>{N.fillStyle="#4f4639",N.fillRect(0,0,G,G);for(let V=0;V<140;V++){N.strokeStyle=V%2?"#302b24":"#6f6651",N.lineWidth=1+c()*2;let se=c()*G;N.beginPath(),N.moveTo(se,0),N.bezierCurveTo(se+8,30,se-9,80,se+3,G),N.stroke()}});k.wrapS=k.wrapT=$t,k.repeat.set(2,4);let z=new Je({map:k,roughness:1,color:11182474}),U=new Wt(new qt(.16,.31,1,7),z,I.length),X=new Wt(new qt(.06,.13,1,6),z,I.length*5),W=[],oe=[],ce=[],ge=[];for(let N=0;N<3;N++){let G=N*Math.PI/3,V=Math.cos(G),se=Math.sin(G),D=N*4;W.push(-V,-1,-se,V,-1,se,-V,1,-se,V,1,se);for(let H=0;H<4;H++)oe.push(-se,0,V);ce.push(0,0,1,0,0,1,1,1),ge.push(D,D+1,D+2,D+1,D+3,D+2)}let ve=new rt;ve.setAttribute("position",new Ue(W,3)),ve.setAttribute("normal",new Ue(oe,3)),ve.setAttribute("uv",new Ue(ce,2)),ve.setIndex(ge);let ze=Sc(512,(N,G)=>{N.clearRect(0,0,G,G);for(let V=0;V<1400;V++){let se=c()*Math.PI*2,D=Math.sqrt(c())*.46,H=(.5+Math.cos(se)*D)*G,ne=(.5+Math.sin(se)*D*.9)*G,O=7+c()*10,Y=O*.42,j=c()*Math.PI*2;N.save(),N.translate(H,ne),N.rotate(j),N.fillStyle=["#264329","#3f6332","#608344","#789a51","#8da75c"][Math.floor(c()*5)],N.beginPath(),N.moveTo(0,-O/2),N.bezierCurveTo(Y,-O*.2,Y,O*.28,0,O/2),N.bezierCurveTo(-Y,O*.28,-Y,-O*.2,0,-O/2),N.fill(),N.strokeStyle="#b8bd7460",N.lineWidth=.65,N.beginPath(),N.moveTo(0,-O*.4),N.lineTo(0,O*.4),N.stroke(),N.restore()}}),Ke=new qr({map:ze,color:16777215,emissive:1318922,emissiveIntensity:.12,alphaTest:.45,side:Rt}),He=new Wt(ve,Ke,I.length*8);I.forEach((N,G)=>{nt.position.set(N.x,N.height*.3,N.z),nt.scale.set(1,N.height*.6,1),nt.rotation.set(0,N.seed*6,.025),nt.updateMatrix(),U.setMatrixAt(G,nt.matrix);for(let V=0;V<8;V++){let se=V*2.399+N.seed*6,D=(V<5?1.75:.9)*N.height/10;if(nt.position.set(N.x+Math.sin(se)*D,N.height*(.56+V%3*.12),N.z+Math.cos(se)*D),nt.scale.set(2.35*N.height/11,1.65*N.height/11,2.1*N.height/11),nt.rotation.set(.1,se,.05),nt.updateMatrix(),He.setMatrixAt(G*8+V,nt.matrix),He.setColorAt(G*8+V,new Ce().setRGB(.78+N.seed*.2,.86+N.seed*.14,.72+N.seed*.25)),V<5){let H=new R(N.x,N.height*.34,N.z),ne=nt.position.clone();nt.position.copy(H).lerp(ne,.5);let O=ne.sub(H),Y=O.length();nt.quaternion.setFromUnitVectors(qf,O.normalize()),nt.scale.set(1,Y,1),nt.updateMatrix(),X.setMatrixAt(G*5+V,nt.matrix)}}});for(let N of[U,X,He])N.castShadow=!0,N.receiveShadow=!0,o.add(N);let ie=new Wt(new Js(.095,1),tn(15315883),900);for(let N=0;N<900;N++){let G=c()*Math.PI*2,V=15+c()*2;nt.position.set(Math.cos(G)*V,.15+c()*.25,Math.sin(G)*V*.68),nt.rotation.set(c(),c(),c()),nt.scale.setScalar(.7+c()*.7),nt.updateMatrix(),ie.setMatrixAt(N,nt.matrix),ie.setColorAt(N,new Ce([13939816,11951731,14736829,7114082][N%4]))}o.add(ie);let re=new ht({color:3497574,metalness:.62,roughness:.21,clearcoat:1}),_e=Qe(o,new Hr(12,80),re,[0,.015,0]);_e.rotation.x=-Math.PI/2,_e.scale.y=.62,_e.castShadow=!1;for(let N=0;N<36;N++){let G=N*Math.PI/18,V=Qe(o,new Js(.65+c()*.4,1),P,[Math.cos(G)*12.3,.18,Math.sin(G)*7.7]);V.scale.set(1.3,.55,.85),V.rotation.y=G}for(let N=0;N<24;N++){let G=N/24,V=A(G,-(e?16.4:12.4),0),se=l.getTangentAt(G),D=new We;D.position.copy(V),D.rotation.y=Math.atan2(se.x,se.z);for(let O=0;O<4;O++)Qe(D,new _t(.1,.075,2),T,[O*.11-.15,.48,0]);for(let O of[-.72,.72])Qe(D,new _t(.13,.47,.12),w,[.05,.235,O]),Qe(D,new _t(.12,.8,.12),w,[-.25,.4,O]);for(let O=0;O<3;O++)Qe(D,new _t(.08,.11,2),T,[-.27,.68+O*.13,0]);o.add(D);let H=new We;H.position.copy(A(G,e?16.8:12.8,0)),Qe(H,new qt(.035,.055,4.8,8),w,[0,2.4,0]),Qe(H,new _t(.45,.16,.42),w,[0,4.83,0]);let ne=Qe(H,new Ht(.34,.3),new St({color:16766352}),[0,4.735,0]);ne.rotation.x=Math.PI/2,o.add(H)}let Pe=[],Ae=[11633763,8411456,14727579];function je(N){let G=new We,V=tn(Ae[N%3],.88),se=tn([4280940,9135964,12298378,6188633][N%4]),D=tn([3356993,4868937,3422802][N%3]),H=tn(2697769,.85);Qe(G,new Ut(.105,12,10),V,[0,1.58,0]).scale.set(.85,1.18,.92),Qe(G,new Ut(.108,12,8,0,Math.PI*2,0,Math.PI*.57),tn(3483935),[0,1.63,0]).scale.set(.87,.86,.97),Qe(G,new En(.15,.31,4,10),se,[0,1.21,0]).scale.set(1,.95,.67),Qe(G,new Ut(.125,10,8),D,[0,.89,0]).scale.set(1.28,.87,.8);let j=[];for(let Q of[-1,1]){let de=new We;de.position.set(Q*.088,.88,0),Qe(de,new En(.056,.63,4,8),D,[0,-.35,0]),Qe(de,new _t(.1,.085,.22),H,[0,-.79,.04]);let Le=new We;Le.position.set(Q*.19,1.39,0),Qe(Le,new En(.047,.22,4,8),se,[0,-.12,0]),Qe(Le,new En(.033,.21,3,8),V,[0,-.35,0]),Qe(Le,new Ut(.038,8,6),V,[0,-.49,0]),G.add(de,Le),j.push({leg:de,arm:Le,side:Q})}o.add(G),Pe.push({group:G,limbs:j,t:N/11,offset:N%2?e?13.8:9.2:-(e?13.8:9.2),speed:(7e-4+c()*6e-4)/t,phase:c()*6})}for(let N=0;N<(n?4:11);N++)je(N);let yt=[];for(let N=0;N<6;N++){let G=new We,V=tn([10189137,6771269,13678219][N%3]);Qe(G,new Ut(.25,14,10),V,[0,.48,0]).scale.set(.7,.85,1.4),Qe(G,new Ut(.15,12,8),V,[0,.64,.3]).scale.set(.88,1.2,1),Qe(G,new Ut(.15,12,10),V,[0,.78,.38]),Qe(G,new En(.065,.12,3,8),V,[0,.72,.54]).rotation.x=Math.PI/2;let H=tn(1512725,.65);Qe(G,new Ut(.036,8,6),H,[0,.73,.64]);for(let Y of[-1,1]){let j=Qe(G,new Gr(.07,.19,5),V,[Y*.102,.92,.37]);j.rotation.z=-Y*.27,Qe(G,new Ut(.015,7,6),H,[Y*.125,.8,.45])}let ne=[];for(let Y of[-.12,.12])for(let j of[-.23,.23]){let Q=Qe(G,new En(.038,.3,3,7),V,[Y,.22,j]);ne.push(Q)}let O=G_(G,[0,.55,-.3],[0,.78,-.68],.045,V);o.add(G),yt.push({group:G,legs:ne,tail:O,t:.1+N*.14,phase:c()*6})}if(e){let N=new Ut(1,34,20),G=N.attributes.position;for(let se=0;se<G.count;se++){let D=G.getX(se),H=G.getY(se),ne=G.getZ(se),O=.07*Math.sin(D*13+ne*12)+.04*Math.cos(ne*28+D*17);G.setY(se,H*(1+O))}N.computeVertexNormals();let V=new Wt(N,tn(n?11106387:i?6716272:4875070,.98),72);for(let se=0;se<72;se++){let D=A(se/72,(se%2?1:-1)*(230+c()*250),0);nt.position.copy(D),nt.rotation.set(0,c()*6,0),nt.scale.set(60+c()*100,18+c()*50,50+c()*100),nt.updateMatrix(),V.setMatrixAt(se,nt.matrix)}V.receiveShadow=!0,o.add(V)}if(i){let N=new Uint8Array(65536);for(let D=0;D<128;D++)for(let H=0;H<128;H++){let ne=(D*128+H)*4;N.set([128+Math.sin(H*.35+D*.18)*22,128+Math.cos(D*.4+H*.17)*18,249,255],ne)}let G=new Ci(N,128,128);G.wrapS=G.wrapT=$t,G.repeat.set(110,160),G.needsUpdate=!0;let V=Qe(o,new Ht(5e3,7700),new ht({color:2191235,normalMap:G,normalScale:new be(.45,.45),roughness:.26,metalness:.3,clearcoat:.8}),[3600,-.012,0]);V.rotation.x=-Math.PI/2,V.castShadow=!1;let se=Qe(o,new Ht(320,7700),new Je({map:da("sand.jpg",[8,190]),color:13022862,roughness:1}),[1220,-.015,0]);se.rotation.x=-Math.PI/2}if(e){let N=Sc(512,(O,Y)=>{O.fillStyle=i?"#174b62":"#21433c",O.fillRect(0,0,Y,Y),O.strokeStyle="#dce8de",O.lineWidth=9,O.strokeRect(18,135,476,242),O.fillStyle="#e8f0eb",O.textAlign="center",O.font="600 38px system-ui",O.fillText(h.name.toUpperCase(),256,217,430),O.font="500 26px system-ui",O.fillText((l.getLength()/1e3).toFixed(1)+" KM LOOP",256,278),O.font="42px system-ui",O.fillText("\u2191",256,331)}),G=new Je({map:N,roughness:.92}),V=h.start+.009,se=A(V,-15.5,0),D=l.getTangentAt(V),H=new We;H.position.copy(se),H.rotation.y=Math.atan2(-D.x,-D.z),Qe(H,new _t(3.8,1.9,.13),w,[0,2.55,0]);let ne=Qe(H,new Ht(3.76,1.88),G,[0,2.55,.071]);N.repeat.set(1,.5),N.offset.y=.25,ne.castShadow=!1;for(let O of[-1.24,1.24])Qe(H,new _t(.09,2,.09),w,[O,1,0]);o.add(H)}let F=new ua;F.scale.setScalar(e?2e4:1200),F.frustumCulled=!1,o.add(F);let it=F.material.uniforms;it.turbidity.value=3.4,it.rayleigh.value=2.1,it.mieCoefficient.value=.006,it.mieDirectionalG.value=.83;let xe=new fi(16773335,3.1);xe.position.set(65,i?55:95,-70),xe.castShadow=!0,xe.shadow.mapSize.set(1024,1024),xe.shadow.camera.left=-42,xe.shadow.camera.right=42,xe.shadow.camera.top=42,xe.shadow.camera.bottom=-42,xe.shadow.camera.near=.1,xe.shadow.camera.far=220,xe.shadow.bias=-25e-5,xe.shadow.normalBias=.055,o.add(xe,xe.target);let Ie=new is(12179442,6583122,1.7);o.add(Ie);let Se=Qe(o,new Ut(8,28,18),new St({color:14213621}),[-190,240,350]);Se.castShadow=!1;let lt=new rt,ye=[];for(let N=0;N<900;N++){let G=c()*Math.PI*2,V=c()*Math.PI*.5;ye.push(Math.cos(G)*Math.cos(V)*700,Math.sin(V)*700+50,Math.sin(G)*Math.cos(V)*700)}lt.setAttribute("position",new Ue(ye,3));let Oe=new Qi(lt,new Li({color:14477564,size:1.5,sizeAttenuation:!0}));o.add(Oe);let Ct=Sc(256,(N,G)=>{N.clearRect(0,0,G,G);for(let V=0;V<34;V++){let se=50+c()*155,D=90+c()*65,H=20+c()*40,ne=N.createRadialGradient(se,D,0,se,D,H);ne.addColorStop(0,"rgba(255,255,255,.35)"),ne.addColorStop(.6,"rgba(245,249,255,.15)"),ne.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=ne,N.fillRect(se-H,D-H,H*2,H*2)}}),ut=[],L=new St({map:Ct,transparent:!0,opacity:.7,depthWrite:!1,side:Rt,fog:!1});for(let N=0;N<22;N++){let G=Qe(o,new Ht(100+c()*80,55+c()*45),L,[(c()-.5)*650,110+c()*65,(c()-.5)*650]);G.castShadow=!1,G.rotation.y=c()*6,ut.push(G)}let S=new rt,J=new Float32Array(2300*6);for(let N=0;N<2300;N++){let G=N*6,V=(c()-.5)*65,se=c()*40,D=(c()-.5)*65;J.set([V,se,D,V-.11,se-.7,D-.05],G)}S.setAttribute("position",new at(J,3));let te=new $i(S,new Pi({color:12110552,transparent:!0,opacity:.38,depthWrite:!1}));o.add(te);let ae=Wf(o,[...Pe,...yt].map(N=>N.group)),ee=!1,Te=!1;function ue(N,G){return ee=N,Te=G,F.visible=!N,Se.visible=Oe.visible=N,te.visible=G,it.sunPosition.value.set(65,i?55:95,-70).normalize(),it.turbidity.value=G?18:3.4,xe.color.setHex(N?9679852:16772820),xe.intensity=N?.32:G?1.1:2.5,Ie.intensity=N?.32:G?.85:1,Ie.color.setHex(N?7639740:G?10201268:13096938),L.color.setHex(G?7240585:16777215),L.opacity=N?.14:G?.94:.7,f.roughness=G?.25:.9,f.metalness=G?.2:.02,new Fr(N?857894:G?8950940:11848152,G?.006:N?.0033:.0018)}function Me(N,G,V,se){let D=Math.min(G,.05);xe.target.position.set(V.x,0,V.z),xe.position.set(V.x+65,i?55:95,V.z-70),Se.position.set(V.x-190,240,V.z+350),Oe.position.set(V.x,0,V.z);for(let H of ut)H.position.x+=D*.6,H.position.x>350&&(H.position.x=-350),H.quaternion.copy(se.quaternion);for(let H of Pe){let ne=H.t+N*H.speed,O=A(ne,H.offset,0),Y=l.getTangentAt((ne%1+1)%1);H.group.position.copy(O),H.group.rotation.y=Math.atan2(Y.x,Y.z),H.group.position.y=.015+Math.abs(Math.sin(N*3.5+H.phase))*.012;for(let j of H.limbs)j.leg.rotation.x=Math.sin(N*5+H.phase)*.42*j.side,j.arm.rotation.x=-Math.sin(N*5+H.phase)*.33*j.side}if(yt.forEach((H,ne)=>{let O=H.t+N*45e-5;H.group.position.copy(A(O,-(e?23:17)-ne%2*3,0));let Y=l.getTangentAt((O%1+1)%1);H.group.rotation.y=Math.atan2(Y.x,Y.z),H.legs.forEach((j,Q)=>j.rotation.x=Math.sin(N*6+H.phase+Q*Math.PI)*.23),H.tail.rotation.z=Math.sin(N*4+H.phase)*.19}),ae.update(),Te){te.position.set(V.x,0,V.z);for(let H=0;H<J.length;H+=6)J[H+1]-=D*30,J[H+4]-=D*30,J[H+1]<.1&&(J[H+1]+=40,J[H+4]+=40);S.attributes.position.needsUpdate=!0}}function Ee(N,G){let V=d(N,G);if(e&&(V<1.25||V>a-.12))return!0;for(let se of I)if((se.x-N)**2+(se.z-G)**2<2.2)return!0;for(let se of[...Pe,...yt])if((se.group.position.x-N)**2+(se.group.position.z-G)**2<2.3)return!0;return Math.abs(N)>180*t||Math.abs(G)>145*t}function le(N){xe.shadow.mapSize.x!==N.shadow&&(xe.shadow.map?.dispose(),xe.shadow.map=null,xe.shadow.mapSize.set(N.shadow,N.shadow),xe.shadow.needsUpdate=!0),He.castShadow=N.foliageShadows,S.setDrawRange(0,N.rain),ut.forEach((G,V)=>{G.visible=N.shadow>512||V<10})}function fe(){let N=A(h.start,e?-6.2:-3.1,0),G=l.getTangentAt(h.start);return{x:N.x,z:N.z,heading:Math.atan2(G.x,G.z)}}return ue(!1,!1),{root:o,route:l,roadDistance:d,update:Me,weather:ue,spawn:fe,collision:Ee,quality:le,roadHalfWidth:a,theme:s,length:l.getLength(),stats:ae.stats}}function jf(){let s,e,t,n,i,r=!1,a=!1,o=0;function c(){return s||(s=new AudioContext,e=s.createGain(),e.gain.value=r?0:.7,e.connect(s.destination)),s.resume()}async function l(){a=!0;let x=++o;if(await c(),!t)try{let m=await fetch(new URL("./assets/drive/engine.wav",import.meta.url));if(!m.ok)throw new Error("Engine recording unavailable");let p=await s.decodeAudioData(await m.arrayBuffer());if(!a||x!==o)return;t=s.createBufferSource(),t.buffer=p,t.loop=!0,n=s.createGain(),n.gain.value=.14,t.connect(n).connect(e),t.start()}catch(m){console.warn("Engine audio could not start",m)}}function h(){if(!i)return;let x=i;i=void 0,x.gain.gain.setTargetAtTime(0,s.currentTime,.025);for(let m of x.oscillators)m.stop(s.currentTime+.15)}function u(x){if(!x||!a||!s){h();return}if(i)return;let m=s.createGain();m.gain.value=.075,m.connect(e);let p=[392,494].map(b=>{let y=s.createOscillator();return y.type="sawtooth",y.frequency.value=b,y.connect(m),y.start(),y});i={gain:m,oscillators:p}}function d(x,m){!t||!a||(t.playbackRate.setTargetAtTime(.65+x*1.25,s.currentTime,.13),n.gain.setTargetAtTime(.11+x*.23+m*.06,s.currentTime,.12))}function f(){a=!1,o++,h(),t?.stop(),t=void 0,s?.suspend()}function g(){return r=!r,e&&e.gain.setTargetAtTime(r?0:.7,s.currentTime,.04),r}return{start:l,stop:f,update:d,setHorn:u,toggleMute:g,unlock:c}}function Yf(s,e,t,n,i=1){let r=Math.min(Math.max(t,0),.05),a=e.steer??e.left-e.right,o=.52/(1+Math.pow(Math.abs(s.speed)/15,1.5)),c=Math.max(-1,Math.min(1,a))*o;s.steering+=(c-s.steering)*(1-Math.exp(-r*(a===0?9:6)));let l=(n?1:.55)*i,h=e.brake?0:e.forward-e.reverse,u=Math.sign(s.speed),d=s.spec??bs.ferrari,f=d.topKmh/3.6,g=Math.min(1,Math.abs(s.speed)/f),x=u*(.38+s.speed**2*12e-5+(n?0:3.7)),m=h!==0&&u!==0&&Math.sign(h)!==u,p=d.launchAcceleration/(1+3.2*g**2),b=h*(m?13:p)*l-x,y=s.speed+b*r;e.brake?y=Math.sign(y)*Math.max(0,Math.abs(y)-13.5*l*r):h===0&&u!==0&&Math.sign(y)!==u&&(y=0),s.speed=Math.max(-7,Math.min(n?f:12,y)),Math.abs(s.speed)<.035&&h===0&&(s.speed=0);let _=s.speed/2.8*Math.tan(s.steering),w=8.5*l/Math.max(3,Math.abs(s.speed));return s.yawRate=Math.max(-w,Math.min(w,_)),s.heading+=s.yawRate*r,s.x+=Math.sin(s.heading)*s.speed*r,s.z+=Math.cos(s.heading)*s.speed*r,s.wheelRotation+=s.speed*r/.37,s}var wc=new Map,W_=new R(0,0,1);async function X_(s){let e=s>0?"left":"right";if(!wc.has(e)){let t=new URL("./assets/driver/"+e+".glb",import.meta.url);wc.set(e,fetch(t).then(n=>{if(!n.ok)throw new Error("Driver hand unavailable");return n.arrayBuffer()}).catch(n=>{throw wc.delete(e),n}))}return(await new zn().parseAsync(await wc.get(e),"")).scene}function Kf(s,e,t,n){let i=e.map(a=>s.getObjectByName(a)),r=new Pt;for(let a=0;a<t.length;a++){let o=i[a].position;r.setFromAxisAngle(W_,t[a]*n);for(let c=a;c<i.length;c++)i[c].position.sub(o).applyQuaternion(r).add(o),i[c].quaternion.premultiply(r)}}async function Jf(s,e){let t=await X_(s);for(let[r,a]of["index","middle","ring","pinky"].entries()){let o=a+"-finger-";Kf(t,["phalanx-proximal","phalanx-intermediate","phalanx-distal","tip"].map(c=>o+c),[.77+r*.09,.86,.57],s)}Kf(t,["thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"],[-.39,-.25],s),t.traverse(r=>{r.isSkinnedMesh&&(r.material=e,r.frustumCulled=!1)});let n=t.getObjectByName("wrist").position;t.scale.setScalar(.82),t.position.copy(n).multiplyScalar(-.82);let i=new We;return i.add(t),i}var q_=new R(0,1,0);function Zf(s,e){if(!e)return;let t=new We,n=new Je({color:2108215,roughness:.85}),i=new Je({color:5727347,roughness:.9}),r=new Je({color:12157537,roughness:.8}),a=new Je({color:2169626,roughness:.94}),o=new Je({color:5719356,roughness:.79}),c=e.axis,l=new R(0,c.z,-c.y).normalize(),h=new R(1,0,0),u=new Pt().setFromRotationMatrix(new Ne().makeBasis(h.clone().negate(),c.clone().negate(),l.clone().negate())),d=new Pt;function f(z,U,X,W){let oe=new ke(new Ut(1,16,12),z);return oe.scale.set(U,X,W),t.add(oe),oe}function g(z,U){let X=new ke(new En(U,1,4,10),z);return t.add(X),X}let x=new R;function m(z,U,X){x.subVectors(X,U);let W=x.length();z.position.copy(U).lerp(X,.5),z.quaternion.setFromUnitVectors(q_,x.normalize()),z.scale.y=W/(z.geometry.parameters.height+2*z.geometry.parameters.radius)}let p=s.driverX,b=s.eyeHeight,y=b-.23,_=s.eyeDepth-.115,w=f(n,.168,.187,.099);w.position.set(p,y-.075,_-.028);let T=f(r,.046,.073,.042);T.position.set(p,b-.123,s.eyeDepth-.075);let P=f(r,.078,.105,.083);P.position.set(p,b-.027,s.eyeDepth-.065);let A=f(a,.08,.068,.084);A.position.copy(P.position).add(new R(0,.046,-.012));let v=f(r,.025,.031,.026);v.position.copy(P.position).add(new R(0,-.002,.078));let M=[-1,1].map(z=>{let U=f(r,.019,.033,.022);return U.position.copy(P.position).add(new R(z*.073,-.015,0)),U}),C=[-1,1].map(z=>({side:z,shoulder:new R(p+z*.145,y,_),elbow:new R,grip:new R,wrist:new R,upper:g(n,.05),forearm:g(n,.043),cuff:f(i,.034,.023,.031),hand:null}));for(let z of C)Jf(z.side,o).then(U=>{z.hand=U,t.add(U),k(I,B)}).catch(U=>console.warn("Driver hands unavailable",U));let I=0,B=!1;function k(z,U){I=z,B=U,d.setFromAxisAngle(c,z);for(let X of[P,A,v,T,w,...M])X.visible=!U;for(let X of C)X.grip.copy(h).multiplyScalar(X.side*(e.radius+.022)).addScaledVector(l,e.radius*.22).applyAxisAngle(c,z).add(e.pivot),X.wrist.copy(X.grip).addScaledVector(c,-.067),X.wrist.y-=.012,X.elbow.copy(X.shoulder).lerp(X.wrist,.48),X.elbow.x+=X.side*.055,X.elbow.y-=.125,m(X.upper,X.shoulder,X.elbow),m(X.forearm,X.elbow,X.wrist),X.cuff.position.copy(X.wrist).lerp(X.elbow,.06),X.cuff.quaternion.copy(X.forearm.quaternion),X.hand&&(X.hand.position.copy(X.wrist),X.hand.quaternion.multiplyQuaternions(d,u))}return k(0,!1),{rig:t,update:k}}var $f={ferrari:{door:.72,trim:.64,foot:.58,roof:1.15,header:.3,color:16768947,ambient:!1},bmw:{door:.76,trim:.76,foot:.53,roof:1.27,header:.12,color:9158143,ambient:!0},lamborghini:{door:.7,trim:.55,foot:.54,roof:1.03,header:.26,color:16769726,ambient:!1},bugatti:{door:.75,trim:.69,foot:.73,roof:1.19,header:.27,color:16772571,ambient:!0}};function Qf(s){let e=$f[s]??$f.ferrari,t=new We;t.name="Cabin lighting";let n=[],i=[],r=[],a=new St({color:e.color,toneMapped:!1}),o=new Je({color:13684165,roughness:.36,emissive:16772046,emissiveIntensity:0});for(let c of[-1,1]){let l=new Jn(16770501,.34,.85,.64,.85,2);l.position.set(c*.32,e.trim-.09,e.foot),l.target.position.set(c*.32,.12,e.foot-.12),t.add(l,l.target),n.push(l);let h=new Jn(16772570,.52,1.35,.56,.85,2);h.position.set(c*.24,e.roof,e.header),h.target.position.set(c*.3,.47,-.08),t.add(h,h.target),i.push(h);let u=new ke(new Ut(.012,12,6),o);if(u.scale.set(1,.3,1.5),u.position.copy(h.position),t.add(u),e.ambient){let d=new Xn([new R(c*e.door,e.trim,-.35),new R(c*(e.door-.015),e.trim+.012,.05),new R(c*(e.door-.06),e.trim+.025,.4)]),f=new ke(new es(d,20,.0015,4,!1),a);t.add(f),r.push(f)}}return{root:t,update({night:c=!1,cabin:l=!1,reading:h=!1}={}){for(let u of n)u.visible=l&&(c||h);for(let u of i)u.visible=l&&h;for(let u of r)u.visible=c;a.color.setHex(e.color).multiplyScalar(.42),o.emissiveIntensity=h?.65:0}}}var j_={high:{ratio:1.5,shadow:1536,foliageShadows:!0,rain:4600},balanced:{ratio:1.15,shadow:1024,foliageShadows:!1,rain:3200},performance:{ratio:.85,shadow:512,foliageShadows:!1,rain:2e3}};function ep(s,e,t){let n=matchMedia("(pointer: coarse)").matches,i=["high","balanced","performance"],r="auto",a=n?1:0,o=1,c=1,l=0,h=0,u=90,d=0;function f(){let p=j_[i[a]];s.setPixelRatio(Math.min(devicePixelRatio,p.ratio)),s.setSize(o,c,!1),e.quality(p),t.textContent=r==="auto"?"Auto":i[a][0].toUpperCase()+i[a].slice(1),t.setAttribute("aria-label","Graphics quality: "+t.textContent+". Click to change.")}function g(p,b){o=p,c=b,f()}function x(){r={auto:"high",high:"balanced",balanced:"performance",performance:"auto"}[r],a=r==="auto"?n?1:0:i.indexOf(r),u=90,l=0,h=0,f()}function m(p){let b=d?p-d:0;if(d=p,r!=="auto"||u-- >0||b<=0||b>100||(h+=b,l++,l<90))return;h/l>(n?29:23)&&a<2&&(a++,f(),u=120),l=0,h=0}return t.addEventListener("click",x),{resize:g,sample:m,setPark(p){e=p,f()},reset(){d=0,u=90},get label(){return i[a]}}}function Yh(s,e){let t=s.getContext("2d"),n=e.getSpacedPoints(160);s.width=320,s.height=230;let i=-1,r=Math.min(...n.map(f=>f.x)),a=Math.max(...n.map(f=>f.x)),o=Math.min(...n.map(f=>f.z)),c=Math.max(...n.map(f=>f.z)),l=Math.min(280/(a-r),190/(c-o)),h=f=>160+(f-(r+a)/2)*l,u=f=>115+(f-(o+c)/2)*l;function d(f,g,x=!1){!x&&f-i<100||(i=f,t.clearRect(0,0,320,230),t.lineJoin="round",t.lineCap="round",t.beginPath(),n.forEach((m,p)=>p?t.lineTo(h(m.x),u(m.z)):t.moveTo(h(m.x),u(m.z))),t.closePath(),t.strokeStyle="#b7c7b440",t.lineWidth=18,t.stroke(),t.strokeStyle="#e5e6d6b0",t.lineWidth=2,t.stroke(),t.save(),t.translate(h(g.x),u(g.z)),t.rotate(Math.PI-g.heading),t.fillStyle="#f2ce85",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(0,4),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore())}return{update:d}}var Y_={light:"Lightbulb",back:"ArrowLeft",sun:"Sun",moon:"Moon",rain:"CloudRain",sound:"Volume2",mute:"VolumeX",cabin:"Armchair",chase:"CarFront",horn:"Megaphone",reset:"RotateCcw",play:"Play",pause:"Pause",route:"Route",settings:"SlidersHorizontal",park:"Flower2",forest:"Trees",coast:"Waves",desert:"Mountain",brake:"CircleStop",forward:"ChevronsUp",reverse:"ArrowDown"},tp=new Map;function np(s,e){let t=window.lucide,n=t?.icons[Y_[e]]??t?.icons.CarFront;if(!n)return;let i=t.createElement(n);i.setAttribute("aria-hidden","true"),i.setAttribute("stroke-width","1.7"),s.replaceChildren(i)}function _s(s,e,t){s&&(tp.set(s,e),np(s,e),s.dataset.icon=e,s.setAttribute("aria-label",t),s.setAttribute("title",t))}window.addEventListener("iconsready",()=>{for(let[s,e]of tp)np(s,e)});function ip(s){for(let[e,t,n]of[["[data-exit-drive]","back","Return to car"],["[data-cabin-light]","light","Toggle cabin reading lights"],["[data-day]","sun","Switch to night"],["[data-rain]","rain","Toggle rain"],["[data-sound]","sound","Mute sound"],["[data-camera]","cabin","Driver seat view"],['[data-control="horn"]',"horn","Hold for horn"],["[data-reset]","reset","Reset car on the road"],["[data-resume]","play","Resume drive"],["[data-pause]","pause","Pause drive"],["[data-theme]","route","Choose route"],["[data-settings]","settings","Drive settings"],['[data-control="brake"]',"brake","Brake"],['[data-control="forward"]',"forward","Accelerate"],['[data-control="reverse"]',"reverse","Reverse"]])_s(s.querySelector(e),t,n)}function sp(s,e,t){let n=document.querySelector(".drive-hud");ip(n);let i=n.querySelector("[data-speed]"),r=n.querySelector("[data-gear]"),a=n.querySelector("[data-revs]"),o=n.querySelector("[data-drive-model]"),c=n.querySelector("[data-resume]"),l=jf(),h=new vt(49,1,.04,900),u=new Set,d=new Set,f=new R,g=new R,x=0,m=bs.ferrari,p,b,y,_,w=!1,T=-1/0,P=!1,A=!1,v=!1,M=!1,C=!1,I,B=0,k,z,U,X,W,oe=Object.keys(dr),ce=new Map,ge=0,ve=0,ze=0,Ke=0,He={x:0,z:0},ie=[],re=new Map,_e=new Set(["Taillight_Glass","Meshesredlight1Mtl","Red_Lights","Material.002"]),Pe=!1,Ae=0,je=0,yt=document.createElement("canvas");yt.width=yt.height=128;let F=yt.getContext("2d"),it=F.createRadialGradient(64,64,14,64,64,62);it.addColorStop(0,"#0b1118aa"),it.addColorStop(1,"#0b111800"),F.fillStyle=it,F.fillRect(0,0,128,128);let xe=new ke(new Ht(3.4,6.1),new St({map:new Xt(yt),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));xe.rotation.x=-Math.PI/2,xe.position.y=.003;function Ie(){Ke=0;let O=n.querySelector("[data-steering-pad] span");O&&(O.style.transform=""),u.clear(),d.clear(),l.setHorn(!1)}function Se(){let O=(Y,j)=>u.has(Y)||d.has(j);return{forward:Number(O("KeyW","forward")||u.has("ArrowUp")),reverse:Number(O("KeyS","reverse")||u.has("ArrowDown")),left:Number(O("KeyA","left")||u.has("ArrowLeft")),right:Number(O("KeyD","right")||u.has("ArrowRight")),brake:O("Space","brake"),steer:Ke||Number(O("KeyA","left")||u.has("ArrowLeft"))-Number(O("KeyD","right")||u.has("ArrowRight"))}}function lt(){_?.update({night:M,cabin:v,reading:w}),b?.updateInstruments?.setLighting?.(M),b?.setInstrumentLighting?.(M),n.querySelector("[data-cabin-light]").setAttribute("aria-pressed",String(w))}function ye(){if(!(!p||!P)){e.fog=p.weather(M,C),e.background=M?new Ce(462879):null,n.querySelector("[data-day]").setAttribute("aria-pressed",String(M)),_s(n.querySelector("[data-day]"),M?"moon":"sun",M?"Switch to daylight":"Switch to night"),n.querySelector("[data-rain]").setAttribute("aria-pressed",String(C));for(let O of ie)O.visible=M||C;s.toneMappingExposure=M?1.05:C?.9:.84,e.environmentIntensity=M?.12:C?.24:.32,lt()}}function Oe(){I={...p.spawn(),speed:0,steering:0,wheelRotation:0,spec:m},He.x=I.x,He.z=I.z,b.rig.position.set(I.x,.025,I.z),b.rig.rotation.set(0,I.heading,0),b.rig.updateMatrixWorld(!0),x=I.heading,Ae=0,je=0,V(!1),H(0),p.update(B,0,I,h),W.update(performance.now(),I,!0),D(0,{speed:0,gear:"N",revs:.12,brake:!1},!0),i.textContent="000",r.textContent="N",a.style.transform="scaleX(.12)",Ie()}function Ct(O,{id:Y,name:j}){l.start().catch(Q=>console.warn("Audio unavailable",Q)),p||(p=jh(oe[ge]),ce.set(oe[ge],p),p.root.visible=!1,e.add(p.root),X=ep(s,p,n.querySelector("[data-quality]")),W=Yh(n.querySelector("[data-drive-map]"),p.route)),z={background:e.background,fog:e.fog,environment:e.environment,intensity:e.environmentIntensity,exposure:s.toneMappingExposure,shadow:s.shadowMap.enabled,ratio:s.getPixelRatio(),size:s.getSize(new be),lights:e.children.filter(Q=>Q.isLight).map(Q=>[Q,Q.visible])};for(let[Q]of z.lights)Q.visible=!1;if(e.environmentIntensity=.7,!U){let Q=new Ji,de=p.root.children.find(Nt=>Nt.isSky)?.clone();de&&Q.add(de);let Le=new ke(new Ht(4e3,4e3),new St({color:4802114}));Le.rotation.x=-Math.PI/2,Le.position.y=-1,Q.add(Le);let Ve=new Ui(s);U=Ve.fromScene(Q,.04,.1,2e3),Ve.dispose(),Le.geometry.dispose(),Le.material.dispose()}e.environment=U.texture,s.shadowMap.enabled=!0,s.shadowMap.type=xo,b=O,m=bs[Y],o.textContent=j,b.rig.visible=!0,b.setMirrors?.(!1);for(let Q of b.parts)Q.group.position.copy(Q.center),Q.group.rotation.set(0,0,0),Q.group.scale.setScalar(1);if(b.rig.traverse(Q=>{if(!Q.isMesh)return;Q.castShadow=!Q.material.transparent&&!Q.isReflector,Q.receiveShadow=!0;let de=Q.material;de.emissive&&_e.has(de.name)&&!re.has(de)&&re.set(de,{color:de.emissive.clone(),intensity:de.emissiveIntensity})}),p.root.visible=!0,P=!0,A=!1,B=0,k=void 0,v=!1,_s(n.querySelector("[data-camera]"),"cabin","Driver seat view"),n.hidden=!1,c.hidden=!0,document.body.setAttribute("data-driving",""),y=b.driver??=Zf(b.seats,b.steering),y&&b.rig.add(y.rig),_=b.cabinLighting??=Qf(Y),b.rig.add(_.root),Oe(),ie.length===0)for(let Q of[-.65,.65]){let de=new Jn(14019071,46,50,.36,.5,1.1);de.position.set(Q,.64,1.8),de.target.position.set(Q,.25,25),ie.push(de)}for(let Q of ie)b.rig.add(Q,Q.target);b.rig.add(xe),X.reset(),ve=0,ze=0,ye()}function ut(){if(P){P=!1,l.stop(),Ie(),n.hidden=!0,Me(),document.body.removeAttribute("data-driving"),b.setMirrors?.(!1),y?.rig.removeFromParent(),_?.root.removeFromParent(),b.updateInstruments?.setLighting?.(!1),b.setInstrumentLighting?.(!1),D(0,{speed:0,gear:"N",revs:.12,brake:!1},!0),b.rig.visible=!1,b.rig.position.set(0,0,0),b.rig.rotation.set(0,0,0);for(let O of b.parts)O.group.quaternion.identity();for(let O of ie)O.removeFromParent(),O.target.removeFromParent();xe.removeFromParent(),V(!1),re.clear(),p.root.visible=!1,e.background=z.background,e.fog=z.fog,e.environment=z.environment,e.environmentIntensity=z.intensity,s.toneMappingExposure=z.exposure,s.shadowMap.enabled=z.shadow,s.setPixelRatio(z.ratio),s.setSize(ve||z.size.x,ze||z.size.y,!1);for(let[O,Y]of z.lights)O.visible=Y;t()}}function L(){v=!v,_s(n.querySelector("[data-camera]"),v?"chase":"cabin",v?"Chase camera":"Driver seat view"),b.setMirrors?.(v,{driving:!0}),y?.update(se(),v),lt(),T=-1/0,x=I.heading,H(0)}function S(){!P||A||(A=!0,Ie(),l.stop(),Me(),c.hidden=!1)}function J(){P&&(A=!1,k=void 0,c.hidden=!0,Ie(),document.querySelector("#car").focus({preventScroll:!0}),l.start().catch(O=>console.warn("Audio unavailable",O)))}let te=n.querySelector("[data-theme]"),ae=n.querySelector("[data-settings]"),ee=n.querySelector("#drive-routes"),Te=n.querySelector("#drive-settings"),ue=n.querySelector("[data-route-options]");function Me(){for(let[O,Y]of[[te,ee],[ae,Te]])Y.hidden=!0,O.setAttribute("aria-expanded","false")}function Ee(O,Y){let j=Y.hidden;Me(),j&&(Y.hidden=!1,O.setAttribute("aria-expanded","true"),Ie())}te.addEventListener("click",()=>Ee(te,ee)),ae.addEventListener("click",()=>Ee(ae,Te));for(let O of oe){let Y=dr[O],j=document.createElement("button");j.type="button",j.dataset.routeOption=O;let Q=document.createElement("span"),de=document.createElement("span");de.textContent=Y.name;let Le=document.createElement("small");Le.textContent=(Mc(O).curve.getLength()/1e3).toFixed(1)+" km",_s(Q,Y.icon,Y.name),Q.setAttribute("aria-hidden","true"),j.append(Q,de,Le),ue.append(j),j.setAttribute("aria-pressed",String(O===oe[ge])),j.addEventListener("click",()=>{le(O),Me(),te.focus();let Ve=new URL(location.href);Ve.searchParams.set("theme",O),history.replaceState(null,"",Ve)})}function le(O){let Y=oe.indexOf(O);if(!(Y<0||!P)){if(!ce.has(O)){let j=jh(O);j.root.visible=!1,e.add(j.root),ce.set(O,j)}ge=Y,p.root.visible=!1,p=ce.get(O),p.root.visible=!0,X.setPark(p),W=Yh(n.querySelector("[data-drive-map]"),p.route),te.title=dr[O].name+" \xB7 choose route";for(let j of ue.children)j.setAttribute("aria-pressed",String(j.dataset.routeOption===O));Oe(),B=0,k=void 0,ye()}}n.querySelector("[data-exit-drive]").addEventListener("click",ut),n.querySelector("[data-camera]").addEventListener("click",L),n.querySelector("[data-reset]").addEventListener("click",()=>{Oe(),l.start().catch(O=>console.warn("Audio unavailable",O))}),n.querySelector("[data-cabin-light]").addEventListener("click",()=>{w=!w,lt()}),n.querySelector("[data-day]").addEventListener("click",()=>{M=!M,ye()}),n.querySelector("[data-rain]").addEventListener("click",()=>{C=!C,ye()}),n.querySelector("[data-sound]").addEventListener("click",O=>{let Y=l.toggleMute();_s(O.currentTarget,Y?"mute":"sound",Y?"Unmute sound":"Mute sound"),O.currentTarget.setAttribute("aria-pressed",String(Y))}),c.addEventListener("click",J),n.querySelector("[data-pause]").addEventListener("click",S);let fe=n.querySelector("[data-steering-pad]"),N=fe.querySelector("span");function G(O){let Y=fe.getBoundingClientRect(),j=Math.max(-1,Math.min(1,(O.clientX-Y.left-Y.width/2)/(Y.width*.36)));Ke=-j,N.style.transform="translateX("+j*30+"px)"}fe.addEventListener("pointerdown",O=>{O.preventDefault(),fe.setPointerCapture(O.pointerId),G(O)}),fe.addEventListener("pointermove",O=>{fe.hasPointerCapture(O.pointerId)&&G(O)});for(let O of["pointerup","pointercancel","lostpointercapture"])fe.addEventListener(O,()=>{Ke=0,N.style.transform=""});for(let O of n.querySelectorAll("[data-control]")){let Y=O.dataset.control,j=()=>{d.delete(Y),Y==="horn"&&l.setHorn(!1)};O.addEventListener("pointerdown",Q=>{Q.preventDefault(),O.setPointerCapture(Q.pointerId),d.add(Y),Y==="horn"&&l.setHorn(!0)});for(let Q of["pointerup","pointercancel","lostpointercapture"])O.addEventListener(Q,j)}window.addEventListener("keydown",O=>{if(!P)return;if(!ee.hidden||!Te.hidden){O.code==="Escape"&&(O.preventDefault(),Me());return}if(A&&O.code!=="Escape"||O.code==="Space"&&O.target instanceof HTMLButtonElement)return;let Y={Escape:ut,KeyC:L,KeyR:Oe};if(Y[O.code]){O.preventDefault(),O.repeat||Y[O.code]();return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyH"].includes(O.code)&&(O.preventDefault(),u.add(O.code),O.code==="KeyH"&&l.setHorn(!0))}),window.addEventListener("keyup",O=>{u.delete(O.code),O.code==="KeyH"&&l.setHorn(!1)}),window.addEventListener("blur",S),document.addEventListener("visibilitychange",()=>{document.hidden&&S()});function V(O){if(Pe!==O){Pe=O;for(let[Y,j]of re)Y.emissive.copy(j.color),O&&Y.emissive.setHex(13903381),Y.emissiveIntensity=O?2.5:j.intensity}}function se(){return-I.steering*4}function D(O,Y,j=!1){let Q=b.steering;Q?.wheel.quaternion.setFromAxisAngle(Q.axis,O),y?.update(O,v),(j||v&&B-T>=1/24)&&(T=B,b.updateInstruments?.(Y))}function H(O){if(v){let{driverX:Y,eyeHeight:j,eyeDepth:Q}=b.seats;h.position.set(Y,j,Q).applyMatrix4(b.rig.matrixWorld),f.set(Math.sin(I.heading),0,Math.cos(I.heading)),g.copy(h.position).addScaledVector(f,15),g.y-=.7}else{let Y=I.heading-x,j=Math.atan2(Math.sin(Y),Math.cos(Y));x+=j*(1-Math.exp(-O*8)),f.set(Math.sin(x),0,Math.cos(x));let Q=Math.min(1,Math.abs(I.speed)/(m.topKmh/3.6)),Le=(h.aspect<1?7.4:5.9)+Q*.45;h.position.copy(b.rig.position).addScaledVector(f,-Le),h.position.y+=2.35,g.copy(b.rig.position).addScaledVector(f,4.2),g.y+=.88}h.lookAt(g)}function ne(O,Y,j){if(!P)return!1;let Q=k===void 0?0:Math.min((O-k)/1e3,.05);if(k=O,(Y!==ve||j!==ze)&&(ve=Y,ze=j,X.resize(Y,j)),A||X.sample(O),h.aspect=Y/j,h.fov=mt.lerp(h.fov,v?61:49+Math.min(5,Math.abs(I.speed)*.045),1-Math.exp(-Q*3)),h.updateProjectionMatrix(),!A&&ee.hidden&&Te.hidden){B+=Q;let de=Se(),Le=I.speed,Ve=Math.max(1,Math.ceil(Math.abs(I.speed)*Q/.65));for(let ei=0;ei<Ve;ei++)if(He.x=I.x,He.z=I.z,Yf(I,de,Q/Ve,p.roadDistance(I.x,I.z)<p.roadHalfWidth+.1,C?.8:1),p.collision(I.x,I.z)){I.x=He.x,I.z=He.z,I.speed=0;break}b.rig.position.set(I.x,.025,I.z);let Nt=Q>0?(I.speed-Le)/Q:0,Gt=1-Math.exp(-Q*8);Ae=mt.lerp(Ae,mt.clamp(-Nt*.0016,-.019,.024),Gt);let ma=mt.clamp((I.yawRate??0)*I.speed*.002,-.028,.028);je=mt.lerp(je,ma,Gt),b.rig.rotation.set(Ae,I.heading,je,"YXZ"),V(de.brake||de.reverse>0&&I.speed>0);for(let ei of b.parts)ei.name.startsWith("wheel_")&&ei.group.rotation.set(I.wheelRotation,ei.name.startsWith("wheel_f")?I.steering:0,0,"YXZ");b.rig.updateMatrixWorld(!0),H(Q),p.update(B,Q,I,h),W.update(O,I);let{gear:Vn,revs:Bi}=yf(I.speed,de.forward,m),pr=Math.round(Math.abs(I.speed)*3.6);D(se(),{speed:pr,gear:Vn,revs:Bi,brake:de.brake}),l.update(Bi,de.forward),i.textContent=String(pr).padStart(3,"0"),r.textContent=Vn,a.style.transform="scaleX("+Bi+")"}return s.render(e,h),!0}return{begin:Ct,end:ut,frame:ne,pause:S,setTheme:le,unlockAudio:()=>l.unlock().catch(O=>console.warn("Audio unavailable",O)),get running(){return P}}}var K_=[{brand:"FERRARI",model:"458",trim:"SPIDER",id:"ferrari",label:"Ferrari 458"},{brand:"BMW",model:"M4",trim:"COMPETITION",id:"bmw",label:"BMW M4 Competition"},{brand:"LAMBORGHINI",model:"AVENTADOR",trim:"SVJ",id:"lamborghini",label:"Lamborghini Aventador SVJ"},{brand:"BUGATTI",model:"CHIRON",trim:"",id:"bugatti",label:"Bugatti Chiron"}];function Kh(s,e){let t=K_[e];t&&(s.classList.add("vehicle-name"),s.dataset.vehicle=t.id,s.setAttribute("aria-label",t.label),s.innerHTML="<small>"+t.brand+"</small><strong>"+(e===1?'<i class="m-stripes" aria-hidden="true"><b></b><b></b><b></b></i>':"")+t.model+"</strong>"+(t.trim?"<em>"+t.trim+"</em>":""))}var Tc=[{id:"ferrari",slug:"ferrari-458",name:"Ferrari 458",brand:"Ferrari"},{id:"bmw",slug:"bmw-m4-competition",name:"BMW M4 Competition",brand:"BMW"},{id:"lamborghini",slug:"lamborghini-aventador-svj",name:"Lamborghini Aventador SVJ",brand:"Lamborghini"},{id:"bugatti",slug:"bugatti-chiron",name:"Bugatti Chiron",brand:"Bugatti"}];function fr(s,e="assembly"){let t=Tc[s];return t?e==="drive"?"/drive/"+t.slug+"/":"/cars/"+t.slug+"/"+(e==="explore"?"explore/":""):"/"}var J_=[{path:"/",mode:"garage",index:-1},...Tc.flatMap((s,e)=>["assembly","explore","drive"].map(t=>({path:fr(e,t),mode:t,index:e})))];function fa(s){let e=new URL(s,"https://route.invalid"),t=e.pathname.replace(/\/+$/,"")+"/";if(t==="/index.html/"&&(t="/"),t==="/"&&e.hash){let n=e.hash.slice(1),i=n.replace(/-reveal$/,""),r=Tc.findIndex(a=>a.id===i);if(r>=0){let a=n.endsWith("-reveal")?"explore":"assembly";return{path:fr(r,a),mode:a,index:r,legacy:!0}}if(["assembly","exploded","reveal"].includes(n)){let a=n==="reveal"?"explore":"assembly";return{path:fr(0,a),mode:a,index:0,legacy:!0}}}return J_.find(n=>n.path===t)??{path:t,mode:"not-found",index:-1}}function rp(s,e){let t=Tc[s.index],n=t?(s.mode==="drive"?"Test Drive "+t.name:t.name+" \u2014 "+(s.mode==="explore"?"360\xB0 Interior & Exterior":"3D Assembly"))+" | Apex Drive":"Apex Drive \u2014 Assemble. Explore. Drive.",i=t?s.mode==="drive"?"Take the "+t.name+" onto long forest, coastal and desert highways. Switch camera views, weather and time of day in an interactive browser test drive.":s.mode==="explore"?"Explore the "+t.name+" from every angle. Rotate the exterior, inspect the details and step into the driver or passenger seat in 3D.":"Watch the "+t.name+" come together as you scroll, then explore its exterior and cabin in 360\xB0 and head out for a test drive.":"Four remarkable cars. Discover what goes into them, assemble every detail and take the wheel. Explore Ferrari, BMW, Lamborghini and Bugatti in 3D.",r="/assets/social/models/"+(t?.id??"collection")+".jpg",a=o=>new URL(o,e).href;return{title:n,description:i,url:a(s.path),image:a(r),imageAlt:t?"Render of the in-app 3D model of the "+t.name+" in a concrete automotive studio.":"Render of the in-app 3D model of the Ferrari 458, BMW M4 Competition, Lamborghini Aventador and Bugatti Chiron.",car:t}}function Jh(s){let e=document.querySelector('meta[name="site-origin"]')?.content||location.origin,t=rp(s,e);document.title=t.title;for(let[r,a]of[['meta[name="description"]',t.description],['meta[property="og:title"]',t.title],['meta[property="og:description"]',t.description],['meta[property="og:url"]',t.url],['meta[property="og:image"]',t.image],['meta[property="og:image:alt"]',t.imageAlt],['meta[name="twitter:title"]',t.title],['meta[name="twitter:description"]',t.description],['meta[name="twitter:image"]',t.image],['meta[name="twitter:image:alt"]',t.imageAlt]]){let o=document.querySelector(r);o&&(o.content=a)}let n=document.querySelector('link[rel="canonical"]');n&&(n.href=t.url);let i=document.querySelector("#page-schema");if(i){let r=JSON.parse(i.textContent);r.name=t.title,r.description=t.description,r.url=t.url,r.image=t.image,delete r.about,t.car&&(r.about={"@type":"Vehicle",name:t.car.name,brand:{"@type":"Brand",name:t.car.brand}}),i.textContent=JSON.stringify(r)}}var Rc=document.querySelector(".screen"),Cc=document.querySelector(".journey"),fn=document.querySelector("#car"),$h=document.querySelector("h1"),ys=document.querySelector('[role="status"]'),Z_=document.querySelector(".garage"),pa=[...Z_.querySelectorAll("a")],vs=document.querySelector(".test-drive");pa.forEach((s,e)=>Kh(s.querySelector("span"),e));var Ic=matchMedia("(prefers-reduced-motion: reduce)"),Qh=s=>mt.clamp(s,0,1);function ap(s){let e=Qh(s);return e*e*(3-2*e)}var bi=[{id:"ferrari",name:"Ferrari 458",load:Cf},{id:"bmw",name:"BMW M4 Competition",load:Lf},{id:"lamborghini",name:"Lamborghini Aventador SVJ",load:Bf},{id:"bugatti",name:"Bugatti Chiron",load:Xh}],Gn,on,op,Kt=-1,eu=0,Oi=!1,xi=!0,Tt,tu=!1,nu,cp=!1,Zh=!1;function Ac(){Rc.toggleAttribute("data-complete",Oi&&!!Tt),$h.hidden=!Oi||!Tt||Gn.mode!=="exterior"||on?.running,vs.hidden=$h.hidden,xi=!0}function Ms(){if(on?.running)return;let s=Math.max(1,Cc.offsetHeight-Rc.offsetHeight),e=Math.max(0,-Cc.getBoundingClientRect().top),t=Qh(e/s),n=Kt<0?0:Qh((t-.235)/.72);Oi=n===1,eu=Ic.matches?Math.floor(n*4)/4:n,op?.(Kt),Gn?.setComplete(Oi&&!!Tt),Ac()}function Pc(s){let e=fa(location.href);if(e.mode==="not-found"){location.replace("/404.html");return}tu=!0,on?.running&&on.end(),tu=!1,e.legacy&&history.replaceState(null,"",e.path),Jh(e),Kt=e.index;let t=Kt<0;Rc.toggleAttribute("data-catalog",t),Rc.dataset.model=t?"":bi[Kt].id,Cc.toggleAttribute("data-selected",!t),fn.tabIndex=t?-1:0,fn.setAttribute("aria-hidden",String(t)),t&&fn.setAttribute("aria-label","Four cars in the collection."),["explore","drive"].includes(e.mode)&&!t?window.scrollTo(0,Cc.offsetHeight):(s||t)&&window.scrollTo(0,0),Ms(),Ec()}function iu(s,e=!1){let t=new URL(s,location.href);t.href!==location.href&&history[e?"replaceState":"pushState"](null,"",t),Pc(!0)}function Ec(){!cp||!Tt||on?.running||Zh||fa(location.href).mode!=="drive"||(Zh=!0,Promise.resolve().then(()=>nu(!0)).finally(()=>{Zh=!1}))}pa.forEach(s=>s.addEventListener("click",e=>{e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||(e.preventDefault(),iu(s.getAttribute("href")),fn.focus({preventScroll:!0}))}));function lp(){let s=Kt;iu("/"),pa[s]?.focus({preventScroll:!0})}window.addEventListener("scroll",Ms,{passive:!0});window.addEventListener("resize",Ms);window.addEventListener("hashchange",()=>Pc(!0));window.addEventListener("popstate",()=>Pc(!0));window.addEventListener("keydown",s=>{!on?.running&&s.key==="Escape"&&!s.defaultPrevented&&Kt>=0&&Gn?.mode==="exterior"&&lp()});Ic.addEventListener("change",Ms);function $_(s){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);for(let[o,c]of[[0,"#faf5ec"],[.23,"#bdb9b5"],[.43,"#797978"],[.49,"#303432"],[.56,"#555450"],[.75,"#8c857b"],[1,"#b4aca0"]])n.addColorStop(o,c);t.fillStyle=n,t.fillRect(0,0,1024,512);for(let[o,c,l,h,u]of[[55,82,329,77,"#fffaf0"],[489,65,315,107,"#fffdf7"],[887,130,82,128,"#f8f4eb"],[378,174,68,111,"#cbcdd1"],[68,202,224,14,"#eae8e3"],[564,227,220,15,"#eae9e4"]])t.fillStyle=u,t.fillRect(o,c,l,h);let i=new Xt(e);i.mapping=os,i.colorSpace=tt;let r=new Ui(s),a=r.fromEquirectangular(i);return i.dispose(),r.dispose(),a}async function Q_(){let s=new mc({canvas:fn,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.toneMapping=Eo,s.toneMappingExposure=1.07;let e=new Ji;on=sp(s,e,()=>{Tt.rig.visible=!0,Gn.setVehicle(Tt,bi[Kt].name),!tu&&fa(location.href).mode==="drive"?iu(fr(Kt,"explore"),!0):Ms()});let t=new Map;nu=async(C=!1)=>{if(!Tt||!Oi||on.running||vs.disabled)return;C||on.unlockAudio();let I=Kt,B=location.pathname;vs.disabled=!0,vs.textContent="Preparing drive\u2026";try{let k=Tt;if(bi[I].id==="bugatti"&&matchMedia("(pointer: coarse)").matches){if(t.has(I)||t.set(I,Xh({driving:!0})),k=await t.get(I),I!==Kt||!Oi||location.pathname!==B)return;k.rig.parent||e.add(k.rig)}on.begin(k,bi[I]);let z=new URL(location.href).searchParams.get("theme");z&&on.setTheme(z),C?on.pause():(history.pushState(null,"",fr(I,"drive")),Jh(fa(location.href))),k!==Tt&&(Tt.rig.visible=!1),Gn.setComplete(!1),fn.setAttribute("aria-label","Driving "+bi[I].name+". Use WASD or arrow keys to drive, Space to brake, H for horn, C for cabin and Escape to exit."),fn.focus({preventScroll:!0}),Ac()}catch(k){t.delete(I),ys.textContent="Drive could not start. Please try again.",console.error(k)}finally{vs.disabled=!1,vs.innerHTML='Test drive <span aria-hidden="true">\u2197</span>'}},vs.addEventListener("click",()=>nu(!1));let n=new bc().loadAsync(new URL("./assets/studio.hdr",import.meta.url)).catch(()=>null),i=new Map,r=new Map,a=new vt(38,1,.05,50),o=-1;pa.forEach((C,I)=>{C.addEventListener("pointerenter",()=>{o=I,xi=!0}),C.addEventListener("pointerleave",()=>{o=-1,xi=!0})});function c(C){if(!i.has(C)){let I=bi[C].load().then(B=>(B.rig.visible=!1,e.add(B.rig),r.set(C,B),C===Kt&&Ms(),xi=!0,B)).catch(B=>{throw i.delete(C),B});i.set(C,I)}return i.get(C)}Gn=Vf(fn,C=>{Tt?.setMirrors?.(C!=="exterior"),Ac()},lp),op=C=>{if(Tt&&(C<0||Tt!==r.get(C))&&(Tt.rig.visible=!1,Tt.setMirrors?.(!1),Tt=void 0),C<0)return;let I=r.get(C);if(!I){let B=bi[C].name;fn.setAttribute("aria-label",B+" 3D model"),ys.textContent="Loading "+B+".",c(C).catch(k=>{C===Kt&&(ys.textContent=B+" could not load. Reload to try again."),console.error(k)});return}if(Tt===I){Ec();return}Tt=I,Tt.rig.visible=!0,Tt.catalogReady=!1,Kh($h,C),ys.textContent="",Gn.setVehicle(Tt,bi[C].name),Ec()},Pc(!1);let l=Math.max(Kt,0);await c(l);for(let[C,I]of bi.entries())C!==l&&c(C).catch(B=>{C===Kt&&(ys.textContent=I.name+" could not load. Reload to try again."),console.error(B)});e.environment=$_(s).texture,n.then(C=>{C&&(C.mapping=os,e.environment=C,xi=!0)}),e.environmentIntensity=.62,e.environmentRotation.y=-.9,e.add(new is(16775144,5725814,.45));for(let[C,I,B]of[[[1,7,5],16774893,1.42],[[-3,3,1],14411519,.72],[[2,5,-6],16772576,1.27],[[-4,-5,1],13886452,.64]]){let k=new fi(I,B);k.position.set(...C),e.add(k)}let h={front:[-.09,.078],rear:[.19,-.218],cabin:[-.255,-.171],floor:[.009,-.347],doorRight:[.067,.359],doorLeft:[-.363,.044],wheel_fl:[.233,.239],wheel_fr:[.36,.114],wheel_rl:[.33,-.09],wheel_rr:[-.305,-.294],brake_wheel_fl:[.111,.138],brake_wheel_fr:[.391,.326],brake_wheel_rl:[.35,.01],brake_wheel_rr:[-.346,-.123],headlampLeft:[-.274,.135],headlampRight:[-.087,.283],tailLeft:[.374,-.261],tailRight:[.254,-.321],windshield:[-.11,-.274],cockpit:[-.272,-.384],engine:[.19,.365]},u=new R,d=new R,f=new R(0,.62,0),g=new Pt,x=new Pt,m=new hn,p=performance.now(),b=1,y=1,_=!0,w=!1,T;new ResizeObserver(()=>{_=!0,xi=!0}).observe(fn),fn.addEventListener("webglcontextlost",C=>{C.preventDefault(),w=!0,ys.textContent="3D rendering paused."}),fn.addEventListener("webglcontextrestored",()=>{w=!1,ys.textContent="",xi=!0});function A(){s.setScissorTest(!1),s.setViewport(0,0,b,y),s.clear(),s.setScissorTest(!0);for(let[C,I]of r.entries()){if(!I.catalogReady){for(let X of I.parts)X.group.position.copy(X.center),X.group.quaternion.identity(),X.group.scale.setScalar(1);I.catalogReady=!0}let B=pa[C].getBoundingClientRect();if(B.width===0||B.height===0)continue;let k=B.width/B.height,z=Math.max(4.35,5.25/k)/(2*Math.tan(Math.PI*19/180)),U=.77+(o===C?.14:0);a.aspect=k,a.updateProjectionMatrix(),a.position.set(Math.sin(U)*z,.62+z*.25,Math.cos(U)*z),a.lookAt(0,.62,0),s.setViewport(B.left,y-B.bottom,B.width,B.height),s.setScissor(B.left,y-B.bottom,B.width,B.height),I.rig.visible=!0,s.render(e,a),I.rig.visible=!1}s.setScissorTest(!1),s.setViewport(0,0,b,y)}function v(C){if(w)return;let I=on.running||Kt>=0&&!Ic.matches&&eu===0;if(!xi&&!I)return;if(xi=!1,_&&(_=!1,b=Math.max(1,fn.clientWidth),y=Math.max(1,fn.clientHeight),s.setPixelRatio(Math.min(devicePixelRatio,b<650?1.65:1.85)),s.setSize(b,y,!1)),on.running){on.frame(C,b,y);return}if(Kt<0){A(),T=void 0;return}let B=b<720,k=b/y,z=Math.max(4.8,5.35/k);if(!Tt){s.clear();return}if(Gn.position(k,z),T!==Tt||!Oi){u.setFromMatrixColumn(Gn.camera.matrixWorld,0),d.setFromMatrixColumn(Gn.camera.matrixWorld,1);let U=(C-p)/1e3,X=z*k,W=Ic.matches?1:ap(U/1.1);for(let[oe,ce]of Tt.parts.entries()){let ge=ap((eu-ce.delay*.45)/(.99-ce.delay*.45)),[ve,ze]=B?h[ce.name]:ce.position,Ke=I?Math.sin(U*.92+oe*1.17)*.042:0;ce.group.position.copy(f).addScaledVector(u,ve*Math.min(X,12)+(1-W)*Math.sign(ve)*.16).addScaledVector(d,ze*z+Ke).lerp(ce.center,ge);let[He,ie,re]=ce.rotation;m.set(He,ie+(I?Math.sin(U*.63+oe)*.04:0),re),ce.group.quaternion.copy(g.setFromEuler(m)).slerp(x,ge);let _e=B?Math.min(.92,b/476):1;ce.group.scale.setScalar(mt.lerp(ce.size*_e*(.94+.06*W),1,ge))}T=Oi?Tt:void 0}s.render(e,Gn.camera)}function M(C){v(C),requestAnimationFrame(M)}Ms(),v(performance.now()),Ac(),requestAnimationFrame(M),cp=!0,Ec()}async function cw(){await Q_()}export{cw as start};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
