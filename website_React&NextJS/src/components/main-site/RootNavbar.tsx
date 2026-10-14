"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";

export default function RootNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useMainSiteLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: t("navHome"), href: "/" },
    { label: t("navGallery"), href: "/gallery" },
    { label: t("navPricing"), href: "/pricing" },
    { label: t("navCalculator"), href: "/calculator" },
    { label: t("navContact"), href: "/contact" },
  ];

  const serviceSublinks = [
    {
      title: t("navWebsites"),
      desc: language === "ms" ? "Landing page & laman korporat" : "Landing pages & business profiles",
      href: "/services/websites",
      badge: "RM79+",
    },
    {
      title: t("navDesign"),
      desc: language === "ms" ? "Design Express (RM5) & Custom" : "Design Express (RM5) & Custom",
      href: "/services/design",
      badge: "RM5+",
    },
    {
      title: t("navWebsiteFix"),
      desc: language === "ms" ? "Baiki paparan, butang & SSL" : "Fix layout, buttons & SSL setup",
      href: "/services/website-fix",
      badge: "RM29+",
    },
    {
      title: t("navSystemsApps"),
      desc: language === "ms" ? "Database, admin & Android sync" : "Database, admin & Android companion",
      href: "/services/systems-apps",
      badge: "RM499+",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#070A12]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="ms-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label="Danial's Web & Systems Homepage"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 transition-transform group-hover:scale-105 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.3)] bg-[#0E1424] flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="36px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[16px] tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  DANIAL&apos;S
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 leading-none">
                WEB • APPS • SYSTEMS • DESIGN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive("/") && pathname === "/"
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("navHome")}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>{t("navServices")}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 top-full pt-3 w-88 z-50 animate-fadeIn"
                >
                  <div className="bg-[#0E1424]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <div className="px-3 py-2 border-b border-white/5 mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        {t("navServices")}
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[11px] font-bold text-cyan-400 hover:underline"
                      >
                        {language === "ms" ? "Semua Servis →" : "View All →"}
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {serviceSublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-start justify-between p-2.5 rounded-xl transition-all group ${
                            pathname === sub.href
                              ? "bg-cyan-500/15 border border-cyan-500/30 text-white"
                              : "hover:bg-white/5 text-zinc-300 hover:text-white"
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs group-hover:text-cyan-300 transition-colors">
                              {sub.title}
                            </div>
                            <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                              {sub.desc}
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0 ml-2">
                            {sub.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive("/gallery")
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("navGallery")}
            </Link>

            <Link
              href="/pricing"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive("/pricing")
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("navPricing")}
            </Link>

            <Link
              href="/calculator"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive("/calculator")
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("navCalculator")}
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive("/contact")
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("navContact")}
            </Link>
          </nav>

          {/* Right Header Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-400">
              <button
                type="button"
                onClick={() => setLanguage("ms")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "ms"
                    ? "bg-cyan-500 text-black font-extrabold shadow-sm"
                    : "hover:text-white"
                }`}
                aria-pressed={language === "ms"}
              >
                BM
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-cyan-500 text-black font-extrabold shadow-sm"
                    : "hover:text-white"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="ms-btn-primary text-xs tracking-wide uppercase font-extrabold"
            >
              {t("btnDiscuss")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-300"
              aria-label="Tukar Bahasa"
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-zinc-300 hover:text-white border border-white/10 focus:outline-hidden cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A12]/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-3 pb-8 animate-fadeIn">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive("/") && pathname === "/" ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {t("navHome")}
            </Link>

            <div className="py-2">
              <div className="px-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                {t("navServices")}
              </div>
              <div className="pl-2 space-y-1">
                {serviceSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:bg-white/5"
                  >
                    <span>{sub.title}</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                      {sub.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive("/gallery") ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {t("navGallery")}
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive("/pricing") ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {t("navPricing")}
            </Link>

            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive("/calculator") ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {t("navCalculator")}
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive("/contact") ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {t("navContact")}
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 mt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="ms-btn-primary w-full justify-center text-xs"
            >
              {t("btnDiscuss")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
