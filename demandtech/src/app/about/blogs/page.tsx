"use client";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button3 from '@/components/ui/Button3';
import ReadMoreButton from '@/components/ui/ReadMoreButton';
import { Search, Calendar, User } from 'lucide-react';
import { client } from '@/lib/sanity.client'
import { allPostsQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    mainImage?: any
    publishedAt: string
    author?: string
    category?: string
}

async function getPosts(): Promise<Post[]> {
    try {
        return await client.fetch(allPostsQuery)
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export default function BlogsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        setIsLoaded(true);
        // Fetch from Sanity only; if empty, show empty state UI
        getPosts().then(sanityPosts => {
            setPosts(sanityPosts);
        });
    }, []);

    const categories = ['All', 'Lead Generation', 'Marketing Strategy', 'Technology', 'Growth Hacking', 'Industry Insights'];

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const recentPosts = posts.slice(0, 4);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-transparent">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1
                        className="mb-6"
                        style={{
                            fontFamily: 'Clash Display, sans-serif',
                            fontSize: 'clamp(40px, 7vw, 92px)',
                            color: 'blue',
                            lineHeight: 1.1,
                        }}
                    >
                        Insights & <span style={{ color: '#000000' }}>Expertise</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Stay ahead with the latest trends, strategies, and insights in B2B marketing and lead generation.
                    </p>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Category Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <Button3
                                        key={category}
                                        text={category}
                                        onClick={() => setSelectedCategory(category)}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Blog Posts Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory + searchTerm}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {filteredPosts.map((post) => (
                                    <motion.article
                                        key={post._id}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Image */}
                                        {post.mainImage ? (
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={urlForImage(post.mainImage).width(400).height(225).url()}
                                                    alt={post.mainImage.alt || post.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                                <div className="text-white text-center z-10">
                                                    <div className="text-sm font-medium opacity-90">Blog Post</div>
                                                    <div className="text-lg font-bold mt-1">{post.category || 'Insights'}</div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6">
                                            {/* Category Badge */}
                                            {post.category && (
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h2
                                                className="mb-3 hover:text-blue-600 transition-colors cursor-pointer"
                                                style={{
                                                    fontFamily: 'Clash Display, sans-serif',
                                                    fontSize: 'clamp(18px, 2vw, 24px)',
                                                    color: '#000000',
                                                }}
                                            >
                                                <Link href={`/about/blogs/${post.slug.current}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <User size={14} />
                                                        <span>{post.author || 'DemandTech'}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Read More */}
                                            <Link href={`/about/blogs/${post.slug.current}`} className="inline-block">
                                                <ReadMoreButton text="Read More" />
                                            </Link>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            {/* Search */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            >
                                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    Search Posts
                                </h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search blog posts..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </motion.div>

                            {/* Recent Posts */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            >
                                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    Recent Posts
                                </h3>
                                <div className="space-y-4">
                                    {recentPosts.map((post) => (
                                        <Link key={post._id} href={`/about/blogs/${post.slug.current}`} className="flex gap-3 group cursor-pointer">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {new Date(post.publishedAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Newsletter Signup */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="bg-white rounded-xl p-6 text-black"
                            >
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    Stay Updated
                                </h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Get the latest insights delivered to your inbox.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-3 py-2 text-gray-900 rounded-[25px] text-sm focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none border border-gray-200"
                                    />
                                    <Button3
                                        text="Subscribe"
                                        className="w-full"
                                        onClick={() => {
                                            // TODO: hook up real subscribe action or form handler
                                            console.log('Newsletter subscribe clicked');
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="mb-6"
                        style={{
                            fontFamily: 'Clash Display, sans-serif',
                            fontSize: 'clamp(32px, 6vw, 56px)',
                            color: '#000000',
                        }}
                    >
                        Ready to Transform Your Marketing?
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg">
                        Let's discuss how our proven strategies can accelerate your business growth.
                    </p>
                    <Button3 text="Get Started Today" href="/contact" />
                </div>
            </motion.div>
        </div>
    );
}