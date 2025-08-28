import { Metadata } from 'next'
import SmoothScroll from '@/components/ui/SmoothScroll'
import { GSAPTextReveal } from '@/components/ui/GSAPTextReveal'

export const metadata: Metadata = {
    title: 'Careers | DemandTech',
    description: 'Join the DemandTech team - Explore career opportunities and help shape the future of demand generation.',
}

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-transparent">
            <SmoothScroll />
            <div className='section-spacing'>
                <div className='max-w-6xl mx-auto px-6'>
                    <GSAPTextReveal
                        style={{
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(48px, 8vw, 72px)',
                            textAlign: 'center',
                            color: '#000000',
                            marginBottom: '60px'
                        }}
                        stagger={0.15}
                        duration={1.0}
                        yOffset={80}
                        start="top 75%"
                    >
                        Join Our Team
                    </GSAPTextReveal>
                    
                    <div className="mb-12">
                        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
                            At DemandTech, we're building the future of demand generation. Join our passionate team 
                            of innovators, strategists, and technologists who are transforming how businesses connect 
                            with their customers.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                                <p className="text-gray-700">
                                    Work with cutting-edge technologies and methodologies that are shaping 
                                    the future of marketing and demand generation.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
                                <p className="text-gray-700">
                                    Accelerate your career with continuous learning, mentorship programs, 
                                    and opportunities to lead high-impact projects.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
                                <p className="text-gray-700">
                                    Enjoy flexible working arrangements, comprehensive benefits, and a 
                                    culture that values your well-being and personal growth.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Senior Marketing Strategist</h3>
                                        <p className="text-gray-600">Full-time • Remote/Hybrid • Marketing</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">New</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Lead strategic marketing initiatives and develop comprehensive demand generation 
                                    campaigns for enterprise clients. 5+ years experience required.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                                        <p className="text-gray-600">Full-time • Remote • Engineering</p>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Featured</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Build and maintain scalable web applications using React, Node.js, and modern 
                                    cloud technologies. Join our growing engineering team.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Data Analyst</h3>
                                        <p className="text-gray-600">Full-time • On-site • Analytics</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Analyze marketing performance data and provide actionable insights to optimize 
                                    demand generation strategies. Experience with SQL and Python preferred.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
                        <p className="text-gray-700 mb-6">
                            We're always looking for talented individuals to join our team. Send us your resume 
                            and let us know how you'd like to contribute to DemandTech's mission.
                        </p>
                        <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                            Send General Application
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}
