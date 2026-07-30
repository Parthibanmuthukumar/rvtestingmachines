import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const inputJpg = path.join(projectRoot, 'src', 'assets', 'images', 'RVTMPL LOGO_page-0001.jpg');
const outputPng1 = path.join(projectRoot, 'src', 'assets', 'images', 'logo_transparent.png');
const outputPng2 = path.join(projectRoot, 'public', 'logo.png');
const outputPng3 = path.join(projectRoot, 'public', 'favicon.png');

async function processLogo() {
  if (!fs.existsSync(inputJpg)) {
    console.error('Input image not found:', inputJpg);
    return;
  }

  // Read image raw pixel data
  const { data, info } = await sharp(inputJpg)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  // Convert near-white background pixels to transparent
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is near-white (background)
    if (r > 225 && g > 225 && b > 225) {
      data[i + 3] = 0; // Alpha transparent
    }
  }

  // Create clean transparent PNG
  const transparentBuffer = await sharp(data, {
    raw: { width, height, channels }
  })
    .trim({ threshold: 10 })
    .png()
    .toBuffer();

  fs.writeFileSync(outputPng1, transparentBuffer);
  fs.writeFileSync(outputPng2, transparentBuffer);
  fs.writeFileSync(outputPng3, transparentBuffer);

  console.log('Transparent PNG logo generated successfully at:');
  console.log('1.', outputPng1);
  console.log('2.', outputPng2);
  console.log('3.', outputPng3);
}

processLogo().catch(console.error);
