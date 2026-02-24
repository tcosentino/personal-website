import { useState, useEffect } from 'react';

interface Message {
  type: 'tool_call' | 'tool_result' | 'assistant' | 'system';
  content: string;
  delay: number;
  toolName?: string;
}

const messages: Message[] = [
  { type: 'system', content: 'Initializing profile builder...', delay: 0 },
  { type: 'tool_call', content: 'get_professional_info()', delay: 300, toolName: 'get_professional_info' },
  { type: 'tool_result', content: 'Troy Cosentino\n\nEngineering leader with 7 years building distributed systems at scale. Currently architecting autonomous agent platforms and exploring the intersection of infrastructure and AI.', delay: 500 },
  { type: 'tool_call', content: 'get_experience("Ntiva")', delay: 300, toolName: 'get_experience' },
  { type: 'tool_result', content: 'VP of Engineering at Ntiva (2023-2024)\n\nLed engineering teams building cloud infrastructure and automation. Scaled operations and drove technical strategy.', delay: 500 },
  { type: 'tool_call', content: 'get_experience("Contuit")', delay: 300, toolName: 'get_experience' },
  { type: 'tool_result', content: 'Founding Engineer at Contuit (2018-2023)\n\nBuilt distributed platform handling 25,000+ ops/min. Architected 300+ third-party integrations. Owned infrastructure, search systems, and core platform services.', delay: 500 },
  { type: 'tool_call', content: 'get_technical_focus()', delay: 300, toolName: 'get_technical_focus' },
  { type: 'tool_result', content: 'Deep expertise in:\n\n• Distributed systems & high-throughput architecture\n• Agentic systems & LLM orchestration\n• Infrastructure & developer tooling\n• Product engineering & technical leadership', delay: 500 },
  { type: 'tool_call', content: 'get_projects()', delay: 300, toolName: 'get_projects' },
  { type: 'tool_result', content: 'AgentForge: Development platform for autonomous AI agents. Built with TypeScript, focusing on agent orchestration, tool integration, and workflow automation.', delay: 500 },
  { type: 'tool_call', content: 'get_tech_stack()', delay: 300, toolName: 'get_tech_stack' },
  { type: 'tool_result', content: 'TypeScript, React, Node.js, PostgreSQL, Redis, Docker, AWS, Kubernetes', delay: 500 },
  { type: 'tool_call', content: 'get_contact()', delay: 300, toolName: 'get_contact' },
  { type: 'tool_result', content: 'Email: troycosentino@gmail.com\nGitHub: github.com/tcosentino\nLinkedIn: linkedin.com/in/troy-cosentino-b36694275', delay: 500 },
  { type: 'assistant', content: 'Profile complete.', delay: 300 },
];

export default function Example4() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setVisibleMessages(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
        timeoutId = window.setTimeout(showNextMessage, messages[currentIndex - 1]?.delay || 300);
      } else {
        setShowNav(true);
      }
    };

    timeoutId = window.setTimeout(showNextMessage, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-2xl font-bold">
              TC
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Troy Cosentino
          </h1>
          <div className="text-white/80 text-lg">
            Building the future of autonomous systems
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {visibleMessages.map((msg, idx) => (
            <div
              key={idx}
              className="animate-fadeIn"
            >
              {msg.type === 'tool_call' && (
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                    <div className="text-white/70 text-xs mb-1">{msg.toolName}</div>
                    <div className="text-white font-medium">{msg.content}</div>
                  </div>
                </div>
              )}

              {msg.type === 'tool_result' && (
                <div className="ml-11">
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                    <div className="space-y-3">
                      {msg.content.split('\n').map((line, i) => (
                        <p key={i} className={`${line.startsWith('•') ? 'text-gray-600 text-sm' : line.match(/^[A-Z].*:$/) ? 'text-purple-600 font-bold text-lg' : 'text-gray-800'}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'system' && (
                <div className="text-white/60 text-sm text-center italic">
                  {msg.content}
                </div>
              )}

              {msg.type === 'assistant' && (
                <div className="text-center mt-8">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showNav && (
          <div className="mt-16 flex gap-4 justify-center animate-fadeIn">
            <a
              href="/example3"
              className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/30 transition-colors"
            >
              ← Previous
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-white text-purple-600 font-medium rounded-xl hover:bg-white/90 transition-colors"
            >
              Back to Terminal
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
