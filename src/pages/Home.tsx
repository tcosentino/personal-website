import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold text-secondary mb-6">
            Hey, I'm Troy 👋
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Founding Engineer · Agentic Systems · Distributed Systems · AI Integration
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            I build systems at scale. Co-founded Contuit (acquired by Ntiva), processing 25K+ ops/min.
            Currently building <strong>AgentForge</strong> - development platform for autonomous AI agents.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn btn-outline">
              See Resume
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section">
        <div className="container-custom">
          <h2 className="heading text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="subheading">Agentic Systems</h3>
              <p className="text-gray-600">
                Building autonomous AI agents with framework + infrastructure for real software development.
                Focus on multi-agent workflows, tool-using LLMs, and production-ready systems.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="subheading">Distributed Systems</h3>
              <p className="text-gray-600">
                8+ years scaling platforms to handle 25,000+ operations per minute.
                Kubernetes, microservices, API orchestration across 50+ integrations.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="subheading">Founding Engineer</h3>
              <p className="text-gray-600">
                Co-founded Contuit, acquired by Ntiva in 2024. Zero-to-acquisition experience building
                platforms, leading technical architecture, and scaling to 300+ customers globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="heading text-center mb-12">Featured Project</h2>
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔧</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-secondary mb-3">AgentForge</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Development platform for autonomous AI agents. Gives agents both <strong>framework</strong> (standardized
                  libraries) and <strong>infrastructure</strong> (orchestration, memory, testing, deployment) for building software.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">Agent Orchestration</span>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">Open Source</span>
                </div>
                <div className="flex gap-4">
                  <Link to="/projects" className="btn btn-primary">
                    Learn More
                  </Link>
                  <a 
                    href="https://github.com/tcosentino/agent-dev-cycle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts (placeholder) */}
      <section className="section">
        <div className="container-custom">
          <h2 className="heading text-center mb-12">Recent Writing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-secondary mb-2">Blog Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                I'll be writing about agentic systems, distributed architecture, and lessons learned building at scale.
              </p>
              <Link to="/blog" className="text-primary font-medium hover:underline">
                Check back soon →
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-secondary mb-2">What I'll Cover</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Building AgentForge: Architecture & Decisions</li>
                <li>• Multi-agent workflows in production</li>
                <li>• Scaling distributed systems</li>
                <li>• Lessons from founding → acquisition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-xl mb-8 text-gray-300">
            Interested in agentic systems, distributed architecture, or just want to chat?
          </p>
          <Link to="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
