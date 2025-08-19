import { cn } from "../../lib/utils";
import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

interface BentoGridItemProps {
  title: string;
  description: string;
  header: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function BentoGridItem({
  title,
  description,
  header,
  className,
  icon,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-white border border-gray-200 w-full relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
        {icon}
        <div className="font-bold text-gray-800 mb-3 mt-3 text-lg font-['Clash_Display']">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-600 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ imageSrc }: { imageSrc: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative">
    <img 
      src={imageSrc} 
      alt="Service" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>
);

const items = [
  {
    title: "Lead Generation",
    description: "Transform your business with AI-powered lead generation that identifies and qualifies your highest-value prospects with precision.",
    header: <Skeleton imageSrc="/image1.jpeg" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Demand Creation",
    description: "Create sustainable demand through strategic content marketing and thought leadership that positions your brand as the industry authority.",
    header: <Skeleton imageSrc="/image2.jpeg" />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Sales Enablement",
    description: "Empower your sales team with actionable insights and tools that accelerate the sales cycle and increase conversion rates.",
    header: <Skeleton imageSrc="/image3.jpeg" />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing operations with intelligent automation that nurtures prospects and drives consistent revenue growth.",
    header: <Skeleton imageSrc="/testimonial1.png" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-blue-600" />,
  },
];
