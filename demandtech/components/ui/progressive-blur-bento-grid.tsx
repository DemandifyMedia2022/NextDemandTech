import React from 'react';
import { cn } from "../../lib/utils";
import { ProgressiveBlur } from "../core/progressive-blur";

interface ProgressiveBentoItemProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export function ProgressiveBentoItem({
  title,
  imageSrc,
  className,
}: ProgressiveBentoItemProps) {
  return (
    <div
      className={cn(
        // 🔧 CARD STYLING - Customize these values:
        // rounded-3xl = border radius (rounded-lg, rounded-2xl, rounded-full, etc.)
        // transition-all duration-300 = animation speed (duration-200, duration-500, etc.)
        // hover:scale-[1.02] = hover zoom effect (hover:scale-105, hover:scale-110, etc.)
        // sm:hover:scale-[1.02] = responsive hover (only on small screens and up)
        "group relative overflow-hidden rounded-3xl transition-all duration-300 sm:hover:scale-[1.02]",
        className
      )}
    >
      {/* Background Image with Progressive Blur */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
        />

        {/* 🔧 DARKNESS OVERLAY - Removed for clear image visibility */}
        <div className="absolute inset-0 bg-transparent" />

        {/* 🔧 BACKGROUND BLUR - Minimal blur for clear image visibility */}
        <ProgressiveBlur
          className="absolute inset-0"
          blurIntensity={0}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end p-3 sm:p-4 lg:p-5">
        {/* 🔧 TITLE STYLING - Customize these values:
            text-base = font size (text-sm, text-lg, text-xl, etc.)
            font-bold = font weight (font-medium, font-semibold, etc.)
            text-white = text color (text-gray-100, text-blue-50, etc.)
            drop-shadow-lg = shadow intensity (drop-shadow-sm, drop-shadow-xl, etc.)
            mb-0 = bottom margin (mb-1, mb-3, mb-4, etc.) */}
        <h3 className="text-sm sm:text-base lg:text-lg font-light text-white drop-shadow-md font-neue-montreal">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function ProgressiveBlurBentoGrid() {
  return (
    <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6 w-full auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[280px]">
      {/* 🔧 RESPONSIVE GRID LAYOUT - Customize these values:
          grid-cols-1 = 1 column on mobile (default)
          sm:grid-cols-2 = 2 columns on small screens (640px+)
          lg:grid-cols-3 = 3 columns on large screens (1024px+)
          xl:grid-cols-4 = 4 columns on extra large screens (1280px+)
          2xl:grid-cols-6 = 6 columns on 2xl screens (1536px+)
          
          gap-4 = 16px gap on mobile
          sm:gap-6 = 24px gap on small screens and up
          
          auto-rows-[200px] = 200px height on mobile
          sm:auto-rows-[240px] = 240px height on small screens
          lg:auto-rows-[280px] = 280px height on large screens */}
      {/* Brand Awareness - Large */}
      <ProgressiveBentoItem
        title="Brand Awareness & Display Campaigns"
        imageSrc="/image1.jpeg"
        className="sm:col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-span-4"
      />

      {/* Lead Nurture - Medium */}
      <ProgressiveBentoItem
        title="Lead Nurture Programs"
        imageSrc="/image2.jpeg"
        className="sm:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1"
      />

      {/* Callback Consent - Medium */}
      <ProgressiveBentoItem
        title="Callback Consent"
        imageSrc="/testimonial2.jpg"
        className="sm:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1"
      />

      {/* Intent Qualified Leads - Large */}
      <ProgressiveBentoItem
        title="Intent Qualified Lead Generation"
        imageSrc="/image3.jpeg"
        className="sm:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
      />

      {/* Content Syndication - Large */}
      <ProgressiveBentoItem
        title="Content Syndication & Distribution"
        imageSrc="/testimonial1.png"
        className="sm:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
      />

      {/* Performance Analytics - Medium */}
      <ProgressiveBentoItem
        title="Performance Analytics & Optimization"
        imageSrc="/testimonial3.png"
        className="sm:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
      />
    </div>
  );
}

export function ProgressiveBlurBentoGridV2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full 
    auto-rows-[600px] sm:auto-rows-[640px] lg:auto-rows-[680px]">

      {/* LEFT COLUMN */}
      <div className="grid grid-rows-2 gap-6">
        {/* Large card on top */}
        <ProgressiveBentoItem
          title="Brand Awareness and Display Campaign"
          imageSrc="/image1.jpeg"
          className="row-span-1"
        />

        {/* Two small cards below */}
        <div className="grid grid-cols-2 gap-6">
          <ProgressiveBentoItem
            title="Small Campaign 1"
            imageSrc="/image2.jpeg"
          />
          <ProgressiveBentoItem
            title="Small Campaign 2"
            imageSrc="/image3.jpeg"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="grid grid-rows-2 gap-6">
        {/* Two small cards on top */}
        <div className="grid grid-cols-2 gap-6">
          <ProgressiveBentoItem
            title="Small Campaign 3"
            imageSrc="/LNP.JPG"
          />
          <ProgressiveBentoItem
            title="Small Campaign 4"
            imageSrc="/MTCS.JPG"
          />
        </div>

        {/* Large card on bottom */}
        <ProgressiveBentoItem
          title="Brand Awareness and Display Campaign"
          imageSrc="/webinar.JPG"
          className="row-span-1"
        />
        
      </div>
    </div>

  );
}

