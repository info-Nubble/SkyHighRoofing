"use client";

type Props = {
  open: boolean;
  src?: string;
  caption?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
};

export default function Lightbox({
  open,
  src,
  caption,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: Props) {
  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[85vh] max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption || "Project image"}
          className="max-h-[85vh] max-w-[92vw] rounded-xl shadow-2xl"
        />

        {caption ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-center text-white text-sm rounded-b-xl">
            {caption}
          </div>
        ) : null}

        {/* Controls */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm hover:bg-white"
        >
          Close
        </button>

        {hasPrev ? (
          <button
            aria-label="Previous"
            onClick={onPrev}
            className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm hover:bg-white"
          >
            ‹
          </button>
        ) : null}

        {hasNext ? (
          <button
            aria-label="Next"
            onClick={onNext}
            className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm hover:bg-white"
          >
            ›
          </button>
        ) : null}
      </div>
    </div>
  );
}
