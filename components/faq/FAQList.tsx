'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'The price of our arrangements is standardized and based on the size of the container. We measure by diameter for planters, and by length for window boxes. Pricing is the same for the entire season.',
  },
  {
    q: 'Can I use my existing planters?',
    a: 'Absolutely! Arrangements for existing customer-owned planters are priced based on the container size. We are also available to help you choose new planters and containers. For larger numbers of planters we charge a nominal designer fee.',
  },
  {
    q: 'Does everyone get the same arrangement?',
    a: 'Each planter is uniquely made for you. Before each delivery we put together a large assortment of plants that are perfectly suited for your growing conditions and make sure nothing looks too similar to those around them.',
  },
  {
    q: 'Can I choose what goes into my container?',
    a: 'During your consultation we will document any requests. From there, our subscribers typically give us the challenge to do what we do best, which is put together beautiful seasonal arrangements for your home.',
  },
  {
    q: 'I do not have a green thumb. What happens if I kill it?',
    a: 'Don\'t worry about it! We take out all the guesswork. People usually kill plants because they choose the wrong plants for the space or neglect to care for them. We choose plants that are ideal for your growing conditions and provide you with simple care instructions each time we deliver. Still worried? We also offer maintenance packages so all you need to do is water. We take care of pruning, inspect/treat for insects and fungus, and even replace plants that happen to die.',
  },
  {
    q: 'How do I know when my planter will be delivered or my seasonal plantings will take place?',
    a: 'We\'ll contact you at the beginning of each season to confirm when we\'ll be planting in your area and make any changes to your subscription. We will also follow-up with text messages the week before we arrive and when we are on the way!',
  },
  {
    q: 'When or how can I cancel my subscription?',
    a: 'We strive for you to love your subscription service, but we realize sometimes a customer may need to cancel. If you need to cancel your plan, please just email us at Info@DSPlanter.com. Plans can be cancelled at anytime.',
  },
];

export default function FAQList() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-forest-900 mb-4 text-xl sm:text-2xl md:text-3xl uppercase tracking-wide font-semibold">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);

            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-snug break-words hyphens-none">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-forest-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-forest-50 rounded-lg"
        >
          <h3 className="text-forest-900 text-xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help. Reach out and we'll get back to you quickly.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
