
const BUSINESS_NAME = 'Sky High Roofing & General Contracting';
const ADDRESS = '3 Smalls Way, York, ME 03909';
const PHONE = '+1 (207) 451-3163';
const PHONE_RAW = '+12074513163';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
        <div className="md:col-span-2">
          <div className="font-semibold">{BUSINESS_NAME}</div>
          <div className="mt-1 text-sm text-neutral-600">{ADDRESS}</div>
          <a href={`tel:${PHONE_RAW}`} className="mt-1 inline-block text-sm text-neutral-900 underline underline-offset-4">{PHONE}</a>
        </div>
        <div className="justify-self-end">
          <a href="https://www.facebook.com/skyhighgeneralcontracting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ocean hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.706H9.691v-3.62h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.796.143v3.244l-1.918.001c-1.505 0-1.796.716-1.796 1.765v2.314h3.588l-.467 3.62h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
