"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        quote: "Their data-driven approach to paid media is unlike anything we've seen. They don't just run ads—they build systems that deliver consistent, predictable results.",
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

export const TestimonialsPro = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-3 sm:mb-4 block">Testimonials</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">What Our Clients Say</h2>
                        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
                            Don't just take our word for it—hear from the brands we've helped grow.
                        </p>
                    </div>
                </Reveal>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="group h-full p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg relative overflow-hidden">
                                {/* Metric badge */}
                                <div className="absolute top-6 right-6 text-right">
                                    <div className="text-2xl font-bold text-white">{testimonial.metric}</div>
                                    <div className="text-xs text-white/40">{testimonial.metricLabel}</div>
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        <span className="material-symbols-outlined text-3xl text-white/20">format_quote</span>
                                    </div>

                                    <p className="text-white/70 leading-relaxed mb-8 flex-grow pr-24">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="border-t border-white/10 pt-6">
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-white/50 mt-1">
                                            {testimonial.title}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <Reveal>
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-5 sm:p-6 border border-white/10 bg-white/5 rounded-lg"
                                >
                                    {/* Metric badge */}
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="material-symbols-outlined text-2xl text-white/20">format_quote</span>
                                        <div className="text-right">
                                            <div className="text-xl font-bold text-white">{testimonials[activeIndex].metric}</div>
                                            <div className="text-[10px] text-white/40">{testimonials[activeIndex].metricLabel}</div>
                                        </div>
                                    </div>

                                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                                        "{testimonials[activeIndex].quote}"
                                    </p>

                                    <div className="border-t border-white/10 pt-4">
                                        <div className="font-semibold text-white">{testimonials[activeIndex].name}</div>
                                        <div className="text-sm text-white/50 mt-1">
                                            {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Carousel indicators */}
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === activeIndex
                                                ? "bg-white w-6"
                                                : "bg-white/30 hover:bg-white/50"
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Navigation arrows */}
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                                    className="p-2 text-white/40 hover:text-white active:text-white transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <button
                                    onClick={() => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                                    className="p-2 text-white/40 hover:text-white active:text-white transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
