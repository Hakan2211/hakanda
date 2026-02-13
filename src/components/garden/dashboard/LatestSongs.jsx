'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, ArrowRight } from 'lucide-react';

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function LatestSongs({ songs }) {
  const [resolvedDurations, setResolvedDurations] = useState({});

  // Probe real durations from audio metadata
  useEffect(() => {
    if (!songs || songs.length === 0) return;
    const songsToProbe = songs.slice(0, 3);

    const probePromises = songsToProbe.map(
      (song) =>
        new Promise((resolve) => {
          const audio = new Audio();
          audio.preload = 'metadata';
          audio.crossOrigin = 'anonymous';
          audio.onloadedmetadata = () => {
            resolve({ id: song.id, duration: audio.duration });
            audio.src = '';
          };
          audio.onerror = () => {
            resolve({ id: song.id, duration: song.duration });
          };
          audio.src = song.url;
        })
    );

    Promise.all(probePromises).then((results) => {
      const map = {};
      results.forEach(({ id, duration }) => {
        map[id] = duration;
      });
      setResolvedDurations(map);
    });
  }, [songs]);

  if (!songs || songs.length === 0) {
    return null;
  }

  // Show latest 3 songs
  const latestSongs = songs.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      className="group"
    >
      <div className="mb-4 flex items-baseline gap-2">
        <Music className="w-5 h-5 text-[#a58512]" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Latest Songs</h2>
      </div>

      <Link href="/garden/songs">
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-6 md:p-8"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#a58512]/30 via-transparent to-transparent pointer-events-none" />

          {/* Glow effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a58512] to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative space-y-4">
            {/* Song List */}
            <div className="space-y-3">
              {latestSongs.map((song, index) => (
                <div
                  key={song.id}
                  className="flex items-center gap-4 py-2"
                >
                  {/* Track number */}
                  <span className="text-sm text-muted-foreground font-mono w-5 text-right">
                    {index + 1}
                  </span>

                  {/* Song info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                      {song.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {song.artist}
                    </p>
                  </div>

                  {/* Duration */}
                  <span className="text-xs text-muted-foreground font-mono">
                    {formatDuration(resolvedDurations[song.id] || song.duration)}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#a58512]/30 to-transparent" />

            {/* Listen link */}
            <div className="flex items-center gap-2 text-[#a58512] group-hover:gap-3 transition-all">
              <span className="text-xs font-medium">Listen to All Songs</span>
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
