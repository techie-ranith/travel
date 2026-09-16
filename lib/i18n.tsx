"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Translation } from "@/lib/translations";
import {
  detectBrowserLocale,
  fontClasses,
  isLocale,
  localeMeta,
  type Locale,
} from "@/lib/locales/config";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
  meta: (typeof localeMeta)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "traveleo-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) {
      setLocaleState(saved);
    } else {
      setLocaleState(detectBrowserLocale());
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const meta = localeMeta[locale];
    const root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    root.classList.remove(...fontClasses);
    root.classList.add(meta.fontClass);
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      meta: localeMeta[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
