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
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'CRM Seguros & Energía',
    description: 'CRM multiusuario para gestoría de seguros y energía. Gestión de clientes, ventas, pólizas, contratos energéticos, casos e incidencias y control horario. Roles OWNER/EMPLOYEE con permisos granulares, autenticación JWT e i18n.',
    longDesc: 'PostgreSQL por la fuerte relacionalidad del dominio (clientes → pólizas → contratos). Backend propio en Express para lógica de negocio personalizada que no encaja en un BaaS. JWT stateless adecuado para roles diferenciados a nivel de middleware.',
    type: 'Web App · CRM',
    stack: ['React 19', 'Vite', 'TypeScript', 'i18next', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    accentColor: '#d2b87a',
    status: 'in-progress',
    mockup: <CRMMockup />,
    mockupBg: '#EDE6DC',
    demoUrl: 'https://dev.insurance-energy-crm.pages.dev',
  },
  {
    title: 'Nutrition Dashboard',
    description: 'Plataforma SaaS para nutricionistas: gestión de pacientes, seguimiento de medidas corporales y actividad física, y generación de dietas con la API de Edamam. Supabase con Row Level Security para aislar los datos de cada consulta.',
    longDesc: 'Next.js App Router por SSR en una SaaS donde el tiempo de carga importa. Supabase con RLS como garantía de aislamiento multi-tenant a nivel de base de datos, sin lógica extra en servidor. Edamam API para evitar construir y mantener un dataset nutricional desde cero.',
    type: 'SaaS · Web App',
    stack: ['React 19', 'Next.js 16', 'TypeScript', 'Recharts', 'PostgreSQL', 'Supabase', 'Edamam API'],
    accentColor: '#A8B7A0',
    status: 'in-progress',
    mockup: <NutritionDashboardMockup />,
    mockupBg: '#E4EDE4',
  },
  {
    title: 'Nutrition App',
    description: 'App móvil multiplataforma para que los pacientes sigan su salud y nutrición. Gráficas con ECharts y CI con GitHub Actions y Docker multi-stage (lint, tests y build servido con Nginx).',
    longDesc: 'Angular + Ionic por reutilización de código entre Android, iOS y web con un único equipo. ECharts sobre Recharts por mejor rendimiento en canvas para visualizaciones complejas en móvil. Docker multi-stage para builds y tests reproducibles en CI.',
    type: 'Mobile App · Ionic + Capacitor',
    stack: ['Angular 20', 'Ionic', 'Capacitor', 'TypeScript', 'ECharts', 'Docker'],
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

      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__demo"
        >
          Ver demo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      )}

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
