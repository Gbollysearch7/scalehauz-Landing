"use client";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "ScaleHauz transformed our digital presence completely. Within 6 months, our organic traffic increased by 340% and our cost per acquisition dropped by half.",
        name: "Sarah Chen",
        title: "CMO",
        company: "TechFlow SaaS",
        metric: "340%",
        metricLabel: "Traffic Growth"
    },
    {
        quote: "Their AI-driven approach to paid media is unlike anything we've seen. They don't just run ads—they engineer growth systems that compound over time.",
        name: "Marcus Johnson",
        title: "Founder",
        company: "Vertex Prop Trading",
        metric: "$2.4M",
        metricLabel: "Revenue Generated"
    },
    {
        quote: "We went from struggling to get leads to having a predictable pipeline of qualified prospects every single month. The ROI has been incredible.",
        name: "Emily Rodriguez",
        title: "CEO",
        company: "LuxeHome Interiors",
        metric: "12x",
        metricLabel: "ROI on Ad Spend"
    },
    {
        quote: "The team at ScaleHauz doesn't just execute—they think strategically about our business. They've become an essential extension of our growth team.",
        name: "David Park",
        title: "VP of Marketing",
        company: "CloudSync Solutions",
        metric: "85%",
        metricLabel: "Lead Quality Increase"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-10 sm:mb-16 md:mb-20 text-center">
                        <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">Transmissions</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase">Client Signals</h2>
                    </div>
                </Reveal>

                {/* Scrolling Marquee Row */}
                <div className="relative mb-12">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[350px] sm:w-[400px] p-6 sm:p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                                            <span className="text-white/60 font-mono text-sm">{testimonial.name.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <div className="font-mono text-xs uppercase tracking-wider text-white">{testimonial.name}</div>
                                            <div className="font-mono text-[10px] text-white/40">
                                                {testimonial.title}, {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">
                                    "{testimonial.quote}"
                                </p>

                                <div className="pt-4 border-t border-white/10 flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white">{testimonial.metric}</span>
                                    <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">{testimonial.metricLabel}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Featured Large Testimonial */}
                <Reveal delay={0.2}>
                    <div className="relative p-8 sm:p-12 md:p-16 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
                        <div className="absolute top-8 right-8 sm:top-12 sm:right-12">
                            <span className="material-symbols-outlined text-6xl sm:text-8xl text-white/5">format_quote</span>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed mb-8 font-light">
                                "{testimonials[1].quote}"
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                                        <span className="text-white/60 font-mono text-lg">{testimonials[1].name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <div className="font-mono text-sm uppercase tracking-wider text-white">{testimonials[1].name}</div>
                                        <div className="font-mono text-xs text-white/40 mt-1">
                                            {testimonials[1].title} — {testimonials[1].company}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-left sm:text-right">
                                    <div className="text-4xl sm:text-5xl font-bold text-white">{testimonials[1].metric}</div>
                                    <div className="text-xs font-mono uppercase text-white/40 tracking-wider mt-1">{testimonials[1].metricLabel}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
