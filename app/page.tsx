import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import HowItWorksVariations from '@/components/HowItWorksVariations';
import WhatWeDo from '@/components/WhatWeDo';
import Testimonials from '@/components/Testimonials';
import FAQPreview from '@/components/FAQPreview';
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

        {/* How It Works - 8 Design Variations for Client Selection */}
        <HowItWorksVariations />

        {/* What We Do - Services overview */}
        <WhatWeDo />

        {/* Video Section - Full-width explainer video */}
        <VideoSection
          videoId="dQw4w9WgXcQ"
          title="SEE HOW WE TRANSFORM YOUR SPACE"
          subtitle="Watch our process from consultation to installation."
        />

        {/* Testimonials - Multi-card carousel */}
        <Testimonials />

        {/* FAQ Preview - Compact accordion */}
        <FAQPreview />
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
