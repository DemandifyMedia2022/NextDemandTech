"use client";

import { useEffect, useRef } from 'react';
import './Ribbons.css';

interface Ribbon1Props {
    className?: string;
}

function Ribbon1({ className = '' }: Ribbon1Props) {
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const path = pathRef.current;

        if (!svg || !path) return;

        let pathLength = 0;
        try {
            pathLength = path.getTotalLength();
        } catch (e) {
            pathLength = 5000;
        }

        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;

        const handleScroll = () => {
            const distance = window.scrollY;
            const totalDistance = svg.clientHeight - window.innerHeight;
            const percentage = totalDistance > 0 ? distance / totalDistance : 0;
            path.style.strokeDashoffset = `${pathLength * (1 - Math.min(1, Math.max(0, percentage)))}`;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            width="1920"
            height="3689"
            viewBox="0 0 1920 3689"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`ribbon1 ${className}`}
        >
            <g clipPath="url(#clip0_879_174)">
                <path
                    ref={pathRef}
                    d="M-54.0703 186.294C553.169 581.017 5.50149 826.873 276.964 1164.32C463.709 1396.45 1091.77 1443.96 1188.48 1138.9C1285.19 833.837 970.343 677.066 791.155 787.227C611.966 897.388 510.685 1130.42 627.546 1596.48C747.575 2075.17 149.78 1859.15 190.199 2327.74C276.962 3333.66 1600.88 2443.96 1000.5 2107.34C293.629 1711 -94.2913 3534.98 2331.72 3416.01"
                    stroke="url(#paint0_linear_879_174)"
                    strokeWidth="50"
                    strokeLinejoin="round"
                    style={{ strokeLinecap: 'round' }}
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_879_174" x1="1138.83" y1="186.294" x2="1138.83" y2="3421.6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1D00F8" />
                    <stop offset="1" stopColor="#9B8DFF" />
                </linearGradient>
                <clipPath id="clip0_879_174">
                    <rect width="1962" height="3689" fill="white" transform="translate(-6)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Ribbon1;