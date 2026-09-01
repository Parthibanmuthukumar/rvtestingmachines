import durometerHDD2 from '../assets/images/docx_products/docx_digital_durometer_hdd2.jpg';
import thicknessGauge from '../assets/images/docx_products/docx_thickness_gauge_htga.jpg';
import mdrRheometer from '../assets/images/docx_products/docx_moving_die_rheometer.png';
import mooneyViscometer from '../assets/images/docx_products/docx_mooney_viscometer.png';
import metalHardness from '../assets/images/docx_products/docx_metal_hardness_testers.jpg';
import nanoIndentation from '../assets/images/docx_products/docx_nano_indentation_system.png';
import utmTypeEM from '../assets/images/docx_products/docx_utm_type_em.png';
import doliControllerBox from '../assets/images/docx_products/doli_edci_controller_box.jpg';

export const productsIntro =
  'RV Testing Machines Private Limited is a leading manufacturer and supplier of high-quality Material Testing Machines based in Chennai, India. Our product range includes advanced instruments sourced from reputed Indian manufacturers and international brands from Europe, the UK, and Asia.';

export const productItems = [
  {
    id: 'rubber-durometer-hdd2',
    category: 'Hardness Testing',
    title: 'Digital Durometer HDD-2 & IRHD Micro',
    description:
      'Precision Shore A/D and Micro IRHD hardness measurement for rubber, O-rings, and polymers.',
    image: durometerHDD2,
    features: [
      'Digital Shore A & Shore D measurement',
      'High repeatability for QC and R&D labs',
      'Ergonomic handheld & stand-compatible design',
      'Conforms to ASTM D2240, ISO 868 standards',
    ],
  },
  {
    id: 'rubber-irhd-micro',
    category: 'Coating Thickness Measurement',
    title: 'Thickness Gauge for Rubber',
    description:
      'Precision thickness gauge for rubber, elastomeric sheets, and films.',
    image: thicknessGauge,
    features: [
      'Digital thickness measurement for rubber & polymers',
      'Specialized anvil and weight assembly',
      'High-accuracy measurement for thin sheets and gaskets',
      'ISO/IEC 17025 accredited calibration support',
    ],
  },
  {
    id: 'rheometer-mdr',
    category: 'Rheology Testing',
    title: 'Moving Die Rheometer (MDR)',
    description:
      'Cure kinetics, scorch time, and vulcanization characterization for rubber compounds.',
    image: mdrRheometer,
    features: [
      'Precise cure curve and scorch time determination',
      'Sealed reaction chamber for repeatable torque data',
      'Automated data acquisition and reporting',
      'Essential for rubber compound formulation and QC',
    ],
  },
  {
    id: 'mooney-viscometer',
    category: 'Viscosity Testing',
    title: 'Mooney Viscometer',
    description:
      'Mooney viscosity, stress relaxation, and pre-vulcanization testing.',
    image: mooneyViscometer,
    features: [
      'Standard Large (L) and Small (S) rotors',
      'Automatic temperature control and calibration',
      'Mooney scorch and stress relaxation testing modes',
      'Complies with ISO 289 and ASTM D1646',
    ],
  },
  {
    id: 'metal-hardness-system',
    category: 'Hardness Testing',
    title: 'Metal - Hardness Tester',
    description:
      'High-precision hardness testing systems for engineered metals & alloys.',
    image: metalHardness,
    features: [
      'Direct & Indirect verification for Rockwell, Brinell, and Vickers',
      'Auto-Turret micro Vickers with high-definition optics',
      'HST Portable Leeb Hardness Tester for field testing',
      'Suitable for heat treatment plants, foundries, and R&D',
    ],
  },
  {
    id: 'fischer-nano-indentation',
    category: 'Nano Indentation Hardness Testing',
    title: 'Nano Indentation Hardness Testing System (Fischer)',
    description:
      'Nanohardness, Youngs modulus, and film adhesion measurement.',
    image: nanoIndentation,
    features: [
      'Sub-nanometer depth resolution',
      'Measures hardness & elastic modulus of thin films',
      'Automated matrix testing for coated surfaces',
      'High stability load frame and optical microscope',
    ],
  },
  {
    id: 'utm-type-em',
    category: 'Tensile / Compression Testing',
    title: 'Universal Testing Machine EM Series',
    description:
      'Electromechanical universal testing machine for precision load application.',
    image: utmTypeEM,
    features: [
      'High-stiffness dual-column load frame',
      'Precision load cell with 0.0001 mm displacement resolution',
      'Compatible with high-resolution extensometers and grips',
      'Windows-based data acquisition software',
    ],
  },
  {
    id: 'spares-accessories',
    category: 'Spares & DOLI Electronics',
    title: 'DOLI EDCi Digital Controller Unit',
    description:
      'High-precision 32-bit DSP digital measurement & closed-loop controller box featuring 10 kHz control rate, TEDS auto-sensor recognition, and multi-channel acquisition.',
    image: doliControllerBox,
    features: [
      '32-bit DSP with 10 kHz closed-loop control rate',
      'TEDS auto-sensor recognition and multi-channel acquisition',
      'PCIe / Ethernet real-time PC Test&Motion software connection',
      'Compatible with RMC handheld remotes with jog wheel',
    ],
  },
];
