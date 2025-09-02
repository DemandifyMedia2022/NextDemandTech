"use client";

import { motion, Variants } from "framer-motion";

export default function HariCRM() {
  const featureVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
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
    { title: "Lead Scoring & Predictive Insights." },
    { title: "360° Customer view with contact history & notes." },
    { title: "In-house Dialer Integrated." },
    { title: "Sales Pipeline & Deal Management." },
    { title: "Real-time Dashboards & Customizable Reports." },
  ];

  return (
    <div className="relative p-[4px] rounded-[50px] bg-gradient-to-r from-[#2d40fa] to-[#101c95]">
      <section
        id="haricrm"
        className="relative rounded-[50px] bg-[#f0f1fa] shadow-lg px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Left Column: Illustration */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/futuristic-technology-concept.jpg"
              alt="Hari CRM Illustration"
              className="w-full max-w-md rounded-[50px] shadow-lg object-cover"
            />
          </motion.div>

          {/* Right Column: Content & Features */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-6xl sm:text-7xl font-bold font-clash bg-gradient-to-r from-[#2d40fa] to-[#101c95] bg-clip-text text-transparent">
                Hari CRM
              </h4>
              <p className="text-2xl text-gray-700 font-neu mt-2">
                Smart CRM with Dialer & Analytics
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureVariants}
                  className="p-5 rounded-3xl bg-gradient-to-br from-[#2d40fa] to-[#101c95]
                             text-white shadow-md transition-all duration-300 transform
                             hover:scale-105 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(45,64,250,0.5)]"
                >
                  <h4 className="text-lg font-semibold font-clash">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
