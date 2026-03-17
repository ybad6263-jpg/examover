'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FreedomClock() {
  const [time, setTime] = useState<TimeData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set exam end date to today (since the student just finished)
    const examEndDate = new Date();
    examEndDate.setHours(0, 0, 0, 0);

    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - examEndDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </motion.div>
      <span className="text-xs md:text-sm font-medium text-foreground/60 uppercase tracking-wide">
        {label}
      </span>
    </motion.div>
  );

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-center text-secondary mb-4 text-balance"
        >
          Time Since Freedom
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mb-16 text-lg"
        >
          Every moment of freedom counts.
        </motion.p>

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <TimeUnit value={time.days} label="Days" />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-primary/30 font-light"
          >
            :
          </motion.span>
          <TimeUnit value={time.hours} label="Hours" />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl text-primary/30 font-light"
          >
            :
          </motion.span>
          <TimeUnit value={time.minutes} label="Minutes" />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl text-primary/30 font-light"
          >
            :
          </motion.span>
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
