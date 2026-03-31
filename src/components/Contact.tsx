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
            <a href="mailto:amparo.garcia.dev@gmail.com" className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">amparo.garcia.dev@gmail.com</span>
              </div>
            </a>

            <a href="tel:+34677550171" className="contact__link">
              <div className="contact__link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__link-label">Teléfono</span>
                <span className="contact__link-value">+34 677 55 01 71</span>
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
                <span className="contact__link-value">Picanya, Valencia</span>
              </div>
            </div>
          </div>

          <a href="mailto:amparo.garcia.dev@gmail.com" className="btn btn-primary contact__cta">
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
