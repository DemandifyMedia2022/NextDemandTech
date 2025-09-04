"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: React.ReactElement;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

// Memoized icon component to prevent re-renders
const MemoizedCoinsIcon = memo(() => (
  <Coins className="h-8 w-8 text-[#000cf8]" />
));
MemoizedCoinsIcon.displayName = "MemoizedCoinsIcon";

// Static data moved outside component to prevent recreation
const featureText: FeatureText[] = [
  {
    icon: <MemoizedCoinsIcon />,
    title: "Real-Time Insights",
    href: "/",
    description:
      "Gain actionable insights with live analytics and performance tracking for smarter decision-making.",
    cta: "Learn More",
  },
  {
    icon: <MemoizedCoinsIcon />,
    title: "Local Presence Caller ID",
    href: "/",
    description:
      "Boost pickup rates by displaying local numbers, building trust with prospects instantly.",
    cta: "Learn More",
  },
  {
    icon: <MemoizedCoinsIcon />,
    title: "Advanced Call Monitoring",
    href: "/",
    description:
      "Seamlessly listen, whisper, barge, and transfer calls for enhanced team performance.",
    cta: "Learn More",
  },
  {
    icon: <MemoizedCoinsIcon />,
    title: "All/Any CRM Integration",
    href: "/",
    description:
      "Integrate effortlessly with your preferred CRM for a unified, streamlined workflow.",
    cta: "Learn More",
  },
];

// Optimized animation variants with reduced complexity
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced delay
      duration: 0.4, // Reduced duration
      ease: "easeOut", // Simpler easing
    },
  }),
};

// Memoized feature card component
const FeatureCard = memo(({ feature, index }: { feature: FeatureText; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Reduced amount for earlier trigger
    variants={cardVariants}
  >
    <Link
      href={feature.href ?? "#"}
      className="block h-full rounded-[2rem] p-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/30 shadow-md"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="grid gap-4">
          <div className="p-3 rounded-xl bg-white/80 w-fit">
            {feature.icon}
          </div>
          <h4 className="text-xl font-semibold font-clash text-[#000cf8]">
            {feature.title}
          </h4>
          <p className="text-gray-700">{feature.description}</p>
        </div>
        {feature.cta && (
          <div className="flex items-center mt-4 text-[#000cf8] font-semibold">
            <span>{feature.cta}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        )}
      </div>
    </Link>
  </motion.div>
));
FeatureCard.displayName = "FeatureCard";

const HaridiallerSection = memo(() => {
  // Memoize the feature cards to prevent unnecessary re-renders
  const featureCards = useMemo(
    () =>
      featureText.map((feature, index) => (
        <FeatureCard key={`feature-${index}`} feature={feature} index={index} />
      )),
    []
  );

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f9ff] to-[#e6eaff] pt-16 pb-24 overflow-visible min-h-screen rounded-[3rem]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Simplified animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-semibold text-[#000cf8]">
            <Balancer>Hari-Dialer</Balancer>
          </h2>
          <p className="text-2xl font-light text-gray-600 mt-4 font-neu">
            <Balancer>
              Scale Your Business with Clear, Cost-Effective Communication.
            </Balancer>
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pb-4">
          {featureCards}
        </div>
      </div>
    </section>
  );
});

HaridiallerSection.displayName = "HaridiallerSection";

export default HaridiallerSection;
