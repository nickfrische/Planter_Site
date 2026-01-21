'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/planter-subscriptions', label: 'Planter Subscriptions' },
    { href: '/seasonal-decor', label: 'Seasonal Decor' },
    { href: '/irrigation', label: 'Irrigation' },
    { href: '/events-rentals', label: 'Events & Rentals' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/fontkit', label: 'Font Kit', special: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between h-[72px] px-6 lg:px-12 max-w-[1800px] mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-[var(--font-sora)] font-bold text-forest-700">
            Planter Business
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                (link as { special?: boolean }).special
                  ? 'text-forest-600 hover:text-forest-700 flex items-center gap-1'
                  : 'text-gray-700 hover:text-forest-600'
              }`}
            >
              {(link as { special?: boolean }).special && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:block px-6 py-2.5 bg-forest-600 text-white font-medium rounded-md hover:bg-forest-700 transition-colors"
        >
          Contact
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 ${
                    (link as { special?: boolean }).special
                      ? 'text-forest-600 hover:text-forest-700 flex items-center gap-2'
                      : 'text-gray-700 hover:text-forest-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {(link as { special?: boolean }).special && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-6 py-2.5 bg-forest-600 text-white font-medium rounded-md hover:bg-forest-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
