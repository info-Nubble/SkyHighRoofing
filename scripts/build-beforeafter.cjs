// scripts/build-beforeafter.cjs
const fs = require("fs");
const path = require("path");

/**
 * Pair images in /public/before-after by filename:
 *   <key>_before.(jpg|png|webp|avif)
 *   <key>_after.(jpg|png|webp|avif)
 * Outputs: app/before-after/pairs.json
 */
(async () => {
  const root = process.cwd();
  const srcDir = path.join(root, "public", "before-after");
  const outDir = path.join(root, "app", "before-after");
  const outFile = path.join(outDir, "pairs.json");

  try {
    const entries = await fs.promises.readdir(srcDir).catch((e) => {
      if (e.code === "ENOENT") throw new Error("Folder not found: /public/before-after");
      throw e;
    });

    const files = entries.filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f));
    const map = new Map(); // key -> { before, after }

    for (const file of files) {
      const lower = file.toLowerCase();
      const ext = path.extname(lower);
      const base = path.basename(lower, ext);

      const beforeMatch = base.match(/^(.*)[-_\.](before)$/);
      const afterMatch = base.match(/^(.*)[-_\.](after)$/);

      const webPath = `/${path.posix.join("before-after", file)}`;

      if (beforeMatch) {
        const key = beforeMatch[1];
        const cur = map.get(key) || {};
        cur.before = webPath;
        map.set(key, cur);
      } else if (afterMatch) {
        const key = afterMatch[1];
        const cur = map.get(key) || {};
        cur.after = webPath;
        map.set(key, cur);
      }
    }

    const pairs = [];
    for (const [key, val] of map.entries()) {
      if (val.before && val.after) {
        const label = key.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        pairs.push({ key, before: val.before, after: val.after, label });
      }
    }

    await fs.promises.mkdir(outDir, { recursive: true });
    await fs.promises.writeFile(outFile, JSON.stringify(pairs, null, 2), "utf8");

    console.log(`✅ Wrote ${pairs.length} pair(s) → ${path.relative(root, outFile)}`);
    if (!pairs.length) {
      console.log("ℹ️ Tip: name files like 'ridge_before.jpg' + 'ridge_after.jpg' in /public/before-after");
    }
  } catch (err) {
    console.error("❌ import-beforeafter failed:", err.message || err);
    process.exit(1);
  }
})();
