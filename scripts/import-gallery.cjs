
const fs = require('fs');
const path = require('path');
const srcDir = path.join(process.cwd(), 'gallery');
const dstDir = path.join(process.cwd(), 'public', 'gallery');
if (!fs.existsSync(srcDir)) { console.log('No local ./gallery folder found.'); process.exit(0); }
fs.mkdirSync(dstDir, { recursive: true });
const allowed = new Set(['.jpg','.jpeg','.png','.webp','.gif']);
const files = fs.readdirSync(srcDir).filter(f => allowed.has(path.extname(f).toLowerCase()));
for (const f of files) fs.copyFileSync(path.join(srcDir, f), path.join(dstDir, f));
console.log(`Imported ${files.length} file(s) into /public/gallery`);
