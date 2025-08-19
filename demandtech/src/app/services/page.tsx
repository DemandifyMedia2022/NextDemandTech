import { Metadata } from 'next'
import Link from 'next/link'
import { SlideTabsExample } from '@/components/ui/SliderTabs'

export const metadata: Metadata = {
	title: 'Services | DemandTech',
	description: 'Explore our comprehensive range of services designed to accelerate your business growth.',
}

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-[#EEF0FF]">
			{/* Top navigation moved to global layout */}

			{/* Hero section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-14">
				<p className="text-2xl sm:text-3xl text-gray-900">
					<span className="font-medium">Stop Guessing.</span>{' '}
					<span className="text-[#5B5BFF] font-semibold">Start Closing</span>
				</p>

				<h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight text-gray-900">
					<span className="block">Turn Buyer Intent</span>
					<span className="block">into <span className="text-[#5B5BFF]">Sales-Ready</span></span>
					<span className="block">Opportunity</span>
				</h1>

				<p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-700">
					At Demand Tech, we deliver Intent Qualified Leads powered by real-time intent data,
					helping you connect with buyers actively searching for your solution. With smarter
					targeting and verified intent, your team focuses only on high-conversion opportunities—
					no more cold outreach, just leads that are ready to buy.
				</p>

				<div className="mt-10 flex flex-wrap gap-4">
					<Link
						href="/services/demand-generation"
						className="inline-flex items-center gap-2 rounded-full border border-[#7D7DFF] px-6 py-3 text-base font-medium text-[#1C1C1C] bg-transparent hover:bg-white/70"
					>
						<span className="text-[#5B5BFF]">•</span> Demand Generation
					</Link>
					<Link
						href="/services/marketing"
						className="inline-flex items-center gap-2 rounded-full border border-[#7D7DFF] px-6 py-3 text-base font-medium text-[#1C1C1C] bg-transparent hover:bg-white/70"
					>
						<span className="text-[#5B5BFF]">•</span> Marketing
					</Link>
				</div>
			</div>
		</div>
	)
} 
