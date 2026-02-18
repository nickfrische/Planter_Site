'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EventsHero() {
  return (
    <section className="w-full min-h-[90vh] relative overflow-hidden">
      <img
        src="/images/event-flower.webp"
        alt="Event floral arrangements"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 min-h-[90vh] flex items-end">
        <div className="container-padding max-w-[1400px] mx-auto w-full pb-40 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-earth-600/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-white font-medium text-sm">FLEXIBLE SOLUTIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white mb-6"
            >
              EVENTS & RENTALS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Short-term planter and seasonal decor solutions for special events, real estate staging, and vacation rentals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#use-cases"
                className="px-8 py-3.5 bg-earth-600 text-white font-semibold rounded-md hover:bg-earth-700 transition-colors text-center"
              >
                EXPLORE OPTIONS
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-md hover:bg-white/20 transition-colors text-center"
              >
                REQUEST A QUOTE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
