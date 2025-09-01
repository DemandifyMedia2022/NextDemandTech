import { Metadata } from 'next'
import Card2 from '@/components/ui/Card2'
import { ProgressiveBlurBentoGridV2 } from '@/components/ui/progressive-blur-bento-grid'
import Faq from '@/components/ui/faq';
import '../../Homepage.css';

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
            <Card2 imageSrc="/Creative Edge.png" alt="creative edge" />
          </div>

          {/* Text */}
          <div className="text-center md:text-center">
            <div
              className="mt-4 leading-tight tracking-tight text-gray-900 font-clash
              text-[32px] sm:text-[48px] md:text-[72px] lg:text-[72px] xl:text-[72px] 2xl:text-[72px]"
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
              as the one to watch. 
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
      </div>

      {/* ✅ Bento Grid Section */}
      <div className="bento-grid-container px-4 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-20">
        <ProgressiveBlurBentoGridV2 />
      </div>

      {/* ✅ Prospect Attention Section */}
      <div className="bg-[#F0F1FA] py-16 sm:py-20 md:py-24 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-12">

          {/* Left Text Section */}
          <div className="text-left md:text-left">
            <h2 className="text-5xl sm:text-5xl lg:text-5xl font-clash font-semibold text-gray-900 leading-tight">
              We know how to grab your{" "}
              <span className="text-[#5B5BFF]">prospect’s attention</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg sm:text-lg lg:text-lg font-neu leading-relaxed max-w-xl">
              Attention spans are shrinking, and social media is more crowded than ever.
              Now’s the time for content and creative that truly stands out.
              We’ll make your prospects stop scrolling.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end">
            <Card2 imageSrc="/Creative Edge.png" alt="creative edge" />
          </div>
        </div>
      </div>



      {/* FAQ Section */}


      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <Faq
          heading="Marketing FAQ"
          titleLine1="Questions About"
          titleLine2="Marketing Solutions"
          items={[
            { question: 'What channels do you support?', answer: 'We execute across LinkedIn, email, content syndication, paid social, webinars, and nurture automation.' },
            { question: 'Do you create content as well?', answer: 'Yes. We produce thought leadership, ad creatives, landing pages, and nurture content aligned to your ICP.' },
            { question: 'How do you measure marketing impact?', answer: 'We track engagement, MQL/SQL conversions, pipeline contribution, and ROI via agreed KPIs.' },
            { question: 'Can you work with our in-house team?', answer: 'Absolutely. We can operate as an extension, collaborating with your marketing and sales teams.' },
            { question: 'How soon can campaigns go live?', answer: 'Typically 1–2 weeks after creative, targeting, and tracking are finalized.' },
          ]}
        />
      </div>
    </div>
  )
}


