'use client';

import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Element2 from '../preloader/Element2';
import { title } from 'process';

interface RightScrollExpandProps {
    videoSrc: string;
    posterSrc?: string;
    expandDuration?: number;
    description?: string;
    title?: string;
}

const RightScrollExpandVideo = ({
    videoSrc,
    posterSrc,
    expandDuration = 3000,
    title="Turn Data Into Revenue with DemandTech.",
    description = 'We combine cutting-edge technology with expert insights to identify and prioritize your highest-value prospects. By leveraging advanced data intelligence, intent signals, and precision targeting, we ensure your teams focus on the right opportunities at the right time. This strategic approach reduces wasted effort, shortens sales cycles, and increases conversion rates. With DemandTech, you gain a smarter, faster path to revenue growth while building stronger, long-term customer relationships'
}: RightScrollExpandProps) => {
    // progress goes 0 -> 1 across the section scroll
    const [progress, setProgress] = useState(0);
    // Use a stable desktop-like default to ensure SSR and first client render match
    const [viewport, setViewport] = useState({ width: 1024, height: 768 });

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
            // Recompute on resize as well
            handleScroll();
        };

        const handleScroll = () => {
            const el = sectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const vpH = window.innerHeight || viewport.height;
            const total = rect.height - vpH; // scrollable distance while sticky
            const distFromTop = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
            const p = total > 0 ? distFromTop / total : 0;
            setProgress(Math.min(Math.max(p, 0), 1));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        // Initial measure on mount
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate video dimensions and position
    // Start at 45% of viewport width with 16:9 ratio
    const baseWidth = Math.max(viewport.width * 0.45, 300);
    const baseHeight = (baseWidth * 9) / 16;
    const maxWidth = viewport.width;
    const maxHeight = viewport.height;

    // Smooth easing function
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    // Expand during the first part of the section, then hold full-screen (no shrink)
    const holdPoint = 0.6; // portion of the section used for growth
    const growT = Math.min(progress / holdPoint, 1);
    const easedProgress = easeOutCubic(growT);

    // Scale calculations
    const currentWidth = baseWidth + (maxWidth - baseWidth) * easedProgress;
    const currentHeight = baseHeight + (maxHeight - baseHeight) * easedProgress;

    // Position calculations - start from right side
    const initialX = viewport.width - baseWidth - 50;
    const finalX = (viewport.width - currentWidth) / 2;
    const currentX = initialX - (initialX - finalX) * easedProgress;

    const initialY = (viewport.height - baseHeight) / 2;
    const finalY = (viewport.height - currentHeight) / 2;
    const currentY = initialY - (initialY - finalY) * easedProgress;

    // Description fades out in first half of the scroll
    const descOpacity = 1 - Math.min(progress * 2, 1);

    // Mobile/small devices: render simple stacked layout (no sticky/scroll expand)
    if (viewport.width < 768) {
        return (
            <section className="relative overflow-hidden"
                style={{ height: "80vh", marginTop: "200px" }}>
                <div className="sticky top-0 h-screen">
                    
                    <div className="w-full rounded-2xl overflow-hidden shadow-xl relative">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={posterSrc}
                            className="w-full h-auto object-cover"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'Clash Display' }}>
                        {title}
                        </h3>
                        <p className="text-base sm:text-lg text-black leading-relaxed font-neu align-left text-left">
                            {description}
                        </p>
                        {/* <div className="mt-6">
                            <Button label="Get Started" href="/contact" />
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="relative overflow-hidden" style={{ height: '200vh' }}>
            {/* Sticky viewport area to pin the animation while scrolling this section */}
            <div className="sticky top-0 h-screen">
                {/* Left description content */}
               
                <div className="absolute inset-0 flex items-center" style={{ pointerEvents: 'none' }}>
                    <div
                        className="px-[5vw] max-w-[49vw]"
                        style={{ opacity: descOpacity, transition: 'opacity 300ms ease-out' }}
                    >
                        <h3 className="text-3xl text-[blue] md:text-5xl font-normal" style={{ fontFamily: 'Clash Display' }}>
                        {title}
                        </h3>
                        <p className="mt-4 text-base md:text-xl text-black text-center leading-relaxed align-left text-left">
                            {description}
                        </p>
                        {/* <div className="mt-8 flex justify-center" style={{ pointerEvents: 'auto' }}>
                            <Button label="Get Started" href="/contact" />
                        </div> */}
                    </div>
                </div>
                <div
                    className="absolute left-0 top-0 w-full h-full transition-transform"
                    style={{
                        // we position the video box within the viewport smoothly
                        transform: `translate(${currentX}px, ${currentY}px)`,
                        willChange: 'transform',
                        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                >
                    <div
                        className="shadow-xl"
                        style={{
                            width: `${currentWidth}px`,
                            height: `${currentHeight}px`,
                            borderRadius: `${20 - easedProgress * 15}px`,
                            overflow: 'hidden',
                        }}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={posterSrc}
                            className="w-full h-full object-cover"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RightScrollExpandVideo;