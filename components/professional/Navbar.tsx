"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export const NavbarPro = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
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
            <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-fit pointer-events-none">
                <nav
                    className={clsx(
                        "flex items-center justify-between md:justify-start gap-4 md:gap-8 px-4 md:px-6 py-3 rounded-full border border-white/10 shadow-2xl transition-all duration-300 pointer-events-auto",
                        scrolled ? "bg-[#121212]/95 backdrop-blur-md" : "bg-[#121212]/80 backdrop-blur-sm"
                    )}
                >
                    <Link href="/professional" className="flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-white text-xl">view_in_ar</span>
                        <span className="font-bold tracking-tight text-sm">SCALEHAUZ</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 border-l border-white/20 pl-6">
                        <Link href="#services" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                            Services
                        </Link>
                        <Link href="#why-us" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                            Why Us
                        </Link>
                        <Link href="#results" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                            Results
                        </Link>
                        <Link href="#faq" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                            FAQ
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block border-l border-white/20 pl-6">
                        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
                            Get Started
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
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="absolute top-20 left-4 right-4 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <nav className="flex flex-col gap-1">
                                <Link
                                    href="#services"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Services</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="#industries"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Industries</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="#why-us"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Why Us</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="#process"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Process</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="#results"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                                >
                                    <span className="text-lg font-medium">Results</span>
                                    <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                                </Link>
                                <Link
                                    href="#faq"
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
                                Get Started
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
