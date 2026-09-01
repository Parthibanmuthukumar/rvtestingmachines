import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeLogos() {
  const logoDir = 'src/assets/images/logos';
  const logos = fs.readdirSync(logoDir);
  for (const file of logos) {
    if (file.endsWith('.png')) {
      const filePath = path.join(logoDir, file);
      const originalSize = fs.statSync(filePath).size;
      const buf = await sharp(filePath)
        .resize(500, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9, quality: 85, adaptiveFiltering: true })
        .toBuffer();
      if (buf.length < originalSize) {
        fs.writeFileSync(filePath, buf);
        console.log(`✓ Optimized logo ${file}: ${(originalSize/1024).toFixed(0)}KB -> ${(buf.length/1024).toFixed(0)}KB`);
      }
    }
  }
}

async function optimizeLargeImages() {
  const largeFiles = [
    { file: 'src/assets/images/man_with_machine.png', maxWidth: 1600 },
    { file: 'src/assets/images/services_calibration_page.png', maxWidth: 1600 },
    { file: 'src/assets/images/docx_products/docx_utm_type_em.png', maxWidth: 1000 },
    { file: 'src/assets/images/docx_products/docx_utm_up100_ak2dh.png', maxWidth: 1000 },
    { file: 'src/assets/images/docx_products/docx_creep_testing_machine.png', maxWidth: 1000 },
    { file: 'src/assets/images/EM-10 image 1.png', maxWidth: 1000 },
    { file: 'src/assets/images/sl-1.png', maxWidth: 1400 },
    { file: 'src/assets/images/sl2.png', maxWidth: 1400 },
    { file: 'src/assets/images/sl3.png', maxWidth: 1400 }
  ];

  for (const item of largeFiles) {
    if (fs.existsSync(item.file)) {
      const originalSize = fs.statSync(item.file).size;
      const meta = await sharp(item.file).metadata();
      let pipeline = sharp(item.file);
      if (meta.width > item.maxWidth) {
        pipeline = pipeline.resize(item.maxWidth, null, { withoutEnlargement: true });
      }
      if (item.file.endsWith('.png')) {
        pipeline = pipeline.png({ compressionLevel: 9, quality: 85, adaptiveFiltering: true });
      } else {
        pipeline = pipeline.jpeg({ quality: 88, mozjpeg: true });
      }
      const buf = await pipeline.toBuffer();
      if (buf.length < originalSize) {
        fs.writeFileSync(item.file, buf);
        console.log(`✓ Optimized ${path.basename(item.file)}: ${(originalSize/1024).toFixed(0)}KB -> ${(buf.length/1024).toFixed(0)}KB`);
      }
    }
  }
}

async function run() {
  console.log('--- Optimizing Logos ---');
  await optimizeLogos();
  console.log('--- Optimizing Large Images ---');
  await optimizeLargeImages();
  console.log('Done optimizing images!');
}

run().catch(console.error);
