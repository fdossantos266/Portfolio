import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { projects, type Category, type Project } from '../data/projects'
import { Section } from './Section'
import { CloseIcon, ExternalIcon, GithubIcon } from './Icons'

const CATS: Category[] = ['iot', 'web', 'mobile', 'desktop', 'tools', 'games']

function Links({ p }: { p: Project }) {
  const { t } = useI18n()
  return (
    <>
      {p.repo && <a className="btn btn--small btn--ghost" href={p.repo} target="_blank" rel="noreferrer"><GithubIcon size={15} /> {t.projects.code}</a>}
      {p.demo && <a className="btn btn--small btn--ghost" href={p.demo} target="_blank" rel="noreferrer"><ExternalIcon size={15} /> {t.projects.demo}</a>}
    </>
  )
}

function TeamBadge({ inline }: { inline?: boolean }) {
  const { t } = useI18n()
  return (
    <span className={`team-badge ${inline ? 'team-badge--inline' : ''}`}>
      <img src="/bravva-mark.jpg" alt="" width={20} height={20} />
      {t.projects.team}
    </span>
  )
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { t, lang } = useI18n()
  const tx = p.text[lang]
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    d?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <dialog
      ref={ref}
      className="modal"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) ref.current?.close() }}
      aria-labelledby={`m-${p.id}`}
    >
      <div className="modal__inner">
        <button className="icon-btn modal__close" onClick={() => ref.current?.close()} aria-label={t.projects.close}><CloseIcon /></button>
        <img className="modal__img" src={p.image} alt={p.imageAlt ?? tx.title} />
        <div className="modal__body">
          <div className="project__meta">
            <span>{p.year}</span>
            <span className={`status status--${p.status}`}>{t.projects.status[p.status]}</span>
            {p.team === 'bravva' && <TeamBadge inline />}
          </div>
          <h3 id={`m-${p.id}`}>{tx.title}</h3>
          <p className="modal__tagline">{tx.tagline}</p>
          <div className="modal__cols">
            <div><h4>{t.projects.problem}</h4><p>{tx.problem}</p></div>
            <div><h4>{t.projects.solution}</h4><p>{tx.solution}</p></div>
          </div>
          <h4>{t.projects.highlights}</h4>
          <ul className="ticks">{tx.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <h4>{t.projects.stack}</h4>
          <ul className="chips">{p.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
          <div className="project__links"><Links p={p} /></div>
        </div>
      </div>
    </dialog>
  )
}

export function Projects() {
  const { t, lang } = useI18n()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const list = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )
  const opened = projects.find((p) => p.id === openId)

  return (
    <Section id="projects" index="03" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="filters reveal" role="tablist" aria-label="Filter">
        {(['all', ...CATS] as const).map((c) => (
          <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? 'is-active' : ''} onClick={() => setFilter(c)}>
            {c === 'all' ? t.projects.all : t.projects.cats[c]}
          </button>
        ))}
      </div>

      <div className="projects">
        {list.map((p) => {
          const tx = p.text[lang]
          return (
            <article key={p.id} className={`project ${p.featured ? 'project--featured' : ''}`}>
              <button className="project__media" onClick={() => setOpenId(p.id)} aria-label={`${t.projects.details}: ${tx.title}`}>
                <img src={p.image} alt={p.imageAlt ?? tx.title} loading="lazy" />
                {p.featured && <span className="project__flag">★ {t.projects.featured}</span>}
                {p.team === 'bravva' && <TeamBadge />}
              </button>
              <div className="project__body">
                <div className="project__meta">
                  <span>{p.year}</span>
                  <span>·</span>
                  <span>{p.categories.map((c) => t.projects.cats[c]).join(' / ')}</span>
                  <span className={`status status--${p.status}`}>{t.projects.status[p.status]}</span>
                </div>
                <h3>{tx.title}</h3>
                <p>{tx.tagline}</p>
                <ul className="chips chips--sm">
                  {p.stack.slice(0, 5).map((s) => <li key={s} className="chip">{s}</li>)}
                  {p.stack.length > 5 && <li className="chip chip--more">+{p.stack.length - 5}</li>}
                </ul>
                <div className="project__links">
                  <button className="btn btn--small btn--primary" onClick={() => setOpenId(p.id)}>{t.projects.details}</button>
                  <Links p={p} />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {opened && <Modal p={opened} onClose={() => setOpenId(null)} />}
    </Section>
  )
}
