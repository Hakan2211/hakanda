import Header from '@/components/header/header';

function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <footer>Bye</footer>
    </main>
  );
}

export default Layout;
