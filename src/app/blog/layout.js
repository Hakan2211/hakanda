import Header from '@/components/header/header';

function Layout({ children }) {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="h-[150px]"></div>
      {children}
      <footer>Bye</footer>
    </main>
  );
}

export default Layout;
