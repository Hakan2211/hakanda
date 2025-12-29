'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function CurrentlyReading({ book }) {
  if (!book) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group"
    >
      <div className="mb-4 flex items-baseline gap-2">
        <BookOpen className="w-5 h-5 text-[#a58512]" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Currently Reading</h2>
      </div>

      <Link href="/garden/library">
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-6 md:p-8"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#a58512]/30 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative grid md:grid-cols-[200px_1fr] gap-6 items-start">
            {/* Book Cover */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[200px] mx-auto md:mx-0"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-white/10">
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </motion.div>

            {/* Book Info */}
            <div className="flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                {/* Category */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge 
                    variant="outline" 
                    className="border-[#a58512]/30 text-[#a58512] bg-[#a58512]/5 backdrop-blur-sm px-2 py-0.5 text-xs"
                  >
                    {book.category}
                  </Badge>
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                    {book.title}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 font-light">
                    by {book.author}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {book.description}
                </p>

                {/* Personal Notes */}
                {book.notes && (
                  <div className="relative pl-3 border-l-2 border-[#a58512]/30">
                    <p className="italic text-sm text-slate-700 dark:text-slate-300 line-clamp-2">
                      "{book.notes}"
                    </p>
                  </div>
                )}
              </div>

              {/* Reading Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Reading Progress</span>
                  <span className="font-mono text-[#a58512]">In Progress</span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#a58512] to-yellow-600 rounded-full"
                  />
                </div>
              </div>

              {/* View Library Link */}
              <div className="flex items-center gap-2 text-[#a58512] group-hover:gap-3 transition-all pt-2">
                <span className="text-xs font-medium">View Full Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
