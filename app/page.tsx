import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import WhatWeDo from '@/components/WhatWeDo';
import SeasonalPreview from '@/components/SeasonalPreview';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import OurStory from '@/components/OurStory';
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
        <Hero />
        <TrustBar />
        <HowItWorks />
        <WhatWeDo />
        <SeasonalPreview />
        <BeforeAfterGallery />
        <OurStory />
        <Testimonials />
        <FAQPreview />
        <FinalCTA />
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
