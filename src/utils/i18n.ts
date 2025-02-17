import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your JSON files
import enHomeTranslation from "../locales/en/home.json";
import npHomeTranslation from "../locales/np/home.json";




// Combine them into one resource for each language
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enHomeTranslation,// Combine home and card translations for English
        },
      },
      np: {
        translation: {
          ...npHomeTranslation, // Combine home and card translations for Nepali
        },
      },
    },
    lng: "np", // Default language
    fallbackLng: "en", // Fallback language in case of missing translations
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
