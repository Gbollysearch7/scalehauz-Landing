"use client";

import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const industries = [
    {
        id: "01",
        slug: "ecommerce-retail",
        name: "E-commerce & Retail",
        desc: "Online stores, D2C brands, retail chains",
        icon: "storefront"
    },
    {
        id: "02",
        slug: "saas-technology",
        name: "SaaS & Technology",
        desc: "Software companies, tech startups, apps",
        icon: "cloud"
    },
    {
        id: "03",
        slug: "professional-services",
        name: "Professional Services",
        desc: "Law firms, consulting, accounting",
        icon: "work"
    },
    {
        id: "04",
        slug: "healthcare-wellness",
        name: "Healthcare & Wellness",
        desc: "Clinics, wellness brands, health tech",
        icon: "health_and_safety"
    },
    {
        id: "05",
        slug: "real-estate",
        name: "Real Estate",
        desc: "Agencies, property developers, PropTech",
        icon: "apartment"
    },
    {
        id: "06",
        slug: "finance-fintech",
        name: "Finance & Fintech",
        desc: "Banks, investment firms, fintech startups",
        icon: "account_balance"
    },
    {
        id: "07",
        slug: "education-edtech",
        name: "Education & EdTech",
        desc: "Schools, online courses, learning platforms",
        icon: "school"
    },
    {
        id: "08",
        slug: "hospitality-travel",
        name: "Hospitality & Travel",
        desc: "Hotels, restaurants, travel agencies",
        icon: "flight"
    },
    {
        id: "09",
        slug: "manufacturing-b2b",
        name: "Manufacturing & B2B",
        desc: "Industrial companies, B2B suppliers",
        icon: "precision_manufacturing"
    },
    {
        id: "10",
        slug: "nonprofits-ngos",
        name: "Non-profits & NGOs",
        desc: "Charities, foundations, social enterprises",
        icon: "volunteer_activism"
    }
];

export const Industries = () => {
    return (
        <section id="industries" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-16 border-b border-black/10 pb-8 sm:pb-12">
                        <span className="font-mono text-xs text-black/40 uppercase tracking-widest">02 — Industries</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter uppercase">Who We<br />Serve</h2>
                        <p className="text-black/50 font-mono text-xs sm:text-sm max-w-xl mt-2 sm:mt-4">
                            Sector-specific expertise. Tailored strategies for your industry's unique challenges.
                        </p>
                    </div>
                </Reveal>

                {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 5 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-black/10">
                    {industries.map((industry, index) => (
                        <Reveal key={industry.id} delay={0.05 + (index * 0.02)}>
                            <Link href={`/industries/${industry.slug}`}>
                                <div className="group p-4 sm:p-6 border-r border-b border-black/10 hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300 cursor-pointer aspect-square flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-[10px] sm:text-xs text-black/30 group-hover:text-white/50 transition-colors">{industry.id}</span>
                                        <span className="material-symbols-outlined text-xl sm:text-2xl text-black/20 group-hover:text-white/60 transition-colors">{industry.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-tight mb-1 sm:mb-2 leading-tight">{industry.name}</h4>
                                        <p className="text-[10px] sm:text-xs text-black/50 group-hover:text-white/60 font-mono leading-relaxed transition-colors hidden sm:block">
                                            {industry.desc}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-black/30 group-hover:text-white/60 mt-2 transition-colors">
                                            Learn more
                                            <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
