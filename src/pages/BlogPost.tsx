import { useParams, Link } from 'react-router-dom'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

export default function BlogPost() {
  const { slug } = useParams()

  const post = {
    title: 'Blog Post Title',
    date: 'January 1, 2026',
    content: 'This is where your blog post content will go. You can write Markdown and convert it to HTML, or use a CMS.',
    tags: ['Tag1', 'Tag2'],
  }

  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <Link
          to="/blog"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
        >
          &larr; blog
        </Link>

        <article>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-8">{post.date}</p>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-gray-700 leading-relaxed text-sm">
              <p>Post slug: {slug}</p>
              <p className="mt-4">{post.content}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-gray-100">
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
        </article>
      </div>

      <MinimalFooter />
    </div>
  )
}
