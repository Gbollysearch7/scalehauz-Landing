"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CounterAnimation } from "@/components/CounterAnimation";
import { LogoMarquee } from "@/components/LogoMarquee";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
    {
        icon: "campaign",
        title: "Multi-Channel Orchestration",
        description: "Unified strategy across Meta, Google, TikTok, LinkedIn, and emerging platforms."
    },
    {
        icon: "psychology",
        title: "AI-Powered Optimization",
        description: "Machine learning systems that optimize bids, creative, and targeting in real-time."
    },
    {
        icon: "group",
        title: "Dedicated Growth Team",
        description: "Senior strategists, analysts, and creatives assigned exclusively to your account."
    },
    {
        icon: "security",
        title: "Enterprise Security",
        description: "SOC-2 compliant. SSO integration. Full data governance and privacy controls."
    },
    {
        icon: "schedule",
        title: "Global Coverage",
        description: "24/7 campaign monitoring and optimization across all time zones."
    },
    {
        icon: "integration_instructions",
        title: "Deep Integrations",
        description: "Seamless connection to your CRM, CDP, BI tools, and marketing stack."
    }
];

const processSteps = [
    {
        number: "01",
        title: "Discovery & Audit",
        description: "Comprehensive analysis of your current marketing infrastructure, performance data, and growth opportunities."
    },
    {
        number: "02",
        title: "Strategy Architecture",
        description: "Custom growth framework designed around your specific business model, market position, and objectives."
    },
    {
        number: "03",
        title: "Team Assembly",
        description: "Dedicated specialists assigned to your account—strategists, analysts, creatives, and channel experts."
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "Phased rollout with continuous optimization. Daily monitoring, weekly reviews, monthly strategy sessions."
    },
    {
        number: "05",
        title: "Compound & Expand",
        description: "Reinvest wins, test new channels, expand into new markets. Sustainable growth that compounds."
    }
];

const securityFeatures = [
    "SOC-2 Type II Certified",
    "GDPR Compliant",
    "SSO Integration",
    "Role-Based Access Control",
    "Data Encryption at Rest",
    "Regular Security Audits"
];

export default function EnterprisePage() {
    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Reveal>
                                    <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                        Enterprise
                                    </span>
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-white uppercase mb-6">
                                        Growth at<br /><span className="italic">Scale</span>
                                    </h1>
                                    <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl">
                                        Purpose-built for organizations managing $500K+ in annual marketing spend. Enterprise-grade infrastructure meets startup agility.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/#contact"
                                            className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors text-center"
                                        >
                                            Schedule Demo
                                        </Link>
                                        <Link
                                            href="/work"
                                            className="inline-block border border-white/20 text-white py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
                                        >
                                            View Case Studies
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Contact Form */}
                            <Reveal delay={0.2}>
                                <div className="p-8 border border-white/10 bg-white/[0.02]">
                                    <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-6">
                                        Request a Demo
                                    </h3>
                                    <form className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Work Email"
                                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Company Name"
                                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/30 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none">
                                                <option value="">Annual Marketing Budget</option>
                                                <option value="500k-1m">$500K - $1M</option>
                                                <option value="1m-5m">$1M - $5M</option>
                                                <option value="5m-10m">$5M - $10M</option>
                                                <option value="10m+">$10M+</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-white text-black py-4 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                                        >
                                            Request Demo
                                        </button>
                                    </form>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <p className="text-center font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mb-8">
                                Trusted by Category Leaders
                            </p>
                        </Reveal>
                        <LogoMarquee />
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <CounterAnimation value="$50M+" label="Ad Spend Managed" />
                            <CounterAnimation value="150+" label="Enterprise Clients" />
                            <CounterAnimation value="8.4x" label="Average ROAS" />
                            <CounterAnimation value="24/7" label="Global Coverage" />
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Capabilities
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase">
                                    Enterprise-Grade <span className="italic">Infrastructure</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.map((cap, index) => (
                                <Reveal key={cap.title} delay={index * 0.1}>
                                    <motion.div
                                        className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 h-full"
                                        whileHover={{ y: -4 }}
                                    >
                                        <span className="material-symbols-outlined text-2xl text-white/40 mb-4 block">
                                            {cap.icon}
                                        </span>
                                        <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-2">
                                            {cap.title}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Partnership Process
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    How We <span className="italic">Engage</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="space-y-6">
                            {processSteps.map((step, index) => (
                                <Reveal key={step.number} delay={index * 0.1}>
                                    <div className="flex gap-6 p-6 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300">
                                        <div className="text-4xl font-bold text-white/10 shrink-0">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-white/50 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <Reveal>
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Security & Compliance
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase mb-6">
                                    Your Data is <span className="italic">Sacred</span>
                                </h2>
                                <p className="text-white/60 mb-8">
                                    Enterprise security isn't optional—it's foundational. We've built our infrastructure to meet the strictest compliance requirements.
                                </p>
                                <ul className="space-y-3">
                                    {securityFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70">
                                            <span className="material-symbols-outlined text-lg text-white/40">verified</span>
                                            <span className="font-mono text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div className="p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="material-symbols-outlined text-4xl text-white/30">shield</span>
                                        <div>
                                            <div className="font-mono text-xs uppercase tracking-wider text-white/60">Trust Score</div>
                                            <div className="text-3xl font-bold text-white">100%</div>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm">
                                        Zero security incidents. Zero data breaches. 100% uptime on reporting infrastructure.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                Ready for<br /><span className="italic">Enterprise Growth?</span>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Let's discuss how ScaleHauz can become your competitive advantage.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                            >
                                Schedule Executive Briefing
                            </Link>
                        </Reveal>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
