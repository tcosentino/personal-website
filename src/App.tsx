import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Example1 from './pages/Example1'
import Example2 from './pages/Example2'
import Example3 from './pages/Example3'
import Example4 from './pages/Example4'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/example1" element={<Example1 />} />
      <Route path="/example2" element={<Example2 />} />
      <Route path="/example3" element={<Example3 />} />
      <Route path="/example4" element={<Example4 />} />
    </Routes>
  )
}

export default App
