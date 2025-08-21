"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">FAQ</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              <span>{faq.question}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <Minus size={20} className="text-gray-700" />
                ) : (
                  <Plus size={20} className="text-gray-700" />
                )}
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
