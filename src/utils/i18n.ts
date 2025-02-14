import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en/home.json";
import npTranslation from "../locales/np/home.json"; // Fix incorrect file import

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      np: { translation: npTranslation },
    },
    lng: 'np', // Default language
    fallbackLng: ['np', 'en'],
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
