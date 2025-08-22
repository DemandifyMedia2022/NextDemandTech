"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
 
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
 
export default function *FAQ*() {
  const [openIndex, *setOpenIndex*] = useState<number | null>(null);
 
  const *toggleFAQ* = (_index_: number) => {
    setOpenIndex(openIndex === _index_ ? null : _index_);
  };
 
  return (
    <BackgroundGradientAnimation _className_="py-6 px-6 sm:px-6 md:px-12 lg:px-20">
      <div _className_="max-w-3xl mx-auto text-center relative z-10">
        {_/* Responsive heading */_}
        <h2 _className_="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 font-clash">
          FAQ
        </h2>
      </div>
 
      <div _className_="max-w-3xl mx-auto space-y-4 sm:space-y-6 relative z-10">
        {faqs.map((_faq_, _index_) => (
          <motion.div
            _key_={_faq_.question}
            _className_="rounded-xl sm:rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 overflow-hidden"
            _initial_={{ opacity: 0, y: 10 }}
            _animate_={{ opacity: 1, y: 0 }}
            _transition_={{ delay: index * 0.1 }}
          >
            {_/* Question */_}
            <div
              _role_="button"
              _tabIndex_={0}
              _onClick_={() => toggleFAQ(index)}
              _onKeyDown_={(_e_) => e.key === "Enter" && toggleFAQ(index)}
              _className_="cursor-pointer w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4
              text-left text-white  font-neu hover:bg-white/20 transition text-lg
              backdrop-blur-md border-b border-white/30"
            >
              <span>{faq.question}</span>
              <motion.span
                _initial_={false}
                _animate_={{ rotate: openIndex === index ? 180 : 0 }}
                _transition_={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <Minus _size_={22} _className_="sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Plus _size_={22} _className_="sm:w-6 sm:h-6 text-white" />
                )}
              </motion.span>
            </div>
 
            {_/* Answer */_}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  _initial_={{ height: 0, opacity: 0 }}
                  _animate_={{ height: "auto", opacity: 1 }}
                  _exit_={{ height: 0, opacity: 0 }}
                  _transition_={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div _className_="px-4 sm:px-6 pb-3 sm:pb-4 text-white leading-relaxed
                   text-sm sm:text-base bg-white/10 backdrop-blur-sm">
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