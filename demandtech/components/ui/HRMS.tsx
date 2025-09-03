"use client";

import { motion, Variants } from "framer-motion";

export default function HRMS() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const features = [
    {
      title: "Automated Payroll & Compliance",
      description:
        "Streamline salary processing, taxes, and compliance with automation.",
    },
    {
      title: "Attendance, Leave & Shift Tracking",
      description:
        "Real-time tracking for employee attendance, leaves, and shift scheduling.",
    },
    {
      title: "Recruitment & Onboarding Automation",
      description:
        "Simplify hiring with AI-driven recruitment and smooth onboarding.",
    },
    {
      title: "CRM Integrated Productivity Tracking",
      description:
        "Monitor employee performance and productivity seamlessly through CRM.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#f8f9ff] to-[#e6eaff] rounded-3xl overflow-hidden">
      <section
      id="hrms"
      className="relative rounded-[50px] p-8"
      style={{
      background: "rgba(255, 255, 255, 0.1)",  // frosted effect
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.3)", // subtle glass border
      borderRadius: "50px",
      boxShadow: "none",   // 🔹 remove the shadow that caused “coming out” look
      }}
     >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* 🔹 Left Column: Features */}
          <div className="flex flex-col justify-between space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-start"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                  color: "#000",
                  maxWidth: "420px",
                  width: "100%",
                }}
              >
                <div className="text-xl sm:text-2xl font-clash font-medium mb-2 text-[#000cf8]">
                  {feature.title}
                </div>
                <p className="text-sm sm:text-base font-neu text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Right Column: Heading & Image */}
          <div className="relative flex flex-col items-end justify-between">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-right mb-6"
            >
              <div className="text-6xl sm:text-7xl font-medium font-clash text-[#000cf8]">
                HRMS
              </div>
              <p className="text-lg sm:text-2xl text-gray-700 font-neu">
                Human Resource Management System
              </p>
            </motion.div>

            {/* Image */}
            <motion.img
              src="/futuristic-technology-concept.jpg"
              alt="HRMS Illustration"
              className="w-80 sm:w-96 h-[550px] sm:h-[580px] object-cover rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
