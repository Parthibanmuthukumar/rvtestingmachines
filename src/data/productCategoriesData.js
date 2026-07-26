import durometer from '../assets/images/products/Digital-Durometer_HDD-2.jpg';
import irhdMicro from '../assets/images/products/IRHD_Micro.jpg';
import mega from '../assets/images/MEGA-11-350-SD.png';
import up50 from '../assets/images/UP-50-HK-2-DH.png';
import em400 from '../assets/images/EM-400.png';
import em10 from '../assets/images/EM-10 image 1.png';
import alpha from '../assets/images/ALPHA-3-3000-AD.png';
import prescott from '../assets/images/prescott-mv.png';
import nic from '../assets/images/NIC_29221.jpg';

export const TESTING_CATEGORIES = [
  {
    id: 'hardness-testing',
    name: 'Hardness Testing',
    highlight: false,
    description: 'Shore A/D durometers, IRHD micro hardness, Rockwell, Vickers & Brinell testers.',
    subcategories: [
      {
        material: 'Rubber',
        title: 'Digital Durometer HDD-2 & IRHD Micro',
        image: durometer,
        text: 'Precision Shore A/D and Micro IRHD hardness measurement for rubber, O-rings, and polymers.',
        link: '/products#rubber-durometer',
      },
      {
        material: 'Metal',
        title: 'Precision Hardness System UP-50',
        image: up50,
        text: 'Industrial Rockwell, Vickers, and Brinell hardness testing systems for engineered metals & alloys.',
        link: '/products#metal-hardness',
      },
    ],
  },
  {
    id: 'tensile-compression-testing',
    name: 'Tensile / Compression Testing',
    highlight: false,
    description: 'Universal testing machines for high-capacity tension, compression, and elongation analysis.',
    subcategories: [
      {
        material: 'Rubber',
        title: 'Tensile & Elongation Testing Systems',
        image: em10,
        text: 'High-precision load cell UTM systems tailored for elastomer elongation and tensile strength evaluation.',
        link: '/products#rubber-testing',
      },
      {
        material: 'Metal',
        title: 'Universal Testing Machine MEGA-11',
        image: mega,
        text: 'Heavy-duty dual-column UTM for tension, compression, and shear testing up to 600 kN capacity.',
        link: '/products#metal-utm',
      },
    ],
  },
  {
    id: 'acceleration-speed-testing',
    name: 'Acceleration / Speed Testing',
    highlight: false,
    description: 'Dynamic load rate and speed-controlled material behavior testing systems.',
    subcategories: [
      {
        material: 'Rubber & Plastics',
        title: 'High-Speed Velocity Testers',
        image: alpha,
        text: 'Dynamic strain rate evaluation for high-velocity material deformation.',
        link: '/products',
      },
      {
        material: 'Metals & Alloys',
        title: 'Impact Speed Measurement Rigs',
        image: '/images/UTM Testing.png',
        text: 'High-frequency load response and speed transducer testing systems.',
        link: '/products',
      },
    ],
  },
  {
    id: 'displacement-measurement-testing',
    name: 'Displacement Measurement Testing',
    highlight: false,
    description: 'High-resolution optical & contact extensometer displacement measuring systems.',
    subcategories: [
      {
        material: 'Elastomers',
        title: 'Long-Travel Extensometer',
        image: nic,
        text: 'Non-contact video & long-stroke optical displacement measurement.',
        link: '/products',
      },
      {
        material: 'Structural Materials',
        title: 'LVDT & Strain Gauge Systems',
        image: em400,
        text: 'Micron-level displacement measurement for modulus and strain analysis.',
        link: '/products',
      },
    ],
  },
  {
    id: 'fatigue-testing',
    name: 'Fatigue Testing',
    highlight: false,
    description: 'Cyclic load, flex-life, and endurance dynamic mechanical fatigue analyzers.',
    subcategories: [
      {
        material: 'Rubber',
        title: 'De Mattia & Flex Fatigue Testers',
        image: '/images/Hilde Brand.png',
        text: 'Repeated flexural cracking & cut growth fatigue testing for elastomers.',
        link: '/products',
      },
      {
        material: 'Metal',
        title: 'Servo-Hydraulic Dynamic Fatigue System',
        image: '/images/material-testing-core.jpg',
        text: 'High-cycle (HCF) and low-cycle (LCF) dynamic fatigue testing rigs.',
        link: '/products',
      },
    ],
  },
  {
    id: 'creep-testing',
    name: 'Creep Testing',
    highlight: false,
    description: 'Constant load long-term creep strain and stress-rupture evaluation.',
    subcategories: [
      {
        material: 'Rubber & Polymers',
        title: 'Polymer Creep & Relaxation Testers',
        image: irhdMicro,
        text: 'Long-term stress relaxation and compressive creep measurement.',
        link: '/products',
      },
      {
        material: 'Metal & Alloys',
        title: 'High-Temp Stress Rupture Creep Rig',
        image: mega,
        text: 'Furnace-integrated creep rupture evaluation for aerospace & power metals.',
        link: '/products',
      },
    ],
  },
  {
    id: 'rheology-testing',
    name: 'Rheology Testing',
    highlight: false,
    description: 'Moving die rheometers (MDR) and viscoelastic polymer processing analyzers.',
    subcategories: [
      {
        material: 'Rubber Compound',
        title: 'Prescott Moving Die Rheometer (MDR)',
        image: prescott,
        text: 'Cure kinetics, scorch time, and vulcanization characterization for rubber.',
        link: '/products',
      },
      {
        material: 'Polymers',
        title: 'Process Rheometers & RPA',
        image: '/images/Prescott.png',
        text: 'Rubber Process Analyzer (RPA) for dynamic property testing.',
        link: '/products',
      },
    ],
  },
  {
    id: 'viscosity-testing',
    name: 'Viscosity Testing',
    highlight: false,
    description: 'Mooney viscometers and melt flow index (MFI) polymer testing equipment.',
    subcategories: [
      {
        material: 'Raw Rubber',
        title: 'Mooney Viscometer MV-2000',
        image: prescott,
        text: 'Mooney viscosity, stress relaxation, and pre-vulcanization testing.',
        link: '/products',
      },
      {
        material: 'Thermoplastics',
        title: 'Melt Flow Indexer (MFI/MFR)',
        image: alpha,
        text: 'Volumetric and mass melt flow rate measurement for plastics.',
        link: '/products',
      },
    ],
  },
  {
    id: 'specific-gravity-weighing',
    name: 'Specific Gravity, Weighing Measurement',
    highlight: false,
    description: 'Hydrostatic balances and precision density determination instruments.',
    subcategories: [
      {
        material: 'Rubber & Plastics',
        title: 'Automatic Specific Gravity Densimeter',
        image: '/images/Man with machine.png',
        text: 'Direct digital specific gravity reading for solid rubber & polymer samples.',
        link: '/products',
      },
      {
        material: 'Laboratory QC',
        title: 'Precision Micro Balances & Hydrostatic Kit',
        image: nic,
        text: 'High-accuracy laboratory density kit traceable to ISO standards.',
        link: '/products',
      },
    ],
  },
  {
    id: 'small-punch-creep-testing',
    name: 'Small Punch Creep Testing',
    highlight: false,
    description: 'Miniature disc specimen creep rupture and localized mechanical testing.',
    subcategories: [
      {
        material: 'Nuclear & Power',
        title: 'Small Punch Creep Test Rig',
        image: '/images/Unconventional Testing.png',
        text: 'Evaluation of localized creep strain using 8mm x 0.5mm disc samples.',
        link: '/products',
      },
      {
        material: 'Alloys & Welds',
        title: 'Micro-Mechanical Punch Tester',
        image: up50,
        text: 'Yield strength & ductility assessment on miniature component samples.',
        link: '/products',
      },
    ],
  },
  {
    id: 'flexural-testing',
    name: 'Flexural Testing',
    highlight: false,
    description: '3-point and 4-point bending flexural strength and modulus fixtures.',
    subcategories: [
      {
        material: 'Composite / Wood',
        title: '3-Point Bend Flexural Fixture',
        image: em400,
        text: 'Flexural strength & modulus determination for fiber composites & plastics.',
        link: '/products',
      },
      {
        material: 'Metal & Ceramics',
        title: 'Guided 4-Point Bending Rig',
        image: mega,
        text: 'High-stiffness bending evaluation for structural ceramics & alloys.',
        link: '/products',
      },
    ],
  },
  {
    id: 'instrumented-hardness-testing',
    name: 'Instrumented Hardness Testing',
    highlight: false,
    description: 'Depth-sensing indentation (IIT) recording load-displacement curves.',
    subcategories: [
      {
        material: 'Engineered Metals',
        title: 'Instrumented Micro-Indentation System',
        image: up50,
        text: 'Continuous depth-sensing hardness and elastic indentation modulus.',
        link: '/products',
      },
      {
        material: 'Coatings & Polymers',
        title: 'Automated Micro Vickers IIT',
        image: irhdMicro,
        text: 'High-precision micro hardness mapping on surface layers.',
        link: '/products',
      },
    ],
  },
  {
    id: 'nano-indentation-hardness-testing',
    name: 'Nano Indentation Hardness Testing',
    highlight: false,
    description: 'Nanometer-resolution load and displacement surface property analysis.',
    subcategories: [
      {
        material: 'Thin Films',
        title: 'Nano-Indenter & Scratch Tester',
        image: '/images/Unconventional Testing.png',
        text: 'Nanohardness, Youngs modulus, and film adhesion measurement.',
        link: '/products',
      },
      {
        material: 'Nanomaterials',
        title: 'Atomic-Scale Hardness Tester',
        image: '/images/Fisher.png',
        text: 'Ultra-low load nano-indentation for semiconductor & optical coatings.',
        link: '/products',
      },
    ],
  },
  {
    id: 'coating-thickness-measurement',
    name: 'Coating Thickness Measurement',
    highlight: false,
    description: 'Fischer magnetic induction and eddy-current coating thickness meters.',
    subcategories: [
      {
        material: 'Plated Metals',
        title: 'Fischer Coating Thickness Gauge',
        image: '/images/Fisher.png',
        text: 'Non-destructive coating thickness gauge for paint, zinc, & chrome.',
        link: '/products',
      },
      {
        material: 'Substrates',
        title: 'Dual-Probe Thickness Meter',
        image: durometer,
        text: 'Ferrous and non-ferrous substrate automatic probe switching.',
        link: '/products',
      },
    ],
  },
  {
    id: 'abrasion-resilience-testing',
    name: 'Abrasion, Resilience Testing',
    highlight: false,
    description: 'DIN rubber abrasion resistance and Schob rebound resilience meters.',
    subcategories: [
      {
        material: 'Tire & Conveyor Rubber',
        title: 'DIN Rotary Drum Abrasion Tester',
        image: '/images/Hilde Brand.png',
        text: 'Volume loss abrasion resistance measurement for vulcanized rubber.',
        link: '/products',
      },
      {
        material: 'Elastomer Foam',
        title: 'Schob Rebound Resilience Pendulum',
        image: irhdMicro,
        text: 'Elastic rebound elasticity and energy absorption testing.',
        link: '/products',
      },
    ],
  },
  {
    id: 'temperature-testing',
    name: 'Temperature Testing',
    highlight: false,
    description: 'Environmental thermal chambers (-70°C to +300°C) for tensile & hardness.',
    subcategories: [
      {
        material: 'All Materials',
        title: 'Form+Test Environmental Chamber',
        image: '/images/Form+Test.png',
        text: 'Temperature-controlled material testing in high & sub-zero conditions.',
        link: '/products',
      },
      {
        material: 'Polymers',
        title: 'Thermal Aging Test Oven',
        image: em400,
        text: 'Precision forced-convection heat degradation & aging ovens.',
        link: '/products',
      },
    ],
  },
  {
    id: 'impact-testing',
    name: 'Impact Testing',
    highlight: false,
    description: 'Charpy, Izod pendulum, and drop-weight impact toughness evaluation.',
    subcategories: [
      {
        material: 'Metals & Alloys',
        title: 'Pendulum Impact Tester (Charpy/Izod)',
        image: mega,
        text: '300J / 500J notched specimen impact energy absorption tester.',
        link: '/products',
      },
      {
        material: 'Polymers & Composites',
        title: 'Instrumented Drop Tower Impact Rig',
        image: '/images/material-testing-core.jpg',
        text: 'Low & high energy drop weight impact energy recording system.',
        link: '/products',
      },
    ],
  },
];
