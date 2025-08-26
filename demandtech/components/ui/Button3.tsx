"use client";

import styles from "./Button3.module.scss";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Button3Props {
    text?: string;
    href?: string;
    className?: string;
}

const Button3 = ({ text = "Demand Generation", href }: Button3Props) => {
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInteraction = (isActive: boolean) => {
        if (!isMobile) {
            setIsHover(isActive);
        }
    };

    const content = (
        <div className="font-inter">
            <motion.div
                className={styles.buttonContainer}
                onMouseEnter={() => handleInteraction(true)}
                onMouseLeave={() => handleInteraction(false)}
                onTouchStart={() => isMobile && setIsHover(true)}
                onTouchEnd={() => isMobile && setIsHover(false)}
                animate={{
                    backgroundColor: isHover ? "#0a00c1" : "#ffffff",
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
            >
                {/* Circle */}
                <motion.div
                    className={`${styles.circle} bg-current`}  // use currentColor
                    animate={{
                        scale: isHover ? 1.45 : 1,
                    }}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                />

                {/* Title */}
                <motion.div
                    className={`${styles.title} transition-colors`}
                    animate={{
                        x: isHover ? -8 : 8,
                    }}
                >
                    <p className="inherit">{text}</p>
                </motion.div>

                {/* Icon */}
                <motion.div
                    className={`${styles.iconContainer} text-current`} // use currentColor
                    animate={{
                        x: isHover ? 0 : 24,
                        opacity: isHover ? 1 : 0,
                    }}
                >
                    <ArrowRightIcon className={`${styles.icon} text-current`} />
                </motion.div>

            </motion.div>
        </div>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="inline-block"
                onClick={() => {
                    // Dispatch a custom event so the layout can show preloader before navigation
                    if (typeof window !== 'undefined') {
                        window.dispatchEvent(new Event('show-preloader'));
                    }
                }}
            >
                {content}
            </Link>
        );
    }

    return content;
};

export default Button3;

interface Button4Props {
    text?: string;
    href?: string;
    className?: string;
}

export const Button4 = ({ text = "Learn More", href }: Button4Props) => {
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInteraction = (isActive: boolean) => {
        if (!isMobile) {
            setIsHover(isActive);
        }
    };

    const content = (
        <div className="font-inter">
            <motion.div
                className={`${styles.buttonContainer} rounded-2xl`}
                onMouseEnter={() => handleInteraction(true)}
                onMouseLeave={() => handleInteraction(false)}
                onTouchStart={() => isMobile && setIsHover(true)}
                onTouchEnd={() => isMobile && setIsHover(false)}
                animate={{
                    background: isHover
                        ? "rgba(115,147,179,0.25)" // bluish glass on hover
                        : "rgba(213,215,239,0.15)", // light frosted glass default
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: isHover
                        ? "0 8px 32px rgba(31, 38, 135, 0.37)"
                        : "0 4px 16px rgba(31, 38, 135, 0.2)",
                }}
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
            >

                {/* Circle */}
                <motion.div
                    className={styles.circle}
                    animate={{
                        scale: isHover ? 1.45 : 1,
                        backgroundColor: isHover ? "#000000" : "#000000",
                    }}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                />

                {/* Title */}
                <motion.div
                    className={styles.title}
                    animate={{
                        x: isHover ? -8 : 8,
                        color: isHover ? "#000000" : "#000000", // ✅ black → white
                    }}
                >
                    <p className="inherit">{text}</p>

                </motion.div>

                {/* Icon */}
                <motion.div
                    className={styles.iconContainer}
                    animate={{
                        x: isHover ? 0 : 24,
                        opacity: isHover ? 1 : 0,
                    }}
                >
                    


                    <ArrowRightIcon
                        className={styles.icon}
                        style={{ color: isHover ? "#000000" : "#00000" }} // ✅ fixed
                    />
                </motion.div>
            </motion.div>
        </div>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="inline-block"
                onClick={() => {
                    if (typeof window !== 'undefined') {
                        window.dispatchEvent(new Event('show-preloader'));
                    }
                }}
            >
                {content}
            </Link>
        );
    }

    return content;
};
