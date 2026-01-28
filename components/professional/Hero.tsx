"use client";

import { Reveal } from "@/components/Reveal";

export const HeroPro = () => {
    return (
        <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6 sm:space-y-8 z-10">
                <Reveal>
                    <div className="flex flex-col items-center gap-2 mb-2 sm:mb-4">
                        <span className="text-xs sm:text-sm font-mono text-white/50 uppercase tracking-widest">
                            Full-Service Marketing Agency
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.35}>
                    <h1 className="text-[2.5rem] leading-[1] sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white px-2">
                        Scale Your Business<br />
                        <span className="text-white/40">With Confidence</span>
                    </h1>
                </Reveal>

                <Reveal delay={0.45}>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed mt-4 sm:mt-8 px-4">
                        We help ambitious brands grow through strategic marketing,
                        creative design, and data-driven campaigns that deliver real results.
                    </p>
                </Reveal>

                <Reveal delay={0.55}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-10 px-4 w-full">
                        <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-gray-100 text-black font-bold text-sm uppercase tracking-widest transition-all rounded-full text-center">
                            Get Started
                        </a>
                        <a href="#services" className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-sm uppercase tracking-widest transition-all border border-white/30 rounded-full text-center">
                            Our Services
                        </a>
                    </div>
                </Reveal>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 sm:h-24 w-px bg-gradient-to-t from-white/20 to-transparent"></div>
        </section>
    );
};
