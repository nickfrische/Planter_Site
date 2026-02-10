'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-forest-900 text-3xl font-bold mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-forest-900 font-bold mb-1">Phone</h3>
              <a href="tel:+12485550123" className="text-gray-600 hover:text-forest-600 transition-colors">
                (248) 555-0123
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-forest-900 font-bold mb-1">Email</h3>
              <a href="mailto:Info@DSPlanter.com" className="text-gray-600 hover:text-forest-600 transition-colors">
              Info@DSPlanter.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-forest-900 font-bold mb-1">Service Area</h3>
              <p className="text-gray-600">
                Greater Detroit Metro<br />
                Birmingham, Bloomfield Hills,<br />
                Grosse Pointe, Royal Oak, Troy
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-forest-900 font-bold mb-1">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8am - 6pm<br />
                Saturday: 9am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream-50 rounded-lg p-8">
        <h3 className="text-forest-900 font-bold mb-3">Response Time</h3>
        <p className="text-gray-600 leading-relaxed">
          We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
        </p>
      </div>

      <div className="bg-forest-50 rounded-lg p-8">
        <h3 className="text-forest-900 font-bold mb-3">What Happens Next?</h3>
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-600 text-white text-sm flex items-center justify-center font-bold">1</span>
            <span className="text-gray-600">We'll review your inquiry and contact you to schedule a consultation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-600 text-white text-sm flex items-center justify-center font-bold">2</span>
            <span className="text-gray-600">We visit your property to assess your space and discuss your vision</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-600 text-white text-sm flex items-center justify-center font-bold">3</span>
            <span className="text-gray-600">You'll receive a custom proposal tailored to your needs</span>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}
