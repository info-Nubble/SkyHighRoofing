import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import { Hero } from '@/components/Sections';
import { Services, PromoCTA, Reviews, ServiceArea, Contact, JsonLd } from '@/components/Sections.v2parts';
// ⬇️ use the new image-backed section instead of FeaturedProjectsServer
import RecentProjects from '@/components/RecentProjects';

export default function Page() {
  return (
    <main className="min-h-screen bg-sand/30 text-neutral-900">
      <Header />
      <Hero />
      <Services />
      <PromoCTA />
      <RecentProjects />  {/* pulls real images from /public/gallery */}
      <Reviews />
      <ServiceArea />
      <Contact />
      <Footer />
      <StickyBar />
      <JsonLd />
    </main>
  );
}
