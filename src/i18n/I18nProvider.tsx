import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DICTS, type Dict, type Lang } from './translations'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }

const I18nContext = createContext<Ctx | null>(null)
const KEY = 'portfolio-lang'

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'fr' || saved === 'pt' || saved === 'en') return saved
  } catch { /* storage unavailable */ }
  const nav = navigator.language.slice(0, 2)
  return nav === 'pt' ? 'pt' : nav === 'en' ? 'en' : 'fr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detect)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
    try { localStorage.setItem(KEY, lang) } catch { /* ignore */ }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
