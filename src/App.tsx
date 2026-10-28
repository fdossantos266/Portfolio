import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { useI18n } from './i18n/I18nProvider'
import { profile } from './data/profile'

type Theme = 'dark' | 'light'
const THEME_KEY = 'portfolio-theme'

function initialTheme(): Theme {
  try {
    const s = localStorage.getItem(THEME_KEY)
    if (s === 'dark' || s === 'light') return s
  } catch { /* ignore */ }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function useReveal(dep: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [dep])
}

export default function App() {
  const { t, lang } = useI18n()
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(THEME_KEY, theme) } catch { /* ignore */ }
  }, [theme])

  useReveal(lang)

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav theme={theme} onToggleTheme={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} · {t.footer.made} {profile.firstName} {profile.lastName}</p>
        </div>
      </footer>
    </>
  )
}
