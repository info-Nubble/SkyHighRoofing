'use client';

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[92%] max-w-md rounded-2xl bg-white shadow-soft border border-neutral-200 p-2 flex items-center justify-between md:hidden">
      <a href="tel:+12074513163" className="flex-1 mr-2 rounded-xl bg-teal px-4 py-3 text-center font-semibold text-navy">Call</a>
      <a href="/#contact" className="flex-1 ml-2 rounded-xl bg-navy px-4 py-3 text-center font-semibold text-white">Free Estimate</a>
    </div>
  );
}
