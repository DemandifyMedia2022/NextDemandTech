import { Metadata } from 'next'
import Link from 'next/link'
import { SlideTabsExample } from '@/components/ui/SliderTabs'
import Button3 from '@/components/ui/Button3'
import LogoSlider from '../../../components/ui/LogoSlider'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

export const metadata: Metadata = {
    title: 'Services | DemandTech',
    description: 'Explore our comprehensive range of services designed to accelerate your business growth.',
}

export default function ServicesPage() {
    return (
		<div className="min-h-screen bg-[#F0F1FA]">
			{/* Top navigation bar with slider tabs and CTA */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 relative flex items-center justify-center">
				
				
                </div>

			{/* Hero section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-14">
				<p className="text-2xl sm:text-3xl text-gray-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
					<span className="font-regular ">Stop Guessing. </span>{' '}
					<span className="text-[#5B5BFF] font-regular">Start Closing</span>
				</p>

				<h1
                  className="mt-4 leading-tight tracking-tight text-gray-900"
                  style={{
                    fontFamily: 'Clash Display, sans-serif',
                    fontSize: '92px', // Set exact font size
                    lineHeight: '1.1', // Adjust line-height to match
                  }}
                >
                  <span className="block">Turn Buyer Intent</span>
                  <span className="block">
                    into <span className="text-[#5B5BFF]">Sales-Ready</span>
                  </span>
                  <span className="block">Opportunity</span>
                </h1>

				<p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-700">
					At Demand Tech, we deliver Intent Qualified Leads powered by real-time intent data,
					helping you connect with buyers actively searching for your solution. 
				</p>

				<div className="mt-10 flex flex-wrap gap-4">
					<Button3 
						text="Demand Generation" 
						href="/services/demand-generation" 
					/>
					<Button3 
						text="Marketing" 
						href="/services/marketing" 
					/>
				</div>
            </div>
			<div className="logo-slider-container my-20 sm:my-16 xs:my-10">
  					<LogoSlider />
			</div>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-14 ">
				<BackgroundGradientAnimation>
					<div className="px-5 py-5 md:px-12 md:py-14 lg:px-16 lg:py-20 text-white">
						<p className="text-sm uppercase tracking-wide opacity-90 font-light font-clash">Lead Nurture Program</p>
						<div className="mt-3 font-clash max-w-5xl leading-tight tracking-tight text-[44px] md:text-[56px] lg:text-[64px] transition-colors duration-300 hover:text-[#C7D0FF]">
							Turning Prospects into Loyal Customers, One Step at a Time.
						</div>
						<div className="mt-6 max-w-5xl space-y-4 text-white/85 text-sm md:text-base">
							<p>
								At DemandTech, our Lead Nurture Program is designed to build meaningful connections with prospects and guide them seamlessly through every stage of the buyer’s journey. We go beyond simply generating leads—we focus on educating, engaging, and building trust, ensuring your prospects are equipped with the knowledge and confidence to make informed purchase decisions.
							</p>
							<p>
								Our data-driven strategy uses advanced analytics and behavioral insights to tailor every interaction, ensuring it’s timely, relevant, and personalized to each prospect’s unique needs. By delivering the right message at the right time, we keep your brand top-of-mind, positioning you as the trusted, go-to solution when the buying decision happens.
							</p>
							<p>
								From welcome sequences and targeted email campaigns to thought leadership content, product education, and event invitations, our nurturing flows are built to anticipate prospect needs, address objections, and create a natural path toward conversion.
							</p>
						</div>

						<div className="mt-12 md:mt-14">
							<div className="relative pt-6 md:pt-8">
								{/* Slanted separators matching the reference design */}
								<div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
									<span className="absolute top-0 left-[25%] h-[120px] w-[2px] bg-white/60 origin-top rotate-[8deg]"></span>
									<span className="absolute top-0 left-[50%] h-[120px] w-[2px] bg-white/60 origin-top rotate-[8deg]"></span>
									<span className="absolute top-0 left-[75%] h-[120px] w-[2px] bg-white/60 origin-top rotate-[8deg]"></span>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 items-start text-center">
									<div className="px-4"><p className="font-clash text-[17px] md:text-[18px] leading-snug">Segmentation & Targeting</p></div>
									<div className="px-4"><p className="font-clash text-[17px] md:text-[18px] leading-snug">Personalized Content Journey</p></div>
									<div className="px-4"><p className="font-clash text-[17px] md:text-[18px] leading-snug">Multi-Channel Engagement</p></div>
									<div className="px-4"><p className="font-clash text-[17px] md:text-[18px] leading-snug">Behaviour Tracking</p></div>
								</div>
							</div>
						</div>
					</div>
				</BackgroundGradientAnimation>
			</div>
        </div>
    )
}