'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown } from 'lucide-react';

export default function NoteCard({ note, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="group relative z-10 grid grid-cols-[1fr_3fr] gap-6 rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-[#f5e3a3]/50 hover:bg-[#a58512]/5 cursor-pointer"
    >
      <div className="space-y-4">
        <time className="block text-sm font-medium text-muted-foreground">
          {format(new Date(note.date), 'MMMM dd, yyyy')}
        </time>
        <div className="flex flex-wrap gap-2">
          {note.topics?.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center rounded-full border border-[#f5e3a3]/30 bg-[#f5e3a3]/10 px-2.5 py-0.5 text-xs font-semibold text-[#a58512] transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="relative pb-6">
        <motion.div 
          className="prose dark:prose-invert max-w-none overflow-hidden"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '120px' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        
        <AnimatePresence>
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" 
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100 py-2"
          animate={{ y: [0, 4] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 1,
          }}
        >
             <span className="text-xs font-medium text-[#a58512]">
                {isExpanded ? 'Show less' : 'Read more'}
             </span>
             <motion.div
               animate={{ rotate: isExpanded ? 180 : 0 }}
               transition={{ duration: 0.3 }}
             >
                <ChevronDown className="w-4 h-4 text-[#a58512]" />
             </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
