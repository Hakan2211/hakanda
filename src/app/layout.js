import './globals.css';
import { BLOG_TITLE } from '@/lib/constants';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: { BLOG_TITLE },
  description: "Hakan Bilgic's personal blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
