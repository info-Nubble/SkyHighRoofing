// scripts/build-beforeafter.ts
import { promises as fs } from "fs";
import path from "path";

type Pair = {
  key: string;           // e.g., "ridge-house"
  before: string;        // web path, e.g., "/before-after/ridge-house_before.jpg"
  after: string;         // web path, e.g., "/before-after/ridge-house_after.jpg"
  label?: string;        // optional pretty label from filename
};

(async () => {
  const root = process.cwd();
  const dir = path.join(root, "public", "before-after");
  const outDir = path.join(root, "app", "before-after");
  const outFile = path.join(outDir, "pairs.json");

  try {
    const items = await fs.readdir(dir);
    const files = items.filter(f =>
      /\.(png|jpe?g|webp|avif)$/i.test(f)
    );

    // Map by "key" (filename without _before/_after and extension)
    const map = new Map<string, { before?: string; after?: string }>();

    for (const file of files) {
      const lower = file.toLowerCase();
      const ext = path.extname(lower);
      const base = path.basename(lower, ext);

      // Accept both key_before.* and key-after.* just in case
      const beforeMatch = base.match(/^(.*)[-_\.](before)$/);
      const afterMatch  = base.match(/^(.*)[-_\.](after)$/);

      if (beforeMatch) {
        const key = beforeMatch[1];
        const entry = map.get(key) ?? {};
        entry.before = `/${path.posix.join("before-after", file)}`;
        map.set(key, entry);
      } else if (afterMatch) {
        const key = afterMatch[1];
        const entry = map.get(key) ?? {};
        entry.after = `/${path.posix.join("before-after", file)}`;
        map.set(key, entry);
      }
    }

    const pairs: Pair[] = [];
    for (const [key, v] of map.entries()) {
      if (v.before && v.after) {
        // Optional: prettify label from key (replace dashes/underscores with spaces, title case)
        const label = key
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, ch => ch.toUpperCase());
        pairs.push({ key, before: v.before, after: v.after, label });
      }
    }

    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, JSON.stringify(pairs, null, 2), "utf8");

    console.log(`✅ Wrote ${pairs.length} before/after pair(s) → ${path.relative(root, outFile)}`);
    if (pairs.length === 0) {
      console.log(
        "ℹ️ Tip: Name files like 'kitchen_before.jpg' and 'kitchen_after.jpg' inside /public/before-after"
      );
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.error("❌ Folder not found: /public/before-after");
    } else {
      console.error(err);
    }
    process.exit(1);
  }
})();
