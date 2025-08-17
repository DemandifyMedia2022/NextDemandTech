'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const HeroTitle = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        // Animate hero title lines
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.to('.hero-line-1', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
        })
            .to('.hero-line-2', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out'
            }, '-=0.8');

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === container) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="title"
            style={{ textAlign: 'center', marginRight: '200px', lineHeight: '1.5' }}
        >
            <div style={{ overflow: 'hidden' }}>
                <div
                    className="hero-line-1"
                    style={{
                        transform: 'translateY(100px)',
                        opacity: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        lineHeight: 'inherit',
                        fontFamily: 'inherit',
                        margin: 0
                    }}
                >
                    Intelligence that
                </div>
            </div>
            <div style={{ overflow: 'hidden', marginTop: '-20px' }}>
                <div
                    className="hero-line-2"
                    style={{
                        transform: 'translateY(100px)',
                        opacity: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        lineHeight: 'inherit',
                        fontFamily: 'inherit',
                        margin: 0
                    }}
                >
                    Drives <span className="accent">Growth</span>
                </div>
            </div>
        </div>
    );
};