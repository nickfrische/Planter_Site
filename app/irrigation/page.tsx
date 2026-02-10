import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import IrrigationHero from '@/components/irrigation/IrrigationHero';
import IrrigationBenefits from '@/components/irrigation/IrrigationBenefits';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Irrigation Systems | Detroit Style Planter Company',
  description: 'Professional container plant irrigation setup and maintenance to keep your plants healthy year-round.',
};

export default function IrrigationPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <IrrigationHero />
        <IrrigationBenefits />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
