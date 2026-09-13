export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <h1 className="text-3xl font-bold tracking-tight mb-6 font-serif">About</h1>

      <div className="prose-post text-ink/90">
        <p>
          I'm a Backend Software Engineer focused on transaction correctness,
          performance engineering, and production reliability in Java and
          Spring Boot systems.
        </p>

        <p>
          Day to day, that means designing transaction boundaries across
          heterogeneous systems, optimizing Hibernate/JPA behavior when the
          ORM's defaults stop being free, and being the person who traces a
          production incident back to its actual root cause instead of
          patching the symptom.
        </p>

        <p>
          Outside of work, I'm building toward distributed systems and
          larger-scale production work &mdash; currently implementing Raft
          from the original paper, one component at a time, and thinking
          through how to design data models that keep LLM inference costs
          down without sacrificing quality, as part of a small AI-assisted
          product I'm helping build.
        </p>

        <p>
          This site is where I write both of those up: the production
          problems I've actually solved, and the harder things I'm still
          learning.
        </p>

        <h2>Elsewhere &amp; Contact</h2>
        <ul>
          <li>
            Email: <a href="mailto:tulsi.workk@gmail.com">tulsi.workk@gmail.com</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kumari-tulsi/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/tulsi-kumari" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="/resume">Resume (Interactive &amp; PDF)</a>
          </li>
          <li>
            <a href="/feed.xml" target="_blank">
              RSS Feed
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
