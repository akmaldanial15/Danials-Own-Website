"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLinks = [
    { name: t("navGallery"), href: "/gallery" },
    { name: t("navCalculator"), href: "/calculator" },
    { name: t("navContact"), href: "/contact" }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`fixed z-50 transition-all duration-700 w-full ${
        scrolled 
          ? "top-0 left-0 bg-zinc-950/85 backdrop-blur-lg border-b border-zinc-800/40 shadow-lg shadow-zinc-950/40 lg:top-3 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-2.5rem)] lg:max-w-6xl lg:rounded-full lg:border lg:border-zinc-800/50 lg:px-4" 
          : "top-0 left-0 bg-transparent border-b border-transparent lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-none lg:rounded-none lg:border lg:border-transparent lg:px-0"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex items-center justify-between transition-all duration-700 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Danial's Web & Systems Logo"
                  fill
                  sizes="(max-width: 768px) 32px, 36px"
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {"DANIAL'S"}
              </span>
              <div className="h-4 w-[1px] bg-zinc-850 group-hover:bg-zinc-700 transition-colors hidden sm:block" />
              <span className="text-[9px] tracking-[0.2em] text-zinc-400 font-bold uppercase hidden sm:block">
                WEB & SYSTEMS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Home Link */}
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 group/link ${
                isActive("/")
                  ? "text-purple-400"
                  : "text-zinc-400 hover:text-zinc-150"
              }`}
            >
              {t("navHome")}
              <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                isActive("/") ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover/link:opacity-65 group-hover/link:scale-100"
              }`} />
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-purple-400"
                    : "text-zinc-400 hover:text-zinc-150"
                }`}
              >
                {t("navServices")}
                <svg 
                  className="w-3 h-3 transition-transform duration-350 group-hover:rotate-180 text-zinc-500 group-hover:text-zinc-350" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  pathname.startsWith("/services") ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-65 group-hover:scale-100"
                }`} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2.5 w-64 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/60 p-2 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 origin-top-left opacity-0 scale-95 -translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible z-50">
                <Link
                  href="/services/fast-track"
                  className={`block px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/fast-track")
                      ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500 pl-5.5"
                      : "text-zinc-450 hover:text-zinc-150 hover:bg-zinc-900/50 hover:pl-5.5"
                  }`}
                >
                  {t("navFastTrack")}
                </Link>
                <Link
                  href="/services/detailed"
                  className={`block px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/detailed")
                      ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500 pl-5.5"
                      : "text-zinc-455 hover:text-zinc-150 hover:bg-zinc-900/50 hover:pl-5.5"
                  }`}
                >
                  {t("navCustom")}
                </Link>
                <div className="border-t border-zinc-900/60 my-1.5 mx-2"></div>
                <Link
                  href="/services/website-fix"
                  className={`block px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/website-fix")
                      ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500 pl-5.5"
                      : "text-zinc-455 hover:text-zinc-150 hover:bg-zinc-900/50 hover:pl-5.5"
                  }`}
                >
                  {t("navWebsiteFix")}
                </Link>
                <Link
                  href="/services/systems-apps"
                  className={`block px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/systems-apps")
                      ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500 pl-5.5"
                      : "text-zinc-455 hover:text-zinc-150 hover:bg-zinc-900/50 hover:pl-5.5"
                  }`}
                >
                  {t("navSystemsApps")}
                </Link>
              </div>
            </div>

            {/* Other Navigation Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 group/link ${
                  isActive(link.href)
                    ? "text-purple-400"
                    : "text-zinc-400 hover:text-zinc-150"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  isActive(link.href) ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover/link:opacity-65 group-hover/link:scale-100"
                }`} />
              </Link>
            ))}
          </div>

          {/* Actions: Switch Language & CTA */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Language Toggler */}
            <button
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="relative flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/80 transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span className={language === "ms" ? "text-purple-400 font-extrabold" : ""}>BM</span>
              <span className="mx-1.5 text-zinc-700 font-normal">/</span>
              <span className={language === "en" ? "text-purple-400 font-extrabold" : ""}>EN</span>
            </button>

            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-20 blur-[2px] group-hover:opacity-85 transition duration-500" />
              <Link
                href="/calculator"
                className="relative block px-5 py-2 rounded-full text-xs font-bold bg-zinc-950 text-zinc-250 border border-zinc-800/85 hover:border-zinc-700 hover:text-purple-400 transition duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              >
                {t("navButton")}
              </Link>
            </div>
          </div>

          {/* Mobile Menu & Language Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Language Switcher for Mobile */}
            <button
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="relative flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold border border-zinc-850 bg-zinc-950 text-zinc-450 hover:text-zinc-200 transition-all cursor-pointer"
            >
              <span className={language === "ms" ? "text-purple-400" : ""}>BM</span>
              <span className="mx-1 text-zinc-700">/</span>
              <span className={language === "en" ? "text-purple-400" : ""}>EN</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-150 hover:bg-zinc-900/50 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              title="Toggle Menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-screen border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-lg" : "max-h-0"
      }`}>
        <div className="px-3 pt-2 pb-5 space-y-1 sm:px-4">
          {/* Home Link */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
              isActive("/")
                ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-500 pl-5"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
            }`}
          >
            {t("navHome")}
          </Link>

          {/* Services Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all text-left ${
                pathname.startsWith("/services")
                  ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-500 pl-5"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
              }`}
            >
              <span>{t("navServices")}</span>
              <svg className={`w-4 h-4 transition-transform duration-250 ${servicesDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`pl-4 pr-2 space-y-1 transition-all overflow-hidden ${servicesDropdown ? "max-h-60" : "max-h-0"}`}>
              <Link
                href="/services/fast-track"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive("/services/fast-track") 
                    ? "text-purple-400 bg-purple-500/5 font-semibold" 
                    : "text-zinc-450 hover:text-zinc-200 hover:bg-zinc-900/20"
                }`}
              >
                {t("navFastTrack")}
              </Link>
              <Link
                href="/services/detailed"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive("/services/detailed") 
                    ? "text-purple-400 bg-purple-500/5 font-semibold" 
                    : "text-zinc-450 hover:text-zinc-200 hover:bg-zinc-900/20"
                }`}
              >
                {t("navCustom")}
              </Link>
              <Link
                href="/services/website-fix"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive("/services/website-fix") 
                    ? "text-purple-400 bg-purple-500/5 font-semibold" 
                    : "text-zinc-450 hover:text-zinc-200 hover:bg-zinc-900/20"
                }`}
              >
                {t("navWebsiteFix")}
              </Link>
              <Link
                href="/services/systems-apps"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive("/services/systems-apps") 
                    ? "text-purple-400 bg-purple-500/5 font-semibold" 
                    : "text-zinc-450 hover:text-zinc-200 hover:bg-zinc-900/20"
                }`}
              >
                {t("navSystemsApps")}
              </Link>
            </div>
          </div>

          {/* Other Mobile Links */}
          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive(link.href)
                  ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-500 pl-5"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 pb-2 px-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-20 blur-[2px]" />
              <Link
                href="/calculator"
                onClick={() => setIsOpen(false)}
                className="relative block w-full py-3 text-center rounded-xl text-sm font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-zinc-950 border-none transition duration-300 shadow-[0_3px_12px_rgba(0,0,0,0.4)]"
              >
                {t("navButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
