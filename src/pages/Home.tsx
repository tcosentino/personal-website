import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section - Neo-Brutalist Style */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary border-4 border-black transform rotate-3"></div>
                <div className="relative border-4 border-black shadow-brutal-xl overflow-hidden bg-white w-80 h-80">
                  <img 
                    src="/troy-headshot-original.jpg" 
                    alt="Troy Cosentino" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h1 className="text-6xl md:text-7xl font-black text-dark mb-6 leading-none">
                Hey, I'm <span className="text-primary">Troy</span> 👋
              </h1>
              <div className="space-y-4 mb-8">
                <p className="text-2xl font-bold text-dark">
                  Founding Engineer · Agentic Systems · AI
                </p>
                <p className="text-lg text-dark font-medium">
                  I build <span className="bg-accent border-2 border-black px-2 py-1 font-black">systems at scale</span>. 
                  Co-founded Contuit (acquired 2024), processing 25K+ ops/min.
                </p>
                <p className="text-lg text-dark font-medium">
                  Currently building <span className="bg-secondary text-white border-2 border-black px-2 py-1 font-black">AgentForge</span> — 
                  development platform for autonomous AI agents.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/resume" className="btn btn-outline">
                  Resume
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do - Bold Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-heading mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-primary transform rotate-slight">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-black mb-3">Agentic Systems</h3>
              <p className="text-white font-medium leading-relaxed">
                Building autonomous AI agents with framework + infrastructure for real software development.
                Multi-agent workflows, tool-using LLMs, production systems.
              </p>
            </div>
            
            <div className="card-secondary">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-black mb-3">Distributed Systems</h3>
              <p className="text-white font-medium leading-relaxed">
                8+ years scaling platforms to 25,000+ ops/min.
                Kubernetes, microservices, API orchestration across 50+ integrations.
              </p>
            </div>
            
            <div className="card-accent transform rotate-slight-reverse">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-black mb-3">Founding Engineer</h3>
              <p className="text-dark font-medium leading-relaxed">
                Co-founded Contuit (acquired 2024). Zero-to-acquisition building platforms,
                leading tech, scaling to 300+ customers globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - AgentForge */}
      <section className="section bg-cream">
        <div className="container-custom">
          <h2 className="section-heading mb-16">Featured Project</h2>
          <div className="card max-w-5xl mx-auto">
            <div className="flex items-start gap-8">
              <div className="text-8xl flex-shrink-0">🔧</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-black text-dark">AgentForge</h3>
                  <span className="tag tag-accent">BUILDING NOW</span>
                </div>
                <p className="text-xl text-dark font-medium mb-6 leading-relaxed">
                  Development platform for autonomous AI agents. Gives agents both{' '}
                  <span className="bg-primary text-white border-2 border-black px-2 py-1 font-black">framework</span>{' '}
                  (standardized libraries) and{' '}
                  <span className="bg-secondary text-white border-2 border-black px-2 py-1 font-black">infrastructure</span>{' '}
                  (orchestration, memory, testing, deployment) for building software.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="tag">TypeScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Agent Orchestration</span>
                  <span className="tag">Open Source</span>
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
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section bg-black text-white">
        <div className="container-custom">
          <h2 className="text-5xl font-black mb-12 text-white border-b-8 border-primary pb-2 inline-block">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-accent font-black text-lg mb-3 uppercase">Languages</h4>
              <p className="font-medium">TypeScript, JavaScript, Node.js, Python</p>
            </div>
            <div>
              <h4 className="text-accent font-black text-lg mb-3 uppercase">Frontend</h4>
              <p className="font-medium">React, Next.js, Tailwind, Vite</p>
            </div>
            <div>
              <h4 className="text-accent font-black text-lg mb-3 uppercase">Backend & Infra</h4>
              <p className="font-medium">Kubernetes, Docker, AWS, Terraform</p>
            </div>
            <div>
              <h4 className="text-accent font-black text-lg mb-3 uppercase">AI & Agents</h4>
              <p className="font-medium">LangChain, LLM Orchestration, Multi-agent workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Build Something
          </h2>
          <p className="text-2xl font-bold text-white mb-8">
            Interested in agentic systems, distributed architecture, or just want to chat?
          </p>
          <Link to="/contact" className="btn bg-white text-dark border-4 border-black shadow-brutal-xl hover:shadow-brutal-lg hover:-translate-y-2 font-black">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
