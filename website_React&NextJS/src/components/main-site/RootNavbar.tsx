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
          ? "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#DDE1DA] shadow-xs"
          : "bg-[#F7F6F2] border-b border-[#EBEFE8]"
      }`}
    >
      <div className="ms-container">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label="Danial's Web & Systems Homepage"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] sm:text-base tracking-tight text-[#18201D] group-hover:text-[#2457E6] transition-colors leading-tight">
                DANIAL&apos;S
              </span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-[#52605A] leading-none">
                WEB & SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive("/") && pathname === "/"
                  ? "text-[#2457E6] bg-[#EEF2FF]"
                  : "text-[#52605A] hover:text-[#18201D] hover:bg-[#EBEFE8]"
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
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-[#2457E6] bg-[#EEF2FF]"
                    : "text-[#52605A] hover:text-[#18201D] hover:bg-[#EBEFE8]"
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
                  className="absolute left-0 top-full pt-2 w-80 z-50 animate-fadeIn"
                >
                  <div className="bg-[#FFFFFF] border border-[#DDE1DA] rounded-xl p-2 shadow-xl">
                    <div className="px-3 py-2 border-b border-[#F0EFEA] mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#52605A]">
                        {t("navServices")}
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[11px] font-semibold text-[#2457E6] hover:underline"
                      >
                        {language === "ms" ? "Semua Servis →" : "All Services →"}
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {serviceSublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start justify-between p-2.5 rounded-lg hover:bg-[#F7F6F2] transition-colors group"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#18201D] group-hover:text-[#2457E6]">
                              {sub.title}
                            </div>
                            <div className="text-[11px] text-[#52605A] mt-0.5">{sub.desc}</div>
                          </div>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EEF2FF] text-[#2457E6] border border-[#D5E0FF]">
                            {sub.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-[#2457E6] bg-[#EEF2FF]"
                    : "text-[#52605A] hover:text-[#18201D] hover:bg-[#EBEFE8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#FFFFFF] border border-[#DDE1DA] rounded-full p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage("ms")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "ms"
                    ? "bg-[#2457E6] text-white shadow-xs"
                    : "text-[#52605A] hover:text-[#18201D]"
                }`}
              >
                BM
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[#2457E6] text-white shadow-xs"
                    : "text-[#52605A] hover:text-[#18201D]"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="ms-btn-primary text-xs py-2.5 px-4.5 rounded-full"
            >
              {t("navCtaBtn")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Toggle */}
            <button
              type="button"
              onClick={() => setLanguage(language === "ms" ? "en" : "ms")}
              className="px-2.5 py-1 text-xs font-bold bg-[#FFFFFF] border border-[#DDE1DA] rounded-full text-[#18201D]"
            >
              {language === "ms" ? "BM" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#18201D] hover:bg-[#EBEFE8] focus:outline-hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DDE1DA] bg-[#F7F6F2] shadow-xl animate-fadeIn">
          <div className="ms-container py-5 space-y-4">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
                  isActive("/") && pathname === "/"
                    ? "bg-[#2457E6] text-white"
                    : "text-[#18201D] hover:bg-[#EBEFE8]"
                }`}
              >
                {t("navHome")}
              </Link>

              {/* Mobile Services section */}
              <div className="pt-2 pb-1 px-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#52605A]">
                  {t("navServices")}
                </span>
              </div>
              <div className="pl-3 space-y-1">
                {serviceSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-[#18201D] hover:bg-[#EBEFE8]"
                  >
                    <span>{sub.title}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EEF2FF] text-[#2457E6]">
                      {sub.badge}
                    </span>
                  </Link>
                ))}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
                    isActive(link.href)
                      ? "bg-[#2457E6] text-white"
                      : "text-[#18201D] hover:bg-[#EBEFE8]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-[#DDE1DA]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="ms-btn-primary w-full text-center py-3 text-sm rounded-xl"
              >
                {t("navCtaBtn")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
