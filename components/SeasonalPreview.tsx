'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const seasons = [
  {
    id: 'spring',
    label: 'Spring',
    description: 'Vibrant tulips, pansies, and fresh greenery bring color back after winter.',
    image: '/images/season-spring.jpg',
    icon: (
      // Flower blooming icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15c-2 0-3.5-1.5-3.5-3.5S10 8 12 8s3.5 1.5 3.5 3.5S14 15 12 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c0-2-1-4-1-4s3 0 3 2.5M12 8c0-2 1-4 1-4s-3 0-3 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 11.5c2 0 4-1 4-1s0 3-2.5 3M8.5 11.5c-2 0-4-1-4-1s0 3 2.5 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6M9 21h6" />
      </svg>
    ),
  },
  {
    id: 'summer',
    label: 'Summer',
    description: 'Bold geraniums, petunias, and trailing vines thrive in the warmth.',
    image: '/images/season-summer.jpg',
    icon: (
      // Sun with rays icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    id: 'fall',
    label: 'Fall',
    description: 'Warm mums, ornamental kale, and autumn foliage set a cozy mood.',
    image: '/images/season-fall.jpg',
    icon: (
      // Maple leaf icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l2 4 4-1-2 4 3 3-4 1v4l-3-2-3 2v-4l-4-1 3-3-2-4 4 1 2-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13v8" />
      </svg>
    ),
  },
  {
    id: 'winter',
    label: 'Winter',
    description: 'Evergreens, berries, and festive accents through the holidays.',
    image: '/images/season-winter.jpg',
    icon: (
      // Snowflake icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l-2 3m2-3l2 3M12 22l-2-3m2 3l2-3M2 12l3-2m-3 2l3 2M22 12l-3-2m3 2l-3 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12M5.64 18.36l2.12-2.12m8.48-8.48l2.12-2.12" />
      </svg>
    ),
  },
];

export default function SeasonalPreview() {
  const [activeSeason, setActiveSeason] = useState('spring');
  const sectionRef = useRef(null);
  const seasonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    seasons.forEach((season) => {
      const element = seasonRefs.current[season.id];
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSeason(season.id);
              }
            });
          },
          { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSeason = (seasonId: string) => {
    const element = seasonRefs.current[seasonId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16"
        >
          Always in Season
        </motion.h2>

        {/* Flipped layout: Content LEFT, Sidebar RIGHT */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* Desktop Season Cards - LEFT side */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="space-y-12"
            >
              {seasons.map((season) => (
                <div
                  key={season.id}
                  ref={(el) => {
                    seasonRefs.current[season.id] = el;
                  }}
                  className="scroll-mt-32"
                >
                  <div className="group block relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                      {season.label} image placeholder
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          {season.icon}
                        </div>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-3">
                        {season.label}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base max-w-2xl">
                        {season.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Sidebar - RIGHT side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:sticky lg:top-32 space-y-6"
          >
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => scrollToSeason(season.id)}
                className={`w-full text-left group transition-all duration-300 ${
                  activeSeason === season.id ? '' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeSeason === season.id
                        ? 'bg-forest-600 text-white scale-110'
                        : 'bg-white text-forest-600 border-2 border-gray-200'
                    }`}
                  >
                    {season.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className={`text-lg font-semibold transition-all duration-300 mb-1 ${
                        activeSeason === season.id
                          ? 'text-forest-900 font-bold'
                          : 'text-gray-700'
                      }`}
                    >
                      {season.label}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeSeason === season.id
                          ? 'max-h-24 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {season.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-3 ml-16 h-0.5 transition-all duration-300 ${
                    activeSeason === season.id
                      ? 'bg-forest-600 w-12'
                      : 'bg-gray-200 w-8'
                  }`}
                />
              </button>
            ))}
          </motion.div>

          {/* Mobile Full-Screen Cards */}
          <div className="lg:hidden -mx-6 space-y-0">
            {seasons.map((season, index) => (
              <motion.div
                key={season.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[60vh] min-h-[400px]"
              >
                <div className="block relative w-full h-full">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    {season.label} image placeholder
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        {season.icon}
                      </div>
                    </div>

                    <h3 className="text-white text-3xl font-serif font-bold mb-4">
                      {season.label}
                    </h3>

                    <p className="text-white/90 text-lg">
                      {season.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
