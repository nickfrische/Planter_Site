'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface VideoSectionProps {
  videoId: string;
  title?: string;
  subtitle?: string;
}

export default function VideoSection({ videoId, title, subtitle }: VideoSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full bg-forest-900 pt-16 md:pt-20 lg:pt-24 pb-0">
      {/* Text Block Above Video */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 px-6"
        >
          {title && (
            <h2 className="text-white mb-4 text-xl sm:text-2xl md:text-3xl leading-tight break-words hyphens-none uppercase tracking-wide font-semibold">{title}</h2>
          )}
          {subtitle && (
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed break-words">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Full-Width Video Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full px-4 md:px-8 lg:px-16"
      >
        <div className="relative w-full max-w-[1600px] mx-auto aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
