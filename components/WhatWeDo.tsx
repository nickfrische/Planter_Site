'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Helper function to add letter spacing to labels (returns string)
const formatWithLetterSpacing = (text: string): string => {
  return text
    .split(' ')
    .map(word => word.split('').join(' '))
    .join('  ·  ');
};

// Helper component that adds letter spacing but prevents word breaks
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
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
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

  // Observer for active service tracking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id') || 'planters';
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveService(serviceId);
            }, 50);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
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
    <section ref={sectionRef} className="w-full relative">
      {/* Desktop Sidebar - Fixed position, only visible when section is in view */}
      <AnimatePresence>
        {sidebarVisible && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex fixed left-0 top-0 h-screen w-[350px] xl:w-[400px] z-20 flex-col justify-center pl-8 xl:pl-16 pr-8 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none"
          >
            <div className="pointer-events-auto">
              <h2 className="text-white text-2xl xl:text-3xl font-semibold uppercase tracking-wide mb-10 whitespace-nowrap">
                WHAT WE DO
              </h2>
              <div className="space-y-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className={`w-full text-left group transition-all duration-300 ${
                      activeService === service.id ? '' : 'opacity-50 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeService === service.id
                            ? 'w-12 h-12 bg-white text-forest-700'
                            : 'w-10 h-10 bg-white/20 text-white'
                        }`}
                      >
                        <div className={activeService === service.id ? 'scale-110' : ''}>
                          {service.iconSrc ? (
                            <Image
                              src={service.iconSrc}
                              alt={service.title}
                              width={28}
                              height={28}
                              className={`w-7 h-7 transition-all duration-300 ${
                                activeService === service.id ? '' : 'brightness-0 invert'
                              }`}
                              style={activeService === service.id ? { filter: 'invert(35%) sepia(18%) saturate(1000%) hue-rotate(109deg) brightness(95%) contrast(92%)' } : {}}
                            />
                          ) : (
                            <span className={activeService === service.id ? '' : '[&>svg]:stroke-white'}>{service.icon}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-[var(--font-jost)] transition-all duration-300 leading-tight ${
                            activeService === service.id
                              ? 'text-xl xl:text-2xl font-bold text-white mb-2'
                              : 'text-lg font-semibold text-white/80 mb-0'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeService === service.id
                              ? 'max-h-24 opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-sm text-white/70 leading-relaxed">
                            {service.description}
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

      {/* Full-Screen Service Cards */}
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => {
            serviceRefs.current[service.id] = el;
          }}
          className="relative min-h-screen h-screen snap-start snap-always overflow-hidden"
          style={{ minHeight: '100svh', height: '100svh' }}
        >
          <Link
            href={service.href}
            className="group block relative w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Extra gradient on left for desktop sidebar readability */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            {/* Tap/Click indicator */}
            <div className="absolute top-1/2 right-6 lg:right-12 -translate-y-1/2">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity animate-pulse lg:animate-none">
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Bottom content - positioned bottom right with padding for chatbot */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:pl-[400px] xl:pl-[450px] lg:pr-24 lg:flex lg:justify-end">
              <div className="flex items-center gap-3 lg:gap-6">
                <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-white">
                  {service.iconSrc ? (
                    <Image
                      src={service.iconSrc}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-8 h-8 lg:w-14 lg:h-14 brightness-0 invert"
                    />
                  ) : (
                    <span className="[&>svg]:w-6 [&>svg]:h-6 lg:[&>svg]:w-12 lg:[&>svg]:h-12 [&>svg]:stroke-white">{service.icon}</span>
                  )}
                </div>
                <h3 className="text-white group-hover:text-white/80 transition-colors duration-300 text-lg sm:text-xl lg:text-7xl xl:text-8xl font-[var(--font-jost)] font-semibold uppercase leading-tight">
                  <span className="lg:hidden"><SpacedTitle text={service.title} /></span>
                  <span className="hidden lg:inline tracking-[0.15em]">{formatWithLetterSpacing(service.title)}</span>
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
