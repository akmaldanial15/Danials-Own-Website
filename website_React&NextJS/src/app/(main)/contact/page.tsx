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
    <div className="py-12 sm:py-16">
      <div className="ms-container">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#087A68] text-xs font-bold tracking-wider uppercase mb-4">
            {isMs ? "Mula Perbincangan Projek" : "Start Project Discussion"}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18201D] tracking-tight leading-tight mb-4">
            {isMs ? "Ceritakan apa yang anda perlukan." : "Tell us what you need."}
          </h1>
          <p className="text-base sm:text-lg text-[#52605A] leading-relaxed">
            {isMs
              ? "Ada idea baru, gambar rujukan atau website yang mahu dibaiki? Isikan ringkasan ringkas di bawah untuk menjana mesej WhatsApp teratur, atau hubungi terus melalui saluran rasmi kami."
              : "Have a new idea, reference visual, or an existing website needing repair? Fill out the brief below to generate a neat WhatsApp message, or get in touch directly via our official channels."}
          </p>
        </div>

        {/* Direct Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* WhatsApp Direct */}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA] hover:border-[#087A68] hover:shadow-sm transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#087A68] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-xl">
              💬
            </div>
            <div>
              <div className="text-xs font-semibold text-[#52605A] uppercase tracking-wider mb-1">
                WhatsApp
              </div>
              <div className="text-base font-bold text-[#18201D] group-hover:text-[#087A68] transition-colors mb-1">
                {siteConfig.contact.phoneDisplay}
              </div>
              <div className="text-xs text-[#52605A]">
                {isMs ? "Saluran paling pantas untuk semak giliran & bincang skop" : "Fastest channel to check queues and discuss scope"}
              </div>
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA] hover:border-[#2457E6] hover:shadow-sm transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#2457E6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-xl">
              ✉️
            </div>
            <div>
              <div className="text-xs font-semibold text-[#52605A] uppercase tracking-wider mb-1">
                {isMs ? "E-mel Rasmi" : "Official Email"}
              </div>
              <div className="text-base font-bold text-[#18201D] group-hover:text-[#2457E6] transition-colors mb-1 break-all">
                {siteConfig.contact.email}
              </div>
              <div className="text-xs text-[#52605A]">
                {isMs ? "Untuk penghantaran dokumen rasmi atau sebut harga bertulis" : "For formal RFP documents or written quotations"}
              </div>
            </div>
          </a>

          {/* Phone Call */}
          <a
            href={siteConfig.contact.phoneTel}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA] hover:border-[#18201D] hover:shadow-sm transition-all group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] text-[#18201D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-xl">
              📞
            </div>
            <div>
              <div className="text-xs font-semibold text-[#52605A] uppercase tracking-wider mb-1">
                {isMs ? "Panggilan Terus" : "Direct Call"}
              </div>
              <div className="text-base font-bold text-[#18201D] mb-1">
                {siteConfig.contact.phoneDisplay}
              </div>
              <div className="text-xs text-[#52605A]">
                {isMs ? "Hubungi pada waktu bekerja untuk sebarang pertanyaan ringkas" : "Call during business hours for quick queries"}
              </div>
            </div>
          </a>
        </div>

        {/* Guided Brief Form Area */}
        <div className="max-w-3xl">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#18201D] tracking-tight mb-2">
              {isMs ? "Borang Penyediaan Ringkasan Projek" : "Project Brief Preparation Form"}
            </h2>
            <p className="text-xs sm:text-sm text-[#52605A]">
              {isMs
                ? "Isikan maklumat di bawah untuk menjana mesej WhatsApp yang lengkap. Anda juga boleh melampirkan gambar sebenar atau lakaran terus di WhatsApp selepas mesej dibuka."
                : "Fill in the details below to generate a structured WhatsApp message. You can attach images or reference files directly inside WhatsApp once opened."}
            </p>
          </div>

          <Suspense
            fallback={
              <div className="p-8 text-center text-[#52605A] bg-white rounded-2xl border border-[#DDE1DA]">
                {isMs ? "Memuatkan borang..." : "Loading form..."}
              </div>
            }
          >
            <ContactPageContent />
          </Suspense>
        </div>

        {/* Practical Assurance Note */}
        <div className="max-w-3xl mt-12 p-6 rounded-2xl bg-[#FAF9F5] border border-[#DDE1DA]">
          <h4 className="text-sm font-bold text-[#18201D] mb-2">
            {isMs ? "Apa yang berlaku selepas anda menghantar mesej?" : "What happens after you reach out?"}
          </h4>
          <ol className="text-xs sm:text-sm text-[#52605A] space-y-2 list-decimal list-inside leading-relaxed">
            <li>
              <strong>{isMs ? "Penilaian Keperluan:" : "Scope Assessment:"}</strong>{" "}
              {isMs
                ? "Danial akan meneliti ringkasan anda dan mengesahkan sama ada pakej yang dipilih menepati hasil yang dimahukan."
                : "Danial will review your brief and confirm whether your chosen package suits your intended deliverables."}
            </li>
            <li>
              <strong>{isMs ? "Pengesahan Skop & Garis Masa:" : "Scope & Timeline Confirmation:"}</strong>{" "}
              {isMs
                ? "Kami maklumkan giliran kerja semasa dan tempoh anggaran siap mengikut ketersediaan bahan anda."
                : "We will clarify current queue availability and an indicative turnaround based on your supplied content."}
            </li>
            <li>
              <strong>{isMs ? "Bermula Secara Teratur:" : "Kick-off:"}</strong>{" "}
              {isMs
                ? "Kaedah pembayaran dan terma dijelaskan sebelum kerja dimulakan tanpa sebarang kejutan kos tersembunyi."
                : "Payment terms and deliverables are agreed upon before work begins with zero unexpected fees."}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
