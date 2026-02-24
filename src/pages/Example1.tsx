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

export default function Example1() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200 text-sm text-blue-600 mb-4">
            Agent Building Profile
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Troy Cosentino
          </h1>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {visibleMessages.map((msg, idx) => (
            <div
              key={idx}
              className="animate-fadeIn"
            >
              {msg.type === 'tool_call' && (
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      Calling {msg.toolName}
                    </div>
                    <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-mono text-sm">
                      {msg.content}
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'tool_result' && (
                <div className="ml-5 pl-6 border-l-2 border-blue-200">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="prose prose-blue max-w-none">
                      {msg.content.split('\n').map((line, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'system' && (
                <div className="text-gray-500 text-sm italic">
                  {msg.content}
                </div>
              )}

              {msg.type === 'assistant' && (
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {msg.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showNav && (
          <div className="mt-16 flex gap-4 animate-fadeIn">
            <a
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Terminal
            </a>
            <a
              href="/example2"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Next Example →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
