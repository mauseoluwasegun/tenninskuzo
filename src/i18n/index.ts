import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';
import deTranslation from './locales/de/translation.json';
import itTranslation from './locales/it/translation.json';
import ptTranslation from './locales/pt/translation.json';
import ruTranslation from './locales/ru/translation.json';
import zhTranslation from './locales/zh/translation.json';
import jaTranslation from './locales/ja/translation.json';
import koTranslation from './locales/ko/translation.json';
import arTranslation from './locales/ar/translation.json';
import hiTranslation from './locales/hi/translation.json';
import bnTranslation from './locales/bn/translation.json';
import urTranslation from './locales/ur/translation.json';
import faTranslation from './locales/fa/translation.json';
import trTranslation from './locales/tr/translation.json';
import viTranslation from './locales/vi/translation.json';
import thTranslation from './locales/th/translation.json';
import idTranslation from './locales/id/translation.json';
import msTranslation from './locales/ms/translation.json';

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  fr: { translation: frTranslation },
  de: { translation: deTranslation },
  it: { translation: itTranslation },
  pt: { translation: ptTranslation },
  ru: { translation: ruTranslation },
  zh: { translation: zhTranslation },
  ja: { translation: jaTranslation },
  ko: { translation: koTranslation },
  ar: { translation: arTranslation },
  hi: { translation: hiTranslation },
  bn: { translation: bnTranslation },
  ur: { translation: urTranslation },
  fa: { translation: faTranslation },
  tr: { translation: trTranslation },
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  id: { translation: idTranslation },
  ms: { translation: msTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // cache user language
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;