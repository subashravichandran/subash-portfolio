const Experience = () => {
  const highlights = [
    'Led a team of 8 engineers while continuing to contribute as an individual contributor.',
    'Migrated a production Ruby on Rails application from Rails 3 to Rails 8 and Ruby 1.9.2 to Ruby 3.2.',
    'Designed and implemented Sidekiq-based background processing to improve concurrency and throughput.',
    'Worked on an EDI microservice processing data from SFTP, APIs and webhooks.',
    'Owned architecture decisions, solution design, estimation, code reviews, mentoring and P0 incident management.',
    'Built a React/Next.js SPA for the support team and integrated it with backend microservices.',
  ]

  const technologies = [
    'Ruby',
    'Ruby on Rails',
    'PostgreSQL',
    'Redis',
    'Sidekiq',
    'React',
    'Next.js',
    'GraphQL',
    'Docker',
    'AWS',
  ]

  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[220px_1fr]">
          {/* Section heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Where I've
              <span className="block text-slate-500">
                made an impact.
              </span>
            </h2>
          </div>

          {/* Experience content */}
          <div>
            <div className="relative border-l border-slate-200 pl-8">
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50" />

              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Senior Software Engineer
                    </h3>

                    <p className="mt-1 text-lg font-medium text-blue-500">
                      DispatchTrack
                    </p>
                  </div>

                  <span className="text-sm text-slate-500">
                    Senior Engineering · Team Leadership
                  </span>
                </div>

                {/* Metrics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-slate-900">
                      11+
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Years in software
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-slate-900">
                      8
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Engineers led
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-slate-900">
                      160+
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      B2B + B2C customers
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-10">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Engineering Highlights
                  </h4>

                  <ul className="mt-5 space-y-4">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 leading-7 text-slate-600"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-10 border-t border-slate-200 pt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Technologies
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience