import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'

export const metadata: Metadata = {
    title: 'Company Overview | DemandTech',
    description: 'Get a comprehensive overview of DemandTech - our history, mission, and the team behind our success.',
}

export default function OverviewPage() {
    return (

        <div className="min-h-screen bg-transparent">
            {/* Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-16 items-center">
                    {/* Left: Headline and CTA */}
                    <div>

                        <h1
                            className="leading-tight text-gray-900"
                            style={{ fontFamily: 'Clash Display, sans-serif', fontSize: 'clamp(42px, 6vw, 96px)' }}
                        >
                            Partner in Scalable  <span className="text-[#5B5BFF]">Futuristic Solutions</span>
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl">
                            We deliver quality leads to B2B companies worldwide using multi‑channel and data‑driven strategies to engage target markets and boost sales for your business.
                        </p>
                        <div className="mt-8">
                            <Button3 text="Overview" href="/about/overview" />
                        </div>
                    </div>

                    {/* Right: 3‑image responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
                        {/* Top left */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                            <img src="/about1.jpeg" alt="Team" className="h-40 sm:h-48 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        {/* Top right */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                            <img src="/about3.jpeg" alt="Collaboration" className="h-40 sm:h-48 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        {/* Bottom full width */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg col-span-1 sm:col-span-2">
                            <img src="/about2.jpeg" alt="Culture" className="h-48 sm:h-56 md:h-64 lg:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Company Overview
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive look at DemandTech's journey, mission, and the expertise that drives our success.
                    </p>
                </div>

                <div className="mt-16 space-y-16">
                    <section>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Mission</h2>
                        <div className="bg-blue-50 rounded-lg p-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To empower businesses of all sizes with innovative demand generation and marketing technology solutions that drive measurable growth, enhance customer engagement, and create lasting competitive advantages in the digital marketplace.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Company Timeline</h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">2020 - Foundation</h3>
                                    <p className="text-gray-600 mt-1">DemandTech was founded with a vision to revolutionize demand generation through technology.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">2021 - First Major Client</h3>
                                    <p className="text-gray-600 mt-1">Secured our first enterprise client and delivered 300% ROI in the first quarter.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">2022 - Platform Launch</h3>
                                    <p className="text-gray-600 mt-1">Launched our proprietary demand generation platform serving 50+ clients.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">2023 - Expansion</h3>
                                    <p className="text-gray-600 mt-1">Expanded to serve clients across multiple industries with specialized solutions.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">2024 - Present</h3>
                                    <p className="text-gray-600 mt-1">Continuing to innovate and scale, serving 200+ clients worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Key Statistics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                                <div className="text-gray-600">Active Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
                                <div className="text-gray-600">Revenue Generated</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                                <div className="text-gray-600">Industries Served</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Leadership Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                                <p className="text-blue-600 mb-2">CEO & Founder</p>
                                <p className="text-gray-600 text-sm">15+ years in demand generation and marketing technology</p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
                                <p className="text-blue-600 mb-2">CTO</p>
                                <p className="text-gray-600 text-sm">Former tech lead at major SaaS companies, expert in scalable platforms</p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900">Emily Rodriguez</h3>
                                <p className="text-blue-600 mb-2">VP of Strategy</p>
                                <p className="text-gray-600 text-sm">Marketing strategist with expertise in B2B growth and analytics</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}