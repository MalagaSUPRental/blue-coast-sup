'use client'
import { useState, useEffect, useCallback } from 'react'
import { translations, defaultLocale, type Locale } from './i18n'

const STORAGE_KEY = 'blue-coast-locale'

function detectLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved && ['en', 'ua', 'ru'].includes(saved)) return saved
  const lang = navigator.language.split('-')[0]
  if (lang === 'uk') return 'ua'
  if (lang === 'ru') return 'ru'
  return 'en'
}

let globalLocale: Locale = defaultLocale
const listeners = new Set<() => void>()

export function setLocale(locale: Locale) {
  globalLocale = locale
  if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, locale)
  listeners.forEach(fn => fn())
}

export function useTranslation() {
  const [locale, setLocaleState] = useState<Locale>(globalLocale)

  useEffect(() => {
    const detected = detectLocale()
    if (detected !== globalLocale) {
      globalLocale = detected
    }
    setLocaleState(globalLocale)

    const update = () => setLocaleState(globalLocale)
    listeners.add(update)
    return () => { listeners.delete(update) }
  }, [])

  const t = useCallback((key: string): string => {
    return translations[locale][key] ?? translations['en'][key] ?? key
  }, [locale])

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale)
  }, [])

  return { t, locale, changeLocale }
}
