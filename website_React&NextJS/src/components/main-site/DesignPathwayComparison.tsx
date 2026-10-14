"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

export default function DesignPathwayComparison() {
  const { language } = useMainSiteLanguage();
  const [showFullTable, setShowFullTable] = useState(false);

  const criteria = [
    {
      criterion: { ms: "Permintaan Sesuai", en: "Suitable Requests" },
      express: {
        ms: "Tukar teks/harga pada poster sedia ada, buang latar belakang (cutout), ubah saiz imej, tukar warna mudah, masukkan logo/QR.",
        en: "Text/price swaps on existing artwork, background cutouts, reformatting, recolouring elements, inserting logo/QR.",
      },
      custom: {
        ms: "Poster promosi tersusun dari sifar, menu kafe/kedai, banner & bunting, identiti logo permulaan, pelekat & label bungkusan.",
        en: "Bespoke promotional posters from scratch, cafe menus, storefront buntings, starter brand marks, product labels & packaging.",
      },
    },
    {
      criterion: { ms: "Tahap Penyesuaian", en: "Customisation Level" },
      express: {
        ms: "Tertumpu pada skop sempit & pantas menggunakan bahan sedia ada.",
        en: "Focused on narrow, rapid edits utilizing client-supplied materials.",
      },
      custom: {
        ms: "Gubahan teliti dari sifar mengikut identiti visual jenama anda.",
        en: "Bespoke design from scratch aligning with your unique brand identity.",
      },
    },
    {
      criterion: { ms: "Peruntukan Suntingan", en: "Revision Allowance" },
      express: {
        ms: "2 pusingan suntingan kecil dalam skop asal.",
        en: "2 minor revision rounds within original brief.",
      },
      custom: {
        ms: "3 pusingan semakan berperingkat sebelum penyerahan.",
        en: "3 structured refinement milestones before hand-off.",
      },
    },
    {
      criterion: { ms: "Fail Diserahkan", en: "Delivered Files" },
      express: {
        ms: "Fail digital resolusi tinggi sedia guna (PNG atau JPG).",
        en: "High-resolution ready-to-use digital formats (PNG or JPG).",
      },
      custom: {
        ms: "PNG, JPG & PDF berkualiti tinggi (beserta spesifikasi cetak).",
        en: "PNG, JPG & high-res PDF (with print specifications when agreed).",
      },
    },
    {
      criterion: { ms: "Fail Sumber Editable", en: "Editable Source Files" },
      express: {
        ms: "Tidak disertakan (hanya fail output akhir).",
        en: "Not included (flattened final outputs only).",
      },
      custom: {
        ms: "Boleh dibincangkan & disahkan dalam sebut harga mengikut keperluan.",
        en: "Available upon confirmation in preliminary quotation.",
      },
    },
    {
      criterion: { ms: "Ilustrasi / Vektor Rumit", en: "Complex Vector Artwork" },
      express: {
        ms: "Tidak merangkumi lukisan vektor terperinci.",
        en: "Excludes complex manual vector illustrations.",
      },
      custom: {
        ms: "Dinilai secara sebut harga khas mengikut kerumitan visual.",
        en: "Evaluated and quoted based on bespoke visual complexity.",
      },
    },
    {
      criterion: { ms: "Penyediaan Cetakan Fizikal", en: "Print Preparation" },
      express: {
        ms: "Khas untuk kegunaan digital & media sosial.",
        en: "Optimised specifically for digital & social media channels.",
      },
      custom: {
        ms: "Termasuk penetapan bleed, margin selamat, dan fail 300 DPI mengikut saiz kilang.",
        en: "Includes safe trim margins, bleed lines, and 300 DPI printer setup.",
      },
    },
    {
      criterion: { ms: "Proses Sebut Harga", en: "Quotation Workflow" },
      express: {
        ms: "Harga tetap mengikut imej (RM5/gambar atau RM8/pakej duo).",
        en: "Fixed rate per image (RM5/image or RM8/duo bundle).",
      },
      custom: {
        ms: "Anggaran awal mengikut pakej (RM35 - RM149+) disahkan sebelum mula.",
        en: "Starting package estimate (RM35 - RM149+) confirmed prior to work.",
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Side by side Pathway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Pathway A: Express - Sunset Amber / Coral Glow */}
        <div className="ms-card p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-amber-400 bg-gradient-to-b from-amber-500/10 via-[#0E1424] to-[#0E1424] backdrop-blur-2xl border-white/10 hover:border-amber-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.3)] transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="ms-pill ms-pill-amber">
                {language === "ms" ? "⚡ PILIHAN PANTAS" : "⚡ RAPID EDIT"}
              </span>
              <span className="text-xs font-bold text-amber-300/80">
                {language === "ms" ? "Pakej E1 & E2" : "Packages E1 & E2"}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Design Express
              </h3>
              <p className="text-sm font-bold text-amber-400 mt-1">
                {language === "ms" ? "Ringkas, cepat dan mesra bajet." : "Focused, fast, and budget-conscious."}
              </p>
            </div>

            <div className="pt-2 flex items-baseline gap-2 border-b border-white/10 pb-4">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 tracking-tight">RM5</span>
              <span className="text-xs text-zinc-400 font-semibold">
                {language === "ms" ? "/ gambar (pakej asas)" : "/ image (starter tier)"}
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {language === "ms"
                ? "Sesuai untuk membuang latar belakang produk, menukar harga atau teks pada poster sedia ada, saiz semula, dan kemasukan logo atau QR rasmi."
                : "Ideal for product cutouts, swapping copy or prices on existing designs, resizing, and inserting supplied logos or verified QR codes."}
            </p>

            <ul className="space-y-2 text-xs text-zinc-200 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{language === "ms" ? "Siap cepat dengan fail PNG/JPG resolusi tinggi" : "Fast turnaround with high-res PNG/JPG"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{language === "ms" ? "Termasuk 2 kali suntingan kecil dalam skop" : "Includes 2 minor revision rounds"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{language === "ms" ? "Pilihan Duo Bundle: RM8 untuk 2 keping gambar" : "Duo Bundle option: RM8 for 2 images"}</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href="/calculator?category=design_express&package=e1-single-image"
              className="ms-btn-sunset w-full text-center text-xs py-4 rounded-xl font-black uppercase tracking-wider block"
            >
              {language === "ms" ? "Pilih Design Express (RM5) →" : "Choose Design Express (RM5) →"}
            </Link>
          </div>
        </div>

        {/* Pathway B: Custom - Neon Purple / Fuchsia Glow */}
        <div className="ms-card p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-purple-400 bg-gradient-to-b from-purple-500/10 via-[#0E1424] to-[#0E1424] backdrop-blur-2xl border-white/10 hover:border-purple-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.3)] transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="ms-pill ms-pill-purple">
                {language === "ms" ? "✦ REKA BENTUK TELITI" : "✦ BESPOKE DESIGN"}
              </span>
              <span className="text-xs font-bold text-purple-300/80">
                {language === "ms" ? "Pakej C1 - C5" : "Packages C1 - C5"}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Design Custom
              </h3>
              <p className="text-sm font-bold text-purple-300 mt-1">
                {language === "ms"
                  ? "Lebih terperinci, lebih tersusun, mengikut identiti anda."
                  : "Bespoke, refined, and tailored to your brand identity."}
              </p>
            </div>

            <div className="pt-2 flex items-baseline gap-2 border-b border-white/10 pb-4">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 tracking-tight">RM35+</span>
              <span className="text-xs text-zinc-400 font-semibold">
                {language === "ms" ? "/ poster atau gubahan gred cetak" : "/ poster or print-grade layout"}
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {language === "ms"
                ? "Dihasilkan secara gubahan rapi untuk poster F&B, menu kedai, banner acara, pembungkusan produk dan identiti logo yang memerlukan perhatian teliti."
                : "Crafted with careful manual typography for F&B posters, menus, event buntings, packaging labels, and distinctive brand identities."}
            </p>

            <ul className="space-y-2 text-xs text-zinc-200 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>{language === "ms" ? "Gubahan visual tersusun & penetapan tipografi tajam" : "Bespoke visual composition & crisp typography"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>{language === "ms" ? "Termasuk 3 pusingan semakan terperinci" : "Includes 3 detailed revision milestones"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>{language === "ms" ? "Spesifikasi sedia cetak 300 DPI dengan margin kilang" : "Print-ready 300 DPI with factory trim margins"}</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href="/calculator?category=design_custom&package=c1-custom-poster"
              className="ms-btn-rainbow w-full text-center text-xs py-4 rounded-xl font-black uppercase tracking-wider block"
            >
              {language === "ms" ? "Bincang Design Custom →" : "Discuss Design Custom →"}
            </Link>
          </div>
        </div>
      </div>

      {/* Comparison One-Liner */}
      <div className="mt-8 text-center p-4 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-xs sm:text-sm font-semibold text-zinc-300">
          💡{" "}
          <span className="text-white font-extrabold">
            {language === "ms"
              ? "Express untuk keperluan ringkas & cepat. Custom untuk susun atur dan identiti yang lebih terperinci."
              : "Express for fast, narrow edits. Custom for detailed layouts and curated brand identity."}
          </span>
        </p>
      </div>

      {/* Expandable Comparison Table Button */}
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setShowFullTable(!showFullTable)}
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer focus:outline-hidden"
          aria-expanded={showFullTable}
        >
          <span>
            {showFullTable
              ? language === "ms"
                ? "Sembunyikan Jadual Perbandingan Terperinci ▲"
                : "Hide Detailed Comparison Matrix ▲"
              : language === "ms"
              ? "Lihat Jadual Perbandingan 8-Kriteria Lengkap ▼"
              : "View 8-Criteria Detailed Comparison Matrix ▼"}
          </span>
        </button>
      </div>

      {/* 8-Criteria Matrix Table */}
      {showFullTable && (
        <div className="mt-6 rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl animate-fadeIn">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 font-bold text-zinc-400 w-1/4">
                    {language === "ms" ? "Kriteria Penilaian" : "Criteria"}
                  </th>
                  <th className="p-4 font-extrabold text-emerald-400 w-3/8 bg-emerald-500/5">
                    Design Express (RM5+)
                  </th>
                  <th className="p-4 font-extrabold text-cyan-400 w-3/8 bg-cyan-500/5">
                    Design Custom (RM35+)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {criteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white align-top">
                      {item.criterion[language]}
                    </td>
                    <td className="p-4 text-zinc-300 align-top leading-relaxed bg-emerald-500/5">
                      {item.express[language]}
                    </td>
                    <td className="p-4 text-zinc-300 align-top leading-relaxed bg-cyan-500/5">
                      {item.custom[language]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
