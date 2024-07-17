import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/header/header';
import { cookies, headers } from 'next/headers';
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
  BLOG_TITLE,
  BLOG_DESCRIPTION,
} from '@/lib/constants';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: `${BLOG_TITLE}`,
  description: `${BLOG_DESCRIPTION}`,
  metadataBase: new URL(`https://hakanda.com`),
};

export default function RootLayout({ children }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || 'dark';

  return (
    <html
      lang="en"
      // data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body className={GeistSans.className}>
        <Header initialTheme={theme} />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
