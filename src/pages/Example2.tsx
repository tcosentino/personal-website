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

export default function Example2() {
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-20">
          <div className="text-6xl font-black mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}>
            TROY
          </div>
          <div className="text-6xl font-black text-gray-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}>
            COSENTINO
          </div>
          <div className="mt-6 w-24 h-1 bg-white" />
        </div>

        {/* Messages */}
        <div className="space-y-8">
          {visibleMessages.map((msg, idx) => (
            <div
              key={idx}
              className="animate-fadeIn"
            >
              {msg.type === 'tool_call' && (
                <div className="border-l-4 border-white pl-6 py-2">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    → {msg.toolName}
                  </div>
                </div>
              )}

              {msg.type === 'tool_result' && (
                <div className="pl-6">
                  <div className="bg-zinc-900 border-2 border-white p-8">
                    <div className="space-y-4">
                      {msg.content.split('\n').map((line, i) => (
                        <div key={i} className={`${line.startsWith('•') ? 'text-gray-400' : line.match(/^\d|^[A-Z].*:$/) ? 'text-white font-bold text-xl' : 'text-gray-300'}`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'system' && (
                <div className="text-gray-600 text-xs uppercase tracking-widest">
                  {msg.content}
                </div>
              )}

              {msg.type === 'assistant' && (
                <div className="mt-12 text-center">
                  <div className="inline-block px-8 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showNav && (
          <div className="mt-20 flex gap-4 animate-fadeIn">
            <a
              href="/example1"
              className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              ← PREVIOUS
            </a>
            <a
              href="/example3"
              className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
            >
              NEXT →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
