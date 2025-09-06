import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'
import Card2 from '@/components/ui/Card2'
import Faq from '@/components/ui/faq'
import { TextEffect } from '@/components/core/text-effect'
import DemandGenerationSection from '../../../../components/ui/DemandGenerationSection'
import { Ribbon3 } from '@/components/index'

export const metadata: Metadata = {
  title: 'Demand Generation | DemandTech',
  description:
    'Drive qualified leads and accelerate your sales pipeline with our proven demand generation strategies.',
}

export default function DemandGenerationPage() {
  const sections = [
    {
      title: 'Brand Awareness',
      text: 'DemandTeq enhances your brand visibility through multi-channel campaigns that ensure your business stays top-of-mind, strengthens credibility, and builds lasting market presence.',
      image: '/Brand Awareness.webp'
    },
    {
      title: 'Intent Qualified Leads',
      text: 'DemandTech delivers high-quality leads backed by verified intent data, connecting you directly with prospects who are actively researching solutions and have a high likelihood of conversion.',
      image: '/IQL.webp',
    },
    {
      title: 'Webinar',
      text: 'DemandTech educates and engages your target audience through professional, interactive, and value-driven sessions that position your brand as a thought leader, generate quality leads, and foster meaningful business relationships.',
      image: '/webinar.webp',
    },
    {
      title: 'Multi Touch Content Syndication',
      text: 'DemandTech’s Multi-Touch Content Syndication focuses on long-term relationship building and lead nurturing. Instead of a one-time push, we distribute your content through multiple, strategically timed touchpoints—keeping your brand consistently in front of high-intent prospects.',
      image: '/MTCS.webp',
    },
    {
      title: 'Single Touch Content Syndication',
      text: 'DemandTech’s Single-Touch Content Syndication is designed for businesses that need fast, precise, and measurable results. By leveraging our intent data and industry-specific targeting, we distribute your content directly to decision-makers in one powerful, strategic outreach.',
      image: '/STCS.webp',
    },
    {
      title: 'Callback Consent',
      text: 'DemandTech provides direct, permission-based opportunities to connect with decision-makers, ensuring conversations start with warm prospects who are open to discussing your solutions.',
      image: '/CBC.webp',
    },
    {
      title: 'Lead Nurture Program',
      text: 'DemandTeq provides direct, permission-based opportunities to connect with decision-makers, ensuring conversations start with warm prospects who are open to discussing your solutions.',
      image: '/LNP.webp',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F0F1FA] z-[0]">
      <div style={{ position: 'absolute', width: '100%', zIndex: 0, marginTop: '200px' }}>
        {/* <Ribbon3 /> */}
      </div>
      <div className="z-[1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center mt-[-50px] ">

          {/* Heading */}
          <TextEffect
            per='line'
            as='div'
            segmentWrapperClassName='overflow-hidden block'
            variants={{
              container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } },
              item: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
            }}
            className="text-[#574BEF] text-4xl sm:text-5xl md:text-8xl lg:text-[92px] leading-tight"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            {['Demand Generation']}
          </TextEffect>

          {/* Subheading */}
          <TextEffect
            per='line'
            as='div'
            segmentWrapperClassName='overflow-hidden block'
            variants={{
              container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } },
              item: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
            }}
            className="mt-4 text-black text-4xl sm:text-4xl md:text-4xl lg:text-[70px] leading-snug"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            {['That Turns Interest into Revenue']}
          </TextEffect>

          {/* Description */}
          <p
            className="mt-6 text-gray-600 leading-relaxed mx-auto text-sm sm:text-base md:text-lg max-w-3xl"
            style={{ fontFamily: 'Neue Montreal, sans-serif' }}
          >
            Demand generation is the art and science of creating awareness, building
            interest, and converting potential buyers into qualified leads. It’s not
            just about generating traffic—it’s about connecting with the right
            audience, nurturing them through every stage of the buyer’s journey, and
            turning curiosity into measurable business growth.
          </p>

          <p
            className="mt-4 text-gray-600 leading-relaxed mx-auto text-sm sm:text-base md:text-lg max-w-3xl"
            style={{ fontFamily: 'Neue Montreal, sans-serif' }}
          >
            We combine data-driven targeting, industry expertise, and multi-channel
            strategies to ensure your brand reaches, engages, and converts
            high-intent prospects.
          </p>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <Button3 text="Get Pricing" href="/pricing" />
          </div>

          {/* Section Title */}
          <div className="mt-40 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
            <span
              className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-[70px]"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              Areas of
            </span>
            <span
              className="text-[#2717E8] text-4xl sm:text-5xl md:text-7xl lg:text-[70px]"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              Focus
            </span>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-[#F0F1FA] py-12 sm:py-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12">
                {/* Text */}
                <div
                  className={`text-left ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'
                    }`}
                >
                  <h2
                    className="text-black mb-4 text-xl sm:text-2xl md:text-3xl"
                    style={{ fontFamily: 'Clash Display, sans-serif' }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg max-w-md"
                    style={{ fontFamily: 'Neue Montreal, sans-serif' }}
                  >
                    {section.text}
                  </p>
                  <DemandGenerationSection
                    title={section.title}
                    imageSrc={section.image}
                    triggerClassName="mt-2 inline-block origin-left scale-90 sm:scale-95"
                  />
                </div>

                {/* Image */}
                <div
                  className={`flex justify-center ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                >
                  <Card2 imageSrc={section.image} alt={section.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Demand Generation FAQ */}
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
          <Faq
            heading="Demand Generation FAQ"
            titleLine1="Questions About"
            titleLine2="Demand Generation"
            items={[
              { question: 'What defines a qualified lead?', answer: 'We align to your ICP and qualification criteria (title, function, company size, tech stack, region, and intent) and validate through multi-step checks.' },
              { question: 'Which industries do you specialize in?', answer: 'We primarily serve B2B SaaS, cybersecurity, cloud, data, DevOps, and enterprise IT segments.' },
              { question: 'How do you attribute pipeline?', answer: 'We support UTMs, CRM sync, and custom tracking to attribute opportunities and revenue to specific programs.' },
              { question: 'Do you support multi-region programs?', answer: 'Yes. We operate across NA, EMEA, APAC, and LATAM with localized compliance and outreach.' },
              { question: 'What is a typical timeline to see results?', answer: 'Early signals in 1–2 weeks; qualified pipeline generation typically within the first 30–60 days depending on scope.' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}