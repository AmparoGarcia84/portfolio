import { useState, useEffect } from 'react'
import favicon from '../../public/amparo-garcia-vidal-favicon.svg'
import { CONTACT } from '../config'
import './Nav.css'

const links = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <img
            src={favicon}
            alt="AG"
            className="nav__logo-mark"
          />
          <span className="nav__logo-text">
            Amparo <span className="nav__logo-surname">García</span>
          </span>
        </a>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary nav__cta">
            Contactar
          </a>
        </nav>

        <button
          className={`nav__burger${open ? ' nav__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
