import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()

  // Placeholder - you'll load real content from files/CMS later
  const post = {
    title: 'Blog Post Title',
    date: 'January 1, 2026',
    content: 'This is where your blog post content will go. You can write Markdown and convert it to HTML, or use a CMS.',
    tags: ['Tag1', 'Tag2'],
  }

  return (
    <div className="section">
      <div className="container-custom max-w-3xl">
        <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-5xl font-bold text-secondary mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>

          <div className="card">
            <div className="text-gray-700 leading-relaxed">
              <p>Post slug: {slug}</p>
              <p className="mt-4">{post.content}</p>
              <p className="mt-4">
                You'll replace this with actual blog post content. Options:
              </p>
              <ul className="mt-2 ml-6">
                <li>Write posts in Markdown files</li>
                <li>Use a headless CMS (Contentful, Sanity)</li>
                <li>Store posts in JSON/database</li>
                <li>Use MDX for interactive posts</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
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
        </article>

        <div className="mt-12 text-center">
          <Link to="/blog" className="btn btn-outline">
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  )
}
