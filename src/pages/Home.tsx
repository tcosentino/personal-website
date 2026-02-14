import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Message {
  type: 'user' | 'assistant' | 'thinking' | 'search';
  content: string;
  delay: number;
  searchQuery?: string;
}

const messages: Message[] = [
  { type: 'user', content: 'What do you know about Troy Cosentino?', delay: 0 },
  { type: 'thinking', content: 'Searching knowledge base...', delay: 800 },
  { type: 'search', content: 'professional_background', delay: 500, searchQuery: 'get_professional_info()' },
  { type: 'assistant', content: 'Troy Cosentino is an engineering leader with 7 years of experience building distributed systems at scale. He\'s currently focused on architecting autonomous agent platforms and exploring the intersection of infrastructure and AI.', delay: 600 },
  { type: 'search', content: 'recent_experience', delay: 400, searchQuery: 'get_experience("Ntiva")' },
  { type: 'assistant', content: 'Most recently, he served as VP of Engineering at Ntiva (2023-2024), where he led engineering teams building cloud infrastructure and automation, scaled operations, and drove technical strategy.', delay: 600 },
  { type: 'search', content: 'founding_experience', delay: 400, searchQuery: 'get_experience("Contuit")' },
  { type: 'assistant', content: 'Before that, Troy was a Founding Engineer at Contuit (2018-2023), where he built a distributed platform handling 25,000+ operations per minute, architected 300+ third-party integrations, and owned infrastructure, search systems, and core platform services.', delay: 600 },
  { type: 'search', content: 'technical_expertise', delay: 400, searchQuery: 'get_technical_focus()' },
  { type: 'assistant', content: 'His deep expertise spans:\n\n• Distributed systems & high-throughput architecture\n• Agentic systems & LLM orchestration\n• Infrastructure & developer tooling\n• Product engineering & technical leadership', delay: 600 },
  { type: 'search', content: 'current_projects', delay: 400, searchQuery: 'get_projects()' },
  { type: 'assistant', content: 'He\'s currently building AgentForge, a development platform for autonomous AI agents. It\'s built with TypeScript and focuses on agent orchestration, tool integration, and workflow automation.', delay: 600 },
  { type: 'search', content: 'tech_stack', delay: 400, searchQuery: 'get_tech_stack()' },
  { type: 'assistant', content: 'His tech stack includes: TypeScript, Python, React, Node.js, PostgreSQL, Redis, Docker, AWS, and Kubernetes.', delay: 500 },
  { type: 'search', content: 'contact_info', delay: 400, searchQuery: 'get_contact()' },
  { type: 'assistant', content: 'You can reach him at:\n\nEmail: troycosentino@gmail.com\nGitHub: github.com/tcosentino\nLinkedIn: linkedin.com/in/troy-cosentino-b36694275', delay: 500 },
];

export default function Home() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setVisibleMessages(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
        timeoutId = window.setTimeout(showNextMessage, messages[currentIndex - 1]?.delay || 500);
      } else {
        setShowNav(true);
      }
    };

    timeoutId = window.setTimeout(showNextMessage, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              AI
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Agent</h1>
              <p className="text-sm text-gray-500">Powered by autonomous systems</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-6 mb-8">
          {visibleMessages.map((msg, idx) => (
            <div key={idx} className="animate-fadeIn">
              {msg.type === 'user' && (
                <div className="flex justify-end">
                  <div className="max-w-2xl bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3">
                    <p className="text-[15px] leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              )}

              {msg.type === 'thinking' && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                      <span className="italic">{msg.content}</span>
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'search' && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8" />
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="font-mono">{msg.searchQuery}</span>
                    </div>
                  </div>
                </div>
              )}

              {msg.type === 'assistant' && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    AI
                  </div>
                  <div className="flex-1 max-w-2xl">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm">
                      <div className="prose prose-sm max-w-none">
                        {msg.content.split('\n').map((line, i) => (
                          <p key={i} className="text-gray-800 text-[15px] leading-relaxed mb-2 last:mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        {showNav && (
          <div className="mt-12 pt-8 border-t border-gray-200 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link
                to="/projects"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                View Projects
              </Link>
              <Link
                to="/resume"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Resume
              </Link>
              <Link
                to="/blog"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Contact
              </Link>
              <a
                href="https://github.com/tcosentino"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/troy-cosentino-b36694275"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
