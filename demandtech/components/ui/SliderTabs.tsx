"use client";

import React, { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";


interface Position {
    left: number;
    width: number;
    opacity: number;
}

interface TabProps {
    children: ReactNode;
    setPosition: (position: Position | ((prev: Position) => Position)) => void;
}

interface CursorProps {
    position: Position;
}

export const SlideTabsExample: React.FC = () => {
    return (
        <div className="bg-transparent py-5 px-125">
            <SlideTabs />
        </div>
    );
};

const SlideTabs: React.FC = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full px-1 py-2"
            style={{
                background: 'rgba(158, 146, 146, 0.25)',
                backdropFilter: 'blur(25px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Services</Tab>
            <Tab setPosition={setPosition}>Solutions</Tab>
            <Tab setPosition={setPosition}>About</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
    const ref = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-5 py-1 text-3xl text-white md:px-6 md:py-1 md:text-base"
            style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: '400' }}
        >
            {children}
        </li>
    );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-full"
            style={{
                backgroundColor: '#4F46E5', // CHANGED: Specific blue color to match your image
                height: '40px', // CHANGED: Fixed height to match the tab height
                top: '4px' // CHANGED: Position it properly within the container
            }}
        />
    );
};