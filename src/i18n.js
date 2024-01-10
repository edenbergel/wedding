import i18n from "i18next";
import { initReactI18next } from "react-i18next";  // If using with React
import { fr, he } from "./locales";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "fr",  // Fallback language
		resources: {
			fr: { translation: fr },
			he: { translation: he }
		},
		interpolation: {
		escapeValue: false,  // React already escapes by default
		},
		detection: {
			// order and from where user language should be detected
			order: ["navigator"],
			// keys or params to lookup language from
			lookupLocalStorage: "lng",
		},
		debug: true
	});