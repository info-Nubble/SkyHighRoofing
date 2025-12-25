// components/StickyBar.tsx
"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const PHONE_RAW = "+12074513163";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur md:hidden">
      <div className="container py-2">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-3 py-3 font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            Roofing Specialist
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-900 px-3 py-3 font-semibold text-white"
          >
            <Mail className="h-4 w-4" />
            Fast Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
