'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimatedParagraphProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    stagger?: number;
    duration?: number;
    start?: string;
}

export const AnimatedParagraph = ({
    children,
    className = '',
    style = {},
    stagger = 0.02,
    duration = 0.6,
    start = 'top 85%'
}: AnimatedParagraphProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        setIsClient(true);
        // Extract text from children, handling JSX content
        const extractText = (node: React.ReactNode): string => {
            if (typeof node === 'string') return node;
            if (typeof node === 'number') return node.toString();
            if (Array.isArray(node)) return node.map(extractText).join('');
            if (node && typeof node === 'object' && 'props' in node) {
                return extractText((node as any).props.children);
            }
            return '';
        };

        const text = extractText(children);
        setWords(text.split(' ').filter(word => word.length > 0));
    }, [children]);

    useEffect(() => {
        if (!isClient || typeof window === 'undefined' || words.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        const containerElement = containerRef.current;
        if (!containerElement) return;

        const wordElements = containerElement.querySelectorAll('.word-span');

        // Set initial state
        gsap.set(wordElements, {
            y: 30,
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

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerElement) {
                    trigger.kill();
                }
            });
        };
    }, [isClient, words, stagger, duration, start]);

    if (!isClient) {
        return (
            <p ref={containerRef} className={className} style={style}>
                {children}
            </p>
        );
    }

    return (
        <div ref={containerRef}>
            <p className={className} style={style}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className="word-span"
                        style={{
                            display: 'inline-block',
                            marginRight: '0.25em'
                        }}
                    >
                        {word}
                    </span>
                ))}
            </p>
        </div>
    );
};