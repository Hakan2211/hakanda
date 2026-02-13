'use client';

import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function EqBars() {
  return (
    <div className="flex items-end gap-[2px] h-3.5 w-3.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-[#a58512]"
          animate={{
            height: ['40%', '100%', '60%', '100%', '40%'],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function SongList({ songs, currentSong, isPlaying, onSongSelect, resolvedDurations = {} }) {
  return (
    <div className="space-y-1">
      {/* Header row */}
      <div className="grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_1fr_1fr_auto] gap-4 px-4 py-2 text-xs text-muted-foreground uppercase tracking-widest border-b border-slate-200 dark:border-white/5">
        <span>#</span>
        <span>Title</span>
        <span className="hidden md:block">Artist</span>
        <span>Duration</span>
      </div>

      {/* Song rows */}
      {songs.map((song, index) => {
        const isActive = currentSong?.id === song.id;
        const isCurrentlyPlaying = isActive && isPlaying;

        return (
          <motion.button
            key={song.id}
            onClick={() => onSongSelect(song)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={cn(
              'w-full grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_1fr_1fr_auto] gap-4 px-4 py-3 rounded-lg text-left transition-all duration-200 group',
              isActive
                ? 'bg-[#a58512]/10 border border-[#a58512]/20'
                : 'hover:bg-white/50 dark:hover:bg-slate-800/40 border border-transparent'
            )}
          >
            {/* Track number / Play indicator */}
            <div className="flex items-center justify-center">
              {isCurrentlyPlaying ? (
                <EqBars />
              ) : isActive ? (
                <Pause className="w-3.5 h-3.5 text-[#a58512]" />
              ) : (
                <span className="text-sm text-muted-foreground group-hover:hidden">
                  {index + 1}
                </span>
              )}
              {!isActive && (
                <Play className="w-3.5 h-3.5 text-muted-foreground hidden group-hover:block" />
              )}
            </div>

            {/* Title + Artist (mobile shows both in one column) */}
            <div className="flex flex-col justify-center min-w-0">
              <span
                className={cn(
                  'text-sm font-medium truncate',
                  isActive ? 'text-[#a58512]' : 'text-slate-900 dark:text-white'
                )}
              >
                {song.title}
              </span>
              <span className="text-xs text-muted-foreground truncate md:hidden">
                {song.artist}
              </span>
            </div>

            {/* Artist (desktop only) */}
            <span className="hidden md:flex items-center text-sm text-muted-foreground truncate">
              {song.artist}
            </span>

            {/* Duration */}
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground font-mono">
                {formatDuration(resolvedDurations[song.id] || song.duration)}
              </span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
