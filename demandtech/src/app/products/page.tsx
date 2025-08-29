import { Metadata } from "next";
import Button3 from "@/components/ui/Button3";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export const metadata: Metadata = {
  title: "Products | DemandTech",
  description:
    "Discover our offerings designed to solve your business challenges and drive growth.",
};

export default function ProductsPage() {
  // Example cards (replace with real product data later)
  const cards = [
    {
      src: "/Creative Edge.png",
      title: "Intent Data Platform",
      content: (
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Stop guessing and start knowing.</span> Our Intent Data Platform empowers businesses to discover prospects who are already showing buying interest in solutions like yours.
          </p>
          <p>
            By monitoring online research patterns, content consumption habits, and digital buying signals, we help you prioritize high-value accounts that are most likely to convert. This results in smarter targeting, stronger engagement, and higher ROI.
          </p>

          <div className="pt-2">
            <h4 className="font-clash text-xl text-[#574BEF]">With DemandTech’s Intent Data:</h4>
            <ul className="mt-3 grid gap-2 md:gap-3">
              <li className="flex gap-3">
                <span className="select-none">•</span>
                <span>Uncover hidden opportunities by identifying buyers at different stages of their journey.</span>
              </li>
              <li className="flex gap-3">
                <span className="select-none">•</span>
                <span>Personalize campaigns with actionable insights into prospect needs and pain points.</span>
              </li>
              <li className="flex gap-3">
                <span className="select-none">•</span>
                <span>Shorten the sales cycle by focusing efforts on prospects ready to make decisions.</span>
              </li>
              <li className="flex gap-3">
                <span className="select-none">•</span>
                <span>Reduce wasted spend by eliminating low-intent accounts from your pipeline.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      src: "/Creative Edge.png",
      title: "Sales Development",
      category: "Outreach",
      content: (
        <p>
          Boost engagement with outbound campaigns and warm introductions.
        </p>
      ),
    },
    {
      src: "/Creative Edge.png",
      title: "Market Research",
      category: "Insights",
      content: (
        <p>
          Actionable insights and competitor benchmarking to fuel smarter GTM
          strategies.
        </p>
      ),
    },
  ];

  const items = cards.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
  ));

  return (
    <div className="min-h-screen bg-[#F0F1FA]">
      {/* keep navbar area as-is */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 relative flex items-center justify-center" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="leading-tight text-[#000000]"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(32px, 5vw, 92px)",
            fontWeight: 400,
          }}
        >
          Demand Tech Lead Generation and
        </h1>

        <p
          className="mt-4 text-[#574bef] leading-snug"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(48px, 5vw, 92px)",
            fontWeight: 500,
          }}
        >
          Sales Development Solutions
        </p>

        <p
          className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontWeight: 400,
            lineHeight: "1.2",
          }}
        >
          Sales and marketing solutions for enterprise and scaling businesses'
          growth challenges
        </p>

        {/* CTAs */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <Button3
            text="Let's Talk"
            href="/contact"
            className="px-4 py-2 text-sm"
          />
          <Button3
            text="Get Pricing"
            href="/pricing"
            className="px-4 py-2 text-sm"
          />
        </div>
      </section>

      {/* Trust / Marketing ROI section */}
      <section className="bg-[#F0F1FA] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-7 text-left md:pr-6 lg:pr-12">
              <h3
                className="text-gray-900"
                style={{
                  fontFamily: "Clash Display, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(26px, 3.8vw, 44px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                50+ B2B software companies trust us to improve their{" "}
                <span className="text-[#5B5BFF] font-medium">Marketing ROI</span>
              </h3>

              <p
                className="mt-2 text-gray-700 max-w-2xl font-neu"
                style={{
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  lineHeight: 1.6,
                  letterSpacing: "-0.01em",
                }}
              >
                In a world where attention spans are short and digital channels are
                overflowing with noise, standing out isn’t optional—it’s essential. At
                DemandTech, we create scroll-stopping, conversion-driven content that
                captures attention, sparks engagement, and positions your brand as the one
                to watch. We don’t just make prospects pause—we make them take action.
              </p>

              {/* CTA */}
              <div className="mt-4">
                <Button3 text="Contact Us" href="/contact" />
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-5 flex md:justify-end">
              <div className="w-full max-w-[560px] rounded-[28px] overflow-hidden shadow-sm self-start md:mt-2">
                <img
                  src="/Creative Edge.png"
                  alt="Marketing team reviewing analytics on screen"
                  className="block w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
  <h2
    className="font-bold text-gray-900 mb-8 text-center leading-tight"
    style={{
      fontSize: "clamp(32px, 8vw, 92px)",
    }}
  >
    Our In-House Software Solutions
  </h2>
  <Carousel items={items} />
</div>
    </div>
  );
}
