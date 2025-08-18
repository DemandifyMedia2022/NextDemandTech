"use client";

import React, { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface Position {
    left: number;
    width: number;
    opacity: number;
}

interface TabProps {
    children: ReactNode;
    setPosition: (position: Position | ((prev: Position) => Position)) => void;
    href?: string;
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
        <motion.ul
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0px',
            }}
        >
            <Tab setPosition={setPosition} href="/">Home</Tab>
            <Tab setPosition={setPosition} href="/services">Services</Tab>
            <Tab setPosition={setPosition} href="/solutions">Solutions</Tab>
            <Tab setPosition={setPosition} href="/about">About</Tab>
            <Tab setPosition={setPosition} href="/pricing">Pricing</Tab>

            <Cursor position={position} />
        </motion.ul>
    );
};

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
    const ref = useRef<HTMLLIElement>(null);

    const handleMouseEnter = () => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
        });
    };

    const handleClick = () => {
        if (href) {
            window.location.href = href;
        }
    };

    return (
        <li
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            className="relative z-10 block cursor-pointer text-white"
            style={{
                fontFamily: 'Clash Display, sans-serif',
                fontWeight: '400',
                fontSize: '17px',
                padding: '3.8px 24px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '90px'
            }}
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
                backgroundColor: '#1D00F8',
                height: '40px',
                top: '4px'
            }}
        />
    );
};

// Enhanced Navigation Menu Component
export const EnhancedNavigationMenu: React.FC = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/services"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Our Services
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Discover our comprehensive range of demand generation and marketing services.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/services/demand-generation"
                                    >
                                        <div className="text-sm font-medium leading-none">Demand Generation</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Strategic demand generation campaigns
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/services/marketing"
                                    >
                                        <div className="text-sm font-medium leading-none">Marketing</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Comprehensive marketing solutions
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/about"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            About Us
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Learn more about our company, team, and mission.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/about/overview"
                                    >
                                        <div className="text-sm font-medium leading-none">Overview</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Company overview and mission
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/about/clients"
                                    >
                                        <div className="text-sm font-medium leading-none">Clients</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Our valued clients and partnerships
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/about/case-studies"
                                    >
                                        <div className="text-sm font-medium leading-none">Case Studies</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Success stories and case studies
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/solutions" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Solutions
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};