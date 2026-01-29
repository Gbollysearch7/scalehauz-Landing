"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceFeature {
    title: string;
    items: string[];
}

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
}

interface ServicePageProps {
    title: string;
    tagline: string;
    heroDescription: string;
    icon: string;
    heroImage: string;
    secondaryImage?: string;
    metrics: { value: string; label: string }[];
    whyImportant: {
        title: string;
        description: string;
        points?: string[];
    };
    whatWeOffer: {
        description: string;
        features: ServiceFeature[];
    };
    benefits: {
        title: string;
        description: string;
        icon: string;
    }[];
    process?: {
        step: string;
        title: string;
        description: string;
    }[];
    testimonial?: Testimonial;
    relatedServices: {
        id: string;
        name: string;
        description: string;
        icon: string;
    }[];
}

export const ServicePageTemplate = ({
    title,
    tagline,
    heroDescription,
    icon,
    heroImage,
    secondaryImage,
    metrics,
    whyImportant,
    whatWeOffer,
    benefits,
    process,
    testimonial,
    relatedServices,
}: ServicePageProps) => {
    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-white/10 overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt={title}
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
                                <Link href="/services" className="text-white/30 hover:text-white/60 transition-colors">Services</Link>
                                <span className="text-white/20">/</span>
                                <span className="text-white/60">{title}</span>
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
                                {title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {i === Math.floor(title.split(' ').length / 2) ? (
                                            <span className="italic">{word} </span>
                                        ) : (
                                            `${word} `
                                        )}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-10">
                                {heroDescription}
                            </p>

                            {/* Metrics Row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center sm:text-left">
                                        <div className="text-3xl sm:text-4xl font-bold text-white">{metric.value}</div>
                                        <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider mt-1">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Why Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                            <Reveal>
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Why It Matters
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                    {whyImportant.title}
                                </h2>
                                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
                                    {whyImportant.description}
                                </p>
                                {whyImportant.points && (
                                    <ul className="space-y-3">
                                        {whyImportant.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/60">
                                                <span className="material-symbols-outlined text-lg text-white/40 mt-0.5">check_circle</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Reveal>
                            <Reveal delay={0.2}>
                                {secondaryImage && (
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={secondaryImage}
                                            alt={whyImportant.title}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute inset-0 border border-white/10" />
                                    </div>
                                )}
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12 sm:mb-16">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Our Capabilities
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase mb-4">
                                    What We <span className="italic">Deliver</span>
                                </h2>
                                <p className="text-white/60 max-w-2xl mx-auto">
                                    {whatWeOffer.description}
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whatWeOffer.features.map((feature, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <div className="group p-6 sm:p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 h-full">
                                        <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-4 pb-4 border-b border-white/10">
                                            {feature.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                                                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12 sm:mb-16">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    The Impact
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    Business <span className="italic">Benefits</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        className="group p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                                        whileHover={{ y: -4 }}
                                    >
                                        <span className="material-symbols-outlined text-3xl text-white/30 group-hover:text-white/50 transition-colors mb-4 block">
                                            {benefit.icon}
                                        </span>
                                        <h3 className="font-medium text-white uppercase tracking-tight mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                {process && (
                    <section className="py-16 sm:py-24 px-4 sm:px-6 border-y border-white/10">
                        <div className="max-w-5xl mx-auto">
                            <Reveal>
                                <div className="text-center mb-12">
                                    <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                        Our Process
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                        How We <span className="italic">Work</span>
                                    </h2>
                                </div>
                            </Reveal>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {process.map((step, index) => (
                                    <Reveal key={step.step} delay={index * 0.1}>
                                        <div className="relative">
                                            <div className="text-5xl font-bold text-white/10 mb-4">{step.step}</div>
                                            <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-2">{step.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                                            {index < process.length - 1 && (
                                                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 border-t border-dashed border-white/20" />
                                            )}
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Testimonial Section */}
                {testimonial && (
                    <section className="py-16 sm:py-24 px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <Reveal>
                                <span className="material-symbols-outlined text-5xl text-white/20 mb-6 block">format_quote</span>
                                <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 italic mb-8 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div>
                                    <p className="font-medium text-white">{testimonial.author}</p>
                                    <p className="text-sm text-white/50">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                )}

                {/* Certifications & Trust */}
                <section className="py-10 sm:py-12 px-4 sm:px-6 border-y border-white/10 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-10">
                                <div className="flex items-center gap-2 text-white/25">
                                    <span className="material-symbols-outlined text-xl">verified</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">Google Partner</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/25">
                                    <span className="material-symbols-outlined text-xl">verified</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">Meta Business Partner</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/25">
                                    <span className="material-symbols-outlined text-xl">verified</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">HubSpot Solutions</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/25">
                                    <span className="material-symbols-outlined text-xl">verified</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">Shopify Plus</span>
                                </div>
                            </div>
                            <p className="text-center font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mb-8">
                                Trusted by Industry Leaders
                            </p>
                        </Reveal>
                        <LogoMarquee />
                    </div>
                </section>

                {/* Related Services */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Explore More
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    Related <span className="italic">Services</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedServices.map((service, index) => (
                                <Reveal key={service.id} delay={index * 0.1}>
                                    <Link href={`/services/${service.id}`}>
                                        <motion.div
                                            className="group p-6 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/5 transition-all duration-300"
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
                                Ready to <span className="italic">Scale?</span>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Let's discuss how we can help accelerate your growth. Book a free strategy session with our team.
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
