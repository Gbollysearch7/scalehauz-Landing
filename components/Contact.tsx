"use client";

import { Reveal } from "@/components/Reveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">Initialization</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white uppercase mb-4 sm:mb-6">
                            Start The<br />Sequence
                        </h2>
                        <p className="text-white/60 font-mono text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-4">
                            Tell us about your system requirements. We'll architect the solution.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <form className="glass p-5 sm:p-8 md:p-12 border border-white/10 space-y-5 sm:space-y-8 relative overflow-hidden group">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 blur-[60px] sm:blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-white/10 transition-colors duration-500"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="John Smith"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="budget" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Monthly Budget</label>
                            <select
                                id="budget"
                                className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                            >
                                <option className="bg-[#121212]">Select your budget range</option>
                                <option className="bg-[#121212]">$5,000 - $10,000 / month</option>
                                <option className="bg-[#121212]">$10,000 - $25,000 / month</option>
                                <option className="bg-[#121212]">$25,000 - $50,000 / month</option>
                                <option className="bg-[#121212]">$50,000+ / month</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="services" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Services Required</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                                {["SEO", "Paid Ads", "Social Media", "Email Marketing", "Design", "Strategy", "AI & Automation", "Other"].map((service) => (
                                    <label key={service} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/70 cursor-pointer hover:text-white active:text-white transition-colors p-2 hover:bg-white/5 active:bg-white/5">
                                        <input type="checkbox" className="w-4 h-4 border-white/20 bg-white/5 shrink-0" />
                                        <span className="leading-tight uppercase">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block ml-1">Project Details</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                placeholder="What are you looking to achieve? What challenges are you facing?"
                            ></textarea>
                        </div>

                        <div className="pt-2 sm:pt-4 text-center">
                            <button type="submit" className="w-full sm:w-auto py-4 px-8 sm:px-12 bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-200 active:bg-gray-300 transition-all rounded-full">
                                Initialize Protocol
                            </button>
                        </div>
                    </form>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="mt-8 sm:mt-12 text-center text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                        <p>Direct transmission: <a href="mailto:hello@scalehauz.com" className="text-white hover:underline">hello@scalehauz.com</a></p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
