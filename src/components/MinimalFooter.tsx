export default function MinimalFooter() {
  return (
    <footer className="max-w-4xl mx-auto px-8 py-12 mt-12 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <span>Troy Cosentino</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/tcosentino"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/troy-cosentino-b36694275"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:troycosentino@gmail.com"
            className="hover:text-gray-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
