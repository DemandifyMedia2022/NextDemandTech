'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface PreloaderProps {
  isLoading?: boolean;
  onComplete?: () => void;
  duration?: number;
  showBrand?: boolean;
  brandName?: string;
  brandSubtitle?: string;
}

export const NoomoPreloader: React.FC<PreloaderProps> = ({
  isLoading = true,
  onComplete,
  duration = 3000,
  showBrand = true,
  brandName = "DEMAND TECH",
  brandSubtitle = "DIGITAL EXPERIENCES"
}) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<'loading' | 'complete' | 'exit'>('loading');
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!isLoading) return;

    let progressInterval: NodeJS.Timeout;
    let completeTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;

    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setCurrentPhase('complete');

          completeTimeout = setTimeout(() => {
            setCurrentPhase('exit');

            exitTimeout = setTimeout(handleAnimationComplete, 800);
          }, 500);

          return 100;
        }

        const increment = prev < 50 ? Math.random() * 8 + 2 : Math.random() * 3 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
      clearTimeout(exitTimeout);
    };
  }, [isLoading, handleAnimationComplete]);

  if (!isLoading && showContent) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-white transition-all duration-800 ${currentPhase === 'exit' ? 'translate-y-full' : 'translate-y-0'
      }`}>
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full blur-3xl transition-all duration-2000 ${currentPhase === 'loading' ? 'scale-100 opacity-50' : 'scale-150 opacity-20'
          }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-all duration-2000 delay-500 ${currentPhase === 'loading' ? 'scale-100 opacity-30' : 'scale-150 opacity-10'
          }`} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* {showBrand && (
          <div className={`mb-8 md:mb-12 transition-all duration-1000 ${
            currentPhase === 'complete' ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
          }`}>
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 relative">
              <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-2 border-2 border-white/50 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
              <div className="absolute inset-3 md:inset-4 bg-white rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue tracking-[0.2em] mb-1 md:mb-2">
              DemandTech
            </h1>
            
          </div>
        )} */}

        <div className="w-full max-w-xs md:max-w-md space-y-6 md:space-y-8">
          <div className="relative">
            <div className="w-full h-px bg-white">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-300 transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-lg shadow-white/50" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center text-xs md:text-sm">
            <span className="text-blue-500 tracking-wider">
              {currentPhase === 'loading' ? 'LOADING' : currentPhase === 'complete' ? 'COMPLETE' : 'LAUNCHING'}
            </span>
            <span className="text-blue-500 font-mono text-base md:text-lg">
              {Math.round(progress)}%
            </span>
          </div> */}

          {/* <div className="text-blue-500 text-xs tracking-wider h-3 md:h-4">
            {progress < 20 && "INITIALIZING EXPERIENCE..."}
            {progress >= 20 && progress < 40 && "LOADING ASSETS..."}
            {progress >= 40 && progress < 60 && "PREPARING INTERFACE..."}
            {progress >= 60 && progress < 80 && "OPTIMIZING PERFORMANCE..."}
            {progress >= 80 && progress < 100 && "FINALIZING..."}
            {progress >= 100 && currentPhase === 'complete' && "READY TO LAUNCH"}
          </div> */}
          {/* </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-blue-500 text-2xl tracking-widest mb-3 md:mb-4">
            CRAFTING DIGITAL EXCELLENCE
          </div> */}

          <div className="flex space-x-1 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 bg-blue-500 rounded-full transition-all duration-500 ${Math.floor((progress / 33.33)) > i ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                  }`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: progress >= 100 ? 'pulse 1s ease-in-out infinite' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoomoPreloader;


