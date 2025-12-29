'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowRight, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function LatestNote({ note }) {
  if (!note) {
    return null;
  }

  // Format date nicely
  const formattedDate = new Date(note.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="group"
    >
      <div className="mb-4 flex items-baseline gap-2">
        <FileText className="w-5 h-5 text-[#a58512]" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Latest Note</h2>
      </div>

      <Link href="/garden/notes">
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-6 md:p-8"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#a58512]/30 via-transparent to-transparent pointer-events-none" />
          
          {/* Glow effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a58512] to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative space-y-4">
            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={note.date}>{formattedDate}</time>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {note.title}
            </h3>

            {/* Topics */}
            <div className="flex flex-wrap gap-2">
              {note.topics.map((topic) => (
                <Badge
                  key={topic}
                  variant="outline"
                  className="border-[#a58512]/30 text-[#a58512] bg-[#a58512]/5 backdrop-blur-sm hover:bg-[#a58512]/10 transition-colors text-xs px-2 py-0.5"
                >
                  {topic}
                </Badge>
              ))}
            </div>

            {/* Excerpt */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              {note.excerpt}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#a58512]/30 to-transparent" />

            {/* Read More */}
            <div className="flex items-center gap-2 text-[#a58512] group-hover:gap-3 transition-all">
              <span className="text-xs font-medium">Read Full Note</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
