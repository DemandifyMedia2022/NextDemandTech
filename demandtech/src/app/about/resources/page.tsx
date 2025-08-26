import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { allResourcesQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
    title: 'Resources | DemandTech',
    description: 'Access our comprehensive library of resources including whitepapers, guides, templates, and tools to accelerate your growth.',
}

interface Resource {
    _id: string
    title: string
    slug: { current: string }
    type: string
    description: string
    coverImage?: any
    file?: any
}

async function getResources(): Promise<Resource[]> {
    try {
        return await client.fetch(allResourcesQuery)
    } catch (error) {
        console.error('Error fetching resources:', error)
        return []
    }
}

const resourceTypeColors: { [key: string]: string } = {
    whitepaper: 'bg-blue-100 text-blue-800',
    ebook: 'bg-green-100 text-green-800',
    guide: 'bg-purple-100 text-purple-800',
    template: 'bg-orange-100 text-orange-800',
    checklist: 'bg-red-100 text-red-800',
    webinar: 'bg-indigo-100 text-indigo-800',
}

export default async function ResourcesPage() {
    const resources = await getResources()

    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Resources
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Accelerate your growth with our comprehensive library of resources, tools, and actionable insights.
                    </p>
                </div>

                {resources.length > 0 ? (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.map((resource) => (
                                <div key={resource._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {resource.coverImage && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={urlForImage(resource.coverImage).width(400).height(225).url()}
                                                alt={resource.coverImage.alt || resource.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${resourceTypeColors[resource.type] || 'bg-gray-100 text-gray-800'}`}>
                                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {resource.description}
                                        </p>
                                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                            Download Resource
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Sample resources when no Sanity data */}
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Whitepaper
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        The Complete Guide to Demand Generation
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Learn the fundamentals of modern demand generation and how to build a scalable pipeline that drives consistent growth.
                                    </p>
                                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                        Download Resource
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            eBook
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Marketing Automation Playbook
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Discover how to implement marketing automation that nurtures leads and drives conversions at scale.
                                    </p>
                                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                        Download Resource
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            Template
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Campaign Planning Template
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Streamline your campaign planning process with our comprehensive template and checklist.
                                    </p>
                                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                        Download Resource
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Need Something Specific?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Can't find the resource you're looking for? Let us know what you need and we'll create it for you.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Request a Resource
                    </button>
                </div>
            </div>
        </div>
    )
}