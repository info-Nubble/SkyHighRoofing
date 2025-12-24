// Server component: loads real images from /public/gallery, skips folders/placeholders.
import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

type Photo = { src: string; name: string };
const ALLOWED = /\.(jpe?g|png|webp|gif|avif)$/i;

async function walk(absDir: string, webBase: string, out: Photo[]) {
  const entries = await fs.readdir(absDir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(absDir, e.name);
    const web = `/${path.posix.join(webBase, e.name)}`;
    if (e.isDirectory()) {
      await walk(abs, path.posix.join(webBase, e.name), out);
    } else if (e.isFile() && ALLOWED.test(e.name)) {
      const stat = await fs.stat(abs).catch(() => null);
      if (!stat || stat.size < 1024) continue; // skip 0-byte/tiny placeholders
      out.push({ src: web, name: e.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") });
    }
  }
}

async function getRecent(limit = 6): Promise<Photo[]> {
  const root = path.join(process.cwd(), "public", "gallery");
  const out: Photo[] = [];
  try { await walk(root, "gallery", out); } catch {}
  return out.sort((a, b) => a.src.localeCompare(b.src)).slice(0, limit);
}

export default async function RecentProjects() {
  const photos = await getRecent(6);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-sky-900">Recent projects</h2>
          <p className="mt-2 text-neutral-700">
            A few of our local jobs around York &amp; Kittery. Pulled from your gallery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.length === 0 ? (
            <div className="col-span-full text-center text-neutral-600">
              No images found in <code className="font-mono">/public/gallery</code>.
            </div>
          ) : (
            photos.map((p, i) => (
              <article key={p.src} className="rounded-2xl bg-white ring-1 ring-black/5 shadow-md overflow-hidden">
                {/* Fixed aspect ratio keeps cards consistent */}
                <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={p.src}
                    alt={p.name || "Project photo"}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Local project</h3>
                  <p className="text-sm text-neutral-600">Installed by Sky High</p>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/gallery" className="inline-flex items-center rounded-lg bg-sky-900 px-4 py-2 text-white font-semibold hover:bg-sky-800">
            View full gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
