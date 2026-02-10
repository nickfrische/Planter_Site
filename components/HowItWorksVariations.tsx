'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    number: '1',
    title: 'Schedule a Design Consultation',
    description: 'During the consultation we will share how our service works, learn your preferences for colors and textures, and share our straight-forward payment process.',
    image: '/images/potted_plants_patio_pool.webp',
  },
  {
    number: '2',
    title: 'Make Your Selections',
    description: 'We will help you select what fits your style and budget.',
    image: '/images/seasonal-decor.jpeg',
  },
  {
    number: '3',
    title: 'Custom On-Site Installation',
    description: 'We communicate by text/email your installation week with no surprises. Everything is delivered fresh to you from our greenhouses for same-day installation. All debris is hauled away.',
    image: '/images/fall_planter.jpg',
  },
];

// Option 1: Static Title with Pop-up Description (Centered)
function Option1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" ref={ref} className="w-full py-16 md:py-20 bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-wide text-gray-900 leading-tight break-words hyphens-none uppercase">
            We Make It Easy
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider break-words">Option 1: Centered</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Overlay that darkens on hover */}
              <div className={`absolute inset-0 transition-all duration-500 ${hoveredIndex === index ? 'bg-gradient-to-b from-forest-900/95 to-forest-900/98' : 'bg-gradient-to-b from-black/30 to-black/50'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  {/* Brighter watermark number - always visible */}
                  <div className={`text-7xl font-bold mb-4 transition-all duration-500 ${hoveredIndex === index ? 'text-white/40' : 'text-white/50'}`}>
                    {step.number}
                  </div>

                  {/* Title - stays in same position */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide uppercase leading-tight break-words hyphens-none">
                    {step.title}
                  </h3>

                  {/* Description - pops up on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-white/95 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 2: Static Title with Pop-up Description (Left Justified)
function Option2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-wide text-gray-900 leading-tight break-words hyphens-none uppercase">
            We Make It Easy
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider break-words">Option 2: Left Justified</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Overlay that darkens on hover */}
              <div className={`absolute inset-0 transition-all duration-500 ${hoveredIndex === index ? 'bg-gradient-to-b from-forest-900/95 to-forest-900/98' : 'bg-gradient-to-b from-black/30 to-black/50'}`}>
                <div className="h-full flex flex-col items-start justify-center text-left px-8">
                  {/* Brighter watermark number - always visible */}
                  <div className={`text-7xl font-bold mb-4 transition-all duration-500 ${hoveredIndex === index ? 'text-white/40' : 'text-white/50'}`}>
                    {step.number}
                  </div>

                  {/* Title - stays in same position, left aligned */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide uppercase leading-tight break-words hyphens-none">
                    {step.title}
                  </h3>

                  {/* Description - pops up on hover, left aligned */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-white/95 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main component that renders both options for comparison
export default function HowItWorksVariations() {
  return (
    <>
      <Option1 />
      <Option2 />
    </>
  );
}
