"use client";

import { CheckCircle, Phone, Mail } from "lucide-react";

const PHONE = "(207) 451-3163";
const PHONE_RAW = "+12074513163";

export function Hero() {
  return (
    <section className="hero-wrap">
      <div className="container">
        {/* KEY FIX: wider clamp */}
        <div className="mx-auto max-w-[90rem]">
          <div className="grid min-h-[60vh] items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            {/* Text */}
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">
                Maine Seacoast • Residential & Light Commercial
              </p>

              <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
                High-quality roofing,
                <br /> done right the first time.
              </h1>

              <p className="mt-4 max-w-xl text-white/85">
                From storm-tight shingle replacements to leak repairs and full tear-offs,
                Sky High Roofing protects Seacoast homes with craftsmanship you can trust.
              </p>

              <div className="mt-6 flex gap-3">
                <a href={`tel:${PHONE_RAW}`} className="btn btn-primary">
                  <Phone className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="/#contact" className="btn btn-ghost">
                  <Mail className="h-5 w-5" /> Request a Free Estimate
                </a>
              </div>

              <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Licensed & insured",
                  "CertainTeed shingle expertise",
                  "Ice & water shield",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative mx-auto max-w-[560px] w-full">
              <img
                src="/hero.jpg"
                alt="Roofing project"
                className="rounded-xl shadow-2xl"
              />
              <div className="badge absolute -top-3 -right-3">
                Family-run • Local pros
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave h-24 md:h-32" />
    </section>
  );
}
