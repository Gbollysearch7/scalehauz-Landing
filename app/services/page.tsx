"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        id: "paid-media",
        name: "Paid Media",
        tagline: "AI-Optimized Performance Marketing",
        description: "We engineer paid media systems that compound. From Meta to Google to TikTok, our AI-driven approach finds and scales winning campaigns faster than humanly possible.",
        features: [
            "Meta Ads (Facebook & Instagram)",
            "Google Ads (Search, Display, YouTube)",
            "TikTok Ads",
            "LinkedIn Ads",
            "Programmatic Display",
            "Creative testing at scale"
        ],
        metrics: { value: "12x", label: "Avg ROAS" },
        icon: "campaign"
    },
    {
        id: "seo",
        name: "SEO",
        tagline: "Dominate Search Results",
        description: "Technical excellence meets content strategy. We build SEO engines that drive predictable organic growth, reducing your dependency on paid channels.",
        features: [
            "Technical SEO audits",
            "Content strategy & production",
            "Link building campaigns",
            "Local SEO optimization",
            "E-commerce SEO",
            "International SEO"
        ],
        metrics: { value: "340%", label: "Traffic Growth" },
        icon: "search"
    },
    {
        id: "content",
        name: "Content Strategy",
        tagline: "AI-Powered Content Engine",
        description: "Our content engine ingests your brand voice and performance data to generate high-converting content at scale. Quality and quantity, finally aligned.",
        features: [
            "Brand voice development",
            "AI content generation",
            "Blog & article production",
            "Social media content",
            "Video scripts",
            "Landing page copy"
        ],
        metrics: { value: "10x", label: "Content Output" },
        icon: "edit_note"
    },
    {
        id: "email",
        name: "Email & Lifecycle",
        tagline: "Automated Revenue Streams",
        description: "Turn one-time buyers into lifetime customers. Our lifecycle marketing systems nurture, convert, and retain—on autopilot.",
        features: [
            "Email strategy & design",
            "Marketing automation",
            "Klaviyo & HubSpot setup",
            "Segmentation & personalization",
            "A/B testing frameworks",
            "SMS marketing"
        ],
        metrics: { value: "45%", label: "Revenue from Email" },
        icon: "mail"
    },
    {
        id: "analytics",
        name: "Analytics & Attribution",
        tagline: "Data-Driven Decisions",
        description: "Know exactly what's working. Our attribution systems cut through the noise to show true performance across every touchpoint.",
        features: [
            "Multi-touch attribution",
            "Custom dashboard setup",
            "GA4 & GTM implementation",
            "Data warehouse integration",
            "Predictive analytics",
            "ROI modeling"
        ],
        metrics: { value: "100%", label: "Data Clarity" },
        icon: "analytics"
    },
    {
        id: "creative",
        name: "Creative Production",
        tagline: "Performance-Driven Design",
        description: "Creative that converts. Our designers are marketers first, producing assets optimized for performance, not just aesthetics.",
        features: [
            "Ad creative design",
            "Video production",
            "Landing page design",
            "Brand identity",
            "UGC-style content",
            "Motion graphics"
        ],
        metrics: { value: "3x", label: "CTR Improvement" },
        icon: "brush"
    },
    {
        id: "social-media",
        name: "Social Media Marketing",
        tagline: "Community & Engagement",
        description: "Build communities, not just followers. Our social strategies create genuine engagement that translates into brand loyalty and business growth.",
        features: [
            "Platform strategy",
            "Content creation & scheduling",
            "Community management",
            "Influencer partnerships",
            "Social advertising",
            "Analytics & reporting"
        ],
        metrics: { value: "285%", label: "Engagement Growth" },
        icon: "share"
    }
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&q=80"
                            alt="Services"
                            className="w-full h-full object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <Reveal>
                            <nav className="flex items-center gap-2 mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                                <Link href="/" className="text-white/30 hover:text-white/60 transition-colors">Home</Link>
                                <span className="text-white/20">/</span>
                                <span className="text-white/60">Services</span>
                            </nav>
                            <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                Services
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white uppercase mb-6">
                                Full-Stack<br /><span className="italic">Growth Marketing</span>
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
                                Every service engineered to compound. From acquisition to retention, we build systems that scale your business predictably.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-8 sm:py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <Reveal key={service.id} delay={index * 0.1}>
                                    <motion.div
                                        className="group relative h-full p-6 sm:p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500"
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* Metric Badge */}
                                        <div className="absolute top-6 right-6 text-right">
                                            <div className="text-2xl sm:text-3xl font-bold text-white">{service.metrics.value}</div>
                                            <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider">{service.metrics.label}</div>
                                        </div>

                                        <div className="flex flex-col h-full">
                                            <span className="material-symbols-outlined text-3xl text-white/30 group-hover:text-white/50 transition-colors mb-4">
                                                {service.icon}
                                            </span>

                                            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white uppercase mb-1">
                                                {service.name}
                                            </h2>
                                            <p className="text-white/40 text-sm font-mono uppercase tracking-wide mb-4">
                                                {service.tagline}
                                            </p>

                                            <p className="text-white/60 text-sm leading-relaxed mb-6 pr-16">
                                                {service.description}
                                            </p>

                                            <ul className="grid grid-cols-2 gap-2 mb-6 flex-grow">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-xs text-white/50">
                                                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="border-t border-white/10 pt-4 mt-auto">
                                                <Link
                                                    href={`/services/${service.id}`}
                                                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors group/link"
                                                >
                                                    Learn More
                                                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                                                        arrow_forward
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <p className="text-center font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mb-8">
                                Trusted by Industry Leaders
                            </p>
                        </Reveal>
                        <LogoMarquee />
                    </div>
                </section>

                {/* How We Work */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Our Approach
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    How We <span className="italic">Operate</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Diagnose",
                                    desc: "Deep-dive audit of your current marketing stack, identifying leaks and opportunities."
                                },
                                {
                                    step: "02",
                                    title: "Architect",
                                    desc: "Custom growth system designed for your specific business model and goals."
                                },
                                {
                                    step: "03",
                                    title: "Execute & Scale",
                                    desc: "Launch, optimize, and compound. Continuous iteration driven by real-time data."
                                }
                            ].map((item, index) => (
                                <Reveal key={item.step} delay={index * 0.1}>
                                    <div className="text-center sm:text-left">
                                        <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                                        <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-2">{item.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                Let's Build Your<br /><span className="italic">Growth Engine</span>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Schedule a strategy session. We'll map out exactly how to hit your growth targets.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#contact"
                                    className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    Book Strategy Call
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="inline-block border border-white/20 text-white py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                                >
                                    View Pricing
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
