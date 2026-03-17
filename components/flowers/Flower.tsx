'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Rose from './Rose';
import Tulip from './Tulip';
import Daisy from './Daisy';
import Sunflower from './Sunflower';
import Lily from './Lily';

interface FlowerProps {
  flower: {
    id: number;
    icon: string;
    message: string;
    color: string;
  };
  isBloomed: boolean;
  onBloom: () => void;
}

export function Flower({ flower, isBloomed, onBloom }: FlowerProps) {
  const [showMessage, setShowMessage] = useState(false);

  const flowerMap: { [key: string]: () => JSX.Element } = {
    rose: () => <Rose />,
    tulip: () => <Tulip />,
    daisy: () => <Daisy />,
    sunflower: () => <Sunflower />,
    lily: () => <Lily />,
  };

  const handleClick = () => {
    onBloom();
    setShowMessage(!showMessage);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full p-2 transition-all"
      >
        <motion.div
          animate={{
            scale: isBloomed ? 1.2 : 1,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          {flowerMap[flower.icon]?.()}
        </motion.div>
      </motion.button>

      {isBloomed && showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-sm md:text-base font-medium text-foreground">
              {flower.message}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
