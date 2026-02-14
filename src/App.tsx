import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Example1 from './pages/Example1'
import Example2 from './pages/Example2'
import Example3 from './pages/Example3'
import Example4 from './pages/Example4'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isExamplePage = location.pathname.startsWith('/example')

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && !isExamplePage && <Nav />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
          <Route path="/example4" element={<Example4 />} />
        </Routes>
      </main>
      {!isHomePage && !isExamplePage && <Footer />}
    </div>
  )
}

export default App
