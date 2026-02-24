import { useState, useEffect, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ChatMessage from '../components/ChatMessage'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

interface Message {
  type: 'user' | 'assistant'
  content: string
  delay: number
}

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const messages: Message[] = [
    {
      type: 'user',
      content: 'Tell me about Troy Cosentino',
      delay: 0,
    },
    {
      type: 'assistant',
      content: 'Troy is a full stack engineer based in San Francisco, California. He is currently a Senior Software Architect at Ntiva following the acquisition of [Contuit](/projects/contuit), a no-code workflow automation platform he co-founded for MSPs.',
      delay: 600,
    },
    {
      type: 'assistant',
      content: 'Outside of work he enjoys cooking, traveling, following sports, and spending time with friends. Recent trips include Cyprus, Portugal, Slovenia, Spain, Italy, Kenya, Tanzania, and Seychelles.',
      delay: 1800,
    },
    {
      type: 'assistant',
      content: 'Lately, he has been experimenting with [AgentForge](/projects/agentforge) as a way to give vibe coders some structure. Other projects include [Bebo](/projects/bebo), an AI assistant for managing a low FODMAP diet, and [Roteiro](/projects/roteiro), an AI-powered trip planner.',
      delay: 3000,
    },
    {
      type: 'assistant',
      content: 'If you\'re in San Francisco, he\'d love to grab a beer! Otherwise, he\'s always happy to connect online. You can reach him at [troycosentino@gmail.com](mailto:troycosentino@gmail.com).',
      delay: 4200,
    },
  ]

  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true)
      messages.forEach((msg, index) => {
        setTimeout(() => {
          setVisibleCount(index + 1)
        }, msg.delay)
      })
    }
  }, [hasStarted])

  const formatContent = (content: string, isUser: boolean): ReactNode[] => {
    const linkClass = isUser
      ? 'text-white/90 hover:text-white underline font-medium'
      : 'text-blue-600 hover:text-blue-700 underline font-medium'

    // Parse markdown-style links [text](url) and bare URLs/emails
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: ReactNode[] = []
    let lastIndex = 0
    let key = 0

    for (const match of content.matchAll(mdLinkRegex)) {
      const before = content.slice(lastIndex, match.index)
      if (before) parts.push(<span key={key++}>{before}</span>)

      const [, text, url] = match
      if (url.startsWith('/')) {
        parts.push(
          <Link key={key++} to={url} className={linkClass}>{text}</Link>
        )
      } else {
        parts.push(
          <a key={key++} href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>{text}</a>
        )
      }
      lastIndex = match.index! + match[0].length
    }

    const remaining = content.slice(lastIndex)
    if (remaining) parts.push(<span key={key++}>{remaining}</span>)

    return parts
  }

  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="w-full max-w-6xl mx-auto px-8 py-12 flex-1">
        <div className="flex flex-col md:grid md:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Left: Photo + Name */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/troy-headshot-original.jpg"
              alt="Troy Cosentino"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-white shadow-2xl object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mt-6">
              Troy Cosentino
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Founding Engineer | Distributed Systems, AI Integration
            </p>
          </div>

          {/* Right: Chat bubbles */}
          <div className="space-y-1.5 flex-1 min-w-0 md:min-h-[300px]">
            {messages.slice(0, visibleCount).map((msg, index) => (
              <ChatMessage key={index} type={msg.type}>
                {formatContent(msg.content, msg.type === 'user')}
              </ChatMessage>
            ))}

            {visibleCount < messages.length && (
              <div className="flex justify-start">
                <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse ml-1" />
              </div>
            )}
          </div>
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
