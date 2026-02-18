import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 md:py-16 lg:py-24 border-t border-white/5 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#ffd700]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
                    {/* Logo and Description */}
                    <div className="sm:col-span-2 lg:col-span-5 space-y-6 md:space-y-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 gradient-bg rounded-xl flex items-center justify-center font-bold text-white italic text-lg md:text-xl shadow-lg shadow-[#ffd700]/20">
                                Q
                            </div>
                            <span className="text-xl md:text-2xl font-bold tracking-tight">
                                Qubi<span className="font-light">Ride</span>
                            </span>
                        </div>
                        <p className="text-white/50 max-w-sm leading-relaxed text-base md:text-lg font-light">
                            Redefining urban mobility with premium, safe, and reliable transportation. Built for the modern traveler who values time and comfort.
                        </p>
                        <div className="flex items-center gap-3 md:gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffd700] hover:text-black transition-all"
                                aria-label="Twitter"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffd700] hover:text-black transition-all"
                                aria-label="Instagram"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffd700] hover:text-black transition-all"
                                aria-label="LinkedIn"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 lg:col-start-9">
                        <h4 className="font-bold mb-6 md:mb-8 uppercase text-xs md:text-sm tracking-widest text-[#ffd700]">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li>
                                <a
                                    href="/#about"
                                    className="text-white/40 hover:text-[#ffd700] transition-colors flex items-center group text-sm md:text-base"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 -ml-6 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#features"
                                    className="text-white/40 hover:text-[#ffd700] transition-colors flex items-center group text-sm md:text-base"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 -ml-6 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#airport-ride"
                                    className="text-white/40 hover:text-[#ffd700] transition-colors flex items-center group text-sm md:text-base"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 -ml-6 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Airport Ride
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#how-it-works"
                                    className="text-white/40 hover:text-[#ffd700] transition-colors flex items-center group text-sm md:text-base"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 -ml-6 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    How it works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#download"
                                    className="text-white/40 hover:text-[#ffd700] transition-colors flex items-center group text-sm md:text-base"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 -ml-6 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    <div className="text-white/20 text-xs md:text-sm font-medium text-center md:text-left">
                        © 2026 Qubi Ride. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 md:gap-8">
                        <a
                            href="#"
                            className="text-white/20 hover:text-white text-xs uppercase tracking-widest transition-colors whitespace-nowrap"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-white/20 hover:text-white text-xs uppercase tracking-widest transition-colors whitespace-nowrap"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
