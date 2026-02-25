export interface Project {
  slug: string
  title: string
  status: 'Active Development' | 'In Development' | 'Acquired'
  shortDescription: string
  description: string
  highlights: string[]
  tech: string[]
  links: { label: string; url: string }[]
  year?: string
}

export const projects: Project[] = [
  {
    slug: 'contuit',
    title: 'Contuit',
    status: 'Acquired',
    year: '2017 - Present',
    shortDescription: 'No-code workflow automation platform for MSPs, acquired by Ntiva in 2024.',
    description: 'Contuit is a no-code workflow automation platform purpose-built for Managed Service Providers. Co-founded in 2017, the platform has grown to serve 300+ customers with 50+ integrations and was acquired by Ntiva in 2024. Contuit enables MSPs to automate complex multi-step workflows across their tool stack without writing code.',
    highlights: [
      'Grown from zero to 300+ customers across 3 global regions',
      'Distributed orchestration engine processing 25,000+ operations per minute',
      '50+ integrations with MSP tools (ConnectWise, Datto, IT Glue, etc.)',
      'AI-powered ticket classification and routing',
      'Multi-tenant SaaS architecture on Kubernetes',
    ],
    tech: ['TypeScript', 'Node.js', 'React', 'Kubernetes', 'MongoDB', 'RabbitMQ', 'Docker', 'Azure'],
    links: [],
  },
  {
    slug: 'agentforge',
    title: 'AgentForge',
    status: 'Active Development',
    shortDescription: 'A development platform that gives AI agent builders structure and guardrails.',
    description: 'AgentForge is a structured development platform for building real applications. It gives vibe coders a framework with guardrails - agent orchestration, human-in-the-loop workflows, and a development cycle that keeps projects on track. Use a suite of agents to build, manage, deploy and maintain your project from start to finish.',
    highlights: [
      'Suite of agents for full project lifecycle',
      'Human-in-the-loop workflow support',
      'Agent orchestration and lifecycle management',
      'Built for developers who want structure without sacrificing speed',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Vite', 'Agent Orchestration'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tcosentino/agent-dev-cycle' },
    ],
  },
  {
    slug: 'bebo',
    title: 'Bebo',
    status: 'In Development',
    shortDescription: 'An AI assistant to help manage a low FODMAP diet.',
    description: 'Bebo is an AI-powered assistant designed to help people following a low FODMAP diet. It helps with meal planning, ingredient checking, recipe suggestions, and tracking symptoms -- making the elimination and reintroduction phases more manageable.',
    highlights: [
      'AI-powered ingredient and food analysis',
      'Meal planning for low FODMAP phases',
      'Symptom and food diary tracking',
      'Recipe suggestions based on dietary restrictions',
    ],
    tech: ['TypeScript', 'React', 'Custom Agents'],
    links: [],
  },
  {
    slug: 'roteiro',
    title: 'Roteiro',
    status: 'In Development',
    shortDescription: 'An AI-powered trip planner for building travel itineraries.',
    description: 'Roteiro is a travel itinerary planner that uses AI to help you plan trips. From researching destinations to building day-by-day itineraries, Roteiro streamlines the trip planning process so you can spend less time organizing and more time exploring.',
    highlights: [
      'AI-assisted itinerary generation',
      'Day-by-day trip planning and organization',
      'Destination research and recommendations',
      'Collaborative trip planning',
    ],
    tech: ['TypeScript', 'React', 'Custom Agents'],
    links: [],
  },
]
