'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const seasons = [
  {
    id: 'spring',
    label: 'SPRING',
    description: 'Vibrant tulips, pansies, and fresh greenery bring color back after winter.',
    image: '/images/spring_planter.webp',
    iconSrc: '/icons/spring.png',
  },
  {
    id: 'summer',
    label: 'SUMMER',
    description: 'Tropical plants and flowers that can tolerate the heat of summer.',
    image: '/images/summer_planter.jpg',
    iconSrc: '/icons/summer.png',
  },
  {
    id: 'fall',
    label: 'FALL',
    description: 'Harvest themed featuring the warm, vibrant colors of the season.',
    image: '/images/fall_planter.jpg',
    iconSrc: '/icons/fall.png',
  },
  {
    id: 'winter',
    label: 'WINTER',
    description: 'Preserved evergreens, berries, and festive accents to last through the tough winter conditions.',
    image: '/images/winter_planter1.webp',
    iconSrc: '/icons/winter.png',
  },
];

export default function SeasonalPreview() {
  const [activeSeason, setActiveSeason] = useState('spring');
  const sectionRef = useRef(null);
  const seasonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const seasonId = entry.target.getAttribute('data-season-id') || 'spring';

            // Debounce state updates to reduce re-renders
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveSeason(seasonId);
            }, 50);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px' // Triggers when element crosses center of viewport
      }
    );

    seasons.forEach((season) => {
      const element = seasonRefs.current[season.id];
      if (element) {
        element.setAttribute('data-season-id', season.id);
        observer.observe(element);
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const scrollToSeason = (seasonId: string) => {
    const element = seasonRefs.current[seasonId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white snap-start snap-always min-h-screen">
      {/* Title - centered with padding */}
      <div className="container-padding max-w-[1600px] mx-auto pt-24 md:pt-28 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 text-xl sm:text-2xl md:text-3xl leading-tight break-words hyphens-none uppercase tracking-wide font-semibold"
        >
          ALWAYS IN SEASON
        </motion.h2>
      </div>

      {/* Desktop Layout - 70% images / 30% sidebar (flipped) */}
      <div className="hidden lg:grid lg:grid-cols-[70%_30%] h-[calc(100vh-220px)]">
        {/* Season Cards - each takes full viewport height */}
        <div
          className="snap-y snap-mandatory overflow-y-scroll h-full scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch', willChange: 'scroll-position' }}
        >
          {seasons.map((season) => (
            <div
              key={season.id}
              ref={(el) => {
                seasonRefs.current[season.id] = el;
              }}
              className="h-full snap-start snap-always"
            >
              <div className="group block relative h-full overflow-hidden rounded-r-2xl bg-gray-100">
                <img
                  src={season.image}
                  alt={`${season.label} planter arrangement`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-poppins)] font-semibold uppercase flex items-center gap-4 leading-tight break-words">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      {season.iconSrc && (
                        <Image
                          src={season.iconSrc}
                          alt={season.label}
                          width={56}
                          height={56}
                          className="w-10 h-10 lg:w-12 lg:h-12 brightness-0 invert"
                        />
                      )}
                    </div>
                    {season.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - sticky on RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7 }}
          className="sticky top-20 h-full flex flex-col justify-center pl-8 pr-8 xl:pr-16 space-y-6"
        >
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => scrollToSeason(season.id)}
              className={`w-full text-left group transition-all duration-300 ${
                activeSeason === season.id ? '' : 'opacity-40 hover:opacity-60'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeSeason === season.id
                      ? 'w-14 h-14 bg-forest-600 text-white'
                      : 'w-12 h-12 bg-white border-2 border-gray-200 text-forest-700'
                  }`}
                >
                  <div className={activeSeason === season.id ? 'scale-110' : ''}>
                    <Image
                      src={season.iconSrc}
                      alt={season.label}
                      width={32}
                      height={32}
                      className={`w-8 h-8 transition-all duration-300 ${
                        activeSeason === season.id
                          ? 'brightness-0 invert'
                          : ''
                      }`}
                      style={activeSeason === season.id ? {} : { filter: 'invert(35%) sepia(18%) saturate(1000%) hue-rotate(109deg) brightness(95%) contrast(92%)' }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-[var(--font-poppins)] transition-all duration-300 ${
                      activeSeason === season.id
                        ? 'text-2xl xl:text-3xl font-bold text-forest-900 mb-2'
                        : 'text-xl font-semibold text-gray-600 mb-0'
                    }`}
                  >
                    {season.label}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeSeason === season.id
                        ? 'max-h-32 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-gray-600 leading-relaxed">
                      {season.description}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`mt-4 ml-18 h-1 rounded-full transition-all duration-300 ${
                  activeSeason === season.id
                    ? 'bg-forest-600 w-16'
                    : 'bg-gray-200 w-8'
                }`}
              />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Mobile Full-Screen Cards */}
      <div className="lg:hidden">
        {seasons.map((season, index) => (
          <motion.div
            key={season.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative min-h-screen h-screen snap-start snap-always overflow-hidden group bg-gray-900"
            style={{ minHeight: '100svh', height: '100svh' }}
          >
            <div className="block relative w-full h-full">
              <img
                src={season.image}
                alt={`${season.label} planter arrangement`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                style={{ height: '100%', width: '100%' }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-[var(--font-poppins)] font-semibold uppercase flex items-center gap-3 leading-tight break-words">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    {season.iconSrc && (
                      <Image
                        src={season.iconSrc}
                        alt={season.label}
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert"
                      />
                    )}
                  </div>
                  {season.label}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
