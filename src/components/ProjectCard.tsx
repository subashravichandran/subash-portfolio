export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  type: string
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  type,
  featured = false,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <article
      className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? 'border-blue-200 bg-blue-50/40 md:col-span-2'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            {type}
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>
        </div>

        {featured && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Featured
          </span>
        )}
      </div>

      <p className="mt-5 max-w-3xl leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
          >
            {technology}
          </span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="mt-7 flex gap-5 text-sm font-semibold">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 hover:text-blue-500"
            >
              GitHub ↗
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 hover:text-blue-500"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard