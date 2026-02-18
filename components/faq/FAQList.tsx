'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const faqs = [
  {
    category: 'Subscriptions',
    questions: [
      {
        q: 'What is a planter subscription?',
        a: 'A planter subscription is a year-round service where we design, install, and maintain seasonal planters at your property. We refresh your planters four times per year with new plants and designs that match the season.',
      },
      {
        q: 'How long is the subscription commitment?',
        a: 'Subscriptions run for a full year (four seasons). After your first year, subscriptions automatically renew unless you notify us at least 30 days before your renewal date.',
      },
      {
        q: 'When or how can I cancel my subscription?',
        a: 'cancel-email',
      },
      {
        q: 'What if I only want one or two seasons?',
        a: 'For one-time or seasonal installations, check out our Seasonal Decor service instead of a subscription.',
      },
    ],
  },
  {
    category: 'Service Details',
    questions: [
      {
        q: 'What areas do you serve?',
        a: 'We serve the greater Detroit metropolitan area, including Birmingham, Bloomfield Hills, Grosse Pointe, Royal Oak, Troy, and surrounding communities. Contact us to confirm service in your specific area.',
      },
      {
        q: 'Do I need to be home for installation?',
        a: 'No, you don\'t need to be home. We\'ll coordinate a convenient installation window and work independently. Many clients provide gate codes or access instructions.',
      },
      {
        q: 'Do I need to do any maintenance?',
        a: 'Our subscription service is completely maintenance-free. We handle all watering, deadheading, and care. If you have irrigation, we can work with that system. Otherwise, we\'ll handle watering during our regular visits.',
      },
      {
        q: 'I do not have a green thumb. What happens if I kill it?',
        a: "Don't worry about it! We take out all the guesswork. People usually kill plants because they choose the wrong plants for the space or neglect to care for them. We choose plants that are ideal for your growing conditions and provide you with simple care instructions each time we deliver. Still worried? We also offer maintenance packages so all you need to do is water. We take care of pruning, inspect/treat for insects and fungus, and even replace plants that happen to die.",
      },
      {
        q: 'How do I know when my planter will be delivered or my seasonal plantings will take place?',
        a: "We'll contact you at the beginning of each season to confirm when we'll be planting in your area and make any changes to your subscription. We will also follow-up with text messages the week before we arrive and when we are on the way!",
      },
      {
        q: 'What happens to my planters between seasons?',
        a: 'We remove the old plants and refresh the soil, then install new seasonal arrangements. Your planters stay in place year-round, and we store any seasonal decorative elements.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How much does it cost?',
        a: 'The price of our arrangements is standardized and based on the size of the container. We measure by diameter for planters, and by length for window boxes. Pricing is the same for the entire season.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, ACH transfers, and checks. Subscriptions can be paid annually or in quarterly installments.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No hidden fees. Your quote includes design, plants, installation, seasonal refreshes, and maintenance. The only additional costs would be for add-on services you request.',
      },
    ],
  },
  {
    category: 'Plants & Design',
    questions: [
      {
        q: 'Does everyone get the same arrangement?',
        a: 'Each planter is uniquely made for you. Before each delivery we put together a large assortment of plants that are perfectly suited for your growing conditions and make sure nothing looks too similar to those around them.',
      },
      {
        q: 'Can I choose what goes into my container?',
        a: 'During your consultation we will document any requests. From there, our subscribers typically give us the challenge to do what we do best, which is put together beautiful seasonal arrangements for your home. You have final approval on the design.',
      },
      {
        q: 'What if my planters get damaged or plants die?',
        a: 'We monitor plant health during our regular visits and replace any plants that fail to thrive at no additional cost. For planter damage, we\'ll assess and discuss repair or replacement options.',
      },
      {
        q: 'Do you use real or artificial plants?',
        a: 'We use real, premium plants for spring, summer, and fall. For winter arrangements, we use a mix of real evergreens and high-quality artificial accents that can withstand harsh weather.',
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I get started?',
        a: 'Request a consultation through our website or give us a call. We\'ll schedule a visit to see your space, discuss your preferences, and provide a custom quote.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking 2-4 weeks before the season change, but we can often accommodate shorter timelines. Our busiest times are late March (spring), late May (summer), September (fall), and mid-November (winter).',
      },
      {
        q: 'Can I use my existing planters?',
        a: 'Absolutely! Arrangements for existing customer-owned planters are priced based on the container size. We can also help you choose new planters and containers, or provide premium planters as part of your service.',
      },
    ],
  },
];

export default function FAQList() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[900px] mx-auto">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-forest-900 text-2xl font-bold mb-6">{category.category}</h2>
            
            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`;
                const isOpen = openItems.has(itemId);
                
                return (
                  <div
                    key={questionIndex}
                    className="bg-cream-50 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-cream-100 transition-colors"
                    >
                      <span className="text-forest-900 font-semibold pr-8">{faq.q}</span>
                      <svg
                        className={`w-6 h-6 text-forest-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.a === 'cancel-email' ? (
                            <>
                              We strive for you to love your subscription service, but we realize sometimes a customer may need to cancel. If you need to cancel your plan, please just email us at{' '}
                              <a href="mailto:Info@DSPlanter.com" className="text-forest-600 font-medium hover:text-forest-700 underline">
                                Info@DSPlanter.com
                              </a>
                              . Plans can be cancelled at anytime.
                            </>
                          ) : (
                            faq.a
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}

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
            className="inline-block min-w-[220px] px-8 py-3.5 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors text-center"
          >
            CONTACT
          </a>
        </motion.div>
      </div>
    </section>
  );
}