"use client";

import React from "react";
import GlowCard from "@/components/ui/GlowCard";
import { fastTrackPackages, quickFixes } from "@/data/packages";
import { generateWhatsAppLink, generateQuickFixLink } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";

const packageDetails = {
  ms: {
    "budget-basic": {
      deliverables: [
        "Laman web kustom 1 Halaman",
        "Subdomain & Hosting Percuma",
        "Penyelenggaraan cover ralat teknikal sahaja"
      ],
      specs: [
        { label: "Siap dlm", value: "2-4 Hari" },
        { label: "Bayaran", value: "100% Upfront" },
        { label: "Maintenance", value: "Min RM40/bln" },
        { label: "Kontrak", value: "2 Tahun" },
        { label: "Suntingan", value: "Tiada" },
        { label: "Ekspres", value: "Tersedia (Caj extra)" }
      ]
    },
    "budget-standard": {
      deliverables: [
        "Website kustom sehingga 4 Halaman",
        "Termasuk Galeri, Google Maps, & WhatsApp link",
        "Subdomain & Hosting Percuma"
      ],
      specs: [
        { label: "Siap dlm", value: "2-4 Hari" },
        { label: "Bayaran", value: "100% Upfront" },
        { label: "Maintenance", value: "Min RM50/bln" },
        { label: "Kontrak", value: "2 Tahun" },
        { label: "Suntingan Asas", value: "6x / Tahun" },
        { label: "Draf Edits", value: "4x sblm launch" }
      ]
    },
    "budget-advanced": {
      deliverables: [
        "Laman web kustom sehingga 7 Halaman",
        "Sistem Pesanan & Resit Automatik",
        "Notifikasi pesanan terus ke WhatsApp/Telegram",
        "Tiada Admin Login Panel"
      ],
      specs: [
        { label: "Siap dlm", value: "2-4 Hari" },
        { label: "Bayaran", value: "60% Depo / 40% Baki" },
        { label: "Maintenance", value: "Min RM60/bln" },
        { label: "Kontrak", value: "1 Tahun" },
        { label: "Suntingan Asas", value: "6x / Tahun" },
        { label: "Reka Semula", value: "1x Percuma/yr" }
      ]
    },
    "budget-value": {
      deliverables: [
        "Laman web & sistem kustom sehingga 13 Halaman",
        "Panel Admin Login Kustom (boleh sunting semua)",
        "Dibina dengan framework & kod stabil",
        "Ciri keselamatan tambahan disertakan",
        "Termasuk Galeri, Sistem Pesanan & Resit",
        "Pesanan masuk automatik ke WhatsApp/Telegram"
      ],
      specs: [
        { label: "Siap dlm", value: "3-5 Hari" },
        { label: "Bayaran", value: "60% Depo / 40% Baki" },
        { label: "Maintenance", value: "Min RM60/bln" },
        { label: "Kontrak", value: "1 Tahun" },
        { label: "Suntingan Asas", value: "6x / Tahun" },
        { label: "Reka Semula", value: "1x Percuma/yr" }
      ]
    }
  },
  en: {
    "budget-basic": {
      deliverables: [
        "1-Page custom website",
        "Free Subdomain & Hosting",
        "Maintenance covers technical bug fixes only"
      ],
      specs: [
        { label: "Delivery", value: "2-4 Days" },
        { label: "Payment", value: "100% Upfront" },
        { label: "Maintenance", value: "Min RM40/mo" },
        { label: "Contract", value: "2 Years" },
        { label: "Basic Edits", value: "None" },
        { label: "Express", value: "Available (Extra)" }
      ]
    },
    "budget-standard": {
      deliverables: [
        "Custom website up to 4 Pages",
        "Includes Gallery, Google Maps, & WhatsApp link",
        "Free Subdomain & Hosting"
      ],
      specs: [
        { label: "Delivery", value: "2-4 Days" },
        { label: "Payment", value: "100% Upfront" },
        { label: "Maintenance", value: "Min RM50/mo" },
        { label: "Contract", value: "2 Years" },
        { label: "Basic Edits", value: "6x / Year" },
        { label: "Draft Edits", value: "4x before launch" }
      ]
    },
    "budget-advanced": {
      deliverables: [
        "Custom website up to 7 Pages",
        "Ordering System & Automated Receipts",
        "Order notifications routed to WhatsApp/Telegram",
        "No Admin Login Panel"
      ],
      specs: [
        { label: "Delivery", value: "2-4 Days" },
        { label: "Payment", value: "60% Depo / 40% Bal" },
        { label: "Maintenance", value: "Min RM60/mo" },
        { label: "Contract", value: "1 Year" },
        { label: "Basic Edits", value: "6x / Year" },
        { label: "Redesign", value: "1x Free/yr" }
      ]
    },
    "budget-value": {
      deliverables: [
        "Custom website & system up to 13 Pages",
        "Custom Admin Login Panel (edit almost anything)",
        "Built with modern framework & clean stable code",
        "Integrated Security Features included",
        "Includes Gallery, Ordering System & Receipts",
        "Order notifications routed to WhatsApp/Telegram"
      ],
      specs: [
        { label: "Delivery", value: "3-5 Days" },
        { label: "Payment", value: "60% Depo / 40% Bal" },
        { label: "Maintenance", value: "Min RM60/mo" },
        { label: "Contract", value: "1 Year" },
        { label: "Basic Edits", value: "6x / Year" },
        { label: "Redesign", value: "1x Free/yr" }
      ]
    }
  }
};

export default function FastTrackServices() {
  const { t, language } = useTranslation();

  const currentPackages = fastTrackPackages[language];
  const currentFixes = quickFixes[language];

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 relative py-4">
          {/* Subtle colored glow orb behind the header text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Premium category badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 tracking-wider text-[11px] uppercase transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("tagFastTrack")}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("fastHeader")}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("fastDesc")}
          </p>

        </div>

        {/* Infographic Section: Why Fast-Track? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Quick Launch */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-cyan-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/10 uppercase">
              2-4 DAYS
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-transform duration-300 group-hover:scale-110 p-2">
                <img src="/images/icons/rocket.png" alt="Rocket Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Pelancaran Segera" : "Quick Launch"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                     ? "Sedia dilancarkan dalam tempoh 2 hingga 4 hari bekerja sahaja. Sesuai untuk pelancaran profil perniagaan ekspres."
                     : "Ready to go live in just 2 to 4 working days. Perfect for quick market entry or corporate profiles."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Budget Friendly */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-purple-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/10 uppercase">
              FROM RM299
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-transform duration-300 group-hover:scale-110 p-2">
                <img src="/images/icons/money_bag.png" alt="Money Bag Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Paling Mampu Milik" : "Budget Friendly"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                    ? "Penyelesaian digital paling mesra bajet dengan bayaran sekali sahaja tanpa caj tersembunyi."
                    : "Highly budget-friendly plans with one-time payment and no hidden custom build fees."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Simplicity Focus */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-indigo-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(139,92,246,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10 uppercase">
              CLEAN CODE
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-transform duration-300 group-hover:scale-110 p-2">
                <img src="/images/icons/sparkles.png" alt="Sparkles Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Fokus Simplicity" : "Simplicity Focus"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                    ? "Reka bentuk minimalis berimpak tinggi. Fokus kepada navigasi yang bersih dan mesra pengguna."
                    : "High-impact, clean layouts. Focusing on essential features and frictionless user experiences."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Packages Grid */}
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-900 pb-3 flex items-center gap-3">
            <span className="w-2 h-6 bg-cyan-500 rounded"></span>
            {t("pkgHeader")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {currentPackages.map((pkg) => {
              const structured = packageDetails[language][pkg.id as keyof typeof packageDetails["ms"]] || {
                deliverables: pkg.features,
                specs: []
              };

              return (
                <GlowCard key={pkg.id} color="from-cyan-500 to-indigo-500">
                  <div className="space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">{pkg.name}</h3>
                        <p className="mt-1.5 text-zinc-400 text-[11px] leading-relaxed line-clamp-3">
                          {pkg.description}
                        </p>
                      </div>
                      
                      <div className="flex items-baseline gap-1 py-1.5 border-y border-zinc-900/60">
                        <span className="text-[10px] text-zinc-550 font-medium">{t("fromText")}</span>
                        <span className="text-2xl font-black text-white">RM{pkg.price}</span>
                      </div>

                      {/* Scope & Features Checklist */}
                      <div className="space-y-2">
                        <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider">
                          {language === "ms" ? "Fungsi & Skop" : "Scope & Features"}
                        </span>
                        <ul className="space-y-2 text-xs text-zinc-350">
                          {structured.deliverables.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specs & Terms Grid */}
                      {structured.specs.length > 0 && (
                        <div className="space-y-2 pt-3 border-t border-zinc-900/50">
                          <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider">
                            {language === "ms" ? "Spesifikasi & Terma" : "Specs & Terms"}
                          </span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {structured.specs.map((spec, i) => (
                              <div key={i} className="p-2 rounded-xl bg-zinc-950/40 border border-zinc-900/60 flex flex-col justify-center min-h-[44px]">
                                <span className="text-zinc-550 font-bold uppercase text-[7px] tracking-wider leading-none">
                                  {spec.label}
                                </span>
                                <span className="text-zinc-200 font-extrabold text-[10px] mt-1 leading-tight">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-zinc-900/40">
                      <a
                        href={generateWhatsAppLink({
                          packageName: pkg.name,
                          priceText: `Mulai RM${pkg.price}`,
                          totalEstimate: pkg.price
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-950/20"
                      >
                        {t("btnBookPkg")}
                      </a>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>


        {/* App & Template Systems Section (Coming Soon) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded"></span>
              {language === "ms" ? "Sistem App & Templat Kustom" : "Custom App & Template Systems"}
            </h2>
            <span className="text-xs text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-wider animate-pulse">
              {language === "ms" ? "Akan Datang" : "Coming Soon"}
            </span>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/20 border border-zinc-900 max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            {/* Ambient subtle glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-4 text-left">
              <h3 className="text-xl font-extrabold text-zinc-150">
                {language === "ms" ? "Sistem Templat Boleh Diubah Suai" : "Fully Customizable Template Builds"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                {language === "ms" 
                  ? "Penyelesaian pantas yang fleksibel. Sesuai untuk membina sistem tersuai sama ada berasaskan laman web (web-based) mahupun bukan web (non-web systems). Direka khas agar boleh diubah suai dengan mudah mengikut keperluan operasi unik perniagaan anda."
                  : "A highly flexible and rapid system build. Perfect for implementing custom systems that can run either as a standard web platform or non-web application. Fully tailored to match your specific operational guidelines."}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-350 pt-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{language === "ms" ? "Sistem Laman Web (Web Systems)" : "Web-Based Systems"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{language === "ms" ? "Aplikasi Bukan Web (Non-Web Apps)" : "Non-Web Operations"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{language === "ms" ? "Struktur Templat Kustom" : "Customizable Blueprints"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{language === "ms" ? "Integrasi Pangkalan Data SQLite/Lite" : "SQLite / Lightweight DB Sync"}</span>
                </li>
              </ul>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/60136632092?text=Hai%20Danial,%20saya%20berminat%20nak%20bincang%20pasal%20Sistem%20App/Templat%20Kustom."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-950/20 animate-pulse"
              >
                {language === "ms" ? "Bincang Idea Projek" : "Discuss Project Idea"}
              </a>
            </div>
          </div>
        </div>

        {/* Support note */}
        <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900 max-w-3xl mx-auto flex items-start gap-4">
          <svg className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="space-y-1 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{t("supportNoteTitle")}</p>
            <p className="leading-relaxed">
              {t("supportNoteText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
