import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TrustWidget from './TrustWidget';
import { useEffect } from 'react';
import Seo from './Seo';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-24 rounded-md bg-accent px-4 py-2 font-semibold text-white transition-transform focus:translate-y-0 z-[9999]"
      >
        Skip to main content
      </a>
      <Seo />
      <Navbar />
      <TrustWidget />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
