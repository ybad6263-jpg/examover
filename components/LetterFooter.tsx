'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LetterFooter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 flex flex-col items-center justify-center min-h-screen bg-[#fffafa] overflow-hidden">
      
      {/* 1. THE ENVELOPE WRAPPER */}
      <div className="relative w-full max-w-sm sm:max-w-md h-[300px] mt-40">
        
        {/* THE LETTER (Higher Z-Index when Open) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: 0, opacity: 0, scale: 0.9 }}
              animate={{ y: -350, opacity: 1, scale: 1 }}
              exit={{ y: 0, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 40, damping: 12 }}
              className="absolute inset-x-2 sm:inset-x-0 z-[100] cursor-default"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Parchment Paper */}
              <div className="bg-[#fffdfc] p-6 sm:p-10 rounded-lg shadow-2xl border border-rose-100 min-h-[480px] sm:min-h-[500px] relative">
                
                {/* RESPONSIVE POLAROID */}
                <motion.div 
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: -6, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-6 -right-2 sm:top-8 sm:right-8 w-20 h-24 sm:w-28 sm:h-32 bg-white p-1 shadow-lg border border-rose-50 z-20"
                >
                  <div className="w-full h-[75%] bg-rose-50 overflow-hidden flex items-center justify-center">
                    <img src="/emo.jpg" className="object-cover h-full w-full" />
                  </div>
                  <div className="h-[25%] flex items-center justify-center">
                    <span className="text-[8px] text-rose-400 font-serif font-bold">Always</span>
                  </div>
                </motion.div>

                {/* LETTER CONTENT */}
                <div className="space-y-4 sm:space-y-6 font-serif text-rose-950 mt-4">
                  <h3 className="text-xl sm:text-2xl italic font-semibold text-rose-800">My Dearest,</h3>
                  
                  <div className="space-y-4 text-sm sm:text-lg leading-relaxed font-light">
                    <p className="italic font-medium">The books are finally closed. <br></br> The ink is dry.</p>
                    <p>
                      You've walked through the fire and emerged stronger. Those Grade 12 exams are now just a memory—proof of your amazing spirit.
                    </p>
                    <p>
                      Beyond the days and nights we were apart, our hearts remained closer than anything physical.
                    </p>
                  </div>

                  <div className="pt-6 sm:pt-8">
                    <p className="italic text-sm opacity-60">With endless pride,</p>
                    <p className="text-xl sm:text-2xl font-bold text-rose-500 mt-1">Me</p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute bottom-4 right-4 text-xs text-rose-300 hover:text-rose-500 transition-colors uppercase tracking-widest font-bold"
                >
                  Close ×
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. THE ENVELOPE BODY (Visual Only) */}
        <div 
          className="relative w-full h-48 sm:h-56 bg-rose-100 rounded-b-2xl shadow-xl z-20 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Inner Shadow / Flap details */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-200/30 to-transparent rounded-b-2xl" />
          <div className="absolute top-0 left-0 w-full h-full border-[40px] sm:border-[60px] border-transparent border-l-rose-200/50 border-r-rose-200/50 pointer-events-none" />
          
          {/* TOP FLAP (Folds behind the letter when open) */}
          <motion.div
            initial={false}
            animate={{ 
              rotateX: isOpen ? 180 : 0,
              zIndex: isOpen ? 0 : 50 
            }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-rose-200 rounded-t-2xl origin-bottom shadow-md"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 backface-hidden flex items-center justify-center">
               <motion.div
                 animate={!isOpen ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="text-3xl sm:text-4xl filter drop-shadow-md"
               >
                 ❤️
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. INSTRUCTION TEXT */}
      <AnimatePresence>
        {!isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 text-rose-300 font-serif italic text-sm tracking-widest text-center"
          >
            A secret letter is waiting for you...
          </motion.p>
        )}
      </AnimatePresence>

      {/* BACKGROUND PARTICLES */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-rose-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl -z-10" />
    </section>
  );
}