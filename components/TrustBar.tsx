'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const trustItems = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: 'Local & Family-Owned',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: '4 Seasonal Refreshes/Year',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Zero Maintenance Required',
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-white via-white to-cream-100 py-12 md:py-16 pb-20 md:pb-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 container-padding max-w-[1400px] mx-auto">
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-forest-600 mb-4">{item.icon}</div>
            <p className="text-lg font-medium text-gray-900">{item.label}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="#16402e"
            opacity="0.3"
          />
          <path
            d="M0,20 C200,80 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="#16402e"
            opacity="0.5"
          />
          <path
            d="M0,40 C250,100 450,40 600,70 C750,100 950,40 1200,70 L1200,120 L0,120 Z"
            fill="#16402e"
          />
        </svg>
      </div>
    </section>
  );
}
