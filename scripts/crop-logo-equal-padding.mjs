import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const inputJpg = path.join(projectRoot, 'src', 'assets', 'images', 'RVTMPL LOGO_page-0001.jpg');
const outputPng1 = path.join(projectRoot, 'src', 'assets', 'images', 'logo_equal_padding.png');
const outputPng2 = path.join(projectRoot, 'public', 'logo.png');

async function processLogoWithEqualPadding() {
  if (!fs.existsSync(inputJpg)) {
    console.error('Input image not found:', inputJpg);
    return;
  }

  // 1. Trim all excess surrounding white space to get the tight emblem bounding box
  const trimmedBuffer = await sharp(inputJpg)
    .trim({ threshold: 15 })
    .toBuffer();

  // Get trimmed dimensions
  const metadata = await sharp(trimmedBuffer).metadata();
  const maxDim = Math.max(metadata.width, metadata.height);

  // 2. Extend with equal white padding on all 4 sides (top, bottom, left, right)
  const paddingAmount = Math.round(maxDim * 0.15); // 15% equal margin on all sides
  
  const paddedBuffer = await sharp(trimmedBuffer)
    .extend({
      top: paddingAmount,
      bottom: paddingAmount,
      left: paddingAmount,
      right: paddingAmount,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(outputPng1, paddedBuffer);
  fs.writeFileSync(outputPng2, paddedBuffer);

  console.log('Equal padding logo PNG generated successfully at:\n1.', outputPng1, '\n2.', outputPng2);
}

processLogoWithEqualPadding().catch(console.error);
