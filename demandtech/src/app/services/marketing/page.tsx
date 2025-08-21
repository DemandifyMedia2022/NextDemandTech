import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'
import Card2 from '@/components/ui/Card2'
import { ProgressiveBlurBentoGridV2 } from '@/components/ui/progressive-blur-bento-grid'  // ✅ import your second grid

export const metadata: Metadata = {
    title: 'Marketing Solutions | DemandTech',
    description: 'Comprehensive marketing strategies that build brand awareness and drive customer engagement.',
}

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-[#F6F7FB] py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className="flex">
                        <Card2 imageSrc="/creative Edge.png" alt="creative edge" />
                    </div>

                    <div className="text-center">
                        <span
                            className="text-black mb-4"
                            style={{
                                fontFamily: 'Clash Display, sans-serif',
                                fontSize: '55px',
                            }}
                        >
                            Your B2B{' '}
                        </span>
                        <span
                            className="text-[#2717E8]"
                            style={{
                                fontFamily: 'Clash Display, sans-serif',
                                fontSize: '55px',
                            }}
                        >
                            Creative Edge
                        </span>

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


            <div className="mt-20 flex flex-col justify-center items-center text-center">
                <div>
                    <span
                        className="text-black"
                        style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '55px' }}
                    >
                        Your one-stop-shop for
                    </span>
                </div>
                <div>
                    <span
                        className="text-[#2717E8]"
                        style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '55px' }}
                    >
                        B2B content
                    </span>
                </div>
                <p
                    className="text-gray-600"
                    style={{ fontFamily: 'Neue Montreal, sans-serif', fontSize: '18px' }}
                >
                    From SEO to LinkedIn Thoughtleadership, and everything in between.
                </p>

            </div>

            {/* ✅ Add your second grid here */}
            <div className="bento-grid-container" style={{ padding: '100px', }}>
                <ProgressiveBlurBentoGridV2 />
            </div>
        </div>
    )
}
