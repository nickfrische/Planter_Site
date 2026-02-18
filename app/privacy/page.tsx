import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
  title: 'Privacy Policy | Planter Business',
  description: 'Our privacy policy and how we handle your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <div className="w-full bg-gradient-to-b from-forest-900 to-forest-800 py-16">
          <div className="container-padding max-w-[900px] mx-auto">
            <h1 className="text-white">PRIVACY POLICY</h1>
          </div>
        </div>

        <div className="w-full section-spacing bg-white">
          <div className="container-padding max-w-[900px] mx-auto prose prose-lg">
            <p className="text-gray-600 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-forest-900">INFORMATION WE COLLECT</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us when you request a consultation, sign up for our services, or contact us. This may include your name, email address, phone number, property address, and service preferences.
            </p>

            <h2 className="text-forest-900">HOW WE USE YOUR INFORMATION</h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you updates about your service</li>
              <li>Respond to your questions and comments</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>

            <h2 className="text-forest-900">INFORMATION SHARING</h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="text-gray-600">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-forest-900">DATA SECURITY</h2>
            <p className="text-gray-600">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is ever fully secure or error-free.
            </p>

            <h2 className="text-forest-900">YOUR RIGHTS</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-forest-900">CONTACT US</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:privacy@planterbusiness.com" className="text-forest-600 hover:text-forest-700">privacy@planterbusiness.com</a><br />
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
