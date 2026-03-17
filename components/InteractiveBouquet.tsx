'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower } from './flowers/Flower';

const flowers = [
  {
    id: 1,
    icon: 'rose',
    message: '✨ So proud of your hard work.',
    color: 'text-secondary',
  },
  {
    id: 2,
    icon: 'tulip',
    message: '🎉 You\'re finally free!',
    color: 'text-primary',
  },
  {
    id: 3,
    icon: 'daisy',
    message: '💫 Rest, you\'ve earned it.',
    color: 'text-accent',
  },
  {
    id: 4,
    icon: 'sunflower',
    message: '🌟 Shine bright, superstar!',
    color: 'text-secondary',
  },
  {
    id: 5,
    icon: 'lily',
    message: '🎊 The world is yours now.',
    color: 'text-accent',
  },
];

export default function InteractiveBouquet() {
  const [bloomed, setBloomed] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-center text-primary mb-4 text-balance"
        >
          Your Bouquet of Victory
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mb-16 text-lg"
        >
          Click each flower to receive a message from those who believe in you.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-center justify-items-center">
          <AnimatePresence>
            {flowers.map((flower, index) => (
              <motion.div
                key={flower.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Flower
                  flower={flower}
                  isBloomed={bloomed === flower.id}
                  onBloom={() => setBloomed(bloomed === flower.id ? null : flower.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
