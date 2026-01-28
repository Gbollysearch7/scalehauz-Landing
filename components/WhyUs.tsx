"use client";

import { Reveal } from "@/components/Reveal";

const differentiators = [
    {
        id: "01",
        title: "Data-Driven Approach",
        desc: "Every strategy backed by analytics and measurable KPIs. No guesswork—just precision targeting and proven results.",
        icon: "insights"
    },
    {
        id: "02",
        title: "Full-Stack Expertise",
        desc: "End-to-end marketing solutions under one roof. From strategy to execution, we handle it all seamlessly.",
        icon: "layers"
    },
    {
        id: "03",
        title: "AI-Powered Innovation",
        desc: "Leveraging cutting-edge technology for competitive advantage. Automation and intelligence at every touchpoint.",
        icon: "smart_toy"
    },
    {
        id: "04",
        title: "Dedicated Partnership",
        desc: "We become an extension of your team, not just a vendor. Your growth is our mission.",
        icon: "handshake"
    }
];

const whatMakesUsDifferent = [
    "Transparent reporting and communication",
    "Flexible engagement models",
    "Industry-specific expertise",
    "Proven track record of ROI delivery"
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
                        <Reveal>
                            <div>
                                <span className="font-mono text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 block text-white/40">03 — Differentiators</span>
                                <h2 className="text-5xl sm:text-6xl font-medium tracking-tighter leading-[0.9] mt-4 sm:mt-6 uppercase">Why<br />Us?</h2>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-8 sm:mt-12">
                                <p className="text-white/60 font-mono text-xs sm:text-sm leading-relaxed max-w-xs mb-4 sm:mb-6">
                                    What makes us different from other agencies:
                                </p>
                                <ul className="space-y-2 sm:space-y-3">
                                    {whatMakesUsDifferent.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white/50">
                                            <span className="material-symbols-outlined text-sm sm:text-base text-white/30 mt-0.5">check</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 sm:mt-8 flex items-center gap-2">
                                    <div className="h-px w-8 sm:w-12 bg-white"></div>
                                    <span className="text-[10px] sm:text-xs font-bold uppercase text-white/60">Results Defined</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {differentiators.map((item, index) => (
                            <Reveal key={item.id} delay={0.1 + (index * 0.08)}>
                                <div className="group cursor-default p-6 sm:p-8 border border-white/10 hover:border-white active:border-white hover:bg-white/5 active:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                                        <span className="material-symbols-outlined text-2xl sm:text-3xl text-white/20 group-hover:text-white/60 transition-colors">{item.icon}</span>
                                        <span className="font-mono text-xs text-white/30">{item.id}</span>
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4">{item.title}</h4>
                                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
