export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white py-16 border-t-8 border-primary">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black mb-4 text-accent uppercase">Troy Cosentino</h3>
            <p className="text-white font-medium leading-relaxed">
              Founding Engineer specializing in Agentic Systems, Distributed Systems, and AI Integration
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-4 text-accent uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/projects" className="text-white font-bold hover:text-primary transition-colors text-lg">
                  → Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="text-white font-bold hover:text-primary transition-colors text-lg">
                  → Resume
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white font-bold hover:text-primary transition-colors text-lg">
                  → Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white font-bold hover:text-primary transition-colors text-lg">
                  → Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-4 text-accent uppercase">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/tcosentino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-secondary transition-colors text-lg"
                >
                  → GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/troy-cosentino-b36694275" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-secondary transition-colors text-lg"
                >
                  → LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:troycosentino@gmail.com"
                  className="text-white font-bold hover:text-secondary transition-colors text-lg"
                >
                  → Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-4 border-primary mt-12 pt-8 text-center">
          <p className="text-white font-bold text-lg">
            © {currentYear} Troy Cosentino. Built with React + TypeScript + Tailwind.
          </p>
          <p className="text-accent font-black mt-2 text-sm uppercase tracking-wider">
            San Francisco, CA 🐧
          </p>
        </div>
      </div>
    </footer>
  )
}
