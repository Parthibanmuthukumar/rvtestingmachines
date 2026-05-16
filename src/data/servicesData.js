import em400 from '../assets/images/EM-400.png';
import alpha from '../assets/images/ALPHA-3-3000-AD.png';
import em10 from '../assets/images/EM-10 image 1.png';
import prescott from '../assets/images/prescott-mv.png';
import nabl from '../assets/images/nabl-logo.png';
import nic from '../assets/images/NIC_29221.jpg';

export const servicesIntro =
  'From installation and commissioning to preventive maintenance and performance validation, RVTM provides complete product service support for material testing machines across India.';

export const serviceBlocks = [
  {
    id: 'installation',
    title: 'Installation & Commissioning',
    description:
      'Professional installation, electrical integration, and commissioning of universal testing machines, hardness testers, and specialized rubber testing systems — ensuring your equipment is production-ready from day one.',
    images: [em400, em10],
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    description:
      'Scheduled maintenance programs to reduce downtime, extend machine life, and maintain measurement accuracy. Our technicians are trained on leading global testing brands.',
    images: [alpha, prescott],
  },
  {
    id: 'repair',
    title: 'Repair & Performance Validation',
    description:
      'Rapid fault diagnosis, component replacement, and post-repair validation to restore your testing systems to specification with minimal disruption to operations.',
    images: [prescott, em400],
  },
];

export const calibrationSection = {
  title: 'Accredited Calibration Services',
  description:
    'NABL accredited calibration laboratory (Certificate No: CC – 2858) providing traceable calibration for load cells, extensometers, hardness testers, and complete UTM systems in accordance with ISO/IEC 17025 requirements.',
  images: [nabl, nic],
  points: [
    'Traceable to national measurement standards',
    'On-site and in-laboratory calibration options',
    'Detailed calibration certificates and reports',
    'Annual maintenance contracts available',
  ],
};
