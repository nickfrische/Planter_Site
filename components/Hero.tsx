'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] md:min-h-[70vh] md:max-h-[800px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/potted_plants_patio_pool.webp)' }}
    >
      {/* Layered overlays for optimal text readability */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Radial vignette - darker in center where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)'
        }}
      />
      {/* Bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Centered Content Overlay */}
      <div className="relative z-10 min-h-[100svh] md:min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-10 sm:px-8 md:px-6 max-w-3xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight uppercase font-semibold sm:whitespace-nowrap"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)' }}
          >
            YOUR PRIVATE<br className="sm:hidden" /> GARDENER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed break-words"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Planter subscriptions and seasonal outdoor décor designed and installed at your home or business to celebrate the beauty of every season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-lg sm:max-w-none mx-auto"
          >
            <Link
              href="#how-it-works"
              className="px-8 py-3.5 bg-white/15 backdrop-blur-md border border-white/40 text-white text-sm sm:text-base font-semibold rounded-md hover:bg-white/25 transition-all text-center shadow-lg whitespace-nowrap"
            >
              SEE HOW IT WORKS
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 bg-white text-forest-800 text-sm sm:text-base font-semibold rounded-md hover:bg-cream-100 transition-colors text-center shadow-lg whitespace-nowrap"
            >
              REQUEST A CONSULTATION
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
