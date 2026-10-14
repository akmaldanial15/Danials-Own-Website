"use client";

import React, { useState, useEffect } from "react";
import { packagesCatalog, ServiceCategory } from "@/data/main-site/packages";
import {
  CalculatorState,
  initialCalculatorState,
  calculateEstimate,
} from "@/utils/mainSitePricing";
import { buildEstimatorWhatsAppUrl } from "@/utils/mainSiteWhatsApp";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

interface EstimatorWizardProps {
  initialCategory?: ServiceCategory | "not_sure";
  initialPackageId?: string;
}

export default function EstimatorWizard({
  initialCategory,
  initialPackageId,
}: EstimatorWizardProps) {
  const { language, t } = useMainSiteLanguage();
  const [state, setState] = useState<CalculatorState>(() => ({
    ...initialCalculatorState,
    category: initialCategory || "website",
    packageId: initialPackageId || "w1-landing-starter",
  }));

  const [copied, setCopied] = useState(false);

  // Sync state if initial props change
  useEffect(() => {
    if (initialCategory) {
      setState((prev) => ({
        ...prev,
        category: initialCategory,
        packageId:
          initialPackageId ||
          (initialCategory === "design_express"
            ? "e1-single-image"
            : initialCategory === "design_custom"
            ? "c1-custom-poster"
            : initialCategory === "repair"
            ? "r1-content-layout-fix"
            : initialCategory === "systems"
            ? "s1-admin-panel"
            : "w1-landing-starter"),
      }));
    }
  }, [initialCategory, initialPackageId]);

  const estimate = calculateEstimate(state);
  const whatsappUrl = buildEstimatorWhatsAppUrl(state, estimate, language);

  const handleCategoryChange = (cat: ServiceCategory | "not_sure") => {
    let defaultPkgId = "";
    if (cat === "website") defaultPkgId = "w1-landing-starter";
    else if (cat === "design_express") defaultPkgId = "e1-single-image";
    else if (cat === "design_custom") defaultPkgId = "c1-custom-poster";
    else if (cat === "repair") defaultPkgId = "r1-content-layout-fix";
    else if (cat === "systems") defaultPkgId = "s1-admin-panel";

    setState((prev) => ({
      ...prev,
      category: cat,
      packageId: defaultPkgId,
      extraPagesCount: 0,
      extraLanguage: false,
      expressExtraRevisions: 0,
      needSourceFiles: false,
      needPrintPrep: false,
    }));
  };

  const copySummaryToClipboard = () => {
    const isMs = language === "ms";
    const textToCopy = isMs
      ? `Ringkasan Anggaran Danial's Web & Systems:
Kategori: ${state.category.toUpperCase()}
Pakej: ${estimate.basePackage ? estimate.basePackage.title.ms : "Konsultasi Umum"}
Anggaran Awal: ${estimate.currency}${estimate.totalOneOff}
Suntingan: ${estimate.revisionAllowance.ms}
Deliverables: ${estimate.deliverablesText.ms}
Status: ${estimate.statusBadge.ms}`
      : `Danial's Web & Systems Estimate Summary:
Category: ${state.category.toUpperCase()}
Package: ${estimate.basePackage ? estimate.basePackage.title.en : "General Consultation"}
Initial Estimate: ${estimate.currency}${estimate.totalOneOff}
Revisions: ${estimate.revisionAllowance.en}
Deliverables: ${estimate.deliverablesText.en}
Status: ${estimate.statusBadge.en}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Interactive Wizard (8 cols) */}
      <div className="lg:col-span-7 xl:col-span-8 space-y-8">
        {/* Stage 1: Category Selection */}
        <div className="ms-card p-6 sm:p-8 space-y-5 border border-white/10 bg-[#0E1424]/90 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center text-xs font-black">
              1
            </span>
            <h3 className="font-black text-base sm:text-lg text-white">
              {t("calcStep1")}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            {[
              { id: "website", label: language === "ms" ? "Laman Web" : "Websites", badge: "RM79+" },
              { id: "design_express", label: "Design Express", badge: "RM5" },
              { id: "design_custom", label: "Design Custom", badge: "RM35+" },
              { id: "repair", label: language === "ms" ? "Baiki Website" : "Website Repair", badge: "RM29+" },
              { id: "systems", label: language === "ms" ? "Sistem & Apps" : "Systems & Apps", badge: "RM499+" },
              { id: "not_sure", label: language === "ms" ? "Belum Pasti" : "Not Sure", badge: "Bincang" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id as ServiceCategory | "not_sure")}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  state.category === cat.id
                    ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-2 ring-cyan-400/20"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <span className="font-black text-xs sm:text-sm text-white block">
                  {cat.label}
                </span>
                <span className="text-[11px] font-extrabold text-cyan-300 mt-2 inline-block">
                  {cat.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage 2: Package & Options Selection (Contextual) */}
        <div className="ms-card p-6 sm:p-8 space-y-6 border border-white/10 bg-[#0E1424]/90 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center text-xs font-black">
              2
            </span>
            <h3 className="font-black text-base sm:text-lg text-white">
              {t("calcStep2")}
            </h3>
          </div>

          {/* If Website */}
          {state.category === "website" && (
            <div className="space-y-6">
              {/* Package radio selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                  {language === "ms" ? "Pilih Pakej Laman Web:" : "Select Website Package:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {packagesCatalog
                    .filter((p) => p.category === "website")
                    .map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setState({ ...state, packageId: pkg.id })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          state.packageId === pkg.id
                            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30"
                            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-xs sm:text-sm text-white">{pkg.title[language]}</span>
                          <span className="text-xs font-extrabold text-cyan-300">
                            RM{pkg.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1 leading-relaxed">
                          {pkg.subtitle[language]}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Extra Pages (Compatible only with Plus & Business) */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {language === "ms" ? "Halaman Standard Tambahan (+RM50/halaman)" : "Additional Standard Pages (+RM50/page)"}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {state.packageId === "w1-landing-starter"
                        ? (language === "ms" ? "Landing Starter dihadkan kepada 1 halaman" : "Landing Starter is strictly 1 page")
                        : (language === "ms" ? "Sesuai untuk halaman testimoni atau galeri berasingan" : "For extra services or gallery pages")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={state.packageId === "w1-landing-starter" || state.extraPagesCount <= 0}
                      onClick={() => setState({ ...state, extraPagesCount: Math.max(0, state.extraPagesCount - 1) })}
                      className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 text-white font-bold text-xs disabled:opacity-30 cursor-pointer hover:bg-white/10"
                    >
                      -
                    </button>
                    <span className="text-xs font-black text-white w-5 text-center">{state.extraPagesCount}</span>
                    <button
                      type="button"
                      disabled={state.packageId === "w1-landing-starter" || state.extraPagesCount >= 4}
                      onClick={() => setState({ ...state, extraPagesCount: state.extraPagesCount + 1 })}
                      className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 text-white font-bold text-xs disabled:opacity-30 cursor-pointer hover:bg-white/10"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dual Language */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {language === "ms" ? "Sokongan Dwi-Bahasa (BM & EN) (+RM80)" : "Dual-Language Support (BM & EN) (+RM80)"}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {language === "ms" ? "Teks terjemahan dibekalkan oleh pelanggan" : "Client supplies translated copy"}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={state.extraLanguage}
                  onChange={(e) => setState({ ...state, extraLanguage: e.target.checked })}
                  className="w-4 h-4 text-cyan-400 rounded border-white/20 cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Domain & Hosting status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <label className="font-bold text-white block mb-1.5">
                    {language === "ms" ? "Status Nama Domain (.com/.my)" : "Domain Status (.com/.my)"}
                  </label>
                  <select
                    value={state.domainOption}
                    onChange={(e) => setState({ ...state, domainOption: e.target.value as any })}
                    className="w-full p-3 rounded-xl border border-white/15 bg-[#0E1424] text-white text-xs font-medium focus:border-cyan-400 focus:outline-hidden"
                  >
                    <option value="not_sure" className="bg-[#0E1424] text-white">{language === "ms" ? "Belum pasti / Nak nasihat" : "Not sure / Need advice"}</option>
                    <option value="existing" className="bg-[#0E1424] text-white">{language === "ms" ? "Sudah ada domain sendiri" : "Already have domain"}</option>
                    <option value="need_help" className="bg-[#0E1424] text-white">{language === "ms" ? "Perlukan bantuan pendaftaran" : "Need registration setup"}</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-white block mb-1.5">
                    {language === "ms" ? "Status Pelayan (Hosting)" : "Hosting Server Status"}
                  </label>
                  <select
                    value={state.hostingOption}
                    onChange={(e) => setState({ ...state, hostingOption: e.target.value as any })}
                    className="w-full p-3 rounded-xl border border-white/15 bg-[#0E1424] text-white text-xs font-medium focus:border-cyan-400 focus:outline-hidden"
                  >
                    <option value="not_sure" className="bg-[#0E1424] text-white">{language === "ms" ? "Belum pasti / Panduan percuma" : "Not sure / Guidance needed"}</option>
                    <option value="existing" className="bg-[#0E1424] text-white">{language === "ms" ? "Sudah ada akaun hosting" : "Already have hosting"}</option>
                    <option value="need_help" className="bg-[#0E1424] text-white">{language === "ms" ? "Perlukan cadangan pelan" : "Need plan recommendation"}</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* If Design Express */}
          {state.category === "design_express" && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                  {language === "ms" ? "Pakej Express Pilihan:" : "Express Package Choice:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div
                    onClick={() => setState({ ...state, packageId: "e1-single-image" })}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      state.packageId === "e1-single-image"
                        ? "border-emerald-400 bg-emerald-500/15 ring-2 ring-emerald-400/20"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs sm:text-sm text-white">Express E1 (Single)</span>
                      <span className="text-xs font-black text-emerald-300">RM5 / imej</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                      {language === "ms" ? "Suntingan gambar individu, 2 pusingan suntingan" : "Single image edit, 2 revision rounds"}
                    </p>
                  </div>

                  <div
                    onClick={() => setState({ ...state, packageId: "e2-duo-image" })}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      state.packageId === "e2-duo-image"
                        ? "border-emerald-400 bg-emerald-500/15 ring-2 ring-emerald-400/20"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs sm:text-sm text-white">Express E2 (Duo Bundle)</span>
                      <span className="text-xs font-black text-emerald-300">RM8 / 2 imej</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                      {language === "ms" ? "Pakej 2 keping gambar serentak" : "Bundle for 2 images submitted together"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity input */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {state.packageId === "e2-duo-image"
                      ? (language === "ms" ? "Bilangan Pakej Duo (x2 imej)" : "Number of Duo Bundles (x2 images)")
                      : (language === "ms" ? "Bilangan Imej" : "Image Quantity")}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {state.packageId === "e2-duo-image"
                      ? `${state.expressQuantity * 2} ${language === "ms" ? "keping gambar keseluruhan" : "total images"}`
                      : `${state.expressQuantity} ${language === "ms" ? "keping gambar" : "image(s)"}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={state.expressQuantity <= 1}
                    onClick={() => setState({ ...state, expressQuantity: Math.max(1, state.expressQuantity - 1) })}
                    className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 text-white font-bold text-xs disabled:opacity-30 cursor-pointer hover:bg-white/10"
                  >
                    -
                  </button>
                  <span className="text-xs font-black text-white w-6 text-center">{state.expressQuantity}</span>
                  <button
                    type="button"
                    disabled={state.expressQuantity >= 20}
                    onClick={() => setState({ ...state, expressQuantity: state.expressQuantity + 1 })}
                    className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 text-white font-bold text-xs disabled:opacity-30 cursor-pointer hover:bg-white/10"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Extra revisions */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {language === "ms" ? "Pusingan Suntingan Tambahan (+RM2/pusingan)" : "Extra Revision Rounds (+RM2/round)"}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {language === "ms" ? "Pakej asas sudah disertakan 2 pusingan" : "Starter package already includes 2 rounds"}
                  </span>
                </div>
                <select
                  value={state.expressExtraRevisions}
                  onChange={(e) => setState({ ...state, expressExtraRevisions: parseInt(e.target.value) || 0 })}
                  className="p-2.5 rounded-xl border border-white/15 bg-[#0E1424] text-white text-xs font-bold"
                >
                  <option value={0} className="bg-[#0E1424] text-white">0 (+RM0)</option>
                  <option value={1} className="bg-[#0E1424] text-white">+1 pusingan (+RM2)</option>
                  <option value={2} className="bg-[#0E1424] text-white">+2 pusingan (+RM4)</option>
                  <option value={3} className="bg-[#0E1424] text-white">+3 pusingan (+RM6)</option>
                </select>
              </div>
            </div>
          )}

          {/* If Design Custom */}
          {state.category === "design_custom" && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                  {language === "ms" ? "Pilih Pakej Custom:" : "Select Custom Package:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {packagesCatalog
                    .filter((p) => p.category === "design_custom")
                    .map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setState({ ...state, packageId: pkg.id })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          state.packageId === pkg.id
                            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-xs sm:text-sm text-white">{pkg.title[language]}</span>
                          <span className="text-xs font-black text-cyan-300">
                            RM{pkg.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1 leading-relaxed">
                          {pkg.subtitle[language]}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Source files option */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {language === "ms" ? "Perlukan Fail Sumber Editable (.ai / .psd)?" : "Require Layered Editable Source (.ai / .psd)?"}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {language === "ms" ? "Disahkan dalam sebut harga mengikut kaedah pembinaan" : "Confirmed in quote based on construction"}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={state.needSourceFiles}
                  onChange={(e) => setState({ ...state, needSourceFiles: e.target.checked })}
                  className="w-4 h-4 text-cyan-400 rounded border-white/20 cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Print prep option */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {language === "ms" ? "Penyediaan Format Cetakan Kilang (Bleed & 300 DPI)?" : "Factory Print Preparation (Bleed & 300 DPI)?"}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {language === "ms" ? "Kami sediakan PDF dengan trim & margin selamat" : "We prep high-res print PDF with safe margins"}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={state.needPrintPrep}
                  onChange={(e) => setState({ ...state, needPrintPrep: e.target.checked })}
                  className="w-4 h-4 text-cyan-400 rounded border-white/20 cursor-pointer accent-cyan-400"
                />
              </div>
            </div>
          )}

          {/* If Repair */}
          {state.category === "repair" && (
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                {language === "ms" ? "Kategori Masalah Laman Web:" : "Website Issue Category:"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {packagesCatalog
                  .filter((p) => p.category === "repair")
                  .map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setState({ ...state, packageId: pkg.id })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        state.packageId === pkg.id
                          ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs sm:text-sm text-white">{pkg.title[language]}</span>
                        <span className="text-xs font-black text-cyan-300">
                          dari RM{pkg.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1 leading-relaxed">
                        {pkg.subtitle[language]}
                      </p>
                    </div>
                  ))}
              </div>

              <div>
                <label className="text-xs font-bold text-white block mb-1.5">
                  {language === "ms" ? "Pautan Website Anda (Jika ada)" : "Your Website URL (If any)"}
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={state.websiteUrl}
                  onChange={(e) => setState({ ...state, websiteUrl: e.target.value })}
                  className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
            </div>
          )}

          {/* If Systems */}
          {state.category === "systems" && (
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                {language === "ms" ? "Pilih Modul Sistem Diperlukan:" : "Select Required System Modules:"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {packagesCatalog
                  .filter((p) => p.category === "systems")
                  .map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setState({ ...state, packageId: pkg.id })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        state.packageId === pkg.id
                          ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs sm:text-sm text-white">{pkg.title[language]}</span>
                        <span className="text-xs font-black text-cyan-300">
                          dari RM{pkg.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1 leading-relaxed">
                        {pkg.subtitle[language]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Notes field */}
          <div className="pt-2">
            <label className="text-xs font-bold text-white block mb-1.5">
              {language === "ms" ? "Nota Tambahan / Keperluan Khas (Pilihan)" : "Additional Notes (Optional)"}
            </label>
            <textarea
              rows={2}
              value={state.clientNotes}
              onChange={(e) => setState({ ...state, clientNotes: e.target.value })}
              placeholder={
                language === "ms"
                  ? "Contoh: Mahu siap sebelum 20hb, ada 3 menu gambar..."
                  : "E.g. Needed by 20th, have 3 menu items..."
              }
              className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs resize-none focus:border-cyan-400 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Stage 3 & Dynamic Summary Card (4 cols, Sticky) */}
      <div className="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-4">
        <div className="ms-card p-6 sm:p-7 border border-white/15 bg-[#0E1424]/95 backdrop-blur-2xl shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center text-[11px] font-black">
                3
              </span>
              <h4 className="font-black text-sm text-white tracking-wide">
                {t("calcSummaryTitle")}
              </h4>
            </div>
            <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10">
              {estimate.statusBadge[language]}
            </span>
          </div>

          {/* Price figure */}
          <div>
            <span className="text-xs font-semibold text-zinc-400 block">
              {t("calcSubtotalLabel")}
            </span>
            <div className="flex items-baseline gap-2 mt-1.5">
              {estimate.isQuoteRequired ? (
                <span className="text-2xl font-black text-cyan-300">
                  {language === "ms" ? "Perlu Sebut Harga" : "Quote Required"}
                </span>
              ) : (
                <>
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-emerald-300 tracking-tight">
                    {estimate.currency}{estimate.totalOneOff}
                  </span>
                  {estimate.isStartingEstimate && (
                    <span className="text-xs text-zinc-400 font-bold">
                      ({language === "ms" ? "anggaran awal" : "starter estimate"})
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Deliverables & Revisions */}
          <div className="space-y-3 text-xs border-t border-white/10 pt-4">
            <div className="flex items-start justify-between gap-2">
              <span className="text-zinc-400 shrink-0 font-medium">{t("calcRevisionsLabel")}:</span>
              <span className="font-black text-white text-right">
                {estimate.revisionAllowance[language]}
              </span>
            </div>
            <div className="flex items-start justify-between gap-2">
              <span className="text-zinc-400 shrink-0 font-medium">{t("calcDeliverablesLabel")}:</span>
              <span className="font-black text-emerald-300 text-right">
                {estimate.deliverablesText[language]}
              </span>
            </div>
          </div>

          {/* Highlights */}
          {estimate.scopeHighlights[language].length > 0 && (
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] space-y-1.5">
              <span className="font-bold text-white block">
                {language === "ms" ? "Perincian Terpilih:" : "Selected Breakdown:"}
              </span>
              <ul className="space-y-1 text-zinc-300">
                {estimate.scopeHighlights[language].map((hl, i) => (
                  <li key={i}>• {hl}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Unpriced / Confirmation items */}
          {estimate.unpricedItems[language].length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[11px] text-amber-300 space-y-1">
              <span className="font-bold block">
                {language === "ms" ? "Perkara untuk disahkan:" : "Items to confirm:"}
              </span>
              <ul className="space-y-0.5 text-zinc-300">
                {estimate.unpricedItems[language].map((unp, i) => (
                  <li key={i}>⚠️ {unp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Global Disclaimer */}
          <p className="text-[11px] text-zinc-400 leading-relaxed italic">
            {t("calcDisclaimer")}
          </p>

          {/* Actions */}
          <div className="space-y-2.5 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary w-full text-center text-xs py-4 rounded-xl font-black uppercase tracking-wider block shadow-lg"
            >
              {t("calcCtaWhatsapp")} →
            </a>

            <button
              type="button"
              onClick={copySummaryToClipboard}
              className="w-full text-center text-xs py-3 rounded-xl font-bold border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer block"
            >
              {copied ? t("calcCopied") : t("calcCopyBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
