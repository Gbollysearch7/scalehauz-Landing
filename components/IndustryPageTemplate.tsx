"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import Link from "next/link";
import { motion } from "framer-motion";

interface IndustryChallenge {
    title: string;
    description: string;
}

interface IndustryService {
    id: string;
    name: string;
    description: string;
    icon: string;
}

interface IndustryPageProps {
    name: string;
    tagline: string;
    heroDescription: string;
    icon: string;
    heroImage: string;
    secondaryImage?: string;
    stats: { value: string; label: string }[];
    challenges: {
        intro: string;
        items: IndustryChallenge[];
    };
    solutions: {
        intro: string;
        description: string;
    };
    services: IndustryService[];
    whyUs: {
        title: string;
        points: string[];
    };
    caseStudyTeaser?: {
        title: string;
        result: string;
        description: string;
    };
    relatedIndustries: {
        slug: string;
        name: string;
        icon: string;
    }[];
}

export const IndustryPageTemplate = ({
    name,
    tagline,
    heroDescription,
    icon,
    heroImage,
    secondaryImage,
    stats,
    challenges,
    solutions,
    services,
    whyUs,
    caseStudyTeaser,
    relatedIndustries,
}: IndustryPageProps) => {
    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-white/10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt={name}
                            className="w-full h-full object-cover opacity-15"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <Reveal>
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                                <Link href="/" className="text-white/30 hover:text-white/60 transition-colors">Home</Link>
                                <span className="text-white/20">/</span>
                                <Link href="/#industries" className="text-white/30 hover:text-white/60 transition-colors">Industries</Link>
                                <span className="text-white/20">/</span>
                                <span className="text-white/60">{name}</span>
                            </nav>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-4xl sm:text-5xl text-white/30">
                                    {icon}
                                </span>
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em]">
                                    {tagline}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white uppercase mb-6">
                                {name} <span className="italic">Marketing</span>
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-10">
                                {heroDescription}
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center sm:text-left">
                                        <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                                        <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                Industry Challenges
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                We Understand Your <span className="italic">Challenges</span>
                            </h2>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-12">
                                {challenges.intro}
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {challenges.items.map((challenge, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <div className="group p-6 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 h-full">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-xl text-white/30 mt-1">
                                                warning
                                            </span>
                                            <div>
                                                <h3 className="font-medium text-white uppercase tracking-tight mb-2">
                                                    {challenge.title}
                                                </h3>
                                                <p className="text-sm text-white/50 leading-relaxed">
                                                    {challenge.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <Reveal>
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Our Approach
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                    {solutions.intro}
                                </h2>
                                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                                    {solutions.description}
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 bg-white text-black py-3 px-6 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    Discuss Your Project
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div className="relative">
                                    {secondaryImage ? (
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={secondaryImage}
                                                alt={`${name} solutions`}
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            <div className="absolute inset-0 border border-white/10" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <div className="grid grid-cols-2 gap-3">
                                                    {services.slice(0, 4).map((service, index) => (
                                                        <div key={index} className="p-3 bg-black/60 backdrop-blur-sm border border-white/10">
                                                            <span className="material-symbols-outlined text-lg text-white/50 mb-1 block">
                                                                {service.icon}
                                                            </span>
                                                            <span className="text-[10px] font-mono uppercase text-white/70">
                                                                {service.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                                            <div className="relative p-8 border border-white/10 rounded-2xl">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {services.slice(0, 4).map((service, index) => (
                                                        <div key={index} className="p-4 bg-white/5 rounded-lg">
                                                            <span className="material-symbols-outlined text-2xl text-white/40 mb-2 block">
                                                                {service.icon}
                                                            </span>
                                                            <span className="text-xs font-mono uppercase text-white/60">
                                                                {service.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Services for this Industry */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12 sm:mb-16">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Tailored Services
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase mb-4">
                                    How We Help <span className="italic">{name}</span> Brands
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Reveal key={service.id} delay={index * 0.1}>
                                    <Link href={`/services/${service.id}`}>
                                        <motion.div
                                            className="group p-6 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 h-full"
                                            whileHover={{ y: -4 }}
                                        >
                                            <span className="material-symbols-outlined text-2xl text-white/30 group-hover:text-white/50 transition-colors mb-4 block">
                                                {service.icon}
                                            </span>
                                            <h3 className="font-medium text-white uppercase tracking-tight mb-2">
                                                {service.name}
                                            </h3>
                                            <p className="text-sm text-white/50 mb-4">
                                                {service.description}
                                            </p>
                                            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/40 group-hover:text-white/60 transition-colors">
                                                Learn More
                                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                                    arrow_forward
                                                </span>
                                            </span>
                                        </motion.div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-y border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Why Choose Us
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase mb-4">
                                    {whyUs.title}
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {whyUs.points.map((point, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <div className="flex items-start gap-4 p-6 border border-white/10">
                                        <span className="material-symbols-outlined text-xl text-white/40">
                                            check_circle
                                        </span>
                                        <p className="text-white/70 leading-relaxed">{point}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Study Teaser */}
                {caseStudyTeaser && (
                    <section className="py-16 sm:py-24 px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            <Reveal>
                                <div className="relative p-8 sm:p-12 border border-white/10 bg-white/[0.02]">
                                    <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                        Client Success
                                    </span>
                                    <div className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                        {caseStudyTeaser.result}
                                    </div>
                                    <h3 className="text-xl font-medium text-white uppercase tracking-tight mb-4">
                                        {caseStudyTeaser.title}
                                    </h3>
                                    <p className="text-white/60 mb-6 max-w-2xl">
                                        {caseStudyTeaser.description}
                                    </p>
                                    <Link
                                        href="/work"
                                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                                    >
                                        View Case Studies
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                )}

                {/* Trusted By */}
                <section className="py-10 sm:py-12 px-4 sm:px-6 border-y border-white/10 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-10">
                            <div className="flex items-center gap-2 text-white/20">
                                <span className="material-symbols-outlined text-xl">verified</span>
                                <span className="font-mono text-[10px] uppercase tracking-wider">Google Partner</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/20">
                                <span className="material-symbols-outlined text-xl">verified</span>
                                <span className="font-mono text-[10px] uppercase tracking-wider">Meta Business Partner</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/20">
                                <span className="material-symbols-outlined text-xl">verified</span>
                                <span className="font-mono text-[10px] uppercase tracking-wider">HubSpot Solutions</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/20">
                                <span className="material-symbols-outlined text-xl">verified</span>
                                <span className="font-mono text-[10px] uppercase tracking-wider">Shopify Plus</span>
                            </div>
                        </div>
                        <Reveal>
                            <p className="text-center font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mb-8">
                                Trusted by Industry Leaders
                            </p>
                        </Reveal>
                        <LogoMarquee />
                    </div>
                </section>

                {/* Related Industries */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Explore More
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    Other <span className="italic">Industries</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {relatedIndustries.map((industry, index) => (
                                <Reveal key={industry.slug} delay={index * 0.05}>
                                    <Link href={`/industries/${industry.slug}`}>
                                        <motion.div
                                            className="group p-4 sm:p-6 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 text-center"
                                            whileHover={{ y: -4 }}
                                        >
                                            <span className="material-symbols-outlined text-2xl text-white/30 group-hover:text-white/50 transition-colors mb-2 block">
                                                {industry.icon}
                                            </span>
                                            <span className="text-xs font-mono uppercase text-white/60 group-hover:text-white transition-colors">
                                                {industry.name}
                                            </span>
                                        </motion.div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="Get started"
                            className="w-full h-full object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />
                    </div>
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                Ready to Grow Your <span className="italic">{name}</span> Business?
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Let's discuss your specific challenges and build a marketing strategy tailored to your industry.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#contact"
                                    className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    Book Strategy Call
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-block border border-white/20 text-white py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};
