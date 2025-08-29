import { Metadata } from "next";
import Button3 from "@/components/ui/Button3";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import CardSwap, { Card6 } from '@/components/ui/CardSwap'
import Image from "next/image";
export const metadata: Metadata = {
  title: "Products | DemandTech",
  description:
    "Discover our offerings designed to solve your business challenges and drive growth.",
};

export default function ProductsPage() {
  // Example cards (replace with real product data later)


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
          Delivering  Innovative,  Scalable,  and  Secure
        </h1>

        <p
          className="mt-4 text-[#574bef] leading-snug"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(48px, 5vw, 110px)",
            fontWeight: 500,
          }}
        >
          Software Solutions
        </p>

        <p
          className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontWeight: 400,
            lineHeight: "1.2",
          }}
        >
          Empowering enterprises with intelligent, future-ready software ecosystems.
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
        {/* Description + Cards row */}

        {/* Left description */}

        {/* Right cards */}
        <div style={{ height: '600px', position: 'relative' }}>

          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card6>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src="/ProductsCard3.png" alt="Product visual 1" fill quality={100} sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: 'cover' }} priority />
              </div>
            </Card6>
            <Card6>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src="/ProductsCard2.png" alt="Product visual 2" fill quality={100} sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              </div>
            </Card6>
            <Card6>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src="/ProductsCard1.png" alt="Product visual 3" fill quality={100} sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              </div>
            </Card6>
          </CardSwap>
        </div>
        <div />
      </section>


    </div>
  );
}
