'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isTransitioning,
  onTransitionComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTransitioning) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    // Create the slide transition
    const tl = gsap.timeline({
      onComplete: onTransitionComplete
    });

    // Slide out current content
    tl.to(container, {
      x: '-100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    .to(overlay, {
      x: '0%',
      duration: 0.4,
      ease: 'power2.inOut'
    }, '-=0.2')
    .to(overlay, {
      x: '-100%',
      duration: 0.4,
      ease: 'power2.inOut'
    })
    .to(container, {
      x: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, [isTransitioning, onTransitionComplete]);

  return (
    <div className="page-transition-container">
      {/* Page content */}
      <div 
        ref={containerRef}
        className="w-full h-full"
        style={{ transform: 'translateX(0)' }}
      >
        {children}
      </div>

      {/* Transition overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[9998] bg-white"
        style={{ transform: 'translateX(100%)' }}
      />
    </div>
  );
};

export default PageTransition;
