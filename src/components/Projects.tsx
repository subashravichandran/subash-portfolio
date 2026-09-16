import ProjectCard from './ProjectCard'
import type { ProjectCardProps } from './ProjectCard'

const projects: ProjectCardProps[] = [
  {
    type: 'Self-hosted Infrastructure',
    title: 'SubiCloud',
    description:
      'A Git-driven deployment platform for self-hosted applications. It brings together Docker, Caddy and Cloudflare to provide a simple way to deploy and expose services from a personal server.',
    technologies: [
      'Docker',
      'Linux',
      'Cloudflare',
      'Caddy',
      'Git',
      'Nextcloud',
    ],
    featured: true,
    liveUrl: 'https://subicloud.com',
  },
  {
    type: 'SaaS',
    title: 'Downtime.io',
    description:
      'A SaaS platform for tracking dependency failures and service downtime, designed around monitoring, incident visibility and operational awareness.',
    technologies: [
      'Ruby on Rails',
      'PostgreSQL',
      'Redis',
      'Sidekiq',
      'React',
    ],
  },
  {
    type: 'Developer Tool',
    title: 'LogLens',
    description:
      'A log analytics project exploring log ingestion, processing and extracting useful insights from application logs.',
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'React',
    ],
  },
  {
    type: 'Frontend',
    title: 'Job Application Tracker',
    description:
      'A React and TypeScript application built while exploring component architecture, typed props, state management and form handling.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Selected Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Building beyond the day job.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Personal projects where I experiment with architecture,
            infrastructure and new technologies while solving
            practical problems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects