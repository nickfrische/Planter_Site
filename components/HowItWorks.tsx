'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    title: 'We Come to You',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'We Design & Install',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14c-3 0-5.5-2-6-5 3-.5 5.5 1 6 4 .5-3 3-4.5 6-4-0.5 3-3 5-6 5zm0 0v6m-3 0h6M7 20h10" />
      </svg>
    ),
  },
  {
    title: 'No Maintenance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};


export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="w-full py-12 md:pt-20 md:pb-28 bg-forest-900"
    >
      <div className="container-padding max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="text-center text-white/50 text-xs uppercase tracking-[0.25em] mb-8 md:mb-10"
        >
          How It Works
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-row items-start justify-center gap-4 md:gap-0"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center"
            >
              {/* Step Item */}
              <div className="flex flex-col items-center text-center group w-[100px] md:w-[180px]">
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon circle */}
                  <div className="relative w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-white/[0.08] border border-white/20 text-white flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:bg-white/[0.15] group-hover:border-white/30 group-hover:scale-105">
                    <div className="w-6 h-6 md:w-8 md:h-8 [&>svg]:w-full [&>svg]:h-full">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] md:text-[14px] font-medium text-white/90 tracking-wide group-hover:text-white transition-colors duration-300 leading-tight">
                  {step.title}
                </span>
              </div>

              {/* Connector Line - visible on all screens */}
              {index < steps.length - 1 && (
                <div className="flex items-center w-6 md:w-16 justify-center -mt-6 md:-mt-4">
                  <div className="w-4 md:w-10 h-[1px] bg-white/20" />
                  <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/20 -ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
