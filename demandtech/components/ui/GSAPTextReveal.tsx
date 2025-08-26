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
  /** Animate by words (default) or lines */
  split?: 'words' | 'lines';
}

export const GSAPTextReveal = ({
  children,
  className = '',
  style = {},
  stagger = 0.1,
  duration = 0.9,
  yOffset = 60,
  start = 'top 80%',
  split = 'words',
}: GSAPTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
    const text =
      typeof children === 'string' ? children : children?.toString() || '';
    setWords(text.trim().split(/\s+/));
  }, [children]);

  // unwrap previous line wrappers
  const unwrapPreviousLines = () => {
    const el = containerRef.current;
    if (!el) return;
    el.querySelectorAll('.line-span').forEach((w) => {
      while (w.firstChild) w.parentNode?.insertBefore(w.firstChild, w);
      w.parentNode?.removeChild(w);
    });
  };

  // group words by visual lines using offsetTop and wrap them
  const buildLineWrappers = () => {
    const el = containerRef.current;
    if (!el) return;
    const wordEls = Array.from(el.querySelectorAll<HTMLElement>('.word-span'));
    if (!wordEls.length) return;

    let currentTop: number | null = null;
    let line: HTMLElement[] = [];

    const wrapLine = () => {
      if (!line.length) return;
      const wrapper = document.createElement('span');
      wrapper.className = 'line-span';
      Object.assign(wrapper.style, {
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      });
      const first = line[0];
      first.parentNode?.insertBefore(wrapper, first);
      line.forEach((w) => wrapper.appendChild(w));
      line = [];
    };

    wordEls.forEach((w) => {
      const top = w.offsetTop;
      if (currentTop === null || Math.abs(top - currentTop) <= 2) {
        line.push(w);
        currentTop = top;
      } else {
        wrapLine();
        currentTop = top;
        line = [w];
      }
    });
    wrapLine();
  };

  useEffect(() => {
    if (!isClient || typeof window === 'undefined' || words.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const containerElement = containerRef.current;
    if (!containerElement) return;

    // kill previous timeline & triggers
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === containerElement) t.kill();
    });

    // prepare structure
    unwrapPreviousLines();
    if (split === 'lines') {
      // wait for layout so offsetTop is correct
      requestAnimationFrame(() => {
        buildLineWrappers();
        const targets = containerElement.querySelectorAll('.line-span');
        gsap.set(targets, { y: yOffset, opacity: 0 });

        tlRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: containerElement,
            start,
            toggleActions: 'play none none reverse',
          },
        });

        tlRef.current.to(targets, {
          y: 0,
          opacity: 1,
          duration,
          ease: 'power2.out',
          stagger,
        });
      });
    } else {
      const targets = containerElement.querySelectorAll('.word-span');
      gsap.set(targets, { y: yOffset, opacity: 0 });

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerElement,
          start,
          toggleActions: 'play none none reverse',
        },
      });

      tlRef.current.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        ease: 'power2.out',
        stagger,
      });
    }

    // responsive rebuild for line mode
    let resizeRaf: number | null = null;
    const onResize = () => {
      if (split !== 'lines') return;
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (!containerElement) return;
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === containerElement) t.kill();
        });

        unwrapPreviousLines();
        buildLineWrappers();

        const targets = containerElement.querySelectorAll('.line-span');
        gsap.set(targets, { y: yOffset, opacity: 0 });
        tlRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: containerElement,
            start,
            toggleActions: 'play none none reverse',
          },
        });
        tlRef.current.to(targets, {
          y: 0,
          opacity: 1,
          duration,
          ease: 'power2.out',
          stagger,
        });
      });
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (tlRef.current) tlRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === containerElement) t.kill();
      });
      unwrapPreviousLines();
    };
  }, [isClient, words, stagger, duration, yOffset, start, split]);

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
              opacity: 1,
            }}
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};
