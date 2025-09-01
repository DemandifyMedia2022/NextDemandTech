"use client";

import React from "react";
import { motion } from "framer-motion";

type Variants = {
  container?: any;
  item?: any;
};

interface TextEffectProps extends React.HTMLAttributes<HTMLElement> {
  per?: "line"; // currently only line is supported
  as?: keyof React.JSX.IntrinsicElements;
  segmentWrapperClassName?: string;
  variants?: Variants;
  children: React.ReactNode;
}

const defaultVariants: Variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  },
};

function splitLines(content: React.ReactNode): React.ReactNode[] {
  // If content is a plain string, split on newlines
  if (typeof content === "string") {
    return content.split(/\r?\n/).map((line, idx) => (
      <React.Fragment key={idx}>{line}</React.Fragment>
    ));
  }
  // If content is an array of nodes, treat each entry as a line
  if (Array.isArray(content)) {
    return content as React.ReactNode[];
  }
  // Otherwise, treat entire node as a single line
  return [content];
}

export function TextEffect({
  per = "line",
  as = "p",
  segmentWrapperClassName = "overflow-hidden block",
  variants = defaultVariants,
  className,
  children,
  ...rest
}: TextEffectProps) {
  const Comp: any = (motion as any)[as] ?? motion.p;

  const lines = per === "line" ? splitLines(children) : [children];

  return (
    <Comp
      className={className}
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      {...rest}
    >
      {lines.map((line, i) => (
        <span key={i} className={segmentWrapperClassName}>
          <motion.span style={{ display: "inline-block", willChange: "transform" }} variants={variants.item}>
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

export default TextEffect;
