"use client";

import { Reveal } from "@/components/Reveal";

export const Hero = () => {
    return (
        <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="mb-8 sm:mb-12 opacity-80">
                <span className="material-symbols-outlined text-6xl sm:text-8xl md:text-9xl font-thin wireframe-spin text-white">
                    deployed_code
                </span>
            </div>

            <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6 sm:space-y-8 z-10">
                <Reveal>
                    <div className="flex flex-col items-center gap-2 mb-4 sm:mb-8">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full">
                            System v.3.0
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.35}>
                    <h1 className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white">
                        GROWTH<br />
                        <span className="text-white/30">AUTONOMY</span>
                    </h1>
                </Reveal>

                <Reveal delay={0.45}>
                    <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-mono mt-4 sm:mt-8 px-2">
                        Predictive markets. Automated content. Precision outreach.
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        We engineer the systems that scale your business while you sleep.
                    </p>
                </Reveal>

                <Reveal delay={0.55}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-0 pt-6 sm:pt-10 w-full max-w-md mx-auto px-4 sm:px-0">
                        <a href="#contact" className="w-full sm:w-1/2 px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold text-sm uppercase tracking-widest transition-all border border-white text-center">
                            Start Engine
                        </a>
                        <a href="#services" className="w-full sm:w-1/2 px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold text-sm uppercase tracking-widest transition-all border border-white border-t-0 sm:border-t sm:border-l-0 text-center">
                            Manifesto
                        </a>
                    </div>
                </Reveal>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 sm:h-24 w-px bg-gradient-to-t from-white/20 to-transparent"></div>
        </section>
    );
};
