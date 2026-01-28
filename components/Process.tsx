"use client";

import { Reveal } from "@/components/Reveal";

const phases = [
    {
        id: "01",
        title: "Discovery",
        icon: "search",
        steps: [
            "Understand your business goals and challenges",
            "Audit current marketing efforts",
            "Analyze competitors and market landscape",
            "Identify target audience and personas"
        ]
    },
    {
        id: "02",
        title: "Strategy",
        icon: "architecture",
        steps: [
            "Develop customized marketing roadmap",
            "Define KPIs and success metrics",
            "Create content and campaign calendars",
            "Align budget and resource allocation"
        ]
    },
    {
        id: "03",
        title: "Execution",
        icon: "rocket_launch",
        steps: [
            "Launch campaigns across selected channels",
            "Create and optimize content assets",
            "Implement tracking and analytics",
            "Manage day-to-day marketing operations"
        ]
    },
    {
        id: "04",
        title: "Optimization",
        icon: "trending_up",
        steps: [
            "Monitor performance in real-time",
            "A/B test and iterate on campaigns",
            "Report insights and learnings",
            "Scale what works, pivot what doesn't"
        ]
    }
];

export const Process = () => {
    return (
        <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-20 border-b border-black/10 pb-8 sm:pb-12">
                        <span className="font-mono text-xs text-black/40 uppercase tracking-widest">04 — Process</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter uppercase">How We<br />Work</h2>
                        <p className="text-black/50 font-mono text-xs sm:text-sm max-w-xl mt-2 sm:mt-4">
                            A proven methodology refined over hundreds of successful campaigns.
                        </p>
                    </div>
                </Reveal>

                {/* Mobile: 1 column with horizontal scroll hint, Tablet: 2 columns, Desktop: 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
                    {phases.map((phase, index) => (
                        <Reveal key={phase.id} delay={0.1 + (index * 0.08)}>
                            <div className="group relative p-6 sm:p-8 border border-black/10 hover:border-black active:border-black hover:bg-black active:bg-black hover:text-white active:text-white transition-all duration-300 min-h-[320px] sm:min-h-[400px] flex flex-col">
                                {/* Connector line - desktop only */}
                                {index < phases.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-black/20 z-10"></div>
                                )}

                                <div className="flex items-start justify-between mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-black/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined text-xl sm:text-2xl text-black/40 group-hover:text-white/80 transition-colors">{phase.icon}</span>
                                    </div>
                                    <span className="font-mono text-xs text-black/30 group-hover:text-white/50 transition-colors">{phase.id}</span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4 sm:mb-6">{phase.title}</h3>

                                <ul className="space-y-2 sm:space-y-3 flex-1">
                                    {phase.steps.map((step, i) => (
                                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-black/60 group-hover:text-white/70 transition-colors">
                                            <span className="material-symbols-outlined text-xs sm:text-sm mt-0.5 text-black/30 group-hover:text-white/50 transition-colors shrink-0">arrow_right</span>
                                            <span className="font-mono leading-relaxed">{step}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Phase number large - smaller on mobile */}
                                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-6xl sm:text-8xl font-bold text-black/5 group-hover:text-white/10 transition-colors pointer-events-none">
                                    {phase.id}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Flow indicator - simplified for mobile */}
                <Reveal delay={0.5}>
                    <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-black/40">
                        <span className="font-mono text-[10px] sm:text-xs uppercase">Discovery</span>
                        <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                        <span className="font-mono text-[10px] sm:text-xs uppercase">Strategy</span>
                        <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                        <span className="font-mono text-[10px] sm:text-xs uppercase">Execution</span>
                        <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                        <span className="font-mono text-[10px] sm:text-xs uppercase">Optimization</span>
                        <span className="material-symbols-outlined text-xs sm:text-sm">replay</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
