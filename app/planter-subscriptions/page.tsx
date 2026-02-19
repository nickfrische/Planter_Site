import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import PlanterHero from '@/components/planter-subscriptions/PlanterHero';
import HowItWorksVariations from '@/components/HowItWorksVariations';
import SubscriptionTiers from '@/components/planter-subscriptions/SubscriptionTiers';
import SeasonalPreview from '@/components/SeasonalPreview';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Planter Subscriptions | Planter Business',
  description: 'Year-round beauty with seasonal refreshes. Professional design, installation, and maintenance available.',
};

export default function PlanterSubscriptionsPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <PlanterHero />
        <SeasonalPreview />
        <HowItWorksVariations />
        <SubscriptionTiers />
        <BeforeAfterGallery />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
