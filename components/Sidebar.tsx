import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0 md:sticky md:top-0 md:h-screen flex flex-col pt-10 pb-8 md:py-12 px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row md:flex-col justify-between sm:items-center md:items-start gap-6">
        
        {/* Profile Info */}
        <div className="flex items-center md:items-start md:flex-col gap-4 md:gap-5">
          <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 bg-line">
            <Image src="/profile.jpg" alt="Tulsi Kumari" fill className="object-cover" />
          </div>
          <div>
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight text-ink hover:text-accent transition-colors"
            >
              Tulsi Kumari
            </Link>
            <div className="mt-1">
              <p className="text-xs md:text-sm font-medium text-accent">
                Backend Software Engineer
              </p>
              <p className="text-xs md:text-sm text-muted mt-0.5">Texas Instruments</p>
            </div>
          </div>
        </div>

        {/* Social / Direct Links - Mobile Only */}
        <div className="flex md:hidden items-center gap-4 text-[13px] font-medium">
          <a href="https://github.com/tulsi-kumari" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/kumari-tulsi/" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors">LinkedIn</a>
        </div>
      </div>

      <p className="hidden md:block mt-8 text-[15px] text-ink/80 leading-relaxed">
        I write about transaction boundaries, database performance, and distributed systems self-study.
      </p>

      {/* Navigation */}
      <nav className="flex md:flex-col items-center md:items-start gap-6 md:gap-4 mt-6 md:mt-10 text-[13px] font-semibold pb-4 md:pb-0 overflow-x-auto w-full tracking-wide">
        <Link href="/" className="text-ink hover:text-accent transition-colors whitespace-nowrap shrink-0">Writing</Link>
        <Link href="/about" className="text-muted hover:text-ink transition-colors whitespace-nowrap shrink-0">About</Link>
        <Link href="/resume" className="text-muted hover:text-ink transition-colors whitespace-nowrap shrink-0">Resume</Link>
        <a href="/feed.xml" target="_blank" className="hidden md:flex text-muted hover:text-ink transition-colors items-center gap-1.5 md:mt-4 shrink-0">
          RSS Feed
        </a>
      </nav>

      {/* Social Links Desktop */}
      <div className="hidden md:flex flex-col gap-3 mt-auto pt-8">
        <a href="mailto:tulsi.workk@gmail.com" className="text-[13px] font-medium text-muted hover:text-ink transition-colors mb-2">tulsi.workk@gmail.com</a>
        <div className="flex gap-4">
          <a href="https://github.com/tulsi-kumari" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors" title="GitHub">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/kumari-tulsi/" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors" title="LinkedIn">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6z" /></svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
