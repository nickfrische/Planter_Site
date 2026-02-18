'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const areas = [
  { name: 'ADDISON TOWNSHIP', slug: 'addison-township' },
  { name: 'ANN ARBOR', slug: 'ann-arbor' },
  { name: 'BIRMINGHAM', slug: 'birmingham' },
  { name: 'BLOOMFIELD HILLS', slug: 'bloomfield-hills' },
  { name: 'CLARKSTON', slug: 'clarkston' },
  { name: 'FARMINGTON HILLS', slug: 'farmington-hills' },
  { name: 'GROSSE POINTE', slug: 'grosse-pointe' },
  { name: 'LAKE ORION', slug: 'lake-orion' },
  { name: 'METAMORA', slug: 'metamora' },
  { name: 'NORTHVILLE', slug: 'northville' },
  { name: 'NOVI', slug: 'novi' },
  { name: 'OAKLAND COUNTY', slug: 'oakland-county' },
  { name: 'OAKLAND TOWNSHIP', slug: 'oakland-township' },
  { name: 'PLYMOUTH', slug: 'plymouth' },
  { name: 'ROCHESTER', slug: 'rochester' },
  { name: 'ROCHESTER HILLS', slug: 'rochester-hills' },
  { name: 'ROYAL OAK', slug: 'royal-oak' },
  { name: 'SPRINGFIELD', slug: 'springfield' },
  { name: 'TROY', slug: 'troy' },
  { name: 'WEST BLOOMFIELD', slug: 'west-bloomfield' },
];

export default function ServiceAreaGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-forest-900 mb-4">OUR SERVICE COMMUNITIES</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't see your area? Contact us to check availability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/areas/${area.slug}`}
                className="block bg-cream-50 rounded-lg p-6 hover:bg-forest-50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-forest-900 font-semibold text-lg group-hover:text-forest-700">
                    {area.name}
                  </span>
                  <svg className="w-5 h-5 text-forest-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-forest-50 rounded-lg p-8">
            <h3 className="text-forest-900 font-bold text-xl mb-3">NOT SURE IF WE SERVE YOUR AREA?</h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              We're always expanding our service area. Reach out and we'll let you know if we can help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
