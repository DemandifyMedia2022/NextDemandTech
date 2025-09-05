"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Growth", "Revenue", "Leads", "Conversions", "Business"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-[#F0F1FA]">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="">
            <div className="text-[clamp(48px,8vw,92px)] leading-none text-center font-regular">
              <span className="font-clash">Intelligence that Drives</span>
              <span className="relative inline-flex justify-center overflow-hidden text-center align-baseline md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-clash text-[#000cf8]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="text-center align-middle mt-8">
            <p className="text-lg md:text-xl leading-relaxed max-w-5xl">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-8">
            <Button label="About Us" href="/about" />
            <Button label="Get Started" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
