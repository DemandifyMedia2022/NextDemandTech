"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface DemandGenerationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  content?: string;
}

const SERVICE_DETAILS: Record<string, string> = {
  "Brand Awareness": "Our comprehensive brand awareness campaigns utilize multi-channel strategies including social media marketing, content syndication, thought leadership positioning, and strategic partnerships. We focus on creating consistent brand messaging across all touchpoints, ensuring your brand becomes synonymous with industry expertise. Through targeted display advertising, SEO optimization, and PR initiatives, we build lasting brand recognition that drives long-term business growth.",
  
  "Intent Qualified Leads": "Our intent data-driven approach identifies prospects who are actively researching solutions in your space. We leverage advanced behavioral tracking, technographic data, and buying signals to score leads based on their likelihood to convert. Our qualification process includes BANT criteria validation, decision-maker identification, and timeline assessment to ensure you receive only the highest-quality prospects ready for sales engagement.",
  
  "Webinar": "Our webinar programs are designed to educate, engage, and convert your target audience through value-driven content. We handle end-to-end webinar management including topic ideation, speaker coordination, registration page optimization, promotional campaigns, and follow-up sequences. Each webinar is strategically crafted to position your brand as a thought leader while generating qualified leads through interactive Q&A sessions and downloadable resources.",
  
  "Multi Touch Content Syndication": "Our multi-touch approach ensures sustained engagement through strategically timed content distribution across multiple channels. We create personalized content journeys that nurture prospects through awareness, consideration, and decision stages. This includes email sequences, social media campaigns, retargeting ads, and direct mail touchpoints, all coordinated to maintain consistent messaging and maximize conversion opportunities.",
  
  "Single Touch Content Syndication": "Our single-touch strategy delivers immediate impact through precision-targeted content distribution to high-intent prospects. We leverage our extensive publisher network and intent data to place your content directly in front of decision-makers at the optimal moment in their buying journey. This approach is perfect for time-sensitive campaigns and generating rapid lead flow with measurable ROI.",
  
  "Callback Consent": "Our callback consent program creates direct communication opportunities with pre-qualified prospects who have explicitly requested sales contact. We use sophisticated lead scoring and qualification processes to ensure callbacks are scheduled only with genuine prospects who meet your ideal customer profile. This permission-based approach results in higher conversion rates and more productive sales conversations.",
  
  "Lead Nurture Program": "Our comprehensive lead nurturing programs are designed to guide prospects through extended sales cycles with personalized, value-driven content. We create automated workflows that deliver relevant information based on prospect behavior, industry, and stage in the buying journey. Our nurturing campaigns include educational content, case studies, product demos, and timely follow-ups to maintain engagement and accelerate deal velocity."
};

export default function DemandGenerationPopup({
  isOpen,
  onClose,
  title,
  imageSrc,
  content
}: DemandGenerationPopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const detailContent = content || SERVICE_DETAILS[title] || "Detailed information about this service will be available soon.";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
                aria-label="Close popup"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Title */}
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#574BEF] mb-4"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {title}
              </h2>

              {/* Service Details */}
              <div className="max-h-60 overflow-y-auto pr-2">
                <p 
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  style={{ fontFamily: 'Neue Montreal, sans-serif' }}
                >
                  {detailContent}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
