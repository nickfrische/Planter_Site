'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const useCases = [
  {
    title: 'Special Events',
    description: 'Parties, celebrations, and gatherings',
    details: 'Transform your venue with stunning planters and seasonal decor for birthdays, anniversaries, graduations, and special occasions.',
    image: '/images/usecase-private.jpg',
  },
  {
    title: 'Real Estate Staging',
    description: 'Home sales and open houses',
    details: 'Boost curb appeal with beautiful seasonal planters that help homes sell faster and for higher prices.',
    image: '/images/usecase-staging.jpg',
  },
  {
    title: 'Vacation Rentals',
    description: 'Airbnb, VRBO, and short-term properties',
    details: 'Maintain attractive curb appeal year-round with seasonal planter rotations for your rental property.',
    image: '/images/usecase-vacation.jpg',
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="use-cases" ref={ref} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-forest-900 mb-4">Perfect For</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Flexible rental periods from days to months
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] bg-gray-300 flex items-center justify-center text-gray-500">
                {useCase.title} image
              </div>
              
              <div className="p-8">
                <h3 className="text-forest-900 text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{useCase.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-forest-900 text-xl font-bold mb-3">Rental Includes</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Professional design & installation</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Premium planters & plants</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optional maintenance during rental period</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Pickup & removal at end of rental</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
