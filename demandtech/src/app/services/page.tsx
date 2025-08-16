import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | DemandTech',
    description: 'Explore our comprehensive range of services designed to accelerate your business growth.',
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions to drive your business forward with cutting-edge technology and proven strategies.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Demand Generation
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Drive qualified leads and accelerate your sales pipeline with our data-driven demand generation strategies.
                        </p>
                        <a
                            href="/services/demand-generation"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Learn More →
                        </a>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Marketing Solutions
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Comprehensive marketing strategies that build brand awareness and drive customer engagement.
                        </p>
                        <a
                            href="/services/marketing"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}