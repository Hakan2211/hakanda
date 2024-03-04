'use client';

import { motion } from 'framer-motion';

function RSSIcon({ className }) {
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
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </motion.svg>
  );
}

export default RSSIcon;
