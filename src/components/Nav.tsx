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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-secondary hover:text-primary transition-colors">
          Troy Cosentino
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
