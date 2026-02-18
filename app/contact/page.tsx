import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact | Detroit Style Planter Company',
  description: 'Get in touch to request a consultation or learn more about our planter services.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <ContactHero />
        <div className="w-full section-spacing bg-white">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
