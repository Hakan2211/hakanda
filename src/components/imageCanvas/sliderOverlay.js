'use client';

import React from 'react';
import { useSlider } from './useSlider';
import { sora } from '../fonts/fonts';
import { motion } from 'framer-motion';

const TEXT_TRANSITION_HEIGHT = 100;

function SliderOverlay() {
  const { curSlide, items, nextSlide, prevSlide, direction } = useSlider();

  let prevIdx = direction === 'next' ? curSlide - 1 : curSlide + 1;
  if (prevIdx === items.length) {
    prevIdx = 0;
  } else if (prevIdx === -1) {
    prevIdx = items.length - 1;
  }
  return (
    <div className="pointer-events-none absolute z-10 h-[100%] w-[100%]">
      <div className="text-slate-100">
        <div
          className={`${sora.className} absolute left-10 text-4xl leading-[1.9] tracking-[0.3px] text-[var(--background-topic-yellow)] `}
        >
          <p>{items[curSlide].year}</p>
        </div>
        <button
          className="pointer-events-auto absolute top-1/2"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 stroke-[var(--text-color-primary-800)] hover:stroke-[var(--text-color-primary-600)] transition-opacity duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          className="pointer-events-auto absolute top-1/2 right-0"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 stroke-[var(--text-color-primary-800)] hover:stroke-[var(--text-color-primary-600)] transition-opacity duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        <div
          className={`${sora.className} absolute right-10 bottom-0 text-4xl leading-[1.9] tracking-[0.3px] text-[var(--background-topic-yellow)]`}
        >
          <div className="overflow-hidden">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial="current"
                className="absolute flex justify-end bottom-0 right-0 overflow-hidden"
                animate={
                  idx === curSlide
                    ? 'current'
                    : idx === prevIdx
                    ? 'prev'
                    : 'next'
                }
                variants={{
                  current: {
                    transition: {
                      delay: 0.4,
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                {item.country.split('').map((char, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block" // to make the transform work (translateY)
                    variants={{
                      current: {
                        translateY: 0,
                        transition: {
                          duration: 0.8,
                          from:
                            direction === 'prev'
                              ? -TEXT_TRANSITION_HEIGHT
                              : TEXT_TRANSITION_HEIGHT,
                          type: 'spring',
                          bounce: 0.2,
                        },
                      },
                      prev: {
                        translateY:
                          direction === 'prev'
                            ? TEXT_TRANSITION_HEIGHT
                            : -TEXT_TRANSITION_HEIGHT,
                        transition: {
                          duration: 0.8,
                          from:
                            direction === 'start' ? -TEXT_TRANSITION_HEIGHT : 0,
                        },
                      },
                      next: {
                        translateY: TEXT_TRANSITION_HEIGHT,
                        transition: {
                          from: TEXT_TRANSITION_HEIGHT,
                        },
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderOverlay;
