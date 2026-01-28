"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CounterAnimation } from "@/components/CounterAnimation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["All", "SaaS", "E-commerce", "Fintech", "Services"];

const caseStudies = [
    {
        id: "techflow-saas",
        company: "TechFlow",
        industry: "SaaS",
        services: ["Paid Media", "SEO", "Content"],
        headline: "From $50K to $2.4M ARR in 18 months",
        description: "Complete go-to-market strategy for a B2B SaaS startup, combining paid acquisition with organic growth.",
        metrics: [
            { value: "340%", label: "Traffic Growth" },
            { value: "$2.4M", label: "ARR Generated" },
            { value: "48%", label: "Lower CAC" }
        ],
        image: "TF"
    },
    {
        id: "vertex-trading",
        company: "Vertex Prop",
        industry: "Fintech",
        services: ["Paid Media", "Creative"],
        headline: "12x ROAS on TikTok & Meta campaigns",
        description: "Scaled a prop trading firm from zero to 50,000+ funded traders through performance marketing.",
        metrics: [
            { value: "12x", label: "ROAS" },
            { value: "50K+", label: "Traders Acquired" },
            { value: "$4.2M", label: "Ad Spend Managed" }
        ],
        image: "VX"
    },
    {
        id: "luxehome-ecom",
        company: "LuxeHome",
        industry: "E-commerce",
        services: ["Paid Media", "Email", "Analytics"],
        headline: "Doubled revenue while cutting ad spend by 30%",
        description: "Restructured entire marketing funnel for a DTC home goods brand, focusing on efficiency and LTV.",
        metrics: [
            { value: "2x", label: "Revenue" },
            { value: "30%", label: "Ad Spend Reduction" },
            { value: "85%", label: "LTV Increase" }
        ],
        image: "LH"
    },
    {
        id: "cloudsync-saas",
        company: "CloudSync",
        industry: "SaaS",
        services: ["SEO", "Content", "Paid Media"],
        headline: "Ranked #1 for 47 high-intent keywords",
        description: "Built an SEO engine that now drives 60% of all qualified leads for this enterprise SaaS company.",
        metrics: [
            { value: "47", label: "Top Rankings" },
            { value: "60%", label: "Leads from SEO" },
            { value: "156%", label: "MQL Growth" }
        ],
        image: "CS"
    },
    {
        id: "nexgen-services",
        company: "NexGen Agency",
        industry: "Services",
        services: ["Paid Media", "Content", "Email"],
        headline: "Generated $1.8M in pipeline in 90 days",
        description: "High-ticket B2B lead generation campaign combining LinkedIn, Google, and email automation.",
        metrics: [
            { value: "$1.8M", label: "Pipeline" },
            { value: "312", label: "Qualified Leads" },
            { value: "22%", label: "Close Rate" }
        ],
        image: "NG"
    },
    {
        id: "quantum-fintech",
        company: "Quantum Pay",
        industry: "Fintech",
        services: ["Paid Media", "Creative", "Analytics"],
        headline: "Acquired 100K users at $4.20 CPA",
        description: "Launched and scaled a fintech app from zero to 100,000 active users in under 6 months.",
        metrics: [
            { value: "100K", label: "Users Acquired" },
            { value: "$4.20", label: "CPA" },
            { value: "6mo", label: "Timeline" }
        ],
        image: "QP"
    }
];

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredStudies = activeFilter === "All"
        ? caseStudies
        : caseStudies.filter(study => study.industry === activeFilter);

    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                Our Work
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white uppercase mb-6">
                                Results That<br /><span className="italic">Speak</span>
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
                                Real companies. Real growth. See how we've helped businesses like yours scale predictably.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <CounterAnimation value="$50M+" label="Revenue Generated" />
                            <CounterAnimation value="150+" label="Campaigns Launched" />
                            <CounterAnimation value="8.4x" label="Average ROAS" />
                            <CounterAnimation value="94%" label="Client Retention" />
                        </div>
                    </div>
                </section>

                {/* Filter Tabs */}
                <section className="py-8 sm:py-12 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveFilter(category)}
                                        className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                                            activeFilter === category
                                                ? "bg-white text-black"
                                                : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="py-8 sm:py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            layout
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredStudies.map((study, index) => (
                                    <motion.div
                                        key={study.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <div className="group h-full border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500 overflow-hidden">
                                            {/* Image/Logo Area */}
                                            <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden">
                                                <span className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                                                    {study.image}
                                                </span>
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-mono uppercase tracking-wider px-2 py-1">
                                                        {study.industry}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <h3 className="font-mono text-xs uppercase tracking-wider text-white/60">
                                                        {study.company}
                                                    </h3>
                                                </div>

                                                <h2 className="text-lg font-medium text-white mb-3 leading-tight">
                                                    {study.headline}
                                                </h2>

                                                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                                                    {study.description}
                                                </p>

                                                {/* Metrics */}
                                                <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-white/10">
                                                    {study.metrics.map((metric, i) => (
                                                        <div key={i} className="text-center">
                                                            <div className="text-lg font-bold text-white">{metric.value}</div>
                                                            <div className="text-[9px] font-mono uppercase text-white/40 tracking-wider">{metric.label}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Services Tags */}
                                                <div className="flex flex-wrap gap-1">
                                                    {study.services.map((service, i) => (
                                                        <span key={i} className="text-[10px] font-mono uppercase text-white/40 border border-white/10 px-2 py-0.5">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                Your Success Story<br /><span className="italic">Starts Here</span>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Join the companies that have transformed their growth trajectory with ScaleHauz.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#contact"
                                    className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    Start Your Journey
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-block border border-white/20 text-white py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
