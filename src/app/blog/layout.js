import Header from '@/components/header/header';

function Layout({ children }) {
  return (
    <main>
      <Header />
      <div className="h-[256px]"></div>
      {children}
      <footer>Bye</footer>
    </main>
  );
}

export default Layout;
