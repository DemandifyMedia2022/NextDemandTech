import { Metadata } from 'next'
import Link from 'next/link'
import Button3 from '@/components/ui/Button3'
import { GSAPTextReveal } from '@/components/ui/GSAPTextReveal'

export const metadata: Metadata = {
    title: 'About | DemandTech',
    description: 'Learn about DemandTech - our mission, values, and commitment to driving business growth through innovative technology solutions.',
}

export default function AboutPage() {
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
                           Your Partner in Scalable  <span className="text-[#5B5BFF]">Futuristic Solutions</span>
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

                <div className="mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with the vision of bridging the gap between technology and business growth, DemandTech has evolved into a leading provider of demand generation and marketing solutions.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We believe that every business deserves access to cutting-edge tools and strategies that drive measurable results. Our team of experts combines deep industry knowledge with innovative technology to deliver solutions that scale with your business.
                            </p>
                            <p className="text-gray-600">
                                Today, we serve businesses of all sizes across various industries, helping them achieve their growth objectives through data-driven strategies and personalized approaches.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <Link href="/about/overview" className="block text-blue-600 hover:text-blue-800">
                                    Company Overview →
                                </Link>
                                <Link href="/about/clients" className="block text-blue-600 hover:text-blue-800">
                                    Our Clients →
                                </Link>
                                <Link href="/about/blogs" className="block text-blue-600 hover:text-blue-800">
                                    Blog & Insights →
                                </Link>
                                <Link href="/about/resources" className="block text-blue-600 hover:text-blue-800">
                                    Resources →
                                </Link>
                                <Link href="/about/case-studies" className="block text-blue-600 hover:text-blue-800">
                                    Case Studies →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">We continuously push boundaries to deliver cutting-edge solutions that drive real results.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                            <p className="text-gray-600">We work closely with our clients as trusted partners in their growth journey.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
                            <p className="text-gray-600">We're committed to delivering measurable outcomes that impact your bottom line.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}