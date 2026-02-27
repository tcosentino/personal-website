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
  // Enhanced fields for richer project pages
  sections?: {
    title: string
    content: string
  }[]
  screenshots?: {
    title: string
    description: string
    placeholder: string // Color/gradient for placeholder
  }[]
  features?: {
    title: string
    description: string
    icon?: string
  }[]
  architecture?: string
  roadmap?: string[]
  techDetails?: {
    category: string
    items: string[]
  }[]
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
    description: 'AgentForge is a spec-driven development platform for building real applications with AI agents. It provides structure and guardrails for "vibe coders" — developers who want to move fast with AI assistance while maintaining quality and coherence. The platform orchestrates a suite of specialized agents that handle the full project lifecycle from specification to deployment.',
    highlights: [
      'Spec-driven development with human-in-the-loop workflows',
      'Suite of specialized agents: Architect, Developer, Tester, DevOps',
      'Built-in guardrails prevent scope creep and hallucinated features',
      'Kanban board for tracking agent tasks and project progress',
      'One-command deployment to AWS with infrastructure-as-code',
      'Portfolio piece showcasing expertise in agentic systems',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Vite', 'Claude API', 'Agent Orchestration', 'OpenSpec'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tcosentino/agent-dev-cycle' },
    ],
    sections: [
      {
        title: 'The Problem',
        content: 'Building with AI agents is powerful but chaotic. Developers can rapidly prototype features by asking an AI to "just build it," but projects quickly spiral into scope creep, hallucinated features, and inconsistent architecture. Most AI coding tools are single-agent systems that lack memory, context, and coordination — leading to technical debt and unmaintainable codebases.',
      },
      {
        title: 'How It Works',
        content: 'AgentForge introduces **spec-driven development** as the foundation. Every project starts with an OpenSpec — a human-readable specification that defines what the app does, what it doesn\'t do, and the technical approach. This spec becomes the source of truth that keeps all agents aligned.\n\nThe platform orchestrates a **suite of specialized agents**:\n\n• **Architect Agent**: Breaks down the spec into actionable tasks and creates the project architecture\n• **Developer Agent**: Implements features according to the spec and task requirements  \n• **Tester Agent**: Validates implementations against the spec and writes test cases\n• **DevOps Agent**: Handles deployment, infrastructure-as-code, and production monitoring\n\nEach agent has a defined role and operates within guardrails. The Architect won\'t approve tasks that violate the spec. The Developer won\'t implement features that aren\'t specified. This creates a **human-in-the-loop workflow** where the developer reviews and approves agent decisions at key checkpoints.',
      },
      {
        title: 'Key Differentiators',
        content: '**Guardrails for vibe coders**: Unlike tools that let AI run wild, AgentForge enforces discipline. The spec acts as a contract that prevents feature hallucination and scope creep.\n\n**Agent orchestration**: Instead of a single agent trying to do everything, specialized agents collaborate with defined handoffs. This mirrors how real engineering teams work.\n\n**Human-in-the-loop**: Developers retain control at critical decision points. Agents propose, humans approve. This balance keeps velocity high while maintaining quality.\n\n**Full lifecycle coverage**: From spec to deployment, AgentForge handles the entire development cycle. Most AI coding tools stop at code generation.',
      },
      {
        title: 'Architecture',
        content: 'AgentForge is built as a monorepo with three main components:\n\n**Frontend (React + Vite)**: Kanban board UI for task management, spec editor, deployment dashboard, and agent activity logs.\n\n**Backend (Node.js)**: Agent orchestration engine, task queue management, spec validation, and deployment automation.\n\n**Agent Framework**: Reusable agent primitives with role-based prompting, memory management, and tool integration (file system, git, AWS CLI, testing frameworks).\n\nAgents communicate through a structured task queue. Each task includes context (relevant spec sections, prior decisions, dependencies) to ensure agents have the information they need. State is persisted to SQLite for simplicity during development, with plans to migrate to PostgreSQL for production.',
      },
    ],
    features: [
      {
        title: 'Spec-Driven Development',
        description: 'OpenSpec format keeps all agents aligned on what to build and what NOT to build. The spec is the source of truth that prevents scope creep.',
        icon: '📋',
      },
      {
        title: 'Agent Orchestration',
        description: 'Specialized agents (Architect, Developer, Tester, DevOps) collaborate with defined handoffs and responsibilities.',
        icon: '🤖',
      },
      {
        title: 'Human-in-the-Loop',
        description: 'Review and approve agent decisions at key checkpoints. Agents propose, humans decide. You stay in control.',
        icon: '✋',
      },
      {
        title: 'Task Kanban Board',
        description: 'Visual board shows what agents are working on, what\'s queued, and what\'s completed. Track project progress at a glance.',
        icon: '📊',
      },
      {
        title: 'One-Command Deploy',
        description: 'DevOps agent handles AWS infrastructure-as-code, deployment pipelines, and production monitoring. Ship with confidence.',
        icon: '🚀',
      },
      {
        title: 'Built-in Guardrails',
        description: 'Agents won\'t implement features that aren\'t in the spec. No more hallucinated functionality or surprise technical debt.',
        icon: '🛡️',
      },
    ],
    screenshots: [
      {
        title: 'Task Management Board',
        description: 'Kanban view showing agent tasks across the development lifecycle: Backlog → In Progress → Review → Done',
        placeholder: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      {
        title: 'Deployment Dashboard',
        description: 'One-click deployment to AWS with real-time logs, infrastructure status, and CloudFront invalidation tracking',
        placeholder: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      },
      {
        title: 'OpenSpec Workflow',
        description: 'Spec editor with validation, agent task generation, and real-time sync across all agents',
        placeholder: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
    ],
    techDetails: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Router'],
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'TypeScript', 'SQLite', 'Agent Orchestration Engine'],
      },
      {
        category: 'AI/Agents',
        items: ['Claude API (Anthropic)', 'Structured Prompts', 'Tool Integration', 'Memory Management'],
      },
      {
        category: 'DevOps',
        items: ['AWS CLI', 'S3', 'CloudFront', 'Infrastructure as Code', 'GitHub Actions'],
      },
    ],
    roadmap: [
      'Multi-project support (currently single project)',
      'Agent memory persistence across sessions',
      'VS Code extension for in-editor spec editing',
      'Community agent marketplace (share custom agents)',
      'PostgreSQL migration for production scalability',
      'Real-time collaboration (multiple developers on one project)',
    ],
    architecture: 'AgentForge uses a **coordinator-worker architecture**. The Coordinator manages the task queue and routes work to specialized agents. Each agent has access to tools (file system, git, AWS CLI) and maintains context through a memory layer. Human checkpoints are inserted at critical decision points (spec approval, deployment confirmation) to ensure the developer retains control.',
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
