'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section
      className="w-full min-h-[70vh] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/about-us-picture.png)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 min-h-[70vh] flex items-center">
        <div className="container-padding max-w-[1400px] mx-auto w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white mb-6"
            >
              ABOUT US
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/90 text-xl md:text-2xl"
            >
              Bringing beautiful seasonal planters to Detroit-area homes while creating flexible jobs for our community.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
