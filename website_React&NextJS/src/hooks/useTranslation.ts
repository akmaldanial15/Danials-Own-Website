"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export type TranslationKey = keyof typeof translations.ms;

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = (key: TranslationKey): string => {
    // Falls back to Malay (ms) if the key is missing in the selected language
    return translations[language][key] || translations.ms[key];
  };

  return { t, language, setLanguage };
}
