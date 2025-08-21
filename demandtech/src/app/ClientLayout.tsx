'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NoomoPreloader from '@/components/preloader/NoomoPreloader';
import { SmoothScroll } from '../../components';
import HeaderNav from '@/components/ui/HeaderNav';
import Footer from '@/components/ui/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showPreloader, setShowPreloader] = React.useState(true);
  const [preloaderKey, setPreloaderKey] = React.useState(0);
  const pathname = usePathname();
  const lastPathRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (showPreloader) {
      document.body.classList.add('preloader-active');
    } else {
      document.body.classList.remove('preloader-active');
    }
    return () => {
      document.body.classList.remove('preloader-active');
    };
  }, [showPreloader]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowPreloader(false);
  };

  // Trigger preloader on route changes (App Router)
  React.useEffect(() => {
    if (lastPathRef.current === null) {
      lastPathRef.current = pathname;
      return;
    }
    if (lastPathRef.current !== pathname) {
      lastPathRef.current = pathname;
      setIsLoading(true);
      setShowPreloader(true);
      setPreloaderKey((k) => k + 1); // force remount for fresh animation
    }
  }, [pathname]);

  // Listen for manual preloader triggers (e.g., from buttons/links) BEFORE route change
  React.useEffect(() => {
    const handler = () => {
      setIsLoading(true);
      setShowPreloader(true);
      setPreloaderKey((k) => k + 1);
    };
    window.addEventListener('show-preloader', handler as EventListener);
    return () => window.removeEventListener('show-preloader', handler as EventListener);
  }, []);

  return (
    <div className={showPreloader ? '' : 'animate-fadeIn'}>
      <SmoothScroll />
      <HeaderNav />
      <main>{children}</main>
      <div className="footer-container" style={{ padding: '0px', marginTop: '50px' }}>
        <Footer />
      </div>
      {showPreloader && (
        <NoomoPreloader
          key={preloaderKey}
          isLoading={isLoading}
          onComplete={handlePreloaderComplete}
          duration={3000}
          brandName="YOUR BRAND"
          brandSubtitle="YOUR TAGLINE"
        />
      )}
    </div>
  );
}


