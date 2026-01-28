"use client";

import { Reveal } from "@/components/Reveal";

const differentiators = [
    {
        id: "01",
        title: "Data-Driven Results",
        desc: "Every decision we make is backed by data. We track, measure, and optimize to ensure your marketing budget delivers maximum ROI.",
        icon: "insights"
    },
    {
        id: "02",
        title: "Full-Service Team",
        desc: "No more juggling multiple agencies. Our in-house experts handle everything from strategy and design to ads and automation.",
        icon: "groups"
    },
    {
        id: "03",
        title: "Modern Technology",
        desc: "We leverage the latest AI tools and marketing technology to give you a competitive edge and scale your efforts efficiently.",
        icon: "memory"
    },
    {
        id: "04",
        title: "True Partnership",
        desc: "We're not just a vendor—we're an extension of your team. Your success is our success, and we're invested in your growth.",
        icon: "handshake"
    }
];

const benefits = [
    "Transparent reporting & communication",
    "Flexible month-to-month contracts",
    "Industry-specific expertise",
    "Dedicated account manager"
];

export const WhyUsPro = () => {
    return (
        <section id="why-us" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-3 sm:mb-4 block">Why Choose Us</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6">Why ScaleHauz?</h2>
                        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto px-2">
                            We're not your typical agency. Here's what makes working with us different.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
                    {differentiators.map((item, index) => (
                        <Reveal key={item.id} delay={0.1 + (index * 0.1)}>
                            <div className="group p-5 sm:p-8 border border-white/10 hover:border-white/30 active:border-white/30 bg-white/5 hover:bg-white/10 active:bg-white/10 transition-all duration-300 rounded-lg">
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-xl sm:text-2xl text-white/80">{item.icon}</span>
                                    </span>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h4>
                                        <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.5}>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
                            <div className="text-center md:text-left w-full md:w-auto">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">What You Can Expect</h3>
                                <p className="text-white/50 text-sm sm:text-base">When you work with ScaleHauz, you get:</p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full md:w-auto">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                                        <span className="material-symbols-outlined text-base sm:text-lg text-green-400">check_circle</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
