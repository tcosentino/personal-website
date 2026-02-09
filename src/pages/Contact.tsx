export default function Contact() {
  return (
    <div className="section">
      <div className="container-custom max-w-4xl">
        <h1 className="heading text-center mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Interested in agentic systems, distributed architecture, or just want to chat?
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="card">
            <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <span>📧</span> Email
                </h3>
                <a 
                  href="mailto:troy@troycosentino.com"
                  className="text-primary hover:underline text-lg"
                >
                  troy@troycosentino.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <span>💼</span> LinkedIn
                </h3>
                <a 
                  href="https://linkedin.com/in/troycosentino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-lg"
                >
                  linkedin.com/in/troycosentino
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <span>🐙</span> GitHub
                </h3>
                <a 
                  href="https://github.com/tcosentino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-lg"
                >
                  github.com/tcosentino
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <span>📍</span> Location
                </h3>
                <p className="text-gray-700 text-lg">San Francisco Bay Area</p>
              </div>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="card">
            <h2 className="text-2xl font-bold text-secondary mb-6">Currently Exploring</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-secondary mb-2">🤖 Agentic Systems Roles</h3>
                <p>Building autonomous AI agents, multi-agent workflows, tool-using LLMs, agent orchestration platforms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-2">🏗️ Platform Engineering</h3>
                <p>Distributed systems at scale, API orchestration, Kubernetes, infrastructure tooling.</p>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-2">🚀 Founding Engineer</h3>
                <p>Early-stage companies where I can own technical architecture and help shape product direction.</p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-gray-600">
                  Open to full-time roles, consulting, or interesting projects in the agentic systems space.
                  Feel free to reach out - I respond to everything.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="card mt-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-secondary mb-3">Prefer a Resume?</h3>
          <p className="text-gray-600 mb-6">
            Download my full resume or check out my projects
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/resume" className="btn btn-primary">
              View Resume
            </a>
            <a href="/projects" className="btn btn-outline">
              See Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
