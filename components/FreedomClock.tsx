'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function RomanceClock() {
  const [time, setTime] = useState<TimeData>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2024-12-24T00:00:00');
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white flex flex-col items-center justify-center">
      {/* 1. SOFT ETHERIAL LIGHTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-rose-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-2xl w-full relative z-10 text-center">
        
        {/* 2. THE POETIC PRELUDE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-12 space-y-4"
        >
          <p className="font-serif italic text-rose-900/70 text-lg leading-relaxed px-4">
            "Though miles may have lingered between us some days, <br />
            our hearts remained closer than a shadow to light. <br />
            Beyond the physical, beyond the sun and the moon..."
          </p>
          <div className="h-px w-12 bg-rose-200 mx-auto" />
        </motion.div>

        {/* 3. THE CLEAN TIMER (Soft & Light) */}
        <div className="flex justify-center items-center gap-6 md:gap-10">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hrs', value: time.hours },
            { label: 'Min', value: time.minutes },
            { label: 'Sec', value: time.seconds },
          ].map((unit, i) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-light font-serif text-rose-800 tracking-tighter"
                  >
                    {unit.value}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-rose-300 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* 4. THE FINAL TOUCH */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-rose-400/60 font-semibold">
            Since the start of us
          </p>
          <p className="mt-2 font-serif text-rose-900/40 italic">
            24 . 12 . 2024
          </p>
        </motion.div>
      </div>

      {/* 5. FLOATING LIGHT PARTICLES */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-rose-200 rounded-full blur-[1px]"
      />
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-rose-100 rounded-full blur-[2px]"
      />
    </section>
  );
}