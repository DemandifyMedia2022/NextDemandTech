"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button3 from '@/components/ui/Button3';

const CaseStudiesPage = () => {
    const [activeIndustry, setActiveIndustry] = useState('Technology');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const industries = [
        'Technology',
        'Manufacturing',
        'Healthcare',
        'E-commerce',
        'Finance',
        'Education'
    ];

    const caseStudies = {
        Technology: [
            {
                id: 1,
                title: "AI Startup Accelerates Growth",
                description: "A machine learning startup achieved 400% lead growth through targeted demand generation campaigns and strategic content marketing.",
                results: ["400% Lead Growth", "60% Lower CAC", "8 Months ROI"],
                imageSlot: true
            },
            {
                id: 2,
                title: "SaaS Platform Scales Globally",
                description: "International expansion strategy that resulted in 250% revenue increase across 15 new markets within 12 months.",
                results: ["250% Revenue Growth", "15 New Markets", "12 Months Timeline"],
                imageSlot: true
            },
            {
                id: 3,
                title: "Cloud Infrastructure Success",
                description: "Enterprise cloud solutions company transformed their lead qualification process, improving conversion rates by 180%.",
                results: ["180% Conversion Rate", "35% Cost Reduction", "5x Pipeline Growth"],
                imageSlot: true
            },
            {
                id: 4,
                title: "Fintech Platform Launch",
                description: "New fintech solution achieved market penetration through strategic partnerships and digital-first approach.",
                results: ["50K Users in 6 Months", "300% User Growth", "15 Partnerships"],
                imageSlot: true
            },
            {
                id: 5,
                title: "Cybersecurity Scale-Up",
                description: "B2B cybersecurity firm expanded their enterprise client base by 320% using account-based marketing strategies.",
                results: ["320% Client Growth", "45% Higher Deal Size", "90% Retention Rate"],
                imageSlot: true
            },
            {
                id: 6,
                title: "Mobile App Monetization",
                description: "Consumer mobile app optimized their user acquisition funnel, resulting in 500% increase in premium subscriptions.",
                results: ["500% Subscription Growth", "40% Lower CPA", "2.5x LTV"],
                imageSlot: true
            }
        ],
        Manufacturing: [
            {
                id: 7,
                title: "Smart Factory Transformation",
                description: "Traditional manufacturer embraced Industry 4.0 technologies, achieving $3M additional revenue through operational efficiency.",
                results: ["$3M Revenue Increase", "45% Efficiency Gain", "18 Months Payback"],
                imageSlot: true
            },
            {
                id: 8,
                title: "Supply Chain Optimization",
                description: "Global manufacturer reduced costs by 30% while improving delivery times through digital supply chain transformation.",
                results: ["30% Cost Reduction", "50% Faster Delivery", "99% On-time Rate"],
                imageSlot: true
            },
            {
                id: 9,
                title: "Sustainable Production Model",
                description: "Chemical manufacturer implemented green production processes, reducing waste by 60% and opening new market opportunities.",
                results: ["60% Waste Reduction", "25% New Markets", "$2M Savings"],
                imageSlot: true
            },
            {
                id: 10,
                title: "Equipment Digital Integration",
                description: "Heavy equipment manufacturer launched IoT-enabled products, creating new recurring revenue streams worth $5M annually.",
                results: ["$5M Recurring Revenue", "40% Service Growth", "200% Data Insights"],
                imageSlot: true
            },
            {
                id: 11,
                title: "Automotive Parts Innovation",
                description: "Auto parts supplier developed new lightweight materials, securing $10M in contracts with major automotive brands.",
                results: ["$10M New Contracts", "3 Major Clients", "50% Weight Reduction"],
                imageSlot: true
            },
            {
                id: 12,
                title: "Food Processing Excellence",
                description: "Food manufacturer improved quality control systems, reducing defects by 85% and expanding to premium markets.",
                results: ["85% Defect Reduction", "Premium Market Entry", "40% Margin Increase"],
                imageSlot: true
            }
        ],
        Healthcare: [
            {
                id: 13,
                title: "Telemedicine Platform Growth",
                description: "Digital health platform scaled to serve 100K+ patients through strategic partnerships with healthcare providers.",
                results: ["100K+ Patients", "250 Provider Partners", "95% Satisfaction"],
                imageSlot: true
            },
            {
                id: 14,
                title: "Medical Device Innovation",
                description: "Startup medical device company achieved FDA approval and $15M in first-year sales through targeted market strategy.",
                results: ["FDA Approval", "$15M First Year", "50 Hospitals Adopted"],
                imageSlot: true
            },
            {
                id: 15,
                title: "Pharmaceutical Research Acceleration",
                description: "Biotech firm reduced drug discovery timeline by 40% using AI-powered research methodologies and strategic collaborations.",
                results: ["40% Faster Discovery", "5 Pipeline Drugs", "$50M Funding"],
                imageSlot: true
            },
            {
                id: 16,
                title: "Mental Health App Success",
                description: "Digital mental health solution grew to 500K users through evidence-based content and therapist partnerships.",
                results: ["500K Active Users", "1000+ Therapists", "4.8 App Rating"],
                imageSlot: true
            },
            {
                id: 17,
                title: "Hospital Efficiency Program",
                description: "Healthcare system improved patient outcomes by 35% while reducing operational costs through process optimization.",
                results: ["35% Better Outcomes", "20% Cost Reduction", "90% Staff Satisfaction"],
                imageSlot: true
            },
            {
                id: 18,
                title: "Diagnostic Lab Expansion",
                description: "Regional lab network expanded to 10 new locations, processing 50% more tests with same staffing levels.",
                results: ["10 New Locations", "50% More Tests", "Same Staff Size"],
                imageSlot: true
            }
        ],
        'E-commerce': [
            {
                id: 19,
                title: "Fashion Brand Digital Transformation",
                description: "Traditional clothing brand pivoted to D2C model, achieving 300% online revenue growth within 18 months.",
                results: ["300% Online Growth", "D2C Transition", "18 Month Timeline"],
                imageSlot: true
            },
            {
                id: 20,
                title: "Marketplace Optimization",
                description: "Multi-vendor marketplace improved seller onboarding by 250% and customer satisfaction by 40% through UX redesign.",
                results: ["250% Seller Growth", "40% Higher Satisfaction", "50% Less Churn"],
                imageSlot: true
            },
            {
                id: 21,
                title: "B2B Commerce Platform",
                description: "Industrial supply company launched B2B e-commerce platform, digitizing 80% of transactions and reducing costs by 25%.",
                results: ["80% Digital Transactions", "25% Cost Reduction", "$20M Online Revenue"],
                imageSlot: true
            },
            {
                id: 22,
                title: "Subscription Box Success",
                description: "Niche subscription service grew from 1K to 50K subscribers through personalization and retention strategies.",
                results: ["50x Subscriber Growth", "85% Retention Rate", "$5M ARR"],
                imageSlot: true
            },
            {
                id: 23,
                title: "Cross-border Expansion",
                description: "E-commerce retailer successfully entered 8 international markets, achieving $12M in international sales.",
                results: ["8 New Countries", "$12M International", "60% Repeat Customers"],
                imageSlot: true
            },
            {
                id: 24,
                title: "Mobile Commerce Revolution",
                description: "Retail chain transformed mobile experience, with mobile sales growing from 20% to 70% of total revenue.",
                results: ["70% Mobile Revenue", "3.5x Conversion Rate", "45% App Adoption"],
                imageSlot: true
            }
        ],
        Finance: [
            {
                id: 25,
                title: "Digital Banking Launch",
                description: "New digital bank acquired 250K customers in first year through innovative products and seamless user experience.",
                results: ["250K Customers", "12 Months Launch", "4.9 User Rating"],
                imageSlot: true
            },
            {
                id: 26,
                title: "Investment Platform Growth",
                description: "Robo-advisor platform managed $500M in assets through automated portfolio management and financial education.",
                results: ["$500M Assets", "100K Investors", "12% Average Return"],
                imageSlot: true
            },
            {
                id: 27,
                title: "SMB Lending Innovation",
                description: "Fintech lender streamlined small business loans, reducing approval time from weeks to hours while maintaining low default rates.",
                results: ["2-Hour Approvals", "3% Default Rate", "$100M Loans"],
                imageSlot: true
            },
            {
                id: 28,
                title: "Cryptocurrency Exchange",
                description: "Digital asset exchange handled $2B in trading volume through robust security and institutional-grade infrastructure.",
                results: ["$2B Trading Volume", "Zero Hacks", "50K Daily Users"],
                imageSlot: true
            },
            {
                id: 29,
                title: "Insurance Tech Disruption",
                description: "Insurtech startup reduced claim processing time by 80% using AI and achieved 95% customer satisfaction.",
                results: ["80% Faster Claims", "95% Satisfaction", "40% Cost Savings"],
                imageSlot: true
            },
            {
                id: 30,
                title: "Payment Processing Scale",
                description: "Payment processor expanded to handle $10B annual volume with 99.99% uptime and sub-second transaction speeds.",
                results: ["$10B Annual Volume", "99.99% Uptime", "Sub-second Speed"],
                imageSlot: true
            }
        ],
        Education: [
            {
                id: 31,
                title: "Online Learning Platform",
                description: "EdTech platform grew to 2M students through adaptive learning technology and partnerships with educational institutions.",
                results: ["2M Students", "500 Institutions", "90% Course Completion"],
                imageSlot: true
            },
            {
                id: 32,
                title: "Corporate Training Solution",
                description: "B2B training platform helped 10K+ employees upskill, resulting in 40% productivity increase across client companies.",
                results: ["10K+ Employees", "40% Productivity Gain", "200 Enterprise Clients"],
                imageSlot: true
            },
            {
                id: 33,
                title: "Language Learning Success",
                description: "AI-powered language app achieved 5M downloads and 80% user retention through personalized learning paths.",
                results: ["5M Downloads", "80% Retention", "15 Languages"],
                imageSlot: true
            },
            {
                id: 34,
                title: "Virtual Classroom Innovation",
                description: "Remote learning solution supported 500+ schools during digital transition, maintaining 95% student engagement.",
                results: ["500+ Schools", "95% Engagement", "Zero Downtime"],
                imageSlot: true
            },
            {
                id: 35,
                title: "Skills Assessment Platform",
                description: "HR tech solution evaluated 1M+ candidates, reducing hiring time by 60% while improving quality of hires by 45%.",
                results: ["1M+ Assessments", "60% Faster Hiring", "45% Better Hires"],
                imageSlot: true
            },
            {
                id: 36,
                title: "STEM Education Program",
                description: "Educational nonprofit reached 100K students in underserved communities, with 85% showing improved STEM performance.",
                results: ["100K Students", "85% Improvement", "500 Communities"],
                imageSlot: true
            }
        ]
    };

    const handleGetIt = (caseStudyId: number) => {
        // In a real application, this would navigate to a form page
        console.log(`Redirecting to form for case study ${caseStudyId}`);
        // window.location.href = `/form?caseStudy=${caseStudyId}`;
    };

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
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
                        Success Stories <span style={{ color: '#000000' }}>Across Industries</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover how businesses across different sectors have achieved remarkable growth with our proven strategies.
                    </p>
                </div>
            </motion.div>

            {/* Industry Navigation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="top-0 z-10 bg-transparent backdrop-blur"
            >
                <div className="max-w-full align-center items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-4 overflow-x-auto py-4 align-center items-center justify-center">
                        {industries.map((industry) => (
                            <div key={industry} className="shrink-0">
                                <Button3
                                    text={industry}
                                    className={`${activeIndustry === industry ? '' : ''}`}
                                    onClick={() => setActiveIndustry(industry)}
                                />
                            </div>
                        ))}
                    </nav>
                </div>
            </motion.div>

            {/* Case Studies Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndustry}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {caseStudies[activeIndustry as keyof typeof caseStudies]?.map((caseStudy: any) => (
                            <motion.div
                                key={caseStudy.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                    <div className="text-white text-center z-10">
                                        <div className="text-sm font-medium opacity-90">Case Study</div>
                                        <div className="text-2xl font-bold mt-1">{activeIndustry}</div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3
                                        className="mb-3"
                                        style={{
                                            fontFamily: 'Clash Display, sans-serif',
                                            fontSize: 'clamp(20px, 2.2vw, 28px)',
                                            color: '#000000',
                                        }}
                                    >
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {caseStudy.description}
                                    </p>

                                    {/* Results */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                                        <div className="space-y-1">
                                            {caseStudy.results.map((result: any, index: any) => (
                                                <div key={index} className="text-sm text-blue-600 font-medium">
                                                    • {result}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Get It Button */}
                                    <div className="mt-6">
                                        <Button3 text="Get It" onClick={() => handleGetIt(caseStudy.id)} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
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
                        Ready to Create Your Success Story?
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg">
                        Join hundreds of companies that have transformed their growth with our proven strategies.
                    </p>
                    <Button3 text="Start Your Transformation" href="/contact" />
                </div>
            </motion.div>
        </div>
    );
};

export default CaseStudiesPage;