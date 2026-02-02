'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Schedule Design Consultation',
    description: 'Connect with our team to discuss your vision and space',
    image: '/images/potted_plants_patio_pool.webp',
  },
  {
    number: '2',
    title: 'Make Your Selections',
    description: 'Choose from curated options tailored to your style',
    image: '/images/seasonal-decor.jpeg',
  },
  {
    number: '3',
    title: 'Custom On-Site Installation',
    description: 'We bring your vision to life with professional installation',
    image: '/images/fall_planter.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      className="w-full py-16 md:py-24 bg-white"
    >
      <div className="container-padding max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 tracking-tight text-gray-900"
        >
          HOW IT WORKS
        </motion.h2>

        {/* Three-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] md:aspect-[4/5]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb', // Fallback color
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 transition-opacity duration-500 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70" />

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-8">
                {/* Step Number */}
                <div className="text-6xl md:text-7xl font-bold text-white/20 mb-4">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide uppercase">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
