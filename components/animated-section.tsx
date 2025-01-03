'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const fadeInUp = {
  initial: { 
    y: 10,
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1 
  },
  transition: { 
    duration: 0.4,
    ease: [0.21, 0.47, 0.32, 0.98]
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export function AnimatedSection({ children }: PropsWithChildren) {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    // @ts-ignore
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
} 