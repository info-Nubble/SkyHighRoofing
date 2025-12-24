// app/components/StickyCTA.tsx
"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 rounded-lg bg-brand-lime px-4 py-3 font-semibold text-brand-black shadow-lg hover:bg-brand-white"
      >
        Free Estimate
      </Link>
    </div>
  );
}
