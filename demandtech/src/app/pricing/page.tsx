import { Metadata } from 'next'
import PricingContent from "@/components/ui/PricingContent"
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
  <PricingContent />
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