"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long until I see results?",
        answer: "It depends on the service. Paid ads can generate leads within days, while SEO typically takes 3-6 months to show significant results. We'll set realistic expectations during our initial strategy session and provide regular progress reports."
    },
    {
        question: "What's your pricing model?",
        answer: "We offer flexible pricing based on your needs—monthly retainers, project-based fees, or performance-based models. Our retainers start at $5,000/month for growing businesses. We'll recommend the best structure during our discovery call."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "No. We work on a month-to-month basis because we believe in earning your business every month. That said, marketing is a long-term game, and our most successful clients commit to at least 6-12 months to see compounding results."
    },
    {
        question: "Which industries do you work with?",
        answer: "We have experience across e-commerce, SaaS, professional services, fintech, healthcare, real estate, and more. Our strategies are tailored to your specific industry and target audience."
    },
    {
        question: "How do you measure success?",
        answer: "We establish clear KPIs at the start of every engagement—whether that's leads, revenue, traffic, or brand awareness. You'll receive regular reports with transparent data on what's working and where we're optimizing."
    },
    {
        question: "Can you work with my existing team?",
        answer: "Absolutely. We can complement your in-house team, fill skill gaps, or take over specific channels entirely. We're flexible and collaborative in our approach."
    }
];

export const FAQPro = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto">
                <Reveal>
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-3 sm:mb-4 block">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">Common Questions</h2>
                        <p className="text-white/50 text-base sm:text-lg">
                            Got questions? We've got answers.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div
                                className="border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/10 transition-colors cursor-pointer rounded-lg overflow-hidden"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="p-4 sm:p-6 flex justify-between items-center gap-4">
                                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-white/90 pr-2 sm:pr-8">
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
                                            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/60 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
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
