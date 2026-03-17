'use client';

import { motion } from 'framer-motion';

export default function LetterFooter() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Parchment background */}
          <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 text-4xl text-amber-200 opacity-30">✦</div>
            <div className="absolute top-4 right-4 text-4xl text-amber-200 opacity-30">✦</div>
            <div className="absolute bottom-4 left-4 text-4xl text-amber-200 opacity-30">✦</div>
            <div className="absolute bottom-4 right-4 text-4xl text-amber-200 opacity-30">✦</div>

            {/* Letter content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-lg md:text-xl text-amber-950/80 text-balance leading-relaxed italic"
              >
                {"Dear Graduate,"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 text-foreground/70"
              >
                <p className="font-serif text-base md:text-lg leading-relaxed text-amber-950/75">
                  The books are closed. The ink is dry.
                </p>
                <p className="font-serif text-base md:text-lg leading-relaxed text-amber-950/75">
                  You've walked through the fire and emerged stronger, wiser, and whole. Those exams that seemed insurmountable are now memories—proof of your resilience, your grit, and your unwavering spirit.
                </p>
                <p className="font-serif text-base md:text-lg leading-relaxed text-amber-950/75">
                  This moment is yours. Breathe it in. Let yourself rest in the knowing that you gave it everything you had. You showed up. You persevered. You won.
                </p>
                <p className="font-serif text-base md:text-lg leading-relaxed text-amber-950/75">
                  The world is waiting for what comes next—and it's going to be extraordinary.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-lg md:text-xl text-amber-950/80 pt-4"
              >
                {"With endless belief,"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-1"
              >
                <p className="font-serif text-xl md:text-2xl text-primary font-semibold italic">
                  Those Who Believe In You
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50" />
              </motion.div>
            </div>
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-3 mt-12"
          >
            <span className="text-3xl">✨</span>
            <span className="text-3xl">📖</span>
            <span className="text-3xl">🎉</span>
          </motion.div>
        </motion.div>

        {/* Final message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-foreground/50 text-sm md:text-base mt-12 italic"
        >
          Go rest. Go celebrate. Go live. You've earned it. ✨
        </motion.p>
      </div>
    </section>
  );
}
