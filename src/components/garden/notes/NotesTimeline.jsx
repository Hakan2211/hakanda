'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function NotesTimeline({ children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative min-h-[500px] py-10">
       {/* Background Trace Line - SVG for smooth path drawing */}
       <div className="absolute left-[27px] top-0 bottom-0 w-20 -translate-x-1/2 h-full pointer-events-none">
         <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
           <defs>
             <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#f5e3a3" />
               <stop offset="100%" stopColor="#a58512" />
             </linearGradient>
           </defs>
           {/* Base line (faint) */}
           <line 
              x1="50%" y1="0" x2="50%" y2="100%" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-muted/20" 
            />
           {/* Animated line */}
           <motion.line
             x1="50%" y1="0" x2="50%" y2="100%"
             stroke="url(#gold-gradient)"
             strokeWidth="2"
             style={{ pathLength: scaleY }}
           />
         </svg>
       </div>

      <div className="space-y-16">
        {children}
      </div>
    </div>
  );
}
