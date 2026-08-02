/** Builds 800+ unique SEO keywords for RV Testing Machines Private Limited (material testing industry) */

const BRAND = [
  'RV testing machines',
  'rv testing machines private limited',
  'RVTM',
  'RV Testing Machines Private Limited',
  'RV testing machines',
  'RV testing machines India',
  'RV testing machines Chennai',
];

const EQUIPMENT = [
  'universal testing machine',
  'UTM',
  'tensile testing machine',
  'compression testing machine',
  'hardness testing machine',
  'Rockwell hardness tester',
  'Brinell hardness tester',
  'Vickers hardness tester',
  'digital durometer',
  'Shore hardness tester',
  'IRHD hardness tester',
  'rubber testing machine',
  'metal testing machine',
  'impact testing machine',
  'fatigue testing machine',
  'flexural testing machine',
  'peel strength tester',
  'tear strength tester',
  'elongation tester',
  'material testing machine',
  'laboratory testing equipment',
  'industrial testing equipment',
  'quality testing equipment',
];

const RUBBER = [
  'rubber testing equipment',
  'rubber durometer',
  'rubber tensile test',
  'rubber compression test',
  'elastomer testing',
  'polymer testing machine',
  'O-ring testing',
  'rubber hardness test',
  'rubber IRHD test',
  'rubber quality control',
];

const METAL = [
  'metal tensile testing',
  'metal hardness testing',
  'steel testing machine',
  'alloy testing',
  'ferrous metal testing',
  'non ferrous metal testing',
  'sheet metal testing',
  'wire tensile testing',
  'tube compression testing',
];

const CALIBRATION = [
  'NABL calibration',
  'NABL accredited calibration',
  'ISO 17025 calibration',
  'ISO IEC 17025 calibration laboratory',
  'testing machine calibration',
  'UTM calibration',
  'hardness tester calibration',
  'force calibration',
  'load cell calibration',
  'displacement calibration',
  'traceable calibration',
  'periodic calibration',
  'annual calibration',
  'on-site calibration',
  'calibration certificate',
  'calibration lab India',
];

const SERVICES = [
  'testing machine service',
  'testing machine repair',
  'testing machine installation',
  'testing machine commissioning',
  'preventive maintenance',
  'AMC for testing machines',
  'spare parts testing machines',
  'technical support testing equipment',
  'after sales service UTM',
  'machine validation',
  'performance verification',
];

const STANDARDS = [
  'ASTM standards testing',
  'ISO standards material testing',
  'DIN standards testing',
  'IS standards material testing',
  'BS standards testing',
  'JIS standards testing',
];

const PARTNERS = [
  'Prescott testing machines',
  'Fischer testing equipment',
  'KOBELCO testing',
  'Nubateco',
  'CISAM testing machines',
  'UTM international',
];

const INDUSTRIES = [
  'automotive material testing',
  'aerospace material testing',
  'construction material testing',
  'pharma packaging testing',
  'textile testing laboratory',
  'plastic testing lab',
  'rubber manufacturing testing',
  'metal fabrication testing',
  'quality assurance laboratory',
  'R&D material testing',
];

const CITIES = [
  'Chennai',
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Coimbatore',
  'Ahmedabad',
  'Kolkata',
  'Tamil Nadu',
  'India',
];

const MODIFIERS = [
  'supplier',
  'manufacturer',
  'dealer',
  'distributor',
  'price',
  'cost',
  'quote',
  'near me',
  'for sale',
  'rental',
  'consultation',
  'training',
  'installation',
  'repair',
  'calibration',
  'service center',
  'authorized dealer',
  'best',
  'top',
  'professional',
  'industrial',
  'laboratory',
  'precision',
  'digital',
  'computerized',
  'fully automatic',
];

const LONG_TAIL = [
  'how to calibrate universal testing machine',
  'NABL calibration for tensile testing machine',
  'rubber hardness test procedure',
  'material testing lab setup India',
  'ISO 17025 accredited lab Chennai',
  'universal testing machine price India',
  'hardness tester calibration frequency',
  'tensile test sample preparation',
  'compression test fixture',
  'testing machine load cell replacement',
];

function add(set, phrase) {
  const cleaned = phrase.replace(/\s+/g, ' ').trim();
  if (cleaned.length > 2 && cleaned.length < 120) set.add(cleaned);
}

export function buildAllKeywords() {
  const set = new Set();

  [...BRAND, ...EQUIPMENT, ...RUBBER, ...METAL, ...CALIBRATION, ...SERVICES, ...STANDARDS, ...PARTNERS, ...INDUSTRIES, ...LONG_TAIL].forEach(
    (k) => add(set, k),
  );

  BRAND.forEach((b) => {
    CITIES.forEach((c) => add(set, `${b} ${c}`));
    EQUIPMENT.forEach((e) => add(set, `${b} ${e}`));
    CALIBRATION.forEach((cal) => add(set, `${b} ${cal}`));
  });

  EQUIPMENT.forEach((e) => {
    CITIES.forEach((c) => {
      add(set, `${e} ${c}`);
      add(set, `${e} in ${c}`);
    });
    MODIFIERS.forEach((m) => add(set, `${e} ${m}`));
    MODIFIERS.forEach((m) => CITIES.forEach((c) => add(set, `${e} ${m} ${c}`)));
    CALIBRATION.forEach((cal) => add(set, `${e} ${cal}`));
    SERVICES.forEach((s) => add(set, `${e} ${s}`));
  });

  RUBBER.forEach((r) => {
    MODIFIERS.forEach((m) => add(set, `${r} ${m}`));
    CITIES.forEach((c) => add(set, `${r} ${c}`));
  });

  METAL.forEach((m) => {
    MODIFIERS.forEach((mod) => add(set, `${m} ${mod}`));
    CITIES.forEach((c) => add(set, `${m} ${c}`));
  });

  CALIBRATION.forEach((cal) => {
    CITIES.forEach((c) => add(set, `${cal} ${c}`));
    INDUSTRIES.forEach((ind) => add(set, `${cal} ${ind}`));
  });

  SERVICES.forEach((s) => {
    CITIES.forEach((c) => add(set, `${s} ${c}`));
    EQUIPMENT.forEach((e) => add(set, `${s} ${e}`));
  });

  INDUSTRIES.forEach((ind) => {
    CITIES.forEach((c) => add(set, `${ind} ${c}`));
    EQUIPMENT.forEach((e) => add(set, `${e} for ${ind}`));
  });

  STANDARDS.forEach((std) => {
    EQUIPMENT.forEach((e) => add(set, `${e} ${std}`));
  });

  PARTNERS.forEach((p) => {
    CITIES.forEach((c) => add(set, `${p} ${c}`));
    MODIFIERS.forEach((m) => add(set, `${p} ${m}`));
  });

  // Extra combinations to exceed 800
  const verbs = ['buy', 'sell', 'supply', 'export', 'import', 'hire', 'book', 'schedule'];
  verbs.forEach((v) => {
    EQUIPMENT.forEach((e) => add(set, `${v} ${e} India`));
  });

  const years = ['2024', '2025', '2026'];
  years.forEach((y) => {
    EQUIPMENT.forEach((e) => add(set, `${e} ${y}`));
  });

  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
