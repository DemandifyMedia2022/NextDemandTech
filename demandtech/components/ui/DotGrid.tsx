'use client';

import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import "./DotGrid.css";

gsap.registerPlugin(InertiaPlugin);

const throttle = <T extends unknown[]>(func: (...args: T) => void, limit: number) => {
    let lastCall = 0;
    return (...args: T) => {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
};

interface Dot {
    cx: number;
    cy: number;
    xOffset: number;
    yOffset: number;
    _inertiaApplied: boolean;
}

export interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    proximity?: number;
    speedTrigger?: number;
    shockRadius?: number;
    shockStrength?: number;
    maxSpeed?: number;
    resistance?: number;
    returnDuration?: number;
    className?: string;
    style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16),
    };
}

const DotGrid: React.FC<DotGridProps> = ({
    dotSize = 8,
    gap = 22,
    baseColor = "#F0F1FA",
    activeColor = "#5227FF",
    proximity = 120,
    speedTrigger = 100,
    shockRadius = 250,
    shockStrength = 5,
    maxSpeed = 5000,
    resistance = 750,
    returnDuration = 1.5,
    className = "",
    style,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<Dot[]>([]);
    const pointerRef = useRef({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0,
    });
    const rafIdRef = useRef<number | null>(null);
    const isPlayingRef = useRef<boolean>(true);
    const idleTimerRef = useRef<number | null>(null);
    const drawFnRef = useRef<(() => void) | null>(null);

    const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
    const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

    const circlePath = useMemo(() => {
        if (typeof window === "undefined" || !window.Path2D) return null;

        const p = new Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.scale(dpr, dpr);

        const cols = Math.floor((width + gap) / (dotSize + gap));
        const rows = Math.floor((height + gap) / (dotSize + gap));
        const cell = dotSize + gap;

        const gridW = cell * cols - gap;
        const gridH = cell * rows - gap;

        const extraX = width - gridW;
        const extraY = height - gridH;

        const startX = extraX / 2 + dotSize / 2;
        const startY = extraY / 2 + dotSize / 2;

        const dots: Dot[] = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cx = startX + x * cell;
                const cy = startY + y * cell;
                dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
            }
        }
        dotsRef.current = dots;
    }, [dotSize, gap]);

    useEffect(() => {
        if (!circlePath) return;

        const proxSq = proximity * proximity;

        const draw = () => {
            if (!isPlayingRef.current) {
                if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
                return;
            }
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: px, y: py } = pointerRef.current;

            for (const dot of dotsRef.current) {
                const ox = dot.cx + dot.xOffset;
                const oy = dot.cy + dot.yOffset;
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let style = baseColor;
                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / proximity;
                    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                    style = `rgb(${r},${g},${b})`;
                }

                const dpr = window.devicePixelRatio || 1;
                const scaledDotSize = dotSize / dpr;

                if (circlePath) {
                    const p = new Path2D();
                    p.arc(0, 0, scaledDotSize / 2, 0, Math.PI * 2);
                    (ctx as CanvasRenderingContext2D).save();
                    (ctx as CanvasRenderingContext2D).translate(ox, oy);
                    (ctx as CanvasRenderingContext2D).fillStyle = style as string;
                    (ctx as CanvasRenderingContext2D).fill(p);
                    (ctx as CanvasRenderingContext2D).restore();
                }
            }

            rafIdRef.current = requestAnimationFrame(draw);
        };

        drawFnRef.current = draw;
        isPlayingRef.current = true;
        draw();
        return () => {
            drawFnRef.current = null;
            if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
        };
    }, [proximity, baseColor, activeRgb, baseRgb, circlePath, dotSize]);

    useEffect(() => {
        buildGrid();
        let ro: ResizeObserver | null = null;
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(buildGrid);
            if (wrapperRef.current) {
                ro.observe(wrapperRef.current);
            }
        } else {
            (window as Window).addEventListener("resize", buildGrid);
        }
        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener("resize", buildGrid);
        };
    }, [buildGrid]);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            // resume animation immediately on movement
            if (!isPlayingRef.current) {
                isPlayingRef.current = true;
                if (rafIdRef.current == null) {
                    if (drawFnRef.current) drawFnRef.current();
                }
            }
            // reset inactivity timer
            if (idleTimerRef.current != null) window.clearTimeout(idleTimerRef.current);
            idleTimerRef.current = window.setTimeout(() => {
                isPlayingRef.current = false;
                if (rafIdRef.current != null) {
                    cancelAnimationFrame(rafIdRef.current);
                    rafIdRef.current = null;
                }
            }, 1000);

            const now = performance.now();
            const pr = pointerRef.current;
            const dt = pr.lastTime ? now - pr.lastTime : 16;
            const dx = e.clientX - pr.lastX;
            const dy = e.clientY - pr.lastY;
            let vx = (dx / dt) * 1000;
            let vy = (dy / dt) * 1000;
            let speed = Math.hypot(vx, vy);
            if (speed > maxSpeed) {
                const scale = maxSpeed / speed;
                vx *= scale;
                vy *= scale;
                speed = maxSpeed;
            }
            pr.lastTime = now;
            pr.lastX = e.clientX;
            pr.lastY = e.clientY;
            pr.vx = vx;
            pr.vy = vy;
            pr.speed = speed;

            const rect = canvasRef.current!.getBoundingClientRect();
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const pushX = dot.cx - pr.x + vx * 0.005;
                    const pushY = dot.cy - pr.y + vy * 0.005;
                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: "elastic.out(1,0.75)",
                            });
                            dot._inertiaApplied = false;
                        },
                    });
                }
            }
        };

        const onClick = (e: MouseEvent) => {
            const rect = canvasRef.current!.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                if (dist < shockRadius && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const falloff = Math.max(0, 1 - dist / shockRadius);
                    const pushX = (dot.cx - cx) * shockStrength * falloff;
                    const pushY = (dot.cy - cy) * shockStrength * falloff;
                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: "elastic.out(1,0.75)",
                            });
                            dot._inertiaApplied = false;
                        },
                    });
                }
            }
        };

        const throttledMove: (e: MouseEvent) => void = throttle(onMove, 50);
        window.addEventListener("mousemove", throttledMove, { passive: true });
        window.addEventListener("click", (e: MouseEvent) => {
            if (!isPlayingRef.current) {
                isPlayingRef.current = true;
                if (rafIdRef.current == null) {
                    if (drawFnRef.current) drawFnRef.current();
                }
            }
            // ensure drawing for click effects, then set idle stop after 1s
            if (idleTimerRef.current != null) window.clearTimeout(idleTimerRef.current);
            idleTimerRef.current = window.setTimeout(() => {
                isPlayingRef.current = false;
                if (rafIdRef.current != null) {
                    cancelAnimationFrame(rafIdRef.current);
                    rafIdRef.current = null;
                }
            }, 1000);
            onClick(e);
        });

        return () => {
            if (idleTimerRef.current != null) window.clearTimeout(idleTimerRef.current);
            window.removeEventListener("mousemove", throttledMove);
            window.removeEventListener("click", onClick);
        };
    }, [
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength,
    ]);

    return (
        <section className={`dot-grid ${className}`} style={style}>
            <div ref={wrapperRef} className="dot-grid__wrap">
                <canvas ref={canvasRef} className="dot-grid__canvas" />
            </div>
        </section>
    );
};

export default DotGrid;


