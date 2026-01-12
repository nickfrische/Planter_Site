'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'planters',
    title: 'Planter Subscriptions',
    description: 'Year-round beauty with seasonal refreshes. Professional design, installation, and maintenance included.',
    href: '/planter-subscriptions',
    image: '/images/corporate planter.jpg',
    icon: (
      // Potted plant icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14c-3 0-5.5-2-6-5 3-.5 5.5 1 6 4 .5-3 3-4.5 6-4-0.5 3-3 5-6 5zm0 0v6m-3 0h6M7 20h10" />
      </svg>
    ),
  },
  {
    id: 'seasonal',
    title: 'Seasonal Decor',
    description: 'Special occasion decorations for holidays, life events, and celebrations. One-time installations.',
    href: '/seasonal-decor',
    image: '/images/seasonal decor.jpeg',
    icon: (
      // Wreath/decorative circle icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c1 2 2 3 4 3M20 12c-2 1-3 2-3 4M12 20c-1-2-2-3-4-3M4 12c2-1 3-2 3-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v.01M16 12h.01M12 16v.01M8 12h.01" />
      </svg>
    ),
  },
  {
    id: 'irrigation',
    title: 'Irrigation',
    description: 'Professional container plant irrigation setup and maintenance to keep your plants healthy.',
    href: '/irrigation',
    image: '/images/irrigation.jpeg',
    icon: (
      // Water drops icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-3.5 0-6-2.5-6-5.5 0-3.5 6-9.5 6-9.5s6 6 6 9.5c0 3-2.5 5.5-6 5.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18c-1.5 0-2.5-1-2.5-2.5" />
      </svg>
    ),
  },
  {
    id: 'events',
    title: 'Events & Rentals',
    description: 'Short-term planter solutions for parties, corporate events, real estate staging, and vacation rentals.',
    href: '/events-rentals',
    image: '/images/event flower.webp',
    icon: (
      // Calendar with sparkle icon
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
  const sectionRef = useRef(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const element = serviceRefs.current[service.id];
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveService(service.id);
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

  const scrollToService = (serviceId: string) => {
    const element = serviceRefs.current[serviceId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16"
        >
          What We Do
        </motion.h2>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* Desktop Sidebar - Previous Style without numbers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:sticky lg:top-32 space-y-6"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className={`w-full text-left group transition-all duration-300 ${
                  activeService === service.id ? '' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-forest-600 text-white scale-110'
                        : 'bg-white text-forest-600 border-2 border-gray-200'
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className={`text-lg font-semibold transition-all duration-300 mb-1 ${
                        activeService === service.id
                          ? 'text-forest-900 font-bold'
                          : 'text-gray-700'
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
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-3 ml-16 h-0.5 transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-forest-600 w-12'
                      : 'bg-gray-200 w-8'
                  }`}
                />
              </button>
            ))}
          </motion.div>

          {/* Desktop Service Cards */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="space-y-12"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    serviceRefs.current[service.id] = el;
                  }}
                  className="scroll-mt-32"
                >
                  <Link
                    href={service.href}
                    className="group block relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-[var(--font-sora)] font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base mb-4 max-w-2xl">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Full-Screen Cards */}
          <div className="lg:hidden -mx-6 space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[70vh] min-h-[500px]"
              >
                <Link href={service.href} className="group block relative w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="text-white text-3xl font-[var(--font-sora)] font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-white/90 text-lg mb-6">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-3 text-white font-semibold text-lg">
                      Learn More
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
