'use client';
import React, { JSX } from "react";

// Layout: using semantic tags and utility classes instead of missing components
    
// Icons
import { ChartNoAxesCombined } from "lucide-react";
import { Coins } from "lucide-react";
import { Sheet } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};
   
const featureText: FeatureText[] = [
  {
    icon: <ChartNoAxesCombined className="h-6 w-6" />,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <Sheet className="h-6 w-6" />,
    title: "Lorem Ipsum",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Feature = () => {
  return (
    <section className="section-spacing">
      <div className="container not-prose mx-auto px-4">
        <div className="flex flex-col gap-6 py-12 px-10 rounded-[50px]"
        style={{
            background: 'rgba(252, 252, 252, 0.25)',
            backdropFilter: 'blur(25px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',        }}>
          <h3 className="text-4xl text-[blue]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <h4 className="text-xl font-normal opacity-70 font-neu">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
