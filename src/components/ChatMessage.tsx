import { ReactNode } from 'react'

interface ChatMessageProps {
  type: 'user' | 'assistant'
  children: ReactNode
}

export default function ChatMessage({ type, children }: ChatMessageProps) {
  const isUser = type === 'user'

  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-2`}>
      <div className={`
        flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold
        ${isUser
          ? 'bg-gray-700 text-white'
          : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
        }
      `}>
        {isUser ? 'You' : 'AI'}
      </div>
      <div
        className={`
          max-w-[80%] sm:max-w-[85%] px-4 py-2.5 text-base leading-relaxed
          ${isUser
            ? 'bg-[#007AFF] text-white rounded-2xl rounded-br-md'
            : 'bg-[#E9E9EB] text-gray-900 rounded-2xl rounded-bl-md'
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}
