import nic from '../assets/images/NIC_29221.jpg';
import servicesPageImg from '../assets/images/service_calibration_machine.png';
import em400 from '../assets/images/EM-400.png';
import em10 from '../assets/images/EM-10 image 1.png';
import alpha from '../assets/images/ALPHA-3-3000-AD.png';

export const servicesIntro =
  'With regular maintenance, service and calibration, you can ensure your instruments run smoother for longer, and achieve the most reliable and accurate results.';

export const serviceOverview = {
  image: '/images/services and calibration page.png',
  paragraphs: [
    'With regular maintenance, service and calibration, you can ensure your instruments run smoother for longer, and achieve the most reliable and accurate results.',
    'RV Testing Machines Private Limited can service and calibrate a wide range of laboratory equipment in line with our ISO/IEC 17025 accreditation. Not limited to only our products, our highly skilled service engineers are also able to service and calibrate most rubber testing equipment, alongside general material testing instruments.',
  ],
};

export const comprehensiveSupport = {
  title: 'Comprehensive Support',
  subtitle: 'We can service and calibrate your instruments and equipment on demand. Support, service and calibration are available for:',
  bulletPoints: [
    'RV Testing Machines: All instruments and products',
    'Rheometers, Mooney Viscometers, Tensile Testers and associated equipment',
    'Mooney Viscometer & Cure Kinetics systems',
    'Hardness, temperature, density, and impact equipment',
    'Tensile Tester and load cell calibration',
  ],
};

export const calibrationServicesData = {
  title: 'Calibration Services',
  paragraphs: [
    'The calibration of force testing equipment can be performed in accordance with our NABL / ISO 17025 accreditation both in-house and at customer sites.',
    'All of our calibration procedures conform to our ISO 9001:2015 certification and all calibrations are traceable to national standards.',
    'We possess ISO/IEC 17025 accreditation for both tensile and compressive forces (NABL Cert No: CC – 4232).',
  ],
  rangesIntro: 'The range of tensile testing equipment varies greatly from industry to industry, but RV Testing Machines can cater for all types of equipment in the rubber, plastics and elastomers industry within the following ranges:',
  rangesList: [
    'Tension from 1N to 200kN',
    'Compression from 1N to 200kN',
  ],
  loadCellInfo: 'Individual load cells can also be calibrated along with special purpose test rigs and load systems in tension and compression. We can also offer verification of many types of extensometer, including mechanical, laser and optical systems.',
};

export const scopeOfAccreditation = [
  {
    category: 'Dimensional',
    items: [
      {
        parameter: 'Linear Encoder and Indicator',
        range: 'Up to 15mm; (15 to 240) mm; (15 to 300) mm',
        notes: 'Class A, B, C, D',
      },
    ],
  },
  {
    category: 'Mechanical',
    items: [
      {
        parameter: 'Dynamic Torque',
        range: '(1 to 80) dN.m',
        notes: 'Moving Die Rheometer (MDR) / Oscillating Disc Rheometer (ODR) testing',
      },
      {
        parameter: 'Hardness Testers',
        range: 'Shore A (10 to 90 HDA), Shore D (10 to 90 HDD), Micro IRHD',
        notes: 'Conforms to ISO 48, ASTM D2240, DIN 53505',
      },
      {
        parameter: 'Tension & Compression Force',
        range: '1N to 200kN (Class 0.5 & Class 1)',
        notes: 'Conforms to ISO 7500-1, ASTM E4, NABL CC-4232',
      },
      {
        parameter: 'Extensometer Verification',
        range: '0.0001 mm resolution (Up to 550 mm travel)',
        notes: 'Mechanical, laser, and optical video extensometers',
      },
    ],
  },
];

// Compatibility exports for Home page
export const calibrationSection = {
  title: 'Service and Calibration',
  paragraphs: [
    'With regular maintenance, service and calibration, you can ensure your instruments run smoother for longer, and achieve the most reliable and accurate results.',
    'RV Testing Machines Private Limited operates as an NABL accredited calibration laboratory (Certificate No: CC – 4232) providing traceable calibration for load cells, extensometers, hardness testers, and complete UTM systems in accordance with ISO/IEC 17025 requirements.',
  ],
  images: [nic],
};

export const serviceBlocks = [
  {
    id: 'installation',
    title: 'Installation & Commissioning',
    description:
      'Professional installation, electrical integration, and commissioning of universal testing machines, hardness testers, and specialized rubber testing systems.',
    images: [em400, em10],
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    description:
      'Scheduled maintenance programs to reduce downtime, extend machine life, and maintain measurement accuracy.',
    images: [alpha, servicesPageImg],
  },
];
