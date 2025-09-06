"use client";
import React, { useState, useEffect } from 'react';

const NPSScoreCard = () => {
    const [score, setScore] = useState(0);
    const [targetScore, setTargetScore] = useState(87);
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const totalReviews = 2847;
    const responseRate = 94;
    const trending = "+12%";

    // Initial loading overlay (once on mount)
    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(t);
    }, []);

    // Animate score toward targetScore whenever it changes
    useEffect(() => {
        const interval = setInterval(() => {
            setScore(prev => {
                if (prev === targetScore) {
                    clearInterval(interval);
                    return prev;
                }
                const delta = targetScore - prev;
                const step = Math.sign(delta) * Math.max(1, Math.round(Math.abs(delta) / 20));
                const next = prev + step;
                // Clamp to target to avoid overshoot
                if ((delta > 0 && next >= targetScore) || (delta < 0 && next <= targetScore)) {
                    clearInterval(interval);
                    return targetScore;
                }
                return next;
            });
        }, 30);
        return () => clearInterval(interval);
    }, [targetScore]);

    // Determine rating based on score
    const getRating = (score: number) => {
        if (score >= 70) return {
            text: "Excellent",
            color: "from-emerald-500 to-teal-600",
            bgColor: "from-emerald-50 to-teal-50",
            description: "Customers love your service and actively promote it"
        };
        if (score >= 50) return {
            text: "Good",
            color: "from-blue-500 to-indigo-600",
            bgColor: "from-blue-50 to-indigo-50",
            description: "Satisfied customers with room for improvement"
        };
        if (score >= 30) return {
            text: "Average",
            color: "from-amber-500 to-orange-600",
            bgColor: "from-amber-50 to-orange-50",
            description: "Mixed feedback requiring attention"
        };
        return {
            text: "Poor",
            color: "from-red-500 to-pink-600",
            bgColor: "from-red-50 to-pink-50",
            description: "Critical issues need immediate attention"
        };
    };

    const rating = getRating(score);
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="min-h-screen mt-10 bg-transparent py-8 px-4">
            <div className="max-w-7xl mx-auto">



                {/* Main Dashboard Card */}
                <div
                    className={`relative w-full rounded-3xl backdrop-blur-xl bg-transparent border border-white/60 transition-all duration-500 mb-8 ${isHovered ? 'border-blue-200' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(248, 250, 252, 0.9) 50%, 
              rgba(241, 245, 249, 0.95) 100%
            )`
                    }}
                >

                    {/* Subtle top border gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-t-3xl opacity-60"></div>

                    <div className="p-8 md:p-12">

                        {/* Stats Header */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Current Score</p>
                                <p className="text-2xl font-bold text-slate-800">{score}</p>
                            </div>

                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                    </svg>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Monthly Trend</p>
                                <p className="text-2xl font-bold text-black">{trending}</p>
                            </div>

                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0l-4-4H9a2 2 0 00-2 2v6a2 2 0 002 2h2l4-4z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Total Reviews</p>
                                <p className="text-2xl font-bold text-slate-800">{totalReviews.toLocaleString()}</p>
                            </div>

                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Response Rate</p>
                                <p className="text-2xl font-bold text-slate-800">{responseRate}%</p>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Column - Score Visualization */}
                            <div className="text-center lg:text-left">

                                {/* Circular Progress */}
                                <div className="relative mb-8 flex flex-col items-center lg:items-start gap-4">
                                    <div className="relative">
                                        <svg className="w-56 h-56 transform -rotate-90" viewBox="0 0 100 100">
                                            {/* Background circle */}
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="rgba(148, 163, 184, 0.2)"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            {/* Progress circle */}
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="url(#scoreGradient)"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeDasharray={strokeDasharray}
                                                strokeDashoffset={strokeDashoffset}
                                                className="transition-all duration-2000 ease-out"
                                            />
                                            <defs>
                                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#000CF8" />
                                                    <stop offset="50%" stopColor="#0084FF" />
                                                    <stop offset="100%" stopColor="#00D4FF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Center content */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent gap-1">
                                            <span className="text-6xl font-black mb-1 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #000CF8, #0084FF, #00D4FF)' }}>
                                                {score}
                                            </span>
                                            <span className="text-xs font-semibold uppercase tracking-wide text-[#000CF8]">
                                                NPS Score
                                            </span>
                                            <span className="text-[11px] text-slate-500">Target: {targetScore}</span>
                                        </div>
                                    </div>
                                    {/* Interactive controls */}
                                    <div className="w-full max-w-sm">
                                        <label className="block text-xs font-semibold text-[#000CF8] mb-2">Adjust Score</label>
                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                aria-label="Decrease score"
                                                onClick={() => setTargetScore(s => Math.max(0, s - 1))}
                                                className="px-3 py-1 rounded-md border text-[#000CF8] border-[#000CF8]/30 hover:bg-[#000CF8]/5"
                                            >
                                                −
                                            </button>
                                            <input
                                                type="range"
                                                min={0}
                                                max={100}
                                                value={targetScore}
                                                onChange={(e) => setTargetScore(parseInt(e.target.value))}
                                                className="flex-1 accent-[#000CF8]"
                                            />
                                            <button
                                                type="button"
                                                aria-label="Increase score"
                                                onClick={() => setTargetScore(s => Math.max(0, Math.min(100, s + 1)))}
                                                className="px-3 py-1 rounded-md border text-[#000CF8] border-[#000CF8]/30 hover:bg-[#000CF8]/5"
                                            >
                                                +
                                            </button>
                                            <span className="w-10 text-right text-sm font-medium text-[#000CF8]">{targetScore}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating Badge */}
                                <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r ${rating.bgColor} border border-white/60 mb-6`}>
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${rating.color}`}></div>
                                        <span className={`text-xl font-bold bg-gradient-to-r ${rating.color} bg-clip-text text-transparent`}>
                                            {rating.text}
                                        </span>
                                    </div>
                                </div>

                                {/* Progress Bar */}

                            </div>

                            {/* Right Column - Details */}
                            <div className="space-y-8">

                                <div>
                                    <h3 className="text-2xl font-normal text-[blue] mb-4">
                                        Customer Sentiment Analysis
                                    </h3>
                                    <p className="text-lg text-black font-[Neue Montreal] mb-4">
                                        {rating.description}
                                    </p>
                                    <p className="text-black leading-relaxed">
                                        Based on comprehensive feedback from <strong>{totalReviews.toLocaleString()} verified customers</strong>,
                                        your NPS score reflects strong customer loyalty and satisfaction. This score places you in the
                                        top tier of industry performance.
                                    </p>
                                </div>

                                {/* Key Insights */}
                                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Insights</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-slate-600"><strong>73%</strong> of customers are promoters who actively recommend your service</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-slate-600"><strong>Response rate increased {trending}</strong> compared to last month</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-slate-600"><strong>Customer retention</strong> improved by 8% this quarter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Decorative elements */}
                    <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-br from-blue-400 to-transparent rounded-full opacity-60"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-br from-cyan-400 to-transparent rounded-full opacity-40"></div>
                </div>



            </div>
        </div>
    );
};

export default NPSScoreCard;