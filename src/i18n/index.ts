import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en";
import esTranslation from "./locales/es";
import enDashboard from "./locales/en-dashboard";
import esDashboard from "./locales/es-dashboard";
import enCourse from "./locales/en-course";
import esCourse from "./locales/es-course";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...enTranslation, ...enDashboard, ...enCourse },
      },
      es: {
        translation: { ...esTranslation, ...esDashboard, ...esCourse },
      },
    },
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
