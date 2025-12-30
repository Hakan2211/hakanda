'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function LatestGallery({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  // Get the latest 3 items (reverse to show newest first)
  const latestItems = [...items].reverse().slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="group"
    >
      <div className="mb-4 flex items-baseline gap-2">
        <Sparkles className="w-5 h-5 text-[#a58512]" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          Latest Creations
        </h2>
      </div>

      <Link href="/garden/gallery">
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
            {/* Gallery Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {latestItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-slate-200 dark:ring-white/10 shadow-lg"
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />

                  {/* Hover overlay with info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex flex-col justify-end p-3"
                  >
                    <p className="text-white text-xs font-medium line-clamp-1">
                      {item.title}
                    </p>
                    <Badge
                      variant="outline"
                      className="border-[#a58512]/50 text-[#a58512] bg-[#a58512]/10 backdrop-blur-sm text-[10px] px-1.5 py-0 w-fit mt-1"
                    >
                      {item.style}
                    </Badge>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#a58512]/30 to-transparent" />

            {/* View Gallery Link */}
            <div className="flex items-center gap-2 text-[#a58512] group-hover:gap-3 transition-all">
              <span className="text-xs font-medium">View Full Gallery</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
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
