import { Link } from 'react-router-dom'

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
    <div className="section">
      <div className="container-custom max-w-4xl">
        <h1 className="heading text-center mb-4">Blog</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Writing about agentic systems, distributed architecture, and building at scale
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug} className="card">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-secondary">
                  {post.published ? (
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{post.title}</span>
                  )}
                </h2>
                <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                  post.published 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {post.published ? 'Published' : 'Coming Soon'}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-3">{post.date}</p>

              <p className="text-gray-700 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-secondary mb-3">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            I will be writing about building AgentForge and agentic systems. Follow me on GitHub or LinkedIn.
          </p>
        </div>
      </div>
    </div>
  )
}
