"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ContactBriefForm from "@/components/main-site/ContactBriefForm";
import { siteConfig } from "@/data/main-site/siteConfig";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "website";
  const pkg = searchParams.get("package") || searchParams.get("packageId") || "";
  const projectRef = searchParams.get("projectRef") || "";

  return (
    <ContactBriefForm
      initialCategory={category}
      initialPackage={pkg}
      initialProjectRef={projectRef}
    />
  );
}

export default function ContactPage() {
  const { language } = useMainSiteLanguage();
  const isMs = language === "ms";

  return (
    <div className="py-12 sm:py-20">
      <div className="ms-container space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-black tracking-widest uppercase mb-5">
            {isMs ? "Mula Perbincangan Projek" : "Start Project Discussion"}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-emerald-300 tracking-tight leading-tight mb-4">
            {isMs ? "Ceritakan apa yang anda perlukan." : "Tell us what you need."}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
            {isMs
              ? "Ada idea baru, gambar rujukan atau website yang mahu dibaiki? Isikan ringkasan ringkas di bawah untuk menjana mesej WhatsApp teratur, atau hubungi terus melalui saluran rasmi kami."
              : "Have a new idea, reference visual, or an existing website needing repair? Fill out the brief below to generate a neat WhatsApp message, or get in touch directly via our official channels."}
          </p>
        </div>

        {/* Direct Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* WhatsApp Direct */}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-xl">
              💬
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                WhatsApp
              </div>
              <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                {siteConfig.contact.phoneDisplay}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                {isMs ? "Saluran paling pantas untuk semak giliran & bincang skop" : "Fastest channel to check queues and discuss scope"}
              </div>
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="p-6 rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-xl">
              ✉️
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                {isMs ? "E-mel Rasmi" : "Official Email"}
              </div>
              <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 break-all">
                {siteConfig.contact.email}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                {isMs ? "Untuk penghantaran dokumen rasmi atau sebut harga bertulis" : "For formal RFP documents or written quotations"}
              </div>
            </div>
          </a>

          {/* Phone Call */}
          <a
            href={siteConfig.contact.phoneTel}
            className="p-6 rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/10 hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-xl">
              📞
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                {isMs ? "Panggilan Terus" : "Direct Call"}
              </div>
              <div className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                {siteConfig.contact.phoneDisplay}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                {isMs ? "Hubungi pada waktu bekerja untuk sebarang pertanyaan ringkas" : "Call during business hours for quick queries"}
              </div>
            </div>
          </a>
        </div>

        {/* Guided Brief Form Area */}
        <div className="max-w-3xl">
          <div className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {isMs ? "Borang Penyediaan Ringkasan Projek" : "Project Brief Preparation Form"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {isMs
                ? "Isikan maklumat di bawah untuk menjana mesej WhatsApp yang lengkap. Anda juga boleh melampirkan gambar sebenar atau lakaran terus di WhatsApp selepas mesej dibuka."
                : "Fill in the details below to generate a structured WhatsApp message. You can attach images or reference files directly inside WhatsApp once opened."}
            </p>
          </div>

          <Suspense
            fallback={
              <div className="p-8 text-center text-zinc-400 bg-[#0E1424] rounded-2xl border border-white/10">
                {isMs ? "Memuatkan borang..." : "Loading form..."}
              </div>
            }
          >
            <ContactPageContent />
          </Suspense>
        </div>

        {/* Practical Assurance Note */}
        <div className="max-w-3xl p-6 sm:p-8 rounded-2xl bg-[#0E1424]/90 border border-white/10 space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">
            {isMs ? "Apa yang berlaku selepas anda menghantar mesej?" : "What happens after you reach out?"}
          </h4>
          <ol className="text-xs sm:text-sm text-zinc-300 space-y-2.5 list-decimal list-inside leading-relaxed">
            <li>
              <strong className="text-cyan-300">{isMs ? "Penilaian Keperluan:" : "Scope Assessment:"}</strong>{" "}
              {isMs
                ? "Danial akan meneliti ringkasan anda dan mengesahkan sama ada pakej yang dipilih menepati hasil yang dimahukan."
                : "Danial will review your brief and confirm whether your chosen package suits your intended deliverables."}
            </li>
            <li>
              <strong className="text-cyan-300">{isMs ? "Pengesahan Skop & Garis Masa:" : "Scope & Timeline Confirmation:"}</strong>{" "}
              {isMs
                ? "Kami maklumkan giliran kerja semasa dan tempoh anggaran siap mengikut ketersediaan bahan anda."
                : "We will clarify current queue availability and an indicative turnaround based on your supplied content."}
            </li>
            <li>
              <strong className="text-cyan-300">{isMs ? "Bermula Secara Teratur:" : "Kick-off:"}</strong>{" "}
              {isMs
                ? "Kaedah pembayaran dan terma dijelaskan sebelum kerja dimulakan tanpa sebarang kejutan kos tersembunyi."
                : "Payment methods and milestone terms are confirmed before work commences with zero hidden costs."}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
