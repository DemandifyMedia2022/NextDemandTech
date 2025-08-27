import { Metadata } from 'next'
import Testimonials from '@/components/ui/TestimonialGridUse'
import { GSAPTextReveal } from '@/components/ui/GSAPTextReveal'

export const metadata: Metadata = {
    title: 'Our Clients | DemandTech',
    description: 'Discover the diverse range of clients who trust DemandTech to drive their growth and success.',
}

export default function ClientsPage() {
    return (
        <div className="min-h-screen bg-transparent">


            <div className="mt-16">
                {/* Heading */}
                <div
                    className="text-[#574BEF] text-2xl sm:text-5xl md:text-8xl lg:text-[72px] leading-tight text-center"
                    style={{ fontFamily: 'Clash Display, sans-serif' }}
                >
                    Trusted by Industry Leaders
                </div>
                <div className="mt-[-80px]"><Testimonials /></div>

            </div>

            <div className="mt-20">
                <div className='contact-title'>
                    <GSAPTextReveal
                        style={{
                            marginTop: '50px',
                            alignItems: 'center',
                            alignContent: 'center',
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(48px, 8vw, 72px)',
                            textAlign: 'center',
                            color: '#000cf8'
                        }}
                        stagger={0.15}
                        duration={1.0}
                        yOffset={80}
                        start="top 75%"
                    >
                        Net Promoter Score
                    </GSAPTextReveal>
                </div>
            </div>

            <div className="mt-20 bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Join Our Growing Client Family
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Ready to see the results that our clients experience? Let's discuss how we can help your business achieve its growth objectives.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Become a Client
                </button>
            </div>
        </div>
    )
}