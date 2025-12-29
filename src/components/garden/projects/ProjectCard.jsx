'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group mb-24 last:mb-0 w-full flex items-center justify-center px-4"
    >
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-2xl backdrop-blur-sm">
        {/* Abstract/Placeholder Backend Graphic */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900/50 dark:to-slate-950 group-hover:scale-105 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#a58512]/20 via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-white/95 via-white/50 dark:from-slate-950/95 dark:via-slate-950/50 to-transparent">
          
          <div className="flex justify-between items-start md:items-end flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-5">
               <div className="flex items-center gap-3 mb-2">
                 <span className="text-[#a58512] font-mono text-sm tracking-widest uppercase">
                    {project.year}
                 </span>
                 <div className="h-px w-12 bg-[#a58512]/50" />
               </div>
              
               {project.logo && (
                  <div className="w-12 h-12 mb-4 relative">
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full blur-xl" />
                      <div className="relative w-full h-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-xs backdrop-blur-md">
                          {project.title[0]}
                      </div>
                  </div>
               )}

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white px-3 py-1 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
            </div>

            <div className="relative group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B0811C] to-yellow-600 rounded-full blur opacity-20 group-hover/btn:opacity-50 transition duration-500"></div>
                <div className="relative p-px overflow-hidden rounded-full">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#B0811C_50%,#000000_100%)]" />
                  <div className="relative z-10 bg-white dark:bg-slate-950 rounded-full">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 px-8 py-3 w-full justify-center bg-white/50 dark:bg-black/50 hover:bg-[#B0811C]/10 transition-colors duration-300 rounded-full"
                    >
                      {/* <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" /> */}
                      <span className="font-mono text-sm uppercase tracking-widest font-bold text-slate-900 dark:text-yellow-50 group-hover/btn:text-[#a58512] dark:group-hover/btn:text-yellow-300 transition-colors">
                        Visit Website
                      </span>
                      <motion.span
                        initial={{ width: 0, opacity: 0, x: -10 }}
                        whileHover={{ width: 'auto', opacity: 1, x: 0 }}
                        className="overflow-hidden flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 ml-2 text-[#B0811C]" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
