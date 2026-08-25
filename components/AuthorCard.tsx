import Link from "next/link";

export default function AuthorCard() {
  return (
    <div className="mt-14 pt-8 border-t border-line">
      <div className="p-6 rounded-xl bg-ink/[0.02] border border-line flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center text-lg font-semibold shrink-0">
          TK
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base text-ink">Tulsi Kumari</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
              Backend SDE @ Texas Instruments
            </span>
          </div>
          <p className="text-sm text-ink/80 mt-1 leading-relaxed">
            I write about transaction boundaries, database performance, and distributed systems self-study. If you're discussing backend architectures, incident debugging, or high-performance engineering roles, feel free to reach out.
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs font-medium">
            <a
              href="mailto:tulsi.workk@gmail.com"
              className="text-accent hover:underline flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              tulsi.workk@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kumari-tulsi/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tulsi-kumari"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <Link href="/resume" className="text-muted hover:text-ink transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
