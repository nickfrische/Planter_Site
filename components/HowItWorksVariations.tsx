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
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Make Your Selections',
    description: 'We will help you select what fits your style and budget.',
    image: '/images/seasonal-decor.jpeg',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Custom On-Site Installation',
    description: 'We communicate by text/email your installation week with no surprises. Everything is delivered fresh to you from our greenhouses for same-day installation. All debris is hauled away.',
    image: '/images/fall_planter.jpg',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14c-3 0-5.5-2-6-5 3-.5 5.5 1 6 4 .5-3 3-4.5 6-4-0.5 3-3 5-6 5zm0 0v6m-3 0h6M7 20h10" />
      </svg>
    ),
  },
];

// Variation 1: Photo cards with text overlay (White background)
function Variation1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 1: Photos with Text Overlay - White</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <div className="text-7xl font-bold text-white/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 2: Photo cards with text below (White background)
function Variation2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 2: Photos with Text Below - White</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundColor: '#e5e7eb',
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-forest-700">{step.number}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 3: Photo cards with text overlay (Green background)
function Variation3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-forest-900">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-white/60 uppercase tracking-wider">Option 3: Photos with Text Overlay - Green</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <div className="text-7xl font-bold text-white/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 4: Photo cards with text below (Green background)
function Variation4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-forest-900">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-white/60 uppercase tracking-wider">Option 4: Photos with Text Below - Green</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundColor: '#e5e7eb',
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-forest-700">{step.number}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 5: Icon-based design (White background)
function Variation5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 5: Icons with Text - White</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon with number badge */}
              <div className="relative mb-8">
                <div className="w-28 h-28 rounded-full bg-forest-100 flex items-center justify-center group-hover:bg-forest-200 transition-colors duration-300">
                  <div className="w-14 h-14 text-forest-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-forest-700 flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-tight px-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 6: Icon-based design (Green background)
function Variation6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-forest-900">
      <div className="container-padding max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-white/60 uppercase tracking-wider">Option 6: Icons with Text - Green</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon with number badge */}
              <div className="relative mb-8">
                <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 border border-white/20">
                  <div className="w-14 h-14 text-white flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-forest-700">{step.number}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight px-4">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 7: Hover-to-reveal descriptions (White background with photos)
function Variation7() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 7: Hover to Reveal Details - White</p>
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

              {/* Default state - just number and title */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - full description */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 8: Horizontal card layout (White background)
function Variation8() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 8: Horizontal Cards - White</p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group grid md:grid-cols-[300px_1fr] gap-6 items-center bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundColor: '#e5e7eb',
                  }}
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-forest-700">{step.number}</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main component that renders all variations
export default function HowItWorksVariations() {
  return (
    <>
      <Variation1 />
      <Variation2 />
      <Variation3 />
      <Variation4 />
      <Variation5 />
      <Variation6 />
      <Variation7 />
      <Variation8 />
    </>
  );
}
