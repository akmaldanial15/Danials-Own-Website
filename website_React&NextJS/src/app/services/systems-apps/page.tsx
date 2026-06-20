"use client";

import React from "react";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/context/LanguageContext";
import { generateWhatsAppLink } from "@/utils/whatsapp";

export default function SystemsAppsServices() {
  const { language } = useLanguage();

  const isMs = language === "ms";

  // Data mappings
  const systemPackages = [
    {
      name: isMs ? "Panel Admin Permulaan" : "Starter Admin Panel",
      price: "RM800+",
      desc: isMs
        ? "Panel kawalan ringkas untuk menyunting kandungan website, gambar, servis, atau senarai produk."
        : "Simple dashboard to edit website content, images, services or product list."
    },
    {
      name: isMs ? "Sistem Tempahan / Pesanan" : "Booking / Order System",
      price: "RM1,500+",
      desc: isMs
        ? "Urus temu janji, jadual tempahan, rekod pesanan, atau borang permintaan servis bersepadu."
        : "Manage appointments, booking slots, order records, or service request flows."
    },
    {
      name: isMs ? "Sistem Database / Pangkalan Data" : "Database System",
      price: "RM1,500+",
      desc: isMs
        ? "Pangkalan data teroptimum untuk menyimpan, mencari, dan menapis rekod pelanggan atau data perniagaan."
        : "Structured database to secure, query, and filter customer records or business data."
    },
    {
      name: isMs ? "Sistem Inventori / Produk" : "Inventory / Product System",
      price: "RM2,200+",
      desc: isMs
        ? "Pengurusan stok produk, kategori barangan, kemasukan stok masuk/keluar, dan laporan asas."
        : "Manage product catalogs, stock inventory levels, categories, and basic dispatch sheets."
    },
    {
      name: isMs ? "Pembangunan Web + Aplikasi Android" : "Custom Web + Android App",
      price: "RM4,800+",
      desc: isMs
        ? "Sistem modular tersuai yang berjalan selari antara laman web admin dan aplikasi mudah alih Android."
        : "Custom synchronized system bridging a web platform and an Android mobile application."
    },
    {
      name: isMs ? "Alatan AI & Automasi" : "AI Tools & Automation",
      price: "Request",
      desc: isMs
        ? "Integrasi ejen chatbot AI, bot auto-reply WhatsApp, penjana PDF automatik, atau ringkasan data pintar."
        : "Integration of smart AI chatbots, WhatsApp responders, automated invoice PDFs, or workflow automations."
    }
  ];

  const systemsWeBuild = [
    isMs ? "Dashboard Admin / Kawalan" : "Admin Dashboard",
    isMs ? "Sistem Database Tersusun" : "Database System",
    isMs ? "Sistem Tempahan Jadual" : "Booking System",
    isMs ? "Sistem Pengurusan Pesanan" : "Order Management System",
    isMs ? "Pengurusan Produk & Servis" : "Product / Service Management",
    isMs ? "Sistem Inventori & Stok" : "Inventory Management System",
    isMs ? "Sistem Tiket / Pertanyaan" : "Customer Inquiry System",
    isMs ? "Pengurusan Kakitangan / Tugasan" : "Staff / Task Management",
    isMs ? "Sistem Log Masuk & Peranan" : "User Login & Role System",
    isMs ? "Dashboard Laporan & Graf" : "Report & Chart Dashboard",
    isMs ? "Sistem CRM Ringkas" : "Simple CRM System",
    isMs ? "Sistem Invois & Sebut Harga" : "Quotation & Invoice System",
    isMs ? "Sistem Temu Janji Pelanggan" : "Appointment System",
    isMs ? "Panel Suntingan Kandungan" : "Website Editable Panel",
    isMs ? "Aplikasi Web Mudah Alih & Desktop" : "Web App for Mobile & Desktop",
    isMs ? "Alatan AI & Integrasi Automasi" : "AI Tools & Automation Integration",
    isMs ? "Sistem Perniagaan Kustom Khusus" : "Custom Business System",
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
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
            {isMs ? "SISTEM PERNIAGAAN & APLIKASI" : "BUSINESS SYSTEMS & MOBILE APPS"}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {isMs ? "Sistem & Aplikasi Kustom" : "Custom App & Business System"}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {isMs 
              ? "Bina sistem perniagaan anda sendiri. Daripada sistem pangkalan data web hingga ke aplikasi Android, kami mereka bentuk dashboard admin, database, dan alat digital khusus mengikut keperluan unik anda."
              : "Build your own business system. From web system to Android app, we create custom dashboards, databases and digital tools based on your business needs."}
          </p>

          {/* Subtle horizontal gradient divider line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* System Package Options Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-900 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded"></span>
            {isMs ? "Pilihan Pakej Sistem" : "System Package Options"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemPackages.map((pkg, i) => (
              <GlowCard key={i} color="from-purple-500 to-indigo-500">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-bold text-zinc-100">{pkg.name}</h3>
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/10 shrink-0">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[48px]">
                      {pkg.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-900/40">
                    <a
                      href={generateWhatsAppLink({
                        packageName: pkg.name,
                        priceText: `Mulai ${pkg.price}`,
                        totalEstimate: parseFloat(pkg.price.replace(/[^0-9.]/g, "")) || 1500
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center py-2.5 rounded-xl text-xs font-semibold bg-zinc-905 border border-zinc-800 text-zinc-350 hover:bg-zinc-900 hover:text-white transition-all"
                    >
                      {isMs ? "Tempah / Bincang Struktur →" : "Book / Discuss Structure →"}
                    </a>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Systems We Can Build (Checklist Grid) */}
        <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-500 rounded"></span>
            {isMs ? "Jenis Sistem Yang Boleh Kami Bina" : "Systems We Can Build"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemsWeBuild.map((sys, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-350">
                <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{sys}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes & Disclaimers Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-zinc-900">
          {/* Notes column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{isMs ? "Nota Penting Projek:" : "Important Project Notes:"}</p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed">
              <li>{isMs ? "Harga akhir bergantung kepada fungsi sistem, kerumitan struktur pangkalan data, dan keperluan aplikasi Android." : "Final price depends on system features, database structure, Android app requirements, and custom functions."}</li>
              <li>{isMs ? "Laman Web / Web System: Caj hosting, domain, SSL, dan yuran pelayan luar (server fees) dicaj berasingan melainkan dinyatakan sebaliknya." : "Web System: Domain, hosting, SSL, and server fees are charged separately unless stated otherwise."}</li>
              <li>{isMs ? "Aplikasi Android: Pihak kami menyediakan APK atau demo ujian. Yuran pendaftaran Google Play Store Developer dicaj berasingan." : "Android App: APK and demo releases are provided. Google Play Console developer registration is separate."}</li>
            </ul>
          </div>

          {/* Hosting & Payment column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{isMs ? "Penyediaan Demo & Bayaran:" : "Demo Access & Payments:"}</p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed">
              <li>{isMs ? "Penyediaan Demo: Hosting percuma / terhad boleh digunakan bagi tujuan menguji aliran kerja (workflow) sistem sebelum pelancaran rasmi." : "Demo Testing: Free or temporary staging servers are set up to test logic flows before production deployment."}</li>
              <li>{isMs ? "Terma Bayaran Peringkat: 50% sebelum mula, 20% selepas draf suntingan utama pertama disiapkan, dan 30% sebelum penyerahan kod sumber rasmi." : "Phased Milestones: 50% deposit before start, 20% after first major edit review, 30% before final production code handover."}</li>
            </ul>
          </div>
        </div>

        {/* Big CTA QR Card */}
        <div className="max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-cyan-950/10 border border-purple-500/20 relative overflow-hidden text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-white">{isMs ? "Rancang Sistem Anda" : "Plan Your System"}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {isMs 
              ? "Klik butang di bawah untuk membincangkan rangka pangkalan data, reka bentuk menu dashboard, atau integrasi aplikasi Android dengan Danial."
              : "Click the button below to discuss database blueprints, dashboard menu navigation, or Android sync integration with Danial."}
          </p>
          <a
            href="https://wa.me/60136632092?text=Hai%20Danial,%20saya%20nak%20bincang%20untuk%20bina%20sistem/app%20kustom%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            {isMs ? "Bincang Sistem di WhatsApp" : "Discuss System on WhatsApp"}
          </a>
          <div className="text-[10px] text-zinc-500 font-mono">0136632092</div>
        </div>
      </div>
    </div>
  );
}
