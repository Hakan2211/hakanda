'use client';

import React from 'react';
import { motion } from 'framer-motion';

function MoonIcon({ className }) {
  const variants = {
    initial: { scale: 1, opacity: 0, rotate: 40 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 6,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
    exit: {
      scale: 1,
      opacity: 0,
      rotate: 90,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </motion.svg>
  );
}

export default MoonIcon;
