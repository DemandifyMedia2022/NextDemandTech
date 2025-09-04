import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Button3 from "@/components/ui/Button3";

// Lazy load heavy components
const LogoSlider = dynamic(() => import("@/components/ui/LogoSlider"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
});

const HRMS = dynamic(() => import("@/components/ui/HRMS"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
});

const Haridialler = dynamic(() => import("@/components/ui/HaridiallerSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
});

const HariCRM = dynamic(() => import("@/components/ui/HariCrm"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
});

const Faq = dynamic(() => import("@/components/ui/faq"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
});

export const metadata: Metadata = {
  title: "Products | DemandTech",
  description:
    "Discover our offerings designed to solve your business challenges and drive growth.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F0F1FA]">
      {/* Navbar Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 relative flex items-center justify-center">
        {/* Replace with Navbar Component */}
      </div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="leading-tight text-[#000000]"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(32px, 5vw, 92px)",
            fontWeight: 400,
          }}
        >
          Delivering Innovative, Scalable, and Secure
        </h1>

        <p
          className="mt-4 text-[#000cf8] leading-snug"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(48px, 5vw, 110px)",
            fontWeight: 400,
          }}
        >
          Software Solutions
        </p>

        <p
          className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontWeight: 400,
            lineHeight: "1.2",
          }}
        >
          Empowering enterprises with intelligent, future-ready software
          ecosystems.
        </p>

        {/* CTAs */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <Button3
            text="Let's Talk"
            href="/contact"
            className="px-4 py-2 text-sm"
          />
          <Button3
            text="Get Pricing"
            href="/pricing"
            className="px-4 py-2 text-sm"
          />
        </div>
      </header>

      {/* Logo Slider */}
      <section className="mb-16">
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}>
          <LogoSlider />
        </Suspense>
      </section>

      {/* Product Sections */}
      <main className="space-y-20">
        {/* Haridialler Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
            <Haridialler />
          </Suspense>
        </section>
        
        {/* HRMS Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
            <HRMS />
          </Suspense>
        </section>

        {/* HariCRM Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
            <HariCRM />
          </Suspense>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
          <Faq
            heading="FAQ"
            titleLine1="Quick Answers to"
            titleLine2="Common Questions"
            items={[
              {
                question: "Do your products integrate with our stack?",
                answer:
                  "Yes. We support integrations with common CRMs, MAPs, data platforms, and can scope custom connectors.",
              },
              {
                question: "Can we request custom features?",
                answer:
                  "Enterprise plans support customizations and roadmap prioritization based on business impact.",
              },
              {
                question: "How is security handled?",
                answer:
                  "We follow best practices for encryption, access control, and compliance. Security documentation is available upon request.",
              },
              {
                question: "What onboarding support is included?",
                answer:
                  "Implementation assistance, training, and documentation are provided. Dedicated CSMs for enterprise.",
              },
              {
                question: "Is there a free trial or demo?",
                answer:
                  "Yes. Book a demo and we can arrange a guided trial based on your use case.",
              },
            ]}
          />
        </Suspense>
      </section>
    </div>
  );
}
