export const metadata = {
  title: "Roofing Services | Sky High Roofing",
  description:
    "Roof replacement, repairs, ventilation, and storm damage solutions across the Maine Seacoast.",
};

const SERVICES = [
  {
    id: "replacement",
    title: "Roof replacement",
    desc: "Full tear-offs and re-roofs using premium materials installed to manufacturer specs.",
    bullets: [
      "Architectural shingles + ridge vent systems",
      "Underlayment, ice & water shield, flashing details",
      "Chimney/valley work and penetration sealing",
      "Cleanup and final walkthrough",
    ],
  },
  {
    id: "repairs",
    title: "Roof repair & leaks",
    desc: "Leak tracing and permanent repair—done right the first time.",
    bullets: [
      "Pipe boots, flashing, vent caps, skylight leaks",
      "Chimney, step flashing, and valley repairs",
      "Storm damage assessment",
      "Photos + clear repair recommendations",
    ],
  },
  {
    id: "metal-flat",
    title: "Metal & flat roofing",
    desc: "Solutions for select projects including standing seam and low-slope systems.",
    bullets: [
      "Standing seam metal roofing (select projects)",
      "EPDM / modified bitumen for low-slope areas",
      "Porch roofs and accent metal work",
      "Snow-belt and coastal durability considerations",
    ],
  },
  {
    id: "ventilation",
    title: "Ventilation & ice dam prevention",
    desc: "Balanced ventilation systems designed for New England winters.",
    bullets: [
      "Ridge vent / soffit strategies",
      "Ice dam mitigation planning",
      "Moisture + heat management",
      "Problem roof diagnostics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-sand/30">
      <div className="container py-14 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            Roofing services built for coastal Maine
          </h1>
          <p className="mt-5 text-neutral-700 text-lg">
            Replacements, repairs, and weather-driven protection—installed to spec,
            documented, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-sky-900 px-5 py-3 font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Request a free estimate
            </a>
            <a
              href="tel:+12074513163"
              className="inline-flex items-center rounded-lg border border-neutral-300 bg-white px-5 py-3 font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100"
            >
              Call (207) 451-3163
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft"
            >
              <h2 className="text-xl font-bold text-neutral-900">{s.title}</h2>
              <p className="mt-2 text-neutral-700">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-white p-6 border border-black/5 shadow-soft">
          <h2 className="text-xl font-bold text-neutral-900">What to expect</h2>
          <ol className="mt-4 grid gap-3 text-neutral-700 md:grid-cols-2">
            <li>
              <span className="font-semibold text-neutral-900">1) Quick intake</span>
              <div>Call or submit a request—we’ll confirm location + scope.</div>
            </li>
            <li>
              <span className="font-semibold text-neutral-900">2) On-site review</span>
              <div>We inspect, take notes/photos, and discuss options.</div>
            </li>
            <li>
              <span className="font-semibold text-neutral-900">3) Clear estimate</span>
              <div>Line-item scope, materials, timeline—no surprises.</div>
            </li>
            <li>
              <span className="font-semibold text-neutral-900">4) Clean execution</span>
              <div>Professional crew, protected property, cleanup, walkthrough.</div>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
