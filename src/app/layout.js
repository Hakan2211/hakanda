import { Inter } from 'next/font/google';
import './globals.css';
import { BLOG_TITLE } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { BLOG_TITLE },
  description: "Hakan Bilgic's personal blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
