import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { allPostsQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
    title: 'Blog & Insights | DemandTech',
    description: 'Stay updated with the latest insights, trends, and best practices in demand generation and marketing technology.',
}

interface Post {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    mainImage?: any
    publishedAt: string
    author: {
        name: string
        image?: any
    }
}

async function getPosts(): Promise<Post[]> {
    try {
        return await client.fetch(allPostsQuery)
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export default async function BlogsPage() {
    const posts = await getPosts()

    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-[92px] font-bold text-[#5B5BFF] sm:text-5xl">
                        Blog & Insights
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay ahead of the curve with expert insights, industry trends, and actionable strategies for demand generation success.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <article key={post._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {post.mainImage && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={urlForImage(post.mainImage).width(400).height(225).url()}
                                                alt={post.mainImage.alt || post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            {post.author.image && (
                                                <div className="w-8 h-8 relative rounded-full overflow-hidden mr-3">
                                                    <Image
                                                        src={urlForImage(post.author.image).width(32).height(32).url()}
                                                        alt={post.author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            <span>{post.author.name}</span>
                                            <span className="mx-2">•</span>
                                            <time dateTime={post.publishedAt}>
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </time>
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                            <Link
                                                href={`/about/blogs/${post.slug.current}`}
                                                className="hover:text-blue-600 transition-colors"
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/about/blogs/${post.slug.current}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-16 text-center">
                        <div className="bg-gray-50 rounded-lg p-12">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blog Posts Yet</h3>
                            <p className="text-gray-600 mb-6">
                                We're working on creating valuable content for you. Check back soon for insights and industry updates.
                            </p>
                            <p className="text-sm text-gray-500">
                                In the meantime, explore our <Link href="/about/case-studies" className="text-blue-600 hover:text-blue-800">case studies</Link> and <Link href="/about/resources" className="text-blue-600 hover:text-blue-800">resources</Link>.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}