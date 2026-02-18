'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const team = [
  {
    name: 'BRIAN',
    role: 'CO-FOUNDER',
    bio: 'Passionate about creating beautiful outdoor spaces and building a sustainable local business.',
    image: '/images/team-brian.jpg',
  },
  {
    name: 'ELIZA',
    role: 'CO-FOUNDER',
    bio: 'Dedicated to design excellence and ensuring every planter exceeds customer expectations.',
    image: '/images/team-eliza.jpg',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full section-spacing bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-forest-900 mb-4">MEET THE TEAM</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            The people behind your beautiful planters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center text-gray-500">
                {member.name} photo
              </div>
              <h3 className="text-forest-900 text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-forest-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
