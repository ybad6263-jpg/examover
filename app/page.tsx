'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import InteractiveBouquet from '@/components/InteractiveBouquet';
import FreedomClock from '@/components/FreedomClock';
import KiteCursor from '@/components/KiteCursor';
import LetterFooter from '@/components/LetterFooter';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <KiteCursor mousePos={mousePos} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Hero />
        <InteractiveBouquet />
        <FreedomClock />
        <LetterFooter />
      </motion.div>
    </div>
  );
}
