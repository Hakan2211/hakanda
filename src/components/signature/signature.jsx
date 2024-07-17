'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import Textlink from '../textlink/textlink';
import Twitterlink from '../textlink/twitterlink';

function Signature({ className, shareLink, shareTitle }) {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Combine refs function to use both GSAP and intersection observer
  const setRefs = React.useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      const element = ref.current;
      const path = element.querySelector('path');
      const length = path.getTotalLength();

      // Clear any previous GSAP instances
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      // Create the animation
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'var(--ease-out-expo)',
      });
    }
  }, [inView]);
  return (
    <div className="border-t-[1px] border-[var(--text-color-primary-200)]">
      <div className="mt-5">
        <div className="leading-[1.9] tracking-[0.5px] text-base">
          Have you liked this article?{' '}
          <Textlink
            classname="no-underline hover:text-[var(--text-color-primary-800)] duration-300"
            text="Share it with a friend on Twitter."
            // href={`https://twitter.com/intent/tweet?text=${shareTitle} https://www.hakanda.com/articles/${shareLink} by @hakanbilgo`}
            href={`http://twitter.com/share?text=hello&url=${shareLink}`}
          />
        </div>
        <div>
          If you have a question or you want to give feedback - shoot me a{' '}
          <Textlink
            classname="no-underline hover:text-[var(--text-color-primary-800)] duration-300"
            text="message"
            href="/contact"
            as="link"
          />{' '}
          or via{' '}
          <Twitterlink
            href="https://www.twitter.com/hakanbilgo"
            className="no-underline hover:text-[var(--text-color-primary-800)] duration-300"
          >
            Twitter
          </Twitterlink>
        </div>
        <p className="mt-5">Have a lovely day.</p>
        <p className="mb-5">
          &#x2015; <span>Hakan Bilgic</span>
        </p>
      </div>

      <svg
        ref={setRefs}
        className={`${className} w-20 h-20 signature-stroke`}
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 1.5,
        }}
      >
        <g transform="matrix(1.22259,0,0,1.39601,-7.94452,-3.89373)">
          <path
            d="M6.954,8.192C7.187,6.797 8.436,6.112 9.891,6.376C12.016,6.762 13.847,8.201 15.185,9.83C18.461,13.821 19.441,18.703 19.502,23.796C19.53,26.095 19.374,28.213 18.751,30.441C17.992,33.158 16.747,36.714 13.406,37.033C10.319,37.327 7.77,34.337 7.77,31.413C7.77,29.84 8.491,28.14 9.328,26.837C11.308,23.753 13.336,20.956 16.348,18.765C19.537,16.446 23.554,14.779 26.283,11.868C27.999,10.038 29.318,7.498 27.949,5.1C27.685,4.638 27.448,4.199 26.986,3.902C24.848,2.527 22.163,3.529 21.229,5.926C20.571,7.613 20.957,9.584 21.333,11.276C22.375,15.967 25.575,20.16 27.949,24.246C29.027,26.101 30.32,28.124 30.765,30.253C30.891,30.859 31.011,31.474 31.065,32.092C31.235,34.054 30.815,37.596 28.249,37.799C25.888,37.985 23.709,36.024 22.993,33.857C22.625,32.739 22.693,31.447 22.693,30.29C22.693,28.248 22.966,26.215 23.519,24.246C23.954,22.697 24.354,21.137 24.795,19.591C25.136,18.398 25.619,17.266 26.034,16.1C26.364,15.174 26.686,14.274 27.126,13.394C28.578,10.49 30.222,5.314 34.369,5.7C35.73,5.827 36.822,6.671 37.635,7.728C39.326,9.928 40.211,12.617 39.977,15.422C39.803,17.509 38.565,19.438 36.321,19.666C35.52,19.747 34.744,19.73 33.993,19.403C33.721,19.285 33.463,19.136 33.205,18.99C33.087,18.924 32.738,18.808 32.867,18.765C35.126,18.012 37.389,20.174 38.648,21.693C41.734,25.414 42.42,31.38 39.96,35.644C39.541,36.371 38.912,37.332 38.133,37.722C36.36,38.608 33.82,37.852 32.829,36.147C32.416,35.435 32.482,34.436 32.55,33.656C32.677,32.19 33.488,30.947 34.106,29.652C35.562,26.602 37.792,23.792 39.699,21.018C42.179,17.411 44.838,13.972 47.133,10.243"
            style={{
              fill: 'none',
              strokeWidth: '0.75px',
              //strokeDasharray: '100%',
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export default Signature;
