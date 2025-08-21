"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // next/navigation Router does not expose events like pages router.
    // This is a placeholder; integrate with your own transition triggers if needed.
    setIsTransitioning(false);
  }, [router]);

  return { isTransitioning };
};


