import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Request a Quote | Sky High Roofing",
  description:
    "Request a fast roofing estimate from Sky High Roofing. Upload details and photos of your home for accurate pricing.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-sand/30 text-neutral-900">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy">
              Request a Roofing Quote
            </h1>
            <p className="mt-4 text-neutral-700">
              Share a few details about your project and we’ll follow up quickly.
              You can send photos of the front, back, and any problem areas.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-soft">
            <ContactForm />

            <p className="mt-4 text-sm text-neutral-600 text-center">
              Tip: After we respond, you can attach photos directly to the email
              thread for faster quoting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
