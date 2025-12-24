
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfter from '@/components/BeforeAfter';

export const metadata = { title: 'Before & After — Sky High Roofing', description: 'Dramatic transformations from recent jobs.' };

export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen bg-sand/30 text-neutral-900">
      <Header />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-navy">Before & After</h1>
            <p className="mt-3 text-neutral-700">Showcase dramatic transformations. Replace the sample images with your own pairs under <code>/public/before-after</code>.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <BeforeAfter before="/gallery/gallery-1.jpg" after="/gallery/gallery-2.jpg" caption="Sample pair — replace with your own in /public/before-after" />
            <BeforeAfter before="/gallery/gallery-2.jpg" after="/gallery/gallery-3.jpg" caption="Sample pair — replace with your own in /public/before-after" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
