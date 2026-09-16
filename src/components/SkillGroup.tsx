interface SkillGroupProps {
  title: string
  description: string
  skills: string[]
}

const SkillGroup = ({
  title,
  description,
  skills,
}: SkillGroupProps) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-500">
          {title.charAt(0)}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition group-hover:bg-blue-50 group-hover:text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillGroup