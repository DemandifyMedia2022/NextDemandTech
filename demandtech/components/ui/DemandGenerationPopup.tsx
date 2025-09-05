"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Add CSS to hide scrollbar and style strong elements
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .popup-content strong {
    color:rgb(109, 100, 228);
  }
`;

interface DemandGenerationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  content?: string;
}

const SERVICE_DETAILS: Record<string, string> = {
  "Brand Awareness": "At Demandtech, we help your brand stand out in a crowded marketplace. Our <strong>Brand Awareness</strong> solutions ensure your company becomes visible to the right audience, across the right channels, at the right time. From thought leadership campaigns to targeted digital presence, we position your brand as a trusted name in your industry.<br/><br/><strong>What We Deliver</strong><br/><br/>•<strong>Multi-Channel Visibility</strong> – Expand reach through social media, content marketing, search, and display advertising.<br/><br/>• <strong>Audience Engagement</strong> – Build meaningful connections with decision-makers through tailored campaigns.<br/><br/>• <strong>Thought Leadership</strong> – Position your brand as an authority with high-quality content and storytelling.<br/><br/>• <strong>Consistent Messaging</strong> – Ensure your brand voice remains strong and recognizable across every touchpoint.<br/><br/>• <strong>Reputation Building</strong> – Create lasting impressions that influence buying decisions and loyalty.<br/><br/><strong>Why Brand Awareness Matters</strong><br/><br/>• Increases trust and credibility in your market.<br/><br/>• Creates top-of-mind recall when prospects are ready to buy.<br/><br/>• Fuels long-term demand generation and pipeline growth.<br/><br/>• Strengthens your competitive edge against industry rivals.<br/><br/> With Demandtech's <strong>Brand Awareness</strong> strategies, your business won't just be seen—it will be remembered.",

  "Intent Qualified Leads": "At DemandTech, we help you cut through the noise with Intent Qualified Leads (IQLs) that connect you directly with prospects actively researching solutions like yours. By tracking online behavior, content consumption, and buying signals, we identify decision-makers who are already showing high purchase intent.Our platform leverages data intelligence, AI-driven insights, and precision targeting to ensure you engage only with leads that matter most. This means higher conversion rates, shorter sales cycles, and stronger ROI for your business.With Intent Qualified Leads from DemandTech, your sales team spends less time chasing cold prospects and more time building relationships with ready-to-buy customers.",

  "Webinar": "At DemandTech, we design and deliver webinars that go beyond just presentations — they create meaningful conversations with your target audience. Our team helps you plan, promote, and execute high-impact virtual events that position your brand as an authority and generate qualified leads. From topic selection and content creation to audience targeting and follow-up campaigns, we handle the entire process end-to-end. Using data intelligence and automation, we ensure your webinars reach the right decision-makers and drive measurable engagement. Whether it's thought leadership, product demos, or industry insights, our webinars are built to educate, connect, and convert—helping you move prospects through the funnel faster.",
  
  "Multi Touch Content Syndication": "At Demandtech, we go beyond a single interaction. With our <strong>Multi-Touch Content Syndication</strong> service, we ensure your content engages prospects across multiple stages of their buyer journey. By delivering assets strategically through email, social, display, and content hubs, we build familiarity, trust, and intent before your sales team steps in.<br/><br/><strong>What We Deliver</strong><br/><br/>• <strong>Multi-Channel Amplification</strong> – Distribute content across diverse platforms for maximum reach and recall.<br/><br/>• <strong>Progressive Nurturing</strong> – Engage prospects with a series of touches—from awareness to consideration to decision.<br/><br/>• <strong>Higher Quality Leads</strong> – Capture leads who have interacted multiple times and shown genuine buying intent.<br/><br/>• <strong>Custom Journey Mapping</strong> – Align syndication strategy with your ICP and buying cycle.<br/><br/>• <strong>Detailed Analytics</strong> – Track engagement across each touchpoint to refine targeting and boost ROI.<br/><br/><strong>Why Multi-Touch Syndication Matters</strong><br/><br/>• Creates deeper engagement compared to single-touch campaigns.<br/><br/>• Increases conversion probability by keeping your brand top-of-mind.<br/><br/>• Strengthens brand authority through consistent visibility.<br/><br/>• Fuels ABM strategies with nurtured, sales-ready leads.<br/><br/> With Demandtech's <strong>Multi-Touch Content Syndication</strong>, you don't just generate leads—you create relationships that convert into revenue.",

  "Single Touch Content Syndication": "At Demandtech, we make sure your content reaches the right audience at the right time with our <strong>Single Touch Content Syndication</strong> service. By distributing your assets—such as whitepapers, case studies, eBooks, and webinars—across trusted industry platforms, we help you amplify reach, generate demand, and fuel lead pipelines with precision.<br/><br/><strong>What We Deliver</strong><br/><br/>• <strong>Targeted Distribution</strong> – Share your content with decision-makers in your defined ICP and industries.<br/><br/>• <strong>Lead Generation</strong> – Capture qualified leads as prospects engage with your gated content.<br/><br/>• <strong>Wider Reach</strong> – Extend your brand visibility across multiple high-traffic channels and regions.<br/><br/>• <strong>Cost-Effective Scaling</strong> – Drive brand exposure and pipeline growth without heavy media spends.<br/><br/>• <strong>Performance Tracking</strong> – Gain insights into content engagement and campaign ROI.<br/><br/><strong>Why Choose Content Syndication?</strong><br/><br/>• Ensures your content works harder by reaching audiences beyond your owned channels.<br/><br/>• Helps you nurture leads who show active interest in your solutions.<br/><br/>• Drives brand credibility and thought leadership in competitive markets.<br/><br/>• Provides a steady stream of MQLs (Marketing Qualified Leads) for your sales funnel.<br/><br/> With Demandtech's <strong>Single Touch Content Syndication</strong>, your content doesn't just sit—it sells, scales, and converts.",

  "Callback Consent": "At Demandtech, we make it easier for your sales team to connect with prospects who are genuinely interested. With our <strong>Callback Consent</strong> service, every lead you receive has already opted in for a follow-up conversation, ensuring your reps spend time only on warm, sales-ready prospects.<br/><br/><strong>What We Deliver</strong><br/><br/>• <strong>Pre-Qualified Leads</strong> – Connect only with prospects who have consented to be contacted.<br/><br/>• <strong>Higher Conversion Rates</strong> – Reduce wasted efforts by focusing on decision-makers who are open to discussions.<br/><br/>• <strong>Faster Sales Engagement</strong> – Shorten sales cycles with leads ready for callbacks.<br/><br/>• <strong>Compliance & Trust</strong> – Stay aligned with global data privacy and consent regulations (GDPR, CCPA, etc.).<br/><br/>• <strong>Better Sales Productivity</strong> – Free your team from cold-calling and guesswork.<br/><br/><strong>Why Callback Consent Matters</strong><br/><br/>• Ensures ethical and compliant lead generation practices.<br/><br/>• Builds trust and transparency with potential buyers.<br/><br/>• Increases sales efficiency and ROI by connecting with prospects at the right time.<br/><br/>• Improves customer experience with consent-based communication.<br/><br/> With Demandtech's <strong>Callback Consent</strong> service, your sales team doesn't just reach out—they connect with willing, engaged prospects who are ready to talk.",

  "Lead Nurture Program": "At Demandtech, we don't just deliver leads—we help you nurture them into customers. Our <strong>Lead Nurture Program</strong> is designed to engage prospects consistently with personalized, multi-stage campaigns that build trust, educate, and guide them through the buying journey. By aligning content with intent, we keep your brand top-of-mind until they're sales-ready.<br/><br/><strong>What We Deliver</strong><br/><br/>• <strong>Personalized Journeys</strong> – Tailored messaging based on buyer persona, industry, and stage in the funnel.<br/><br/>• <strong>Multi-Channel Engagement</strong> – Reach prospects via email, social, content hubs, and retargeting.<br/><br/>• <strong>Behavioral Triggers</strong> – Automated workflows based on prospect actions and intent signals.<br/><br/>• <strong>Content-Driven Nurturing</strong> – Thought leadership, case studies, and resources that add value.<br/><br/>• <strong>Sales-Ready Handoffs</strong> – Seamless transfer of nurtured leads to your sales team at the right time.<br/><br/><strong>Why Lead Nurturing Matters</strong><br/><br/>• Turns cold leads into warm opportunities.<br/><br/>• Increases conversion rates by building consistent engagement.<br/><br/>• Shortens sales cycles by aligning with buyer intent.<br/><br/>• Strengthens brand trust and credibility.<br/><br/>• Maximizes ROI from every lead generated.<br/><br/> With Demandtech's <strong>Lead Nurture Program</strong>, you don't just generate demand—you create long-lasting customer relationships that drive growth."
};

export default function DemandGenerationPopup({
  isOpen,
  onClose,
  title,
  imageSrc,
  content
}: DemandGenerationPopupProps) {
  const [mounted, setMounted] = useState(false);

  // Inject styles for hiding scrollbar
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = scrollbarHideStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
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
            className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-auto"
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
              <div className="relative h-40 sm:h-48 w-full">
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
            <div 
              className="max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96 overflow-y-auto p-4 sm:p-6 md:p-8 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onWheel={(e) => {
                e.stopPropagation();
                const element = e.currentTarget;
                const { scrollTop, scrollHeight, clientHeight } = element;
                
                // Prevent background scroll when at boundaries
                if ((e.deltaY < 0 && scrollTop === 0) || 
                    (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight)) {
                  e.preventDefault();
                }
              }}
            >
              {/* Title */}
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#574BEF] mb-3 sm:mb-4"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {title}
              </h2>

              {/* Service Details */}
              <div
                className="popup-content text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base pr-2"
                style={{ fontFamily: 'Neue Montreal, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: detailContent }}
              />

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
