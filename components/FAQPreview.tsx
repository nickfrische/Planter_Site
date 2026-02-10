'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'How much does it cost?',
    answer: 'The price of our arrangements is standardized and based on the size of the container. We measure by diameter for planters, and by length for window boxes. Pricing is the same for the entire season.',
  },
  {
    question: 'Can I use my existing planters?',
    answer: 'Absolutely! Arrangements for existing customer-owned planters are priced based on the container size. We are also available to help you choose new planters and containers. For larger numbers of planters we charge a nominal designer fee.',
  },
  {
    question: 'Does everyone get the same arrangement?',
    answer: 'Each planter is uniquely made for you. Before each delivery we put together a large assortment of plants that are perfectly suited for your growing conditions and make sure nothing looks too similar to those around them.',
  },
  {
    question: 'Can I choose what goes into my container?',
    answer: 'During your consultation we will document any requests. From there, our subscribers typically give us the challenge to do what we do best, which is put together beautiful seasonal arrangements for your home.',
  },
  {
    question: 'I do not have a green thumb. What happens if I kill it?',
    answer: 'Don\'t worry about it! We take out all the guesswork. People usually kill plants because they choose the wrong plants for the space or neglect to care for them. We choose plants that are ideal for your growing conditions and provide you with simple care instructions each time we deliver. Still worried? We also offer maintenance packages so all you need to do is water. We take care of pruning, inspect/treat for insects and fungus, and even replace plants that happen to die.',
  },
  {
    question: 'How do I know when my planter will be delivered or my seasonal plantings will take place?',
    answer: 'We\'ll contact you at the beginning of each season to confirm when we\'ll be planting in your area and make any changes to your subscription. We will also follow-up with text messages the week before we arrive and when we are on the way!',
  },
  {
    question: 'When or how can I cancel my subscription?',
    answer: 'cancel-email',
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[900px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16 text-xl sm:text-2xl md:text-3xl leading-tight break-words hyphens-none uppercase tracking-wide font-semibold"
        >
          Common Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-snug break-words hyphens-none">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-forest-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {faq.answer === 'cancel-email' ? (
                        <>
                          We strive for you to love your subscription service, but we realize sometimes a customer may need to cancel. If you need to cancel your plan, please just email us at{' '}
                          <a href="mailto:Info@DSPlanter.com" className="text-forest-600 font-medium hover:text-forest-700 underline">
                            Info@DSPlanter.com
                          </a>
                          . Plans can be cancelled at anytime.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-800 transition-colors"
          >
            See All FAQs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
