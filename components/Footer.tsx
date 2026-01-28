"use client";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10 bg-[#121212]">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-lg">view_in_ar</span>
                    <span className="text-sm font-bold tracking-widest uppercase">ScaleHauz</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-mono text-xs uppercase text-white/40">
                    <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="#results" className="hover:text-white transition-colors">Results</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
                <div className="text-xs font-mono text-white/20">
                    © {new Date().getFullYear()} ScaleHauz
                </div>
            </div>
        </footer>
    );
};
