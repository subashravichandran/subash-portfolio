import SkillGroup from './SkillGroup'

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Tools I use to
            <span className="block text-slate-500">
              build things.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            My experience spans backend engineering, frontend
            development, databases, infrastructure and system
            architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <SkillGroup
            title="Backend"
            description="Building APIs, services and background processing systems."
            skills={[
              'Ruby',
              'Ruby on Rails',
              'Node.js',
              'REST APIs',
              'GraphQL',
              'Sidekiq',
            ]}
          />

          <SkillGroup
            title="Frontend"
            description="Creating practical, maintainable interfaces and SPAs."
            skills={[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'HTML',
              'CSS',
            ]}
          />

          <SkillGroup
            title="Data"
            description="Designing schemas and working with data at scale."
            skills={[
              'PostgreSQL',
              'MySQL',
              'Redis',
              'Database Design',
              'Query Optimization',
            ]}
          />

          <SkillGroup
            title="Infrastructure"
            description="Deploying and operating applications and services."
            skills={[
              'Docker',
              'AWS',
              'Cloudflare',
              'Linux',
              'CI/CD',
              'Git',
            ]}
          />

          <SkillGroup
            title="Architecture"
            description="Designing systems that are scalable and maintainable."
            skills={[
              'Microservices',
              'System Design',
              'API Design',
              'Background Processing',
              'Event-Driven Systems',
            ]}
          />

          <SkillGroup
            title="Leadership"
            description="Helping teams deliver through technical ownership."
            skills={[
              'Code Review',
              'Mentoring',
              'Technical Leadership',
              'Incident Management',
              'Solution Design',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills