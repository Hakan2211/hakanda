'use client';

import { motion } from 'framer-motion';
function SendIcon({ className, isHovered }) {
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
      //whileHover="hover"
      animate={isHovered ? 'hover' : 'initial'}
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </motion.svg>
  );
}

export default SendIcon;
