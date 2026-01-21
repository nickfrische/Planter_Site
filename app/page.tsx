import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import HowItWorks from '@/components/HowItWorks';
import WhatWeDo from '@/components/WhatWeDo';
import SeasonalPreview from '@/components/SeasonalPreview';
import Testimonials from '@/components/Testimonials';
import FAQPreview from '@/components/FAQPreview';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Schema from '@/components/Schema';

export default function HomePage() {
  return (
    <>
      <Schema />
      <Header />

      <main className="pt-[72px]">
        {/* Hero - Full edge-to-edge with centered overlay */}
        <Hero />

        {/* How It Works - Compact 3-step process */}
        <HowItWorks />

        {/* What We Do - Services overview */}
        <WhatWeDo />

        {/* Seasonal Preview - "Always in Season" */}
        <SeasonalPreview />

        {/* Video Section - Full-width explainer video */}
        <VideoSection
          videoId="dQw4w9WgXcQ"
          title="See How We Transform Your Space"
          subtitle="Watch our process from consultation to installation"
        />

        {/* Testimonials - Multi-card carousel */}
        <Testimonials />

        {/* FAQ Preview - Compact accordion */}
        <FAQPreview />

        {/* Final CTA - Contact form */}
        <FinalCTA />
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
