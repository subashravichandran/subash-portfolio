const OpenSource = () => {
  return (
    <section id="open-source" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Open Source
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Software I’ve published
        </h2>

        <div className="mt-10 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                mt_line_eraser
              </h3>

              <p className="mt-1 text-sm font-medium text-blue-600">
                Ruby Gem
              </p>
            </div>

            <a
              href="https://rubygems.org/gems/mt_line_eraser"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              View on RubyGems ↗
            </a>
          </div>

          <p className="mt-6 leading-7 text-slate-600">
            An open-source Ruby gem for removing empty lines from files.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Ruby', 'RubyGems', 'Open Source'].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenSource