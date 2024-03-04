'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Arrow = ({ svg: SVGComponent }) => {
  // Ref for the SVG container
  const ref = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Ensure ref is current and ScrollTrigger is available
    if (ref.current) {
      const element = ref.current;

      gsap.fromTo(
        element.querySelector('path'),
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom top',
            scrub: 15,
          },
        }
      );
    }

    // Cleanup function to kill ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref}>
      <SVGComponent />
    </div>
  );
};

export default Arrow;
