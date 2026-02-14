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
    { type: 'system', content: 'Loading profile...', delay: 0 },
    { type: 'system', content: '', delay: 200 },
    
    { type: 'tool_call', content: 'get_intro()', delay: 400 },
    { type: 'tool_result', content: 'Founding engineer specializing in distributed systems and AI', delay: 600 },
    { type: 'tool_result', content: 'Based in San Francisco', delay: 800 },
    { type: 'system', content: '', delay: 1000 },
    
    { type: 'tool_call', content: 'get_experience()', delay: 1200 },
    { type: 'tool_result', content: '→ Ntiva - Senior Software Architect (2024-present)', delay: 1400 },
    { type: 'tool_result', content: '  Processing 25,000+ operations/min, leading AI automation', delay: 1600 },
    { type: 'tool_result', content: '→ Contuit - Co-Founder (2017-2024, acquired by Ntiva)', delay: 1800 },
    { type: 'tool_result', content: '  Zero-to-acquisition, 300+ customers, 50+ integrations', delay: 2000 },
    { type: 'system', content: '', delay: 2200 },
    
    { type: 'tool_call', content: 'get_expertise()', delay: 2400 },
    { type: 'tool_result', content: 'Distributed Systems • AI Integration • Platform Engineering', delay: 2600 },
    { type: 'system', content: '', delay: 2800 },
    
    { type: 'tool_call', content: 'get_stack()', delay: 3000 },
    { type: 'tool_result', content: 'TypeScript • Python • Kubernetes • React • LangChain', delay: 3200 },
    { type: 'system', content: '', delay: 3400 },
    
    { type: 'tool_call', content: 'get_contact()', delay: 3600 },
    { type: 'tool_result', content: '→ github.com/tcosentino', delay: 3800 },
    { type: 'tool_result', content: '→ linkedin.com/in/troy-cosentino-b36694275', delay: 4000 },
    { type: 'tool_result', content: '→ troycosentino@gmail.com', delay: 4200 },
    { type: 'system', content: '', delay: 4400 },
    
    { type: 'assistant', content: '✓ Profile ready', delay: 4600 },
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
        return 'text-gray-600 font-mono text-sm'
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
        return '# '
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
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      {/* Minimal header */}
      <div className="max-w-4xl mx-auto px-8 pt-8 pb-4">
        <div className="flex justify-between items-center text-sm font-mono text-gray-500">
          <Link to="/" className="hover:text-blue-400 transition-colors">~/troy</Link>
          <div className="flex gap-6">
            <Link to="/projects" className="hover:text-blue-400 transition-colors">projects</Link>
            <Link to="/resume" className="hover:text-blue-400 transition-colors">resume</Link>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">blog</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">contact</Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Photo + Name (always visible, not animated) */}
        <div className="flex items-start gap-8 mb-12">
          <img 
            src="/troy-headshot-original.jpg" 
            alt="Troy Cosentino"
            className="w-40 h-40 rounded-lg border-2 border-gray-700 shadow-lg object-cover flex-shrink-0"
          />
          <div className="pt-2">
            <h1 className="text-4xl font-bold text-gray-100 mb-2">
              Troy Cosentino
            </h1>
          </div>
        </div>

        {/* Agent output builds below */}
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

        {/* Nav links (appear after loading) */}
        {visibleLines >= lines.length && (
          <div className="mt-12 pt-8 border-t border-gray-800 animate-fade-in">
            <div className="flex gap-6 font-mono text-sm">
              <Link to="/projects" className="text-blue-400 hover:text-blue-300">
                → Full projects list
              </Link>
              <Link to="/resume" className="text-blue-400 hover:text-blue-300">
                → Resume
              </Link>
              <Link to="/blog" className="text-blue-400 hover:text-blue-300">
                → Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
