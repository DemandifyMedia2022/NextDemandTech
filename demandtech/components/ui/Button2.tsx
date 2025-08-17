"use client";

import styles from "./Button2.module.scss";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";

interface Button2Props {
    text?: string;
}

const Button2 = ({ text = "About Us" }: Button2Props) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="font-inter">
            <motion.div
                className={styles.buttonContainer}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animate={{
                    backgroundColor: isHover ? "transparent" : "transparent",
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
            >
                {/* Title */}
                <motion.div
                    className={styles.title}
                    animate={{
                        x: isHover ? -12 : 0,
                        color: isHover ? "#000000" : "#000000",
                    }}
                >
                    <p>{text}</p>
                </motion.div>

                {/* Icon */}
                <motion.div
                    className={styles.iconContainer}
                    animate={{
                        x: isHover ? 0 : 32,
                        color: isHover ? "#00000" : "#000000",
                        opacity: isHover ? 1 : 0,
                    }}
                >
                    <ArrowRightIcon
                        className={styles.icon}
                        style={{ color: isHover ? "#00000" : "#000000" }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Button2;
