"use client";

import Link from "next/link";

export const FooterPro = () => {
    return (
        <footer className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-white/10 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
                    <div className="col-span-2 sm:col-span-2 md:col-span-2">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <span className="material-symbols-outlined text-white text-lg sm:text-xl">view_in_ar</span>
                            <span className="text-base sm:text-lg font-bold tracking-tight">ScaleHauz</span>
                        </div>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-md mb-4 sm:mb-6">
                            We help ambitious brands scale through strategic marketing, creative design, and data-driven campaigns.
                        </p>
                        <a href="mailto:hello@scalehauz.com" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
                            hello@scalehauz.com
                        </a>
                    </div>

                    <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Services</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/50">
                            <li><Link href="#services" className="hover:text-white active:text-white transition-colors">SEO</Link></li>
                            <li><Link href="#services" className="hover:text-white active:text-white transition-colors">Paid Advertising</Link></li>
                            <li><Link href="#services" className="hover:text-white active:text-white transition-colors">Social Media</Link></li>
                            <li><Link href="#services" className="hover:text-white active:text-white transition-colors">Email Marketing</Link></li>
                            <li><Link href="#services" className="hover:text-white active:text-white transition-colors">Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Company</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/50">
                            <li><Link href="#why-us" className="hover:text-white active:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#results" className="hover:text-white active:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="#faq" className="hover:text-white active:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#contact" className="hover:text-white active:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/10">
                    <div className="text-[10px] sm:text-xs text-white/30 order-2 sm:order-1">
                        © {new Date().getFullYear()} ScaleHauz. All rights reserved.
                    </div>
                    <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/30 order-1 sm:order-2">
                        <Link href="#" className="hover:text-white/60 active:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/60 active:text-white/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
