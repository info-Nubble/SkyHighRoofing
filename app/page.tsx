// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhyUs from "@/components/WhyUs";

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
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <PromoCTA />
        <RecentProjects />
        <Reviews />
        <ServiceArea />
        <Contact />
        <Footer />
        <StickyBar />
        <JsonLd />
      </main>
    </>
  );
}
