import { Metadata } from 'next'
import Card2 from '@/components/ui/Card2'
import { ProgressiveBlurBentoGridV2 } from '@/components/ui/progressive-blur-bento-grid'  // ✅ import your second grid
import Faq from '@/components/ui/faq';


export const metadata: Metadata = {
    title: 'Marketing Solutions | DemandTech',
    description: 'Comprehensive marketing strategies that build brand awareness and drive customer engagement.',
}

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-[#F0F1FA]">
            {/* Hero Section */}
            <div className="bg-[#F0F1FA] py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className="flex">
                        <Card2 imageSrc="/creative Edge.png" alt="creative edge" />
                    </div>

                    <div>
                    <h1
          className="mt-4 leading-tight tracking-tight text-gray-900"
          style={{
            fontFamily: 'Clash Display, sans-serif',
            fontSize: '92px',
            lineHeight: '1.1',
          }}
        >
          <span className="block">Your B2B</span>
           <span className="text-[#5B5BFF]">Creative Edge</span>
          
          
        </h1>

                        <p
                            className="text-gray-600 leading-relaxed mb-6 text-center"
                            style={{
                                fontFamily: 'Neue Montreal, sans-serif',
                                fontSize: '16px',
                            }}
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
            <div className="mt-20 flex flex-col justify-center items-center text-center">
                <div>
                    <span
                        className="text-black font-clash"
                        style={{ fontSize: '64px' }}
                    >
                        Your one-stop-shop for
                    </span>
                </div>
                <div>
                    <span
                        className="text-[#2717E8] font-clash"
                        style={{ fontSize: '64px' }}
                    >
                        {" "}B2B content
                    </span>
                </div>
                <p
                    className="text-gray-600 font-neu"
                    style={{ fontSize: '18px' }}
                >
                    From SEO to LinkedIn Thoughtleadership, and everything in between.
                </p>
            </div>

            {/* ✅ Add your second grid here */}
            <div className="bento-grid-container" style={{ padding: '100px' }}>
                <ProgressiveBlurBentoGridV2 />
            </div>

            <div className="mt-20 flex flex-col justify-center items-center text-center">
                <div>
                    <span
                        className="text-black font-clash"
                        style={{ fontSize: '64px' }}
                    >
                        Quick Answers to Common
                    </span>
                </div>
                <div>
                    <span
                        className="text-[#2717E8] font-clash"
                        style={{ fontSize: '64px' }}
                    >
                        Questions
                    </span>
                </div>
            </div>

            <div className="max-w-2xl mx-auto py-12">
                <Faq />
            </div>

            {/* Contact Form */}
           
        </div>
    )
}
