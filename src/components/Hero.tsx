import monogram from '../../public/amparo-garcia-vidal-monogram-transparent.png'
import cvPdf from '../../public/CV_AmparoGV.pdf'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__visual" aria-hidden="true">
        <img
          src={monogram}
          alt=""
          className="hero__monogram"
        />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible para proyectos
        </div>

        <h1 className="hero__name">
          Amparo García
          <span className="hero__name-accent"> Vidal</span>
        </h1>

        <p className="hero__title">Fullstack Developer</p>

        <p className="hero__desc">
          Diseño y construyo <strong>aplicaciones web y herramientas digitales</strong> a medida —
          desde el prototipo hasta el producto en producción.
          Especializada en frontend con experiencia fullstack en entornos de{' '}
          <em>fintech, defensa y smart city</em>.
        </p>

        <div className="hero__stack">
          {['React', 'Angular', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
            </svg>
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Escribir
          </a>
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="7" cy="6" r="1.5" fill="currentColor">
            <animate attributeName="cy" values="6;12;6" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  )
}
