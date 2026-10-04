import { CONTACT } from '../config'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact__card">
        <div className="contact__glow" aria-hidden="true" />

        <div className="contact__body">
          <p className="section-label">Contacto</p>
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <p className="contact__desc">
            Estoy disponible para proyectos freelance — aplicaciones web, herramientas internas,
            dashboards, CRMs, o cualquier idea que necesite un producto digital a medida.
            Cuéntame qué necesitas.
          </p>

          <div className="contact__links">
            <a href={`mailto:${CONTACT.email}`} className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">{CONTACT.email}</span>
              </div>
            </a>

            <a href={`tel:${CONTACT.phone}`} className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Teléfono</span>
                <span className="contact__link-value">{CONTACT.phoneDisplay}</span>
              </div>
            </a>

            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">{CONTACT.linkedinDisplay}</span>
              </div>
            </a>

            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.6 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">{CONTACT.githubDisplay}</span>
              </div>
            </a>

            <div className="contact__link contact__link--static">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Ubicación</span>
                <span className="contact__link-value">{CONTACT.location}</span>
              </div>
            </div>
          </div>

          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary contact__cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
