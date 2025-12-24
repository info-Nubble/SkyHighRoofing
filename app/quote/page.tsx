
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Request a Quote — Sky High Roofing',
  description: 'Send your roof details and photos to get a fast estimate.'
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-sand/30 text-neutral-900">
      <Header />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-navy">Request a Quote</h1>
            <p className="mt-3 text-neutral-700">Attach photos of the front and back of your house, plus any problem areas.</p>
          </div>
          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-neutral-200 bg-white p-6 shadow-soft">
            <ContactForm compact />
            <p className="mt-4 text-sm text-neutral-600">Tip: After we reply, you can attach photos directly to the email thread.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
