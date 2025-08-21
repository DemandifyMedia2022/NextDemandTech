'use client';

import React from 'react';
import NoomoPreloader from '@/components/preloader/NoomoPreloader';
import { SmoothScroll } from '../../components';
import HeaderNav from '@/components/ui/HeaderNav';
import Footer from '@/components/ui/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showPreloader, setShowPreloader] = React.useState(true);

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

  return (
    <>
      {showPreloader && (
        <NoomoPreloader
          isLoading={isLoading}
          onComplete={handlePreloaderComplete}
          duration={3000}
          brandName="YOUR BRAND"
          brandSubtitle="YOUR TAGLINE"
        />
      )}
      {!showPreloader && (
        <div className="animate-fadeIn">
          <SmoothScroll />
          <HeaderNav />
          <main>{children}</main>
          <div className="footer-container" style={{ padding: '0px', marginTop: '50px' }}>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}


