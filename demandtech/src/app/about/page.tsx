import { Metadata } from 'next'
import Link from 'next/link'
import Button3 from '@/components/ui/Button3'
import VideoCard from '@/components/ui/VideoCard'

export const metadata: Metadata = {
    title: 'About | DemandTech',
    description: 'Learn about DemandTech - our mission, values, and commitment to driving business growth through innovative technology solutions.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-transparent">
            {/* Hero Section with VideoCard */}
            <div>
                <div
                    className="text-[#000000] text-4xl sm:text-5xl md:text-8xl lg:text-[120px] transition-opacity duration-500"
                    style={{
                        fontFamily: 'Clash Display, sans-serif',
                        textAlign: 'center',
                        zIndex: '1000',
                        overflow: 'overlay',
                        position: 'absolute',
                        marginTop: '300px',
                        left: '15%',
                        transform: 'translateX(-25%)',
                    }}
                    id="know-text"
                >
                    Know
                </div>
                <div
                    className="text-[#000000] text-4xl sm:text-5xl md:text-8xl lg:text-[120px] transition-opacity duration-500"
                    style={{
                        fontFamily: 'Clash Display, sans-serif',
                        textAlign: 'center',
                        zIndex: '1000',
                        overflow: 'overlay',
                        position: 'absolute',
                        marginTop: '300px',
                        right: '15%',
                        transform: 'translateX(25%)'
                    }}
                    id="more-text"
                >
                    More
                </div>
                <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-2 mt-[-100px] z-[-1]">
                    <VideoCard />
                </div>

            </div>
            {/*Description*/}

            {/* Navigation Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Add navigation sections here */}
            </div>
        </div>
    )
}