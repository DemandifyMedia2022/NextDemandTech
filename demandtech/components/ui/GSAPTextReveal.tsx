'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GSAPTextRevealProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    stagger?: number;
    duration?: number;
    yOffset?: number;
    start?: string;
}

export const GSAPTextReveal = ({
    children,
    className = '',
    style = {},
    stagger = 0.1,
    duration = 0.8,
    yOffset = 60,
    start = 'top 80%'
}: GSAPTextRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        setIsClient(true);
        // Extract text from children
        const text = typeof children === 'string' ? children : children?.toString() || '';
        setWords(text.split(' '));
    }, [children]);

    useEffect(() => {
        if (!isClient || typeof window === 'undefined' || words.length === 0) return;

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const containerElement = containerRef.current;
        if (!containerElement) return;

        // Wait for elements to be rendered
        const initAnimation = () => {
            const wordElements = containerElement.querySelectorAll('.word-span');

            if (wordElements.length === 0) {
                // If elements not found, try again after a short delay
                setTimeout(initAnimation, 50);
                return;
            }

            // Set initial state
            gsap.set(wordElements, {
                y: yOffset,
                opacity: 0
            });

            // Create animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerElement,
                    start: start,
                    toggleActions: 'play none none reverse',
                }
            });

            tl.to(wordElements, {
                y: 0,
                opacity: 1,
                duration: duration,
                ease: 'power2.out',
                stagger: stagger
            });
        };

        initAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerElement) {
                    trigger.kill();
                }
            });
        };
    }, [isClient, words, stagger, duration, yOffset, start]);

    if (!isClient) {
        return (
            <div ref={containerRef}>
                <h1 className={className} style={style}>
                    {children}
                </h1>
            </div>
        );
    }

    return (
        <div ref={containerRef}>
            <h1 className={className} style={style}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className="word-span"
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            marginRight: '0.25em',
                            opacity: 1 // Ensure visible by default
                        }}
                    >
                        {word}
                    </span>
                ))}
            </h1>
        </div>
    );
};