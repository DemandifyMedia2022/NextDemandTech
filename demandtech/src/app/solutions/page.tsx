import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'
import { Button2 } from '@/components/index'
export const metadata: Metadata = {
  title: 'Solutions | DemandTech',
  description:
    'Discover our comprehensive solutions designed to solve your business challenges and drive growth.',
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F0F1FA]">
      {/* keep navbar area as-is */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 relative flex items-center justify-center" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Heading */}
        <h1
          className="leading-tight text-[#000000]"
          style={{
            fontFamily: 'Clash Display, sans-serif',
            fontSize: 'clamp(32px, 5vw, 92px)',
            fontWeight: 400,
          }}
        >
        Demand Tech Lead Generation and        
        </h1>

        {/* Subheading */}
        <p
          className="mt-4 text-[#574bef] leading-snug  "
          style={{
            fontFamily: 'Clash Display, sans-serif',
            fontSize: 'clamp(48px, 5vw, 92px)',
            fontWeight: 500,
          }}
        >
           Sales Development Solutions
        </p>

        <p
            className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
            style={{
            fontFamily: 'Clash Display, sans-serif',
            fontWeight: 400,
            lineHeight: '1.2',
          }}
        >
           Sales and marketing solutions for enterprise and scaling businesse's growth challenges
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
                  fontFamily: 'Clash Display, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(26px, 3.8vw, 44px)', // keeps single line at desktop
                  lineHeight: 1.15, // slightly tighter like screenshot
                  letterSpacing: '-0.02em', // tighten spacing between letters
                }}
              >
                50+ B2B software companies trust us to improve their{' '}
                <span className="text-[#5B5BFF] font-medium">Marketing ROI</span>
              </h3>
            
              <p
                className="mt-2 text-gray-700 max-w-2xl"
                style={{
                  fontFamily:
                    'neue-haas-grotesk, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.01em', // subtle tighten for body too
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
    </div>
  )
}
