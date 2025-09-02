"use client";

import { motion, Variants } from "framer-motion";

export default function Haridialler() {
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
      title: "Real-Time Analytics",
      description:
        "Monitor call metrics, team productivity, and customer engagement with a live dashboard.",
    },
    {
      title: "WhatsApp Integration",
      description:
        "Seamlessly connect with your customers over WhatsApp for faster communication.",
    },
    {
      title: "Call Monitoring Suite",
      description:
        "Listen to live calls, barge in, whisper guidance, or transfer calls effortlessly.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#f8f9ff] to-[#e6eaff]">
      <section
        id="haridialler"
        className="py-16 relative"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 🔥 Gradient Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl sm:text-7xl font-bold font-clash bg-gradient-to-r from-[#2d40fa] to-[#101c95] bg-clip-text text-transparent"
          >
            Hari Dialer
          </motion.h2>

          <p className="mt-4 text-2xl text-gray-700 max-w-2xl mx-auto font-neu">
            A smart integrated dialler designed for CRM integrations.
          </p>

          {/* 🖼️ Centered Image */}
          <div className="flex justify-center my-12">
            <motion.img
              src="/trial.png"
              alt="Haridialler Logo"
              className="w-56 h-56 object-contain rounded-3xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>

          {/* 🔹 Glassmorphic Cards */}
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="rounded-3xl p-8 text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                  color: "#000",
                }}
              >
                <h3 className="text-2xl font-clash font-semibold mb-3 bg-gradient-to-r from-[#2d40fa] to-[#101c95] bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-800 font-neu">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
