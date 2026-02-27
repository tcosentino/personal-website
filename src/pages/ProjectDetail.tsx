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

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 flex-1 w-full">
        <Link
          to="/projects"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
        >
          &larr; back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{project.title}</h1>
            <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${statusColor[project.status] ?? 'bg-gray-100 text-gray-600'}`}>
              {project.status}
            </span>
            {project.year && (
              <span className="text-sm text-gray-400 ml-1">{project.year}</span>
            )}
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Call-to-action buttons */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-16">
            {project.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                {link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-gray-100">
                  <span className="text-blue-500 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="space-y-8">
              {project.screenshots.map((screenshot, i) => (
                <div key={i} className="bg-white/60 rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{screenshot.title}</h3>
                    <p className="text-gray-600 text-sm">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="mb-16 space-y-12">
            {project.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="prose prose-gray max-w-none">
                  {section.content.split('\n\n').map((paragraph, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture</h2>
            <div className="p-6 bg-white/60 rounded-xl border border-gray-100">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.architecture}</p>
            </div>
          </div>
        )}

        {/* Tech Stack (Detailed) */}
        {project.techDetails && project.techDetails.length > 0 ? (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.techDetails.map((category, i) => (
                <div key={i} className="p-6 bg-white/60 rounded-xl border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span key={item} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap */}
        {project.roadmap && project.roadmap.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Roadmap</h2>
            <div className="space-y-3">
              {project.roadmap.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-gray-100">
                  <span className="text-gray-400 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <MinimalFooter />
    </div>
  )
}
