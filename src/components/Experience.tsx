import './Experience.css'

interface Job {
  company: string
  role: string
  period: string
  sector: string
  highlights: string[]
  stack: string[]
}

const jobs: Job[] = [
  {
    company: 'Handpoint S.L.',
    role: 'Desarrolladora de Software',
    period: 'Sep 2020 — Jul 2023',
    sector: 'Fintech · Pagos',
    highlights: [
      'Apps multiplataforma Android e iOS con Ionic y Angular para terminales de pago.',
      'Mantenimiento del SDK Android: migración de Java a Kotlin con pruebas JUnit + Mockito.',
      'APIs REST desplegadas en AWS con Docker y gestionadas con Terraform.',
      'Participación full-stack garantizando consistencia entre frontend y backend.',
    ],
    stack: ['Ionic', 'Angular', 'Kotlin', 'Java', 'Node.js', 'AWS', 'Docker', 'Terraform'],
  },
  {
    company: 'GMV Aerospace & Defence',
    role: 'Desarrolladora de Software',
    period: 'Mar 2020 — Sep 2020',
    sector: 'Defensa · Software táctico',
    highlights: [
      'Desarrollo del New Tactical Viewer dentro del sistema EUCCIS (mando y control NATO).',
      'Frontend con Angular, TypeScript y librerías especializadas AG Grid, Kendo, Luciad RIA/Fusion.',
      'Colaboración con equipo backend en Java.',
    ],
    stack: ['Angular', 'TypeScript', 'AG Grid', 'Kendo UI', 'Luciad RIA', 'Java'],
  },
  {
    company: 'Electrotecnia Monrabal',
    role: 'Ingeniera de Proyectos I+D',
    period: 'Sep 2017 — Feb 2019',
    sector: 'Smart City · Energía',
    highlights: [
      'Desarrollo del dashboard SIGENTY, sistema de eficiencia energética Smart City 4.0.',
      'Frontend con Meteor y Chart.js para visualización y análisis de datos en tiempo real.',
    ],
    stack: ['Meteor', 'JavaScript', 'Chart.js'],
  },
]

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <div className="job">
      <div className="job__timeline">
        <div className="job__dot" />
        {index < jobs.length - 1 && <div className="job__line" />}
      </div>

      <div className="job__content">
        <div className="job__header">
          <div>
            <h3 className="job__company">{job.company}</h3>
            <p className="job__role">{job.role}</p>
          </div>
          <div className="job__meta">
            <span className="tag">{job.period}</span>
            <span className="tag accent">{job.sector}</span>
          </div>
        </div>

        <ul className="job__highlights">
          {job.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="job__stack">
          {job.stack.map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Trayectoria</p>
      <h2 className="section-title">Experiencia profesional</h2>
      <p className="section-subtitle">
        Más de 5 años en desarrollo de software en sectores técnicamente exigentes:
        fintech, defensa y smart city.
      </p>

      <div className="experience-list">
        {jobs.map((job, i) => (
          <JobCard key={job.company} job={job} index={i} />
        ))}
      </div>

      <div className="education">
        <h3 className="education__title">Formación</h3>
        <div className="education__items">
          <div className="education__item">
            <span className="education__degree">Máster en Ingeniería de Telecomunicaciones</span>
            <span className="education__school">Universitat Politècnica de València · 2015–2017</span>
          </div>
          <div className="education__item">
            <span className="education__degree">Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación</span>
            <span className="education__school">Universitat Politècnica de València · 2010–2015</span>
          </div>
        </div>
      </div>
    </section>
  )
}
