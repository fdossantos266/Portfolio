import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { profile } from '../data/profile'
import { ChatIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card reveal">
          <span className="section__index">04</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact__email">
            <code>{profile.email}</code>
            <button className="btn btn--small" onClick={copy}>{copied ? t.contact.copied : t.contact.copy}</button>
          </div>
          <div className="hero__cta contact__cta">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}><MailIcon size={16} /> {t.contact.email}</a>
            {profile.whatsapp && <a className="btn btn--ghost" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><ChatIcon size={16} /> WhatsApp</a>}
            {profile.github && <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a>}
            {profile.linkedin && <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={16} /> LinkedIn</a>}
          </div>
        </div>
      </div>
    </section>
  )
}
