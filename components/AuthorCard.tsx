import Link from "next/link";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="mt-16 pt-10 border-t border-line">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-16 h-16 rounded-full shrink-0 relative overflow-hidden bg-line">
          <Image src="/profile.jpg" alt="Tulsi Kumari" fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="font-bold text-[15px] text-ink">Tulsi Kumari</h3>
            <span className="text-line">&middot;</span>
            <span className="text-[13px] text-muted font-medium">
              Backend SDE @ Texas Instruments
            </span>
          </div>
          <p className="text-[14px] text-ink/85 leading-relaxed mb-3">
            I write about transaction boundaries, database performance, and distributed systems self-study. If you're discussing backend architectures, incident debugging, or high-performance engineering roles, feel free to reach out.
          </p>
          <div className="flex items-center gap-4 text-[13px] font-semibold tracking-wide">
            <a
              href="mailto:tulsi.workk@gmail.com"
              className="text-accent hover:underline flex items-center gap-1"
            >
              Email
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
          </div>
        </div>
      </div>
    </div>
  );
}
