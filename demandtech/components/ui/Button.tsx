"use client";

import styles from "./Button.module.scss";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";

const Button = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="font-inter">
            <motion.div
                className={styles.buttonContainer}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animate={{
                    backgroundColor: isHover ? "#0a00c1" : "#ffffff",
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
            >
                {/* Circle - visible before hover */}
                <motion.div
                    className={styles.circle}
                    animate={{
                        scale: isHover ? 1.45 : 1,
                        backgroundColor: isHover ? "#0a00c1" : "#000000",
                    }}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                />

                {/* Title */}
                <motion.div
                    className={styles.title}
                    animate={{
                        x: isHover ? -8 : 8,
                        color: isHover ? "#FFFFFF" : "#000000",
                    }}
                >
                    <p>ABOUT US</p>
                </motion.div>

                {/* Icon */}
                <motion.div
                    className={styles.iconContainer}
                    animate={{
                        x: isHover ? 0 : 24,
                        color: isHover ? "#FFFFFF" : "#000000",
                        opacity: isHover ? 1 : 0,
                    }}
                >
                    <ArrowRightIcon
                        className={styles.icon}
                        style={{ color: isHover ? "#FFFFFF" : "#000000" }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Button;
