'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './sidenav.module.css';
import { slugify } from '@/lib/utils';
import ScrollProgress from './scrollprogress/scrollProgressIndicator';
import useScrollSpy from '@/hooks/useScrollSpy';

function TableOfContents({ headings }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRefs = useRef(headings.map(() => React.createRef()));
  // const activeIndex = useScrollSpy(
  //   headings.map((heading) => document.getElementById(slugify(heading.id))),
  //   {
  //     offset: 100,
  //   }
  // );
  useEffect(() => {
    elementRefs.current = elementRefs.current.slice(0, headings.length);
    headings.forEach((heading, index) => {
      elementRefs.current[index].current = document.getElementById(
        slugify(heading.id)
      );
    });
  }, [headings]);

  // Use useScrollSpy hook properly outside of useEffect
  const elements = elementRefs.current.map((ref) => ref.current);
  const activeIndex = useScrollSpy(elements.filter(Boolean), {
    offset: 100,
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300 && !isVisible) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  function handleClick(event, id) {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 200; // Height of the fixed header or other offset
      const elementTop =
        window.scrollY + targetElement.getBoundingClientRect().top;
      const offsetPosition = elementTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Smooth scroll
      });
    }
  }

  return (
    <aside className={`${styles.sidenav} text-sm`}>
      <ScrollProgress />
      <div
        className={`${styles.sidenav_contents} sm:hidden xl:flex xl:flex-col ${
          isVisible ? styles.animate : ''
        } `}
      >
        {/* <div>{headings.length ? <h3>Table of Contents</h3> : null}</div> */}

        <nav className=" ml-[1.4rem] mb-[1.4rem] max-w-[220px] rounded-lg">
          <ul>
            {headings.map((heading, index) => (
              <li
                key={index}
                className={`${styles.tocItem} ${
                  isVisible ? styles.fadeIn : ''
                } ${
                  index === activeIndex ? 'text-yellow-600' : ''
                } hover:bg-[var(--text-color-primary-100)] text-[var(--text-color-primary-800)] hover:text-yellow-600 rounded-lg transition-colors duration-300 ease-in-out`}
                style={{
                  marginLeft: `${heading.depth - 2}em`,
                  lineHeight: 1.5,
                  letterSpacing: '0.3px',
                  //marginBottom: `${heading.depth === 2 ? '20px' : '16px'}`,
                  paddingTop: `${heading.depth === 2 ? '10px' : '8px'}`,
                  paddingBottom: `${heading.depth === 2 ? '10px' : '8px'}`,
                  paddingLeft: `${heading.depth === 2 ? '10px' : '8px'}`,

                  animationDelay: `${0.5 + index * 0.5}s`,
                }}
              >
                <a
                  href={`#${slugify(heading.id)}`}
                  onClick={(e) => handleClick(e, slugify(heading.id))}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default TableOfContents;
