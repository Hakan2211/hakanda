import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

function Layout({ children }) {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="h-[150px]"></div>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
