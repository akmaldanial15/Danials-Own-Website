"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-zinc-950/20" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {"DANIAL'S"}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-350 font-semibold border border-zinc-700/50">
                WEB & SYSTEMS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-zinc-900 text-purple-400 border border-purple-500/20"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
              }`}
            >
              {t("navHome")}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "bg-zinc-900 text-purple-400 border border-purple-500/20"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                }`}
              >
                {t("navServices")}
                <svg 
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800/80 p-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-200 origin-top-left opacity-0 scale-95 -translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible z-50">
                <Link
                  href="/services/fast-track"
                  className={`block px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/fast-track")
                      ? "bg-gradient-to-r from-purple-950/40 to-indigo-950/20 text-purple-300 border-l-2 border-purple-500"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 hover:pl-5"
                  }`}
                >
                  {t("navFastTrack")}
                </Link>
                <Link
                  href="/services/custom"
                  className={`block px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/custom")
                      ? "bg-gradient-to-r from-purple-950/40 to-indigo-950/20 text-purple-300 border-l-2 border-purple-500"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 hover:pl-5"
                  }`}
                >
                  {t("navCustom")}
                </Link>
                <div className="border-t border-zinc-900/60 my-1"></div>
                <Link
                  href="/services/website-fix"
                  className={`block px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/website-fix")
                      ? "bg-gradient-to-r from-purple-950/40 to-indigo-950/20 text-purple-300 border-l-2 border-purple-500"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 hover:pl-5"
                  }`}
                >
                  {t("navWebsiteFix")}
                </Link>
                <Link
                  href="/services/systems-apps"
                  className={`block px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive("/services/systems-apps")
                      ? "bg-gradient-to-r from-purple-950/40 to-indigo-950/20 text-purple-300 border-l-2 border-purple-500"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 hover:pl-5"
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
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-zinc-900 text-purple-400 border border-purple-500/20"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions: Switch Language & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggler */}
            <button
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="px-3 py-1.5 rounded-lg text-xs font-bold border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-150 hover:bg-zinc-900 transition-all uppercase tracking-wider cursor-pointer"
            >
              {language === "ms" ? "EN" : "BM"}
            </button>

            <Link
              href="/calculator"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300"
            >
              {t("navButton")}
            </Link>
          </div>

          {/* Mobile Menu & Language Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language Switcher for Mobile */}
            <button
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 uppercase cursor-pointer"
            >
              {language === "ms" ? "EN" : "BM"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              title="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-screen border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-lg" : "max-h-0"
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {/* Home Link */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
              isActive("/")
                ? "bg-zinc-900 text-purple-400 border-l-2 border-purple-500"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
            }`}
          >
            {t("navHome")}
          </Link>

          {/* Services Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-all text-left ${
                pathname.startsWith("/services")
                  ? "bg-zinc-900 text-purple-400 border-l-2 border-purple-500"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              <span>{t("navServices")}</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`pl-4 space-y-1 transition-all overflow-hidden ${servicesDropdown ? "max-h-60" : "max-h-0"}`}>
              <Link
                href="/services/fast-track"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/services/fast-track") ? "text-purple-400 bg-zinc-900/30" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {t("navFastTrack")}
              </Link>
              <Link
                href="/services/custom"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/services/custom") ? "text-purple-400 bg-zinc-900/30" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {t("navCustom")}
              </Link>
              <Link
                href="/services/website-fix"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/services/website-fix") ? "text-purple-400 bg-zinc-900/30" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {t("navWebsiteFix")}
              </Link>
              <Link
                href="/services/systems-apps"
                onClick={() => { setIsOpen(false); setServicesDropdown(false); }}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/services/systems-apps") ? "text-purple-400 bg-zinc-900/30" : "text-zinc-400 hover:text-zinc-100"
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
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                isActive(link.href)
                  ? "bg-zinc-900 text-purple-400 border-l-2 border-purple-500"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 pb-2 px-3">
            <Link
              href="/calculator"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center rounded-xl text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
            >
              {t("navButton")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
