"use client";

import { Reveal } from "@/components/Reveal";
import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const Counter = ({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) => {
    return (
        <div className="group flex flex-col md:flex-row md:items-baseline justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors px-4">
            <span className="font-mono text-sm text-white/40 mb-2 md:mb-0 w-48 uppercase tracking-widest">{label}</span>
            <div className="flex-1 md:text-right">
                <span className="text-6xl md:text-9xl font-medium tracking-tighter block group-hover:translate-x-4 transition-transform duration-300">
                    {prefix}{value}{suffix}
                </span>
            </div>
        </div>
    );
};

export const Stats = () => {
    return (
        <section id="work" className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase">Output<br />Metrics</h2>
                        <p className="hidden md:block text-right font-mono text-xs text-white/40">
                            LIVE DATA FEED <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></span>
                        </p>
                    </div>
                </Reveal>

                <div className="flex flex-col">
                    <Reveal delay={0.2}>
                        <Counter label="Market Predictions/Day" value={2.5} prefix="" suffix="M+" />
                    </Reveal>
                    <Reveal delay={0.3}>
                        <Counter label="Creative Variations" value={10} suffix="k+" />
                    </Reveal>
                    <Reveal delay={0.4}>
                        <Counter label="ROI Velocity" value={340} suffix="%" />
                    </Reveal>
                </div>

                <Reveal delay={0.5}>
                    <div className="mt-24 text-center">
                        <button className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all rounded-full group">
                            Initialise Audit
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
