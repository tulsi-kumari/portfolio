import { getAllPosts, getPostBySlug } from "@/lib/posts";
import StatusTag from "@/components/StatusTag";
import Tag from "@/components/Tag";
import AuthorCard from "@/components/AuthorCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tulsikumari.dev";
  const postUrl = `${siteUrl}/posts/${post.slug}`;

  return {
    title: `${post.title} — Tulsi Kumari`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: ["Tulsi Kumari"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6">
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs text-muted hover:text-accent inline-flex items-center gap-1 transition-colors"
        >
          &larr; Back to all writing
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <time className="text-xs text-muted">{formatDate(post.date)}</time>
        <span className="text-xs text-muted/60">&middot;</span>
        <span className="text-xs text-muted">{post.readingTime}</span>
        <StatusTag status={post.status} />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-3">
        {post.title}
      </h1>

      <div className="flex gap-2 mb-8 flex-wrap">
        {post.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div
        className="prose-post text-ink/90"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <AuthorCard />
    </article>
  );
}

