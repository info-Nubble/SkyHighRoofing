// app/components/TrustBadges.tsx
export default function TrustBadges() {
  return (
    <section aria-label="Trusted by" className="py-6">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <img src="/badges/certainteed.svg" alt="" className="h-8" />
            <span className="hidden sm:block">CertainTeed Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <img src="/badges/bbb.svg" alt="" className="h-8" />
            <span className="hidden sm:block">BBB Accredited</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <img src="/badges/veteran.svg" alt="" className="h-8" />
            <span className="hidden sm:block">Veteran-Owned</span>
          </div>
        </div>
      </div>
    </section>
  );
}
