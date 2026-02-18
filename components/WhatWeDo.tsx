'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Helper function to add letter spacing to labels (returns string)
// For single words: "SPRING" -> "S P R I N G"
// For multi-word: "PLANTER SUBSCRIPTIONS" -> "P L A N T E R · S U B S C R I P T I O N S"
const formatWithLetterSpacing = (text: string): string => {
  return text
    .split(' ')
    .map(word => word.split('').join(' '))
    .join('  ·  '); // Middle dot between words
};

// Helper component that adds letter spacing but prevents word breaks
// Each word is wrapped in whitespace-nowrap so letters stay together
const SpacedTitle = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          <span className="whitespace-nowrap">{word.split('').join(' ')}</span>
          {index < words.length - 1 && <span className="mx-1"> · </span>}
        </span>
      ))}
    </>
  );
};

const services = [
  {
    id: 'planters',
    title: 'PLANTER SUBSCRIPTIONS',
    description: 'Year-round beauty with seasonal refreshes for your home and business. Customized design, installation, and optional maintenance service.',
    href: '/planter-subscriptions',
    image: '/images/corporate-planter.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14c-3 0-5.5-2-6-5 3-.5 5.5 1 6 4 .5-3 3-4.5 6-4-0.5 3-3 5-6 5zm0 0v6m-3 0h6M7 20h10" />
      </svg>
    ),
  },
  {
    id: 'seasonal',
    title: 'SEASONAL DECOR',
    description: 'Special occasion decorations for holidays, life events, and celebrations. One-time installations.',
    href: '/seasonal-decor',
    image: '/images/seasonal-decor.jpeg',
    iconSrc: '/icons/4seasons.png',
  },
  {
    id: 'irrigation',
    title: 'IRRIGATION',
    description: 'Maximum beauty and plant health without the burden of manual watering.',
    href: '/irrigation',
    image: '/images/irrigation.jpeg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-3.5 0-6-2.5-6-5.5 0-3.5 6-9.5 6-9.5s6 6 6 9.5c0 3-2.5 5.5-6 5.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18c-1.5 0-2.5-1-2.5-2.5" />
      </svg>
    ),
  },
  {
    id: 'events',
    title: 'EVENTS & RENTALS',
    description: 'Short-term planter and seasonal decor solutions for special events, real estate staging, and vacation rentals.',
    href: '/events-rentals',
    image: '/images/event-flower.webp',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 2v4M8 2v4M3 10h18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2L9 16.5l2-.5 1-2z" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState('planters');
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const sectionRef = useRef(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Observer for section snap - enables internal scrolling when section is fully visible
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsScrollEnabled(entry.intersectionRatio > 0.8);
        });
      },
      {
        threshold: [0, 0.5, 0.8, 1],
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // Observer for active service tracking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id') || 'planters';

            // Debounce state updates to reduce re-renders
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveService(serviceId);
            }, 50);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px' // Triggers when element crosses center of viewport
      }
    );

    services.forEach((service) => {
      const element = serviceRefs.current[service.id];
      if (element) {
        element.setAttribute('data-service-id', service.id);
        observer.observe(element);
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const scrollToService = (serviceId: string) => {
    const element = serviceRefs.current[serviceId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-cream-50 snap-start snap-always min-h-screen">
      {/* Title - centered with padding */}
      <div className="container-padding max-w-[1600px] mx-auto pt-24 md:pt-28 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 text-xl sm:text-2xl md:text-3xl leading-tight break-words hyphens-none uppercase tracking-wide font-semibold"
        >
          WHAT WE DO
        </motion.h2>
      </div>

      {/* Desktop Layout - 30% sidebar / 70% images */}
      <div className="hidden lg:grid lg:grid-cols-[30%_70%] h-[calc(100vh-220px)]">
        {/* Sidebar - sticky */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
          className="sticky top-20 h-full flex flex-col justify-center pl-8 xl:pl-16 pr-8 space-y-6"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className={`w-full text-left group transition-all duration-300 ${
                activeService === service.id ? '' : 'opacity-40 hover:opacity-60'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeService === service.id
                      ? 'w-14 h-14 bg-forest-600 text-white'
                      : 'w-12 h-12 bg-white border-2 border-gray-200 text-forest-700'
                  }`}
                >
                  <div className={activeService === service.id ? 'scale-110' : ''}>
                    {service.iconSrc ? (
                      <Image
                        src={service.iconSrc}
                        alt={service.title}
                        width={32}
                        height={32}
                        className={`w-8 h-8 transition-all duration-300 ${
                          activeService === service.id
                            ? 'brightness-0 invert'
                            : ''
                        }`}
                        style={activeService === service.id ? {} : { filter: 'invert(35%) sepia(18%) saturate(1000%) hue-rotate(109deg) brightness(95%) contrast(92%)' }}
                      />
                    ) : (
                      service.icon
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-[var(--font-poppins)] transition-all duration-300 leading-tight break-words hyphens-none ${
                      activeService === service.id
                        ? 'text-2xl xl:text-3xl font-bold text-forest-900 mb-2'
                        : 'text-xl font-semibold text-gray-600 mb-0'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeService === service.id
                        ? 'max-h-32 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`mt-4 ml-18 h-1 rounded-full transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-forest-600 w-16'
                    : 'bg-gray-200 w-8'
                }`}
              />
            </button>
          ))}
        </motion.div>

        {/* Service Cards - each takes full viewport height */}
        <div
          ref={scrollContainerRef}
          className={`snap-y snap-mandatory h-full scrollbar-hide ${
            isScrollEnabled ? 'overflow-y-scroll' : 'overflow-hidden'
          }`}
          style={{ WebkitOverflowScrolling: 'touch', willChange: 'scroll-position' }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className="h-full snap-start snap-always"
            >
              <Link
                href={service.href}
                className="group block relative h-full overflow-hidden rounded-l-2xl cursor-pointer bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

                {/* Click indicator arrow - appears on hover */}
                <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <h3 className="text-white group-hover:text-white/80 transition-colors duration-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[var(--font-poppins)] font-semibold uppercase flex items-center gap-4 leading-tight break-words hyphens-none">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      {service.iconSrc ? (
                        <Image
                          src={service.iconSrc}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="w-8 h-8 lg:w-10 lg:h-10 brightness-0 invert"
                        />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <span className="tracking-[0.2em]">{formatWithLetterSpacing(service.title)}</span>
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Full-Screen Cards */}
      <div className="lg:hidden">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative min-h-screen h-screen snap-start snap-always overflow-hidden bg-gray-900"
            style={{ minHeight: '100svh', height: '100svh' }}
          >
            <Link
              href={service.href}
              className="group block relative w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Tap indicator */}
              <div className="absolute top-1/2 right-6 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 animate-pulse">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    {service.iconSrc ? (
                      <Image
                        src={service.iconSrc}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 brightness-0 invert"
                      />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3 className="text-white group-hover:text-white/80 group-active:text-white/80 transition-colors duration-300 text-lg sm:text-xl font-[var(--font-poppins)] font-semibold uppercase leading-tight">
                    <SpacedTitle text={service.title} />
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
