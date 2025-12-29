'use client';

import { motion } from 'framer-motion';

export default function DashboardHero() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-8 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-zinc-500 bg-clip-text text-transparent"
      >
        Hakan's Digital Garden
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-2"
      >
        <span className="text-[#a58512]">✦</span>
        {currentDate}
        <span className="text-[#a58512]">✦</span>
      </motion.p>
    </motion.div>
  );
}
