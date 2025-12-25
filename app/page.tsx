import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

import { Hero } from "@/components/Sections";
import {
  Services,
  PromoCTA,
  Reviews,
  ServiceArea,
  Contact,
  JsonLd,
} from "@/components/Sections.v2parts";

import RecentProjects from "@/components/RecentProjects";

export default function Page() {
  return (
    <main className="min-h-screen bg-sand/30 text-neutral-900">
      <Header />
      <Hero />
      <Services />
      <PromoCTA />
      <RecentProjects />
      <Reviews />
      <ServiceArea />
      <Contact />
      <Footer />
      <StickyBar />
      <JsonLd />
    </main>
  );
}
