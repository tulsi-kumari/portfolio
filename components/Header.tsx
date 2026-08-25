import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-3xl mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-line">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#111417] to-[#374151] text-paper flex items-center justify-center text-xl font-bold tracking-wider shadow-sm ring-2 ring-line">
              TK
            </div>
            <span
              className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-paper"
              title="Building backend & distributed systems"
            />
          </div>
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-ink hover:text-accent transition-colors"
            >
              Tulsi Kumari
            </Link>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="text-xs font-medium text-accent">
                Backend Software Engineer
              </p>
              <span className="text-xs text-muted/60">&middot;</span>
              <p className="text-xs text-muted">Texas Instruments</p>
            </div>
          </div>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-3 text-xs font-medium">
          <a
            href="https://github.com/tulsi-kumari"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-ink/[0.02] text-ink/80 hover:bg-ink/[0.06] hover:text-ink transition-colors"
            title="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kumari-tulsi/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-ink/[0.02] text-ink/80 hover:bg-ink/[0.06] hover:text-ink transition-colors"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6z" />
            </svg>
            LinkedIn
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink text-paper text-xs font-semibold hover:opacity-85 transition-opacity shadow-sm"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className="flex items-center gap-6 mt-4 text-sm font-medium">
        <Link
          href="/"
          className="text-ink hover:text-accent transition-colors pb-1 border-b-2 border-transparent hover:border-accent"
        >
          Writing
        </Link>
        <Link
          href="/about"
          className="text-muted hover:text-ink transition-colors pb-1 border-b-2 border-transparent hover:border-ink"
        >
          About
        </Link>
        <Link
          href="/resume"
          className="text-muted hover:text-ink transition-colors pb-1 border-b-2 border-transparent hover:border-ink"
        >
          Resume
        </Link>
        <a
          href="/feed.xml"
          target="_blank"
          className="text-muted hover:text-accent transition-colors flex items-center gap-1 text-xs ml-auto"
        >
          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
          RSS Feed
        </a>
      </nav>
    </header>
  );
}
