const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Senior Software Engineer opportunities
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
              Senior Software Engineer · Full Stack
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            I build scalable
            <span className="block text-blue-400">
              software systems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I'm Subash, a software engineer with 11+ years of
            experience building production applications with Ruby on
            Rails, React, TypeScript and PostgreSQL.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            I work across backend engineering, system architecture,
            full-stack development and technical leadership.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Get In Touch
            </a>
            <a
              href="/Subash_R_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              View Resume ↗
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>Ruby on Rails</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AWS</span>
          </div>
          <div className="mt-8 flex gap-6 text-sm font-medium">
            <a
              href="https://github.com/subashravichandran"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/waytosubash/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero