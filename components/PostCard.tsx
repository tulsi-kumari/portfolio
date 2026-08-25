import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import StatusTag from "./StatusTag";
import Tag from "./Tag";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group mb-5 p-6 rounded-xl bg-ink/[0.015] border border-line hover:border-ink/25 hover:bg-ink/[0.03] hover:shadow-sm transition-all duration-200">
      <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
        <div className="flex items-center gap-2 text-xs text-muted">
          <svg className="w-3.5 h-3.5 text-muted/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time>{formatDate(post.date)}</time>
          <span className="text-muted/40">&middot;</span>
          <svg className="w-3.5 h-3.5 text-muted/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{post.readingTime}</span>
        </div>
        <StatusTag status={post.status} />
      </div>

      <h2 className="text-xl font-bold tracking-tight text-ink leading-snug">
        <Link
          href={`/posts/${post.slug}`}
          className="group-hover:text-accent transition-colors block"
        >
          {post.title}
        </Link>
      </h2>

      <p className="text-sm text-ink/75 mt-2 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-line/50 flex-wrap">
        <div className="flex gap-1.5 flex-wrap">
          {post.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="text-xs font-semibold text-accent inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Read article &rarr;
        </Link>
      </div>
    </article>
  );
}
