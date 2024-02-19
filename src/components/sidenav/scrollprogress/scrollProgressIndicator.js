'use client';

import { useState, useEffect } from 'react';
import styles from './scrollProgressIndicator.module.css';

function ScrollProgress({ height, bgColor, fillColor }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to update the screen size state
    const updateScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Set initial screen size
    updateScreenSize();

    // Add event listener for screen resize
    window.addEventListener('resize', updateScreenSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const scrolled = (currentScroll / totalHeight) * 100;
      setScrollProgress(scrolled);

      if (currentScroll > 300 && !isVisible) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const dynamicStyles = isMobileView
    ? { width: `${scrollProgress}%` }
    : { height: `${scrollProgress}%` };

  return (
    <div
      className={`${styles.scroll_progress_container} ${
        isVisible ? styles.animate : ''
      }`}
    >
      <div
        // style={{ height: `${scrollProgress}%`, inlineStyles }}
        style={dynamicStyles}
        className={`${styles.scroll_progress_fill}`}
      ></div>
    </div>
  );
}

export default ScrollProgress;
