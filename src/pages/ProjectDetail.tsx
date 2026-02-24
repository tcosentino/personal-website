import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

const statusColor: Record<string, string> = {
  'Active Development': 'bg-green-100 text-green-700',
  'In Development': 'bg-amber-100 text-amber-700',
  'Acquired': 'bg-blue-100 text-blue-700',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <Link
          to="/projects"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
        >
          &larr; projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[project.status] ?? 'bg-gray-100 text-gray-600'}`}>
            {project.status}
          </span>
          {project.year && (
            <span className="text-sm text-gray-400">{project.year}</span>
          )}
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-gray-300 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.links.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Links</h2>
            <div className="flex gap-4">
              {project.links.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 underline font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <MinimalFooter />
    </div>
  )
}
