import { Link } from 'react-router-dom'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

export default function Contact() {
  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h1>
        <p className="text-gray-500 mb-10">
          Interested in agentic systems, distributed architecture, or just want to chat?
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Contact</h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                <a
                  href="mailto:troycosentino@gmail.com"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  troycosentino@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/troy-cosentino-b36694275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  linkedin.com/in/troy-cosentino-b36694275
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">GitHub</h3>
                <a
                  href="https://github.com/tcosentino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  github.com/tcosentino
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Location</h3>
                <p className="text-sm text-gray-500">San Francisco Bay Area</p>
              </div>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Currently Exploring</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Agentic Systems Roles</h3>
                <p className="text-sm text-gray-500">Building autonomous AI agents, multi-agent workflows, tool-using LLMs, agent orchestration platforms.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Platform Engineering</h3>
                <p className="text-sm text-gray-500">Distributed systems at scale, API orchestration, Kubernetes, infrastructure tooling.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Founding Engineer</h3>
                <p className="text-sm text-gray-500">Early-stage companies where I can own technical architecture and help shape product direction.</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-400">
                  Open to full-time roles, consulting, or interesting projects. I respond to everything.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Prefer a resume?</h3>
          <p className="text-gray-500 text-sm mb-4">
            Download my full resume or check out my projects
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/resume" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View resume
            </Link>
            <Link to="/projects" className="text-sm text-gray-500 hover:text-gray-700 font-medium">
              See projects
            </Link>
          </div>
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
