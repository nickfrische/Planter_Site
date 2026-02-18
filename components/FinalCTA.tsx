'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="w-full relative section-spacing">
      <div className="absolute inset-0 bg-gray-800">
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-600">
          Background image placeholder
        </div>
        <div className="absolute inset-0 bg-forest-900/75" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 container-padding max-w-[800px] mx-auto"
      >
        <h2 className="text-center text-white mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight break-words hyphens-none">
          READY TO TRANSFORM YOUR OUTDOOR SPACE?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white/95 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white/95 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white/95 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              MESSAGE (OPTIONAL)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/95 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-forest-600 text-white font-semibold rounded-md hover:bg-forest-700 transition-colors text-lg"
          >
            REQUEST A CONSULTATION
          </button>
        </form>

        <p className="text-center text-white/90 mt-8 text-base sm:text-lg leading-relaxed break-words">
          OR CALL US:{' '}
          <a
            href="tel:+12485550123"
            className="font-semibold hover:text-forest-300 transition-colors whitespace-nowrap"
          >
            (248) 555-0123
          </a>
        </p>
      </motion.div>
    </section>
  );
}
