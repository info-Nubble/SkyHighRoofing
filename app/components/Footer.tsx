// Footer component placeholder
// components/Footer.tsx
import Link from "next/link";

const PHONE = "(207) 451-3163";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold text-sky-900">Sky High Roofing</div>
            <div className="mt-1 text-sm text-neutral-600">&amp; General Contracting</div>
            <div className="mt-3 text-sm text-neutral-600">
              Licensed &amp; insured • Serving the Maine Seacoast
            </div>
            <div className="mt-3 text-sm text-neutral-800">
              <span className="font-semibold">Call:</span> {PHONE}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Company</div>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link className="hover:text-sky-700" href="/about">About</Link></li>
              <li><Link className="hover:text-sky-700" href="/services">Services</Link></li>
              <li><Link className="hover:text-sky-700" href="/service-area">Service Area</Link></li>
              <li><Link className="hover:text-sky-700" href="/reviews">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">Resources</div>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link className="hover:text-sky-700" href="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-sky-700" href="/before-after">Before / After</Link></li>
              <li><Link className="hover:text-sky-700" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-sky-700" href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Sky High Roofing &amp; General Contracting. All rights reserved.</div>
          <div>Built for performance • Built for trust</div>
        </div>
      </div>
    </footer>
  );
}
