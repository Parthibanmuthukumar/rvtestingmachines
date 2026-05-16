import durometer from '../assets/images/products/Digital-Durometer_HDD-2.jpg';
import irhdMicro from '../assets/images/products/IRHD_Micro.jpg';
import mega from '../assets/images/MEGA-11-350-SD.png';
import up50 from '../assets/images/UP-50-HK-2-DH.png';

export const productsIntro =
  'RV Testing Machines delivers precision material testing equipment for rubber, polymers, and metals — backed by accredited calibration, expert consultation, and nationwide technical support.';

export const productItems = [
  {
    id: 'rubber-durometer',
    category: 'Rubber Testing',
    title: 'Digital Durometer HDD-2',
    description:
      'High-precision digital durometer for Shore hardness measurement on rubber, elastomers, and flexible polymers. Ideal for production QC and laboratory compliance workflows.',
    image: durometer,
    features: [
      'Digital Shore A / D hardness measurement',
      'Repeatable results for QC laboratories',
      'Ergonomic design for high-volume testing',
      'Compatible with standard test blocks',
    ],
  },
  {
    id: 'rubber-irhd',
    category: 'Rubber Testing',
    title: 'IRHD Micro Hardness System',
    description:
      'Advanced IRHD micro hardness tester for thin rubber samples, O-rings, seals, and precision components requiring non-destructive evaluation.',
    image: irhdMicro,
    features: [
      'Micro IRHD hardness for thin specimens',
      'Specialized fixtures for O-rings and seals',
      'Stable loading for repeatable micro tests',
      'Laboratory-grade measurement accuracy',
    ],
  },
  {
    id: 'metal-utm',
    category: 'Metal Testing',
    title: 'MEGA-11 Universal Testing Machine',
    description:
      'Robust universal testing machine for tensile, compression, bend, and shear testing on metals, alloys, and structural materials in industrial environments.',
    image: mega,
    features: [
      'High-capacity tensile and compression testing',
      'Suitable for metals, alloys, and composites',
      'Precision load measurement and control',
      'Configurable fixtures for diverse applications',
    ],
  },
  {
    id: 'metal-hardness',
    category: 'Metal Testing',
    title: 'UP-50 Precision Hardness System',
    description:
      'Premium hardness testing solution for metals and engineered components, supporting reliable surface hardness evaluation across manufacturing sectors.',
    image: up50,
    features: [
      'Accurate metal hardness evaluation',
      'Industrial-grade build quality',
      'Fast setup for production environments',
      'Traceable calibration support available',
    ],
  },
];
