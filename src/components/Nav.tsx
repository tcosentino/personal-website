import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-5 px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-display font-black text-dark hover:text-primary transition-colors"
        >
          Troy Cosentino
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors relative ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-dark/70 hover:text-primary'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
