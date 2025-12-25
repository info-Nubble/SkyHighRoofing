// components/WhyUs.tsx
export default function WhyUs() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-navy">
          Why homeowners choose Sky High Roofing
        </h2>

        <p className="mt-3 text-center text-neutral-600 max-w-2xl mx-auto">
          We’re built for high-stakes roofing work where failure is not an option — coastal wind,
          ice dams, inspections, and warranties.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-lg text-neutral-900">No shortcuts</h3>
            <p className="text-sm text-neutral-600 mt-2">
              Installed to manufacturer specification — not rushed to hit volume targets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-neutral-900">One accountable crew</h3>
            <p className="text-sm text-neutral-600 mt-2">
              No revolving subcontractors. One foreman. One company responsible start to finish.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-neutral-900">Insurance-ready documentation</h3>
            <p className="text-sm text-neutral-600 mt-2">
              Photo documentation and proper scope notes to protect warranty and inspections.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-neutral-900">Built for New England</h3>
            <p className="text-sm text-neutral-600 mt-2">
              Ice &amp; water, ventilation, underlayment — designed for coastal Maine weather.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
