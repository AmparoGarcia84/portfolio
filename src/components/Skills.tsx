import './Skills.css'

interface SkillGroup {
  label: string
  icon: string
  skills: string[]
}

const groups: SkillGroup[] = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Angular', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS / SCSS', 'Ionic', 'Vite'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt'],
  },
  {
    label: 'Bases de datos',
    icon: '🗄️',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Elasticsearch'],
  },
  {
    label: 'Mobile',
    icon: '📱',
    skills: ['Ionic', 'Capacitor', 'Android (Kotlin/Java)', 'Cordova'],
  },
  {
    label: 'Testing',
    icon: '🧪',
    skills: ['Vitest', 'Jest', 'React Testing Library', 'Karma', 'Jasmine', 'JUnit', 'Mockito', 'Playwright'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Docker', 'AWS', 'Terraform', 'Git', 'GitHub Actions'],
  },
  {
    label: 'Datos & Viz',
    icon: '📊',
    skills: ['ECharts', 'Chart.js', 'Recharts', 'AG Grid'],
  },
  {
    label: 'Herramientas',
    icon: '🛠️',
    skills: ['VS Code', 'Cursor', 'Android Studio', 'Prisma', 'i18next'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">Tecnologías</p>
      <h2 className="section-title">Stack técnico</h2>
      <p className="section-subtitle">
        Fullstack con especialización en frontend. Cómoda moviéndome entre stacks
        y aprendiendo lo que el proyecto necesite.
      </p>

      <div className="skills-grid">
        {groups.map(g => (
          <div key={g.label} className="skill-group">
            <div className="skill-group__header">
              <span className="skill-group__icon">{g.icon}</span>
              <span className="skill-group__label">{g.label}</span>
            </div>
            <div className="skill-group__tags">
              {g.skills.map(s => (
                <span key={s} className="tag skill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
