'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Helper function to add letter spacing to labels
const formatWithLetterSpacing = (text: string): string => {
  return text
    .split(' ')
    .map(word => word.split('').join(' '))
    .join('  ·  ');
};

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
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const seasonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Observer to show/hide sidebar based on section visibility
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSidebarVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // Observer for active season tracking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const seasonId = entry.target.getAttribute('data-season-id') || 'spring';
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveSeason(seasonId);
            }, 50);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
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
    <section ref={sectionRef} className="w-full relative">
      {/* Desktop Sidebar - Fixed position on RIGHT, only visible when section is in view */}
      <AnimatePresence>
        {sidebarVisible && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex fixed right-0 top-0 h-screen w-[350px] xl:w-[400px] z-20 flex-col justify-center pr-8 xl:pr-16 pl-8 bg-gradient-to-l from-black/60 via-black/40 to-transparent pointer-events-none"
          >
            <div className="pointer-events-auto">
              <h2 className="text-white text-2xl xl:text-3xl font-semibold uppercase tracking-wide mb-10 text-right">
                ALWAYS IN SEASON
              </h2>
              <div className="space-y-6">
                {seasons.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => scrollToSeason(season.id)}
                    className={`w-full text-right group transition-all duration-300 ${
                      activeSeason === season.id ? '' : 'opacity-50 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-4 flex-row-reverse">
                      <div
                        className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeSeason === season.id
                            ? 'w-12 h-12 bg-white'
                            : 'w-10 h-10 bg-white/20'
                        }`}
                      >
                        <div className={activeSeason === season.id ? 'scale-110' : ''}>
                          <Image
                            src={season.iconSrc}
                            alt={season.label}
                            width={28}
                            height={28}
                            className={`w-7 h-7 transition-all duration-300 ${
                              activeSeason === season.id ? '' : 'brightness-0 invert'
                            }`}
                            style={activeSeason === season.id ? { filter: 'invert(35%) sepia(18%) saturate(1000%) hue-rotate(109deg) brightness(95%) contrast(92%)' } : {}}
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        <h3
                          className={`font-[var(--font-jost)] transition-all duration-300 leading-tight ${
                            activeSeason === season.id
                              ? 'text-xl xl:text-2xl font-bold text-white mb-2'
                              : 'text-lg font-semibold text-white/80 mb-0'
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
                          <p className="text-sm text-white/70 leading-relaxed">
                            {season.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Season Cards */}
      {seasons.map((season, index) => (
        <div
          key={season.id}
          ref={(el) => {
            seasonRefs.current[season.id] = el;
          }}
          className="relative min-h-screen h-screen snap-start snap-always overflow-hidden"
          style={{ minHeight: '100svh', height: '100svh' }}
        >
          <div
            className="block relative w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${season.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Extra gradient on right for desktop sidebar readability */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent" />

            {/* Bottom content - positioned bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:pr-[400px] xl:pr-[450px]">
              <div className="flex items-center gap-3 lg:gap-6">
                <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Image
                    src={season.iconSrc}
                    alt={season.label}
                    width={64}
                    height={64}
                    className="w-8 h-8 lg:w-14 lg:h-14 brightness-0 invert"
                  />
                </div>
                <h3 className="text-white text-lg sm:text-xl lg:text-7xl xl:text-8xl font-[var(--font-jost)] font-semibold uppercase leading-tight tracking-[0.15em]">
                  {formatWithLetterSpacing(season.label)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
