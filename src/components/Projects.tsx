import React from 'react'
import { CRMMockup, NutritionDashboardMockup, NutritionAppMockup } from './ProjectMockups'
import './Projects.css'

interface Project {
  title: string
  description: string
  longDesc: string
  type: string
  stack: string[]
  accentColor: string
  status: 'in-progress' | 'completed'
  mockup: React.ReactNode
  mockupBg: string
}

const projects: Project[] = [
  {
    title: 'CRM Seguros & Energía',
    description: 'CRM completo para gestoría de seguros y energía. Gestión de clientes, ventas, pólizas, contratos energéticos, casos e incidencias, y control horario de empleados.',
    longDesc: 'PostgreSQL por la fuerte relacionalidad del dominio (clientes → pólizas → contratos). Backend propio en Express para lógica de negocio personalizada que no encaja en un BaaS. JWT stateless adecuado para roles diferenciados a nivel de middleware.',
    type: 'Web App · CRM',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'i18next'],
    accentColor: '#d2b87a',
    status: 'in-progress',
    mockup: <CRMMockup />,
    mockupBg: '#EDE6DC',
  },
  {
    title: 'Nutrition Dashboard',
    description: 'Plataforma SaaS para nutricionistas. Gestión integral de pacientes, seguimiento de medidas corporales, actividad física y generación de dietas con API externa Edamam.',
    longDesc: 'Next.js App Router por SSR en una SaaS donde el tiempo de carga importa. Supabase con RLS como garantía de aislamiento multi-tenant a nivel de base de datos, sin lógica extra en servidor. Edamam API para evitar construir y mantener un dataset nutricional desde cero.',
    type: 'SaaS · Web App',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Recharts', 'Edamam API'],
    accentColor: '#A8B7A0',
    status: 'in-progress',
    mockup: <NutritionDashboardMockup />,
    mockupBg: '#E4EDE4',
  },
  {
    title: 'Nutrition App',
    description: 'App móvil multiplataforma para seguimiento de salud y nutrición personal. Para los pacientes que quieren tener un seguimiento personalizado de su salud y nutrición.',
    longDesc: 'Angular + Ionic por reutilización de código entre Android, iOS y web con un único equipo. ECharts sobre Recharts por mejor rendimiento en canvas para visualizaciones complejas en móvil. Docker multi-stage para builds reproducibles en el pipeline de distribución a tiendas.',
    type: 'Mobile App · Web',
    stack: ['Angular 20', 'Ionic', 'TypeScript', 'Capacitor', 'ECharts', 'Docker'],
    accentColor: '#9C6B42',
    status: 'in-progress',
    mockup: <NutritionAppMockup />,
    mockupBg: '#EDE8E0',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const isMobile = project.type.includes('Mobile')

  return (
    <article
      className="project-card"
      style={{ '--project-accent': project.accentColor } as React.CSSProperties}
    >
      {/* Mockup preview */}
      <div
        className={`project-card__preview${isMobile ? ' project-card__preview--mobile' : ''}`}
        style={{ background: project.mockupBg }}
      >
        <div className={`project-card__mockup${isMobile ? ' project-card__mockup--mobile' : ''}`}>
          {project.mockup}
        </div>
      </div>

      {/* Header row */}
      <div className="project-card__header">
        <div className="project-card__type tag accent">{project.type}</div>
        <span className={`project-card__status ${project.status === 'in-progress' ? 'status--active' : 'status--done'}`}>
          {project.status === 'in-progress' ? 'En desarrollo' : 'Completado'}
        </span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <p className="project-card__long">{project.longDesc}</p>

      <div className="project-card__stack">
        {project.stack.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Proyectos recientes</p>
      <h2 className="section-title">Lo que estoy construyendo</h2>
      <p className="section-subtitle">
        Proyectos reales en desarrollo activo — herramientas de trabajo a medida para negocios concretos.
      </p>

      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
