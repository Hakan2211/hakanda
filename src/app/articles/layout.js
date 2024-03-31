import Footer from '@/components/footer/footer';

function Layout({ children }) {
  return (
    <main className="bg-[var(--bg-color)]">
      <div className="h-[150px]"></div>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
