'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full min-h-screen grid lg:grid-cols-2">
      <div className="relative h-[50vh] lg:h-screen bg-gray-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-planters.webm" type="video/webm" />
          <source src="/videos/hero-planters.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 bg-cream-50"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-forest-900 mb-6"
        >
          Your Private Gardener
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl"
        >
          Professional seasonal planters, designed and installed for you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#how-it-works"
            className="px-8 py-3.5 bg-white border-2 border-forest-600 text-forest-700 font-semibold rounded-md hover:bg-forest-50 transition-colors text-center"
          >
            See How It Works
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3.5 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors text-center"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
