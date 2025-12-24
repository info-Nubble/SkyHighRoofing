import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fs from "node:fs/promises";
import path from "node:path";

type Photo = { id: string; src: string; name: string };
const ALLOWED = /\.(jpe?g|png|webp|gif|avif)$/i;

async function walk(absDir: string, webBase: string, out: Photo[]) {
  const entries = await fs.readdir(absDir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(absDir, e.name);
    if (e.isDirectory()) {
      await walk(abs, path.posix.join(webBase, e.name), out);
      continue;
    }
    if (!e.isFile() || !ALLOWED.test(e.name)) continue;

    // Skip placeholders and zero/tiny files (< 1KB)
    const stat = await fs.stat(abs).catch(() => null);
    if (!stat || stat.size < 1024) continue;
    if (/^gallery[- _]?\d+/i.test(e.name)) continue;

    const web = `/${path.posix.join(webBase, e.name)}`;
    out.push({
      id: web,
      src: web,
      name: e.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
    });
  }
}

async function getLocalPhotos(): Promise<Photo[]> {
  const root = path.join(process.cwd(), "public", "gallery");
  const out: Photo[] = [];
  try { await walk(root, "gallery", out); } catch {}
  return out.sort((a, b) => a.src.localeCompare(b.src));
}

export const metadata = {
  title: "Project Gallery — Sky High Roofing",
  description: "A curated look at Sky High Roofing & General Contracting projects across the Maine Seacoast.",
};

export default async function GalleryPage() {
  const photos = await getLocalPhotos();

  return (
    <main className="min-h-screen bg-[#FBF4EA] text-neutral-900">
      <Header />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-sky-900">Project Gallery</h1>
            <p className="mt-3 text-neutral-700">Real residential &amp; light commercial work around the Maine Seacoast.</p>
          </div>

          <div className="mt-10">
            {/* @ts-expect-error Server/Client boundary */}
            <GalleryMasonry photos={photos} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const GalleryMasonry = (await import("@/components/GalleryMasonry")).default;
