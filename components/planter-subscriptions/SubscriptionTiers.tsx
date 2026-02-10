'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const tiers = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Essential Beauty',
    features: [
      'Custom design',
      'Premium plants and materials',
      '4 Seasonal refreshes',
      'Clean-up and removal of all debris',
    ],
    popular: false,
  },
  {
    id: 'enhanced',
    name: 'Enhanced',
    tagline: 'Full-Service Care',
    features: [
      'Everything in Basic plan',
      'Bi-weekly Maintenance (May-Oct)',
      'Deep Water: Thorough root soaking for all plants',
      'Fertilize: Water-soluble fertilizer for beautiful blooms',
      'Dead Head: Remove dead flowers to encourage blooming',
      'Prune: Remove stray/wilting branches for balanced growth',
      'Spray for Insects (organic): Examination and treatment',
      'Spray for Disease (organic): Preventative fungus treatment',
      'Replacement of Plants (as appropriate)',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Complete Package',
    features: [
      'Everything in Enhanced plan',
      'Irrigation System Included:',
      '   • Custom designed and professionally installed',
      '   • Adjustable drip system for each planter',
      '   • Stand-alone or connected to existing system',
      '   • Programmable daily schedule with seasonal adjustments',
      'Seasonal Decor: Professional holiday and seasonal decorations',
    ],
    popular: false,
  },
];

export default function SubscriptionTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tiers" ref={ref} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-forest-900 mb-4">Choose Your Subscription</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Select the plan that best fits your needs for year-round beauty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
                tier.popular ? 'ring-2 ring-forest-600' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-forest-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-forest-900 text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.tagline}</p>

                <div className="mb-8">
                  <div className="text-forest-900 text-lg font-semibold mb-2">What's Included:</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full py-3.5 text-center font-semibold rounded-md transition-colors ${
                    tier.popular
                      ? 'bg-forest-600 text-white hover:bg-forest-700'
                      : 'bg-forest-50 text-forest-700 hover:bg-forest-100'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Custom solutions available.{' '}
            <Link href="/contact" className="text-forest-600 font-semibold hover:text-forest-700">
              Contact us
            </Link>{' '}
            for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
