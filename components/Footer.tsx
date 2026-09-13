export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-3xl mx-auto px-6 py-14 mt-10 border-t border-line">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>
          &copy; {year} Tulsi Kumari &middot; Backend Software Engineer
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/feed.xml"
            target="_blank"
            className="hover:text-accent flex items-center gap-1 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS
          </a>
          <span>&middot;</span>
          <a
            href="https://github.com/tulsi-kumari"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span>&middot;</span>
          <a
            href="https://www.linkedin.com/in/kumari-tulsi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span>&middot;</span>
          <a
            href="mailto:tulsi.workk@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
