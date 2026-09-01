import consultationImg from '../assets/images/technical_consultation_advisory.jpg';

export const consultationIntro =
  'Our senior consultation team provides technical guidance to help you select the ideal testing systems, validate ASTM/ISO test methods, and maintain ISO/IEC 17025 compliance — from initial specification to installation, operator training, and calibration.';

export const consultationFeatureData = {
  image: consultationImg,
  badge: 'Expert Technical Consultation & Advisory',
  title: 'Comprehensive Material Testing & Laboratory Advisory',
  description:
    'Navigating complex testing standards and selecting high-precision equipment requires specialized industry domain knowledge. RVTM & Maeon laboratories provide technical consultancy for polymers, rubbers, elastomers, and metals to ensure your testing procedures deliver repeatable, accurate, and internationally recognized results.',
  bulletPoints: [
    'ASTM, ISO, DIN, and JIS testing method selection & validation.',
    'Custom fixture design & load cell capacity optimization.',
    'Material failure diagnosis & batch-to-batch variation analysis.',
    'ISO/IEC 17025 quality system alignment & audit preparation.',
  ],
};

export const consultationServices = [
  {
    id: 1,
    title: 'Method Development & Standard Compliance',
    icon: 'document',
    description:
      'Specialized guidance for setting up ASTM D2240 (Shore Hardness), ASTM D1415 (IRHD), ASTM D5289 (MDR Cure Kinetics), ASTM D1646 (Mooney Viscometer), and ASTM D412 / ISO 37 (Tensile & Elongation).',
    standards: 'ASTM D2240, ASTM D1415, ASTM D5289, ISO 37',
  },
  {
    id: 2,
    title: 'Laboratory Setup & Equipment Selection',
    icon: 'settings',
    description:
      'Tailored recommendations for force capacities, load cell ranges, thermal environmental chambers, and specialized grips matching your material parameters and budget.',
    standards: 'ISO 17025, ISO 9001 Alignment',
  },
  {
    id: 3,
    title: 'Failure Analysis & Troubleshooting',
    icon: 'search',
    description:
      'In-depth technical diagnosis of polymer degradation, unexpected specimen failure, cure curve anomalies, and batch-to-batch physical property variations.',
    standards: 'Polymer & Metal Microstructure Analysis',
  },
  {
    id: 4,
    title: 'Calibration & QA Planning',
    icon: 'award',
    description:
      'ISO/IEC 17025 compliant calibration schedules, measurement uncertainty budgets, and quality control audit preparation for high-reliability testing.',
    standards: 'Traceable to National & International Standards',
  },
];

export const consultationProcessSteps = [
  {
    step: '01',
    title: 'Initial Needs Assessment',
    description: 'We evaluate your target materials, operational parameters, required load ranges, and target testing standards.',
  },
  {
    step: '02',
    title: 'Method & Spec Blueprinting',
    description: 'Our engineers define precise test protocols, fixture requirements, and machine specifications for optimal accuracy.',
  },
  {
    step: '03',
    title: 'Implementation & Training',
    description: 'Hands-on laboratory setup, software calibration configuration, and operator guidance to ensure repeatable testing.',
  },
  {
    step: '04',
    title: 'Ongoing Review & Audit',
    description: 'Continuous technical assistance, periodic calibration reviews, and assistance with standard updates.',
  },
];

export const consultationSectors = [
  'Rubber & Elastomers Processing',
  'Automotive & Transportation Parts',
  'Aerospace & Defense Components',
  'Polymers & Thermoplastics R&D',
  'Metals & Structural Metallurgy',
  'Academic & Third-Party Test Labs',
];

export const consultationStats = [
  { value: '10+', label: 'Years Technical Leadership' },
  { value: '500+', label: 'Testing Rigs Consulted' },
  { value: 'ISO/IEC 17025', label: 'Accredited Advisory' },
  { value: '100%', label: 'Standard Traceability' },
];
