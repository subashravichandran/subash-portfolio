interface EngineeringPrinciple {
  title: string
  description: string
  number: string
}

const principles: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'Think in systems',
    description:
      'I look beyond individual features and consider APIs, databases, background jobs, failure modes and how components interact as a whole.',
  },
  {
    number: '02',
    title: 'Own the outcome',
    description:
      'I take ownership from problem definition and solution design through implementation, release and production support.',
  },
  {
    number: '03',
    title: 'Build for reliability',
    description:
      'Production systems need to handle failures gracefully. I care about observability, performance, concurrency and predictable behavior.',
  },
  {
    number: '04',
    title: 'Help teams grow',
    description:
      'I enjoy code reviews, mentoring and technical discussions that help engineers make better decisions and build stronger systems together.',
  },
]

const Engineering = () => {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Engineering Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How I approach engineering.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Good engineering is more than writing code. It's about
            understanding the problem, making thoughtful trade-offs
            and building systems that teams can depend on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-500">
                {principle.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Engineering