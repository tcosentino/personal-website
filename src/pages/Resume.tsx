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
            <p className="text-gray-500">8+ years building distributed systems at scale</p>
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
                  <h3 className="text-lg font-bold text-gray-900">Senior Software Architect</h3>
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
                  Sole technical owner of production platform across 3 Kubernetes clusters processing 25,000+ operations per minute
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Leading platform engineering for acquired workflow automation product serving MSP customers globally
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Building and maintaining integrations across 50+ enterprise platforms (ServiceNow, ConnectWise, Autotask)
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
                  Built no-code workflow automation platform from zero to acquisition, scaling to 300+ customers across 3 global regions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Architected distributed orchestration engine with real-time API integrations (50+ platforms)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Built AI-powered ticket classification system using LLMs - key driver for acquisition
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                  Sole founding engineer responsible for full platform architecture, scaling, and technical leadership
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
              { label: 'Languages & Frameworks', value: 'TypeScript, JavaScript, Node.js, Python, React, Next.js' },
              { label: 'Infrastructure', value: 'Kubernetes, Docker, Terraform, Azure, AWS' },
              { label: 'Databases', value: 'MongoDB, SQL, Redis' },
              { label: 'Observability', value: 'Grafana, Loki, Prometheus, Custom Monitoring' },
              { label: 'AI/ML', value: 'LLM Integration, Agent Orchestration, OpenAI API' },
              { label: 'Other', value: 'RabbitMQ, Git, CI/CD, Microservices' },
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
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Science, Computer Engineering</h3>
            <p className="text-gray-600">Gonzaga University</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in working together?</h3>
          <p className="text-gray-500 text-sm mb-4">
            Currently exploring opportunities in agentic systems and distributed platforms.
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
