import { siteConfig } from "@/data/main-site/siteConfig";
import { EstimateResult, CalculatorState } from "./mainSitePricing";

export interface ContactBriefData {
  name?: string;
  bizName?: string;
  category: string;
  packageTitle?: string;
  description: string;
  budgetRange?: string;
  intendedUse?: string;
  websiteUrl?: string;
}

export function buildEstimatorWhatsAppUrl(state: CalculatorState, estimate: EstimateResult, lang: "ms" | "en" = "ms"): string {
  const isMs = lang === "ms";
  const pkgTitle = estimate.basePackage ? estimate.basePackage.title[lang] : (isMs ? "Konsultasi Umum" : "General Consultation");
  const categoryName = state.category.toUpperCase().replace("_", " ");

  const priceText = estimate.isQuoteRequired
    ? (isMs ? "Perlu sebut harga" : "Quote required")
    : `${estimate.currency}${estimate.totalOneOff} (${isMs ? "Anggaran awal mengikut skop" : "Initial estimate per scope"})`;

  const highlights = estimate.scopeHighlights[lang].length > 0
    ? estimate.scopeHighlights[lang].join("; ")
    : (estimate.basePackage?.deliverables[lang] || "-");

  const unpriced = estimate.unpricedItems[lang].length > 0
    ? `\n${isMs ? "Perkara tambahan untuk disahkan" : "Items to confirm"}: ${estimate.unpricedItems[lang].join("; ")}`
    : "";

  const notes = state.clientNotes
    ? `\n${isMs ? "Nota projek" : "Client notes"}: ${state.clientNotes}`
    : "";

  const message = isMs
    ? `Hai Danial, saya berminat dengan servis ${categoryName}.
Pakej: ${pkgTitle}
Anggaran awal: ${priceText}
Skop ringkas: ${highlights}
Suntingan termasuk: ${estimate.revisionAllowance[lang]}${unpriced}${notes}

Harga akhir dan butiran lanjut boleh disahkan selepas perbincangan.`
    : `Hi Danial, I am interested in your ${categoryName} services.
Package: ${pkgTitle}
Initial estimate: ${priceText}
Key deliverables: ${highlights}
Included revisions: ${estimate.revisionAllowance[lang]}${unpriced}${notes}

Final pricing and specific requirements will be confirmed upon discussion.`;

  return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildContactFormWhatsAppUrl(data: ContactBriefData, lang: "ms" | "en" = "ms"): string {
  const isMs = lang === "ms";

  const lines: string[] = [];
  lines.push(isMs ? "Hai Danial, saya ingin bertanyakan tentang servis:" : "Hi Danial, I would like to inquire about your services:");
  lines.push(`${isMs ? "Kategori" : "Category"}: ${data.category}`);

  if (data.packageTitle) {
    lines.push(`${isMs ? "Pakej pilihan" : "Selected package"}: ${data.packageTitle}`);
  }
  if (data.name) {
    lines.push(`${isMs ? "Nama" : "Name"}: ${data.name}`);
  }
  if (data.bizName) {
    lines.push(`${isMs ? "Bisnes/Projek" : "Business/Project"}: ${data.bizName}`);
  }
  if (data.budgetRange && data.budgetRange !== "Belum pasti" && data.budgetRange !== "Not sure") {
    lines.push(`${isMs ? "Bajet anggaran" : "Target budget"}: ${data.budgetRange}`);
  }
  if (data.websiteUrl) {
    lines.push(`${isMs ? "Pautan website / rujukan" : "Website/Reference URL"}: ${data.websiteUrl}`);
  }
  if (data.intendedUse) {
    lines.push(`${isMs ? "Penggunaan / Saiz" : "Format / Intended use"}: ${data.intendedUse}`);
  }

  lines.push(`${isMs ? "Keperluan projek" : "Project brief"}: ${data.description}`);
  lines.push("");
  lines.push(isMs ? "Boleh kita bincangkan cadangan yang sesuai?" : "Could we discuss suitable options?");

  return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
}
