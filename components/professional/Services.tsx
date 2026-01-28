"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";

const services = [
    {
        id: "01",
        icon: "search",
        title: "SEO",
        subtitle: "Search Engine Optimization",
        desc: "Get found online. We optimize your website to rank higher on Google and drive organic traffic.",
        details: [
            "Technical SEO audits",
            "On-page optimization",
            "Link building",
            "Local SEO",
            "E-commerce SEO",
            "Content strategy"
        ]
    },
    {
        id: "02",
        icon: "palette",
        title: "Design",
        subtitle: "Graphic & Brand Design",
        desc: "Stand out visually. From logos to marketing materials, we create designs that capture attention.",
        details: [
            "Brand identity design",
            "Marketing collateral",
            "Social media graphics",
            "Ad creatives",
            "Packaging design",
            "UI/UX design"
        ]
    },
    {
        id: "03",
        icon: "share",
        title: "Social Media",
        subtitle: "Social Media Marketing",
        desc: "Build your community. We manage and grow your presence across all major platforms.",
        details: [
            "Platform strategy",
            "Content creation",
            "Community management",
            "Influencer partnerships",
            "Paid social ads",
            "Analytics & reporting"
        ]
    },
    {
        id: "04",
        icon: "mail",
        title: "Email",
        subtitle: "Email Marketing",
        desc: "Nurture your leads. We create email campaigns that convert subscribers into customers.",
        details: [
            "Email automation",
            "Newsletter design",
            "Drip campaigns",
            "List segmentation",
            "A/B testing",
            "Deliverability optimization"
        ]
    },
    {
        id: "05",
        icon: "ads_click",
        title: "Paid Ads",
        subtitle: "Advertising & PPC",
        desc: "Accelerate growth. We run profitable ad campaigns across Google, Meta, and more.",
        details: [
            "Google Ads",
            "Facebook & Instagram Ads",
            "LinkedIn Ads",
            "TikTok Ads",
            "Retargeting",
            "YouTube Ads"
        ]
    },
    {
        id: "06",
        icon: "trending_up",
        title: "Strategy",
        subtitle: "Marketing Strategy",
        desc: "Plan for success. We develop comprehensive strategies aligned with your business goals.",
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
        id: "07",
        icon: "smart_toy",
        title: "AI & Automation",
        subtitle: "Marketing Automation",
        desc: "Work smarter. We implement AI tools and automation to scale your marketing efforts.",
        details: [
            "Marketing automation",
            "AI content tools",
            "Predictive analytics",
            "Chatbots",
            "Personalization",
            "Automated reporting"
        ]
    }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Reveal delay={0.05 + (index * 0.03)}>
            <div
                className={`p-5 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group border border-white/10 hover:border-white/30 active:border-white/30 bg-white/5 hover:bg-white/10 active:bg-white/10 transition-all duration-300 cursor-pointer rounded-lg ${isExpanded ? 'bg-white/10' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex justify-between items-start">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg sm:text-xl text-white/80">{service.icon}</span>
                    </span>
                    <span className="text-xs text-white/30 font-mono">{service.id}</span>
                </div>
                <div className="flex-1 flex flex-col justify-end mt-4 sm:mt-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 mb-2 sm:mb-3">{service.subtitle}</p>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {service.desc}
                    </p>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-56 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-1.5 sm:space-y-2 border-t border-white/10 pt-4">
                            {service.details.map((detail, i) => (
                                <li key={i} className="text-xs sm:text-sm text-white/50 flex items-start gap-2">
                                    <span className="material-symbols-outlined text-xs text-white/30 mt-0.5">check</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/40 group-hover:text-white/60 transition-colors">
                    <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
            </div>
        </Reveal>
    );
};

export const ServicesPro = () => {
    return (
        <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-3 sm:mb-4 block">What We Do</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6">Our Services</h2>
                        <p className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto px-4">
                            Everything you need to grow your business online. From strategy to execution, we've got you covered.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
