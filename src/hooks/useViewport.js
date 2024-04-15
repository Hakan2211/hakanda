import { useState, useEffect } from 'react';

function useViewport() {
  const [viewport, setViewport] = useState('desktop');

  function determineViewport(width) {
    if (width < 480) {
      return 'mobile';
    } else if (width >= 480 && width < 1280) {
      return 'laptop';
    } else {
      return 'desktop';
    }
  }

  useEffect(() => {
    function handleResize() {
      setViewport(determineViewport(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
}

export default useViewport;
