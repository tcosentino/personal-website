import { Link } from 'react-router-dom'

export default function MinimalNav() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 pt-8 pb-4">
      <div className="flex justify-between items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600 transition-colors font-medium mr-6">~/troy</Link>
        <div className="flex gap-6">
          <Link to="/projects" className="hover:text-blue-600 transition-colors">projects</Link>
          <Link to="/resume" className="hover:text-blue-600 transition-colors">resume</Link>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">blog</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">contact</Link>
        </div>
      </div>
    </div>
  )
}
