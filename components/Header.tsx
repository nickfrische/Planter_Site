'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/planter-subscriptions', label: 'PLANTER SUBSCRIPTIONS' },
    { href: '/seasonal-decor', label: 'SEASONAL DECOR' },
    { href: '/irrigation', label: 'IRRIGATION' },
    { href: '/events-rentals', label: 'EVENTS & RENTALS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between h-[72px] px-6 lg:px-12 max-w-[1800px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Detroit-Style Planters"
            width={60}
            height={60}
            className="h-[48px] w-[48px] object-contain flex-shrink-0"
            priority
          />
          <span className="hidden xl:inline text-xl 2xl:text-2xl font-bold text-forest-700 whitespace-nowrap">
            DETROIT STYLE PLANTER COMPANY
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-forest-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:block px-6 py-2.5 bg-forest-600 text-white font-medium rounded-md hover:bg-forest-700 transition-colors"
        >
          CONTACT
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
                  className="text-sm font-medium text-gray-700 hover:text-forest-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-6 py-2.5 bg-forest-600 text-white font-medium rounded-md hover:bg-forest-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
