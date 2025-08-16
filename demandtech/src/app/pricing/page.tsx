import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing | DemandTech',
    description: 'Choose the perfect plan for your business. Transparent pricing with no hidden fees.',
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">Starter</h3>
                                <p className="text-gray-600 mt-2">Perfect for small businesses getting started</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-bold text-gray-900">$999</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Up to 5,000 contacts
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Email marketing automation
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Basic analytics dashboard
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Lead scoring
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Email support
                                </li>
                            </ul>

                            <button className="w-full mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white border-2 border-blue-500 rounded-lg p-8 shadow-lg relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">Professional</h3>
                                <p className="text-gray-600 mt-2">Ideal for growing businesses</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-bold text-gray-900">$2,499</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Up to 25,000 contacts
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced automation workflows
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced analytics & reporting
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    A/B testing
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    CRM integrations
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority support
                                </li>
                            </ul>

                            <button className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
                                <p className="text-gray-600 mt-2">For large organizations with complex needs</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Unlimited contacts
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Custom integrations
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    White-label options
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced security & compliance
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Dedicated account manager
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 phone support
                                </li>
                            </ul>

                            <button className="w-full mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Can I change my plan at any time?
                            </h3>
                            <p className="text-gray-600">
                                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Is there a free trial available?
                            </h3>
                            <p className="text-gray-600">
                                We offer a 14-day free trial for all plans. No credit card required to get started.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                What kind of support do you provide?
                            </h3>
                            <p className="text-gray-600">
                                All plans include email support. Professional plans get priority support, and Enterprise customers receive dedicated account management and 24/7 phone support.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Do you offer custom solutions?
                            </h3>
                            <p className="text-gray-600">
                                Yes, our Enterprise plan includes custom integrations and white-label options. Contact our sales team to discuss your specific requirements.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join thousands of businesses that trust DemandTech to drive their growth. Start your free trial today.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}