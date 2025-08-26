import { Metadata } from 'next'
import PricingContent from "@/components/ui/PricingContent"
export const metadata: Metadata = {
    title: 'Pricing | DemandTech',
    description: 'Choose the perfect plan for your business. Transparent pricing with no hidden fees.',
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#F0F1FA]">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center font-clash">
                    <div className="text-[#574BEF] text-4xl sm:text-4xl md:text-4xl lg:text-[64px] leading-tight">
                    Choose What Fits, Achieve What’s Next
                    </div>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                    Lead generation campaigns crafted to meet your business ambitions
                    </p>
                </div>

                <div>
  <PricingContent />
</div>

                <div className="mt-16">
                </div>
                
                </div>
            </div>
        
    )
}