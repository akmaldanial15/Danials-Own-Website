"use client";

import React, { useState, useMemo } from "react";
import { PHONE_NUMBER } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const faqs = useMemo(() => {
    return [
      {
        q: language === "ms" 
          ? "Adakah harga pakej termasuk yuran domain dan hosting?" 
          : "Are domain and hosting fees included in the package price?",
        a: language === "ms"
          ? "Tidak. Yuran pendaftaran domain (.com/.com.my) dan penyewaan server/hosting dicaj secara berasingan melainkan dinyatakan sebaliknya. Ini bagi membolehkan anda memegang hak milik mutlak akaun hosting anda sendiri."
          : "No. Domain registration (.com/.com.my) and server/hosting subscription fees are charged separately unless stated otherwise. This ensures you maintain 100% direct ownership of your hosting accounts."
      },
      {
        q: language === "ms"
          ? "Bagaimanakah terma pembayaran projek?"
          : "What are the project payment milestones?",
        a: language === "ms"
          ? "Pembayaran terbahagi kepada 3 fasa standard kami: 35% sebagai deposit/pendahuluan sebelum projek dimulakan, 35% selepas preview draf reka bentuk pertama diluluskan, dan baki 30% sebelum penyerahan kod sumber penuh (source code) dan pelancaran."
          : "Payments are split into 3 standard milestones: 35% deposit/retainer before project commencement, 35% after the first design preview/draft is approved, and the remaining 30% balance before source code handover and deployment."
      },
      {
        q: language === "ms"
          ? "Berapa lamakah tempoh masa penyiapan projek?"
          : "How long does a website or system build take?",
        a: language === "ms"
          ? "Pakej Fast-Track (Basic & Standard) biasanya siap dalam tempoh 3 ke 7 hari bekerja. Bagi Pakej Custom & Sistem Enterprise yang memerlukan pangkalan data terperinci, tempoh siap adalah antara 4 ke 8 minggu bergantung kepada kerumitan fungsi sistem."
          : "Fast-Track packages (Basic & Standard) are typically completed within 3 to 7 working days. For Custom Packages and Enterprise Systems that require advanced databases, the build takes 4 to 8 weeks depending on complexity."
      },
      {
        q: language === "ms"
          ? "Adakah aplikasi Android (APK) disediakan untuk ujian?"
          : "Do you provide an Android APK for testing?",
        a: language === "ms"
          ? "Ya. Bagi pakej sistem kustom yang merangkumi aplikasi Android, kami akan menyediakan fail APK percuma atau pautan demo untuk anda pasang dan uji pada telefon pintar anda sendiri sepanjang fasa pembangunan."
          : "Yes. For custom package projects that include an Android application, we provide test APK files or live demo testing links for you to install and review on your own smartphone during development phases."
      },
      {
        q: language === "ms"
          ? "Bagaimana jika terdapat ralat atau pepijat (bugs) selepas pelancaran?"
          : "What happens if bugs or errors appear after launch?",
        a: language === "ms"
          ? "Kami menyediakan jaminan sokongan teknikal percuma selama 30 hari selepas penyerahan projek untuk membetulkan sebarang pepijat yang dikesan. Kami juga menawarkan pakej penyelenggaraan bulanan (maintenance) jika anda memerlukan sokongan berterusan."
          : "We provide 30 days of free post-launch support to resolve any bugs or errors detected. Monthly maintenance support plans are also available should you require continuous, long-term technical operations."
      }
    ];
  }, [language]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

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
            {t("navContact")}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("contactHeader")}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("contactDesc")}
          </p>

          {/* Subtle horizontal gradient divider line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Card 1: WhatsApp Direct */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/10 inline-block">
                {t("supportTag")}
              </span>
              <h3 className="text-2xl font-bold text-white">{t("contactWhatsAppTitle")}</h3>
              <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                {t("contactWhatsAppDesc")}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 flex items-center gap-4">
                {/* Mock QR graphic representation */}
                <div className="w-14 h-14 bg-white rounded p-1 flex flex-col justify-between shrink-0">
                  <div className="flex justify-between">
                    <div className="w-5 h-5 bg-black rounded-[1px]"></div>
                    <div className="w-5 h-5 bg-black rounded-[1px]"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-5 h-5 bg-black rounded-[1px]"></div>
                    <div className="w-3.5 h-3.5 bg-indigo-600 rounded-[1px]"></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium leading-none">{t("contactWhatsAppPhone")}</p>
                  <p className="text-sm font-bold text-white mt-2">+{PHONE_NUMBER}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/60136632092?text=Hi%20Danial,%20saya%20mahu%20bertanya%20tentang%20servis%20website/sistem.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-950/20"
              >
                {t("btnWhatsAppStart")}
              </a>
            </div>
          </div>

          {/* Card 2: Email & Other Channels */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/10 inline-block">
                {t("emailTag")}
              </span>
              <h3 className="text-2xl font-bold text-white">{t("contactEmailTitle")}</h3>
              <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                {t("contactEmailDesc")}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/15">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium leading-none">{t("emailLabel")}</p>
                  <a href="mailto:danialwebsystems@gmail.com" className="text-xs sm:text-sm font-semibold text-zinc-200 mt-2 block hover:underline">
                    danialwebsystems@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="mailto:danialwebsystems@gmail.com"
                className="inline-flex w-full items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-855 transition-all"
              >
                {t("btnEmailStart")}
              </a>
            </div>
          </div>
        </div>

        {/* Accordion FAQs Section */}
        <div className="space-y-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-900 pb-3 flex items-center gap-3">
            <span className="w-2 h-6 bg-purple-500 rounded"></span>
            {t("faqHeader")}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isSelected = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-xl border border-zinc-900 bg-zinc-950 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-zinc-200 hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-zinc-500 transition-transform duration-300 shrink-0 ml-4 ${
                      isSelected ? "rotate-180 text-purple-400" : ""
                    }`}>
                      ▼
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isSelected ? "max-h-[300px] border-t border-zinc-900/50" : "max-h-0"
                  }`}>
                    <p className="p-5 text-xs sm:text-sm text-zinc-405 leading-relaxed bg-zinc-900/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
