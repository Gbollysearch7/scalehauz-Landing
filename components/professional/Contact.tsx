"use client";

import { Reveal } from "@/components/Reveal";

export const ContactPro = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-3 sm:mb-4 block">Get Started</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
                            Let's Grow Together
                        </h2>
                        <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto px-2">
                            Ready to scale your business? Tell us about your goals and we'll create a custom strategy for you.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <form className="bg-white/5 border border-white/10 p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl space-y-5 sm:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs sm:text-sm text-white/60 block">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="John Smith"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-xs sm:text-sm text-white/60 block">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs sm:text-sm text-white/60 block">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="budget" className="text-xs sm:text-sm text-white/60 block">Monthly Budget</label>
                            <select
                                id="budget"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:border-white/30 transition-colors"
                            >
                                <option className="bg-[#121212]">Select your budget range</option>
                                <option className="bg-[#121212]">$5,000 - $10,000 / month</option>
                                <option className="bg-[#121212]">$10,000 - $25,000 / month</option>
                                <option className="bg-[#121212]">$25,000 - $50,000 / month</option>
                                <option className="bg-[#121212]">$50,000+ / month</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="services" className="text-xs sm:text-sm text-white/60 block">What services are you interested in?</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                                {["SEO", "Paid Ads", "Social Media", "Email Marketing", "Design", "Strategy", "AI & Automation", "Other"].map((service) => (
                                    <label key={service} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 cursor-pointer hover:text-white active:text-white transition-colors p-2 rounded-lg hover:bg-white/5 active:bg-white/5">
                                        <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 shrink-0" />
                                        <span className="leading-tight">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs sm:text-sm text-white/60 block">Tell us about your goals</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                placeholder="What are you looking to achieve? What challenges are you facing?"
                            ></textarea>
                        </div>

                        <div className="pt-2 sm:pt-4">
                            <button type="submit" className="w-full sm:w-auto py-4 px-8 sm:px-12 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-100 active:bg-gray-200 transition-all rounded-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="mt-8 sm:mt-12 text-center text-white/40 text-xs sm:text-sm">
                        <p>Or email us directly at <a href="mailto:hello@scalehauz.com" className="text-white hover:underline">hello@scalehauz.com</a></p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
