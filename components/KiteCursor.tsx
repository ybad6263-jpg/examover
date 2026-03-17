'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface KiteCursorProps {
  mousePos: { x: number; y: number };
}

export default function KiteCursor({ mousePos }: KiteCursorProps) {
  // 1. IMPROVED PHYSICS: Using Springs for a "Floating" feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const kiteX = useSpring(useMotionValue(mousePos.x), springConfig);
  const kiteY = useSpring(useMotionValue(mousePos.y), springConfig);

  useEffect(() => {
    kiteX.set(mousePos.x);
    kiteY.set(mousePos.y);
  }, [mousePos, kiteX, kiteY]);

  return (
    <>
      {/* THE KITE STRING (Organic Path) */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-[60]">
        <motion.path
          d={`M ${mousePos.x} ${mousePos.y} Q ${(mousePos.x + kiteX.get()) / 2} ${mousePos.y + 20}, ${kiteX.get()} ${kiteY.get()}`}
          fill="none"
          stroke="rgba(244, 63, 94, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 2"
        />
      </svg>

      {/* THE KITE */}
      <motion.div
        className="fixed pointer-events-none z-[70]"
        style={{ x: kiteX, y: kiteY, left: -20, top: -20 }}
      >
        <motion.div
          animate={{ 
            rotate: [ -5, 5, -5 ],
            y: [ -2, 2, -2 ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Soft Shadow */}
            <circle cx="20" cy="20" r="10" fill="rgba(0,0,0,0.03)" className="blur-md" />
            
            {/* The Kite Body - Pretty Rose Shape */}
            <path
              d="M 20 4 L 34 20 L 20 36 L 6 20 Z"
              fill="rgba(255, 241, 242, 0.9)"
              stroke="rgba(244, 63, 94, 0.4)"
              strokeWidth="1.5"
            />
            
            {/* Internal "Thread" Structure */}
            <path d="M 20 4 V 36" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="1" />
            <path d="M 6 20 H 34" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="1" />

            {/* Adorable Center Heart */}
            <path
              d="M 20 22 C 18 22 17 21 17 19 C 17 17 19 16 20 18 C 21 16 23 17 23 19 C 23 21 22 22 20 22 Z"
              fill="#fb7185"
            />

            {/* Tiny Kite Bows/Tails */}
            <motion.g
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M 20 36 L 24 40 M 20 36 L 16 40" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Floating Sparkles around the Kite */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-rose-300 rounded-full"
            style={{ 
                width: 2, height: 2,
                left: 20, top: 20 
            }}
            animate={{
              x: [0, (i - 1) * 20, 0],
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* SOFT MOUSE GLOW */}
      <div 
        className="fixed pointer-events-none w-24 h-24 rounded-full blur-[60px] bg-rose-100/30 z-[50]"
        style={{ 
            left: mousePos.x - 48, 
            top: mousePos.y - 48 
        }}
      />
    </>
  );
}