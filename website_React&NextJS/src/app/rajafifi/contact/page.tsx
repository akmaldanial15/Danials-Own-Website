"use client";

import React, { useState, useMemo } from "react";
import { PHONE_NUMBER } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";
import ScrollReveal from "@/components/ui/ScrollReveal";


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
          ? "Pembayaran terbahagi kepada 3 fasa standard kami: 50% sebagai deposit/pendahuluan sebelum projek dimulakan, 20% selepas preview draf reka bentuk utama pertama disiapkan, dan baki 30% sebelum penyerahan kod sumber penuh (source code) dan pelancaran."
          : "Payments are split into 3 standard milestones: 50% deposit/retainer before project commencement, 20% after the first major design/draft edit preview, and the remaining 30% balance before source code handover and deployment."
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
    <div className="relative min-h-screen bg-transparent text-zinc-150 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      
      {/* Liquid moving gradient blobs in background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[80px] animate-blob z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-[80px] animate-blob animation-delay-4000 z-0 pointer-events-none" />

      <style jsx global>{`
        @keyframes float-blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: float-blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2.5s;
        }
        .animation-delay-4000 {
          animation-delay: 5s;
        }
        .text-glow {
          text-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 relative py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 tracking-wider text-[11px] uppercase transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("navContact")}
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("contactHeader")}
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("contactDesc")}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp with REAL QR (7 cols for nice spacing) */}
          <ScrollReveal className="md:col-span-7 p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-850 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8 group" animation="slide-up" delay={0}>
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/10 to-transparent opacity-10 blur-[2px] -z-10" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  {t("supportTag")}
                </span>
                <span className="text-[10px] font-bold text-zinc-550 tracking-wider">
                  {language === "ms" ? "BALAS SEGERA" : "INSTANT REPLY"}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{t("contactWhatsAppTitle")}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {t("contactWhatsAppDesc")}
              </p>
            </div>

            {/* QR Code and Scan Detail Frame */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-zinc-900/30 border border-zinc-900/80 p-5 rounded-2xl">
              {/* Actual QR container with emerald neon glow outline */}
              <div className="relative w-36 h-36 mx-auto sm:mx-0 p-0.5 rounded-2xl bg-gradient-to-tr from-emerald-500/50 to-teal-400/50 shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:scale-102 transition-all duration-300">
                <img 
                  src="/images/whatsapp-qr-clean.png" 
                  alt="WhatsApp QR Code" 
                  className="w-full h-full rounded-2xl object-contain bg-white p-2" 
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <p className="text-xs text-zinc-200 font-bold uppercase tracking-wider">
                  {language === "ms" ? "Imbas Kod QR" : "Scan QR Code"}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {language === "ms" 
                    ? "Imbas gambar QR menggunakan kamera telefon untuk memulakan sembang terus pada telefon pintar anda."
                    : "Scan the QR image using your phone's camera to initiate a live chat session instantly."
                  }
                </p>
                <div className="pt-1 flex items-baseline gap-1.5 justify-center sm:justify-start">
                  <span className="text-[10px] text-zinc-550 font-bold uppercase">{t("contactWhatsAppPhone")}</span>
                  <span className="text-xs font-bold text-zinc-200">+{PHONE_NUMBER}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/60136632092?text=Hi%20Danial,%20saya%20mahu%20bertanya%20tentang%20servis%20website/sistem.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center px-4 py-4 rounded-2xl text-sm font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 text-zinc-950 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4.5 h-4.5 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
              {t("btnWhatsAppStart")}
            </a>
          </ScrollReveal>

          {/* Card 2: Email & Support Channels (5 cols) */}
          <ScrollReveal className="md:col-span-5 p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-850 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8 group" animation="slide-up" delay={150}>
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-purple-500/30 via-indigo-500/10 to-transparent opacity-10 blur-[2px] -z-10" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">
                  {t("emailTag")}
                </span>
                <span className="text-[10px] font-bold text-zinc-550 tracking-wider">
                  {language === "ms" ? "SEBUT HARGA" : "OFFICIAL MAIL"}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{t("contactEmailTitle")}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {t("contactEmailDesc")}
              </p>
            </div>

            {/* Channels listing */}
            <div className="space-y-4">
              {/* Email Address */}
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-900/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm shrink-0">
                  ✉️
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider">{t("emailLabel")}</p>
                  <a href="mailto:businesscornia@gmail.com" className="text-xs sm:text-sm font-bold text-zinc-200 hover:text-purple-400 transition-colors block truncate">
                    businesscornia@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Line */}
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-900/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider">{language === "ms" ? "TALIAN DIREK" : "DIRECT HOTLINE"}</p>
                  <a href="tel:0136632092" className="text-xs sm:text-sm font-bold text-zinc-200 hover:text-cyan-400 transition-colors block">
                    +6013-6632092
                  </a>
                </div>
              </div>

              {/* Operations Hours */}
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-900/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm shrink-0">
                  🕒
                </div>
                <div>
                  <p className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider">{language === "ms" ? "WAKTU BEKERJA" : "WORKING HOURS"}</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-200">
                    {language === "ms" ? "Isnin - Ahad (Tersedia hampir bila-bila masa)" : "Mon - Sun (Available almost anytime)"}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="mailto:businesscornia@gmail.com"
              className="inline-flex w-full items-center justify-center px-4 py-3.5 rounded-2xl text-xs font-extrabold bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              {t("btnEmailStart")}
            </a>
          </ScrollReveal>

        </div>

        {/* FAQs accordion section */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <ScrollReveal className="border-b border-zinc-900 pb-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              <span className="w-2.5 h-6 bg-purple-500 rounded-sm"></span>
              {t("faqHeader")}
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isSelected = activeFaq === index;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                  <div 
                    className={`rounded-2xl border transition-all duration-355 overflow-hidden ${
                      isSelected 
                        ? "bg-zinc-900/20 border-purple-500/30 shadow-[0_4px_25px_rgba(168,85,247,0.02)]" 
                        : "bg-zinc-950 border-zinc-900 hover:border-zinc-850"
                    }`}
                  >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-zinc-200 hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-lg border border-zinc-900 flex items-center justify-center text-xs text-zinc-500 transition-all shrink-0 ml-4 ${
                      isSelected ? "rotate-180 border-purple-500/30 text-purple-400 bg-purple-500/5" : "bg-zinc-900/50"
                    }`}>
                      ▼
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isSelected ? "max-h-[300px] border-t border-zinc-900/40" : "max-h-0"
                  }`}>
                    <p className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-900/5">
                      {faq.a}
                    </p>
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
