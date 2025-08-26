import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'
import LogoSlider from '@/components/ui/LogoSlider' 
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
            fontSize: 'clamp(32px, 5vw, 72px)',
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
            fontSize: 'clamp(24px, 5vw, 55px)',
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
      {/* Logo Slider */}
      <div className="logo-slider-container my-14 sm:my-12 xs:my-6">
        <LogoSlider />
      </div>
    </div>
  )
}
