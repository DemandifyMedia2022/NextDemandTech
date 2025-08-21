import { Metadata } from 'next'
import Button3 from '@/components/ui/Button3'

import Card2 from '@/components/ui/Card2'

export const metadata: Metadata = {
    title: 'Demand Generation | DemandTech',
    description:
        'Drive qualified leads and accelerate your sales pipeline with our proven demand generation strategies.',
}

export default function DemandGenerationPage() {
    return (
        <div className="min-h-screen bg-[#F6F7FB]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

                {/* Heading */}
                <h1
                    className="text-[#574BEF]"
                    style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '52px', lineHeight: '1.2' }}
                >
                    Demand Generation
                </h1>

                {/* Subheading */}
                <h2
                    className="mt-4 text-black"
                    style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '44px', lineHeight: '1.3' }}
                >
                    That Turns Interest into Revenue
                </h2>

                {/* Description */}
                <p
                    className="mt-6 text-gray-600 leading-relaxed mx-auto"
                    style={{ fontFamily: 'Neue Montreal, sans-serif', fontSize: '17px', maxWidth: '900px' }}
                >
                    Demand generation is the art and science of creating awareness, building interest,
                    and converting potential buyers into qualified leads. It’s not just about generating
                    traffic—it’s about connecting with the right audience, nurturing them through every
                    stage of the buyer’s journey, and turning curiosity into measurable business growth.
                </p>

                <p
                    className="mt-4 text-gray-600 leading-relaxed mx-auto"
                    style={{ fontFamily: 'Neue Montreal, sans-serif', fontSize: '17px', maxWidth: '900px' }}
                >
                    At Demand Tech, our demand generation services are built to deliver exactly that.
                    We combine data-driven targeting, industry expertise, and multi-channel strategies
                    to ensure your brand reaches, engages, and converts high-intent prospects.
                </p>

                {/* Button */}
                <div className="mt-10 flex justify-center">
                    <Button3 text="Get Pricing" href="/pricing" />
                </div>

                {/* Section Title */}
                <div className="mt-20 flex justify-center items-center gap-3">
                    <span
                        className="text-black"
                        style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '55px' }}
                    >
                        Areas of
                    </span>
                    <span
                        className="text-[#2717E8]"
                        style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '55px' }}
                    >
                        Focus
                    </span>
                </div>
                {/* Areas Of Success Content */}
                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        {/* Left Side - Text */}
                        <div className="text-left">
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Brand Awareness
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTeq enhances your brand visibility through multi-channel
                                campaigns that ensure your business stays top-of-mind, strengthens
                                credibility, and builds lasting market presence.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>

                        {/* Right Side - Image (Card2) */}
                        <div className="flex justify-center">
                            <Card2
                                imageSrc="/image2.jpeg"
                                alt="Brand Awareness"

                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div className="flex">
                            <Card2
                                imageSrc="/IQL.png"
                                alt="Intent Qualified Leads"

                            />
                        </div>{/* Left Side - Text */}
                        <div>
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Abhaya Libre',
                                    fontSize: '30px',
                                }}
                            >
                                Intent Qualified Leads
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTech delivers high-quality leads backed by verified intent data,
                                connecting you directly with prospects who are actively researching
                                solutions and have a high likelihood of conversion.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        {/* Left Side - Text */}
                        <div className="text-left">
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Webinar
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTech educates and engages your target audience through professional,
                                interactive, and value-driven sessions that position your brand as a thought
                                leader,generate quality leads, and foster meaningful business relationships.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>

                        {/* Right Side - Image (Card2) */}
                        <div className="flex justify-center">
                            <Card2
                                imageSrc="/Webinar.png"
                                alt="Webinar"

                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div className="flex">
                            <Card2
                                imageSrc="/MTCS.PNG"
                                alt="MTCS"

                            />
                        </div>{/* Left Side - Text */}
                        <div>
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Multi Touch Content Syndication
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTech’s Multi-Touch Content Syndication focuses on long-term relationship building
                                and lead nurturing. Instead of a one-time push, we distribute your content through multiple,
                                strategically timed touchpoints—keeping your brand consistently in front of high-intent prospects.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        {/* Left Side - Text */}
                        <div className="text-left">
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Single Touch Content Syndication
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTech’s Single-Touch Content Syndication is designed for businesses that need fast,
                                precise, and measurable results. By leveraging our intent data and industry-specific targeting,
                                we distribute your content—whether it’s a whitepaper,case study, or eBook—directly to decision-makers
                                in one powerful, strategic outreach.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>

                        {/* Right Side - Image (Card2) */}
                        <div className="flex justify-center">
                            <Card2
                                imageSrc="/STCS.png"
                                alt="STCS"

                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div className="flex">
                            <Card2
                                imageSrc="/callbackconsent.png"
                                alt="callbackconsent"

                            />
                        </div>{/* Left Side - Text */}
                        <div>
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Callback Consent
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTech provides direct, permission-based opportunities to connect with
                                decision-makers,ensuring conversations start with warm prospects who
                                are open to discussing your solutions.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F7FB] py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        {/* Left Side - Text */}
                        <div className="text-left">
                            <h2
                                className="text-black mb-4"
                                style={{
                                    fontFamily: 'Clash Display, sans-serif',
                                    fontSize: '30px',
                                }}
                            >
                                Lead Nurture Program
                            </h2>

                            <p
                                className="text-gray-600 leading-relaxed mb-6 max-w-md"
                                style={{
                                    fontFamily: 'Neue Montreal, sans-serif',
                                    fontSize: '17px',
                                }}
                            >
                                DemandTeq provides direct, permission-based opportunities to connect
                                with decision-makers,ensuring conversations start with warm prospects
                                who are open to discussing your solutions.
                            </p>

                            <div className="mt-6">
                                <Button3 text="Read More" href="/" />
                            </div>
                        </div>

                        {/* Right Side - Image (Card2) */}
                        <div className="flex justify-center">
                            <Card2
                                imageSrc="/LNP.png"
                                alt="Lead Nurture Program"

                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
