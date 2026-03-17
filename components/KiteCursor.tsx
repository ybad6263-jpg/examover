'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface KiteCursorProps {
  mousePos: { x: number; y: number };
}

export default function KiteCursor({ mousePos }: KiteCursorProps) {
  const trailRef = useRef<Array<{ x: number; y: number; id: number }>>([]);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const idRef = useRef(0);

  useEffect(() => {
    trailRef.current = [];
    let lastTime = 0;

    const updateTrail = () => {
      const now = Date.now();
      if (now - lastTime > 50) {
        const newTrailPoint = {
          x: mousePos.x,
          y: mousePos.y,
          id: idRef.current++,
        };

        trailRef.current = [newTrailPoint, ...trailRef.current].slice(0, 15);
        setTrail([...trailRef.current]);
        lastTime = now;
      }

      requestAnimationFrame(updateTrail);
    };

    const animationId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  return (
    <>
      {/* Kite trail string */}
      <svg
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 40 }}
      >
        {trail.length > 1 && (
          <polyline
            points={trail.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="rgba(200, 152, 211, 0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>

      {/* Kite */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          x: mousePos.x - 15,
          y: mousePos.y - 15,
          zIndex: 50,
        }}
        animate={{
          rotate: Math.atan2(mousePos.y, mousePos.x) * (180 / Math.PI) + 45,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Kite diamond shape */}
          <path
            d="M 15 2 L 25 15 L 15 28 L 5 15 Z"
            fill="rgba(200, 152, 211, 0.7)"
            stroke="rgba(172, 122, 188, 0.9)"
            strokeWidth="1"
          />
          
          {/* Kite cross */}
          <line x1="15" y1="2" x2="15" y2="28" stroke="rgba(172, 122, 188, 0.6)" strokeWidth="0.8" />
          <line x1="5" y1="15" x2="25" y2="15" stroke="rgba(172, 122, 188, 0.6)" strokeWidth="0.8" />
          
          {/* Kite pattern */}
          <circle cx="15" cy="15" r="3" fill="rgba(255, 255, 255, 0.5)" />
          
          {/* Decorative elements */}
          <circle cx="12" cy="12" r="1.5" fill="rgba(172, 122, 188, 0.4)" />
          <circle cx="18" cy="12" r="1.5" fill="rgba(172, 122, 188, 0.4)" />
          <circle cx="15" cy="18" r="1.5" fill="rgba(172, 122, 188, 0.4)" />
        </svg>
      </motion.div>

      {/* Subtle glow effect around kite */}
      <motion.div
        className="fixed pointer-events-none rounded-full blur-xl"
        style={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          width: 40,
          height: 40,
          background: 'radial-gradient(circle, rgba(200, 152, 211, 0.15), transparent)',
          zIndex: 40,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
