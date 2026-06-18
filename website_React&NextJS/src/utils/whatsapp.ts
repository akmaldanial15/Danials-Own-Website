export const PHONE_NUMBER = "0136632092"; // Danial's direct number

export function generateWhatsAppLink({ packageName, priceText, selectedAddOns = [], totalEstimate = 0 }) {
  const formattedPhone = "6" + PHONE_NUMBER.replace(/\D/g, ""); // Malaysian country code 6013...
  
  let message = `Hi Danial's Web & Systems, saya berminat untuk menempah/bertanya tentang perkhidmatan berikut:\n\n`;
  message += `*Pakej Pilihan:* ${packageName} (${priceText})\n`;
  
  if (selectedAddOns.length > 0) {
    message += `\n*Add-on Tambahan:*\n`;
    selectedAddOns.forEach((addon, index) => {
      message += `${index + 1}. ${addon.name} (+RM${addon.price})\n`;
    });
  }
  
  if (totalEstimate > 0) {
    message += `\n*Anggaran Kasar Harga:* RM${totalEstimate.toLocaleString()}\n`;
  }
  
  message += `\nSila hubungi saya untuk perbincangan lanjut. Terima kasih!`;
  
  // Encode message for URL
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedText}`;
}

export function generateQuickFixLink(fixName, price) {
  const formattedPhone = "6" + PHONE_NUMBER.replace(/\D/g, "");
  const message = `Hi Danial's Web & Systems, saya memerlukan bantuan untuk membaiki website saya.\n\n*Jenis Masalah/Fix:* ${fixName} (Mulai RM${price})\n\nSila hubungi saya untuk pemeriksaan lanjut. Terima kasih!`;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}
