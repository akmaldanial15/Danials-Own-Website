import { packagesCatalog, PackageItem, ServiceCategory } from "@/data/main-site/packages";

export interface CalculatorState {
  category: ServiceCategory | "not_sure";
  packageId: string;
  // Website options
  extraPagesCount: number;
  extraLanguage: boolean;
  domainOption: "existing" | "need_help" | "not_sure";
  hostingOption: "existing" | "need_help" | "not_sure";
  dynamicFeaturesNote: string;
  // Express options
  expressQuantity: number;
  expressExtraRevisions: number;
  expressIntendedUse: string;
  // Custom options
  customQuantity: number;
  needSourceFiles: boolean;
  needPrintPrep: boolean;
  customPrintSize: string;
  // Repair options
  repairType: string;
  websiteUrl: string;
  // Systems options
  systemWorkflows: string[];
  // Common notes
  clientNotes: string;
}

export interface EstimateResult {
  basePackage: PackageItem | null;
  baseAmount: number;
  extraPagesAmount: number;
  extraLanguageAmount: number;
  extraRevisionsAmount: number;
  totalOneOff: number;
  currency: string;
  isStartingEstimate: boolean;
  isQuoteRequired: boolean;
  statusBadge: {
    ms: string;
    en: string;
  };
  revisionAllowance: {
    ms: string;
    en: string;
  };
  deliverablesText: {
    ms: string;
    en: string;
  };
  unpricedItems: {
    ms: string[];
    en: string[];
  };
  scopeHighlights: {
    ms: string[];
    en: string[];
  };
}

export const initialCalculatorState: CalculatorState = {
  category: "website",
  packageId: "w1-landing-starter",
  extraPagesCount: 0,
  extraLanguage: false,
  domainOption: "not_sure",
  hostingOption: "not_sure",
  dynamicFeaturesNote: "",
  expressQuantity: 1,
  expressExtraRevisions: 0,
  expressIntendedUse: "Social Media / WhatsApp",
  customQuantity: 1,
  needSourceFiles: false,
  needPrintPrep: false,
  customPrintSize: "A4",
  repairType: "layout_content",
  websiteUrl: "",
  systemWorkflows: [],
  clientNotes: "",
};

export function calculateEstimate(state: CalculatorState): EstimateResult {
  const pkg = packagesCatalog.find((p) => p.id === state.packageId) || null;

  let baseAmount = 0;
  let extraPagesAmount = 0;
  let extraLanguageAmount = 0;
  let extraRevisionsAmount = 0;
  let isQuoteRequired = false;
  let isStartingEstimate = true;

  const unpricedMs: string[] = [];
  const unpricedEn: string[] = [];
  const highlightsMs: string[] = [];
  const highlightsEn: string[] = [];

  if (state.category === "not_sure") {
    return {
      basePackage: null,
      baseAmount: 0,
      extraPagesAmount: 0,
      extraLanguageAmount: 0,
      extraRevisionsAmount: 0,
      totalOneOff: 0,
      currency: "RM",
      isStartingEstimate: true,
      isQuoteRequired: true,
      statusBadge: {
        ms: "Perbincangan Percuma",
        en: "Free Consultation",
      },
      revisionAllowance: {
        ms: "Mengikut skop yang dipersetujui",
        en: "Per agreed scope",
      },
      deliverablesText: {
        ms: "Cadangan solusi mengikut bajet anda",
        en: "Tailored recommendation matching your budget",
      },
      unpricedItems: {
        ms: ["Skop belum ditentukan: bincang santai di WhatsApp"],
        en: ["Scope undefined: consult casually on WhatsApp"],
      },
      scopeHighlights: {
        ms: ["Bantuan padanan servis mengikut bajet"],
        en: ["Guidance matching your needs to the right service"],
      },
    };
  }

  if (pkg) {
    baseAmount = pkg.price;
    isStartingEstimate = pkg.priceType === "starting_from";
    isQuoteRequired = pkg.priceStatus === "quote_required";

    // Category specific calculations
    if (state.category === "website") {
      // Extra pages: RM50 each (only applicable for multi-page or compatible packages)
      if (pkg.id !== "w1-landing-starter" && state.extraPagesCount > 0) {
        extraPagesAmount = state.extraPagesCount * 50;
        highlightsMs.push(`+ ${state.extraPagesCount} halaman standard tambahan (RM${extraPagesAmount})`);
        highlightsEn.push(`+ ${state.extraPagesCount} additional standard page(s) (RM${extraPagesAmount})`);
      } else if (pkg.id === "w1-landing-starter" && state.extraPagesCount > 0) {
        unpricedMs.push("Landing Starter dihadkan kepada 1 halaman. Penambahan halaman disyorkan menaik taraf ke Business Website.");
        unpricedEn.push("Landing Starter is strictly 1 page. For extra pages, upgrading to Business Website is recommended.");
      }

      // Extra language: RM80 (client-supplied copy)
      if (state.extraLanguage) {
        extraLanguageAmount = 80;
        highlightsMs.push("+ Adaptasi dwi-bahasa (teks dibekalkan pelanggan) (RM80)");
        highlightsEn.push("+ Dual-language adaptation (client-supplied copy) (RM80)");
      }

      // Domain/Hosting notice
      if (state.domainOption === "need_help") {
        unpricedMs.push("Nama domain: bantuan pemilihan & pendaftaran (kos domain rasmi dibayar berasingan)");
        unpricedEn.push("Domain name: setup assistance (official registrar fees paid separately)");
      }
      if (state.hostingOption === "need_help") {
        unpricedMs.push("Hosting pelayan: cadangan pakej hosting bersesuaian");
        unpricedEn.push("Hosting server: guidance towards suitable host tier");
      }
      if (state.dynamicFeaturesNote) {
        unpricedMs.push(`Fungsi kustom diminta: "${state.dynamicFeaturesNote}" (perlu sebut harga teknikal)`);
        unpricedEn.push(`Custom dynamic features requested: "${state.dynamicFeaturesNote}" (technical quote required)`);
      }
    } else if (state.category === "design_express") {
      if (pkg.id === "e1-single-image") {
        const qty = Math.max(1, state.expressQuantity);
        baseAmount = 5 * qty;
        highlightsMs.push(`${qty} keping suntingan imej ringkas (RM5 x ${qty})`);
        highlightsEn.push(`${qty} simple image edit(s) (RM5 x ${qty})`);
      } else if (pkg.id === "e2-duo-image") {
        const bundles = Math.max(1, state.expressQuantity);
        baseAmount = 8 * bundles;
        const totalImages = bundles * 2;
        highlightsMs.push(`${bundles} pakej Duo (${totalImages} keping gambar) (RM8 x ${bundles})`);
        highlightsEn.push(`${bundles} Duo bundle(s) (${totalImages} images) (RM8 x ${bundles})`);
      }

      if (state.expressExtraRevisions > 0) {
        extraRevisionsAmount = state.expressExtraRevisions * 2;
        highlightsMs.push(`+ ${state.expressExtraRevisions} pusingan suntingan kecil tambahan (RM2 x ${state.expressExtraRevisions})`);
        highlightsEn.push(`+ ${state.expressExtraRevisions} extra minor revision round(s) (RM2 x ${state.expressExtraRevisions})`);
      }
    } else if (state.category === "design_custom") {
      const qty = Math.max(1, state.customQuantity);
      if (qty > 1) {
        baseAmount = pkg.price * qty;
        highlightsMs.push(`${qty} rekaan di bawah pakej ${pkg.title.ms}`);
        highlightsEn.push(`${qty} artwork(s) under package ${pkg.title.en}`);
      }

      if (state.needSourceFiles) {
        unpricedMs.push("Penyediaan fail editable (.ai / .psd): perlu pengesahan harga dalam sebut harga");
        unpricedEn.push("Editable layered source files (.ai / .psd): price to be confirmed in quotation");
      }
      if (state.needPrintPrep) {
        unpricedMs.push(`Format cetakan fizikal (${state.customPrintSize}): sedia margin & bleed cetak`);
        unpricedEn.push(`Print preparation (${state.customPrintSize}): bleed & trim zones setup`);
      }
    } else if (state.category === "repair") {
      isStartingEstimate = true;
      unpricedMs.push("Kos muktamad disahkan selepas semakan kod sumber website anda");
      unpricedEn.push("Final cost confirmed after inspecting your website source code");
    } else if (state.category === "systems") {
      isStartingEstimate = true;
      if (state.systemWorkflows.length > 0) {
        highlightsMs.push(`Aliran kerja dipilih: ${state.systemWorkflows.join(", ")}`);
        highlightsEn.push(`Selected workflows: ${state.systemWorkflows.join(", ")}`);
      }
      unpricedMs.push("Sistem kustom dinilai secara teliti mengikut seni bina data yang dipersetujui");
      unpricedEn.push("Custom systems are assessed based on approved technical data architecture");
    }
  }

  const totalOneOff = baseAmount + extraPagesAmount + extraLanguageAmount + extraRevisionsAmount;

  return {
    basePackage: pkg,
    baseAmount,
    extraPagesAmount,
    extraLanguageAmount,
    extraRevisionsAmount,
    totalOneOff,
    currency: "RM",
    isStartingEstimate,
    isQuoteRequired,
    statusBadge: pkg?.statusBadge || { ms: "Anggaran Awal", en: "Provisional" },
    revisionAllowance: pkg?.revisionRounds || { ms: "2 kali suntingan kecil", en: "2 minor revisions" },
    deliverablesText: pkg?.deliverables || { ms: "Fail sedia guna", en: "Ready to use files" },
    unpricedItems: {
      ms: unpricedMs,
      en: unpricedEn,
    },
    scopeHighlights: {
      ms: highlightsMs,
      en: highlightsEn,
    },
  };
}
