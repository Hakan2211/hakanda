'use client';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Cookies from 'js-cookie';
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
} from '@/lib/constants';
import { useEffect } from 'react';

function applyTheme(theme) {
  const newTokens = theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
  const root = document.documentElement;

  Object.entries(newTokens).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

function Layout({ children }) {
  useEffect(() => {
    let savedTheme = Cookies.get(COLOR_THEME_COOKIE_NAME) || 'light';
    if (!savedTheme) {
      savedTheme = 'light'; // Default theme
      Cookies.set(COLOR_THEME_COOKIE_NAME, 'light', { expires: 365 });
    }
    applyTheme(savedTheme);
  }, []);

  return (
    <main className="bg-[var(--bg-color)]">
      <Header />
      <div className="h-[150px]"></div>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
