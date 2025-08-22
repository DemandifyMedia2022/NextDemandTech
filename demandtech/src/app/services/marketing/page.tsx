import { Metadata } from 'next'
import Card2 from '@/components/ui/Card2'
import { ProgressiveBlurBentoGridV2 } from '@/components/ui/progressive-blur-bento-grid'
import Faq from '@/components/ui/faq';

export const metadata: Metadata = {
  title: 'Marketing Solutions | DemandTech',
  description: 'Comprehensive marketing strategies that build brand awareness and drive customer engagement.',
}

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#F0F1FA]"> 
      {/* Hero Section */}
      <div className="bg-[#F0F1FA] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-12">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Card2 imageSrc="/creative Edge.png" alt="creative edge" />
          </div>

          {/* Text */}
          <div className="text-center md:text-center">
            <div
              className="mt-4 leading-tight tracking-tight text-gray-900 font-clash
              text-[32px] sm:text-[48px] md:text-[72px] lg:text-[80px] xl:text-[88px] 2xl:text-[92px]"
            >
              <span className="block">Your B2B</span>
              <span className="text-[#5B5BFF]">Creative Edge</span>
            </div>

            <p
              className="text-gray-600 leading-relaxed mt-6 font-neu
              text-sm sm:text-base md:text-lg lg:text-lg xl:text-md
              max-w-2xl mx-auto md:mx-0"
            >
              In a world where attention spans are short and digital channels are
              overflowing with noise, standing out isn’t optional—it’s essential.
              At DemandTech, we create scroll-stopping, conversion-driven content
              that captures attention, sparks engagement, and positions your brand
              as the one to watch. We don’t just make prospects pause—we make them
              take action.
            </p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-16 sm:mt-20 flex flex-col justify-center items-center text-center px-4">
        <div>
          <span
            className="text-black font-clash 
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[64px]"
          >
            Your one-stop-shop for
          </span>
        </div>
        <div>
          <span
            className="text-[#2717E8] font-clash 
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[64px]"
          >
            {" "}B2B content
          </span>
        </div>
        <p
          className="text-gray-600 font-neu mt-4
          text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl"
        >
          From SEO to LinkedIn Thoughtleadership, and everything in between.
        </p>
      </div>

      {/* ✅ Bento Grid Section */}
      <div className="bento-grid-container px-4 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-20">
        <ProgressiveBlurBentoGridV2 />
      </div>

      {/* FAQ Section */}
      <div className="mt-16 sm:mt-20 flex flex-col justify-center items-center text-center px-4">
        <div>
          <span
            className="text-black font-clash
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[64px]"
          >
            Quick Answers to Common
          </span>
        </div>
        <div>
          <span
            className="text-[#2717E8] font-clash
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[64px]"
          >
            Questions
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Faq />
      </div>
    </div>
  )
}
