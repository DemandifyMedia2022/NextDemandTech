// import { Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { PortableText } from '@portabletext/react'
// // import { client } from '@/lib/sanity.client'
// // import { singleCaseStudyQuery } from '@/lib/sanity.queries'
// // import { urlForImage } from '@/lib/sanity.image'

// interface CaseStudy {
//     _id: string
//     title: string
//     slug: { current: string }
//     industry: string
//     description: string
//     results: Array<{
//         metric: string
//         value: string
//     }>
//     mainImage?: any
//     body: any[]
// }

// async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
//     try {
//         return await client.fetch(singleCaseStudyQuery, { slug })
//     } catch (error) {
//         console.error('Error fetching case study:', error)
//         return null
//     }
// }

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const caseStudy = await getCaseStudy(params.slug)

//     if (!caseStudy) {
//         return {
//             title: 'Case Study Not Found | DemandTech',
//         }
//     }

//     return {
//         title: `${caseStudy.title} | DemandTech Case Studies`,
//         description: caseStudy.description,
//     }
// }

// const portableTextComponents = {
//     types: {
//         image: ({ value }: any) => (
//             <div className="my-8">
//                 <Image
//                     src={urlForImage(value).width(800).height(450).url()}
//                     alt={value.alt || ''}
//                     width={800}
//                     height={450}
//                     className="rounded-lg"
//                 />
//             </div>
//         ),
//     },
//     block: {
//         h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
//         h2: ({ children }: any) => <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">{children}</h2>,
//         h3: ({ children }: any) => <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{children}</h3>,
//         normal: ({ children }: any) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
//         blockquote: ({ children }: any) => (
//             <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
//                 {children}
//             </blockquote>
//         ),
//     },
//     marks: {
//         link: ({ children, value }: any) => (
//             <a href={value.href} className="text-blue-600 hover:text-blue-800 underline">
//                 {children}
//             </a>
//         ),
//     },
// }

// export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
//     const caseStudy = await getCaseStudy(params.slug)

//     if (!caseStudy) {
//         notFound()
//     }

//     return (
//         <div className="min-h-screen bg-white">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="mb-8">
//                     <Link
//                         href="/about/case-studies"
//                         className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
//                     >
//                         ← Back to Case Studies
//                     </Link>

//                     <div className="mb-6">
//                         <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
//                             {caseStudy.industry}
//                         </span>
//                         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                             {caseStudy.title}
//                         </h1>
//                         <p className="text-xl text-gray-600 mb-6">
//                             {caseStudy.description}
//                         </p>
//                     </div>

//                     {caseStudy.mainImage && (
//                         <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
//                             <Image
//                                 src={urlForImage(caseStudy.mainImage).width(800).height(450).url()}
//                                 alt={caseStudy.mainImage.alt || caseStudy.title}
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     )}

//                     {caseStudy.results && caseStudy.results.length > 0 && (
//                         <div className="bg-gray-50 rounded-lg p-8 mb-8">
//                             <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Results</h2>
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                                 {caseStudy.results.map((result, index) => (
//                                     <div key={index} className="text-center">
//                                         <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
//                                         <div className="text-sm text-gray-600">{result.metric}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="prose prose-lg max-w-none">
//                     {caseStudy.body && caseStudy.body.length > 0 ? (
//                         <PortableText value={caseStudy.body} components={portableTextComponents} />
//                     ) : (
//                         <div className="bg-gray-50 rounded-lg p-8 text-center">
//                             <p className="text-gray-600">This case study content is being updated. Please check back soon.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }