"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";

export default function RootFooter() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useMainSiteLanguage();

  return (
    <footer className="bg-[#17251F] text-[#F7F6F2] border-t border-[#293832] pt-16 pb-12 mt-auto">
      <div className="ms-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#293832]">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                DANIAL&apos;S
              </span>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#087A68]">
              {siteConfig.descriptor}
            </p>
            <p className="text-xs text-[#A3B1AB] leading-relaxed max-w-xs">
              {language === "ms"
                ? "Website & design yang buat bisnes anda nampak lebih profesional. Skop telus, mesra bajet, dan siap sedia untuk berkembang."
                : "Websites and visual design built to give your business an unmistakably professional edge. Transparent scope and budget-conscious."}
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#A3B1AB]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>{language === "ms" ? "Perbincangan WhatsApp sedia dibuka" : "WhatsApp inquiries active"}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "ms" ? "Navigasi Pantas" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs text-[#A3B1AB]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("navHome")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("navServices")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  {t("navGallery")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  {t("navPricing")}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  {t("navCalculator")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("navContact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Scope Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "ms" ? "Pilihan Servis" : "Service Portals"}
            </h4>
            <ul className="space-y-2 text-xs text-[#A3B1AB]">
              <li>
                <Link href="/services/websites" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>{language === "ms" ? "Landing Page Asas" : "Landing Pages"}</span>
                  <span className="text-[10px] text-[#087A68] font-bold">RM79</span>
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Design Express</span>
                  <span className="text-[10px] text-[#087A68] font-bold">RM5</span>
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Design Custom</span>
                  <span className="text-[10px] text-[#A3B1AB] font-bold">RM35+</span>
                </Link>
              </li>
              <li>
                <Link href="/services/website-fix" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>{language === "ms" ? "Baiki Susun Atur / SSL" : "Website Repair & SSL"}</span>
                  <span className="text-[10px] text-[#A3B1AB] font-bold">RM29+</span>
                </Link>
              </li>
              <li>
                <Link href="/services/systems-apps" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>{language === "ms" ? "Pangkalan Data & Android" : "Systems & Android Sync"}</span>
                  <span className="text-[10px] text-[#A3B1AB] font-bold">RM499+</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "ms" ? "Hubungi Terus" : "Direct Channels"}
            </h4>
            <div className="space-y-2 text-xs text-[#A3B1AB]">
              <p>
                <a
                  href={siteConfig.contact.phoneTel}
                  className="hover:text-white transition-colors font-medium flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors font-medium flex items-center gap-2 truncate"
                >
                  <svg className="w-3.5 h-3.5 text-[#2457E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{siteConfig.contact.email}</span>
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2457E6] text-white font-semibold text-xs hover:bg-[#1b44b8] transition-colors shadow-xs"
                >
                  <span>{language === "ms" ? "Mesej di WhatsApp" : "Message on WhatsApp"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7E8F87]">
          <p className="max-w-xl text-center md:text-left leading-relaxed">
            {t("footerNote")}
          </p>
          <div className="flex items-center gap-6">
            <p>
              &copy; {currentYear} {siteConfig.name}. {t("footerRights")}
            </p>
            {/* The single intentional understated link to legacy version */}
            <Link
              href={siteConfig.legacyVersionUrl}
              className="text-[#7E8F87] hover:text-[#A3B1AB] underline transition-colors"
              title="Legacy Website Version"
            >
              {siteConfig.legacyVersionLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
