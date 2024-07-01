import { useState, useEffect, useRef } from 'react';

/**
 * useScrollSpy hook to observe visibility of elements and determine the active one based on scroll position.
 *
 * @param {Element[]} elements - An array of DOM element references to be observed.
 * @param {Object} options - Configuration options for the intersection observer.
 * @param {number} [options.offset=0] - Offset to adjust the root margin of the observer.
 * @param {Element} [options.root=null] - The element that acts as the viewport for the observed elements.
 * @returns {number} - The index of the currently active element based on visibility.
 */

const useScrollSpy = (elements, options = {}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const lastIntersectingIndex = useRef(-1);
  const observer = useRef(null);

  useEffect(() => {
    const rootMargin = `0px 0px -80% 0px`;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elements.indexOf(entry.target);
          if (entry.isIntersecting) {
            lastIntersectingIndex.current = index; // Update last intersecting index
            setActiveIndex(index); // Always set the active index to the last intersecting
          }
        });

        // If none are intersecting, default to the last known intersecting index
        const anyIntersecting = entries.some((entry) => entry.isIntersecting);
        if (!anyIntersecting && lastIntersectingIndex.current !== -1) {
          setActiveIndex(lastIntersectingIndex.current);
        }
      },
      {
        root: options.root || null,
        rootMargin,
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.current.observe(element));

    return () => observer.current.disconnect();
  }, [elements, options.offset, options.root]);

  return activeIndex;
};

export default useScrollSpy;
