"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const coreValues = [
    {
        title: "Move with Precision",
        description: "We don't spray and pray. Every campaign, every dollar, every decision is engineered with surgical accuracy.",
        icon: "target",
    },
    {
        title: "Own the Outcome",
        description: "No finger-pointing. We take full accountability for results — wins and losses alike.",
        icon: "shield",
    },
    {
        title: "Build in Public",
        description: "Transparency isn't optional. We share our process, our data, and our learnings openly.",
        icon: "visibility",
    },
    {
        title: "Compound Daily",
        description: "Small, consistent improvements beat heroic sprints. We optimize relentlessly, every single day.",
        icon: "trending_up",
    },
    {
        title: "Question Everything",
        description: "Best practices expire. We challenge assumptions, test hypotheses, and let data settle debates.",
        icon: "psychology",
    },
];

const benefits = [
    { title: "Remote-First", description: "Work from anywhere in the world. No office politics, no commute.", icon: "public" },
    { title: "Async Culture", description: "Deep work over meetings. We respect your time and attention.", icon: "schedule" },
    { title: "Growth Budget", description: "Annual learning stipend for courses, conferences, and tools.", icon: "school" },
    { title: "Equity Options", description: "Own a piece of what you build. Early team, early equity.", icon: "diamond" },
    { title: "Unlimited PTO", description: "Take the time you need. We measure output, not hours.", icon: "beach_access" },
    { title: "Top-Tier Tools", description: "Best-in-class stack. No budget constraints on the tools you need.", icon: "build" },
];

const stats = [
    { value: "100%", label: "Remote" },
    { value: "7+", label: "Countries" },
    { value: "50+", label: "Clients Scaled" },
    { value: "4.9", label: "Glassdoor" },
];

const testimonials = [
    {
        quote: "ScaleHauz gave me the autonomy to own entire growth channels from day one. The learning curve is vertical — in the best way.",
        name: "Maria S.",
        role: "Senior Growth Strategist",
    },
    {
        quote: "I've worked at agencies and in-house. Nothing compares to the caliber of people and the pace of execution here.",
        name: "James K.",
        role: "Paid Media Lead",
    },
    {
        quote: "The async-first culture is real. I do my best work at 6AM before anyone's online, and nobody bats an eye.",
        name: "Aisha T.",
        role: "Content Strategist",
    },
];

export default function CareersPage() {
    return (
        <main className="bg-monolith-bg text-monolith-fg min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10" />

                <div className="mb-8 sm:mb-12 opacity-80">
                    <span className="material-symbols-outlined text-6xl sm:text-8xl md:text-9xl font-thin wireframe-spin text-white">
                        groups
                    </span>
                </div>

                <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6 sm:space-y-8 z-10">
                    <Reveal>
                        <div className="flex flex-col items-center gap-2 mb-4 sm:mb-8">
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full">
                                We&apos;re Hiring
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.35}>
                        <h1 className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white">
                            YOUR BEST<br />
                            <span className="text-white/30">WORK AWAITS</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-mono mt-4 sm:mt-8 px-2">
                            We&apos;re building the growth engine of the future.
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            Join a team of operators, strategists, and builders who ship results — not decks.
                        </p>
                    </Reveal>

                    <Reveal delay={0.55}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 pt-6 sm:pt-10 w-full max-w-md mx-auto px-4 sm:px-0">
                            <Link href="/careers/jobs" className="w-full sm:w-1/2 px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold text-sm uppercase tracking-widest transition-all border border-white text-center">
                                View Jobs
                            </Link>
                            <a href="#culture" className="w-full sm:w-1/2 px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold text-sm uppercase tracking-widest transition-all border border-white border-t-0 sm:border-t sm:border-l-0 text-center">
                                Our Culture
                            </a>
                        </div>
                    </Reveal>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 sm:h-24 w-px bg-gradient-to-t from-white/20 to-transparent" />
            </section>

            {/* Stats Bar */}
            <section className="border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                                <div className="py-10 sm:py-14 text-center">
                                    <div className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
                                        {stat.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section id="culture" className="py-20 sm:py-32 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col items-start gap-4 mb-16 sm:mb-20">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1">
                                001 — Culture
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter">
                                Engineered for
                                <br />
                                <span className="text-white/30">high performers</span>
                            </h2>
                            <p className="max-w-lg text-white/50 text-base sm:text-lg leading-relaxed mt-2">
                                We&apos;re not a &quot;family.&quot; We&apos;re a team of specialists who hold each other to an
                                unreasonably high bar — and love every minute of it.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-px bg-white/10">
                        <div className="bg-monolith-bg p-8 sm:p-12 md:col-span-2">
                            <Reveal>
                                <div className="flex items-start gap-6">
                                    <span className="material-symbols-outlined text-4xl text-white/20 mt-1">rocket_launch</span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-medium mb-3">Accelerate Your Career</h3>
                                        <p className="text-white/50 leading-relaxed max-w-2xl">
                                            We promote based on impact, not tenure. You&apos;ll get exposure to multi-channel growth
                                            strategy, direct client relationships, and leadership opportunities that would take
                                            years elsewhere. Mentorship is built into the operating system.
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="bg-monolith-bg p-8 sm:p-12">
                            <Reveal delay={0.3}>
                                <div className="flex items-start gap-6">
                                    <span className="material-symbols-outlined text-4xl text-white/20 mt-1">auto_awesome</span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-medium mb-3">AI-Native Workflow</h3>
                                        <p className="text-white/50 leading-relaxed">
                                            We don&apos;t just talk about AI — we build with it daily. From automated reporting
                                            to predictive campaign optimization, you&apos;ll work with cutting-edge tools before
                                            anyone else.
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="bg-monolith-bg p-8 sm:p-12">
                            <Reveal delay={0.4}>
                                <div className="flex items-start gap-6">
                                    <span className="material-symbols-outlined text-4xl text-white/20 mt-1">laptop_mac</span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-medium mb-3">Work Your Way</h3>
                                        <p className="text-white/50 leading-relaxed">
                                            Fully remote, async-first. No surveillance software, no mandatory cameras.
                                            We trust adults to manage their time and deliver exceptional work.
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 sm:py-32 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col items-start gap-4 mb-16 sm:mb-20">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1">
                                002 — Values
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter">
                                What we
                                <br />
                                <span className="text-white/30">operate by</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className="space-y-px">
                        {coreValues.map((value, index) => (
                            <Reveal key={value.title} delay={0.15 * index}>
                                <motion.div
                                    className="group border border-white/10 bg-monolith-bg hover:bg-white/[0.03] transition-all duration-300 p-6 sm:p-8"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <span className="font-mono text-xs text-white/20 w-8 shrink-0">
                                                0{index + 1}
                                            </span>
                                            <span className="material-symbols-outlined text-2xl text-white/20 group-hover:text-white/50 transition-colors shrink-0">
                                                {value.icon}
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-white transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 sm:py-32 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col items-start gap-4 mb-16 sm:mb-20">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1">
                                003 — Benefits
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter">
                                Built for
                                <br />
                                <span className="text-white/30">operators</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                        {benefits.map((benefit, index) => (
                            <Reveal key={benefit.title} delay={0.1 * index}>
                                <div className="bg-monolith-bg p-8 sm:p-10 group hover:bg-white/[0.03] transition-all duration-300 h-full">
                                    <span className="material-symbols-outlined text-3xl text-white/15 group-hover:text-white/40 transition-colors mb-6 block">
                                        {benefit.icon}
                                    </span>
                                    <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 sm:py-32 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col items-start gap-4 mb-16 sm:mb-20">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1">
                                004 — Team Voices
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter">
                                Hear from
                                <br />
                                <span className="text-white/30">the team</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-px bg-white/10">
                        {testimonials.map((t, index) => (
                            <Reveal key={t.name} delay={0.15 * index}>
                                <div className="bg-monolith-bg p-8 sm:p-10 h-full flex flex-col">
                                    <span className="material-symbols-outlined text-2xl text-white/10 mb-6">format_quote</span>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed flex-1 mb-8">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="border-t border-white/10 pt-6">
                                        <div className="text-sm font-medium">{t.name}</div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mt-1">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-32 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <span className="material-symbols-outlined text-5xl sm:text-7xl text-white/10 mb-8 block">
                            work
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tighter mb-6">
                            Ready to build<br />
                            <span className="text-white/30">what&apos;s next?</span>
                        </h2>
                        <p className="text-white/50 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                            We&apos;re looking for people who ship, learn fast, and care deeply about the craft of growth marketing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full max-w-md mx-auto">
                            <Link href="/careers/jobs" className="w-full sm:w-1/2 px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold text-sm uppercase tracking-widest transition-all border border-white text-center">
                                Explore Jobs
                            </Link>
                            <a href="/#contact" className="w-full sm:w-1/2 px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold text-sm uppercase tracking-widest transition-all border border-white border-t-0 sm:border-t sm:border-l-0 text-center">
                                Contact Us
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
