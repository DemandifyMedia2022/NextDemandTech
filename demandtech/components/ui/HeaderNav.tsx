"use client";

import { SlideTabsExample } from "./SliderTabs";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
    initial: { opacity: 0, y: -12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.06,
        },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: -8 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HeaderNav() {
    return (
        <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 relative flex items-center justify-center"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div className="flex justify-center" variants={itemVariants}>
                <SlideTabsExample />
            </motion.div>
            <motion.div className="absolute right-4 sm:right-6 lg:right-8" variants={itemVariants}>
                <Button label="Let’s Talk" href="/contact" />
            </motion.div>
        </motion.div>
    );
}


