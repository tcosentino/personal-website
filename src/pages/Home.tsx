import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Line {
  type: 'system' | 'tool_call' | 'tool_result' | 'assistant'
  content: string
  delay: number
}

export default function Home() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState(false)

  const lines: Line[] = [
    { type: 'system', content: 'Initializing context for Troy Cosentino...', delay: 0 },
    { type: 'system', content: '', delay: 400 },
    
    { type: 'tool_call', content: 'load_profile_image()', delay: 600 },
    { type: 'tool_result', content: '[IMAGE_PLACEHOLDER]', delay: 800 },
    { type: 'system', content: '', delay: 1000 },
    
    { type: 'tool_call', content: 'get_introduction()', delay: 1200 },
    { type: 'tool_result', content: "Hey! I'm Troy, a founding engineer specializing in distributed systems and AI.", delay: 1400 },
    { type: 'tool_result', content: 'Based in San Francisco. Co-founded Contuit (acquired by Ntiva in 2024).', delay: 1600 },
    { type: 'tool_result', content: '8+ years building production systems at scale.', delay: 1800 },
    { type: 'system', content: '', delay: 2000 },
    
    { type: 'tool_call', content: 'get_current_role()', delay: 2200 },
    { type: 'tool_result', content: '→ Ntiva - Senior Software Architect (2024-present)', delay: 2400 },
    { type: 'tool_result', content: '  Sole technical owner of platform processing 25,000+ operations/min', delay: 2600 },
    { type: 'tool_result', content: '  Leading AI-powered automation and distributed systems architecture', delay: 2800 },
    { type: 'system', content: '', delay: 3000 },
    
    { type: 'tool_call', content: 'get_founding_experience()', delay: 3200 },
    { type: 'tool_result', content: '→ Contuit - Co-Founder & Principal Engineer (2017-2024)', delay: 3400 },
    { type: 'tool_result', content: '  Built workflow automation platform from zero to acquisition', delay: 3600 },
    { type: 'tool_result', content: '  Scaled to 300+ customers across 3 global regions', delay: 3800 },
    { type: 'tool_result', content: '  Architected distributed orchestration engine with 50+ API integrations', delay: 4000 },
    { type: 'system', content: '', delay: 4200 },
    
    { type: 'tool_call', content: 'get_technical_focus()', delay: 4400 },
    { type: 'tool_result', content: '→ Distributed Systems: Kubernetes, microservices, API orchestration', delay: 4600 },
    { type: 'tool_result', content: '→ AI Integration: LLM-powered systems, agent architectures', delay: 4800 },
    { type: 'tool_result', content: '→ Platform Engineering: Infrastructure, observability, reliability', delay: 5000 },
    { type: 'system', content: '', delay: 5200 },
    
    { type: 'tool_call', content: 'get_current_projects()', delay: 5400 },
    { type: 'tool_result', content: '→ AgentForge - Development platform for autonomous AI agents', delay: 5600 },
    { type: 'tool_result', content: '→ Open source work in agentic systems and tooling', delay: 5800 },
    { type: 'system', content: '', delay: 6000 },
    
    { type: 'tool_call', content: 'get_tech_stack()', delay: 6200 },
    { type: 'tool_result', content: 'TypeScript, JavaScript, Python, React, Node.js', delay: 6400 },
    { type: 'tool_result', content: 'Kubernetes, Docker, AWS, Terraform', delay: 6600 },
    { type: 'tool_result', content: 'LangChain, LLM orchestration, distributed systems', delay: 6800 },
    { type: 'system', content: '', delay: 7000 },
    
    { type: 'tool_call', content: 'get_contact_info()', delay: 7200 },
    { type: 'tool_result', content: '→ GitHub: github.com/tcosentino', delay: 7400 },
    { type: 'tool_result', content: '→ LinkedIn: linkedin.com/in/troy-cosentino-b36694275', delay: 7600 },
    { type: 'tool_result', content: '→ Email: troycosentino@gmail.com', delay: 7800 },
    { type: 'system', content: '', delay: 8000 },
    
    { type: 'assistant', content: '✓ Context loaded. Profile ready.', delay: 8200 },
  ]

  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true)
      
      lines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines(index + 1)
        }, lines[index].delay)
      })
    }
  }, [hasStarted])

  const getLineStyle = (type: string) => {
    switch (type) {
      case 'system':
        return 'text-gray-500 font-mono text-sm'
      case 'tool_call':
        return 'text-blue-400 font-mono text-sm font-medium'
      case 'tool_result':
        return 'text-gray-300 font-mono text-sm pl-4'
      case 'assistant':
        return 'text-green-400 font-mono text-sm font-medium'
      default:
        return 'text-gray-300 font-mono text-sm'
    }
  }

  const getPrefix = (type: string) => {
    switch (type) {
      case 'system':
        return '> system: '
      case 'tool_call':
        return '> tool_call: '
      case 'tool_result':
        return '  ↳ '
      case 'assistant':
        return '> assistant: '
      default:
        return ''
    }
  }

  const formatContent = (content: string) => {
    // Make URLs clickable
    const urlRegex = /(github\.com\/[^\s]+|linkedin\.com\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
    const parts = content.split(urlRegex)
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        const url = part.includes('@') ? `mailto:${part}` : `https://${part}`
        return (
          <a 
            key={i} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {part}
          </a>
        )
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-8 md:p-16 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Agent Output */}
        <div className="space-y-2">
          {lines.slice(0, visibleLines).map((line, index) => (
            <div key={index}>
              {line.content === '[IMAGE_PLACEHOLDER]' ? (
                <div className="pl-4 my-4">
                  <img 
                    src="/troy-headshot-original.jpg" 
                    alt="Troy Cosentino"
                    className="w-48 h-48 rounded-lg border-2 border-gray-700 shadow-lg object-cover"
                  />
                </div>
              ) : (
                <div className={getLineStyle(line.type)}>
                  {getPrefix(line.type)}
                  {formatContent(line.content)}
                </div>
              )}
            </div>
          ))}
          
          {/* Cursor blink */}
          {visibleLines < lines.length && (
            <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
          )}
        </div>

        {/* Navigation (appears after loading) */}
        {visibleLines >= lines.length && (
          <div className="mt-12 pt-8 border-t border-gray-800 space-y-4 animate-fade-in">
            <div className="text-gray-500 font-mono text-sm mb-4">
              {'>'} Navigation:
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="text-blue-400 hover:text-blue-300 font-mono text-sm underline"
              >
                → Full projects list
              </Link>
              <Link 
                to="/resume" 
                className="text-blue-400 hover:text-blue-300 font-mono text-sm underline"
              >
                → Resume
              </Link>
              <Link 
                to="/blog" 
                className="text-blue-400 hover:text-blue-300 font-mono text-sm underline"
              >
                → Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-blue-400 hover:text-blue-300 font-mono text-sm underline"
              >
                → Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
