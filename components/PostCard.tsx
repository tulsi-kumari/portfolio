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
    <article className="py-7 border-b border-line first:pt-0">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <time className="text-xs text-muted">{formatDate(post.date)}</time>
        <span className="text-xs text-muted/60">&middot;</span>
        <span className="text-xs text-muted">{post.readingTime}</span>
        <StatusTag status={post.status} />
      </div>
      <h2 className="text-lg font-semibold tracking-tight leading-snug">
        <Link href={`/posts/${post.slug}`} className="hover:text-accent transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-sm text-muted mt-1.5 leading-relaxed">{post.excerpt}</p>
      <div className="flex gap-2 mt-3">
        {post.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </article>
  );
}
