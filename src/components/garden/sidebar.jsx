'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BookOpen, Camera, PenTool, Layers, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Garden', href: '/garden', icon: Sprout },
  { title: 'Notes', href: '/garden/notes', icon: PenTool },
  { title: 'Projects', href: '/garden/projects', icon: Layers },
  { title: 'Gallery', href: '/garden/gallery', icon: Camera },
  { title: 'Library', href: '/garden/library', icon: BookOpen },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="px-3">
        <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
          Explorer
        </h2>
        <div className="space-y-1">
          {items.map((item) => {
            const isActive = item.href === '/garden' ? pathname === item.href : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative group flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                 {isActive && (
                  <motion.div
                    layoutId="activeSidebarItem"
                    className="absolute inset-0 rounded-md bg-secondary shadow-sm"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-3">
                  <item.icon className={cn("h-4 w-4", isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                  {item.title}
                </span>

                {!isActive && (
                   <motion.div
                    className="absolute inset-0 rounded-md bg-accent/50 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
