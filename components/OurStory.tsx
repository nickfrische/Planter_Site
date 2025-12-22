'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full section-spacing bg-cream-50">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 container-padding max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
        >
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
            Brian & Eliza photo placeholder
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm font-semibold text-forest-600 tracking-wide uppercase mb-4">
            Our Story
          </span>
          <h2 className="text-forest-900 mb-6">Meet Brian & Eliza</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We started Planter Business to bring beautiful planters to Detroit-area homes—while creating flexible jobs for our community.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-800 transition-colors"
          >
            Learn More About Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
