"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

interface Job {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
}

const departments = [
    "All",
    "Growth & Strategy",
    "Paid Media",
    "SEO & Content",
    "Creative",
    "Engineering",
    "Operations",
];

const APPLY_EMAIL = "scalehauz@gmail.com";

const jobs: Job[] = [
    {
        id: "senior-growth-strategist",
        title: "Senior Growth Strategist",
        department: "Growth & Strategy",
        type: "Full-time",
        location: "Remote",
        description: "You'll own end-to-end growth strategy for a portfolio of high-growth clients — from acquisition to retention. This means building full-funnel systems across paid, organic, email, and CRO that compound month over month. You need 4+ years in growth or performance marketing, fluency in data, and the ability to present strategy to founders and CMOs. If you've scaled a brand past $1M/mo in revenue, we want to talk.",
    },
    {
        id: "paid-media-manager",
        title: "Paid Media Manager",
        department: "Paid Media",
        type: "Full-time",
        location: "Remote",
        description: "You'll manage six- and seven-figure monthly ad budgets across Meta, Google, and TikTok for e-commerce and SaaS clients. Your day is split between launching new creatives, analyzing performance data, and scaling what works. We need someone who thinks in ROAS and CAC, not vanity metrics. 3+ years running paid campaigns with proven results required. Bonus if you've worked agency-side and can juggle multiple accounts without dropping the ball.",
    },
    {
        id: "performance-creative-lead",
        title: "Performance Creative Lead",
        department: "Creative",
        type: "Full-time",
        location: "Remote",
        description: "You sit at the intersection of creative and data. Your job is to concept, direct, and produce ad creative that actually converts — not just looks good in a portfolio. You'll build creative testing frameworks, brief designers and editors, and analyze results to inform the next round. Strong portfolio of direct-response ads required. Experience with UGC, static, and video formats across Meta and TikTok. 3+ years in performance creative or a growth-focused creative role.",
    },
    {
        id: "seo-content-strategist",
        title: "SEO & Content Strategist",
        department: "SEO & Content",
        type: "Full-time",
        location: "Remote",
        description: "You'll build organic growth engines from scratch — technical audits, keyword architecture, content calendars, and programmatic SEO strategies that drive compounding traffic. You should be comfortable in Ahrefs, Screaming Frog, and Google Search Console. We need someone who can write a content brief as well as they can read a crawl report. 3+ years in SEO with measurable traffic growth results. Agency experience preferred.",
    },
    {
        id: "junior-media-buyer",
        title: "Junior Media Buyer",
        department: "Paid Media",
        type: "Full-time",
        location: "Remote",
        description: "This is a launchpad role for sharp operators with 1–2 years of hands-on paid media experience who want to level up fast. You'll work alongside senior media buyers, managing campaign builds, daily optimizations, and reporting across Meta and Google Ads. You should know your way around Ads Manager, understand basic attribution, and be hungry to learn. We'll give you the reps, the mentorship, and the budget to grow into a senior buyer.",
    },
    {
        id: "growth-engineer",
        title: "Growth Engineer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
        description: "You'll build the internal tools, automation pipelines, and data infrastructure that powers everything we do — from automated reporting dashboards to AI-driven campaign optimization workflows. Proficiency in Python, SQL, and REST APIs is required. Experience with marketing APIs (Meta, Google, Shopify), data warehousing, and workflow automation tools like Make or n8n is a strong plus. This is not a traditional dev role — you need to think like a marketer and build like an engineer.",
    },
    {
        id: "email-lifecycle-specialist",
        title: "Email & Lifecycle Specialist",
        department: "Growth & Strategy",
        type: "Full-time",
        location: "Remote",
        description: "You'll architect lifecycle programs that turn one-time buyers into repeat customers and trial users into paying subscribers. This means building flows, segmenting audiences, writing copy, and obsessing over open rates and revenue-per-recipient. Deep experience with Klaviyo, HubSpot, or equivalent platforms required. You should be able to map a full customer journey and know exactly where to intervene with the right message. 2+ years in email/lifecycle marketing.",
    },
    {
        id: "analytics-lead",
        title: "Analytics & Attribution Lead",
        department: "Growth & Strategy",
        type: "Full-time",
        location: "Remote",
        description: "You'll build the measurement layer that makes everything else possible — attribution models, cross-channel dashboards, and reporting frameworks that turn raw data into clear decisions. Proficiency in GA4, Looker Studio, and SQL is required. Experience with server-side tracking, MMM, or incrementality testing is a major plus. You'll work directly with strategists and media buyers to answer the question that matters most: what's actually working?",
    },
    {
        id: "motion-designer",
        title: "Motion Designer",
        department: "Creative",
        type: "Contract",
        location: "Remote",
        description: "You'll create scroll-stopping video and motion content for paid social — think UGC-style edits, product demos, testimonial cutdowns, and animated explainers optimized for Meta and TikTok. Proficiency in After Effects and Premiere Pro is required. You need a portfolio of direct-response creative that has actually run as ads, not just concept work. Bonus if you can shoot and edit independently. This is a contract role with potential to go full-time based on output and fit.",
    },
    {
        id: "project-coordinator",
        title: "Project Coordinator",
        department: "Operations",
        type: "Full-time",
        location: "Remote",
        description: "You keep the engine running. You'll manage timelines, resources, and client communication across multiple active engagements — making sure deliverables ship on time and nothing falls through the cracks. Experience with project management tools like Asana, Monday, or ClickUp is required. You should be hyper-organized, a clear communicator, and comfortable working across time zones. 2+ years in a coordination or project management role, ideally in an agency or marketing environment.",
    },
];

export default function JobsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredJobs = activeFilter === "All"
        ? jobs
        : jobs.filter((job) => job.department === activeFilter);

    const departmentCounts = departments.reduce((acc, dept) => {
        acc[dept] = dept === "All" ? jobs.length : jobs.filter((j) => j.department === dept).length;
        return acc;
    }, {} as Record<string, number>);

    return (
        <main className="bg-monolith-bg text-monolith-fg min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-white/3 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8 font-mono text-xs uppercase tracking-[0.2em]"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Careers
                        </Link>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6">
                            OPEN<br />
                            <span className="text-white/30">POSITIONS</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.35}>
                        <p className="max-w-lg text-white/50 text-base sm:text-lg leading-relaxed font-mono">
                            {jobs.length} roles across {departments.length - 1} teams. All remote. All high-impact.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Filters + Jobs */}
            <section className="px-4 sm:px-6 pb-20 sm:pb-32">
                <div className="max-w-7xl mx-auto">
                    {/* Department Filters */}
                    <Reveal delay={0.4}>
                        <div className="flex flex-wrap gap-2 mb-12 sm:mb-16 border-b border-white/10 pb-8">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveFilter(dept)}
                                    className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] border transition-all duration-200 ${
                                        activeFilter === dept
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white/80"
                                    }`}
                                >
                                    {dept}
                                    <span className={`ml-2 ${activeFilter === dept ? "text-black/50" : "text-white/25"}`}>
                                        {departmentCounts[dept]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {/* Job Listings */}
                    <div className="space-y-px">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-px"
                            >
                                {filteredJobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <div className="group border border-white/10 bg-monolith-bg hover:bg-white/[0.03] transition-all duration-300">
                                            <div className="p-6 sm:p-8">
                                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 border border-white/10 px-2 py-0.5">
                                                                {job.department}
                                                            </span>
                                                            <span className="font-mono text-[10px] text-white/20">
                                                                {job.type}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-white transition-colors">
                                                            {job.title}
                                                        </h3>
                                                        <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
                                                            {job.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                                                        <div className="flex items-center gap-1.5 text-white/30">
                                                            <span className="material-symbols-outlined text-base">public</span>
                                                            <span className="font-mono text-xs">{job.location}</span>
                                                        </div>
                                                        <a
                                                            href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(job.title)}&body=${encodeURIComponent(`Hi ScaleHauz,\n\nI'm applying for the ${job.title} position.\n\nPlease find my CV attached.\n\nBest regards`)}`}
                                                            className="flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white hover:bg-white hover:text-black text-xs font-bold uppercase tracking-widest transition-all duration-200 group/btn"
                                                        >
                                                            Apply
                                                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-0.5 transition-transform">
                                                                arrow_forward
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredJobs.length === 0 && (
                            <div className="text-center py-20">
                                <span className="material-symbols-outlined text-4xl text-white/10 mb-4 block">search_off</span>
                                <p className="text-white/30 font-mono text-sm">No open positions in this department right now.</p>
                                <button
                                    onClick={() => setActiveFilter("All")}
                                    className="mt-4 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white underline underline-offset-4 transition-colors"
                                >
                                    View all positions
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                            Showing {filteredJobs.length} of {jobs.length} positions
                        </span>
                    </div>
                </div>
            </section>

            {/* Don't see your role? */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <span className="material-symbols-outlined text-4xl sm:text-5xl text-white/10 mb-6 block">
                            mail
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tighter mb-4">
                            Don&apos;t see your role?
                        </h2>
                        <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                            We&apos;re always looking for exceptional people. Send us your portfolio
                            and tell us what you&apos;d build.
                        </p>
                        <a
                            href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent("General Application — ScaleHauz")}&body=${encodeURIComponent("Hi ScaleHauz,\n\nI'd love to explore opportunities on your team.\n\nPlease find my CV attached.\n\nBest regards")}`}
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black text-sm font-bold uppercase tracking-widest transition-all duration-200"
                        >
                            Get in Touch
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </a>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
