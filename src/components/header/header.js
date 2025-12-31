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
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Loader } from '@/components/ui/loader';

const CurlyUnderline = ({ isActive }) => {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-[12px] text-yellow-500 pointer-events-none"
      viewBox="0 0 100 15"
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
    >
      <motion.path
        d="M0,5 C20,15 80,-5 100,5"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={{
          hover: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeInOut' },
          },
          initial: { pathLength: 0, opacity: 0 },
        }}
        animate={isActive ? 'hover' : undefined}
      />
    </svg>
  );
};

function Header({ title, className, initialTheme }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const [theme, setTheme] = useState(initialTheme || 'light');

  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [navigatingTo, setNavigatingTo] = useState(null);

  // Debugging active state
  useEffect(() => {
    // console.log('Current pathname:', pathname);
  }, [pathname]);

  const handleLinkClick = (e, href) => {
    if (pathname === href) return;
    e.preventDefault();
    setNavigatingTo(href);
    startTransition(() => {
      router.push(href);
    });
  };

  const playfulHoverVariant = {
    hover: {
      y: -2,
      rotate: 3,
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
  };

  function handleToggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    Cookies.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 365,
    });

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    root.classList.toggle('dark', newTheme === 'dark');

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

  const getLinkClassName = (isActive) =>
    `${
      isActive ? 'text-yellow-600' : 'text-[var(--text-color-primary-800)]'
    } hover:text-yellow-600 duration-500 transition-colors ease-in-out`;

  const isGardenActive = pathname?.startsWith('/garden');
  const isArticlesActive = pathname?.startsWith('/articles');
  const isAboutActive = pathname === '/about';

  return (
    <header
      className={`${
        isShrunk ? 'h-[85px] md:h-[60px]' : `h-[120px]`
      }  fixed top-0 z-10 w-[100%] border border-transparent border-solid transition-height duration-300 ease-in-out`}
    >
      <div className={`${styles.wrapper} ${className}`}>
        <div
          className={`${styles.header_wrapper} relative flex items-center justify-between gap-1`}
        >
          <div className="absolute top-0 left-0 w-[100%] h-[100%] backdrop-blur-2xl -z-1"></div>
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
              } p-2 md:p-4 text-base md:text-xl font-bold bg-gradient-to-r from-[var(--text-color-primary-900)] to-[var(--text-color-primary-500)] text-transparent bg-clip-text`}
            >
              {title}
            </h1>
          </div>

          <div className="flex gap-4">
            <nav className="z-20">
              <ul className="flex items-center justify-between gap-6 w-fit leading-[1.9] tracking-[0.3px] text-xl">
                {pathname === '/' ||
                pathname?.startsWith('/garden') ||
                pathname === '/articles' ||
                pathname === '/about' ? (
                  <>
                    <motion.li
                      className="relative flex items-center gap-2"
                      variants={playfulHoverVariant}
                      initial="initial"
                      whileHover="hover"
                      style={{ display: 'inline-flex' }}
                    >
                      <Link
                        className={getLinkClassName(isGardenActive)}
                        href="/garden"
                        onClick={(e) => handleLinkClick(e, '/garden')}
                        aria-label="Navigate to garden page"
                      >
                        Garden
                      </Link>
                      {isPending && navigatingTo === '/garden' && (
                        <Loader className="h-3 w-3" />
                      )}
                      <CurlyUnderline isActive={isGardenActive} />
                    </motion.li>
                    <motion.li
                      className="relative flex items-center gap-2"
                      variants={playfulHoverVariant}
                      initial="initial"
                      whileHover="hover"
                      style={{ display: 'inline-flex' }}
                    >
                      <Link
                        className={getLinkClassName(isArticlesActive)}
                        href="/articles"
                        onClick={(e) => handleLinkClick(e, '/articles')}
                        aria-label="Navigate to articles page"
                      >
                        Articles
                      </Link>
                      {isPending && navigatingTo === '/articles' && (
                        <Loader className="h-3 w-3" />
                      )}
                      <CurlyUnderline isActive={isArticlesActive} />
                    </motion.li>
                    <motion.li
                      className="relative flex items-center gap-2"
                      variants={playfulHoverVariant}
                      initial="initial"
                      whileHover="hover"
                      style={{ display: 'inline-flex' }}
                    >
                      <Link
                        className={getLinkClassName(isAboutActive)}
                        href="/about"
                        onClick={(e) => handleLinkClick(e, '/about')}
                        aria-label="Navigate to about page"
                      >
                        About
                      </Link>
                      {isPending && navigatingTo === '/about' && (
                        <Loader className="h-3 w-3" />
                      )}
                      <CurlyUnderline isActive={isAboutActive} />
                    </motion.li>
                  </>
                ) : null}
              </ul>
            </nav>
            <button
              className="relative z-10"
              onClick={handleToggleTheme}
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              <AnimatePresence>
                {theme === 'light' ? (
                  <SunIcon
                    className="text-[var(--text-color-primary-800)]   hover:text-yellow-600
                  duration-500
                  transition-colors
                  ease-in-out"
                    aria-hidden="true"
                  />
                ) : (
                  <MoonIcon
                    className="text-[var(--text-color-primary-800)] hover:text-yellow-600 duration-500 transition-colors ease-in-out"
                    aria-hidden="true"
                  />
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
