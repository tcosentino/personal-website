import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Line {
  type: 'tool_call' | 'tool_result' | 'assistant'
  content: string
  delay: number
}

export default function Home() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState(false)

  const lines: Line[] = [
    { type: 'tool_call', content: 'get_current_role()', delay: 0 },
    { type: 'tool_result', content: 'Senior Software Architect @ Ntiva (2024-present)', delay: 200 },
    { type: 'tool_result', content: 'Co-Founder @ Contuit (2017-2024, acquired by Ntiva)', delay: 400 },
    
    { type: 'tool_call', content: 'get_expertise()', delay: 800 },
    { type: 'tool_result', content: 'Distributed Systems • AI Integration • Platform Engineering', delay: 1000 },
    
    { type: 'tool_call', content: 'get_tech_stack()', delay: 1400 },
    { type: 'tool_result', content: 'TypeScript • Python • Kubernetes • React • LangChain', delay: 1600 },
    
    { type: 'assistant', content: '→ github.com/tcosentino | linkedin.com/in/troy-cosentino-b36694275 | troycosentino@gmail.com', delay: 2200 },
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
      case 'tool_call':
        return 'text-blue-400 font-mono text-sm'
      case 'tool_result':
        return 'text-gray-400 font-mono text-sm pl-4'
      case 'assistant':
        return 'text-green-400 font-mono text-sm'
      default:
        return 'text-gray-400 font-mono text-sm'
    }
  }

  const getPrefix = (type: string) => {
    switch (type) {
      case 'tool_call':
        return '> '
      case 'tool_result':
        return '  '
      case 'assistant':
        return '✓ '
      default:
        return ''
    }
  }

  const formatContent = (content: string) => {
    // Make URLs clickable
    const urlRegex = /(github\.com\/[^\s|]+|linkedin\.com\/[^\s|]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
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
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      {/* Header - Always visible */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-mono font-bold text-gray-100 hover:text-blue-400 transition-colors">
            Troy Cosentino
          </Link>
          <div className="flex gap-6 font-mono text-sm">
            <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">projects</Link>
            <Link to="/resume" className="text-gray-400 hover:text-blue-400 transition-colors">resume</Link>
            <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">blog</Link>
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">contact</Link>
          </div>
        </div>
      </div>

      {/* Hero - Photo + Intro */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex items-start gap-12 mb-12">
          <img 
            src="/troy-headshot-original.jpg" 
            alt="Troy Cosentino"
            className="w-48 h-48 rounded-lg border-2 border-gray-700 shadow-lg object-cover flex-shrink-0"
          />
          <div className="pt-4">
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              Hey, I'm Troy
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founding engineer specializing in distributed systems and AI.
              <br />
              Based in San Francisco.
            </p>
          </div>
        </div>

        {/* Agent Output */}
        <div className="bg-[#161b22] rounded-lg p-6 border border-gray-800">
          <div className="space-y-1">
            {lines.slice(0, visibleLines).map((line, index) => (
              <div key={index} className={getLineStyle(line.type)}>
                {getPrefix(line.type)}
                {formatContent(line.content)}
              </div>
            ))}
            
            {/* Cursor blink */}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
