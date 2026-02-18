'use client';

import { motion } from 'framer-motion';

export default function AreasHero() {
  return (
    <section className="w-full bg-gradient-to-b from-forest-900 to-forest-800 py-20">
      <div className="container-padding max-w-[1200px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white mb-6"
        >
          AREAS WE SERVE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Proudly serving the greater Detroit metropolitan area
        </motion.p>
      </div>
    </section>
  );
}
