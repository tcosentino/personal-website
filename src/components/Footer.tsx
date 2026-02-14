export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-primary">Troy Cosentino</h3>
            <p className="text-white/70 font-medium leading-relaxed">
              Founding Engineer specializing in Agentic Systems, Distributed Systems, and AI Integration.
              Based in San Francisco.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/projects" className="text-white/70 font-medium hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="text-white/70 font-medium hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 font-medium hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 font-medium hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-white">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/tcosentino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 font-medium hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/troy-cosentino-b36694275" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 font-medium hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:troycosentino@gmail.com"
                  className="text-white/70 font-medium hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 font-medium">
            © {currentYear} Troy Cosentino. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
