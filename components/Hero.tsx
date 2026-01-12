'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/potted_plants_patio_pool.webp"
          alt="Beautiful patio with potted plants by the pool"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      {/* Centered Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-6 max-w-3xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white mb-4 drop-shadow-lg"
          >
            Your Private Gardener
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light"
          >
            Professional seasonal planters, designed and installed for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#how-it-works"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-md hover:bg-white/20 transition-all text-center"
            >
              See How It Works
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 bg-white text-forest-800 font-semibold rounded-md hover:bg-cream-100 transition-colors text-center"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
