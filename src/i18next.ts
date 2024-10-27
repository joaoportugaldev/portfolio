// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa traduções (por exemplo, em JSON)
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
  },
  lng: 'en', // Idioma inicial
  fallbackLng: 'en', // Idioma de fallback caso a tradução não exista
  interpolation: {
    escapeValue: false, // React já protege contra XSS
  },
});

export default i18n;
