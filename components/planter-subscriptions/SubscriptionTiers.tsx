'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface SubItem {
  text: string;
}

interface Feature {
  text: string;
  isHeader?: boolean;
  subItems?: SubItem[];
}

interface Tier {
  id: string;
  name: string;
  tagline: string;
  features: Feature[];
  popular: boolean;
}

const tiers: Tier[] = [
  {
    id: 'basic',
    name: 'BASIC',
    tagline: 'ESSENTIAL BEAUTY',
    features: [
      { text: 'Custom design' },
      { text: 'Premium plants and materials' },
      { text: '4 Seasonal refreshes' },
      { text: 'Clean-up and removal of all debris' },
    ],
    popular: false,
  },
  {
    id: 'enhanced',
    name: 'ENHANCED',
    tagline: 'FULL-SERVICE CARE',
    features: [
      { text: 'Everything in BASIC, plus bi-weekly maintenance' },
      {
        text: 'Bi-weekly maintenance includes:',
        isHeader: true,
        subItems: [
          { text: 'Deep Water: Thorough root soaking for all plants' },
          { text: 'Fertilize: Water-soluble fertilizer for beautiful blooms' },
          { text: 'Dead Head: Remove dead flowers to encourage blooming' },
          { text: 'Prune: Remove stray/wilting branches for balanced growth' },
          { text: 'Spray for Insects (organic): Examination and treatment' },
          { text: 'Spray for Disease (organic): Preventative fungus treatment' },
          { text: 'Replacement of plants (as appropriate)' },
        ]
      },
    ],
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'ULTIMATE',
    tagline: 'COMPLETE PACKAGE',
    features: [
      { text: 'Everything in ENHANCED, plus irrigation' },
      {
        text: 'Irrigation system includes:',
        isHeader: true,
        subItems: [
          { text: 'Custom designed and professionally installed' },
          { text: 'Adjustable drip system for each planter' },
          { text: 'Stand-alone or connected to existing system' },
          { text: 'Programmable daily schedule with seasonal adjustments' },
        ]
      },
    ],
    popular: false,
  },
];

export default function SubscriptionTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tiers" ref={ref} className="w-full section-spacing bg-forest-900">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-xl sm:text-2xl md:text-3xl uppercase tracking-wide font-semibold">CHOOSE YOUR SUBSCRIPTION</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
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
                tier.popular ? 'ring-2 ring-white' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-forest-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}

              <div className="p-8">
                <h3 className="text-forest-900 text-2xl font-bold mb-2 tracking-wide">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.tagline}</p>

                <div className="mb-8">
                  <div className="text-forest-900 text-lg font-semibold mb-3">WHAT'S INCLUDED:</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i}>
                        {feature.isHeader ? (
                          <div>
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-forest-800 font-medium">{feature.text}</span>
                            </div>
                            {feature.subItems && (
                              <ul className="mt-2 ml-8 space-y-1.5">
                                {feature.subItems.map((subItem, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <span className="text-forest-500 flex-shrink-0 mt-1">•</span>
                                    <span className="text-gray-600 text-sm">{subItem.text}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature.text}</span>
                          </div>
                        )}
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
                  GET STARTED
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
          <p className="text-white/80 text-lg">
            Custom solutions available.{' '}
            <Link href="/contact" className="text-white font-semibold hover:text-cream-100">
              CONTACT
            </Link>{' '}
            for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
