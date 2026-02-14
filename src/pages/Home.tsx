import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section - Digital Nomad Urban */}
      <section className="section bg-pattern relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="photo-container w-80 h-80 md:w-96 md:h-96">
                <img 
                  src="/troy-headshot-original.jpg" 
                  alt="Troy Cosentino" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h1 className="heading">
                Hey, I'm Troy
              </h1>
              <p className="text-2xl font-medium text-dark mb-6 leading-relaxed">
                Founding Engineer building autonomous AI agents.
              </p>
              <p className="text-lg text-dark/70 font-medium mb-4 leading-relaxed">
                Based in <span className="text-primary font-bold">San Francisco</span>. 
                Co-founded Contuit (acquired 2024). 
                8+ years building distributed systems at scale.
              </p>
              <p className="text-lg text-dark/70 font-medium mb-8 leading-relaxed">
                Currently: <span className="text-secondary font-bold">AgentForge</span> — 
                development platform for autonomous AI agents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/resume" className="btn btn-outline">
                  Resume
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-heading">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-dark">Agentic Systems</h3>
              <p className="text-dark/70 font-medium leading-relaxed">
                Building autonomous AI agents with production-ready infrastructure. 
                Multi-agent workflows, tool-using LLMs, orchestration at scale.
              </p>
            </div>
            
            <div className="card group">
              <div className="w-16 h-16 mb-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-dark">Distributed Systems</h3>
              <p className="text-dark/70 font-medium leading-relaxed">
                8+ years scaling platforms to 25,000+ ops/min. 
                Kubernetes, microservices, API orchestration across 50+ integrations.
              </p>
            </div>
            
            <div className="card group">
              <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-dark">Founding Engineer</h3>
              <p className="text-dark/70 font-medium leading-relaxed">
                Co-founded Contuit (acquired 2024). Zero-to-acquisition building platforms, 
                leading tech architecture, scaling to 300+ customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - AgentForge */}
      <section className="section bg-gradient-to-br from-cream via-primary/5 to-cream bg-pattern">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="tag tag-primary font-bold">Featured Project</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-dark mb-6">
              AgentForge
            </h2>
            <p className="text-2xl text-dark/80 font-medium mb-8 leading-relaxed">
              Development platform for autonomous AI agents. Framework + infrastructure 
              for building, testing, and deploying production-ready agent systems.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-xl font-display font-bold text-dark mb-4">Core Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="feature-box">
                  <p className="font-bold text-dark mb-1">Agent Framework</p>
                  <p className="text-sm text-dark/70">Standardized libraries for agent development</p>
                </div>
                <div className="feature-box">
                  <p className="font-bold text-dark mb-1">Orchestration</p>
                  <p className="text-sm text-dark/70">Multi-agent workflow coordination</p>
                </div>
                <div className="feature-box">
                  <p className="font-bold text-dark mb-1">Memory Systems</p>
                  <p className="text-sm text-dark/70">Context management & state persistence</p>
                </div>
                <div className="feature-box">
                  <p className="font-bold text-dark mb-1">Testing & Eval</p>
                  <p className="text-sm text-dark/70">Automated validation pipelines</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="tag">TypeScript</span>
              <span className="tag">React</span>
              <span className="tag">Agent Orchestration</span>
              <span className="tag">LangChain</span>
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
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h4 className="font-display font-bold text-lg text-secondary mb-3">Languages</h4>
              <p className="text-dark/70 font-medium">TypeScript, JavaScript, Node.js, Python</p>
            </div>
            <div className="card">
              <h4 className="font-display font-bold text-lg text-secondary mb-3">Frontend</h4>
              <p className="text-dark/70 font-medium">React, Next.js, Tailwind, Vite</p>
            </div>
            <div className="card">
              <h4 className="font-display font-bold text-lg text-secondary mb-3">Infrastructure</h4>
              <p className="text-dark/70 font-medium">Kubernetes, Docker, AWS, Terraform</p>
            </div>
            <div className="card">
              <h4 className="font-display font-bold text-lg text-secondary mb-3">AI & Agents</h4>
              <p className="text-dark/70 font-medium">LangChain, LLM Orchestration, Multi-agent</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
            Let's Build Something
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-8 opacity-90 max-w-2xl mx-auto">
            Interested in agentic systems, distributed architecture, or just want to chat?
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-cream font-bold text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
