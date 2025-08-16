import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Marketing Solutions | DemandTech',
    description: 'Comprehensive marketing strategies that build brand awareness and drive customer engagement.',
}

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Marketing Solutions
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Build your brand and engage customers with our comprehensive marketing strategies designed for the modern digital landscape.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Marketing</h3>
                            <p className="text-gray-600 mb-4">Create compelling content that resonates with your audience and drives engagement.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Blog content strategy</li>
                                <li>• Video marketing</li>
                                <li>• Social media content</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Advertising</h3>
                            <p className="text-gray-600 mb-4">Reach your target audience with precision-targeted digital advertising campaigns.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Google Ads management</li>
                                <li>• Social media advertising</li>
                                <li>• Display advertising</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Marketing</h3>
                            <p className="text-gray-600 mb-4">Nurture leads and maintain customer relationships with strategic email campaigns.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Automated workflows</li>
                                <li>• Newsletter campaigns</li>
                                <li>• Lead nurturing sequences</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO & SEM</h3>
                            <p className="text-gray-600 mb-4">Improve your online visibility and drive organic traffic to your website.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Technical SEO audits</li>
                                <li>• Keyword research</li>
                                <li>• Search engine marketing</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy</h3>
                            <p className="text-gray-600 mb-4">Develop a strong brand identity that differentiates you from competitors.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Brand positioning</li>
                                <li>• Visual identity design</li>
                                <li>• Brand messaging</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Automation</h3>
                            <p className="text-gray-600 mb-4">Streamline your marketing processes with intelligent automation tools.</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Lead scoring</li>
                                <li>• Campaign automation</li>
                                <li>• Customer journey mapping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}