import fs from 'fs';
import path from 'path';

function checkExactCase(filePath) {
  const parts = path.resolve(filePath).split(path.sep);
  let current = parts[0] + path.sep; // e.g. "C:\"
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (!fs.existsSync(current)) return false;
    const entries = fs.readdirSync(current);
    const exactMatch = entries.find(e => e === part);
    if (!exactMatch) {
      const caseInsensitiveMatch = entries.find(e => e.toLowerCase() === part.toLowerCase());
      return { expected: part, actual: caseInsensitiveMatch, dir: current };
    }
    current = path.join(current, part);
  }
  return true;
}

function findImports(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findImports(fullPath));
    } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('from') && (line.includes('.png') || line.includes('.jpg') || line.includes('.jpeg') || line.includes('.svg') || line.includes('.webp') || line.includes('.pdf'))) {
          const m = line.match(/from\s+['"]([^'"]+)['"]/);
          if (m) {
            const rel = m[1];
            const resolved = path.resolve(path.dirname(fullPath), rel);
            const caseCheck = checkExactCase(resolved);
            results.push({ file: fullPath, line: i + 1, importPath: rel, resolved, caseCheck });
          }
        }
      }
    }
  }
  return results;
}

const all = findImports('src');
const caseMismatches = all.filter(x => x.caseCheck !== true);
console.log('Total asset imports checked:', all.length);
console.log('Case mismatches:', caseMismatches.length);
if (caseMismatches.length > 0) {
  console.log('CASE MISMATCHES FOUND (these will fail on Linux hosting!):', JSON.stringify(caseMismatches, null, 2));
} else {
  console.log('✓ All image imports match exact casing on disk!');
}
