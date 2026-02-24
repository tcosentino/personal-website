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

export default function Example3() {
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-32 text-center">
          <h1 className="text-4xl mb-8" style={{ fontFamily: 'Georgia, serif', fontWeight: 300, letterSpacing: '0.02em' }}>
            Troy Cosentino
          </h1>
          <div className="w-px h-12 bg-gray-300 mx-auto" />
        </div>

        {/* Messages */}
        <div className="space-y-16">
          {visibleMessages.map((msg, idx) => (
            <div
              key={idx}
              className="animate-fadeIn"
            >
              {msg.type === 'tool_call' && (
                <div className="text-center">
                  <div className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                </div>
              )}

              {msg.type === 'tool_result' && (
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-6">
                    {msg.content.split('\n').map((line, i) => (
                      <p key={i} className={`${line.startsWith('•') ? 'pl-6 text-gray-600' : line.match(/^[A-Z].*:$/) ? 'text-2xl text-gray-900 mb-4' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', fontSize: line.startsWith('•') || line.length < 100 ? '16px' : '18px' }}>
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="mt-12 w-16 h-px bg-gray-300 mx-auto" />
                </div>
              )}

              {msg.type === 'system' && (
                <div className="text-center text-gray-400 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
                  {msg.content}
                </div>
              )}

              {msg.type === 'assistant' && (
                <div className="text-center mt-24">
                  <div className="text-gray-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showNav && (
          <div className="mt-32 flex justify-center gap-8 animate-fadeIn">
            <a
              href="/example2"
              className="text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Georgia, serif' }}
            >
              ← Previous
            </a>
            <span className="text-gray-300">·</span>
            <a
              href="/example4"
              className="text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Georgia, serif' }}
            >
              Next →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
