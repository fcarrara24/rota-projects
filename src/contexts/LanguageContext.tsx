import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from '../types';
import { LanguageContext } from './language';

const LANGUAGE_STORAGE_KEY = 'rota-language';

const getStoredLanguage = (): Language | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === 'en' || stored === 'it') {
    return stored;
  }

  return null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage() ?? 'en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === 'en' ? 'it' : 'en')),
      setLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
