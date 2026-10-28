import { useI18n } from '../i18n/I18nProvider'
import { skills } from '../data/profile'
import { Section } from './Section'

const ORDER = ['web', 'back', 'iot', 'sys'] as const
const GLYPH: Record<(typeof ORDER)[number], string> = { web: '</>', back: '{ }', iot: '⌁', sys: '>_' }

export function Skills() {
  const { t } = useI18n()
  return (
    <Section id="skills" index="02" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="skills">
        {ORDER.map((g) => (
          <article key={g} className="skill-card reveal">
            <div className="skill-card__head">
              <span className="skill-card__glyph">{GLYPH[g]}</span>
              <h3>{t.skills.groups[g]}</h3>
            </div>
            <ul className="chips">
              {skills[g].map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
