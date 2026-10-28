import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { LANGS } from '../i18n/translations'
import { profile } from '../data/profile'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

type Props = { theme: 'dark' | 'light'; onToggleTheme: () => void }
const SECTIONS = ['about', 'skills', 'projects', 'contact'] as const

export function Nav({ theme, onToggleTheme }: Props) {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Home">
          <span className="nav__mark">{profile.initials}</span>
          <span className="nav__name">{profile.firstName}<span className="accent">.</span></span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {SECTIONS.map((s) => (
            <a key={s} href={`#${s}`} className={active === s ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l.code} className={lang === l.code ? 'is-active' : ''} onClick={() => setLang(l.code)} aria-pressed={lang === l.code}>
                {l.label}
              </button>
            ))}
          </div>
          <button className="icon-btn" onClick={onToggleTheme} aria-label={theme === 'dark' ? t.theme.light : t.theme.dark} title={theme === 'dark' ? t.theme.light : t.theme.dark}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
