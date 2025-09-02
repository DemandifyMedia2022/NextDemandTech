"use client";

import { motion, Variants } from "framer-motion";

export default function HRMS() {
  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
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
    <div className="relative p-[4px] rounded-[50px] bg-gradient-to-r from-[#2d40fa] to-[#101c95]">
      <section
        id="hrms"
        className="relative rounded-[50px] bg-[#f0f1fa] shadow-lg px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* 🔹 Left Column: Features */}
          <div className="flex flex-col justify-center space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={featureVariants}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#2d40fa] to-[#101c95]
                           text-white shadow-md transition-all duration-300 transform
                           hover:scale-105 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(45,64,250,0.5)]"
              >
                <h3 className="text-xl font-clash font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-neu">{feature.description}</p>
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
              <h2 className="text-6xl sm:text-7xl font-bold font-clash bg-gradient-to-r from-[#2d40fa] to-[#101c95] bg-clip-text text-transparent">
                HRMS
              </h2>
              <p className="text-2xl text-gray-700 font-neu">
                Human Resource Management System
              </p>
            </motion.div>

            {/* Image */}
            {/* Image */}
           <motion.img
             src="/futuristic-technology-concept.jpg"
             alt="HRMS Illustration"
             className="w-80 h-[500px] object-cover rounded-[50px] shadow-lg"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
           />
          </div>
        </div>
      </section>
    </div>
  );
}
