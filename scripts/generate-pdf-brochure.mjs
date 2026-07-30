import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const publicDocsDir = path.join(projectRoot, 'public', 'documents');
if (!fs.existsSync(publicDocsDir)) {
  fs.mkdirSync(publicDocsDir, { recursive: true });
}

const pdfPath1 = path.join(publicDocsDir, 'RVTM_Service_and_Calibration_Brochure.pdf');
const pdfPath2 = path.join(projectRoot, 'public', 'rvtm_service_calibration_brochure.pdf');

const logoPath = path.join(projectRoot, 'src', 'assets', 'images', 'RVTMPL LOGO_page-0001.jpg');

function generateBrochure() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 36,
    autoFirstPage: true,
  });

  const stream1 = fs.createWriteStream(pdfPath1);
  const stream2 = fs.createWriteStream(pdfPath2);

  doc.pipe(stream1);
  doc.pipe(stream2);

  // Colors
  const navy = '#0f172a';
  const blue = '#1d4ed8';
  const gold = '#d97706';
  const darkText = '#1e293b';
  const grayText = '#475569';
  const lightBg = '#f8fafc';
  const borderGray = '#e2e8f0';

  // --- PAGE 1 ---

  // Top Header Banner
  doc.rect(0, 0, 595.28, 85).fill(navy);
  
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 36, 12, { height: 60 });
  }

  doc
    .fillColor('#ffffff')
    .fontSize(18)
    .font('Helvetica-Bold')
    .text('RV TESTING MACHINES PRIVATE LIMITED', 160, 20);

  doc
    .fillColor(gold)
    .fontSize(10)
    .font('Helvetica-Bold')
    .text('NABL ACCREDITED CALIBRATION LABORATORY — CERTIFICATE NO: CC-4232', 160, 44);

  doc
    .fillColor('#94a3b8')
    .fontSize(9)
    .font('Helvetica')
    .text('ISO/IEC 17025:2017 & ISO 9001:2015 Certified | Chennai, India', 160, 60);

  // Document Title Bar
  doc.rect(36, 100, 523.28, 36).fill(blue);
  doc
    .fillColor('#ffffff')
    .fontSize(13)
    .font('Helvetica-Bold')
    .text('SERVICE & CALIBRATION BROCHURE', 48, 112);

  // Section 1: Executive Overview
  doc
    .fillColor(navy)
    .fontSize(14)
    .font('Helvetica-Bold')
    .text('Service & Calibration Overview', 36, 150);

  doc
    .fillColor(darkText)
    .fontSize(9.5)
    .font('Helvetica')
    .text(
      'RV Testing Machines Private Limited is an ISO/IEC 17025 accredited calibration laboratory based in Chennai, India. With over 10 years of industrial testing expertise, we provide high-precision field servicing, preventive maintenance, multi-brand machine retrofits, and accredited calibration for material testing instruments across India.',
      36,
      170,
      { width: 523.28, align: 'left', lineGap: 3 }
    );

  // Section 2: Comprehensive Support Box (Framed Box)
  doc.rect(36, 220, 523.28, 155).fillAndStroke(lightBg, borderGray);
  
  doc
    .fillColor(navy)
    .fontSize(12)
    .font('Helvetica-Bold')
    .text('Comprehensive Support & Servicing Scope', 50, 232);

  doc
    .fillColor(grayText)
    .fontSize(9)
    .font('Helvetica')
    .text('Support, service and calibration are available on-demand for:', 50, 250);

  const bulletPoints = [
    'RV Testing Machines: Full servicing and calibration for all proprietary instruments.',
    'Rubber & Elastomer Testing Equipment: Rheometers (MDR/ODR), Mooney Viscometers, & Cure Kinetics.',
    'Hardness Systems: Digital & Analog Shore A/D Durometers, IRHD Micro Testers, Rockwell, Brinell, Vickers.',
    'Tensile & Compression Machines: Universal Testing Machines (UTM Type EM / Hydraulic) up to 1000 kN.',
    'Transducers & Accessories: Load cells, strain gauges, LVDTs, mechanical, optical, and video extensometers.',
    'Machine Retrofits & Upgrades: Integration of DOLI EDCi20 digital controllers & Windows data software.',
  ];

  let bY = 268;
  bulletPoints.forEach((pt) => {
    doc.fillColor(blue).fontSize(10).text('•', 52, bY);
    doc.fillColor(darkText).fontSize(8.5).font('Helvetica').text(pt, 64, bY, { width: 480 });
    bY += 16;
  });

  // Section 3: Calibration Services & Capabilities
  doc
    .fillColor(navy)
    .fontSize(14)
    .font('Helvetica-Bold')
    .text('Calibration Capabilities & Testing Ranges', 36, 390);

  doc
    .fillColor(darkText)
    .fontSize(9)
    .font('Helvetica')
    .text(
      'The calibration of force testing equipment can be performed in accordance with our NABL / ISO 17025 accreditation both in-house and at customer sites. All calibration procedures conform to ISO 9001:2015 standards and are 100% traceable to National Physical Laboratory (NPL) standards.',
      36,
      410,
      { width: 523.28, align: 'left', lineGap: 3 }
    );

  // Table of Accreditation & Ranges
  const tableTop = 460;
  doc.rect(36, tableTop, 523.28, 22).fill(navy);
  
  doc
    .fillColor('#ffffff')
    .fontSize(9)
    .font('Helvetica-Bold')
    .text('Parameter / Equipment', 44, tableTop + 6, { width: 180 })
    .text('Calibration Range', 230, tableTop + 6, { width: 160 })
    .text('Standard / Notes', 400, tableTop + 6, { width: 150 });

  const rows = [
    { param: 'Tension Force (UTM)', range: '1 N to 200 kN', notes: 'ISO 7500-1 / ASTM E4 (Class 0.5 & 1)' },
    { param: 'Compression Force', range: '1 N to 200 kN', notes: 'In-house & On-site calibration' },
    { param: 'Dynamic Torque (MDR/ODR)', range: '1 to 80 dN.m', notes: 'Moving Die & Oscillating Disc Rheometers' },
    { param: 'Rubber Hardness (Shore A/D)', range: '10 to 90 HDA / HDD', notes: 'ASTM D2240, ISO 48, DIN 53505' },
    { param: 'Micro IRHD Hardness', range: '30 to 100 IRHD', notes: 'O-Rings, thin seals, & gaskets' },
    { param: 'Extensometer Verification', range: '0.0001 mm resolution', notes: 'Up to 550 mm travel (ISO 9513)' },
    { param: 'Temperature Calibration', range: 'Ambient to 300°C', notes: 'Rheometer dies & heated platens' },
    { param: 'Crosshead Speed / LVDT', range: '0.01 to 1000 mm/min', notes: 'Displacement & speed transducers' },
  ];

  let rY = tableTop + 22;
  rows.forEach((row, i) => {
    const bg = i % 2 === 0 ? '#ffffff' : lightBg;
    doc.rect(36, rY, 523.28, 20).fillAndStroke(bg, borderGray);
    
    doc
      .fillColor(darkText)
      .fontSize(8)
      .font('Helvetica-Bold')
      .text(row.param, 44, rY + 5, { width: 180 });

    doc
      .fillColor(darkText)
      .fontSize(8)
      .font('Helvetica')
      .text(row.range, 230, rY + 5, { width: 160 });

    doc
      .fillColor(grayText)
      .fontSize(8)
      .font('Helvetica')
      .text(row.notes, 400, rY + 5, { width: 150 });

    rY += 20;
  });

  // Footer Card - Verified Contact Info
  doc.rect(36, 680, 523.28, 90).fillAndStroke(navy, borderGray);

  doc
    .fillColor(gold)
    .fontSize(10)
    .font('Helvetica-Bold')
    .text('RV TESTING MACHINES PRIVATE LIMITED — CONTACT & SERVICE DESK', 48, 692);

  doc
    .fillColor('#ffffff')
    .fontSize(8)
    .font('Helvetica')
    .text('Address: No. 1, 1st Floor, 2nd Cross Street, Rajiv Gandhi Nagar, Alapakkam, Porur, Chennai – 600116, TN, India.', 48, 710)
    .text('Phone / Mobile: +91 94441 08332 / +91 98404 90833', 48, 724)
    .text('Email: sales@rvtestingmachines.com | service@rvtestingmachines.com', 48, 738)
    .text('Website: www.rvtestingmachines.com | NABL Certificate No: CC-4232', 48, 752);

  doc.end();
  console.log('PDF brochure generated successfully at:\n1. ' + pdfPath1 + '\n2. ' + pdfPath2);
}

generateBrochure();
