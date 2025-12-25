// app/about/page.tsx
export const metadata = {
  title: "About Sky High Roofing | Maine Seacoast",
  description:
    "Sky High Roofing is a Maine Seacoast roofing company focused on long-term solutions, manufacturer-spec installs, and accountability.",
};

export default function AboutPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-navy">
          Built on accountability, not shortcuts
        </h1>

        <p className="mt-6 text-neutral-700">
          Sky High Roofing exists for homeowners who want their roof done once — correctly.
          We’re built for high-stakes projects where workmanship, documentation, and
          manufacturer requirements matter.
        </p>

        <p className="mt-4 text-neutral-700">
          Coastal Maine weather is unforgiving. Ice dams, wind lift, and snow load expose weak
          installs fast. We build roofing systems designed specifically for New England conditions —
          with the details that protect the home long-term.
        </p>

        <div className="mt-10 rounded-2xl bg-sand/60 p-6 border border-black/5">
          <h2 className="text-lg font-semibold text-neutral-900">What makes us different</h2>
          <ul className="mt-4 space-y-2 text-neutral-700">
            <li>• Manufacturer-spec installation methods</li>
            <li>• Job documentation to support warranty &amp; inspections</li>
            <li>• One accountable company — start to finish</li>
            <li>• Systems designed for coastal New England weather</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900">Our promise</h2>
          <p className="mt-3 text-neutral-700">
            If we take the job, we own the result. Clear communication, professional crews, and
            workmanship that holds up years later — not just on install day.
          </p>
        </div>
      </div>
    </main>
  );
}
