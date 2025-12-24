
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sky High Roofing & General Contracting — Maine Seacoast',
  description: 'High-quality roofing on the Maine Seacoast: re-roofs, repairs, metal & flat. Licensed & insured.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
