'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flowers = [
  { id: 1, rot: -30, x: -70, msg: "The books are closed; your time is finally your own. ✨" },
  { id: 2, rot: -15, x: -35, msg: "I've watched your hard work—now watch the world admire it. 💖" },
  { id: 3, rot: 0,   x: 0,   msg: "You didn't just pass; you bloomed through the pressure. 🌹" },
  { id: 4, rot: 15,  x: 35,  msg: "Welcome back to the sunlight, my brilliant superstar. 🌟" },
  { id: 5, rot: 30,  x: 70,  msg: "No more exams, no more stress. Just us and the sunset. 🌅" },
];

const ElegantRose = ({ active }: { active: boolean }) => (
  <div className="relative w-20 h-28 flex items-center justify-center pointer-events-none">
    {/* The Rose Head - Watercolor/Fine Art Style */}
    <div className="relative w-14 h-14">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full blur-[0.5px]"
          style={{
            background: `radial-gradient(circle at center, #fb7185 0%, #e11d48 70%)`,
            opacity: 0.8 - i * 0.1,
            transform: `rotate(${i * 60}deg) scale(${1 - i * 0.05}) translate(${i}px, ${i}px)`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Makes it look like petals
          }}
        />
      ))}
      <div className="absolute inset-[35%] bg-rose-950 rounded-full blur-[2px] opacity-40" />
      <div className="absolute inset-[42%] bg-gradient-to-br from-rose-900 to-rose-700 rounded-full shadow-inner" />
    </div>

    {/* The Stem */}
    <div className={`absolute top-[50px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-emerald-800 to-transparent transition-all duration-1000 ${active ? 'h-56' : 'h-32'}`} />
  </div>
);

// Adorable Floating Hearts Component
const HeartBurst = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence>
      {active && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0.5, 1.2, 0.8], 
            x: (Math.random() - 0.5) * 150, 
            y: -100 - Math.random() * 100 
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute text-rose-400 text-xl pointer-events-none z-50"
        >
          ❤️
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default function FinalRefinedBouquet() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-4 bg-[#fff9f9] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Soft Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')] opacity-10" />
      
      <div className="max-w-md w-full relative z-10 flex flex-col items-center">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-rose-900 font-bold mb-2">Welcome Back</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-rose-200" />
            <p className="text-rose-400 font-serif italic text-sm">you did it!</p>
            <span className="h-[1px] w-8 bg-rose-200" />
          </div>
        </motion.header>

        {/* The Bouquet Bundle - Responsive Fan */}
        <div className="relative h-[350px] w-full flex items-end justify-center">
          {flowers.map((f) => {
            const active = selected === f.id;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: active ? 1.3 : 1,
                  y: active ? -160 : 0,
                  x: active ? 0 : f.x * 0.9, // Scaled for mobile width
                  rotate: active ? 0 : f.rot,
                  zIndex: active ? 50 : 10
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                onClick={() => setSelected(active ? null : f.id)}
                className="absolute cursor-pointer origin-bottom flex flex-col items-center"
              >
                <HeartBurst active={active} />

                {/* Romantic Card */}
                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -40, scale: 1 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute bottom-full mb-4 w-64 p-6 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(251,113,133,0.15)] text-center ring-1 ring-rose-100"
                    >
                      <p className="font-serif italic text-rose-900 text-lg leading-relaxed">
                        {f.msg}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <ElegantRose active={active} />
              </motion.div>
            );
          })}

          {/* Bouquet Handle/Ribbon */}
          <div className="absolute bottom-[-10px] flex flex-col items-center">
             <div className="w-6 h-6 rounded-full bg-rose-300/40 blur-sm mb-[-12px]" />
             <div className="w-1 h-12 bg-emerald-900/10 rounded-full" />
          </div>
        </div>

        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mt-12 text-rose-300 font-serif italic text-sm text-center"
        >
          {selected ? "You are so loved." : "Choose a rose to begin your rest..."}
        </motion.p>
      </div>
    </section>
  );
}