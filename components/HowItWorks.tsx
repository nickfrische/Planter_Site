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
    title: 'No Maintenance Required',
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
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.4,
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
      className="w-full py-20 md:py-28 bg-forest-900"
    >
      <div className="container-padding max-w-[1000px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step Item */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon circle */}
                  <div className="relative w-[72px] h-[72px] rounded-full bg-white/[0.08] border border-white/20 text-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/[0.15] group-hover:border-white/30 group-hover:scale-105">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[15px] font-medium text-white/90 tracking-wide group-hover:text-white transition-colors duration-300">
                  {step.title}
                </span>
              </motion.div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  className="hidden md:flex items-center mx-12 origin-left"
                >
                  <div className="w-20 h-[1px] bg-gradient-to-r from-white/30 to-white/10" />
                  <svg className="w-3 h-3 text-white/30 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </motion.div>
              )}

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  className="md:hidden absolute left-1/2 -translate-x-1/2 h-8 w-[1px] bg-gradient-to-b from-white/30 to-white/10 -mb-4"
                  style={{ display: 'none' }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
