"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How does the AI Content Engine work?",
        answer: "Our system ingests your brand voice guidelines and performance data to generate high-performing content variations. It optimizes copy, visuals, and formatting for each specific platform automatically."
    },
    {
        question: "What is 'Predictive Vision'?",
        answer: "We use historical market data and real-time trend analysis to simulate future market scenarios. This allows us to allocate budget and deploy strategies before competitors even identify the opportunity."
    },
    {
        question: "Is this fully automated or human-managed?",
        answer: "It is a hybrid monolith. AI handles the scale, data processing, and rapid execution. Expert human architects set the strategy, review the output, and manage the high-level creative direction."
    },
    {
        question: "What platforms do you support?",
        answer: "Our ecosystem integrates seamlessly with Meta (Facebook/Instagram), Google Ads, TikTok, LinkedIn, and major email marketing platforms (Klaviyo, HubSpot) for full lifecycle management."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We focus on high-growth sectors including SaaS, fintech, e-commerce, prop trading firms, and professional services. Our frameworks are adaptable but we've built deep expertise in these verticals."
    },
    {
        question: "How long before we see results?",
        answer: "Most clients see measurable improvements within the first 30 days. Full optimization cycles typically complete within 90 days, with compounding returns thereafter as our systems learn and adapt."
    },
    {
        question: "What's your pricing structure?",
        answer: "We offer performance-based and retainer models depending on your goals. Pricing scales with your ad spend and scope of services. Book a discovery call for a custom proposal tailored to your business."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "We offer flexible engagement terms. While we recommend a minimum 90-day commitment for optimal results, we don't lock you into lengthy contracts. Our retention speaks for itself."
    },
    {
        question: "How do you measure and report success?",
        answer: "You get access to a real-time dashboard tracking all key metrics: CAC, ROAS, LTV, conversion rates, and more. Weekly strategy calls and monthly deep-dive reports keep you fully informed."
    },
    {
        question: "Can you work with our existing marketing team?",
        answer: "Absolutely. We operate as an extension of your team, not a replacement. We integrate with your existing workflows, collaborate with internal stakeholders, and ensure seamless knowledge transfer."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto">
                <Reveal>
                    <div className="mb-10 sm:mb-20">
                        <span className="font-mono text-xs text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">Knowledge Base</span>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white uppercase">System<br />Inquiries</h2>
                    </div>
                </Reveal>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 0.08}>
                            <div
                                className="border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/10 transition-colors cursor-pointer group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="p-4 sm:p-6 flex justify-between items-start gap-4">
                                    <h3 className="font-mono text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wide group-hover:text-white transition-colors leading-relaxed">
                                        {faq.question}
                                    </h3>
                                    <span className={`material-symbols-outlined text-white/40 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`}>
                                        expand_more
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/50 font-mono text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
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
    );
};
