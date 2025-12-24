"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

type Photo = { id: string; src: string; name?: string };
const ALLOWED = /\.(jpe?g|png|webp|gif|avif)$/i;

export default function GalleryMasonry({ photos }: { photos: Photo[] }) {
  const valid = (photos || []).filter(p => p?.src && ALLOWED.test(p.src));
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex(i => Math.min(i + 1, valid.length - 1));
      if (e.key === "ArrowLeft") setIndex(i => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, valid.length]);

  if (!valid.length) {
    return <p className="text-center text-neutral-600">No images found in <code>/public/gallery</code>.</p>;
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valid.map((p, i) => (
          <figure key={p.id} className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-md transition hover:shadow-xl">
            <div
              className="relative w-full"
              style={{ aspectRatio: "4 / 3" }}
              onClick={() => { setIndex(i); setOpen(true); }}
            >
              <Image
                src={p.src}
                alt={p.name || "Project photo"}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority={i < 2}
              />
              {p.name ? (
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 opacity-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-white text-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.name}
                </figcaption>
              ) : null}
            </div>
          </figure>
        ))}
      </div>

      <Lightbox
        open={open}
        src={valid[index]?.src}
        caption={valid[index]?.name}
        onClose={() => setOpen(false)}
        onPrev={() => setIndex(i => Math.max(0, i - 1))}
        onNext={() => setIndex(i => Math.min(valid.length - 1, i + 1))}
        hasPrev={index > 0}
        hasNext={index < valid.length - 1}
      />
    </>
  );
}
