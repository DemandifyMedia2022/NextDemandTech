"use client";
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button3 from '@/components/ui/Button3'
import Button4 from '@/components/ui/Button4'
import { Search, Calendar } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { allLearningResourcesQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

interface FileAsset {
  asset?: {
    url?: string
    originalFilename?: string
  }
}

interface ResourceDoc {
  _id: string
  title: string
  slug?: string
  thumbnail?: any
  publishedAt?: string
  file?: FileAsset
}

async function getItems(): Promise<ResourceDoc[]> {
  try {
    return await client.fetch(allLearningResourcesQuery)
  } catch (e) {
    console.error('Error fetching resources:', e)
    return []
  }
}

export default function LearningResourcesPage() {
  const [items, setItems] = useState<ResourceDoc[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    getItems().then(setItems)
  }, [])

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase()
    return items.filter(i => i.title.toLowerCase().includes(q))
  }, [items, searchTerm])

  const recent = items.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } }
  }
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { y: -5, transition: { duration: 0.2 } },
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="mb-6"
            style={{ fontFamily: 'Clash Display, sans-serif', fontSize: 'clamp(40px, 7vw, 92px)', color: 'blue', lineHeight: 1.1 }}
          >
            Learning <span style={{ color: '#000000' }}>Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Download resources to level up your knowledge.
          </p>
        </div>
      </motion.div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Content */}
          <div className="lg:col-span-3">
            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={searchTerm}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filtered.map(doc => {
                  const imageUrl = doc.thumbnail ? urlForImage(doc.thumbnail).width(400).height(225).url() : undefined
                  const fileUrl = doc.file?.asset?.url
                  const fileName = doc.file?.asset?.originalFilename || `${doc.title}.pdf`
                  return (
                    <motion.article key={doc._id} variants={cardVariants} whileHover="hover" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Image */}
                      {imageUrl ? (
                        <div className="aspect-video relative">
                          <Image src={imageUrl} alt={doc.title} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="text-white text-center z-10">
                            <div className="text-sm font-medium opacity-90">Resource</div>
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        {/* Title */}
                        <h2
                          className="mb-3"
                          style={{ fontFamily: 'Clash Display, sans-serif', fontSize: 'clamp(18px, 2vw, 24px)', color: '#000000' }}
                        >
                          {doc.title}
                        </h2>

                        {/* Meta */}
                        {doc.publishedAt && (
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar size={14} className="mr-1" />
                            <span>{new Date(doc.publishedAt).toLocaleDateString()}</span>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          {fileUrl ? (
                            <Button4
                              label="Download"
                              onClick={() => {
                                try {
                                  const a = document.createElement('a');
                                  a.href = fileUrl;
                                  a.download = fileName;
                                  a.target = '_blank';
                                  document.body.appendChild(a);
                                  a.click();
                                  a.remove();
                                } catch (e) {
                                  console.error('Download failed', e);
                                  window.open(fileUrl, '_blank');
                                }
                              }}
                            />
                          ) : (
                            <span className="text-sm text-gray-500">No file uploaded</span>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No resources found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Search */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Search Resources</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </motion.div>

              {/* Recent */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Recent</h3>
                <div className="space-y-4">
                  {recent.map(doc => (
                    <div key={doc._id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{doc.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString() : ''}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="bg-white rounded-xl p-6 text-black">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">Get the latest insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <input type="email" placeholder="Your email address" className="w-full px-3 py-2 text-gray-900 rounded-[25px] text-sm focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none border border-gray-200" />
                  <Button3 text="Subscribe" className="w-full" onClick={() => console.log('Subscribe click')} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
