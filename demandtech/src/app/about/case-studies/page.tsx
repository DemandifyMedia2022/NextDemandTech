import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { allCaseStudiesQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
    title: 'Case Studies | DemandTech',
    description: 'Explore real-world success stories and see how DemandTech has helped businesses achieve remarkable growth.',
}

interface CaseStudy {
    _id: string
    title: string
    slug: { current: string }
    industry: string
    description: string
    results: Array<{
        metric: string
        value: string
    }>
    mainImage?: any
}

async function getCaseStudies(): Promise<CaseStudy[]> {
    try {
        return await client.fetch(allCaseStudiesQuery)
    } catch (error) {
        console.error('Error fetching case studies:', error)
        return []
    }
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies()

    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Case Studies
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how we've helped businesses across industries achieve remarkable growth through strategic demand generation.
                    </p>
                </div>

                {caseStudies.length > 0 ? (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {caseStudies.map((caseStudy) => (
                                <div key={caseStudy._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {caseStudy.mainImage && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={urlForImage(caseStudy.mainImage).width(600).height(338).url()}
                                                alt={caseStudy.mainImage.alt || caseStudy.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-8">
                                        <div className="mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                {caseStudy.industry}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                            {caseStudy.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {caseStudy.description}
                                        </p>

                                        {caseStudy.results && caseStudy.results.length > 0 && (
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {caseStudy.results.slice(0, 4).map((result, index) => (
                                                        <div key={index} className="text-center">
                                                            <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                                                            <div className="text-sm text-gray-600">{result.metric}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <Link
                                            href={`/about/case-studies/${caseStudy.slug.current}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Read Full Case Study →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Sample case studies when no Sanity data */}
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-4xl font-bold mb-2">250%</div>
                                        <div className="text-lg">Lead Increase</div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            Technology
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        SaaS Startup Scales Lead Generation
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        How a growing SaaS company transformed their demand generation strategy to achieve 250% lead growth and 40% reduction in cost per acquisition.
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-blue-600">250%</div>
                                                <div className="text-sm text-gray-600">Lead Increase</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-600">40%</div>
                                                <div className="text-sm text-gray-600">Lower CAC</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-purple-600">180%</div>
                                                <div className="text-sm text-gray-600">ROI Increase</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-orange-600">6 Months</div>
                                                <div className="text-sm text-gray-600">To Results</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                                        Read Full Case Study →
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-4xl font-bold mb-2">$2M</div>
                                        <div className="text-lg">Revenue Growth</div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Manufacturing
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        Manufacturing Company Modernizes Marketing
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        A traditional manufacturing company embraced digital transformation to reach new markets and achieve $2M in additional revenue.
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-600">$2M</div>
                                                <div className="text-sm text-gray-600">Revenue Growth</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-blue-600">300%</div>
                                                <div className="text-sm text-gray-600">Online Leads</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-purple-600">5x</div>
                                                <div className="text-sm text-gray-600">Market Reach</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-orange-600">12 Months</div>
                                                <div className="text-sm text-gray-600">Payback Period</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                                        Read Full Case Study →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join the growing list of companies that have transformed their growth with DemandTech's proven strategies.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    )
}