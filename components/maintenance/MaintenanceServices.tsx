'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'REGULAR WATERING',
    description: 'Consistent hydration schedules tailored to your plants and local weather conditions.',
    features: ['Daily or scheduled visits', 'Weather-adjusted watering', 'Moisture monitoring'],
  },
  {
    title: 'PRUNING & DEADHEADING',
    description: 'Remove dead blooms and shape plants to encourage new growth and maintain appearance.',
    features: ['Weekly deadheading', 'Shape maintenance', 'Growth promotion'],
  },
  {
    title: 'FERTILIZATION',
    description: 'Nutrient management to keep plants vibrant and healthy throughout the season.',
    features: ['Slow-release fertilizers', 'Seasonal feeding schedules', 'Custom nutrient blends'],
  },
  {
    title: 'PEST & DISEASE MANAGEMENT',
    description: 'Early detection and treatment to protect your plants from common issues.',
    features: ['Regular inspections', 'Organic treatment options', 'Preventive care'],
  },
  {
    title: 'SOIL HEALTH',
    description: 'Maintain optimal soil conditions for healthy root systems and plant growth.',
    features: ['Soil amendment', 'Drainage monitoring', 'pH balancing'],
  },
  {
    title: 'SEASONAL CLEANUP',
    description: 'End-of-season cleanup and preparation for the next planting cycle.',
    features: ['Plant removal', 'Soil refresh', 'Container cleaning'],
  },
];

export default function MaintenanceServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-forest-900 mb-4">MAINTENANCE SERVICES</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive care to keep your planters thriving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-forest-900 text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
