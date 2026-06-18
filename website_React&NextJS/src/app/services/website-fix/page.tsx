"use client";

import React from "react";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/context/LanguageContext";
import { generateQuickFixLink } from "@/utils/whatsapp";

export default function WebsiteFixServices() {
  const { language } = useLanguage();

  const isMs = language === "ms";

  // Data mappings
  const prices = [
    { name: isMs ? "Pemeriksaan Asas Website" : "Basic Website Check", price: "FREE" },
    { name: isMs ? "Pembaikan Kecil (Small Fix)" : "Small Fix", price: "RM80+" },
    { name: isMs ? "Pembaikan Biasa (Minor Repair)" : "Minor Website Repair", price: "RM150+" },
    { name: isMs ? "Susun Atur Mudah Alih (Mobile Layout)" : "Mobile Layout Fix", price: "RM200+" },
    { name: isMs ? "Pembaikan Borang Hubungi (Contact Form)" : "Contact Form Fix", price: "RM250+" },
    { name: isMs ? "Isu Hosting / Domain / SSL" : "Hosting / Domain / SSL Fix", price: "RM250+" },
    { name: isMs ? "Reka Semula Laman Web (Redesign)" : "Website Redesign", price: "RM500+" },
    { name: isMs ? "Naik Taraf Penuh (Full Upgrade)" : "Full Website Upgrade", price: "RM1,200+" },
    { name: isMs ? "Panel Admin Mudah Edit (Client Editable)" : "Client Editable Admin Panel", price: "RM800+" },
    { name: isMs ? "Pembaikan Database / Sistem" : "Database / System Repair", price: "RM1,500+" },
    { name: isMs ? "Alatan AI & Automasi" : "AI Tools & Automation", price: "Request" },
  ];

  const services = [
    isMs ? "Pembaikan Ralat & Bug Website" : "Website Error & Bug Fixing",
    isMs ? "Pembaikan Fungsi Website" : "Website Function Repair",
    isMs ? "Naik Taraf Fungsi Website" : "Website Function Upgrade",
    isMs ? "Pembaikan Ralat Borang / Butang / Pautan" : "Form / Button / Link Error Fix",
    isMs ? "Pembaikan Responsif Mudah Alih" : "Mobile Responsive Fix",
    isMs ? "Peningkatan Kelajuan Loading Website" : "Website Speed Improvement",
    isMs ? "Kemaskini Kandungan & Imej" : "Content & Image Update",
    isMs ? "Masalah Domain / Hosting / SSL" : "Domain / Hosting / SSL Issue",
    isMs ? "Backup & Migrasi Laman Web" : "Website Backup & Migration",
    isMs ? "Panel Admin Boleh Diedit Pelanggan" : "Client Editable Admin Panel",
    isMs ? "Pembaikan Ralat Pangkalan Data" : "Database Error Fixing",
    isMs ? "Ralat Sistem Tempahan / Pesanan" : "Booking / Order System Error",
    isMs ? "Isu Sistem Log Masuk / Pengguna" : "Login / User System Issue",
    isMs ? "Pengurusan Produk / Servis" : "Product / Service Management",
    isMs ? "Alatan AI & Automasi" : "AI Tools & Automation",
    isMs ? "Penyelenggaraan Bulanan Laman Web" : "Monthly Website Maintenance",
    isMs ? "Permintaan Kustom Laman Web" : "Custom Website Request",
  ];

  const guides = [
    {
      title: isMs ? "Pemeriksaan Asas (Basic Check)" : "Basic Check",
      price: "FREE",
      desc: isMs
        ? "Pemeriksaan asas percuma. Harga pembaikan bergantung kepada jenis isu dan tahap kerumitan."
        : "Free basic check. Repair price depends on issue type and complexity."
    },
    {
      title: isMs ? "Pembaikan Kecil (Small Fix)" : "Small Fix",
      price: "RM80+",
      desc: isMs
        ? "Pautan rosak, kemaskini teks/imej, pembetulan layout mudah atau isu CSS."
        : "Broken link, text/image update, simple layout or CSS issue."
    },
    {
      title: isMs ? "Pembaikan Fungsi (Function Fix)" : "Function Fix",
      price: "RM150+",
      desc: isMs
        ? "Ralat borang, butang, popup tidak berfungsi, halaman tidak loading atau isu JavaScript."
        : "Form, button, popup error, page not loading or JavaScript issue."
    },
    {
      title: isMs ? "Pembaikan Teknikal (Technical Fix)" : "Technical Fix",
      price: "RM250+",
      desc: isMs
        ? "Masalah hosting, domain, setup SSL, upload, deployment atau isu server."
        : "Hosting, domain, SSL, upload, deployment or server issue."
    },
    {
      title: isMs ? "Pembaikan Utama (Major Fix)" : "Major Fix",
      price: "RM500+",
      desc: isMs
        ? "Reka semula (redesign), migrasi laman web, naik taraf kod lama, atau pembaikan pelbagai halaman."
        : "Redesign, migration, old website upgrade or multiple page issue."
    },
    {
      title: isMs ? "Pembaikan Sistem (System Fix)" : "System Fix",
      price: "RM1,500+",
      desc: isMs
        ? "Masalah pangkalan data, log masuk admin, panel kawalan, sistem tempahan atau isu backend."
        : "Database, login, admin panel, booking/order or backend issue."
    }
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20">
            {isMs ? "SOKONGAN & PENYELENGGARAAN" : "SUPPORT & MAINTENANCE"}
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            {isMs ? "Pembaikan & Naik Taraf Website" : "Website Fix & Upgrade"}
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isMs 
              ? "Sudah mempunyai website tetapi memerlukan penambahbaikan? Kami membaiki ralat, mereka semula reka bentuk lama, menaik taraf fungsi, dan membina panel admin tersuai."
              : "Already have a website but need improvement? We help repair website errors, redesign old websites, upgrade website functions and build custom admin panels so your website can be easier to manage."}
          </p>
        </div>

        {/* Pricing & Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prices Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between">
            <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-purple-500 rounded"></span>
              {isMs ? "Anggaran Harga Permulaan" : "Starting Prices"}
            </h2>
            <div className="mt-4 space-y-3 flex-grow">
              {prices.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs sm:text-sm py-1 border-b border-zinc-900/40">
                  <span className="text-zinc-400">{item.name}</span>
                  <span className="font-bold text-purple-400">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Checklist Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between">
            <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-cyan-500 rounded"></span>
              {isMs ? "Perkhidmatan Yang Disediakan" : "Services Provided"}
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((svc, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-350">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixing Price Guide Blocks */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-900 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded"></span>
            {isMs ? "Panduan Harga Pembaikan" : "Fixing Price Guide"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-150">{item.title}</h4>
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/10 shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-450 leading-relaxed min-h-[48px]">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-zinc-900/50 mt-4">
                  <a
                    href={generateQuickFixLink(item.title, parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-850 transition-all hover:text-white"
                  >
                    {isMs ? "Bincang Masalah →" : "Discuss Issue →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes & Terms Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-zinc-900">
          {/* Notes column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{isMs ? "Nota Penting:" : "Important Note:"}</p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed">
              <li>{isMs ? "Harga akhir bergantung kepada keadaan website, kerumitan ralat, bilangan halaman dan ciri kustom." : "Final price depends on website condition, error complexity, number of pages and custom features."}</li>
              <li>{isMs ? "Pautan website, tangkapan skrin, akses hosting atau kod sumber (source code) mungkin diperlukan." : "Website link, screenshot, hosting access or source code may be required."}</li>
            </ul>
          </div>

          {/* Payment Terms column */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{isMs ? "Terma Pembayaran:" : "Payment Terms:"}</p>
            <ul className="space-y-2.5 list-disc list-inside leading-relaxed">
              <li>{isMs ? "Pakej Standard: 50% deposit mula. Baki bayaran sebelum website dilancarkan secara langsung." : "Standard: 50% deposit before start. Balance payment before website goes live."}</li>
              <li>{isMs ? "Sistem Kustom: 50% deposit mula, 30% selepas preview draf pertama, 20% sebelum penyerahan." : "Custom System: 50% deposit before start, 30% after first preview, 20% before final delivery."}</li>
              <li>{isMs ? "Pembaikan Kecil (Small Fix): Bayaran penuh mungkin diperlukan sebelum kerja pembaikan bermula." : "Small Fix: Full payment may be required before work starts."}</li>
            </ul>
          </div>
        </div>

        {/* Big CTA QR Card */}
        <div className="max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-cyan-950/10 border border-purple-500/20 relative overflow-hidden text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-white">{isMs ? "Mula Pembaikan Sekarang" : "Start Website Fix Now"}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {isMs 
              ? "Klik butang di bawah untuk menghantar tangkapan skrin ralat atau bincang butiran sistem web anda di WhatsApp."
              : "Click the button below to share screenshots of issues or discuss your website maintenance via WhatsApp."}
          </p>
          <a
            href="https://wa.me/60136632092?text=Hai%20Danial,%20saya%20nak%20bincang%20untuk%20repair/upgrade%20website%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            {isMs ? "Hubungi Danial di WhatsApp" : "Contact Danial via WhatsApp"}
          </a>
          <div className="text-[10px] text-zinc-500 font-mono">0136632092</div>
        </div>
      </div>
    </div>
  );
}
