'use client';

import { cn } from '@/lib/utils';

/**
 * Songlar Logo - Music note icon
 */
export default function SonglarLogo({ className, size = 48 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
      style={{ width: size * 0.6, height: size * 0.6 }}
    >
      {/* Music note icon */}
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
