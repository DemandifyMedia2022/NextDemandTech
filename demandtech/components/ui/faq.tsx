'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does DemandTech offer?",
    answer: "DemandTech offers comprehensive demand generation services including intent-qualified lead generation, content syndication, brand awareness campaigns, lead nurture programs, and performance analytics."
  },
  {
    question: "How does your intent data work?",
    answer: "Our intent data technology tracks real-time buyer behavior across multiple channels to identify prospects actively searching for solutions like yours, ensuring higher conversion rates."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in B2B technology, SaaS, healthcare, finance, and professional services, with expertise in complex sales cycles and enterprise solutions."
  },
  {
    question: "How long does it take to see results?",
    answer: "Typically, you'll see initial results within 30-60 days, with full campaign optimization and peak performance achieved within 3-6 months."
  },
  {
    question: "Do you provide reporting and analytics?",
    answer: "Yes, we provide comprehensive reporting including lead quality metrics, conversion rates, ROI tracking, and detailed performance analytics to optimize your campaigns."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <span className="text-gray-500">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


