"use client";

import { Reveal } from "@/components/Reveal";

const metrics = [
    { label: "Average ROI", value: "4.5x", desc: "Return on ad spend" },
    { label: "Traffic Growth", value: "150%+", desc: "Organic traffic increase" },
    { label: "Lead Generation", value: "3x", desc: "More qualified leads" },
    { label: "Conversion Rate", value: "40%", desc: "Improvement average" }
];

const caseStudies = [
    {
        id: "01",
        industry: "E-commerce",
        title: "D2C Fashion Brand",
        results: [
            { metric: "300%", label: "increase in online sales" },
            { metric: "45%", label: "reduced cost per acquisition" }
        ],
        timeframe: "6 months"
    },
    {
        id: "02",
        industry: "SaaS",
        title: "B2B Software Startup",
        results: [
            { metric: "10,000", label: "monthly active users" },
            { metric: "#1", label: "rankings for 50+ keywords" }
        ],
        timeframe: "8 months"
    },
    {
        id: "03",
        industry: "Professional Services",
        title: "Legal Consulting Firm",
        results: [
            { metric: "200+", label: "qualified leads per month" },
            { metric: "5x", label: "social media engagement" }
        ],
        timeframe: "4 months"
    },
    {
        id: "04",
        industry: "Fintech",
        title: "Prop Firm",
        results: [
            { metric: "180%", label: "increase in bookings" },
            { metric: "50,000+", label: "community followers" }
        ],
        timeframe: "12 months"
    }
];

export const CaseStudies = () => {
    return (
        <section id="results" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-20 border-b border-white/10 pb-8 sm:pb-12">
                        <span className="font-mono text-xs text-white/40 uppercase tracking-widest">05 — Results</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter text-white uppercase">Proven<br />Impact</h2>
                        <p className="text-white/50 font-mono text-xs sm:text-sm max-w-xl mt-2 sm:mt-4">
                            Real numbers from real clients. We measure success by your growth.
                        </p>
                    </div>
                </Reveal>

                {/* Key Metrics - 2x2 grid on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 mb-12 sm:mb-20">
                    {metrics.map((metric, index) => (
                        <Reveal key={index} delay={0.05 + (index * 0.05)}>
                            <div className="p-4 sm:p-6 md:p-8 border-r border-b border-white/10 last:border-r-0 md:[&:nth-child(4)]:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 md:[&:nth-child(3)]:border-b md:[&:nth-child(4)]:border-b group hover:bg-white/5 active:bg-white/5 transition-colors">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase block mb-2 sm:mb-4">{metric.label}</span>
                                <span className="text-2xl sm:text-4xl md:text-5xl font-bold block mb-1 sm:mb-2">{metric.value}</span>
                                <span className="text-xs sm:text-sm text-white/50 hidden sm:block">{metric.desc}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Case Studies */}
                <Reveal delay={0.2}>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-6 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4">Client Success Stories</h3>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {caseStudies.map((study, index) => (
                        <Reveal key={study.id} delay={0.25 + (index * 0.08)}>
                            <div className="group p-5 sm:p-8 border border-white/10 hover:border-white active:border-white transition-all duration-300 hover:bg-white/5 active:bg-white/5">
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div>
                                        <span className="inline-block px-2 sm:px-3 py-1 bg-white/10 text-[10px] sm:text-xs font-mono uppercase mb-2 sm:mb-3">{study.industry}</span>
                                        <h4 className="text-lg sm:text-xl font-bold uppercase">{study.title}</h4>
                                    </div>
                                    <span className="font-mono text-xs text-white/30">{study.id}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="border-l border-white/20 pl-3 sm:pl-4 group-hover:border-white/40 transition-colors">
                                            <span className="text-xl sm:text-2xl font-bold block text-white">{result.metric}</span>
                                            <span className="text-[10px] sm:text-xs text-white/50 font-mono leading-tight">{result.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-white/40 font-mono">
                                    <span className="material-symbols-outlined text-xs sm:text-sm">schedule</span>
                                    <span>{study.timeframe}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.6}>
                    <div className="mt-10 sm:mt-16 text-center">
                        <a href="#contact" className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-5 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-200 transition-all rounded-full group w-full sm:w-auto">
                            Start Your Growth Story
                            <span className="material-symbols-outlined text-base sm:text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
