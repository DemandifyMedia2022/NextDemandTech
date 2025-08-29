'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NoomoPreloader from '@/components/preloader/NoomoPreloader';
import { SmoothScroll } from '../../components';
import Footer from '@/components/ui/Footer';
import { SlideTabsExample } from '@/components/ui/SliderTabs';
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const [showPreloader, setShowPreloader] = React.useState(true);
  const [showNav, setShowNav] = React.useState(true);
  const pathname = usePathname();
  const hasInitialized = React.useRef(false);
  const lastScrollY = React.useRef(0);
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

  // Show header when scrolling up, hide when scrolling down
  React.useEffect(() => {
    const delta = 4; // minimal movement to consider
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY <= 0) {
            setShowNav(true);
          } else if (currentY > lastScrollY.current + delta) {
            setShowNav(false); // scrolling down
          } else if (currentY < lastScrollY.current - delta) {
            setShowNav(true); // scrolling up
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // initialize starting scroll position
    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only show preloader on initial load, not on route changes
  React.useEffect(() => {
    if (hasInitialized.current) {
      return; // Don't show preloader after initial load
    }
  }, [pathname]);

  return (
    <div className={showPreloader ? '' : 'animate-fadeIn'}>
      <SmoothScroll />
      <div
        className="w-full header-nav sticky top-0 z-[500] bg-transparent transition-transform duration-300 will-change-transform px-2 sm:px-4 lg:px-0"
        style={{ transform: showNav ? 'translateY(0)' : 'translateY(-120%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <SlideTabsExample />
        </div>
      </div>
      
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