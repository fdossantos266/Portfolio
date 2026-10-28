import type { ReactNode } from 'react'

type Props = { id: string; index: string; title: string; subtitle?: string; children: ReactNode }

export function Section({ id, index, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__index">{index}</span>
          <h2>{title}</h2>
          {subtitle && <p className="section__sub">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
