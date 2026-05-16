import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function stripMotionDiv(content) {
  return content.replace(/<\/?motion\.motion.div/g, (m) => m.replace('motion.', ''));
}

// Fix files that accidentally got motion.div instead of div
for (const rel of ['src/pages/Contact.jsx', 'src/pages/Consultation.jsx', 'src/App.jsx']) {
  const path = join(root, rel);
  let content = readFileSync(path, 'utf8');
  content = content.replace(/<motion\.motion.div/g, '<div').replace(/<\/motion\.motion.div>/g, '</motion.div>');
  content = content.replace(/<motion\.motion.div/g, '<div').replace(/<\/motion\.motion.div>/g, '</motion.div>');
  content = content.replace(/<motion\.div/g, '<motion.div').replace(/<\/motion\.div>/g, '</motion.div>');
  // actual fix:
  content = content.replace(/<motion\.div/g, '<div').replace(/<\/motion\.motion.div>/g, '</motion.div>');
  writeFileSync(path, content);
  console.log('fixed', rel);
}
