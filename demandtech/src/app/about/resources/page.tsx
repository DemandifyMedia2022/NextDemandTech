"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button3 from '@/components/ui/Button3';
import { Search, Download, FileText, Video, BookOpen } from 'lucide-react';
// No Sanity usage here
// Sanity removed for resources. Keep page, remove Sanity fetching.

interface Resource {
    _id: string
    title: string
    description: string
    type: string
    format?: string
    size?: string
    downloads?: number
}

// Static placeholder until new data source is provided
async function getResources(): Promise<Resource[]> { return [] }

const resourceTypeColors: { [key: string]: string } = {
    whitepaper: 'bg-blue-100 text-blue-800',
    ebook: 'bg-green-100 text-green-800',
    guide: 'bg-purple-100 text-purple-800',
    template: 'bg-orange-100 text-orange-800',
    checklist: 'bg-red-100 text-red-800',
    webinar: 'bg-indigo-100 text-indigo-800',
}

const sampleResources: Resource[] = [
    {
        _id: '1',
        title: 'The Complete Guide to Demand Generation',
        description: 'Learn the fundamentals of modern demand generation and how to build a scalable pipeline that drives consistent growth.',
        type: 'whitepaper',
        format: 'PDF',
        size: '2.5 MB',
        downloads: 1250
    },
    {
        _id: '2',
        title: 'Marketing Automation Playbook',
        description: 'Discover how to implement marketing automation that nurtures leads and drives conversions at scale.',
        type: 'ebook',
        format: 'PDF',
        size: '3.2 MB',
        downloads: 890
    },
    {
        _id: '3',
        title: 'Campaign Planning Template',
        description: 'Streamline your campaign planning process with our comprehensive template and checklist.',
        type: 'template',
        format: 'Excel',
        size: '1.8 MB',
        downloads: 2100
    }
];

// Metadata moved to separate file or removed due to "use client" directive

export default function ResourcesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [isLoaded, setIsLoaded] = useState(false);
    const [resources, setResources] = useState<Resource[]>([]);

    useEffect(() => {
        setIsLoaded(true);
        // Use sample data when no Sanity data
        setResources(sampleResources);
    }, []);

    const resourceTypes = ['All', 'Whitepaper', 'eBook', 'Guide', 'Template', 'Checklist', 'Webinar'];

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || resource.type.toLowerCase() === selectedType.toLowerCase();
        return matchesSearch && matchesType;
    });

    const recentResources = resources.slice(0, 4);
    const popularResources = resources.sort((a, b) => (b.downloads || 0) - (a.downloads || 0)).slice(0, 4);

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
                        Resource <span style={{ color: '#000000' }}>Library</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Access our collection of guides, templates, and tools to accelerate your marketing success.
                    </p>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Type Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="flex flex-wrap gap-3">
                                {resourceTypes.map((type) => (
                                    <Button3
                                        key={type}
                                        text={type}
                                        onClick={() => setSelectedType(type)}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Resources Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedType + searchTerm}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {filteredResources.map((resource) => (
                                    <motion.div
                                        key={resource._id}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Image Placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                            <div className="text-white text-center z-10">
                                                <div className="text-sm font-medium opacity-90">Resource</div>
                                                <div className="text-lg font-bold mt-1">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            {/* Type Badge */}
                                            <div className="mb-3">
                                                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${resourceTypeColors[resource.type] || 'bg-gray-100 text-gray-800'}`}>
                                                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2
                                                className="mb-3"
                                                style={{
                                                    fontFamily: 'Clash Display, sans-serif',
                                                    fontSize: 'clamp(18px, 2vw, 24px)',
                                                    color: '#000000',
                                                }}
                                            >
                                                {resource.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                                {resource.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <Download size={14} />
                                                    <span>{resource.downloads?.toLocaleString() || 0} downloads</span>
                                                </div>
                                                <span>{resource.format} • {resource.size}</span>
                                            </div>

                                            {/* Download Button */}
                                            <Button3
                                                text="Download Now"
                                                className="w-full"
                                                onClick={() => {
                                                    // TODO: hook up real download action when available
                                                    console.log('Download clicked for resource', resource._id);
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredResources.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
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
                                    Search Resources
                                </h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search resources..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </motion.div>

                            {/* Popular Resources */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            >
                                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    Popular Downloads
                                </h3>
                                <div className="space-y-4">
                                    {popularResources.map((resource) => (
                                        <div key={resource._id} className="flex gap-3 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-50 text-blue-600 flex-shrink-0">
                                                <FileText size={16} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                    {resource.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {resource.downloads?.toLocaleString() || 0} downloads
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Contact CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white"
                            >
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    Need Custom Resources?
                                </h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Let us create tailored materials for your specific industry and needs.
                                </p>
                                <Button3 text="Contact Us" href="/contact" className="w-full" />
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
                        Ready to Implement These Strategies?
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg">
                        Get personalized guidance from our experts to maximize your marketing ROI.
                    </p>
                    <Button3 text="Schedule Consultation" href="/contact" />
                </div>
            </motion.div>
        </div>
    );
}