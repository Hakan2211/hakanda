'use client';

import Link from 'next/link';
import styles from './header.module.css';
import Logo from './logo';

import { useEffect, useState } from 'react';
import { sora } from '../fonts/fonts';

function Header({ title }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsShrunk(window.scrollY > 10);
      setShowTitle(window.scrollY > 300);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`${
        isShrunk ? 'h-[60px]' : `h-[120px]`
      } fixed top-0 z-10 w-[100%] border border-transparent border-solid transition-height duration-300 ease-in-out`}
    >
      <div className={styles.wrapper}>
        <div
          className={`${styles.header_wrapper} flex items-center justify-between gap-1`}
        >
          <div>
            <span>
              <Link href={'/'}>
                <Logo
                  className={`${
                    isShrunk ? 'w-12 h-12' : 'w-20 h-20'
                  } transition-all duration-300 ease-in-out`}
                />
              </Link>
            </span>
          </div>

          <div className="w-[100%] h-[100%] backdrop-blur-lg flex items-center justify-center">
            <h1
              className={`${
                showTitle
                  ? styles.titleTransitionVisible
                  : styles.titleTransition
              } ${
                sora.className
              } text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 text-transparent bg-clip-text`}
            >
              {title}
            </h1>
          </div>

          <div>Links</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
