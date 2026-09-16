const About = () => {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Engineer. Builder.
              <span className="block text-slate-500">
                Problem solver.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              I have 11+ years of experience building and maintaining
              production software, with a strong focus on Ruby on Rails
              and backend engineering.
            </p>

            <p>
              I've worked across backend, frontend, databases,
              distributed systems and infrastructure while also taking
              ownership of architecture, code reviews, mentoring and
              production incidents.
            </p>

            <p>
              I enjoy understanding complex systems, simplifying them,
              and building solutions that are reliable, maintainable
              and easy for teams to evolve.
            </p>

            <div className="grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  11+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Years experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  8
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Engineers led
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  160+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Customers supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About