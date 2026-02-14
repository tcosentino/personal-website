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
    <nav className="bg-cream border-b-4 border-black sticky top-0 z-50 shadow-[0_4px_0_0_#000000]">
      <div className="container-custom py-6 px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-black text-dark hover:text-primary transition-colors uppercase tracking-tight"
        >
          Troy
        </Link>
        <div className="flex gap-2 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-bold text-sm md:text-base uppercase tracking-wide px-3 md:px-4 py-2 border-2 border-black transition-all ${
                location.pathname === link.path
                  ? 'bg-primary text-white shadow-[2px_2px_0_0_#000000] transform -translate-y-1'
                  : 'bg-white text-dark hover:bg-accent hover:shadow-[2px_2px_0_0_#000000] hover:-translate-y-1'
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
