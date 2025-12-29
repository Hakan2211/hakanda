'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, ArrowRight, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CurrentProject({ project }) {
  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      className="group"
    >
      <div className="mb-4 flex items-baseline gap-2">
        <Briefcase className="w-5 h-5 text-[#a58512]" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Current Project</h2>
      </div>

      <Link href="/garden/projects">
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-6 md:p-8"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#a58512]/30 via-transparent to-transparent pointer-events-none" />
          
          {/* Glow effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a58512] to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative space-y-4">
            {/* Top Section - Status and Year */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge 
                  variant="outline" 
                  className="border-[#a58512]/30 text-[#a58512] bg-[#a58512]/5 backdrop-blur-sm px-2 py-0.5 text-xs"
                >
                  <TrendingUp className="w-3 h-3 mr-1 inline" />
                  {project.status}
                </Badge>
                <span className="text-slate-600 dark:text-slate-400 font-mono text-xs tracking-widest uppercase">
                  {project.year}
                </span>
              </div>
              
              {/* Progress indicator */}
              {project.progress && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="font-mono text-sm text-[#a58512]">{project.progress}%</span>
                </div>
              )}
            </div>

            {/* Middle Section - Title and Description */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#a58512]/30 text-[#a58512] bg-[#a58512]/5 backdrop-blur-sm hover:bg-[#a58512]/10 transition-colors text-xs px-2 py-0.5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#a58512]/30 to-transparent" />

            {/* Bottom Section - Progress bar and link */}
            <div className="space-y-3">
              {/* Progress Bar */}
              {project.progress && (
                <div className="space-y-2">
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#a58512] to-yellow-600 rounded-full"
                    />
                  </div>
                </div>
              )}

              {/* Link */}
              <div className="flex items-center gap-2 text-[#a58512] group-hover:gap-3 transition-all">
                <span className="text-xs font-medium">View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
