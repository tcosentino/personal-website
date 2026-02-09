export default function Projects() {
  const projects = [
    {
      title: 'AgentForge',
      emoji: '🔧',
      description: 'Development platform for autonomous AI agents. Framework + infrastructure for agents to build, test, and deploy software.',
      highlights: [
        'TypeScript monorepo with agent orchestration engine',
        'Portable open-source framework (dataobjects, standardized patterns)',
        'Full dev cycle: memory, tasks, runtime, deployment',
        'Human-in-the-loop approval workflows',
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'Agent Orchestration', 'Vite'],
      status: 'Active Development',
      links: [
        { label: 'GitHub', url: 'https://github.com/tcosentino/agent-dev-cycle' },
      ],
    },
    {
      title: 'Contuit (Acquired)',
      emoji: '🚀',
      description: 'No-code workflow automation platform. Co-founded 2017, acquired by Ntiva in 2024. Scaled to 300+ customers globally.',
      highlights: [
        'Built from zero to acquisition as founding engineer',
        'Distributed orchestration: 25K+ ops/min across 3 regions',
        '50+ enterprise integrations (ServiceNow, ConnectWise, etc.)',
        'AI-powered ticket classification drove acquisition',
      ],
      tech: ['Node.js', 'TypeScript', 'MongoDB', 'Kubernetes', 'Grafana', 'RabbitMQ'],
      status: 'Acquired 2024',
      links: [],
    },
  ]

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="heading text-center mb-4">Projects</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Building systems at scale - from agentic platforms to distributed automation
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.title} className="card">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{project.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-3xl font-bold text-secondary">{project.title}</h2>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active Development' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-lg text-gray-700 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h3 className="font-semibold text-secondary mb-2">Highlights:</h3>
                    <ul className="space-y-1 text-gray-600">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="card mt-12 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-3">More Projects</h3>
          <p className="text-gray-600">
            I've worked on many more projects over the years. Check out my{' '}
            <a 
              href="https://github.com/tcosentino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              GitHub
            </a>{' '}
            for a full list.
          </p>
        </div>
      </div>
    </div>
  )
}
