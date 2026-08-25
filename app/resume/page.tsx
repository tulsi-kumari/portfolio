import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Tulsi Kumari",
  description: "Software Development Engineer resume of Tulsi Kumari.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-8 border-b border-line">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">Resume</h1>
          <p className="text-sm text-muted mt-1">
            Software Development Engineer &middot; Bengaluru, India
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Tulsi_Kumari_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-ink text-paper text-sm font-medium hover:opacity-85 transition-opacity shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-line text-ink text-sm font-medium hover:bg-black/5 transition-colors"
          >
            Open raw PDF
          </a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="space-y-10 text-ink/90 text-sm leading-relaxed">
        {/* Contact info bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted pb-6 border-b border-line/60">
          <span>Bengaluru, India</span>
          <span>&middot;</span>
          <a
            href="mailto:tulsi.workk@gmail.com"
            className="hover:text-accent transition-colors underline decoration-line hover:decoration-accent"
          >
            tulsi.workk@gmail.com
          </a>
          <span>&middot;</span>
          <a
            href="https://www.linkedin.com/in/kumari-tulsi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors underline decoration-line hover:decoration-accent"
          >
            linkedin.com/in/kumari-tulsi
          </a>
          <span>&middot;</span>
          <a
            href="https://github.com/tulsi-kumari"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors underline decoration-line hover:decoration-accent"
          >
            github.com/tulsi-kumari
          </a>
        </div>

        {/* Summary */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
            Summary
          </h2>
          <p className="text-ink/85">
            Software Engineer with production experience designing, building, and
            optimizing enterprise applications and distributed systems. Experienced in
            Java 21, Spring Boot, microservices, relational databases, concurrency,
            cloud-native technologies, and CI/CD. Reduced production workflow latency by
            95% through database and ORM optimization and resolved complex production
            issues involving transaction boundaries, connection pools, and enterprise
            integrations.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-2.5 text-xs">
            <div>
              <span className="font-semibold text-ink">Languages: </span>
              <span className="text-ink/80">Java 21, Python, SQL, JavaScript, Go</span>
            </div>
            <div>
              <span className="font-semibold text-ink">Software Engineering: </span>
              <span className="text-ink/80">
                Core Java, OOP, Collections, Design Patterns, Multithreading, Concurrency
              </span>
            </div>
            <div>
              <span className="font-semibold text-ink">Backend & Distributed Systems: </span>
              <span className="text-ink/80">
                Spring Boot, Spring Data JPA, Spring Security, Hibernate, JDBC, REST APIs, SOAP, Microservices, AOP
              </span>
            </div>
            <div>
              <span className="font-semibold text-ink">Databases: </span>
              <span className="text-ink/80">
                MySQL, Oracle, PostgreSQL, RDBMS, Schema Design, Query Optimization, Indexing, Flyway
              </span>
            </div>
            <div>
              <span className="font-semibold text-ink">Testing: </span>
              <span className="text-ink/80">JUnit, Mockito, Unit Testing, Integration Testing</span>
            </div>
            <div>
              <span className="font-semibold text-ink">Cloud & DevOps: </span>
              <span className="text-ink/80">
                AWS, OCI, Docker, Kubernetes, Jenkins, Argo CD, CI/CD, Git, Maven, Linux
              </span>
            </div>
            <div>
              <span className="font-semibold text-ink">Tools & Methodologies: </span>
              <span className="text-ink/80">Jira, Agile/Scrum</span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-6">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* Role 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-ink">
                    Software Development Engineer
                  </h3>
                  <p className="text-xs font-medium text-accent">
                    Texas Instruments &middot; Bengaluru, India
                  </p>
                </div>
                <span className="text-xs text-muted shrink-0 font-mono">
                  Aug 2025 – Present
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-ink/85 mt-3">
                <li>
                  Architected an 11-state quarter lifecycle orchestrator as a modular monolith, using event-triggered transitions, asynchronous processing, hash-based delta synchronization, and downstream impact propagation to automate sales incentive workflows at 10,000+ participant scale, reducing administration cycle time from 15 days to 3–4 days and saving ~$120K annually.
                </li>
                <li>
                  Reduced Hibernate/JPA-driven workflow latency by 95% (45+ min to ~2 min) by enabling JDBC batching, replacing bulk <code className="text-xs bg-black/5 px-1 py-0.5 rounded">saveAll</code> merges with correlated SQL updates, removing cascade merges, and eliminating N+1 queries.
                </li>
                <li>
                  Diagnosed and resolved 1+ hour application freezes, tracing the root cause to Oracle connection-pool starvation from long-running transactions held open during external SOAP/Denodo calls; redesigned transaction boundaries to isolate external I/O from database transactions.
                </li>
                <li>
                  Established transaction and integration boundaries for a Spring Boot platform coordinating databases, REST/SOAP APIs, data virtualization, and SFTP across a multi-thousand-record batch process, ensuring all-or-nothing consistency.
                </li>
                <li>
                  Standardized global exception handling through a custom exception hierarchy, producing consistent error responses and failure diagnostics across 15+ services.
                </li>
                <li>
                  Introduced correlation-ID based request tracing across the workflow pipeline, enabling end-to-end request tracking for debugging and auditability.
                </li>
                <li>
                  Developed reusable, Kubernetes-deployed Python libraries standardizing integration development across 150+ enterprise integrations, and designed RBAC authorization services for sensitive enterprise data across multiple business domains.
                </li>
                <li>
                  Developed and maintained unit and integration test coverage using JUnit and Mockito for Spring Boot services, improving regression safety across production workflows.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-ink">
                    Software Development Engineer Intern
                  </h3>
                  <p className="text-xs font-medium text-accent">
                    Texas Instruments &middot; Bengaluru, India
                  </p>
                </div>
                <span className="text-xs text-muted shrink-0 font-mono">
                  Jan 2025 – Aug 2025
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-ink/85 mt-3">
                <li>
                  Developed and delivered an AI-powered workflow automation platform to production in 8 weeks, sustaining zero production defects for 2+ months and driving adoption across 20+ workflows.
                </li>
                <li>
                  Established CI/CD deployment workflows for on-premises Kubernetes clusters, configuring manifests, persistent volumes, CronJobs, Argo CD deployment scripts, and Jenkins pipelines; resolved build and deployment issues across projects.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-6">
            Projects
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                <h3 className="font-bold text-ink">
                  Enterprise Data Lineage and Search Platform
                </h3>
                <span className="text-xs text-muted">
                  Python, PostgreSQL, Graph Traversal, REST/SOAP APIs
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-ink/85">
                <li>
                  Built a searchable knowledge graph of 16,000+ artifacts and 30,000+ dependency edges across 9 artifact types, using normalized artifact relationships and GIN-indexed search to enable dependency/impact analysis, reducing manual investigation from 2–3 months to ~30 seconds.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                <h3 className="font-bold text-ink">
                  Raft Consensus Implementation
                </h3>
                <span className="text-xs text-muted">
                  Go &middot; Personal Project (In Progress)
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-ink/85">
                <li>
                  Implementing Raft from the original paper for hands-on understanding of leader election and log replication; currently at leader election. Exploring MapReduce alongside consistency and sharding tradeoffs.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                <h3 className="font-bold text-ink">
                  AI-Assisted Job Application Platform
                </h3>
                <span className="text-xs text-muted">
                  Product &amp; Engineering &middot; OCI, Docker, Nginx, TLS
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-ink/85">
                <li>
                  Contributed product/data-modeling design for an AI-assisted job application platform and deployed it on OCI using Docker, Nginx, DNS, and TLS, optimizing data structures to reduce LLM inference calls.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-line/60">
          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
              Education
            </h2>
            <div>
              <h3 className="font-bold text-ink">
                National Institute of Technology Patna
              </h3>
              <p className="text-xs text-accent font-medium mt-0.5">
                B.Tech, Computer Science and Engineering
              </p>
              <p className="text-xs text-muted mt-1 font-mono">2021 – 2025</p>
              <p className="text-xs text-ink/80 mt-1.5">
                <span className="font-semibold">CGPA:</span> 9.67/10 (perfect 10.0 across multiple consecutive semesters)
              </p>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
              Achievements
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-2 text-ink/85 text-xs">
              <li>
                <span className="font-semibold text-ink">Rising Star of the Quarter</span> for end-to-end ownership and execution quality at Texas Instruments.
              </li>
              <li>
                <span className="font-semibold text-ink">Silver Recognition, Top 10 finish</span> at AI Hackathon.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
