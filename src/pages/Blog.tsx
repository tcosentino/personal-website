import { Link } from 'react-router-dom'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

export default function Blog() {
  const posts = [
    {
      slug: 'building-agentforge',
      title: 'Building AgentForge: Why Agents Need Framework + Infrastructure',
      date: 'Coming Soon',
      excerpt: 'Most AI coding tools give agents text editors. I am building the complete development stack - framework, orchestration, memory, deployment.',
      tags: ['Agentic Systems', 'Architecture', 'AgentForge'],
      published: false,
    },
    {
      slug: 'zero-to-acquisition',
      title: 'Zero to Acquisition: 7 Years Building Contuit',
      date: 'Coming Soon',
      excerpt: 'Lessons learned co-founding a workflow automation platform from first line of code to acquisition by Ntiva.',
      tags: ['Founding', 'Startups', 'Distributed Systems'],
      published: false,
    },
    {
      slug: 'agentic-architecture',
      title: 'Agent Architecture Patterns I Wish Existed',
      date: 'Coming Soon',
      excerpt: 'The infrastructure primitives that agents actually need to be productive: state management, memory systems, tool orchestration.',
      tags: ['Agentic Systems', 'Architecture'],
      published: false,
    },
  ]

  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500 mb-10">
          Writing about agentic systems, distributed architecture, and building at scale
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-bold text-gray-900 flex-1 mr-4">
                  {post.published ? (
                    <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{post.title}</span>
                  )}
                </h2>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                  post.published
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {post.published ? 'Published' : 'Coming Soon'}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
