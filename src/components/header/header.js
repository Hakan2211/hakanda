'use client';

import Link from 'next/link';
import styles from './header.module.css';
import Logo from './logo';

import { useEffect, useState } from 'react';
import { sora } from '../fonts/fonts';
import MoonIcon from '../icons/moonIcon';
import SunIcon from '../icons/sunIcon';
import Cookies from 'js-cookie';
import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from '@/lib/constants';

function Header({ title, className, initialTheme }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [theme, setTheme] = useState(initialTheme || 'light');

  function handleToggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    Cookies.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 365,
    });

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

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
      }  fixed top-0 z-10 w-[100%] border border-transparent border-solid transition-height duration-300 ease-in-out`}
    >
      <div className={`${styles.wrapper} ${className}`}>
        <div
          className={`${styles.header_wrapper} relative flex items-center justify-between gap-1`}
        >
          <div className="absolute top-0 left-0 w-[100%] h-[100%]  backdrop-blur-lg -z-1 "></div>
          <div>
            <span>
              <Link href={'/'}>
                <Logo
                  className={`${
                    isShrunk ? 'w-12 h-12' : 'w-20 h-20'
                  } transition-all duration-300 ease-in-out relative z-10`}
                />
              </Link>
            </span>
          </div>

          <div className="w-[100%] h-[100%] z-10 relative flex items-center justify-center">
            <h1
              className={`${
                showTitle
                  ? styles.titleTransitionVisible
                  : styles.titleTransition
              } ${
                sora.className
              } text-2xl font-bold bg-gradient-to-r from-[var(--text-color-primary-900)] to-[var(--text-color-primary-500)] text-transparent bg-clip-text`}
            >
              {title}
            </h1>
          </div>

          <button className="relative z-10" onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <SunIcon className="text-[var(--text-color-primary-800)]" />
            ) : (
              <MoonIcon className="text-[var(--text-color-primary-800)]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
