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
    <div className="py-12 sm:py-16">
      <div className="ms-container">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#087A68] text-xs font-bold tracking-wider uppercase mb-4">
            {isMs ? "Kalkulator Bajet Telus" : "Transparent Budget Estimator"}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18201D] tracking-tight leading-tight mb-4">
            {isMs ? "Kira Anggaran Projek Anda" : "Estimate Your Project Budget"}
          </h1>
          <p className="text-base sm:text-lg text-[#52605A] leading-relaxed">
            {isMs
              ? "Pilih kategori dan skop keperluan anda untuk mendapatkan gambaran kos awal. Tiada kos tersembunyi, tiada komitmen automatik — semak anggaran dan terus bincang di WhatsApp."
              : "Select your service category and scope requirements to get a clear initial estimate. No hidden fees, zero automatic commitment — review the breakdown and chat directly on WhatsApp."}
          </p>
        </div>

        {/* Global Transparent Pricing Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-[#DDE1DA] mb-10 flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">💡</span>
          <div className="text-xs sm:text-sm text-[#52605A] leading-relaxed">
            <strong className="text-[#18201D]">
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
            <div className="p-12 text-center text-[#52605A] rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA]">
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
