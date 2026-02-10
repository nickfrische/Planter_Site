'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    quote: 'Worth every penny. Our porch has never looked better.',
    author: 'Sarah M.',
    location: 'Birmingham',
  },
  {
    quote: 'The team is professional and creative. Our planters get compliments every season.',
    author: 'Michael R.',
    location: 'Bloomfield Hills',
  },
  {
    quote: 'Finally, beautiful planters without the work. This service is a game-changer.',
    author: 'Jennifer L.',
    location: 'Grosse Pointe',
  },
  {
    quote: 'Our commercial property has never looked more inviting. Highly recommend.',
    author: 'David K.',
    location: 'Royal Oak',
  },
  {
    quote: 'The seasonal transitions are seamless. We love coming home to fresh flowers.',
    author: 'Amanda T.',
    location: 'Troy',
  },
  {
    quote: 'Best investment for our home exterior. The neighbors are jealous!',
    author: 'Robert H.',
    location: 'Ann Arbor',
  },
  {
    quote: 'They transformed our restaurant entrance. Customers love it.',
    author: 'Lisa P.',
    location: 'Detroit',
  },
  {
    quote: 'So easy and hassle-free. They handle everything beautifully.',
    author: 'James W.',
    location: 'Northville',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-forest-100 flex items-center justify-center">
          <span className="text-forest-600 font-semibold text-sm">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-gray-900 text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 'left', speed = 30 }: { items: typeof testimonials; direction?: 'left' | 'right'; speed?: number }) {
  const [isPaused, setIsPaused] = useState(false);

  // Double the items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 ${isPaused ? '[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <section ref={ref} className="w-full py-16 md:py-24 bg-cream-50 overflow-hidden">
      {/* CSS for marquee animation */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-forest-900 text-xl sm:text-2xl md:text-3xl leading-tight break-words hyphens-none uppercase tracking-wide font-semibold">What Customers Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* First row - scrolls left */}
          <MarqueeRow items={firstRow} direction="left" speed={35} />

          {/* Second row - scrolls right */}
          <MarqueeRow items={secondRow} direction="right" speed={40} />
        </motion.div>
      </div>
    </section>
  );
}
