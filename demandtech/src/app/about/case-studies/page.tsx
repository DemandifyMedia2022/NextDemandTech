import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { allCaseStudiesQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
  title: 'Case Studies | DemandTech',
  description: 'Download case studies showcasing our impact and results.'
}

interface FileAsset {
  asset?: {
    url?: string
    originalFilename?: string
  }
}

interface CaseStudyDoc {
  _id: string
  title: string
  slug?: string
  thumbnail?: any
  publishedAt?: string
  file?: FileAsset
}

export default async function CaseStudiesPage() {
  const items: CaseStudyDoc[] = await client.fetch(allCaseStudiesQuery)

  return (
    <div className="min-h-screen bg-[#F0F1FA]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'Clash Display', color: '#000cf8' }}>Case Studies</h1>
        <p className="mt-3 text-lg text-black/70" style={{ fontFamily: 'Neue Montreal' }}>Browse and download our latest case studies.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items?.length ? items.map((doc) => {
            const imageUrl = doc.thumbnail ? urlForImage(doc.thumbnail).width(800).height(600).url() : undefined
            const fileUrl = doc.file?.asset?.url
            const fileName = doc.file?.asset?.originalFilename || `${doc.title}.pdf`
            return (
              <div key={doc._id} className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                {imageUrl ? (
                  <div className="relative aspect-[4/3]">
                    <Image src={imageUrl} alt={doc.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-black/5" />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-medium text-black" style={{ fontFamily: 'Clash Display' }}>{doc.title}</h2>
                  <div className="mt-4 flex items-center gap-3">
                    {fileUrl ? (
                      <Link href={fileUrl} download={fileName} className="inline-flex items-center px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#000cf8' }}>
                        Download
                      </Link>
                    ) : (
                      <span className="text-sm text-black/50">No file uploaded</span>
                    )}
                  </div>
                </div>
              </div>
            )
          }) : (
            <p className="text-black/60">No case studies yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
