const Contact = () => {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let's build something useful.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I'm currently exploring Senior Software Engineer and
              Full Stack Engineer opportunities. If you're working on
              an interesting product or engineering problem, I'd be
              happy to connect.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:waytosubash@gmail.com"
                className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Email Me
              </a>

              <a
                href="https://github.com/subashravichandran"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/waytosubash/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                LinkedIn ↗
              </a>
            </div>
            <a
              href="mailto:waytosubash@gmail.com"
              className="mt-8 inline-block text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              waytosubash@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact