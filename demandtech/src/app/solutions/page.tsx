import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Solutions | DemandTech',
    description: 'Discover our comprehensive solutions designed to solve your business challenges and drive growth.',
}

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Our Solutions
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored solutions that address your unique business challenges and accelerate your path to success.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Enterprise Solutions</h3>
                                <p className="text-gray-600 mb-4">
                                    Scalable solutions designed for large organizations with complex requirements and multiple stakeholders.
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Multi-channel campaign orchestration</li>
                                    <li>• Advanced analytics and reporting</li>
                                    <li>• Custom integrations and APIs</li>
                                    <li>• Dedicated account management</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">SMB Solutions</h3>
                                <p className="text-gray-600 mb-4">
                                    Cost-effective solutions tailored for small and medium businesses looking to scale efficiently.
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Quick-start marketing packages</li>
                                    <li>• Automated lead nurturing</li>
                                    <li>• Essential analytics dashboard</li>
                                    <li>• Self-service tools and resources</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Industry-Specific Solutions</h3>
                                <p className="text-gray-600 mb-4">
                                    Specialized solutions crafted for specific industries with unique compliance and operational requirements.
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Healthcare & Life Sciences</li>
                                    <li>• Financial Services</li>
                                    <li>• Technology & SaaS</li>
                                    <li>• Manufacturing & Industrial</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
                                <p className="text-gray-600 mb-4">
                                    Bespoke solutions built from the ground up to meet your specific business objectives and requirements.
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Custom platform development</li>
                                    <li>• Tailored workflow automation</li>
                                    <li>• Specialized integrations</li>
                                    <li>• White-label solutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Ready to Find Your Perfect Solution?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss your specific needs and create a customized solution that drives results for your business.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </div>
    )
}