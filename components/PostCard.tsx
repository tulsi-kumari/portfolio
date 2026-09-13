import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import StatusTag from "./StatusTag";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-8 border-b border-line last:border-b-0">
      <div className="flex items-center gap-2 text-[11px] text-muted mb-2 font-medium uppercase tracking-wider font-mono">
        <time>{formatDate(post.date)}</time>
        <span className="text-line">&middot;</span>
        <span>{post.readingTime}</span>
        <StatusTag status={post.status} />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-ink leading-tight mb-2.5 font-serif">
        <Link
          href={`/posts/${post.slug}`}
          className="hover:text-accent transition-colors block"
        >
          {post.title}
        </Link>
      </h2>

      <p className="text-[15px] text-ink/80 mb-4 leading-relaxed max-w-2xl">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-3 text-[13px] font-semibold tracking-wide">
        <Link
          href={`/posts/${post.slug}`}
          className="text-muted hover:text-ink inline-flex items-center gap-1 transition-colors"
        >
          Read article &rarr;
        </Link>
      </div>
    </article>
  );
}
