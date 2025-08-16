import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Clients | DemandTech',
    description: 'Discover the diverse range of clients who trust DemandTech to drive their growth and success.',
}

export default function ClientsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Our Clients
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        We're proud to partner with innovative companies across industries, helping them achieve remarkable growth through our solutions.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">Trusted by Industry Leaders</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-xs">Client Logo</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Industries We Serve</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology & SaaS</h3>
                            <p className="text-gray-600 mb-4">Helping tech companies scale their customer acquisition and drive product adoption.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 50+ SaaS clients</div>
                                <div>• Average 250% lead increase</div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services</h3>
                            <p className="text-gray-600 mb-4">Supporting fintech and traditional financial institutions with compliant marketing solutions.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 25+ financial clients</div>
                                <div>• Regulatory compliant campaigns</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare & Life Sciences</h3>
                            <p className="text-gray-600 mb-4">Enabling healthcare organizations to reach patients and providers effectively.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 30+ healthcare clients</div>
                                <div>• HIPAA compliant solutions</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                            <p className="text-gray-600 mb-4">Helping manufacturers modernize their marketing and reach new markets.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 40+ manufacturing clients</div>
                                <div>• B2B focused strategies</div>
                            </div>
                        </div>

                        <div className="bg-red-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                            <p className="text-gray-600 mb-4">Supporting educational institutions and EdTech companies in student acquisition.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 20+ education clients</div>
                                <div>• Student-focused campaigns</div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy & Utilities</h3>
                            <p className="text-gray-600 mb-4">Helping energy companies communicate value and drive adoption of new technologies.</p>
                            <div className="text-sm text-gray-500">
                                <div>• 15+ energy clients</div>
                                <div>• Sustainability focused</div>
                            </div>
                        </div>
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
        </div>
    )
}