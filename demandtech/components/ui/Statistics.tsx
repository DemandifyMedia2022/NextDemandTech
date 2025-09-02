"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import Button from "@/components/ui/Button";
import CountUp from "react-countup";

export default function RuixenStats() {
  const data = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 90 },
    { month: "Mar", value: 140 },
    { month: "Apr", value: 200 },
    { month: "May", value: 240 },
    { month: "Jun", value: 300 },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Text & CTA */}
      <div className="flex flex-col justify-center gap-6">
        <h4 className="text-lg sm:text-xl lg:text-3xl font-normal text-[blue] leading-relaxed">
            Intuitive Dashboard Experience <span className="text-primary">Ruixen UI</span>{" "}
            <span className="text-black text-sm sm:text-base lg:text-3xl">Experience an analytics UI that blends speed, clarity, and design precision—giving your team
            everything they need to make decisions faster.</span>
          </h4>
        <div className="mt-4">
          <Button label="Get Started" href="https://ruixen.com/" />
        </div>
      </div>

      {/* Right: Chart + Stats */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>
        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="ruixenBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#ruixenBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Overlay Hero Number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <h3 className="text-[64px] font-normal text-[blue] drop-shadow-md">
            <CountUp end={145} duration={2.5} />M
          </h3>
          <p className="text-[blue] text-xl">Global Data Base</p>
        </div>

        {/* Side Stats */}
        <div className="absolute right-4 top-4 rounded-xl shadow-md p-4 flex flex-col gap-4 bg-white ">
          {[
            { value: "60k+", label: "Active Users" },
            { value: "2.5M", label: "Tasks Done" },
            { value: "36%", label: "Productivity" },
            { value: "~95+", label: "Integrations" },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="text-xl font-normal text-blue-500">{stat.value}</p>
              <p className="text-sm text-blue-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
