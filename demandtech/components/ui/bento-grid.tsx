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
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 w-full h-full relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 md:h-16 bg-white/20 backdrop-blur-md border-t border-white/30 text-white flex items-center justify-center text-sm md:text-base font-medium shadow-[0_-6px_20px_rgba(0,0,0,0.2)] rounded-b-3xl font-neue-montreal">
        {title}
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
        "grid grid-cols-1 md:grid-cols-6 auto-rows-[300px] gap-6 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full md:auto-rows-[18rem]">
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
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-3xl overflow-hidden relative">
    <img
      src={imageSrc}
      alt="Service"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
  </div>
);

const items = [
  {
    title: "Brand Awareness and Display Campaign",
    description: "Reach and engage your target accounts with high-impact display placements that build recognition and recall.",
    header: <Skeleton imageSrc="/image1.jpeg" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Lead Nurture Program",
    description: "Guide prospects through tailored journeys with sequenced content and touchpoints that accelerate readiness.",
    header: <Skeleton imageSrc="/image2.jpeg" />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Callback Consent",
    description: "Capture and manage opt-ins compliantly to enable timely sales callbacks and conversations.",
    header: <Skeleton imageSrc="/testimonial2.jpg" />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Intent Qualified Leads",
    description: "Prioritize accounts showing in-market intent signals to focus effort where conversion likelihood is highest.",
    header: <Skeleton imageSrc="/image3.jpeg" />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Single/Multi Touch Content Syndication",
    description: "Distribute assets across trusted networks with single or multi-touch programs to scale reach and lead volume.",
    header: <Skeleton imageSrc="/testimonial1.png" />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-blue-600" />,
  },
];
