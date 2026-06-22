"use client";

import React from "react";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import { bespokePackages } from "@/data/packages";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";

const bespokeDetails = {
  ms: {
    "basic": {
      deliverables: [
        "Laman web kustom 1-3 Halaman",
        "HTML, CSS & JavaScript (diuji mendalam)",
        "Sangat responsif (keserasian 100% peranti)",
        "Integrasi Google Maps & Pautan WhatsApp",
        "Persediaan SEO terancang",
        "Reka bentuk estetik human-centric"
      ],
      specs: [
        { label: "Siap dlm", value: "7-14 Hari Bekerja" },
        { label: "Semakan", value: "2x Revisions" },
        { label: "Sokongan", value: "14 Hari Waranti" },
        { label: "Teknologi", value: "HTML5 / CSS3 / Vanilla JS" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Asas" }
      ]
    },
    "standard": {
      deliverables: [
        "Laman web 4-6 Halaman",
        "Reka bentuk kustom premium (dari kosong)",
        "Halaman Utama, Mengenai, Servis, Galeri & Hubungi",
        "Galeri multimedia (lebih banyak gambar)",
        "Sokongan main semula video latar belakang (video playback)",
        "Integrasi Google Maps & Pautan WhatsApp",
        "Keserasian paparan semua peranti (responsif)",
        "Borang hubungan interaktif",
        "Optimasi kelajuan Lighthouse"
      ],
      specs: [
        { label: "Siap dlm", value: "14-21 Hari Bekerja" },
        { label: "Semakan", value: "4x Revisions" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "Framework / Vanilla (Pilihan)" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Premium" }
      ]
    },
    "advanced": {
      deliverables: [
        "Laman web 7-10+ Halaman",
        "Reka bentuk kustom premium terperinci",
        "Halaman admin (urus kandungan)",
        "Senarai produk / servis dinamik",
        "Galeri multimedia (lebih banyak gambar)",
        "Sokongan main semula video latar belakang (video playback)",
        "Integrasi Google Maps & Pautan WhatsApp",
        "Optimasi kelajuan maksimum",
        "Struktur SEO termaju & e-mel perniagaan"
      ],
      specs: [
        { label: "Siap dlm", value: "21-30 Hari Bekerja" },
        { label: "Semakan", value: "7x Revisions" },
        { label: "Sokongan", value: "60 Hari Waranti" },
        { label: "Teknologi", value: "Framework / Vanilla (Pilihan)" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Optimum" }
      ]
    },
    "custom-site": {
      deliverables: [
        "Sistem web & pangkalan data kustom",
        "Aplikasi Android (.APK) / Web bersepadu",
        "Integrasi API & Webhook tanpa had",
        "Ejen automasi AI & AI Chatbot",
        "Dashboard admin panel kustom",
        "Reka bentuk UI/UX eksklusif (Figma-to-Code)"
      ],
      specs: [
        { label: "Siap dlm", value: "Mengikut Skop" },
        { label: "Semakan", value: "Tanpa Had (Reka Bentuk)" },
        { label: "Sokongan", value: "60-90 Hari Waranti" },
        { label: "Teknologi", value: "Next.js / Node.js / Android" },
        { label: "Bayaran", value: "Fasa Projek Dinamik" },
        { label: "SEO & Kelajuan", value: "Skala Enterprise" }
      ]
    },
    "starter-admin": {
      deliverables: [
        "Papan pemuka (admin dashboard) ringkas",
        "Kemas kini teks, huraian & imej",
        "Urus senarai produk / perkhidmatan",
        "Sistem log masuk admin yang selamat",
        "Antara muka mesra pengguna & responsif"
      ],
      specs: [
        { label: "Siap dlm", value: "7-14 Hari Bekerja" },
        { label: "Semakan", value: "4x Revisions" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "Next.js / Node.js / Database" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Asas" }
      ]
    },
    "booking-system": {
      deliverables: [
        "Sistem tempahan slot & kalendar bersepadu",
        "Log pesanan perkhidmatan & pelanggan",
        "Notifikasi e-mel / WhatsApp untuk tempahan baru",
        "Pengurusan borang permintaan kustom",
        "Dashboard kawalan tempahan untuk admin"
      ],
      specs: [
        { label: "Siap dlm", value: "14-21 Hari Bekerja" },
        { label: "Semakan", value: "4x Revisions" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "Next.js / Node.js / Database" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Standard" }
      ]
    },
    "database-system": {
      deliverables: [
        "Struktur database hubungan (relational)",
        "Sistem carian, tapisan & isihan data maju",
        "Log rekod transaksi & aktiviti pengguna",
        "Eksport data ke fail CSV / Excel",
        "Panel pengurusan database yang selamat"
      ],
      specs: [
        { label: "Siap dlm", value: "14-21 Hari Bekerja" },
        { label: "Semakan", value: "4x Revisions" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "Next.js / PostgreSQL / MySQL" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Standard" }
      ]
    },
    "inventory-system": {
      deliverables: [
        "Pengurusan katalog produk & tahap stok",
        "Sistem kemasukan stok masuk & keluar",
        "Notifikasi amaran stok rendah",
        "Laporan inventori & aliran stok asas",
        "Dashboard pengurusan stok untuk kakitangan"
      ],
      specs: [
        { label: "Siap dlm", value: "21-30 Hari Bekerja" },
        { label: "Semakan", value: "4x Revisions" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "Next.js / Node.js / Relational DB" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Optimum Standard" }
      ]
    },
    "custom-app": {
      deliverables: [
        "Aplikasi Android (.APK) asli / hibrid",
        "Sistem database awan masa nyata (real-time)",
        "Notifikasi tolak (push notifications) telefon",
        "Panel admin web bersepadu penuh",
        "Log masuk selamat untuk pengguna & pekerja"
      ],
      specs: [
        { label: "Siap dlm", value: "30-45 Hari Bekerja" },
        { label: "Semakan", value: "6x Revisions" },
        { label: "Sokongan", value: "60 Hari Waranti" },
        { label: "Teknologi", value: "React Native / Next.js / Android" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Skala Enterprise" }
      ]
    },
    "ai-automation": {
      deliverables: [
        "Chatbot AI pintar dengan konteks perniagaan",
        "Automasi mesej auto-reply WhatsApp",
        "Penjana PDF & dokumen automatik",
        "Carian pintar semantik (vector search)",
        "Automasi kerja & aliran tugas (workflows)"
      ],
      specs: [
        { label: "Siap dlm", value: "14-30 Hari Bekerja" },
        { label: "Semakan", value: "Semakan Fleksibel" },
        { label: "Sokongan", value: "30 Hari Waranti" },
        { label: "Teknologi", value: "OpenAI / Anthropic APIs / Node.js" },
        { label: "Bayaran", value: "50% / 20% / 30%" },
        { label: "SEO & Kelajuan", value: "Skala Enterprise" }
      ]
    }
  },
  en: {
    "basic": {
      deliverables: [
        "1-3 pages custom website",
        "HTML, CSS & JavaScript (deeply tested)",
        "100% cross-device display compatibility",
        "Google Maps & WhatsApp link integration",
        "Planned SEO setup",
        "Human-centric aesthetic design"
      ],
      specs: [
        { label: "Delivery", value: "7-14 Business Days" },
        { label: "Revisions", value: "2 Sessions" },
        { label: "Support", value: "14 Days Warranty" },
        { label: "Technology", value: "HTML5 / CSS3 / Vanilla JS" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Basic Optimized" }
      ]
    },
    "standard": {
      deliverables: [
        "4-6 pages website",
        "Premium custom design from scratch",
        "Home, About, Services, Gallery & Contact pages",
        "Rich image gallery & media showcase",
        "Background video playback support (video playback)",
        "Google Maps & WhatsApp link integration",
        "Cross-device display compatibility",
        "Interactive contact forms",
        "Lighthouse speed optimizations"
      ],
      specs: [
        { label: "Delivery", value: "14-21 Business Days" },
        { label: "Revisions", value: "4 Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "Framework / Vanilla (Your Choice)" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Premium Optimized" }
      ]
    },
    "advanced": {
      deliverables: [
        "7-10+ pages website",
        "Detailed premium custom design",
        "Admin page website (manage content)",
        "Dynamic product / service listing",
        "Rich image gallery & media showcase",
        "Background video playback support (video playback)",
        "Google Maps & WhatsApp link integration",
        "Maximum speed optimization",
        "Advanced SEO structure & business email"
      ],
      specs: [
        { label: "Delivery", value: "21-30 Business Days" },
        { label: "Revisions", value: "7 Sessions" },
        { label: "Support", value: "60 Days Warranty" },
        { label: "Technology", value: "Framework / Vanilla (Your Choice)" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Max Optimized" }
      ]
    },
    "custom-site": {
      deliverables: [
        "Tailor-made code & custom database schemas",
        "Integrated Web Systems & Android App (.APK)",
        "Unlimited API & Webhook integrations",
        "Autonomous AI agents & custom AI chatbots",
        "Fully bespoke admin panels & dashboards",
        "Figma-to-Code exclusive pixel-perfect UI/UX"
      ],
      specs: [
        { label: "Delivery", value: "Scope Dependent" },
        { label: "Revisions", value: "Unlimited (Design Phase)" },
        { label: "Support", value: "60-90 Days Warranty" },
        { label: "Technology", value: "Next.js / Node.js / Android APK" },
        { label: "Payment", value: "Dynamic Project Milestones" },
        { label: "SEO & Speed", value: "Enterprise Grade" }
      ]
    },
    "starter-admin": {
      deliverables: [
        "Simple administrative control dashboard",
        "Edit website copy texts and images",
        "Manage service / product listings",
        "Secure administrator login gateway",
        "User-friendly responsive controls"
      ],
      specs: [
        { label: "Delivery", value: "7-14 Business Days" },
        { label: "Revisions", value: "4 Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "Next.js / Node.js / Database" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Basic Optimized" }
      ]
    },
    "booking-system": {
      deliverables: [
        "Interactive slot booking & calendar",
        "Customer and booking order records log",
        "Email / WhatsApp alerts for new bookings",
        "Custom request forms management",
        "Admin control panel for booking schedules"
      ],
      specs: [
        { label: "Delivery", value: "14-21 Business Days" },
        { label: "Revisions", value: "4 Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "Next.js / Node.js / Database" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Standard Optimized" }
      ]
    },
    "database-system": {
      deliverables: [
        "Relational database schema structure",
        "Advanced data search, filter & sort queries",
        "Transaction logs & user activity audits",
        "Data exports into CSV / Excel formats",
        "Secure database administration console"
      ],
      specs: [
        { label: "Delivery", value: "14-21 Business Days" },
        { label: "Revisions", value: "4 Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "Next.js / PostgreSQL / MySQL" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Standard Optimized" }
      ]
    },
    "inventory-system": {
      deliverables: [
        "Product catalog & inventory level management",
        "Stock check-in & check-out logs",
        "Low-stock warning alert indicators",
        "Inventory reporting & dispatch sheets",
        "Staff-level stock control dashboard"
      ],
      specs: [
        { label: "Delivery", value: "21-30 Business Days" },
        { label: "Revisions", value: "4 Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "Next.js / Node.js / Relational DB" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Standard Optimized" }
      ]
    },
    "custom-app": {
      deliverables: [
        "Native / Hybrid Android Mobile App (.APK)",
        "Real-time synchronized cloud database",
        "Push notification alerts direct to device",
        "Fully synchronized web admin console",
        "Secure client & staff login gateways"
      ],
      specs: [
        { label: "Delivery", value: "30-45 Business Days" },
        { label: "Revisions", value: "6 Sessions" },
        { label: "Support", value: "60 Days Warranty" },
        { label: "Technology", value: "React Native / Next.js / Android" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Enterprise Grade" }
      ]
    },
    "ai-automation": {
      deliverables: [
        "Context-aware conversational AI chatbot",
        "Automated WhatsApp responder setups",
        "Automated PDF and invoice generation",
        "Semantic vector search integration",
        "Custom workflow task automation"
      ],
      specs: [
        { label: "Delivery", value: "14-30 Business Days" },
        { label: "Revisions", value: "Flexible Sessions" },
        { label: "Support", value: "30 Days Warranty" },
        { label: "Technology", value: "OpenAI / Anthropic APIs / Node.js" },
        { label: "Payment", value: "50% / 20% / 30%" },
        { label: "SEO & Speed", value: "Enterprise Grade" }
      ]
    }
  }
};

export default function DetailedServices() {
  const { t, language } = useTranslation();

  const currentBespoke = bespokePackages[language];
  const detailedWebPackages = currentBespoke.filter((pkg) =>
    ["basic", "standard", "advanced", "custom-site"].includes(pkg.id)
  );
  const customSystemsPackages = currentBespoke.filter((pkg) =>
    ["starter-admin", "booking-system", "database-system", "inventory-system", "custom-app", "ai-automation"].includes(pkg.id)
  );

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full glow-blur-purple z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full glow-blur-cyan z-0 pointer-events-none" />

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
            {t("tagBespoke")}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("customHeader")}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("customDesc")}
          </p>

          {/* Subtle horizontal gradient divider line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* Value Pitch Section: Why Detailed? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Rigorous Device Testing */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-cyan-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/10 uppercase">
              {language === "ms" ? "SELAMAT" : "SECURE"}
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-transform duration-300 group-hover:scale-110 p-2.5">
                <img src="/images/icons/shield.png" alt="Shield Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {t("pitch1Title")}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {t("pitch1Desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Human-Centric UX */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-purple-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/10 uppercase">
              {language === "ms" ? "MESRA PENGGUNA" : "HUMAN-CENTRIC"}
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-transform duration-300 group-hover:scale-110 p-2.5">
                <img src="/images/icons/ux.png" alt="UX Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {t("pitch2Title")}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {t("pitch2Desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Performance & Databases */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-indigo-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(99,102,241,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10 uppercase">
              {language === "ms" ? "LAJU & STABIL" : "ULTRA-FAST"}
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-transform duration-300 group-hover:scale-110 p-2.5">
                <img src="/images/icons/lightning.png" alt="Lightning Icon" className="w-full h-full object-contain no-invert" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {t("pitch3Title")}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {t("pitch3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded"></span>
              {t("pkgCustomHeader")}
            </h2>
            <Link
              href="/calculator"
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 transition-all"
            >
              {t("btnCalcCustom")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedWebPackages.map((pkg) => {
              const structured = bespokeDetails[language][pkg.id as keyof typeof bespokeDetails["ms"]];

              return (
                <GlowCard key={pkg.id} color="from-purple-500 to-indigo-600">
                  <div className="flex flex-col justify-between h-full space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white tracking-tight">{pkg.name}</h3>
                        <p className="text-zinc-300 text-[12.5px] leading-relaxed min-h-[48px]">
                          {pkg.description}
                        </p>
                      </div>
                      
                      <div className="flex items-baseline gap-1 py-1.5 border-y border-zinc-900/60">
                        <span className="text-[11px] text-zinc-400 font-medium">{t("fromText")}</span>
                        <span className="text-2xl font-black text-white">
                          {typeof pkg.price === "number" ? `RM${pkg.price.toLocaleString()}` : pkg.price}
                        </span>
                      </div>

                      {/* Scope & Features Checklist */}
                      {((structured && structured.deliverables) || pkg.features) && (
                        <div className="space-y-2.5">
                          <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">
                            {language === "ms" ? "Skop & Keupayaan" : "Scope & Features"}
                          </span>
                          <ul className="space-y-2 text-[13px] text-zinc-250">
                            {((structured && structured.deliverables) || pkg.features).map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <svg className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="leading-snug text-zinc-200">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Specs & Terms Grid */}
                      {structured && structured.specs.length > 0 && (
                        <div className="space-y-2.5 pt-3 border-t border-zinc-900/50">
                          <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                            {language === "ms" ? "Spesifikasi Pembangunan" : "Development Specs"}
                          </span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {structured.specs.map((spec, i) => (
                              <div key={i} className="p-2 rounded-xl bg-zinc-950/40 border border-zinc-900/60 flex flex-col justify-center min-h-[50px]">
                                <span className="text-zinc-400 font-bold uppercase text-[9.5px] tracking-wider leading-none">
                                  {spec.label}
                                </span>
                                <span className="text-white font-extrabold text-[12.5px] mt-1 leading-tight">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-zinc-900/40">
                      <a
                        href={generateWhatsAppLink({
                          packageName: pkg.name,
                          priceText: typeof pkg.price === "number" ? `Mulai RM${pkg.price}` : "Custom Price",
                          totalEstimate: typeof pkg.price === "number" ? pkg.price : 0
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-950/20"
                      >
                        {t("btnDiscussDesign")}
                      </a>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Custom Systems & Apps Section */}
        <div className="space-y-10">
          <div className="border-b border-zinc-900 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-cyan-500 rounded"></span>
              {language === "ms" ? "Sistem Perniagaan & Aplikasi Kustom" : "Custom Business Systems & Web Apps"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customSystemsPackages.map((pkg) => (
              <GlowCard key={pkg.id} color="from-cyan-500 to-indigo-500">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-bold text-zinc-100">{pkg.name}</h3>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/10 shrink-0">
                        {typeof pkg.price === "number" ? `RM${pkg.price.toLocaleString()}+` : pkg.price}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[48px]">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-900/40">
                    <a
                      href={generateWhatsAppLink({
                        packageName: pkg.name,
                        priceText: typeof pkg.price === "number" ? `Mulai RM${pkg.price}` : "Custom Price",
                        totalEstimate: typeof pkg.price === "number" ? pkg.price : 0
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-350 hover:bg-zinc-800 hover:text-white transition-all"
                    >
                      {language === "ms" ? "Bincang Struktur Sistem →" : "Discuss System Structure →"}
                    </a>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Staging, Delivery & Pricing Notes */}
        <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900 max-w-4xl mx-auto flex items-start gap-4">
          <svg className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="space-y-1 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">
              {language === "ms" ? "Nota Penghantaran, Tempoh Siap & Harga Pakej:" : "Important Delivery, Staging & Pricing Notes:"}
            </p>
            <p className="leading-relaxed">
              {language === "ms"
                ? "Semua tempoh siap dikira dalam hari bekerja (hari perniagaan). Tempoh ini boleh menjadi lebih singkat atau cepat sekiranya slot saya kosong / saya tidak sibuk dengan projek pelanggan lain. Sila ambil perhatian bahawa harga yang dipaparkan adalah harga asas (minimum) sahaja, dan boleh bertambah sekiranya terdapat permintaan fungsi tambahan atau keperluan khas yang lebih kompleks."
                : "All delivery schedules are estimated in business working days. Completion times can be significantly shorter if my slots are open and I am not busy with other client queues. Please note that the displayed prices are base (minimum) rates and can increase if you request extra features, custom database structures, or complex third-party API integrations."}
            </p>
          </div>
        </div>

        {/* Process Steps Info */}
        <div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-900 max-w-4xl mx-auto space-y-6">
          <h3 className="text-lg font-bold text-white text-center">{t("processTitle")}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                1
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step1Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step1Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                2
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step2Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step2Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                3
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step3Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step3Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                4
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step4Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step4Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
