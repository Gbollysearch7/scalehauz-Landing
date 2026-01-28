"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";

const services = [
    {
        id: "001",
        icon: "search",
        title: "Search Engine\nOptimization",
        desc: "Technical audits. On-page & off-page. Local & E-commerce SEO.",
        details: [
            "Technical SEO audits",
            "On-page optimization",
            "Off-page link building",
            "Local SEO",
            "E-commerce SEO",
            "SEO content strategy"
        ]
    },
    {
        id: "002",
        icon: "palette",
        title: "Graphic\nDesign",
        desc: "Brand identity. Marketing collateral. Digital creatives.",
        details: [
            "Brand identity design",
            "Marketing collateral",
            "Social media graphics",
            "Digital advertising creatives",
            "Packaging design",
            "Website UI/UX design"
        ]
    },
    {
        id: "003",
        icon: "share",
        title: "Social Media\nMarketing",
        desc: "Platform strategy. Content creation. Community growth.",
        details: [
            "Platform strategy",
            "Content creation & scheduling",
            "Community management",
            "Influencer partnerships",
            "Social media advertising",
            "Analytics & reporting"
        ]
    },
    {
        id: "004",
        icon: "mail",
        title: "Email\nMarketing",
        desc: "Automation flows. Newsletter design. Drip campaigns.",
        details: [
            "Email strategy & automation",
            "Newsletter design & copywriting",
            "Drip campaigns & sequences",
            "List segmentation",
            "A/B testing",
            "Deliverability optimization"
        ]
    },
    {
        id: "005",
        icon: "ads_click",
        title: "Paid\nAdvertising",
        desc: "Google Ads. Meta Ads. Programmatic & retargeting.",
        details: [
            "Google Ads (Search, Display, Shopping)",
            "Meta Ads (Facebook & Instagram)",
            "LinkedIn & TikTok Ads",
            "Programmatic advertising",
            "Retargeting campaigns",
            "YouTube Ads"
        ]
    },
    {
        id: "006",
        icon: "strategy",
        title: "Marketing\nStrategy",
        desc: "Go-to-market. Brand positioning. Growth roadmaps.",
        details: [
            "Go-to-market strategy",
            "Brand positioning",
            "Competitive analysis",
            "Customer journey mapping",
            "Marketing audits",
            "Growth roadmaps"
        ]
    },
    {
        id: "007",
        icon: "smart_toy",
        title: "AI &\nAutomation",
        desc: "Marketing automation. Predictive analytics. Chatbots.",
        details: [
            "Marketing automation setup",
            "AI-powered content generation",
            "Predictive analytics",
            "Chatbot implementation",
            "Personalization engines",
            "Automated reporting dashboards"
        ]
    }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Reveal delay={0.05 + (index * 0.03)}>
            <div
                className={`brutalist-card p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group border border-white/10 hover:border-white active:border-white transition-all duration-300 cursor-pointer ${isExpanded ? 'bg-white/5' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-white/30 transition-colors group-hover:text-white/60">{service.id}</span>
                    <span className="material-symbols-outlined text-2xl sm:text-3xl font-light group-hover:rotate-12 transition-transform duration-500">{service.icon}</span>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 uppercase tracking-tight whitespace-pre-line leading-tight">{service.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm font-mono leading-relaxed border-l border-white/20 pl-3 group-hover:border-white group-hover:text-white/80 transition-colors">
                        {service.desc}
                    </p>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-56 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-1.5 sm:space-y-1">
                            {service.details.map((detail, i) => (
                                <li key={i} className="text-xs text-white/60 font-mono flex items-start gap-2">
                                    <span className="w-1 h-1 bg-white/40 rounded-full mt-1.5 shrink-0"></span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white/30 group-hover:text-white/60 transition-colors">
                    <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
            </div>
        </Reveal>
    );
};

export const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-20 border-b border-white/10 pb-8 sm:pb-12">
                        <span className="font-mono text-xs text-white/40 uppercase tracking-widest">01 — Services</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter text-white uppercase">What We<br />Do</h2>
                        <p className="text-white/50 font-mono text-xs sm:text-sm max-w-xl mt-2 sm:mt-4">
                            Full-stack marketing solutions engineered for scale. Tap any service to explore capabilities.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
