'use client';

import { useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

const BAR_COUNT_DESKTOP = 42;
const BAR_COUNT_MOBILE = 24;

export default function AudioVisualizer({ analyserNode, isPlaying, className }) {
  const barsRef = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  const barCountRef = useRef(BAR_COUNT_DESKTOP);

  // Determine bar count based on container width
  useEffect(() => {
    const updateBarCount = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        barCountRef.current = width < 500 ? BAR_COUNT_MOBILE : BAR_COUNT_DESKTOP;
      }
    };
    updateBarCount();
    window.addEventListener('resize', updateBarCount);
    return () => window.removeEventListener('resize', updateBarCount);
  }, []);

  const animate = useCallback(() => {
    if (!analyserNode) return;

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    const barCount = barCountRef.current;
    const step = Math.floor(bufferLength / barCount);

    for (let i = 0; i < barsRef.current.length; i++) {
      const bar = barsRef.current[i];
      if (!bar) continue;

      if (i < barCount) {
        bar.style.display = 'block';
        // Sample frequency data for this bar
        const dataIndex = Math.min(i * step, bufferLength - 1);
        const value = dataArray[dataIndex];
        // Normalize to 0-100 range, with a minimum height
        const height = isPlaying ? Math.max(4, (value / 255) * 100) : 4;
        bar.style.height = `${height}%`;
        bar.style.opacity = isPlaying ? Math.max(0.4, value / 255) : 0.3;
      } else {
        bar.style.display = 'none';
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [analyserNode, isPlaying]);

  useEffect(() => {
    if (analyserNode && isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Reset bars to idle state
      barsRef.current.forEach((bar) => {
        if (bar) {
          bar.style.height = '4%';
          bar.style.opacity = '0.3';
        }
      });
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [analyserNode, isPlaying, animate]);

  // Create maximum bars (desktop count), hide extras on mobile via the animation loop
  const bars = Array.from({ length: BAR_COUNT_DESKTOP }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex items-end justify-center gap-[2px] md:gap-[3px] h-32 md:h-48 w-full px-2',
        className
      )}
    >
      {bars.map((i) => (
        <div
          key={i}
          ref={(el) => { barsRef.current[i] = el; }}
          className="flex-1 max-w-[8px] rounded-t-full transition-[height] duration-75 ease-out"
          style={{
            height: '4%',
            opacity: 0.3,
            background: `linear-gradient(to top, #a58512, #d4a843)`,
          }}
        />
      ))}
    </div>
  );
}
