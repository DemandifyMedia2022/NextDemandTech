"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"; // ✅ use PascalCase

const faqs = [
  {
    question: "What does a Demand Generation cost?",
    answer:
      "The cost depends on the scope of services tailored to your needs. Contact us for a detailed proposal.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "We can typically start within 1–2 weeks after finalizing the proposal.",
  },
  {
    question: "In which countries do you operate?",
    answer:
      "We work with clients globally across multiple industries and regions.",
  },
  {
    question: "Do you offer pilot engagements?",
    answer:
      "Yes, we offer pilot programs so you can see value before committing long-term.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is measured with clear KPIs like lead quality, conversions, and ROI tracking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <BackgroundGradientAnimation className="py-10 px-4 md:px-20">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-10 font-clash">FAQ</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question} // ✅ FIXED: Add unique key here
            className="rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Question */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
              className="cursor-pointer w-full flex justify-between items-center px-6 py-4 
              text-left text-gray-900 hover:bg-white/40 transition font-neu text-lg 
              backdrop-blur-md border-b border-white/30"
            >
              <span>{faq.question}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <Minus size={25} className="text-blue-700" />
                ) : (
                  <Plus size={25} className="text-blue-700" />
                )}
              </motion.span>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4 text-gray-800 leading-relaxed bg-white/10 backdrop-blur-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </BackgroundGradientAnimation>
  );
}
