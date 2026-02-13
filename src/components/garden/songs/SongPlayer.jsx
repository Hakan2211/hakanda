'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AudioVisualizer from './AudioVisualizer';
import SongList from './SongList';

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function SongPlayer({ songs }) {
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const progressRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [analyserNode, setAnalyserNode] = useState(null);
  const [resolvedDurations, setResolvedDurations] = useState({});

  // Probe real durations from audio metadata on mount
  useEffect(() => {
    const probePromises = songs.map(
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

  // Initialize Web Audio API context and analyser
  const initAudioContext = useCallback(() => {
    if (audioContextRef.current) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    sourceRef.current = source;
    setAnalyserNode(analyser);
  }, []);

  // Handle song selection
  const handleSongSelect = useCallback(
    (song) => {
      // If clicking the same song, toggle play/pause
      if (currentSong?.id === song.id) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
        return;
      }

      // New song selected
      setCurrentSong(song);
      setCurrentTime(0);

      // Small delay so src updates before playing
      setTimeout(() => {
        initAudioContext();
        if (audioContextRef.current?.state === 'suspended') {
          audioContextRef.current.resume();
        }
        audioRef.current.play();
        setIsPlaying(true);
      }, 50);
    },
    [currentSong, isPlaying, initAudioContext]
  );

  // Play/Pause toggle
  const togglePlayPause = useCallback(() => {
    if (!currentSong) {
      // Play the first song if none selected
      if (songs.length > 0) {
        handleSongSelect(songs[0]);
      }
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      initAudioContext();
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong, isPlaying, songs, handleSongSelect, initAudioContext]);

  // Skip to previous/next song
  const skipTrack = useCallback(
    (direction) => {
      if (!currentSong || songs.length === 0) return;
      const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
      let nextIndex;
      if (direction === 'next') {
        nextIndex = (currentIndex + 1) % songs.length;
      } else {
        nextIndex = (currentIndex - 1 + songs.length) % songs.length;
      }
      handleSongSelect(songs[nextIndex]);
    },
    [currentSong, songs, handleSongSelect]
  );

  // Seek to position in track
  const handleSeek = useCallback(
    (e) => {
      if (!audioRef.current || !duration) return;
      const rect = progressRef.current.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audioRef.current.currentTime = percent * duration;
      setCurrentTime(percent * duration);
    },
    [duration]
  );

  // Volume toggle
  const toggleMute = useCallback(() => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  // Audio element event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      // Auto-play next track
      const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
      if (currentIndex < songs.length - 1) {
        handleSongSelect(songs[currentIndex + 1]);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentSong, songs, handleSongSelect]);

  // Set volume on audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentSong?.url}
        preload="metadata"
        crossOrigin="anonymous"
      />

      {/* Visualizer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-6 md:p-8"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a58512]/40 via-transparent to-transparent pointer-events-none" />

        <div className="relative">
          {/* Now Playing info */}
          <AnimatePresence mode="wait">
            {currentSong ? (
              <motion.div
                key={currentSong.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-center mb-6"
              >
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  {currentSong.title}
                </h3>
                <p className="text-sm text-muted-foreground">{currentSong.artist}</p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-6"
              >
                <h3 className="text-lg md:text-xl font-medium text-muted-foreground">
                  Select a song to play
                </h3>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Audio Visualizer */}
          <AudioVisualizer
            analyserNode={analyserNode}
            isPlaying={isPlaying}
          />

          {/* Progress Bar */}
          <div className="mt-6 space-y-2">
            <div
              ref={progressRef}
              onClick={handleSeek}
              className="relative h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer group/progress overflow-hidden"
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#a58512] to-[#d4a843] rounded-full"
                style={{ width: `${progress}%` }}
              />
              {/* Hover thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#a58512] rounded-full shadow-md opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-4">
            {/* Volume */}
            <button
              onClick={toggleMute}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Skip Back */}
            <button
              onClick={() => skipTrack('prev')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Play/Pause */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlayPause}
              className="w-12 h-12 rounded-full bg-[#a58512] hover:bg-[#B0811C] text-white flex items-center justify-center shadow-lg shadow-[#a58512]/25 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.button>

            {/* Skip Forward */}
            <button
              onClick={() => skipTrack('next')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Volume slider (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  setIsMuted(val === 0);
                }}
                className="w-20 h-1 accent-[#a58512] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Track List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 shadow-xl backdrop-blur-sm p-4 md:p-6"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#a58512]/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <SongList
            songs={songs}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onSongSelect={handleSongSelect}
            resolvedDurations={resolvedDurations}
          />
        </div>
      </motion.div>
    </div>
  );
}
