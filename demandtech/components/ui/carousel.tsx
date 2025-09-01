"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Haridialler() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const features = [
    {
      title: "Smart Dialling",
      description:
        "Automate your calling workflows with integrated CRM support.",
    },
    {
      title: "CRM Integration",
      description: "Sync all your contacts and interactions seamlessly.",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Get insights into call performance and customer engagement.",
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fluid-border {
        0% { border-image-source: linear-gradient(45deg, #4a5cd3, #ff7eb3); }
        50% { border-image-source: linear-gradient(135deg, #4a5cd3, #42e695); }
        100% { border-image-source: linear-gradient(45deg, #4a5cd3, #ff7eb3); }
      }
      .animated-border {
        border: 3px solid transparent;
        border-image-slice: 1;
        animation: fluid-border 4s ease infinite;
      }
      .clash-font {
        font-family: 'Clash Display', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="py-24 relative rounded-[50px] bg-[#f0f1fa] overflow-visible"
      id="haridialler"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="clash-font text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Haridialler
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed clash-font">
          A smart integrated dialler designed for CRM integrations.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="animated-border rounded-3xl bg-white p-8 transition-all duration-300 transform hover:scale-105 hover:-translate-y-3 hover:shadow-[0_15px_35px_rgba(74,92,211,0.6)]"
            >
              <h3 className="font-clash text-2xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="font-clash text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
