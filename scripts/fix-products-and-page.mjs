import fs from 'fs';

const categoriesCode = `import digitalDurometer from '../assets/images/products/digital_shore_durometer.jpg';
import analogDurometer from '../assets/images/products/analog_shore_durometer.jpg';
import durometerHDD2 from '../assets/images/products/digital_durometer_hdd2.jpg';
import irhdMicro from '../assets/images/products/irhd_micro_tester.jpg';
import centeringDevice from '../assets/images/products/centering_device.jpg';
import coatingThickness from '../assets/images/products/coating_thickness_gauge.jpg';
import thicknessMeasurement from '../assets/images/products/thickness_measurement.jpg';
import abrasionResilience from '../assets/images/products/abrasion_resilience_tester.jpg';
import compressionSet from '../assets/images/products/compression_set_apparatus.jpg';
import metalHardness from '../assets/images/products/metal_hardness_tester.jpg';
import metalCoating from '../assets/images/products/metal_coating_thickness.jpg';
import tensileCompression from '../assets/images/products/tensile_compression_machine.jpg';
import compressionTestingMachine from '../assets/images/products/compression_testing_machine.jpg';
import metalConsumables from '../assets/images/products/metal_hardness_consumables.jpg';
import rubberTestBlocks from '../assets/images/products/rubber_hardness_test_blocks.jpg';
import dumbbellCutter from '../assets/images/products/dumbbell_cutter_melinex.jpg';
import fatigueTesting from '../assets/images/products/fatigue_testing_machine.jpg';
import sparesLoadcells from '../assets/images/products/spares_loadcells.jpg';
import sparesExtensometers from '../assets/images/products/spares_extensometers.jpg';
import sparesGrips from '../assets/images/products/spares_grips.jpg';
import utmTypeEM from '../assets/images/products/utm_type_em.jpg';
import mdrRheometer from '../assets/images/products/moving_die_rheometer.jpg';
import mooneyViscometer from '../assets/images/products/mooney_viscometer.jpg';
import odrRheometer from '../assets/images/products/oscillating_disc_rheometer.jpg';
import volumetricCutter from '../assets/images/products/volumetric_sample_cutter.jpg';
import dmaAnalyser from '../assets/images/products/dynamic_mechanical_analyser.jpg';
import nanoIndentation from '../assets/images/products/nano_indentation_hardness.jpg';

export const INTRO_HIGHLIGHTS = [
  {
    id: 1,
    boldText: 'Expertised in Plastic & Rubber testing laboratory',
    normalText: 'for a wide range test parameters for your Plastics Materials, Elastomers, Polymers, and Metal Products in Maeon & RVTM laboratory. Polymer material testing analysis, Polymer Mechanical properties, Polymer Chemical Properties, Polymer electrical properties conducted covered many international standards.',
  },
  {
    id: 2,
    boldText: 'We provide you with cutting-edge polymer material testing',
    normalText: 'technology as well as unequaled experience and highly qualified personnel. Our polymer material testing ensures that your polymeric materials are safe and efficient to use, as well as in compliance with all applicable national and international standards.',
  },
  {
    id: 3,
    boldText: 'Plastic & Metal testing labs usually respond to the forces',
    normalText: 'they are subjected to, being deformed to a greater or lesser extent, and possibly ending up in breakage or yield failure.',
  },
  {
    id: 4,
    boldText: 'Plastic Material Testing Lab plays a critical role',
    normalText: 'in the life cycle of a polymer, from the raw material to the compound through to the semi-finished and finished product. Each stage has different test requirements, and each end user may require a different test solution depending on their role, whether it is in Product Development (R&D), Quality Control (QC), Testing Services (TS), or Research (R).',
  },
  {
    id: 5,
    boldText: 'Polymer material testing and plastic testing labs are among',
    normalText: "the most versatile materials on the planet, and they are employed in virtually every area of our life. They've changed the way consumer goods and industrial applications like aerospace, automotive, electronics, and packaging are made. Our scientists have the industry expertise to provide you with the information you need to advance product development, assure compliance, and launch a successful market launch.",
  },
  {
    id: 6,
    boldText: 'Plastics test equipment and accessories that meet ISO, ASTM, and JIS',
    normalText: 'plastics testing standards are provided from us with full calibration and technical support.',
  },
  {
    id: 7,
    boldText: 'We can assess how your products and services meet and exceed quality,',
    normalText: 'safety, sustainability, and criteria by bringing quality to life. We help you recognise and minimize inherent hazards in your polymer and plastics operations, supply chains, and business processes.',
  },
];

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
        image: durometerHDD2,
        text: 'Precision Shore A/D and Micro IRHD hardness measurement for rubber, O-rings, and polymers.',
        link: '/products#hardness-testing',
      },
      {
        material: 'Metal',
        title: 'Precision Hardness System UP-50 / Rockwell / Brinell',
        image: metalHardness,
        text: 'Industrial Rockwell, Vickers, Micro Vickers, and Brinell hardness testing systems for engineered metals & alloys.',
        link: '/products#hardness-testing',
      },
    ],
  },
  {
    id: 'acceleration-speed-testing',
    name: 'Acceleration / Speed Testing',
    highlight: false,
    description: 'Dynamic load rate and speed-controlled material behavior testing systems up to 60,000 rpm.',
    subcategories: [
      {
        material: 'Rubber & Plastics',
        title: 'High-Speed Velocity Testers',
        image: volumetricCutter,
        text: 'Dynamic strain rate evaluation for high-velocity material deformation.',
        link: '/products#acceleration-speed-testing',
      },
      {
        material: 'Metals & Alloys',
        title: 'Impact Speed Measurement Rigs',
        image: utmTypeEM,
        text: 'High-frequency load response and speed transducer testing systems.',
        link: '/products#acceleration-speed-testing',
      },
    ],
  },
  {
    id: 'displacement-measurement-testing',
    name: 'Displacement Measurement Testing',
    highlight: false,
    description: 'High-resolution optical & contact extensometer displacement measuring systems (0.0001 mm resolution).',
    subcategories: [
      {
        material: 'Elastomers',
        title: 'Long-Travel Extensometer',
        image: sparesExtensometers,
        text: 'Non-contact video & long-stroke optical displacement measurement up to 550 mm range.',
        link: '/products#displacement-measurement-testing',
      },
      {
        material: 'Structural Materials',
        title: 'LVDT & Strain Gauge Systems',
        image: sparesLoadcells,
        text: 'Micron-level displacement measurement for modulus and strain analysis.',
        link: '/products#displacement-measurement-testing',
      },
    ],
  },
  {
    id: 'fatigue-testing',
    name: 'Fatigue Testing',
    highlight: false,
    description: 'Cyclic load, flex-life, and endurance dynamic mechanical fatigue analyzers with DOLI controller.',
    subcategories: [
      {
        material: 'Rubber',
        title: 'De Mattia & Flex Fatigue Testers',
        image: fatigueTesting,
        text: 'Repeated flexural cracking & cut growth fatigue testing for elastomers.',
        link: '/products#fatigue-testing',
      },
      {
        material: 'Metal',
        title: 'Servo-Hydraulic Dynamic Fatigue System',
        image: fatigueTesting,
        text: 'High-cycle (HCF) and low-cycle (LCF) dynamic fatigue testing rigs with DOLI EDCi20 controller.',
        link: '/products#fatigue-testing',
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
        image: compressionSet,
        text: 'Long-term stress relaxation and compressive creep measurement.',
        link: '/products#creep-testing',
      },
      {
        material: 'Metal & Alloys',
        title: 'High-Temp Stress Rupture Creep Rig',
        image: utmTypeEM,
        text: 'Furnace-integrated creep rupture evaluation for aerospace & power metals.',
        link: '/products#creep-testing',
      },
    ],
  },
  {
    id: 'rheology-testing',
    name: 'Rheology Testing',
    highlight: false,
    description: 'Moving die rheometers (MDR), Oscillating Disc Rheometers (ODR), and viscoelastic analyzers.',
    subcategories: [
      {
        material: 'Rubber Compound',
        title: 'Moving Die Rheometer (MDR)',
        image: mdrRheometer,
        text: 'Cure kinetics, scorch time, and vulcanization characterization for rubber compounds.',
        link: '/products#rheology-testing',
      },
      {
        material: 'Polymers',
        title: 'Process Rheometers & ODR ALPHA 10-2000',
        image: odrRheometer,
        text: 'Rheoline Oscillating Disc Rheometer for dynamic property testing.',
        link: '/products#rheology-testing',
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
        title: 'Mooney Viscometer',
        image: mooneyViscometer,
        text: 'Mooney viscosity, stress relaxation, and pre-vulcanization testing.',
        link: '/products#viscosity-testing',
      },
      {
        material: 'Thermoplastics',
        title: 'Volumetric Sample Cutter & MFI',
        image: volumetricCutter,
        text: 'Volumetric sample preparation and melt flow rate measurement for plastics.',
        link: '/products#viscosity-testing',
      },
    ],
  },
  {
    id: 'specific-gravity-weighing',
    name: 'Specific Gravity, Weighing Measurement',
    highlight: false,
    description: 'Hydrostatic balances and precision density determination instruments up to 100kg.',
    subcategories: [
      {
        material: 'Rubber & Plastics',
        title: 'Automatic Specific Gravity Densimeter',
        image: digitalDurometer,
        text: 'Direct digital specific gravity reading for solid rubber & polymer samples.',
        link: '/products#specific-gravity-weighing',
      },
      {
        material: 'Laboratory QC',
        title: 'Precision Micro Balances & Hydrostatic Kit',
        image: thicknessMeasurement,
        text: 'High-accuracy laboratory density kit traceable to ISO standards.',
        link: '/products#specific-gravity-weighing',
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
        image: utmTypeEM,
        text: 'Evaluation of localized creep strain using 8mm x 0.5mm disc samples.',
        link: '/products#small-punch-creep-testing',
      },
      {
        material: 'Alloys & Welds',
        title: 'Micro-Mechanical Punch Tester',
        image: metalHardness,
        text: 'Yield strength & ductility assessment on miniature component samples.',
        link: '/products#small-punch-creep-testing',
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
        image: compressionTestingMachine,
        text: 'Flexural strength & modulus determination for fiber composites & plastics.',
        link: '/products#flexural-testing',
      },
      {
        material: 'Metal & Ceramics',
        title: 'Guided 4-Point Bending Rig',
        image: utmTypeEM,
        text: 'High-stiffness bending evaluation for structural ceramics & alloys.',
        link: '/products#flexural-testing',
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
        image: metalHardness,
        text: 'Continuous depth-sensing hardness and elastic indentation modulus.',
        link: '/products#instrumented-hardness-testing',
      },
      {
        material: 'Coatings & Polymers',
        title: 'Automated Micro Vickers IIT',
        image: irhdMicro,
        text: 'High-precision micro hardness mapping on surface layers.',
        link: '/products#instrumented-hardness-testing',
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
        title: 'Nano Indentation Hardness System',
        image: nanoIndentation,
        text: 'Nanohardness, Youngs modulus, and film adhesion measurement.',
        link: '/products#nano-indentation-hardness-testing',
      },
      {
        material: 'Nanomaterials',
        title: 'Atomic-Scale Hardness Tester',
        image: nanoIndentation,
        text: 'Ultra-low load nano-indentation for semiconductor & optical coatings.',
        link: '/products#nano-indentation-hardness-testing',
      },
    ],
  },
  {
    id: 'coating-thickness-measurement',
    name: 'Coating Thickness Measurement',
    highlight: false,
    description: 'Magnetic induction and eddy-current coating thickness meters.',
    subcategories: [
      {
        material: 'Plated Metals',
        title: 'Coating Thickness Pocket Gauge (MP0R-FP)',
        image: coatingThickness,
        text: 'Non-destructive coating thickness gauge for paint, zinc, & chrome.',
        link: '/products#coating-thickness-measurement',
      },
      {
        material: 'Substrates',
        title: 'Dual-Probe Thickness Meter',
        image: metalCoating,
        text: 'Ferrous and non-ferrous substrate automatic probe switching.',
        link: '/products#coating-thickness-measurement',
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
        image: abrasionResilience,
        text: 'Volume loss abrasion resistance measurement for vulcanized rubber.',
        link: '/products#abrasion-resilience-testing',
      },
      {
        material: 'Elastomer Foam',
        title: 'Schob Rebound Resilience Pendulum',
        image: abrasionResilience,
        text: 'Elastic rebound elasticity and energy absorption testing.',
        link: '/products#abrasion-resilience-testing',
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
        title: 'Environmental Thermal Chamber',
        image: utmTypeEM,
        text: 'Temperature-controlled material testing in high & sub-zero conditions.',
        link: '/products#temperature-testing',
      },
      {
        material: 'Polymers',
        title: 'Thermal Aging Test Oven',
        image: compressionTestingMachine,
        text: 'Precision forced-convection heat degradation & aging ovens.',
        link: '/products#temperature-testing',
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
        image: tensileCompression,
        text: '300J / 500J notched specimen impact energy absorption tester.',
        link: '/products#impact-testing',
      },
      {
        material: 'Polymers & Composites',
        title: 'Instrumented Drop Tower Impact Rig',
        image: utmTypeEM,
        text: 'Low & high energy drop weight impact energy recording system.',
        link: '/products#impact-testing',
      },
    ],
  },
];
`;

fs.writeFileSync('src/data/productCategoriesData.js', categoriesCode);
console.log('Fixed productCategoriesData.js - all brand logos replaced with real machine images!');
