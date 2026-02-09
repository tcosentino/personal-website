export default function Resume() {
  return (
    <div className="section">
      <div className="container-custom max-w-4xl">
        <h1 className="heading text-center mb-4">Resume</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          8+ years building distributed systems at scale
        </p>

        {/* Download Button */}
        <div className="text-center mb-12">
          <a 
            href="/Troy-Cosentino-Resume.pdf" 
            download
            className="btn btn-primary"
          >
            📄 Download PDF
          </a>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-6">Experience</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Senior Software Architect</h3>
                  <p className="text-lg text-gray-700">Ntiva</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>October 2024 - Present</p>
                  <p className="text-sm">San Francisco Bay Area</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Sole technical owner of production platform across 3 Kubernetes clusters processing 25,000+ operations per minute</li>
                <li>• Leading platform engineering for acquired workflow automation product serving MSP customers globally</li>
                <li>• Building and maintaining integrations across 50+ enterprise platforms (ServiceNow, ConnectWise, Autotask)</li>
                <li>• Architecting observability systems with Grafana, Loki, reducing incident response time by 60%</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Co-Founder & Principal Engineer</h3>
                  <p className="text-lg text-gray-700">Contuit (acquired by Ntiva)</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>2017 - October 2024</p>
                  <p className="text-sm">San Francisco Bay Area</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Built no-code workflow automation platform from zero to acquisition, scaling to 300+ customers across 3 global regions</li>
                <li>• Architected distributed orchestration engine with real-time API integrations (50+ platforms)</li>
                <li>• Built AI-powered ticket classification system using LLMs - key driver for acquisition</li>
                <li>• Sole founding engineer responsible for full platform architecture, scaling, and technical leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-secondary mb-2">Languages & Frameworks</h3>
              <p className="text-gray-600">TypeScript, JavaScript, Node.js, Python, React, Next.js</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Infrastructure</h3>
              <p className="text-gray-600">Kubernetes, Docker, Terraform, Azure, AWS</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Databases</h3>
              <p className="text-gray-600">MongoDB, SQL, Redis</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Observability</h3>
              <p className="text-gray-600">Grafana, Loki, Prometheus, Custom Monitoring</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">AI/ML</h3>
              <p className="text-gray-600">LLM Integration, Agent Orchestration, OpenAI API</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Other</h3>
              <p className="text-gray-600">RabbitMQ, Git, CI/CD, Microservices</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-6">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-secondary">Bachelor of Science, Computer Engineering</h3>
            <p className="text-lg text-gray-700">Gonzaga University</p>
          </div>
        </section>

        {/* CTA */}
        <div className="card text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-secondary mb-3">Interested in working together?</h3>
          <p className="text-gray-600 mb-6">
            I'm currently exploring opportunities in agentic systems and distributed platforms.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
