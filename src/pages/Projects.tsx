import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

const statusColor: Record<string, string> = {
  'Active Development': 'bg-green-100 text-green-700',
  'In Development': 'bg-amber-100 text-amber-700',
  'Acquired': 'bg-blue-100 text-blue-700',
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-500 mb-10">Things I've built and am building.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${statusColor[project.status] ?? 'bg-gray-100 text-gray-600'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
