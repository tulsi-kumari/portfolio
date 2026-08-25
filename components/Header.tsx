import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/tulsi-kumari" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kumari-tulsi/" },
  { label: "Resume", href: "/resume" },
  { label: "RSS", href: "/feed.xml" },
];

export default function Header() {
  return (
    <header className="max-w-2xl mx-auto px-6 pt-14 pb-10">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center text-xl font-semibold shrink-0">
          TK
        </div>
        <div>
          <Link href="/" className="block text-xl font-bold tracking-tight text-ink hover:opacity-70">
            Tulsi Kumari
          </Link>
          <p className="text-sm text-muted mt-0.5">Backend Software Engineer</p>
        </div>
      </div>

      <nav className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm">
        <Link href="/" className="text-ink hover:text-accent transition-colors">
          Writing
        </Link>
        <Link href="/about" className="text-ink hover:text-accent transition-colors">
          About
        </Link>
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
