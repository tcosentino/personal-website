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

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 flex-row mb-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        AI
      </div>
      <div className="bg-[#E9E9EB] rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}

function ThinkingStatus({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400 ml-9 mb-2">
      <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      {text}
    </div>
  )
}

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [thinkingText, setThinkingText] = useState<string | null>(null)
  const [showTyping, setShowTyping] = useState(false)

  const messages: Message[] = [
    {
      type: 'user',
      content: 'Tell me about Troy Cosentino',
      delay: 0,
    },
    {
      type: 'assistant',
      content: 'Troy is a full stack engineer based in San Francisco, California. He is currently a Senior Software Architect at Ntiva following the acquisition of [Contuit](/projects/contuit), a no-code workflow automation platform he co-founded for MSPs.',
      delay: 1800,
    },
    {
      type: 'assistant',
      content: 'Outside of work he enjoys cooking, traveling, following sports, and spending time with friends. Recent trips include Cyprus, Portugal, Slovenia, Spain, Italy, Kenya, Tanzania, and Seychelles.',
      delay: 3200,
    },
    {
      type: 'assistant',
      content: 'Lately, he has been experimenting with [AgentForge](/projects/agentforge) as a way to give vibe coders some structure. Other projects include [Bebo](/projects/bebo), an AI assistant for managing a low FODMAP diet, and [Roteiro](/projects/roteiro), an AI-powered trip planner.',
      delay: 4600,
    },
    {
      type: 'assistant',
      content: 'If you\'re in San Francisco, he\'d love to grab a beer! Otherwise, he\'s always happy to connect online. You can reach him at [troycosentino@gmail.com](mailto:troycosentino@gmail.com).',
      delay: 6000,
    },
  ]

  useEffect(() => {
    if (hasStarted) return
    setHasStarted(true)

    // Show user message immediately
    setVisibleCount(1)

    // After user message: show "thinking" status
    setTimeout(() => setThinkingText('Looking up details on Troy...'), 400)
    setTimeout(() => setThinkingText('Reading profile and projects...'), 900)

    // Clear thinking, show typing dots, then first response
    setTimeout(() => { setThinkingText(null); setShowTyping(true) }, 1400)
    setTimeout(() => { setShowTyping(false); setVisibleCount(2) }, 1800)

    // Subsequent messages: typing dots then reveal
    setTimeout(() => setShowTyping(true), 2400)
    setTimeout(() => { setShowTyping(false); setVisibleCount(3) }, 3200)

    setTimeout(() => setShowTyping(true), 3800)
    setTimeout(() => { setShowTyping(false); setVisibleCount(4) }, 4600)

    setTimeout(() => setShowTyping(true), 5200)
    setTimeout(() => { setShowTyping(false); setVisibleCount(5) }, 6000)
  }, [hasStarted])

  const formatContent = (content: string, isUser: boolean): ReactNode[] => {
    const linkClass = isUser
      ? 'text-white/90 hover:text-white underline font-medium'
      : 'text-blue-600 hover:text-blue-700 underline font-medium'

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

            {thinkingText && <ThinkingStatus text={thinkingText} />}
            {showTyping && <TypingIndicator />}
          </div>
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
