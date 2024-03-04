'use client';

import { motion } from 'framer-motion';

function TwitterIcon({ className }) {
  const variants = {
    hover: {
      rotate: [0, -10, 10, -10, 0], // Shake by rotating slightly to both sides
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  return (
    <motion.svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={variants}
      whileHover="hover"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </motion.svg>
  );
}

export default TwitterIcon;
