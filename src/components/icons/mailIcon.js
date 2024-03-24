'use client';

import { motion } from 'framer-motion';

function MailIcon({ className, isHovered }) {
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
      // whileHover="hover"
      animate={isHovered ? 'hover' : 'initial'}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </motion.svg>
  );
}

export default MailIcon;
