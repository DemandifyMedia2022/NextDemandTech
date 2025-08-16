"use client";

import { useEffect, useRef } from 'react';
import './Ribbons.css';

interface Ribbon2Props {
    className?: string;
}

function Ribbon2({ className = '' }: Ribbon2Props) {
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = 8000;
        path.style.strokeDasharray = String(pathLength);
        path.style.strokeDashoffset = String(pathLength);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollable = documentHeight - windowHeight;

            const rawPercentage = scrollTop / scrollable;
            const clampedPercentage = Math.min(Math.max(rawPercentage, 0), 1);
            const adjustedPercentage = Math.max(0, (clampedPercentage - 0.1) / 0.9);
            const easeInQuint = Math.pow(adjustedPercentage, 5);
            const easeInOutSine = -(Math.cos(Math.PI * adjustedPercentage) - 1) / 2;
            const scrollPercentage = adjustedPercentage <= 0 ? 0 : easeInQuint * 0.8 + easeInOutSine * 0.2;

            const drawLength = pathLength * scrollPercentage;
            const dashOffset = pathLength - drawLength;
            path.style.strokeDashoffset = String(dashOffset);
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
            className={`ribbon2 ${className}`}
        >
            <g clipPath="url(#clip0_912_360)">
                <path
                    ref={pathRef}
                    d="M2004.07 186.294C1396.83 581.017 1944.5 826.873 1673.04 1164.32C1486.29 1396.45 858.233 1443.96 761.52 1138.9C664.807 833.838 979.657 677.066 1158.84 787.227C1338.03 897.388 1439.31 1130.42 1322.45 1596.48C1202.42 2075.17 1800.22 1859.15 1759.8 2327.74C1673.04 3333.66 349.123 2443.96 949.495 2107.34C1656.37 1711 2044.29 3534.98 -381.722 3416.01"
                    stroke="url(#paint0_linear_912_360)"
                    strokeWidth="30"
                    strokeLinejoin="round"
                    style={{ strokeLinecap: 'round' }}
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_912_360" x1="811.174" y1="186.294" x2="811.174" y2="3421.6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E0F4" />
                    <stop offset="1" stopColor="#DAD5FF" />
                </linearGradient>
                <clipPath id="clip0_912_360">
                    <rect width="1962" height="3689" fill="white" transform="matrix(-1 0 0 1 1956 0)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Ribbon2;

