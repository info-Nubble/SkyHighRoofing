"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Facebook, Menu, X, Phone } from "lucide-react";

const NAME_MAIN = "Sky High Roofing";
const NAME_SUB = "& General Contracting";
const PHONE = "(207) 451-3163";
const PHONE_RAW = "+12074513163";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service Area", href: "/#service-area" },
  { label: "Contact", href: "/#contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Before/After", href: "/before-after" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMark, setShowMark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // If the logo-mark file doesn't exist, hide it cleanly
  useEffect(() => {
    // optional: comment out if you know the file exists
    const img = new window.Image();
    img.onload = () => setShowMark(true);
    img.onerror = () => setShowMark(false);
    img.src = "/logo-mark.png";
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/5 transition ${
        scrolled
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          : "bg-white/85 backdrop-blur"
      }`}
    >
      <div className="container">
        <div className="grid h-16 grid-cols-[auto,1fr,auto] items-center gap-2 md:h-20 md:gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {showMark && (
              <Image
                src="/logo-mark.png"
                alt="Sky High"
                width={28}
                height={28}
                className="rounded-sm"
                priority
              />
            )}
            <div className="leading-tight">
              <div className="text-sm md:text-base font-bold text-sky-900 tracking-tight truncate max-w-[12rem] md:max-w-none">
                {NAME_MAIN}
              </div>
              <div className="hidden sm:block text-[11px] md:text-xs text-neutral-600">
                {NAME_SUB}
              </div>
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center justify-center overflow-x-auto whitespace-nowrap px-1 md:px-2"
            aria-label="Primary"
          >
            <ul className="flex flex-nowrap items-center gap-5 md:gap-6 text-[15px] text-neutral-800">
              {NAV.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link href={item.href} className="transition-colors hover:text-sky-700">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="shrink-0">
                <a
                  href="https://www.facebook.com/skyhighgeneralcontracting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neutral-700 hover:text-sky-700"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-2 md:gap-3 shrink-0">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-100"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call {PHONE}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-sky-900 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Free Estimate
            </Link>
          </div>

          <div className="flex md:hidden items-center justify-end gap-2">
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label={`Call ${PHONE}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-900 shadow-sm"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white shadow-sm"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[70] w-[86%] max-w-sm overflow-y-auto border-l border-black/10 bg-white shadow-xl">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="grid gap-1 px-3 pb-4">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-neutral-900 hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://www.facebook.com/skyhighgeneralcontracting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-neutral-900 hover:bg-neutral-100"
              >
                <span className="inline-flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </span>
              </a>

              <div className="mx-3 mt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="rounded-lg bg-teal px-4 py-3 text-center font-semibold text-navy shadow-sm"
                >
                  Call
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-sky-900 px-4 py-3 text-center font-semibold text-white shadow-sm"
                >
                  Estimate
                </Link>
              </div>

              <div className="px-3 pb-6 pt-2 text-center text-xs text-neutral-500">
                {PHONE} • Maine Seacoast
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
