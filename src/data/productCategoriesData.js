import docxDurometerHDD2 from '../assets/images/docx_products/docx_digital_durometer_hdd2.jpg';
import hildebrandHdd2User from '../assets/images/hildebrand_hdd2_user.png';
import docxMetalHardness from '../assets/images/docx_products/docx_metal_hardness_testers.jpg';
import docxUtmUP100 from '../assets/images/docx_products/docx_utm_up100_ak2dh.png';
import docxUtmEM from '../assets/images/docx_products/docx_utm_type_em.png';
import docxAlpha10 from '../assets/images/docx_products/docx_compression_alpha10.png';
import docxTensileComp from '../assets/images/docx_products/docx_tensile_compression_machine.png';
import docxFatigue from '../assets/images/docx_products/docx_fatigue_testing_machine.png';
import docxCreep from '../assets/images/docx_products/docx_creep_testing_machine.png';
import docxMdr from '../assets/images/docx_products/docx_moving_die_rheometer.png';
import docxMfr from '../assets/images/docx_products/docx_mfr_tester.jpg';
import docxMooney from '../assets/images/docx_products/docx_mooney_viscometer.png';
import docxDma from '../assets/images/docx_products/docx_dma_analyser.jpg';
import docxNanoIndentation from '../assets/images/docx_products/docx_nano_indentation_system.png';
import docxCoatingMP0R from '../assets/images/docx_products/docx_coating_thickness_mp0r.jpg';
import docxThicknessHTGA from '../assets/images/docx_products/docx_thickness_gauge_htga.jpg';
import docxAbrasion from '../assets/images/docx_products/docx_abrasion_resilience.png';
import docxCompressionSet from '../assets/images/docx_products/docx_compression_set.jpg';
import docxVolumetricCutter from '../assets/images/docx_products/docx_volumetric_cutter.jpg';
import docxControllerExtensometer from '../assets/images/docx_products/docx_controller_extensometer.jpg';
import docxDiamondIndenters from '../assets/images/docx_products/docx_diamond_indenters.png';
import docxSpecificGravityDensimeter from '../assets/images/docx_products/docx_specific_gravity_densimeter.jpg';
import docxPrecisionMicroBalance from '../assets/images/docx_products/docx_precision_micro_balance.jpg';
import docxSmallPunchCreepRig from '../assets/images/docx_products/docx_small_punch_creep_rig.jpg';
import doliEdciOverview from '../assets/images/docx_products/doli_edci_overview.png';
import doliSystemIntegrationDiagram from '../assets/images/docx_products/doli_system_integration_diagram.png';
import doliClosedLoopSchematic from '../assets/images/docx_products/doli_closed_loop_schematic.png';
import doliEdciControllerBox from '../assets/images/docx_products/doli_edci_controller_box.jpg';

// Testing machine placeholder image for categories without specific document photos
const samplePlaceholder = '/images/sample-testingMachine.jpeg';

export const INTRO_HIGHLIGHTS = [
  {
    id: 1,
    boldText: 'Expertised in Plastic & Rubber testing laboratory',
    normalText: 'for a wide range test parameters for your Plastics Materials, Elastomers, Polymers, and Metal Products in Maeon & RVTM laboratory. Polymer material testing analysis, Polymer Mechanical properties, Polymer Chemical Properties, Polymer electrical properties conducted covered many international standards.',
  },
];

export const TESTING_CATEGORIES = [
  {
    id: 'hardness-testing',
    name: 'Hardness Testing',
    highlight: false,
    description: 'Shore A/D durometers, IRHD micro hardness, Rockwell, Brinell, Vickers, Micro Vickers & Rockwell Superficial testers.',
    subcategories: [
      {
        material: 'Rubber',
        title: 'Digital Durometer HDD-2 & IRHD Micro',
        image: docxDurometerHDD2,
        text: 'Precision Shore A/D and Micro IRHD hardness measurement for rubber, O-rings, and polymers.',
        link: '/products#hardness-testing',
      },
      {
        material: 'Metal',
        title: 'Metal - Hardness Tester',
        image: docxMetalHardness,
        text: 'High-precision hardness testing systems for engineered metals & alloys.',
        tags: [
          'Rockwell',
          'Brinell',
          'Vickers',
          'Micro Vickers',
          'Rockwell Superficial',
        ],
        link: '/products#hardness-testing',
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
        material: 'Tensile / Compression',
        title: 'Universal Testing Machine UP Series',
        image: docxUtmUP100,
        text: 'High-precision load cell UTM systems for tension, elongation, and material strength evaluation.',
        link: '/products#tensile-compression-testing',
      },
      {
        material: 'Tensile / Compression',
        title: 'Universal Testing Machine EM Series',
        image: docxUtmEM,
        text: 'Electromechanical universal testing machine for precision load application.',
        link: '/products#tensile-compression-testing',
      },
      {
        material: 'Compression Testing',
        title: 'Compression Testing Machine',
        image: docxAlpha10,
        text: 'Heavy-duty digital compression testing machine for structural material testing.',
        link: '/products#tensile-compression-testing',
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
        image: samplePlaceholder,
        text: 'Dynamic strain rate evaluation for high-velocity material deformation.',
        link: '/products#acceleration-speed-testing',
      },
      {
        material: 'Metals & Alloys',
        title: 'Impact Speed Measurement Rigs',
        image: samplePlaceholder,
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
        material: 'Elastomers & Metals',
        title: 'Controller and Extensometer',
        image: samplePlaceholder,
        text: 'High-precision crosshead displacement and strain extensometer measurement.',
        link: '/products#displacement-measurement-testing',
      },
      {
        material: 'Structural Materials',
        title: 'LVDT & Strain Gauge Systems',
        image: samplePlaceholder,
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
        material: 'Metal',
        title: 'Fatigue Testing Machine',
        image: docxFatigue,
        text: 'High-cycle (HCF) and low-cycle (LCF) dynamic fatigue testing rigs.',
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
        image: samplePlaceholder,
        text: 'Long-term stress relaxation and compressive creep measurement.',
        link: '/products#creep-testing',
      },
      {
        material: 'Metal & Alloys',
        title: 'Creep Testing Machine',
        image: docxCreep,
        text: 'Furnace-integrated long-term stress rupture creep testing machine.',
        link: '/products#creep-testing',
      },
    ],
  },
  {
    id: 'rheology-testing',
    name: 'Rheology Testing',
    highlight: false,
    description: 'Moving die rheometers (MDR), Melt Flow Rate (MFR) indexers, and viscoelastic analyzers.',
    subcategories: [
      {
        material: 'Rubber Compound',
        title: 'Moving Die Rheometer (MDR)',
        image: docxMdr,
        text: 'Cure kinetics, scorch time, and vulcanization characterization for rubber compounds.',
        link: '/products#rheology-testing',
      },
      {
        material: 'Thermoplastics & Polymers',
        title: 'Melt Flow Rate (MFR) Tester',
        image: docxMfr,
        text: 'Extrusion plastometer for Melt Mass-Flow Rate (MFR) and Melt Volume-Flow Rate (MVR) determination (ASTM D1238 & ISO 1133).',
        link: '/products#rheology-testing',
      },
      {
        material: 'Polymers & Elastomers',
        title: 'Dynamic Mechanical Analyser (DMA)',
        image: docxDma,
        text: 'Viscoelastic property analysis over temperature and frequency sweeps.',
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
        material: 'Rubber Compound',
        title: 'Mooney Viscometer',
        image: docxMooney,
        text: 'Mooney viscosity, stress relaxation, and pre-vulcanization testing.',
        link: '/products#viscosity-testing',
      },
      {
        material: 'Rubber Compound',
        title: 'Volumetric Sample Cutter',
        image: docxVolumetricCutter,
        text: 'Volumetric sample preparation and specimen cutter for rubber & plastics.',
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
        image: docxSpecificGravityDensimeter,
        text: 'Direct digital specific gravity reading for solid rubber & polymer samples.',
        link: '/products#specific-gravity-weighing',
      },
      {
        material: 'Laboratory QC',
        title: 'Precision Micro Balances & Hydrostatic Kit',
        image: docxPrecisionMicroBalance,
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
        image: docxSmallPunchCreepRig,
        text: 'Evaluation of localized creep strain using 8mm x 0.5mm disc samples.',
        link: '/products#small-punch-creep-testing',
      },
      {
        material: 'Alloys & Welds',
        title: 'Micro-Mechanical Punch Tester',
        image: samplePlaceholder,
        text: 'Yield strength & ductility assessment on miniature component samples.',
        link: '/products#small-punch-creep-testing',
      },
    ],
  },
  {
    id: 'fluxural-testing',
    name: 'Fluxural Testing',
    highlight: false,
    description: '3-point and 4-point bending flexural strength and modulus fixtures.',
    subcategories: [
      {
        material: 'Metal/Plastic/Composite',
        title: '3-Point Bend Flexural Fixture Testing Machines',
        image: samplePlaceholder,
        text: 'Flexural strength & modulus determination for fiber composites & plastics.',
        link: '/products#fluxural-testing',
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
        image: samplePlaceholder,
        text: 'Continuous depth-sensing hardness and elastic indentation modulus.',
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
        title: 'Nano Indentation Hardness Testing System (Fischer)',
        image: docxNanoIndentation,
        text: 'Nanohardness, Youngs modulus, and film adhesion measurement.',
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
        material: 'Metal',
        title: 'Coating Thickness Pocket Gauge MP0R-FP',
        image: docxCoatingMP0R,
        text: 'Non-destructive coating thickness gauge for paint, zinc, chrome, and electroplated layers.',
        link: '/products#coating-thickness-measurement',
      },
      {
        material: 'Rubber',
        title: 'Thickness Gauge for Rubber',
        image: docxThicknessHTGA,
        text: 'Precision thickness gauge for rubber, elastomeric sheets, and films.',
        link: '/products#coating-thickness-measurement',
      },
    ],
  },
  {
    id: 'abrasion-resilence-testing',
    name: 'Abrasion, Resilence Testing',
    highlight: false,
    description: 'DIN rubber abrasion resistance and Schob rebound resilience meters.',
    subcategories: [
      {
        material: 'Tire & Conveyor Rubber',
        title: 'Abrasion & Resilience Tester',
        image: docxAbrasion,
        text: 'Volume loss abrasion resistance measurement for vulcanized rubber.',
        link: '/products#abrasion-resilence-testing',
      },
      {
        material: 'Rubber',
        title: 'Compression Set Apparatus',
        image: docxCompressionSet,
        text: 'Permanent set determination under constant deflection.',
        link: '/products#abrasion-resilence-testing',
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
        image: samplePlaceholder,
        text: 'Temperature-controlled material testing in high & sub-zero conditions.',
        link: '/products#temperature-testing',
      },
      {
        material: 'Polymers',
        title: 'Thermal Aging Test Oven',
        image: samplePlaceholder,
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
        image: samplePlaceholder,
        text: '300J / 500J notched specimen impact energy absorption tester.',
        link: '/products#impact-testing',
      },
    ],
  },
  {
    id: 'spares',
    name: 'Spares & DOLI Electronics',
    highlight: true,
    description: 'Genuine DOLI Elektronik digital controllers (EDCi series), extensometer amplifiers, RMC handheld remotes, hardness diamond indenters, HRC test blocks & testing machine spare parts.',
    subcategories: [
      {
        material: 'DOLI Electronics',
        title: 'DOLI EDCi Digital Controller Unit',
        image: doliEdciControllerBox,
        text: 'High-precision 32-bit DSP digital measurement & closed-loop controller box (EDCi series) featuring 10 kHz control rate, TEDS auto-sensor recognition, Ethernet/USB connectivity, and multi-channel acquisition for load cells, extensometers, and encoders.',
        tags: ['DOLI EDCi20', 'DOLI EDCi50', '32-Bit DSP', 'Closed-Loop Control', 'PCIe Interface'],
        link: '/products#spares',
      },
      {
        material: 'DOLI Lineup',
        title: 'DOLI EDCi Controllers & RMC Remotes Lineup',
        image: doliEdciOverview,
        text: 'Manufacturer-independent testing machine control suite showing stacked DOLI EDCi controller modules, electronic PCIe interface cards, desktop control consoles, and ergonomic RMC manual remotes with emergency stop & digital jog wheel.',
        tags: ['EDCi Stack', 'RMC Remotes', 'Interface Cards', 'UTM Setup'],
        link: '/products#spares',
      },
      {
        material: 'System Architecture',
        title: 'DOLI Controller System Integration Architecture',
        image: doliSystemIntegrationDiagram,
        text: 'System integration architecture diagram showing closed-loop connection between DOLI EDCi controller, real-time PC Test&Motion software, precision strain extensometers, load cells, safety interlocks, and RMC remote control terminal.',
        tags: ['System Integration', 'Real-Time Acquisition', 'Test&Motion', 'Sensors & Extensometers'],
        link: '/products#spares',
      },
      {
        material: 'Control Schematic',
        title: 'DOLI Closed-Loop Control & Wiring Schematic',
        image: doliClosedLoopSchematic,
        text: 'Technical wiring schematic detailing closed-loop feedback loops between DOLI EDCi electronics, servo motor drive amplifiers, crosshead encoders, load cell sensors, and emergency safety circuits for dynamic & static testing machines.',
        tags: ['Closed-Loop Feedback', 'Safety Interlocks', 'Drive Control', 'Multi-Axis Interface'],
        link: '/products#spares',
      },
      {
        material: 'Hardness Spares',
        title: 'Diamond Indenters, Test Blocks & Durometer Spares',
        image: docxDiamondIndenters,
        text: 'ISO/NABL certified Rockwell diamond indenters, Micro Vickers indenters, HRC test blocks, durometer indenter points, dumbbell sample cutters, and replacement load cell cables.',
        tags: ['Diamond Indenters', 'HRC Test Blocks', 'Durometer Points', 'Sample Cutters'],
        link: '/products#spares',
      },
    ],
  },
];
