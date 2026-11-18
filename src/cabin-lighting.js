import * as T from './vendor/three.module.js';

// Cabin coordinates are metres in the assembled rig, with +Z facing forward.
// These restrained placements follow the available interiors, rather than
// illuminating the entire car with a coloured fill light.
const profiles={
  ferrari:{door:.72,trim:.64,foot:.58,roof:1.15,header:.30,color:0xffdfb3,ambient:false},
  bmw:{door:.76,trim:.76,foot:.53,roof:1.27,header:.12,color:0x8bbdff,ambient:true},
  lamborghini:{door:.70,trim:.55,foot:.54,roof:1.03,header:.26,color:0xffe2be,ambient:false},
  bugatti:{door:.75,trim:.69,foot:.73,roof:1.19,header:.27,color:0xffeddb,ambient:true}
};

export function createCabinLighting(id) {
  const p=profiles[id]??profiles.ferrari;
  const root=new T.Group();root.name='Cabin lighting';
  const footlights=[],readingLights=[],accents=[];
  const glow=new T.MeshBasicMaterial({color:p.color,toneMapped:false});
  const lensMaterial=new T.MeshStandardMaterial({color:0xd0cdc5,roughness:.36,emissive:0xffebce,emissiveIntensity:0});
  for(const side of [-1,1]) {
    // Downward pools under the dashboard, not floating lights by the driver.
    const foot=new T.SpotLight(0xffe5c5,.34,.85,.64,.85,2);
    foot.position.set(side*.32,p.trim-.09,p.foot);
    foot.target.position.set(side*.32,.12,p.foot-.12);
    root.add(foot,foot.target);footlights.push(foot);
    const reading=new T.SpotLight(0xffedda,.52,1.35,.56,.85,2);
    reading.position.set(side*.24,p.roof,p.header);
    reading.target.position.set(side*.30,.47,-.08);
    root.add(reading,reading.target);readingLights.push(reading);
    const lens=new T.Mesh(new T.SphereGeometry(.012,12,6),lensMaterial);
    lens.scale.set(1,.3,1.5);lens.position.copy(reading.position);
    root.add(lens);
    if(p.ambient) {
      const curve=new T.CatmullRomCurve3([
        new T.Vector3(side*p.door,p.trim,-.35),
        new T.Vector3(side*(p.door-.015),p.trim+.012,.05),
        new T.Vector3(side*(p.door-.06),p.trim+.025,.40)
      ]);
      const strip=new T.Mesh(new T.TubeGeometry(curve,20,.0015,4,false),glow);
      root.add(strip);accents.push(strip);
    }
  }
  return {
    root,
    update({night=false,cabin=false,reading=false}={}) {
      // Keep the tiny fixtures visible outside; local lights are needed only
      // in the cabin, avoiding extra lighting work in the chase camera.
      for(const light of footlights)light.visible=cabin&&(night||reading);
      for(const light of readingLights)light.visible=cabin&&reading;
      for(const strip of accents)strip.visible=night;
      glow.color.setHex(p.color).multiplyScalar(.42);
      lensMaterial.emissiveIntensity=reading?.65:0;
    }
  };
}
