'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Planter Subscriptions',
    href: '/planter-subscriptions',
    image: '/images/service-planters.jpg',
  },
  {
    title: 'Seasonal Decor',
    href: '/seasonal-decor',
    image: '/images/service-seasonal.jpg',
  },
  {
    title: 'Irrigation',
    href: '/irrigation',
    image: '/images/service-irrigation.jpg',
  },
  {
    title: 'Maintenance',
    href: '/maintenance',
    image: '/images/service-maintenance.jpg',
  },
];

const eventsService = {
  title: 'Events & Rentals',
  href: '/events-rentals',
  image: '/images/service-events.jpg',
};

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
                  Image placeholder
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3 className="text-white text-xl md:text-2xl mb-2">{service.title}</h3>
                  <span className="text-white/90 text-sm font-medium group-hover:text-forest-300 transition-colors flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href={eventsService.href}
            className="group block relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg bg-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
              Image placeholder
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
              <h3 className="text-white text-xl md:text-2xl mb-2">{eventsService.title}</h3>
              <span className="text-white/90 text-sm font-medium group-hover:text-forest-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
