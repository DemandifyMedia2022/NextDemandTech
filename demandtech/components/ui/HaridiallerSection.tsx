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

  // 🔥 Strong Features from Your Provided List
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
    <div className="relative p-[4px] rounded-[50px] bg-gradient-to-r from-[#2d40fa] to-[#101c95]">
      <section
        id="haridialler"
        className="py-7 relative rounded-[50px] bg-[#f0f1fa] shadow-lg"
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

          <p className="mt-4 text-2xl text-gray-600 max-w-2xl mx-auto font-neu">
            A smart integrated dialler designed for CRM integrations.
          </p>

          {/* 🖼️ Centered Image */}
          <div className="flex justify-center my-12">
            <motion.img
              src="/trial.png"
              alt="Haridialler Logo"
              className="w-40 h-40 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* 🔹 Feature Cards */}
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="rounded-3xl p-8 bg-gradient-to-br from-[#2d40fa] to-[#101c95] 
                           text-white transition-all duration-300 transform 
                           hover:scale-105 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(45,64,250,0.5)]"
              >
                <h3 className="text-2xl font-clash font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-neu">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
