'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NoomoPreloader from '@/components/preloader/NoomoPreloader';
import { SmoothScroll } from '../../components';
import HeaderNav from '@/components/ui/HeaderNav';
import Footer from '@/components/ui/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const [showPreloader, setShowPreloader] = React.useState(true);
  const pathname = usePathname();
  const hasInitialized = React.useRef(false);
  const isStudioRoute = pathname?.startsWith('/studio');

  // Determine if preloader has already been shown this session
  React.useEffect(() => {
    try {
      const hasSeenPreloader = typeof window !== 'undefined' && window.sessionStorage.getItem('hasSeenPreloader');
      if (hasSeenPreloader) {
        setShowPreloader(false);
        setIsInitialLoading(false);
        hasInitialized.current = true;
      }
    } catch (_) {
      // Ignore sessionStorage errors (e.g., privacy mode)
    }
  }, []);

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
    setIsInitialLoading(false);
    setShowPreloader(false);
    hasInitialized.current = true;
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('hasSeenPreloader', 'true');
      }
    } catch (_) {
      // Ignore if sessionStorage is unavailable
    }
  };

  // Only show preloader on initial load, not on route changes
  React.useEffect(() => {
    if (hasInitialized.current) {
      return; // Don't show preloader after initial load
    }
  }, [pathname]);

  return (
    <div className={showPreloader ? '' : 'animate-fadeIn'}>
      <SmoothScroll />
      {!isStudioRoute && <HeaderNav />}
      
      <main>{children}</main>
      
      {!isStudioRoute && (
        <div className="footer-container" style={{ padding: '0px', marginTop: '50px' }}>
          <Footer />
        </div>
      )}
      
      {/* Only show preloader on initial page load */}
      {showPreloader && !hasInitialized.current && (
        <NoomoPreloader
          isLoading={isInitialLoading}
          onComplete={handlePreloaderComplete}
          duration={3000}
          brandName="DEMAND TECH"
          brandSubtitle="DIGITAL EXPERIENCES"
        />
      )}
    </div>
  );
}