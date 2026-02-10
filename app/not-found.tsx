import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-[72px] min-h-[80vh] flex items-center justify-center bg-cream-50">
        <div className="container-padding max-w-[600px] mx-auto text-center py-20">
          <div className="mb-8">
            <span className="text-[120px] sm:text-[160px] font-bold text-forest-200 leading-none">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-forest-900 mb-4 uppercase tracking-wide">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-forest-700 font-semibold rounded-md border border-forest-200 hover:bg-forest-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
