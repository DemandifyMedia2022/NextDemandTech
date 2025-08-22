"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const steps = [
  {
    title: "Segmentation & Targeting",
    text: "We don’t believe in one-size-fits-all outreach. Our approach begins by categorizing leads based on intent, behavior, engagement level, and industry to ensure that every interaction feels personal and relevant.",
  },
  {
    title: "Personalized Content Journey",
    text: "Every prospect is unique, and so is the path they take toward becoming a customer. We design customized content journeys that deliver tailored emails, educational resources, case studies, product guides, and relevant offers.",
  },
  {
    title: "Multi-Channel Engagement",
    text: "Today's buyers move across multiple platforms before making a purchase decision. We ensure your brand stays visible and relevant through a strategic mix of email marketing, social media touchpoints, targeted LinkedIn outreach, and retargeting ads.",
  },
  {
    title: "Behavior Tracking & Scoring",
    text: "Not all leads are ready to buy right away, and that’s where behavior tracking and lead scoring come in. We monitor email opens, link clicks, website visits, content downloads, webinar attendance, and social interactions to assess interest levels.",
  },
  {
    title: "Consistent Follow-Ups",
    text: "In lead nurturing, timing is everything. We implement structured, timely follow-up sequences to keep conversations alive and momentum moving forward. Whether it’s a personalized check-in email, a reminder about a webinar, or a tailored offer, we ensure prospects never slip through the cracks and always feel valued and heard.",
  },
];

export const Stepper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const clampedProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl py-20">
      {/* Vertical line */}
      <motion.div
        className="absolute left-8 top-0 h-full w-[4px] rounded-full"
        style={{
          scaleY: clampedProgress,
          transformOrigin: "top",
          background: "linear-gradient(to bottom, #4f46e5, #7c3aed)",
        }}
      />

      <div className="space-y-32">
        {steps.map((step, i) => {
          const stepProgress = (i + 1) / steps.length;

          const circleOpacity = useTransform(
            clampedProgress,
            [stepProgress - 0.15, stepProgress],
            [0, 1]
          );
          const circleScale = useTransform(
            clampedProgress,
            [stepProgress - 0.15, stepProgress],
            [0.6, 1]
          );

          const textOpacity = useTransform(
            clampedProgress,
            [stepProgress - 0.1, stepProgress],
            [0, 1]
          );
          const textY = useTransform(
            clampedProgress,
            [stepProgress - 0.1, stepProgress],
            [40, 0]
          );

          return (
            <div key={i} className="relative flex items-start">
              {/* Gradient Circle on the line */}
              <motion.div
                className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
                style={{
                  opacity: circleOpacity,
                  scale: circleScale,
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                }}
              >
                <span className="text-lg font-bold text-white">{i + 1}</span>
              </motion.div>

              {/* Text card */}
              <motion.div
                style={{ opacity: textOpacity, y: textY }}
                transition={{ duration: 0.6 }}
                className="ml-24 max-w-2xl rounded-lg bg-white/90 p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-purple-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
