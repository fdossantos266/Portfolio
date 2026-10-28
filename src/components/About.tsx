import { useI18n } from '../i18n/I18nProvider'
import { Section } from './Section'

export function About() {
  const { t } = useI18n()
  return (
    <Section id="about" index="01" title={t.about.title}>
      <div className="about">
        <div className="about__text reveal">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
        <dl className="about__facts reveal">
          {t.about.facts.map((f) => (
            <div key={f.k} className="fact">
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
