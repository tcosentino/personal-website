import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Line {
  type: 'system' | 'tool_call' | 'tool_result' | 'assistant' | 'user'
  content: string
  delay: number
}

export default function Home() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState(false)

  const lines: Line[] = [
    { type: 'user', content: 'Tell me about Troy Cosentino', delay: 0 },
    { type: 'system', content: '', delay: 400 },
    { type: 'assistant', content: 'Troy is a founding engineer specializing in distributed systems and AI. He\'s based in San Francisco.', delay: 800 },
    { type: 'system', content: '', delay: 1200 },
    
    { type: 'assistant', content: 'Currently, he\'s a Senior Software Architect at Ntiva (2024-present), where he\'s processing 25,000+ operations per minute and leading AI automation initiatives.', delay: 1600 },
    { type: 'system', content: '', delay: 2000 },
    
    { type: 'assistant', content: 'Before that, Troy was Co-Founder of Contuit (2017-2024), which was acquired by Ntiva. He took the company from zero to acquisition, serving 300+ customers with 50+ integrations.', delay: 2400 },
    { type: 'system', content: '', delay: 2800 },
    
    { type: 'assistant', content: 'His core expertise includes:', delay: 3200 },
    { type: 'tool_result', content: '• Distributed Systems', delay: 3400 },
    { type: 'tool_result', content: '• AI Integration', delay: 3600 },
    { type: 'tool_result', content: '• Platform Engineering', delay: 3800 },
    { type: 'system', content: '', delay: 4000 },
    
    { type: 'assistant', content: 'His tech stack includes TypeScript, Python, Kubernetes, React, and LangChain.', delay: 4400 },
    { type: 'system', content: '', delay: 4800 },
    
    { type: 'assistant', content: 'You can find him at:', delay: 5200 },
    { type: 'tool_result', content: 'github.com/tcosentino', delay: 5400 },
    { type: 'tool_result', content: 'linkedin.com/in/troy-cosentino-b36694275', delay: 5600 },
    { type: 'tool_result', content: 'troycosentino@gmail.com', delay: 5800 },
    { type: 'system', content: '', delay: 6000 },
    
    { type: 'assistant', content: 'Want to learn more?', delay: 6400 },
    { type: 'tool_result', content: '/projects - Full project list', delay: 6600 },
    { type: 'tool_result', content: '/resume - Resume & experience', delay: 6800 },
    { type: 'tool_result', content: '/blog - Writing & posts', delay: 7000 },
    { type: 'tool_result', content: '/contact - Get in touch', delay: 7200 },
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
        return 'text-gray-400 text-sm'
      case 'user':
        return 'text-gray-900 text-lg font-medium mb-2'
      case 'tool_call':
        return 'text-blue-600 text-sm font-semibold'
      case 'tool_result':
        return 'text-gray-600 text-sm pl-6'
      case 'assistant':
        return 'text-gray-800 text-base leading-relaxed'
      default:
        return 'text-gray-700 text-sm'
    }
  }

  const getPrefix = (type: string) => {
    switch (type) {
      case 'system':
        return ''
      case 'user':
        return ''
      case 'tool_call':
        return ''
      case 'tool_result':
        return ''
      case 'assistant':
        return ''
      default:
        return ''
    }
  }

  const formatContent = (content: string) => {
    // Make internal and external links clickable
    const linkRegex = /(\/[a-z]+|github\.com\/[^\s]+|linkedin\.com\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
    const parts = content.split(linkRegex)
    
    return parts.map((part, i) => {
      if (part.match(linkRegex)) {
        // Internal routes
        if (part.startsWith('/')) {
          return (
            <Link 
              key={i} 
              to={part}
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              {part}
            </Link>
          )
        }
        // External URLs and email
        const url = part.includes('@') ? `mailto:${part}` : `https://${part}`
        return (
          <a 
            key={i} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            {part}
          </a>
        )
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Minimal header */}
      <div className="max-w-4xl mx-auto px-8 pt-8 pb-4">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors font-medium">~/troy</Link>
          <div className="flex gap-6">
            <Link to="/projects" className="hover:text-blue-600 transition-colors">projects</Link>
            <Link to="/resume" className="hover:text-blue-600 transition-colors">resume</Link>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">blog</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">contact</Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Photo + Name (auto-width) */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0">
            <img 
              src="/troy-headshot-original.jpg" 
              alt="Troy Cosentino"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-white shadow-2xl object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mt-6">
              Troy Cosentino
            </h1>
          </div>

          {/* Right: Agent output (fills remaining width) */}
          <div className="space-y-1 flex-1">
            {lines.slice(0, visibleLines).map((line, index) => (
              <div key={index} className={getLineStyle(line.type)}>
                {getPrefix(line.type)}
                {formatContent(line.content)}
              </div>
            ))}
            
            {/* Cursor blink */}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-purple-500 animate-pulse ml-1"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
