"use client";

import React from "react";
import ButtonProduct from "./ButtonProduct";
import { H1Icon } from "@heroicons/react/24/outline";

// Payroll/Money SVG icon for Automated Payroll & Compliance
const PayrollIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
  </svg>
);

// Calendar with checkmark icon for Attendance, Leave & Shift Tracking
const AttendanceIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* Calendar base */}
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
    {/* Checkmark */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16l2 2 4-4" />
  </svg>
);

// Users/Recruitment icon for Recruitment & Onboarding Automation
const RecruitmentIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Clean Analytics with magnifying glass icon for CRM Integrated Productivity Tracking
const ProductivityIcon = () => (
  <svg className="h-8 w-8 text-[#000cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* Magnifying glass */}
    <circle cx="11" cy="11" r="8" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
    {/* Clean growth arrows inside */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14l3-3 3 3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12l3-3 3 3" />
  </svg>
);

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

// Static data for HRMS features
const featureText: FeatureText[] = [
  {
    title: "Automated Payroll & Compliance",
    href: "/",
    description: "Streamline salary processing, taxes, and compliance with automation.",
    cta: "Learn More",
  },
  {
    title: "Attendance, Leave & Shift Tracking",
    href: "/",
    description: "Real-time tracking for employee attendance, leaves, and shift scheduling.",
    cta: "Learn More",
  },
  {
    title: "Recruitment & Onboarding Automation",
    href: "/",
    description: "Simplify hiring with AI-driven recruitment and smooth onboarding.",
    cta: "Learn More",
  },
  {
    title: "CRM Integrated Productivity Tracking",
    href: "/",
    description: "Monitor employee performance and productivity seamlessly through CRM.",
    cta: "Learn More",
  },
];

// Function to get appropriate icon for each feature
const getFeatureIcon = (index: number) => {
  switch (index) {
    case 0: return <PayrollIcon />;        // Automated Payroll & Compliance
    case 1: return <AttendanceIcon />;     // Attendance, Leave & Shift Tracking
    case 2: return <RecruitmentIcon />;    // Recruitment & Onboarding Automation
    case 3: return <ProductivityIcon />;   // CRM Integrated Productivity Tracking
    default: return <PayrollIcon />;
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

const HRMSSection = () => {
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
            <h2 className="text-5xl font-semibold text-[#000cf8] leading-tight">
              HRMS
            </h2>
            <p className="text-2xl font-light text-gray-600 mt-4 max-w-4xl mx-auto">
              Human Resource Management System
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

export default HRMSSection;
