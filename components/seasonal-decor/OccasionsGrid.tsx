'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const occasions = [
  {
    id: 'seasonal',
    title: 'SEASONAL TRANSITIONS',
    description: 'Autumn harvest themes and winter wonderlands.',
    image: '/images/occasion-seasonal.jpg',
  },
  {
    id: 'holiday',
    title: 'HOLIDAY SEASONS',
    description: 'Easter, Memorial Day, Fourth of July.',
    image: '/images/occasion-holiday.jpg',
  },
  {
    id: 'sports',
    title: 'SPORTS SEASONS',
    description: 'For the sports enthusiast. Opening day baseball, Football kickoff, Basketball tip-off, and the drop of the first Hockey puck.',
    image: '/images/occasion-sports.jpg',
  },
];

export default function OccasionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="occasions" ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-forest-900 mb-4">PERFECT FOR EVERY SEASON AND OCCASION</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Professional decor installations to celebrate what matters most
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                {occasion.title} image
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl md:text-3xl font-[var(--font-jost)] font-bold mb-3">
                  {occasion.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {occasion.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
