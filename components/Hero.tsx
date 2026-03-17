'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-[70vh] flex items-center justify-center px-4 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center max-w-3xl">
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 text-balance leading-tight"
        >
          <motion.span
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            The Marathon is Over.
          </motion.span>
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl font-bold text-secondary mb-8 text-balance"
        >
          <motion.span
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
            style={{ animationDelay: '0.2s' }}
          >
            Welcome Home.
          </motion.span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed"
        >
          You've conquered the challenge. Now it's time to breathe, celebrate, and discover what comes next.
        </motion.p>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
    </motion.section>
  );
}
