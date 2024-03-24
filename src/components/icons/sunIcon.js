'use client';

import React from 'react';
import { motion } from 'framer-motion';

function SunIcon({ className }) {
  const variants = {
    initial: { scale: 0.6, opacity: 0, rotate: 40 },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 170,
        damping: 9,
        duration: 0.8,
      },
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
    exit: { scale: 0.6, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.svg
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* SVG content unchanged */}
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </motion.svg>
  );
}

export default SunIcon;
