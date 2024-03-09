import './globals.css';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/lib/constants';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: { BLOG_TITLE },
  description: { BLOG_DESCRIPTION },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
