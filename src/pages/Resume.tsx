import { Link } from 'react-router-dom'
import MinimalNav from '../components/MinimalNav'
import MinimalFooter from '../components/MinimalFooter'

export default function Resume() {
  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <MinimalNav />

      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
            <p className="text-gray-500">8+ years building products and distributed systems at scale</p>
          </div>
          <a
            href="/Troy-Cosentino-Resume.pdf"
            download
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Download PDF
          </a>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Experience</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Senior Software Engineer</h3>
                  <p className="text-gray-600">Ntiva</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>Oct 2024 - Present</p>
                  <p>San Francisco Bay Area</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Sole technical owner of full stack across 3 Kubernetes clusters processing 25,000+ operations per minute
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Designing and shipping product features for acquired SaaS platform serving 300+ enterprise customers
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Operating daily data sync pipelines for 150+ customers, extracting, transforming, and reconciling 100k+ records across enterprise APIs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Architecting observability systems with Grafana, Loki, reducing incident response time by 60%
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Co-Founder & Principal Engineer</h3>
                  <p className="text-gray-600">Contuit (acquired by Ntiva)</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>2017 - Oct 2024</p>
                  <p>San Francisco Bay Area</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Designed and built full product from zero to acquisition (React frontend, Node.js backend, K8s infrastructure), serving customers across 3 global regions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Developed data integration engine for syncing records across 50+ enterprise APIs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Built AI-powered ticket classification using LLMs, key driver for acquisition
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Sole founding engineer: owned product design, technical architecture, and support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Languages & Frameworks', value: 'TypeScript, JavaScript, Node.js, React' },
              { label: 'Backend & Data', value: 'REST APIs, Multi-source Integration, Microservices' },
              { label: 'Infrastructure', value: 'Kubernetes, Docker, Terraform, Azure, AWS' },
              { label: 'Databases', value: 'MongoDB, SQL, Redis' },
              { label: 'AI', value: 'Custom Agents, Agent Orchestration, OpenAI/Claude API' },
              { label: 'Observability', value: 'Grafana, Loki, Prometheus' },
            ].map(skill => (
              <div key={skill.label}>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{skill.label}</h3>
                <p className="text-sm text-gray-500">{skill.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Education</h2>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Computer Engineering, Gonzaga University</h3>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in working together?</h3>
          <p className="text-gray-500 text-sm mb-4">
            Currently exploring opportunities in product development, agentic systems, and distributed platforms.
          </p>
          <Link to="/contact" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Get in touch
          </Link>
        </div>
      </div>

      <MinimalFooter />
    </div>
  )
}
