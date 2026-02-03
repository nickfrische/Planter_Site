'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const seasons = [
  {
    id: 'spring',
    label: 'Spring',
    description: 'Vibrant tulips, pansies, and fresh greenery bring color back after winter.',
    image: '/images/spring_planter.webp',
    icon: (
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
    description: 'Tropical plants and flowers that can tolerate the heat of summer.',
    image: '/images/summer_planter.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    id: 'fall',
    label: 'Fall',
    description: 'Harvest themed featuring the warm, vibrant colors of the season.',
    image: '/images/fall_planter.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l2 4 4-1-2 4 3 3-4 1v4l-3-2-3 2v-4l-4-1 3-3-2-4 4 1 2-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13v8" />
      </svg>
    ),
  },
  {
    id: 'winter',
    label: 'Winter',
    description: 'Preserved evergreens, berries, and festive accents to last through the tough winter conditions.',
    image: '/images/winter_planter1.webp',
    icon: (
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSeason(entry.target.getAttribute('data-season-id') || 'spring');
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
          className="text-center text-forest-900"
        >
          Always in Season
        </motion.h2>
      </div>

      {/* Desktop Layout - 70% images / 30% sidebar (flipped) */}
      <div className="hidden lg:grid lg:grid-cols-[70%_30%] h-[calc(100vh-220px)]">
        {/* Season Cards - each takes full viewport height */}
        <div className="snap-y snap-mandatory overflow-y-scroll h-full scrollbar-hide">
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

                {/* Bottom content with elongated title */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <h3 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[var(--font-poppins)] font-bold tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      {season.icon}
                    </div>
                    {season.label.split('').join(' ')}
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
                      : 'w-12 h-12 bg-white text-forest-600 border-2 border-gray-200'
                  }`}
                >
                  <div className={activeSeason === season.id ? 'scale-110' : ''}>
                    {season.icon}
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
            className="relative h-screen snap-start snap-always overflow-hidden group"
          >
            <div className="block relative w-full h-full">
              <img
                src={season.image}
                alt={`${season.label} planter arrangement`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom content with elongated title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white text-3xl sm:text-4xl font-[var(--font-poppins)] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    {season.icon}
                  </div>
                  {season.label.split('').join(' ')}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
