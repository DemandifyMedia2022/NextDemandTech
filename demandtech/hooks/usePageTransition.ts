"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  const completeTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (previousPathRef.current === null) {
      previousPathRef.current = pathname;
      return;
    }

    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;
      startTransition();
    }
  }, [pathname, startTransition]);

  // Listen for manual transition triggers
  useEffect(() => {
    const handleManualTransition = () => {
      startTransition();
    };

    window.addEventListener('start-page-transition', handleManualTransition);
    return () => {
      window.removeEventListener('start-page-transition', handleManualTransition);
    };
  }, [startTransition]);

  return { 
    isTransitioning, 
    startTransition, 
    completeTransition 
  };
};


