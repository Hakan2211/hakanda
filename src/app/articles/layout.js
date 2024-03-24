import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import { cookies } from 'next/headers';
import { COLOR_THEME_COOKIE_NAME } from '@/lib/constants';

function Layout({ children }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || 'light';

  return (
    <main className="bg-[var(--bg-color)]">
      <Header initialTheme={theme} />
      <div className="h-[150px]"></div>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
