import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
  title: 'Terms of Service | Planter Business',
  description: 'Terms and conditions for using our planter services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <div className="w-full bg-gradient-to-b from-forest-900 to-forest-800 py-16">
          <div className="container-padding max-w-[900px] mx-auto">
            <h1 className="text-white">Terms of Service</h1>
          </div>
        </div>

        <div className="w-full section-spacing bg-white">
          <div className="container-padding max-w-[900px] mx-auto prose prose-lg">
            <p className="text-gray-600 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-forest-900">Service Agreement</h2>
            <p className="text-gray-600">
              By using our services, you agree to these terms. Please read them carefully before signing up for any service.
            </p>

            <h2 className="text-forest-900">Subscription Services</h2>
            <p className="text-gray-600">
              Planter subscriptions are annual commitments that include four seasonal refreshes. Subscriptions automatically renew unless cancelled with 30 days written notice before the renewal date.
            </p>

            <h2 className="text-forest-900">Payment Terms</h2>
            <p className="text-gray-600">
              Payment is due according to the schedule outlined in your service agreement. We accept credit cards, ACH transfers, and checks. Late payments may result in service suspension.
            </p>

            <h2 className="text-forest-900">Cancellation Policy</h2>
            <p className="text-gray-600">
              Subscription services may be cancelled at the end of the annual term with 30 days written notice. No refunds are provided for partial seasons. One-time services may be cancelled up to 48 hours before the scheduled installation date.
            </p>

            <h2 className="text-forest-900">Service Guarantee</h2>
            <p className="text-gray-600">
              We guarantee the health and quality of our plants for 14 days after installation. We will replace any plants that fail to thrive due to defects or our error at no additional cost.
            </p>

            <h2 className="text-forest-900">Property Access</h2>
            <p className="text-gray-600">
              You agree to provide safe and timely access to your property for service delivery. This may include providing gate codes, parking instructions, or other necessary access information.
            </p>

            <h2 className="text-forest-900">Liability</h2>
            <p className="text-gray-600">
              We carry full liability insurance. We are not responsible for damage to planters or property that results from circumstances beyond our control, including severe weather, vandalism, or neglect.
            </p>

            <h2 className="text-forest-900">Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-forest-900">Contact</h2>
            <p className="text-gray-600">
              Questions about these terms? Contact us at:
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:Info@DSPlanter.com" className="text-forest-600 hover:text-forest-700">Info@DSPlanter.com</a><br />
              Phone: <a href="tel:+12485550123" className="text-forest-600 hover:text-forest-700">(248) 555-0123</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
