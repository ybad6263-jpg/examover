'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  // Animation for the "Floating Sparkles" in the background
  const sparkleVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: { duration: 3, repeat: Infinity }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#fffafb]">
      {/* 1. ADORABLE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft "Sunset" Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[100px]" />
        
        {/* Floating Sparkles/Hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            animate="animate"
            className="absolute text-rose-300/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* 2. THE "LITTLE GESTURE" TAG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full bg-rose-50 border border-rose-100 shadow-sm"
        >
          <span className="text-rose-500 font-serif italic text-sm tracking-wide">
            Your lock-in days are officially over...
          </span>
        </motion.div>

        {/* 3. ROMANTIC TYPOGRAPHY */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl md:text-8xl text-rose-950 leading-[1.1] mb-6"
        >
          Welcome Back , ဒေါ်လေး<br /> 
          <span className="relative inline-block">
            To The Sunlight
            {/* Hand-drawn style underline */}
            <motion.svg 
              className="absolute -bottom-2 left-0 w-full" 
              viewBox="0 0 300 10" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <path d="M5 5 Q 150 10 295 5" stroke="#fecdd3" strokeWidth="4" fill="transparent" strokeLinecap="round" />
            </motion.svg>
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <p className="text-rose-800/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light italic">
            "The textbooks are closed, the ink is finally dry. I've been waiting right here—I'm so proud of you."
          </p>
        </motion.div>

        {/* 4. THE "RECONNECT" CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium shadow-[0_10px_30px_rgba(244,63,94,0.3)] hover:bg-rose-600 transition-all hover:scale-105 active:scale-95">
            Scroll for your surprise
          </button>
          <div className="flex items-center gap-2 text-rose-300 text-xs uppercase tracking-widest font-bold">
            <span className="animate-bounce">↓</span>
            Let the rest begin
          </div>
        </motion.div>
      </div>

      {/* 5. DECORATIVE "POLAROID" PREVIEW */}
      <motion.div 
        initial={{ rotate: -10, x: -100, opacity: 0 }}
        animate={{ rotate: -5, x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden lg:block absolute left-12 bottom-20 w-32 h-40 bg-white p-2 shadow-xl rounded-sm border border-rose-50"
      >
        <div className="w-full h-24 bg-rose-100 rounded-sm mb-2 flex items-center justify-center text-2xl">📸</div>
        <div className="h-2 w-3/4 bg-rose-50 rounded-full mb-1" />
        <div className="h-2 w-1/2 bg-rose-50 rounded-full" />
      </motion.div>
    </section>
  );
}