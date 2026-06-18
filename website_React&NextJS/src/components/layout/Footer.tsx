"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useTranslation();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-12 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {"DANIAL'S"}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-900/50 text-zinc-400 font-semibold border border-zinc-800/30">
              WEB & SYSTEMS
            </span>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
            {t("brandDesc")}
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-zinc-500 font-medium">{t("onlineStatus")}</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">{t("navTitle")}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-zinc-200 transition-colors">{t("navHome")}</Link>
            </li>
            <li>
              <Link href="/services/fast-track" className="hover:text-zinc-200 transition-colors">{t("pakejMurah")}</Link>
            </li>
            <li>
              <Link href="/services/detailed" className="hover:text-zinc-200 transition-colors">{t("sistemKustom")}</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-zinc-200 transition-colors">{t("navGallery")}</Link>
            </li>
            <li>
              <Link href="/calculator" className="hover:text-zinc-200 transition-colors">{t("kalkulatorDinamik")}</Link>
            </li>
          </ul>
        </div>

        {/* Payment Terms Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">{t("paymentTermsTitle")}</h4>
          <div className="space-y-3 bg-zinc-900/40 p-4 rounded-xl border border-zinc-850">
            <div className="flex items-center justify-between text-xs border-b border-zinc-805 pb-2">
              <span className="text-zinc-400 font-medium">{t("depositMula")}</span>
              <span className="text-purple-400 font-semibold">{t("sebelumMula")}</span>
            </div>
            <div className="flex items-center justify-between text-xs border-b border-zinc-805 pb-2">
              <span className="text-zinc-400 font-medium">{t("draftPreview")}</span>
              <span className="text-purple-400 font-semibold">{t("selepasDraft")}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">{t("penyerahan")}</span>
              <span className="text-purple-400 font-semibold">{t("sebelumLaunch")}</span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-650 leading-relaxed">
            {t("footerNote")}
          </p>
        </div>

        {/* Contact & QR Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">{t("contactTitle")}</h4>
          <div className="space-y-2.5 text-sm">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0136632092" className="hover:text-zinc-200 transition-colors">013-6632092</a>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:danialwebsystems@gmail.com" className="hover:text-zinc-200 transition-colors">danialwebsystems@gmail.com</a>
            </p>
          </div>
          
          <div className="pt-2">
            <a 
              href="https://wa.me/60136632092" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 p-2.5 bg-zinc-900/60 hover:bg-zinc-850 rounded-xl border border-zinc-800 transition-all group"
            >
              <div className="w-10 h-10 bg-white rounded p-0.5 flex flex-col justify-between shrink-0">
                <div className="flex justify-between">
                  <div className="w-3.5 h-3.5 bg-black rounded-[1px]"></div>
                  <div className="w-3.5 h-3.5 bg-black rounded-[1px]"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-3.5 h-3.5 bg-black rounded-[1px]"></div>
                  <div className="w-2.5 h-2.5 bg-indigo-600 rounded-[1px]"></div>
                </div>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-none">{t("qrTitle")}</p>
                <p className="text-xs text-zinc-250 font-semibold group-hover:text-purple-400 transition-colors">{t("qrSubtitle")}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-650 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {currentYear} {t("rightsReserved")}</p>
        <p className="flex gap-4">
          <Link href="/services/fast-track" className="hover:text-zinc-400">{t("pakejMurah")}</Link>
          <span>&middot;</span>
          <Link href="/services/detailed" className="hover:text-zinc-400">{t("sistemKustom")}</Link>
          <span>&middot;</span>
          <Link href="/calculator" className="hover:text-zinc-400">{t("kalkulatorDinamik")}</Link>
        </p>
      </div>
    </footer>
  );
}
