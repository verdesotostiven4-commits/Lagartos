import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Filter, BookOpen, GitBranch, X, ChevronRight, Presentation } from 'lucide-react';

const sp = (scientific, common = '', endemic = false, status = '') => ({ scientific, common, endemic, status });

const order = {
  name: 'Sauria',
  common: 'lagartos',
  summary: 'Orden de reptiles conocido como lagartos. En Ecuador se registran 9 familias y 6 subfamilias, con 208 especies de las cuales 94 son endémicas.',
  traits: [
    'Cuerpo alargado.',
    'Extremidades cortas, por lo general provistas de 5 dedos.',
    'Miden entre 5 cm y 2 m de largo o más.',
    'La cola corresponde a más de un tercio de la longitud total.',
    'Pueden ser terrestres, arborícolas, subterráneos o acuáticos.',
    'Lengua bifurcada y retráctil.',
    'Hábitos alimenticios variados: insectívoros, herbívoros y algunos omnívoros.',
    'Pupilas de forma horizontal, vertical, redonda u ovalada.',
    'Algunas especies presentan crestas dorsales.',
    'Pueden ser ovíparos u ovovivíparos.',
    'Los machos tienen hemipenes.',
    'Piel córnea plegada formando escamas.'
  ],
  families: [
    {
      name: 'Alopoglossidae',
      common: 'lagartijas de sombra',
      count: '9 especies, 2 endémicas',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/9986-07-etc.jpg',
      traits: [
        'Familia de lagartijas de sombra.',
        'El PDF registra los géneros Alopoglossus y Ptychoglossus.',
        'Incluye especies de bosque montano, bosque piemontano y bosque húmedo tropical.',
        'Algunas especies aparecen como no evaluadas, preocupación menor o datos insuficientes.',
        'Presenta especies endémicas dentro del grupo.'
      ],
      species: [
        sp('Alopoglossus atriventris','lagartija de sombra de vientre quillado'),
        sp('Alopoglossus buckleyi','lagartija de sombra montañesa'),
        sp('Alopoglossus carinicaudatus','lagartija de sombra de cola quillada'),
        sp('Alopoglossus festae','lagartija de sombra de Festa'),
        sp('Alopoglossus viridiceps','lagartija de sombra de cabeza verde', true),
        sp('Ptychoglossus bilineatus','lagartija de sombra de dos franjas', true),
        sp('Ptychoglossus gorgonae','lagartija de sombra de Gorgona')
      ]
    },
    {
      name: 'Diploglossidae',
      common: 'escorpiones / galliwasp',
      count: '1 especie, 0 endémicas',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/15073_lateral_OT.jpg',
      traits: [
        'El PDF registra una especie y cero endémicas.',
        'La longitud de los machos alcanza aproximadamente 215 mm.',
        'Las hembras miden entre 150 y 188 mm.',
        'Es una especie rara, diurna y terrestre.',
        'Se asocia a bosques de la costa, Chocó, piemontano occidental y montano occidental.'
      ],
      species: [sp('Diploglossus monotropis','escorpión / galliwasp', false, 'Preocupación menor')]
    },
    {
      name: 'Gekkonidae',
      common: 'gecos, salamanquesas o limpia ventanas',
      count: '3 especies en el país',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/h.mabouia.dorsal.jpg',
      traits: [
        'Emiten sonidos desde la laringe.',
        'A menudo presentan cojinetes adherentes en los dedos.',
        'Los ojos normalmente carecen de párpados.',
        'Algunas especies se adaptan a vivir en casas humanas.',
        'Pueden reproducirse por partenogénesis.',
        'Tienen capacidad de regeneración.',
        'Son de hábitos nocturnos.',
        'Son ovíparos y pleurodontos.',
        'Cuerpo aplanado y ojos grandes.',
        'Los extremos de los dedos están dilatados como ventosas adhesivas.',
        'Son insectívoros.'
      ],
      species: [
        sp('Hemidactylus frenatus','salamanquesa asiática', false, 'Preocupación menor'),
        sp('Hemidactylus mabouia','salamanquesa africana'),
        sp('Lepidodactylus lugubris','salamanquesa de luto')
      ]
    },
    {
      name: 'Gymnophthalmidae',
      common: 'cuilanes y lagartijas pequeñas',
      count: 'varios géneros, con especies endémicas',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/538600DSC01466.jpg',
      traits: [
        'Incluye lagartijas pequeñas y de cuerpo alargado.',
        'El PDF muestra varios géneros con especies endémicas.',
        'Algunas especies son de bosque montano, piemontano y bosque húmedo tropical.',
        'El corcho de agua es pequeño y frecuenta el agua.',
        'Algunas especies presentan protuberancias como espinas que cubren el cuerpo.',
        'Se registran estados como no evaluada, datos insuficientes, preocupación menor, casi amenazada, vulnerable y en peligro.'
      ],
      species: [
        sp('Pholidobolus montium','cuilán de montaña'),
        sp('Echinosaura horrida','lagartija espinosa terrible'),
        sp('Anadia buenaventura','anadia de Buenaventura', true),
        sp('Anadia petersi','anadia de Peters', true),
        sp('Andinosaura kiziriani','palo', true),
        sp('Riama labionis','palo', true, 'En peligro')
      ]
    },
    {
      name: 'Hoplocercidae',
      common: 'falsa iguana',
      count: 'familia representada por Enyalioides',
      image: 'https://www.reptilesofecuador.com/thumbnails/enyalioides_altotambo_adult_male1_s.jpg',
      traits: [
        'Se representa con falsas iguanas.',
        'Incluye especies del género Enyalioides.',
        'Presenta lagartijas del oriente y occidente de los Andes.',
        'El PDF muestra especies del occidente de los Andes y de Manabí.',
        'Varias especies poseen aspecto robusto y crestas o escamas marcadas.'
      ],
      species: [
        sp('Enyalioides sp.','lagartija del oriente y occidente de los Andes'),
        sp('Enyalioides microlepis','lagartija del occidente de los Andes'),
        sp('Enyalioides heterolepis','lagartija de Manabí')
      ]
    },
    {
      name: 'Iguanidae',
      common: 'iguanas',
      count: 'familia con iguanas y subfamilias asociadas',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/137-3792_img.jpg',
      traits: [
        'Incluye auténticas iguanas.',
        'Presentan cresta dorsal media de escamas alargadas o espinas.',
        'Tienen patas bien desarrolladas y cola frágil.',
        'Algunas especies son arborícolas y viven cerca de ríos.',
        'Se alimentan de hojas, frutas y pequeñas presas.',
        'En Galápagos se mencionan iguanas terrestres y marinas.',
        'La iguana terrestre habita zonas secas y es herbívora.',
        'La iguana marina es de color negruzco y se alimenta de algas.'
      ],
      species: [
        sp('Basiliscus galeritus','pasa-ríos', false, 'Preocupación menor'),
        sp('Iguana iguana','iguana verde'),
        sp('Conolophus subcristatus','iguana terrestre'),
        sp('Amblyrhynchus cristatus','iguana marina')
      ]
    },
    {
      name: 'Polychrotidae',
      common: 'anolis / falsos camaleones',
      count: 'familia de anolis',
      image: 'https://static.wikia.nocookie.net/jurassicpark/images/8/82/ANOCAR-F.jpg/revision/latest?cb=20180620064432&path-prefix=es',
      traits: [
        'Tienen cojinetes o ensanchamientos en las segundas falanges de los dedos.',
        'La bolsa gular en machos sirve para atraer hembras o disuadir otros machos.',
        'Son especies arborícolas conocidas como anolis.',
        'Tienen tamaño modesto, entre 10 y 30 cm de largo.',
        'Cambian de color según la intensidad de luz, temperatura ambiental y estado de excitación.',
        'Se alimentan de insectos.'
      ],
      species: [
        sp('Anolis sp.','lagartija'),
        sp('Phenacosaurus vanzolinii','falso camaleón')
      ]
    },
    {
      name: 'Teiidae',
      common: 'lagartos del nuevo mundo',
      count: 'familia de lagartos del nuevo mundo',
      image: 'https://multimedia20stg.blob.core.windows.net/especiesreduced/ameivaameiva_am1_1.jpg',
      traits: [
        'Son conocidos como lagartos del nuevo mundo.',
        'Carecen de cresta o apéndices en la garganta.',
        'Existen especies terrestres, acuáticas o subterráneas.',
        'El PDF menciona patas atrofiadas en algunas formas.',
        'Se representa con lagartijas de cola azul.'
      ],
      species: [sp('Ameiva ameiva','lagartija'), sp('Teiidae sp.','lagartija de cola azul')]
    },
    {
      name: 'Tropiduridae',
      common: 'guagsas y lagartijas de lava',
      count: 'familia con lagartijas de lava',
      image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/52542718/original.jpeg',
      traits: [
        'Habitan en Galápagos y otras regiones.',
        'Miden alrededor de 15 cm de largo.',
        'Pasan sobre rocas de lava.',
        'Tienen complejos rituales de combate y comunicación social.',
        'La lagartija de Manabí presenta manchas oscuras en el dorso.',
        'La hembra puede tener garganta roja y el macho garganta negra.'
      ],
      species: [
        sp('Stenocercus guentheri','guagsa de la sierra'),
        sp('Microlophus sp.','lagartija de lava'),
        sp('Microlophus occipitalis','lagartija de Manabí'),
        sp('Tropidurus flaviceps','lagartija de Cuyabeno')
      ]
    }
  ]
};

order.families = order.families.sort((a,b)=>a.name.localeCompare(b.name)).map(f => ({...f, species: f.species.sort((a,b)=>a.scientific.localeCompare(b.scientific))}));

function Species({ item }) { return <div className="species"><em>{item.scientific}</em>{item.common && <span> — {item.common}</span>}{item.endemic && <b>Endémica</b>}{item.status && <small>{item.status}</small>}</div>; }
function FamilyImage({ family, modal = false }) { return <div className={modal ? 'familyImage familyImageModal' : 'familyImage'}><img src={family.image} alt={`Imagen representativa de ${family.name}`} loading="lazy" referrerPolicy="no-referrer" /></div>; }

function Modal({ family, onClose }) {
  return <AnimatePresence>{family && <motion.div className="modalBackdrop" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.article className="modal" onClick={e=>e.stopPropagation()} initial={{opacity:0,y:25,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:25,scale:.96}}><button className="close" onClick={onClose}><X size={20}/></button><p className="eyebrow">Orden Sauria · Familia</p><h2>{family.name}</h2><p className="familyCommon">{family.common}</p><FamilyImage family={family} modal /><div className="modalGrid"><section><h3>Características de la familia</h3>{family.traits.map(t=><p key={t}>• {t}</p>)}</section><section><h3>Especies representativas</h3><div className="speciesList">{family.species.map(s=><Species key={s.scientific} item={s}/>)}</div></section></div></motion.article></motion.div>}</AnimatePresence>;
}

function FamilyCard({ family, i, onOpen }) {
  return <motion.button className="familyCard" onClick={()=>onOpen(family)} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:i*.03}}><div className="cardTop"><span>{String(i+1).padStart(2,'0')}</span><strong>{family.name}</strong></div><p>{family.common}</p><FamilyImage family={family} /><small>{family.count}</small><div className="preview">{family.traits.slice(0,2).map(t=><span key={t}>{t}</span>)}</div><div className="openLine">Ver ficha <ChevronRight size={16}/></div></motion.button>;
}

export default function App(){
  const [open,setOpen]=useState(false); const [query,setQuery]=useState(''); const [selected,setSelected]=useState(null); const [present,setPresent]=useState(false);
  const families=useMemo(()=>order.families.filter(f=>`${f.name} ${f.common} ${f.traits.join(' ')} ${f.species.map(s=>s.scientific+' '+s.common).join(' ')}`.toLowerCase().includes(query.toLowerCase())),[query]);
  return <main className={present?'app presentation':'app'}><section className="hero"><div className="orb one"/><div className="orb two"/><p className="badge">Clase Reptiles · Orden</p><h1>Sauria</h1><p className="subtitle">Lagartos del Ecuador · esquema taxonómico interactivo</p><div className="stats"><div><b>9</b><span>familias</span></div><div><b>208</b><span>especies</span></div><div><b>94</b><span>endémicas</span></div></div></section><section className="scheme"><div className="box top">Reptiles</div><div className="line v1"/><div className="box mid">Lepidosauria</div><div className="line v2"/><div className="box low">Squamata</div><div className="line v3"/><button className={open?'sauriaBtn active':'sauriaBtn'} onClick={()=>setOpen(!open)}><span>🦎</span><strong>SAURIA</strong><em>lagartos</em></button></section>{open && <><section className="controls"><label><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar familia o especie..."/></label><label><Filter size={18}/><select value="Sauria" disabled><option>Sauria</option></select></label></section><section className="intro"><BookOpen size={20}/><div><h2>Familias del orden Sauria</h2><p>{order.summary}</p></div><button onClick={()=>setPresent(!present)}><Presentation size={18}/>{present?'Salir':'Presentar'}</button></section><section className="orderBlock"><div className="orderHead"><div className="icon">🦎</div><div><p className="eyebrow">Orden</p><h2>Sauria</h2><p>lagartos</p></div></div><div className="traits">{order.traits.map(t=><span key={t}>{t}</span>)}</div><div className="grid">{families.map((f,i)=><FamilyCard key={f.name} family={f} i={i} onOpen={setSelected}/>)}</div></section></>}<footer><GitBranch size={18}/> Orden Sauria · Clase Reptiles</footer><Modal family={selected} onClose={()=>setSelected(null)}/></main>;
}
