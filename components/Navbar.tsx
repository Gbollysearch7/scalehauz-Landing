"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
    { slug: "ecommerce-retail", name: "E-commerce & Retail", icon: "storefront" },
    { slug: "saas-technology", name: "SaaS & Technology", icon: "cloud" },
    { slug: "professional-services", name: "Professional Services", icon: "work" },
    { slug: "healthcare-wellness", name: "Healthcare & Wellness", icon: "health_and_safety" },
    { slug: "real-estate", name: "Real Estate", icon: "apartment" },
    { slug: "finance-fintech", name: "Finance & Fintech", icon: "account_balance" },
    { slug: "education-edtech", name: "Education & EdTech", icon: "school" },
    { slug: "hospitality-travel", name: "Hospitality & Travel", icon: "flight" },
    { slug: "manufacturing-b2b", name: "Manufacturing & B2B", icon: "precision_manufacturing" },
    { slug: "nonprofits-ngos", name: "Non-profits & NGOs", icon: "volunteer_activism" },
];

const services = [
    { id: "paid-media", name: "Paid Media", icon: "campaign" },
    { id: "seo", name: "SEO", icon: "search" },
    { id: "content", name: "Content Strategy", icon: "edit_note" },
    { id: "email", name: "Email & Lifecycle", icon: "mail" },
    { id: "analytics", name: "Analytics", icon: "analytics" },
    { id: "creative", name: "Creative Production", icon: "brush" },
    { id: "social-media", name: "Social Media", icon: "share" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const handleDropdownEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleDropdownLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-fit pointer-events-none px-0">
                <nav
                    className={clsx(
                        "pill-nav flex items-center justify-between md:justify-start gap-4 md:gap-8 shadow-2xl transition-all duration-300 pointer-events-auto px-4 md:px-6 py-3",
                        scrolled
                            ? "bg-black/95 backdrop-blur-xl border-white/10"
                            : "bg-opacity-85"
                    )}
                >
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-white text-xl group-hover:scale-110 transition-transform">view_in_ar</span>
                        <span className="font-bold tracking-tight text-sm">SCALE HAUZ</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 border-l border-white/20 pl-6" ref={dropdownRef}>
                        {/* Services with dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleDropdownEnter("services")}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link href="/services" className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                                Services
                                <span className="material-symbols-outlined text-[14px] text-white/40">expand_more</span>
                            </Link>
                            <AnimatePresence>
                                {activeDropdown === "services" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-[#141414] border border-white/10 shadow-2xl p-2"
                                        onMouseEnter={() => handleDropdownEnter("services")}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <div className="px-3 py-2 mb-1 border-b border-white/5">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">Our Services</span>
                                        </div>
                                        {services.map((service) => (
                                            <Link
                                                key={service.id}
                                                href={`/services/${service.id}`}
                                                onClick={handleLinkClick}
                                                className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 transition-colors group"
                                            >
                                                <span className="material-symbols-outlined text-lg text-white/30 group-hover:text-white/60 transition-colors">
                                                    {service.icon}
                                                </span>
                                                <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                                                    {service.name}
                                                </span>
                                            </Link>
                                        ))}
                                        <div className="border-t border-white/5 mt-1 pt-1">
                                            <Link
                                                href="/services"
                                                onClick={handleLinkClick}
                                                className="flex items-center gap-2 px-3 py-2.5 hover:bg-white/5 transition-colors group"
                                            >
                                                <span className="text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">
                                                    View All Services
                                                </span>
                                                <span className="material-symbols-outlined text-sm text-white/30 group-hover:translate-x-1 transition-all">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Industries with dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleDropdownEnter("industries")}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                                Industries
                                <span className="material-symbols-outlined text-[14px] text-white/40">expand_more</span>
                            </button>
                            <AnimatePresence>
                                {activeDropdown === "industries" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[300px] bg-[#141414] border border-white/10 shadow-2xl p-2"
                                        onMouseEnter={() => handleDropdownEnter("industries")}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <div className="px-3 py-2 mb-1 border-b border-white/5">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">Industries We Serve</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-0.5">
                                            {industries.map((industry) => (
                                                <Link
                                                    key={industry.slug}
                                                    href={`/industries/${industry.slug}`}
                                                    onClick={handleLinkClick}
                                                    className="flex items-center gap-2 px-3 py-2.5 hover:bg-white/5 transition-colors group"
                                                >
                                                    <span className="material-symbols-outlined text-base text-white/30 group-hover:text-white/60 transition-colors">
                                                        {industry.icon}
                                                    </span>
                                                    <span className="text-[11px] text-white/60 group-hover:text-white transition-colors leading-tight">
                                                        {industry.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/work" className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                            Work
                        </Link>
                        <Link href="/pricing" className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                            Pricing
                        </Link>
                        <Link href="/enterprise" className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                            Enterprise
                        </Link>
                        <Link href="/careers" className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-widest transition-colors">
                            Careers
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block border-l border-white/20 pl-6">
                        <a href="#contact" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors uppercase tracking-wide">
                            Start
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-white text-2xl">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="absolute top-20 left-4 right-4 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
                        >
                            <nav className="flex flex-col gap-1">
                                <Link
                                    href="/services"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Services</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>

                                {/* Mobile Services submenu */}
                                <div className="grid grid-cols-2 gap-2 py-3 border-b border-white/10">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.id}`}
                                            onClick={handleLinkClick}
                                            className="flex items-center gap-2 py-2 px-3 bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-base text-white/40">{service.icon}</span>
                                            <span className="text-xs text-white/60">{service.name}</span>
                                        </Link>
                                    ))}
                                </div>

                                {/* Industries header */}
                                <div className="pt-3 pb-2">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Industries</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
                                    {industries.map((industry) => (
                                        <Link
                                            key={industry.slug}
                                            href={`/industries/${industry.slug}`}
                                            onClick={handleLinkClick}
                                            className="flex items-center gap-2 py-2 px-3 bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-base text-white/40">{industry.icon}</span>
                                            <span className="text-xs text-white/60">{industry.name}</span>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/work"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Work</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="/pricing"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Pricing</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="/enterprise"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Enterprise</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="/careers"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Careers</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="/#faq"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">FAQ</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                            </nav>

                            <a
                                href="#contact"
                                onClick={handleLinkClick}
                                className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-full font-bold text-sm uppercase tracking-widest"
                            >
                                Start Project
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
