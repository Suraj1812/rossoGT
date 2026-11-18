import * as T from './vendor/three.module.js';

function add(group,geometry,material,x,y,z) {
  const mesh = new T.Mesh(geometry,material);
  mesh.position.set(x,y,z);
  group.add(mesh);
  return mesh;
}

export function createUnderbody(carbon) {
  const group = new T.Group();
  const anodized = new T.MeshStandardMaterial({color:0x4e4d4a,metalness:.8,roughness:.42});
  const machined = new T.MeshStandardMaterial({color:0x999895,metalness:.82,roughness:.39});
  const gasket = new T.MeshStandardMaterial({color:0x101113,roughness:.86});

  // Recessed fasteners and service covers follow the existing flat tray.
  const fasteners = [];
  for(const side of [-1,1]) {
    for(const z of [-1.39,-1.11,-.84,-.55,-.22,.15,.5,.84,1.14,1.45]) {
      const x = (Math.abs(z)>1.08 ? .49 : .69)*side;
      fasteners.push([x,.144,z]);
    }
    add(group,new T.BoxGeometry(.018,.006,1.83),gasket,side*.595,.147,-.026);
    add(group,new T.BoxGeometry(.036,.009,1.71),anodized,side*.49,.146,.04);
  }
  for(const z of [-.96,-.35,.29,.94]) {
    add(group,new T.BoxGeometry(1.26,.006,.012),gasket,0,.146,z);
    fasteners.push([-.31,.144,z-.024],[.31,.144,z-.024]);
  }
  for(const [x,y,z] of fasteners) {
    add(group,new T.CylinderGeometry(.013,.013,.004,18),anodized,x,y,z);
    add(group,new T.CylinderGeometry(.007,.008,.005,6),machined,x,y-.003,z);
  }

  add(group,new T.BoxGeometry(.44,.016,.36),carbon,0,.143,.58);
  add(group,new T.BoxGeometry(.39,.006,.31),anodized,0,.132,.58);
  for(const side of [-1,1]) {
    for(let n=0;n<5;n++) {
      add(group,new T.BoxGeometry(.074,.009,.012),gasket,side*.128,.127,.496+n*.043);
    }
    for(const z of [.445,.715]) {
      add(group,new T.CylinderGeometry(.011,.011,.007,6),machined,side*.168,.129,z);
    }
  }

  for(const side of [-1,1]) {
    const shield = add(group,new T.BoxGeometry(.145,.012,.58),anodized,side*.281,.14,-1.226);
    shield.rotation.y = side*.11;
    for(let n=0;n<12;n++) {
      add(group,new T.BoxGeometry(.115,.005,.011),machined,side*(.31-n*.0056),.133,-1.479+n*.047);
    }
  }
  return group;
}

export function createSuspension(z) {
  const group = new T.Group();
  const body = new T.MeshStandardMaterial({color:0x2c2b2b,metalness:.7,roughness:.42});
  const metal = new T.MeshStandardMaterial({color:0x747c80,metalness:.78,roughness:.28});
  const spring = new T.MeshStandardMaterial({color:0x992a24,metalness:.25,roughness:.44});
  for(const side of [-1,1]) {
    const x = side*(z>0?.617:.636);
    const points = [];
    for(let n=0;n<=112;n++) {
      const fraction = n/112;
      const theta = fraction*Math.PI*13;
      points.push(new T.Vector3(x+side*fraction*.03+Math.cos(theta)*.037,.375+fraction*.245,z+Math.sin(theta)*.037));
    }
    add(group,new T.TubeGeometry(new T.CatmullRomCurve3(points),112,.0055,8,false),spring,0,0,0);
    const shock = add(group,new T.CylinderGeometry(.016,.019,.263,16),metal,x+side*.014,.495,z);
    shock.rotation.z = -side*.13;
    for(const y of [.367,.622]) add(group,new T.CylinderGeometry(.041,.041,.012,22),body,x+side*(y>.5?.03:0),y,z);
  }
  return group;
}
