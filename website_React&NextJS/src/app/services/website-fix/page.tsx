"use client";

import React, { useState } from "react";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/context/LanguageContext";
import { generateQuickFixLink } from "@/utils/whatsapp";

interface DiagnosticIssue {
  id: string;
  title: string;
  category: string;
  price: string;
  activeBorder: string;
  delivery: string;
  complexity: "Easy" | "Medium" | "High" | "Expert" | "Mudah" | "Sederhana" | "Tinggi" | "Pakar";
  complexityScore: 1 | 2 | 3 | 4; // 1 = Easy, 2 = Medium, 3 = High, 4 = Expert
  complexityColor: string;
  glowColor: string;
  badgeGlow: string;
  desc: string;
  fixes: string[];
  icon: (className: string) => React.ReactNode;
}

export default function WebsiteFixServices() {
  const { language } = useLanguage();
  const isMs = language === "ms";

  const [activeIssueId, setActiveIssueId] = useState<string>("layout");

  // Diagnostic Issues Data
  const diagnosticIssues: DiagnosticIssue[] = [
    {
      id: "layout",
      title: isMs ? "Paparan Telefon Rosak" : "Broken Phone Layout",
      category: isMs ? "Susun Atur & Reka Bentuk" : "Layout & Styling",
      price: "200",
      activeBorder: "border-cyan-500",
      delivery: isMs ? "2-3 Hari" : "2-3 Days",
      complexity: isMs ? "Sederhana" : "Medium",
      complexityScore: 2,
      complexityColor: "text-amber-400 border-amber-500/30",
      glowColor: "from-cyan-500 via-blue-500 to-indigo-600",
      badgeGlow: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      desc: isMs 
        ? "Menyusun semula elemen yang bertindih pada skrin telefon, membetulkan saiz fon, menu navigasi yang rosak, dan memastikan paparan mesra pengguna 100% pada semua peranti Android & iOS."
        : "Re-aligning overlapping elements on phone screens, fixing font scaling, broken navigation menus, and ensuring 100% responsive display compatibility across Android & iOS devices.",
      fixes: isMs 
        ? [
            "Elemen bertindih pada skrin telefon (overlapping elements)",
            "Menu navigasi mudah alih tidak berfungsi (mobile menu fixes)",
            "Jadual & borang terkeluar dari sempadan skrin (overflow issues)",
            "Ralat saiz tulisan & ruang kosong (font size & spacing glitches)"
          ]
        : [
            "Overlapping elements on phone layouts",
            "Non-functioning mobile navigation menus",
            "Tables & forms overflowing screen boundaries",
            "Font scale and whitespace alignment fixes"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "speed",
      title: isMs ? "Website Lambat Loading" : "Slow Website Loading",
      category: isMs ? "Prestasi & Kelajuan" : "Performance & Optimization",
      price: "300",
      activeBorder: "border-cyan-500",
      delivery: isMs ? "3-5 Hari" : "3-5 Days",
      complexity: isMs ? "Sederhana" : "Medium",
      complexityScore: 2,
      complexityColor: "text-amber-400 border-amber-500/30",
      glowColor: "from-orange-500 via-amber-500 to-yellow-500",
      badgeGlow: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      desc: isMs
        ? "Mengoptimumkan saiz imej ke format WebP termaju, membersihkan kod CSS/JS yang menghalang loading, menetapkan konfigurasi cache, dan meningkatkan markah kelajuan Lighthouse."
        : "Compressing images to advanced WebP formats, cleanup of blocking JS/CSS scripts, configuring cache headers, and optimizing Lighthouse load speeds.",
      fixes: isMs
        ? [
            "Optimum saiz imej & tukar format WebP (image optimization)",
            "Pembersihan kod script CSS/JS tersekat (script deferring)",
            "Konfigurasi Cache & latency server (cache header tuning)",
            "Peningkatan skor kelajuan Lighthouse sehingga 90+ (audit speed boost)"
          ]
        : [
            "Image optimization and WebP formats compression",
            "Cleaning blocking CSS/JS payloads",
            "Server cache header configurations",
            "Boosting page speed core metrics for Lighthouse 90+"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "form",
      title: isMs ? "Borang Hubungi / E-mel Rosak" : "Broken Contact Form / Email",
      category: isMs ? "Integrasi Fungsi" : "Function Integration",
      price: "250",
      activeBorder: "border-cyan-500",
      delivery: isMs ? "1-2 Hari" : "1-2 Days",
      complexity: isMs ? "Mudah" : "Easy",
      complexityScore: 1,
      complexityColor: "text-emerald-400 border-emerald-500/30",
      glowColor: "from-emerald-500 via-teal-500 to-cyan-500",
      badgeGlow: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      desc: isMs
        ? "Membaiki sistem borang hubungan, sambungan SMTP e-mel, integrasi pautan WhatsApp, dan menyediakan perlindungan daripada serangan spam bot secara selamat."
        : "Fixing contact form logic, SMTP email configurations, WhatsApp link integrations, and implementing secure validation scripts to prevent spam bot submissions.",
      fixes: isMs
        ? [
            "Masalah e-mel borang tidak sampai (SMTP validation errors)",
            "Kegagalan pengesahan data borang (form validation crash)",
            "Pautan terus borang ke API WhatsApp (WhatsApp API routing)",
            "Sekatan perlindungan borang daripada bot spam (anti-spam filter)"
          ]
        : [
            "Form submission emails not arriving (SMTP issues)",
            "Validation script errors showing on submit",
            "Direct routing button to WhatsApp API",
            "Anti-spam bot protection integrations"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "database",
      title: isMs ? "Ralat Database / Log Masuk" : "Database & Auth Errors",
      category: isMs ? "Sistem Backend" : "Backend Database",
      price: "1500",
      activeBorder: "border-rose-500",
      delivery: isMs ? "5-7 Hari" : "5-7 Days",
      complexity: isMs ? "Tinggi" : "High",
      complexityScore: 3,
      complexityColor: "text-rose-400 border-rose-500/30",
      glowColor: "from-rose-500 via-red-500 to-orange-500",
      badgeGlow: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      desc: isMs
        ? "Menyelesaikan isu sambungan pangkalan data (SQLite, MySQL, MongoDB), memulihkan sesi token log masuk pengguna yang terputus, dan membaiki kod ralat query sistem."
        : "Resolving database connection drops (SQLite, MySQL, MongoDB), restoring login token expirations, fixing secure password verification schemas, and debugging backend queries.",
      fixes: isMs
        ? [
            "Terputus sambungan pangkalan data (DB connection timeout)",
            "Ralat cookie & token sesi login (broken sessions & auth)",
            "Isu set semula kata laluan (password hash & reset issues)",
            "Kerosakan skema rekod & ralat query (SQL query errors & crash)"
          ]
        : [
            "Database connection timeouts & server error 500s",
            "Broken browser session cookies and auth tokens",
            "Password hash checks & reset email workflow fixes",
            "Query errors, record conflicts, or database schema crash"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: "cms",
      title: isMs ? "Tambah Panel Admin / CMS" : "Add Admin Panel / CMS Portal",
      category: isMs ? "Pengurusan Sistem" : "Systems Management",
      price: "800",
      activeBorder: "border-purple-500",
      delivery: isMs ? "4-6 Hari" : "4-6 Days",
      complexity: isMs ? "Tinggi" : "High",
      complexityScore: 3,
      complexityColor: "text-rose-400 border-rose-500/30",
      glowColor: "from-purple-500 via-indigo-500 to-blue-500",
      badgeGlow: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      desc: isMs
        ? "Membina portal log masuk admin yang selamat bagi membolehkan anda menambah, menyunting, atau memadam kandungan teks, imej galeri, dan produk secara langsung tanpa menyentuh kod."
        : "Building a secure dashboard interface allowing you to create, edit, or delete text content, gallery images, and services directly without editing source code.",
      fixes: isMs
        ? [
            "Portal log masuk admin yang selamat (secure login dashboard)",
            "Editor teks & tajuk website (inline text content editors)",
            "Urusan muat naik gambar galeri (image upload managers)",
            "Katalog senarai produk / servis (product & service listings)"
          ]
        : [
            "Custom secure admin login dashboard portal",
            "Text inline editor configurations",
            "Image gallery slide uploader configuration",
            "Dynamic product and service catalog database panel"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "hosting",
      title: isMs ? "Isu Server / SSL / Domain" : "Server, SSL & Domain Fixes",
      category: isMs ? "Penyediaan Pelayan" : "DevOps & Hosting",
      price: "250",
      activeBorder: "border-cyan-500",
      delivery: isMs ? "1-2 Hari" : "1-2 Days",
      complexity: isMs ? "Mudah" : "Easy",
      complexityScore: 1,
      complexityColor: "text-emerald-400 border-emerald-500/30",
      glowColor: "from-sky-500 via-indigo-500 to-purple-500",
      badgeGlow: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      desc: isMs
        ? "Memulihkan website yang terpadam dari hosting, memindahkan fail ke pelayan baru, memetakan rekod DNS domain, dan memasang sijil keselamatan HTTPS SSL."
        : "Recovering websites from hosting crashes, migrating assets to new servers, mapping custom domain DNS records, and installing secure HTTPS SSL certificates.",
      fixes: isMs
        ? [
            "Penyelarasan rekod DNS domain (DNS record mapping verification)",
            "Pemasangan sijil keselamatan HTTPS SSL (SSL secure install)",
            "Pemulihan fail backup website dari server (backup recovery)",
            "Migrasi website ke hosting baru (server migration)"
          ]
        : [
            "Checking and mapping domain DNS A-records",
            "Installing secure HTTPS certificates (SSL Setup)",
            "Restoring database or file backups on hosting",
            "Migrating site assets to new stable hosts"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "quick",
      title: isMs ? "Pautan Rosak / Edit Teks CSS" : "Broken Link / CSS Typo Fix",
      category: isMs ? "Pembaikan Segera" : "Quick CSS & Route Fix",
      price: "80",
      activeBorder: "border-cyan-500",
      delivery: isMs ? "Dalam 24 Jam" : "Within 24 Hours",
      complexity: isMs ? "Mudah" : "Easy",
      complexityScore: 1,
      complexityColor: "text-emerald-400 border-emerald-500/30",
      glowColor: "from-zinc-400 via-slate-400 to-zinc-500",
      badgeGlow: "bg-zinc-50/10 text-zinc-400 border-zinc-500/30",
      desc: isMs
        ? "Tukar warna butang, kemas kini ejaan teks atau logo yang rosak, baiki pautan media sosial yang tidak menghala ke destinasi betul, dan pembetulan kecil lain."
        : "Changing accent colors, updating spelling mistakes or logo assets, routing social media handles, and cleaning minor broken route links.",
      fixes: isMs
        ? [
            "Masalah pautan media sosial rosak (broken social handle redirects)",
            "Tukar susun atur warna tema kecil (minor layout color tweaks)",
            "Kemas kini kesilapan ejaan teks (typography typo fixes)",
            "Penyambungan semula pautan butang (button route fix)"
          ]
        : [
            "Fixing broken social media icon redirections",
            "Adjusting button colors or simple layout stylings",
            "Fixing spelling errors & typography updates",
            "Resolving simple buttons target link mappings"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.758l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.758l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: "custom",
      title: isMs ? "Masalah Lain / Kustom" : "Other / Custom Issue",
      category: isMs ? "Servis Kustom / Integrasi" : "Custom Request & Integration",
      price: "Request",
      activeBorder: "border-indigo-500",
      delivery: isMs ? "Bincang Dahulu" : "To Be Discussed",
      complexity: isMs ? "Pakar" : "Expert",
      complexityScore: 4,
      complexityColor: "text-fuchsia-400 border-fuchsia-500/30",
      glowColor: "from-indigo-500 via-purple-500 to-pink-500",
      badgeGlow: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
      desc: isMs
        ? "Mengalami masalah berbeza seperti jangkitan malware/virus, integrasi payment gateway (FPX/Stripe), pepijat plugin WordPress, integrasi API pihak ketiga (Google Maps/Custom API), atau memerlukan ciri baharu? Kami bersedia membaiki dan menyokong sebarang masalah teknikal web."
        : "Experiencing unique issues like malware/virus infections, payment gateway integrations (FPX/Stripe), WordPress theme/plugin conflicts, third-party API configurations (Google Maps/Custom API), or need a custom feature? We cover almost any technical web issue.",
      fixes: isMs
        ? [
            "Pembersihan malware & jangkitan virus (malware detection & cleanup)",
            "Integrasi payment gateway FPX/Stripe (payment gateway integrations)",
            "Masalah plugin & tema WordPress (WordPress troubleshooting)",
            "Integrasi API & fungsi kustom baru (third-party API integrations)"
          ]
        : [
            "Malware scanning, cleanup & security hardening",
            "Payment gateways setup (FPX, Stripe, ToyyibPay)",
            "WordPress theme/plugin conflicts resolution",
            "Third-party API endpoints & custom feature integrations"
          ],
      icon: (className) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // 4-Step Process Timeline Data
  const processTimeline = [
    {
      step: "01",
      title: isMs ? "Diagnose" : "Diagnose",
      tag: isMs ? "100% Percuma" : "100% Free",
      desc: isMs 
        ? "Kongsi pautan website anda dan tangkapan skrin isu yang berlaku untuk dianalisis oleh kami."
        : "Share your website link and screenshots of the errors for us to analyze the core issue.",
      icon: (className: string) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: "02",
      title: isMs ? "Quote" : "Quote",
      tag: isMs ? "Kos Flat-Rate" : "Flat-Rate Price",
      desc: isMs
        ? "Kami berikan anggaran harga telus tanpa caj tersembunyi sebelum sebarang pembetulan dibuat."
        : "Get a clear and fixed quotation estimate with zero hidden costs before repairs commence.",
      icon: (className: string) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: "03",
      title: isMs ? "Fix & Test" : "Fix & Test",
      tag: isMs ? "Deep Testing" : "Deep Testing",
      desc: isMs
        ? "Langkah pembaikan kod dimulakan. Tapak diuji pada pelbagai saiz skrin mudah alih dan pelayar."
        : "Technical codes are corrected, then deeply tested across various phone sizes and web browsers.",
      icon: (className: string) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      step: "04",
      title: isMs ? "Launch" : "Launch & Support",
      tag: isMs ? "Jaminan Waranti" : "Support Warranty",
      desc: isMs
        ? "Website dilancarkan semula dengan selamat, berserta tempoh jaminan waranti sokongan teknikal."
        : "The website goes live safely, protected by our custom post-completion technical support warranty.",
      icon: (className: string) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // 4 structured pillars listing
  const servicePillars = [
    {
      title: isMs ? "Pembaikan Ralat (Bug Fixes)" : "Bug & Code Fixes",
      desc: isMs ? "Pembaikan ralat kod JavaScript, susun atur visual, borang, dan elemen navigasi mudah alih." : "Debugging JavaScript errors, fixing responsive layout shifts, form submissions, and mobile menu items.",
      themeColor: "cyan",
      glowColor: "from-cyan-500/20 to-blue-500/20",
      borderColor: "group-hover:border-cyan-500/30",
      list: isMs 
        ? ["Pembaikan Ralat & Bug Website", "Pembaikan Fungsi Website", "Pembaikan Ralat Borang & Butang", "Pembaikan Responsif Skrin Telefon"]
        : ["Website Error & Bug Debugging", "Website Function Repairs", "Form & Button Action Fixes", "Mobile Responsive Optimizations"]
    },
    {
      title: isMs ? "Prestasi & Kelajuan" : "Performance & SEO Boost",
      desc: isMs ? "Meningkatkan kepantasan loading website bagi mengekalkan pelawat dan menaikkan kedudukan carian Google." : "Enhancing website speed performance to retain customers and rank higher on search engines.",
      themeColor: "amber",
      glowColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/30",
      list: isMs
        ? ["Image Compression & WebP", "Lighthouse Speed (90+ score)", "Kemas kini Kandungan & Imej", "Optimasi Mesra Enjin Carian (SEO)"]
        : ["Modern WebP Image Compression", "Lighthouse Core Web Vitals (90+)", "Dynamic Content & Visual Updates", "Search Engine Optimization (SEO)"]
    },
    {
      title: isMs ? "Integrasi & Server" : "Server & DevOps Support",
      desc: isMs ? "Melancarkan semula website down, memindahkan hosting, memasang sijil SSL, dan mengkonfigurasi DNS." : "Configuring DNS records, resolving hosting downs, server migrations, and installing HTTPS SSL certificates.",
      themeColor: "indigo",
      glowColor: "from-indigo-500/20 to-purple-500/20",
      borderColor: "group-hover:border-indigo-500/30",
      list: isMs
        ? ["Masalah Domain & Rekod DNS", "Pemasangan Sijil HTTPS SSL", "Backup & Migrasi Laman Web", "Alatan AI & Integrasi WhatsApp"]
        : ["Domain DNS A-record Settings", "HTTPS SSL Certificate Installs", "Site Backups & Migrations", "AI Chatbot & WhatsApp Tools"]
    },
    {
      title: isMs ? "Sistem Backend & DB" : "System & Database Engineering",
      desc: isMs ? "Pembangunan panel admin (CMS), penyelarasan pangkalan data, dan pembaikan sistem login." : "Building admin CMS dashboards, debugging database schemas, and correcting secure user log-in portals.",
      themeColor: "fuchsia",
      glowColor: "from-fuchsia-500/20 to-pink-500/20",
      borderColor: "group-hover:border-fuchsia-500/30",
      list: isMs
        ? ["Panel Admin Mudah Edit (CMS)", "Pembaikan Ralat Database (SQLite)", "Ralat Sistem Tempahan & Pesanan", "Isu Log Masuk & Sesi Pengguna"]
        : ["Client-Editable Admin Panels", "Database Schema Fixes (SQLite)", "Booking & Checkout Flow Troubleshooting", "User Auth & Session Restorations"]
    }
  ];

  // Active Issue Object
  const activeIssue = diagnosticIssues.find((issue) => issue.id === activeIssueId) || diagnosticIssues[0];

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 relative py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 tracking-wider text-[11px] uppercase transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {isMs ? "Diagnosis & Sokongan Teknikal" : "Diagnostics & Maintenance"}
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {isMs ? "Pembaikan & Naik Taraf Website" : "Website Fix & Upgrade"}
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {isMs 
              ? "Laman web anda bermasalah atau memerlukan fungsi baru? Gunakan konsol diagnosis interaktif di bawah untuk menyemak anggaran kos, tempoh pembaikan, dan tindakan segera."
              : "Is your website loading slow, broken on mobile, or showing server errors? Use our interactive diagnostics console below to estimate costs, execution timeframes, and solution steps."}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* 1. INTERACTIVE DIAGNOSTICS HUB */}
        <div className="space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-cyan-500 rounded"></span>
              {isMs ? "Konsol Diagnosis Interaktif" : "Interactive Diagnostics Console"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-450">
              {isMs 
                ? "Klik pada ikon ralat di bawah untuk memuatkan laporan pembaikan, jangka masa siap, dan kos permulaan."
                : "Click on any issue node below to load the resolution scope, timeframe, and starting price telemetry."}
            </p>
          </div>

          {/* Grid Selector Buttons with glossy design */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {diagnosticIssues.map((issue) => {
              const isActive = issue.id === activeIssueId;
              return (
                <button
                  key={issue.id}
                  onClick={() => setActiveIssueId(issue.id)}
                  className={`relative group p-4 rounded-xl border flex flex-col items-center justify-center gap-3 text-center transition-all duration-350 select-none ${
                    isActive 
                      ? `bg-zinc-900/90 ${issue.activeBorder} shadow-[0_4px_20px_rgba(16,185,129,0.08)]`
                      : "backdrop-blur-md bg-zinc-950/40 border-zinc-900/80 hover:border-zinc-800 hover:bg-zinc-900/30 text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {/* Icon Tile */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isActive 
                      ? `bg-zinc-950 border-cyan-500/30 text-cyan-400`
                      : "bg-zinc-900/50 border-zinc-900/60 text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-800"
                  }`}>
                    {issue.icon("w-5.5 h-5.5")}
                  </div>

                  {/* Label */}
                  <span className={`text-[11px] font-extrabold tracking-tight line-clamp-2 leading-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}>
                    {issue.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Console Telemetry Detail Box - futuristic diagnostics screen */}
          <div className="relative rounded-2xl p-[1px] bg-zinc-900/40 overflow-hidden shadow-2xl">
            {/* Ambient live color glow border */}
            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${activeIssue.glowColor} opacity-20 blur-sm`} />
            
            {/* Futuristic Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "16px 16px"
              }}
            />
            
            <div className="relative rounded-[15px] bg-zinc-950/95 p-6 md:p-8 border border-zinc-850 flex flex-col lg:flex-row gap-8 justify-between items-stretch">
              
              {/* Left Panel: Telemetry Widgets */}
              <div className="w-full lg:w-2/5 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-zinc-900 pb-6 lg:pb-0 lg:pr-8 relative">
                
                {/* Visual glow element behind price */}
                <div className={`absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r ${activeIssue.glowColor} opacity-5 rounded-full blur-3xl pointer-events-none`} />

                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                        {isMs ? "KATEGORI DIAGNOSIS" : "DIAGNOSTIC CATEGORY"}
                      </span>
                      <h3 className="text-base font-extrabold text-zinc-300 mt-1">
                        {activeIssue.category}
                      </h3>
                    </div>
                    {/* Blinking debugger dot */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LIVE_SCAN</span>
                    </div>
                  </div>

                  {/* Telemetry Price & Delivery Widgets */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 flex flex-col justify-center">
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-wider">
                        {isMs ? "Harga Permulaan" : "Starting Price"}
                      </span>
                      <span className="text-2xl font-black bg-gradient-to-r from-white via-zinc-100 to-zinc-350 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] mt-1">
                        {activeIssue.price === "Request" ? "Custom" : `RM${activeIssue.price}+`}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 flex flex-col justify-center">
                      <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-wider">
                        {isMs ? "Tempoh Siap" : "Timeframe"}
                      </span>
                      <span className="text-sm font-extrabold text-zinc-200 flex items-center gap-1 mt-2">
                        <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {activeIssue.delivery}
                      </span>
                    </div>
                  </div>

                  {/* Graphical Complexity Widget */}
                  <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-900 space-y-2.5">
                    <div className="flex justify-between items-center text-[8px] font-mono text-zinc-555 uppercase tracking-wider">
                      <span>{isMs ? "Tahap Kerumitan" : "Complexity Rating"}</span>
                      <span className={`font-bold tracking-widest ${activeIssue.complexityColor.split(" ")[0]}`}>
                        {activeIssue.complexity.toUpperCase()}
                      </span>
                    </div>
                    {/* Complexity Gauge Segments */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[1, 2, 3, 4].map((seg) => {
                        const isLit = seg <= activeIssue.complexityScore;
                        let segmentBg = "bg-zinc-800";
                        if (isLit) {
                          if (activeIssue.complexityScore === 1) segmentBg = "bg-emerald-500";
                          else if (activeIssue.complexityScore === 2) segmentBg = "bg-amber-500";
                          else if (activeIssue.complexityScore === 3) segmentBg = "bg-rose-500";
                          else segmentBg = "bg-gradient-to-r from-purple-500 to-pink-500";
                        }
                        return (
                          <div 
                            key={seg} 
                            className={`h-2.5 rounded-sm transition-all duration-500 ${segmentBg} ${
                              isLit ? "shadow-[0_0_8px_rgba(59,130,246,0.1)]" : ""
                            }`} 
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block text-[9px] font-mono text-zinc-500 relative z-10 pt-4">
                  DIAGNOSTIC_CHANNEL: C_{activeIssue.id.toUpperCase()} // SYS: OK
                </div>
              </div>

              {/* Right Panel: Solution & ECG ECG heart pulse wave */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between gap-6 relative">
                
                {/* Heartbeat ECG pulse wave for futuristic visual */}
                <svg className="w-28 h-6 text-zinc-800/40 absolute top-0 right-0 hidden md:block" viewBox="0 0 100 20" fill="none">
                  <path d="M0 10 h25 l3 -6 l3 12 l3 -6 h20 l3 -6 l3 12 l3 -6 h35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="0" className="animate-pulse" />
                </svg>

                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                      {isMs ? "ANALISIS TEKNIKAL" : "TECHNICAL RESOLUTION"}
                    </span>
                    <h4 className="text-lg font-black text-white mt-1">
                      {activeIssue.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                      {activeIssue.desc}
                    </p>
                  </div>

                  {/* Checked fixes list */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                      {isMs ? "SKOP DIAGNOSIS DIUJI" : "AUDITED WORK SCOPE"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeIssue.fixes.map((fix, idx) => {
                        // Set checkmark colors based on active theme
                        let textCheckColor = "text-cyan-400";
                        if (activeIssue.complexityScore === 2) textCheckColor = "text-amber-400";
                        if (activeIssue.complexityScore === 3) textCheckColor = "text-rose-400";
                        if (activeIssue.complexityScore === 4) textCheckColor = "text-fuchsia-400";

                        return (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-350 group/item">
                            <span className={`shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110 ${textCheckColor}`}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="line-clamp-1 group-hover/item:text-zinc-200 transition-colors duration-300">{fix}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Call to Action Panel */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center gap-4 relative z-10">
                  <a
                    href={generateQuickFixLink(activeIssue.title, parseFloat(activeIssue.price.replace(/[^0-9.]/g, "")) || 0)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-zinc-950 transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.15)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.25)] shrink-0 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 1.978 14.1 1.953 11.47 1.951 6.037 1.951 1.61 6.32 1.607 11.75c-.001 1.632.455 3.222 1.32 4.629l-.995 3.635 3.715-.96z" />
                    </svg>
                    {isMs ? "Bincang Masalah Ini di WhatsApp" : "Discuss This Issue on WhatsApp"}
                  </a>
                  <span className="text-[10px] text-zinc-500 leading-relaxed text-center sm:text-left">
                    {isMs 
                      ? "*Tiada deposit diagnosis diperlukan. Pemeriksaan fail & pautan website asal adalah 100% PERCUMA."
                      : "*No initial deposit required for system scoping. Original site checks are 100% FREE."}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. 4-PILLAR SERVICE CATEGORIES (INFOGRAPHIC TIERS) */}
        <div className="space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded"></span>
              {isMs ? "Kategori Pembaikan Tersusun" : "Structured Service Offerings"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-450">
              {isMs 
                ? "Pecahan kepakaran membaiki, membina, dan menyelenggara sistem laman web secara profesional."
                : "Professional classifications of our code debugging, performance optimization, and backend engineering."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((pillar, idx) => {
              // Set bullet check icon color themes
              let dotColor = "text-cyan-400";
              if (pillar.themeColor === "amber") dotColor = "text-amber-400";
              if (pillar.themeColor === "indigo") dotColor = "text-indigo-400";
              if (pillar.themeColor === "fuchsia") dotColor = "text-fuchsia-400";

              return (
                <GlowCard key={idx} color={pillar.glowColor} className="group">
                  <div className="space-y-5 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Badge header */}
                      <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-${pillar.themeColor}-500 inline-block`} />
                        {pillar.title}
                      </h3>
                      
                      <p className="text-xs text-zinc-450 leading-relaxed min-h-[48px]">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="w-full border-t border-zinc-900/50 pt-4 space-y-2.5">
                      {pillar.list.map((item, listIdx) => (
                        <div key={listIdx} className="flex items-start gap-2 text-xs text-zinc-350">
                          <svg className={`w-3.5 h-3.5 ${dotColor} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* 3. 4-STEP PROCESS TIMELINE INFOGRAPHIC */}
        <div className="space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded"></span>
              {isMs ? "Proses Pembaikan Transparan" : "Transparent Work Pipeline"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-450">
              {isMs 
                ? "Aliran kerja 4 langkah mudah untuk diagnosis masalah kod sehingga penyerahan semula."
                : "A simple 4-step workflow mapping out initial script analysis to final live server launch."}
            </p>
          </div>

          {/* Timeline Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Connector dashed vector line between step cards (hidden on mobile) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-zinc-800 z-0 hidden md:block" />

            {processTimeline.map((item, i) => (
              <div 
                key={i} 
                className="relative z-10 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    {/* Floating number count */}
                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent opacity-80 group-hover:scale-105 transition-transform duration-300">
                      {item.step}
                    </span>
                    
                    {/* Small visual tag chip */}
                    <span className="text-[8px] font-mono tracking-widest uppercase text-zinc-500 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {item.icon("w-4 h-4 text-cyan-400 shrink-0")}
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-450 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes & Terms Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-zinc-900">
          {/* Notes column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-450">
            <p className="font-bold text-zinc-200 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-zinc-400 rounded-sm"></span>
              {isMs ? "Nota Penting:" : "Important Notes:"}
            </p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed text-zinc-450">
              <li>{isMs ? "Harga akhir bergantung kepada keadaan kod asal website, kerumitan ralat, dan bilangan halaman." : "Final quote depends on original source code conditions, error complexity, and total page volumes."}</li>
              <li>{isMs ? "Pautan website, tangkapan skrin, serta akses hosting (cPanel/Vercel) mungkin diperlukan untuk siasatan." : "Website links, visual screenshots, and hosting credentials (cPanel/Vercel) are required for full diagnosis."}</li>
            </ul>
          </div>

          {/* Payment Terms column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-450">
            <p className="font-bold text-zinc-200 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-zinc-400 rounded-sm"></span>
              {isMs ? "Terma Pembayaran:" : "Payment Terms:"}
            </p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed text-zinc-450">
              <li>{isMs ? "Pembaikan Utama (Redesign/CMS): 50% deposit mula. Baki dibayar selepas draf disahkan hidup." : "Major Upgrade (Redesign/CMS): 50% deposit before work start. Balance settled upon live staging preview."}</li>
              <li>{isMs ? "Pembaikan Kecil / Kos Bawah RM500: Pembayaran penuh diperlukan sebelum kerja pembaikan bermula." : "Small Fixes / Under RM500: Full payment is required upfront before work starts."}</li>
            </ul>
          </div>
        </div>

        {/* Big CTA QR Card */}
        <div className="max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-950/20 via-indigo-950/10 to-cyan-950/10 border border-purple-500/20 relative overflow-hidden text-center space-y-4 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
          <h3 className="text-xl font-bold text-white">{isMs ? "Mula Pembaikan Sekarang" : "Start Website Fix Now"}</h3>
          <p className="text-xs text-zinc-450 leading-relaxed">
            {isMs 
              ? "Hantar tangkapan skrin ralat atau bincangkan masalah hosting anda terus dengan Danial di WhatsApp."
              : "Click below to share screenshots of your website errors or consult your hosting settings directly with Danial."}
          </p>
          <a
            href="https://wa.me/60136632092?text=Hai%20Danial,%20saya%20nak%20bincang%20untuk%20repair/upgrade%20website%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-zinc-950 shadow-md hover:shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-all duration-300 cursor-pointer"
          >
            {isMs ? "Hubungi Danial di WhatsApp" : "Contact Danial via WhatsApp"}
          </a>
          <div className="text-[10px] text-zinc-650 font-mono">0136632092</div>
        </div>
      </div>
    </div>
  );
}
