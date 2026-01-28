"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CounterAnimation } from "@/components/CounterAnimation";
import { LogoMarquee } from "@/components/LogoMarquee";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        name: "Growth",
        price: "$5,000",
        period: "/month",
        description: "For startups ready to scale",
        features: [
            "1 primary channel (Meta or Google)",
            "Up to $25k ad spend management",
            "Bi-weekly strategy calls",
            "Monthly performance reports",
            "Basic creative support",
            "Email support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Scale",
        price: "$10,000",
        period: "/month",
        description: "For companies accelerating growth",
        features: [
            "2-3 channels (Meta, Google, TikTok)",
            "Up to $75k ad spend management",
            "Weekly strategy calls",
            "Real-time dashboard access",
            "AI content generation",
            "Creative production included",
            "Dedicated account manager",
            "Slack channel access"
        ],
        cta: "Book a Call",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For high-growth organizations",
        features: [
            "Unlimited channels",
            "Unlimited ad spend management",
            "Daily standups available",
            "Custom reporting & BI integration",
            "Full creative team access",
            "AI strategy consulting",
            "Dedicated growth team",
            "24/7 priority support",
            "Quarterly business reviews"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

const services = [
    { name: "Paid Media", icon: "campaign", desc: "Meta, Google, TikTok, LinkedIn" },
    { name: "SEO", icon: "search", desc: "Technical, Content, Link Building" },
    { name: "Content Strategy", icon: "edit_note", desc: "AI-powered content engine" },
    { name: "Email Marketing", icon: "mail", desc: "Lifecycle & automation" },
    { name: "Analytics", icon: "analytics", desc: "Attribution & insights" },
    { name: "Creative", icon: "brush", desc: "Ad creative & design" },
];

const faqs = [
    {
        question: "What's included in ad spend management?",
        answer: "We handle everything from campaign setup, audience research, creative testing, bid optimization, to scaling. The ad spend itself is paid directly to platforms—our fee covers the strategy and execution."
    },
    {
        question: "Can I switch plans later?",
        answer: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle. We'll help ensure a smooth transition."
    },
    {
        question: "What's the minimum commitment?",
        answer: "We recommend a 90-day commitment to see meaningful results, but we don't lock you into long-term contracts. Our retention rate speaks for itself."
    },
    {
        question: "Do you offer performance-based pricing?",
        answer: "Yes, for qualified clients we offer hybrid models with a lower base retainer plus performance bonuses tied to specific KPIs. Let's discuss what makes sense for your business."
    },
    {
        question: "What if I need services not listed?",
        answer: "Our Enterprise plan is fully customizable. Whether you need influencer marketing, affiliate programs, or marketplace optimization—we can build a tailored solution."
    }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <Navbar />
            <main className="relative pt-20">
                {/* Hero Section */}
                <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <Reveal>
                            <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                Pricing
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white uppercase mb-6">
                                Plans Built to<br /><span className="italic">Scale With You</span>
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
                                Flexible retainers designed for growth-stage companies. No hidden fees. No long-term lock-ins. Just results.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-8 sm:py-16 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {plans.map((plan, index) => (
                                <Reveal key={plan.name} delay={index * 0.1}>
                                    <div className={`relative h-full p-6 sm:p-8 border ${plan.popular ? 'border-white/40 bg-white/5' : 'border-white/10 bg-white/[0.02]'} hover:bg-white/5 transition-all duration-300`}>
                                        {plan.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                                <span className="bg-white text-black text-[10px] font-mono uppercase tracking-wider px-3 py-1">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="font-mono text-xs uppercase tracking-wider text-white/60 mb-2">{plan.name}</h3>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                                                <span className="text-white/40 font-mono text-sm">{plan.period}</span>
                                            </div>
                                            <p className="text-white/50 text-sm mt-2">{plan.description}</p>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                                    <span className="material-symbols-outlined text-white/40 text-lg mt-0.5">check</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="#contact"
                                            className={`block w-full py-3 px-6 text-center font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                                                plan.popular
                                                    ? 'bg-white text-black hover:bg-white/90'
                                                    : 'border border-white/20 text-white hover:bg-white/10'
                                            }`}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-y border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <CounterAnimation value="340%" label="Avg Traffic Growth" />
                            <CounterAnimation value="12x" label="Average ROAS" />
                            <CounterAnimation value="60%" label="Lower CAC" />
                            <CounterAnimation value="94%" label="Client Retention" />
                        </div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="py-12 sm:py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <p className="text-center font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mb-8">
                                Trusted by Growth-Stage Companies
                            </p>
                        </Reveal>
                        <LogoMarquee />
                    </div>
                </section>

                {/* All Services Included */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-6xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    Full-Stack Marketing
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    Access All <span className="italic">Services</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.map((service, index) => (
                                <Reveal key={service.name} delay={index * 0.05}>
                                    <div className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 group">
                                        <span className="material-symbols-outlined text-2xl text-white/40 group-hover:text-white/60 transition-colors mb-4 block">
                                            {service.icon}
                                        </span>
                                        <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-1">{service.name}</h3>
                                        <p className="text-white/50 text-sm">{service.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-3xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block">
                                    FAQ
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">
                                    Common <span className="italic">Questions</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <Reveal key={index} delay={index * 0.05}>
                                    <div
                                        className="border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-colors cursor-pointer"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <div className="p-4 sm:p-6 flex justify-between items-start gap-4">
                                            <h3 className="font-mono text-xs sm:text-sm text-white/80 uppercase tracking-wide">
                                                {faq.question}
                                            </h3>
                                            <span className={`material-symbols-outlined text-white/40 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                                                expand_more
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-6">
                                Ready to <span className="italic">Scale?</span>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                Book a free strategy call. We'll analyze your current setup and show you exactly how we'd drive growth.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-block bg-white text-black py-4 px-8 font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                            >
                                Book Strategy Call
                            </Link>
                        </Reveal>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
