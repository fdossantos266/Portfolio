import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, PinIcon } from './Icons'

const LINES = [
  { p: '$', c: 'whoami' },
  { o: 'felipe · web dev, networks, electronics' },
  { p: '$', c: 'cat stack.txt' },
  { o: 'React  TypeScript  Node.js  PostgreSQL' },
  { o: 'Python  ESP32  MQTT  Linux  Proxmox' },
  { p: '$', c: 'ping new-project' },
  { o: '64 bytes from new-project: icmp_seq=1 ttl=64 ✓', ok: true },
]

function Terminal() {
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(LINES.length); return }
    if (n >= LINES.length) return
    const id = setTimeout(() => setN((v) => v + 1), n === 0 ? 500 : 420)
    return () => clearTimeout(id)
  }, [n])

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal__bar">
        <span /><span /><span />
        <em>felipe@cayenne: ~</em>
      </div>
      <pre className="terminal__body">
        {LINES.slice(0, n).map((l, i) => (
          <div key={i} className={l.ok ? 'ok' : l.p ? 'cmd' : 'out'}>
            {l.p && <span className="prompt">{l.p} </span>}
            {l.c ?? l.o}
          </div>
        ))}
        <span className="caret">▋</span>
      </pre>
    </div>
  )
}

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge"><span className="dot" />{t.hero.available}</p>
          <p className="hero__hello">{t.hero.hello}</p>
          <h1 className="hero__title">
            {profile.firstName} <span className="hero__last">{profile.lastName}</span>
          </h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__pitch">{t.hero.pitch}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">{t.hero.ctaProjects} <ArrowIcon size={16} /></a>
            <a className="btn btn--ghost" href="#contact">{t.hero.ctaContact}</a>
            {profile.cvUrl && (
              <a className="btn btn--ghost" href={profile.cvUrl} download><DownloadIcon size={16} /> {t.hero.cv}</a>
            )}
          </div>
          <div className="hero__meta">
            <span><PinIcon size={15} /> {t.hero.location}</span>
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>}
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>}
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  )
}
