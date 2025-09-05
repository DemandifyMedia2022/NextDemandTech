"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ButtonProduct from "./ButtonProduct";

// Analytics/Chart SVG icon for Real-Time Insights
const AnalyticsIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// Phone icon for Local Presence Caller ID
const PhoneLocationIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Microphone icon for Advanced Call Monitoring
const MonitoringIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1a3 3 0 013 3v8a3 3 0 01-6 0V4a3 3 0 013-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10v2a7 7 0 01-14 0v-2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v4M8 23h8" />
  </svg>
);

// Integration/Connect icon for CRM Integration
const IntegrationIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

// Static data - no icons to reduce bundle size
const featureText: FeatureText[] = [
  {
    title: "Real-Time Insights",
    href: "/",
    description: "Gain actionable insights with live analytics and performance tracking for smarter decision-making.",
    cta: "Learn More",
  },
  {
    title: "Local Presence Caller ID",
    href: "/",
    description: "Boost pickup rates by displaying local numbers, building trust with prospects instantly.",
    cta: "Learn More",
  },
  {
    title: "Advanced Call Monitoring",
    href: "/",
    description: "Seamlessly listen, whisper, barge, and transfer calls for enhanced team performance.",
    cta: "Learn More",
  },
  {
    title: "All/Any CRM Integration",
    href: "/",
    description: "Integrate effortlessly with your preferred CRM for a unified, streamlined workflow.",
    cta: "Learn More",
  },
];

// Function to get appropriate icon for each feature
const getFeatureIcon = (index: number) => {
  switch (index) {
    case 0: return <AnalyticsIcon />;      // Real-Time Insights
    case 1: return <PhoneLocationIcon />;  // Local Presence Caller ID
    case 2: return <MonitoringIcon />;     // Advanced Call Monitoring
    case 3: return <IntegrationIcon />;    // CRM Integration
    default: return <AnalyticsIcon />;
  }
};

// Simple CSS-only animations instead of framer-motion
const FeatureCard = ({ feature, index }: { feature: FeatureText; index: number }) => (
  <div 
    className="feature-card opacity-0 translate-y-4"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards'
    }}
  >
    <div className="block h-full rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-lg">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-white/80 w-fit">
            {getFeatureIcon(index)}
          </div>
          <h4 className="text-xl font-clash font-regular text-[#000cf8]">
            {feature.title}
          </h4>
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
        {feature.cta && (
          <div className="mt-4">
            <ButtonProduct text={feature.cta} href={feature.href} />
          </div>
        )}
      </div>
    </div>
  </div>
);

const HaridiallerSection = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .section-header {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <section className="relative w-full bg-gradient-to-br from-[#f8f9ff] to-[#e6eaff] pt-16 pb-24 min-h-screen rounded-3xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-20 section-header">
            <h2 className="text-5xl font-clash font-semibold text-[#000cf8] leading-tight">
              H.A.R.I Dialer
            </h2>
            <p className="text-2xl font-light text-gray-600 mt-4 max-w-4xl mx-auto">
              Scale Your Business with Clear, Cost-Effective Communication.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pb-4">
            {featureText.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HaridiallerSection;
