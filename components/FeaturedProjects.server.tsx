
import fs from 'node:fs/promises';
import path from 'node:path';

async function getFirstThree() {
  const dir = path.join(process.cwd(), 'public', 'gallery');
  try {
    const files = await fs.readdir(dir);
    const allowed = new Set(['.jpg','.jpeg','.png','.webp','.gif']);
    const imgs = files
      .filter(f => allowed.has(path.extname(f).toLowerCase()))
      .slice(0, 3)
      .map((f) => ({ src: `/gallery/${f}`, title: 'Local project', note: 'Installed by Sky High' }));
    return imgs;
  } catch { return []; }
}

export default async function FeaturedProjectsServer() {
  const cards = await getFirstThree();
  if (!cards.length) return null;

  return (
    <section id="projects" className="bg-sand/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-navy">Recent projects</h2>
          <p className="mt-3 text-neutral-700">
            A few of our local jobs around York &amp; Kittery. Pulled from your gallery.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article key={i} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{c.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
