"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EstimatorWizard from "@/components/main-site/EstimatorWizard";
import { ServiceCategory } from "@/data/main-site/packages";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

function CalculatorContent() {
  const searchParams = useSearchParams();
  const rawCat = searchParams.get("category");
  const rawPkg = searchParams.get("package") || searchParams.get("packageId");

  const validCategories: (ServiceCategory | "not_sure")[] = [
    "website",
    "design_express",
    "design_custom",
    "repair",
    "systems",
    "not_sure",
  ];

  const initialCategory = validCategories.includes(rawCat as any)
    ? (rawCat as ServiceCategory | "not_sure")
    : undefined;

  const initialPackageId = rawPkg || undefined;

  return (
    <EstimatorWizard
      initialCategory={initialCategory}
      initialPackageId={initialPackageId}
    />
  );
}

export default function CalculatorPage() {
  const { language } = useMainSiteLanguage();
  const isMs = language === "ms";

  return (
    <div className="py-12 sm:py-20">
      <div className="ms-container">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-black tracking-widest uppercase mb-4">
            {isMs ? "KALKULATOR BAJET TELUS" : "TRANSPARENT BUDGET ESTIMATOR"}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            {isMs ? "Kira Anggaran Projek Anda" : "Estimate Your Project Budget"}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
            {isMs
              ? "Pilih kategori dan skop keperluan anda untuk mendapatkan gambaran kos awal. Tiada kos tersembunyi, tiada komitmen automatik — semak anggaran dan terus bincang di WhatsApp."
              : "Select your service category and scope requirements to get a clear initial estimate. No hidden fees, zero automatic commitment — review the breakdown and chat directly on WhatsApp."}
          </p>
        </div>

        {/* Global Transparent Pricing Disclaimer */}
        <div className="p-5 rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/15 mb-10 flex items-start gap-3 shadow-xl">
          <span className="text-xl shrink-0 mt-0.5">💡</span>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <strong className="text-white font-black">
              {isMs ? "Nota Ketelusan Harga:" : "Pricing Transparency Note:"}
            </strong>{" "}
            {isMs
              ? "Harga yang dipaparkan ialah harga binaan / servis permulaan mengikut skop asas. Pakej dan anggaran awal boleh dikemas kini mengikut keperluan khusus. Kos pihak ketiga (domain, hosting berbayar, lesen khas atau cetakan) tidak termasuk dalam caj binaan asas dan akan dijelaskan secara telus sebelum kerja bermula."
              : "Prices shown represent starting build/service fees based on initial scope. Custom requirements and complex requests will be quoted accordingly. Third-party costs (domain registration, paid hosting, special licenses or physical printing) are separate and clearly disclosed before commencing work."}
          </div>
        </div>

        {/* Wizard in Suspense Boundary */}
        <Suspense
          fallback={
            <div className="p-12 text-center text-zinc-400 rounded-2xl bg-[#0E1424] border border-white/10">
              {isMs ? "Memuatkan kalkulator..." : "Loading estimator..."}
            </div>
          }
        >
          <CalculatorContent />
        </Suspense>
      </div>
    </div>
  );
}
