'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

const seasons = [
  {
    id: 'spring' as Season,
    label: 'Spring',
    description: 'Vibrant tulips, pansies, and fresh greenery',
    image: '/images/season-spring.jpg',
  },
  {
    id: 'summer' as Season,
    label: 'Summer',
    description: 'Bold geraniums, petunias, and trailing vines',
    image: '/images/season-summer.jpg',
  },
  {
    id: 'fall' as Season,
    label: 'Fall',
    description: 'Warm mums, ornamental kale, and autumn foliage',
    image: '/images/season-fall.jpg',
  },
  {
    id: 'winter' as Season,
    label: 'Winter',
    description: 'Evergreens, berries, and festive accents',
    image: '/images/season-winter.jpg',
  },
];

export default function SeasonalPreview() {
  const [activeSeason, setActiveSeason] = useState<Season>('spring');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSeason = seasons.find((s) => s.id === activeSeason)!;

  return (
    <section ref={ref} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-8"
        >
          See the Transformation
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 md:gap-3 mb-12"
        >
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-md font-medium transition-all ${
                activeSeason === season.id
                  ? 'bg-forest-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {season.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                {currentSeason.label} image placeholder
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl mb-3">{currentSeason.label}</h3>
                <p className="text-lg md:text-xl text-white/90">{currentSeason.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
