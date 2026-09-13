import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import HighlightGrid from "@/components/HighlightGrid";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-2">
      {/* Intro Hero */}
      <div className="mb-10">
        <p className="text-base sm:text-lg text-ink/85 leading-relaxed max-w-2xl font-normal">
          I'm a Backend Software Engineer at <span className="font-semibold text-ink">Texas Instruments</span> focusing on{" "}
          <span className="font-medium text-ink">transaction correctness</span>,{" "}
          <span className="font-medium text-ink">database &amp; ORM performance engineering</span>, and{" "}
          <span className="font-medium text-ink">distributed systems</span>.
        </p>
      </div>

      {/* Systems & Impact Visual Cards */}
      <HighlightGrid />

      {/* Articles Feed */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-5 pb-2 border-b border-line">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted">
            Technical Writing &amp; Investigations
          </h2>
          <span className="text-xs text-muted font-mono">{posts.length} articles</span>
        </div>

        {posts.length === 0 && (
          <p className="text-sm text-muted py-8 text-center">No posts yet &mdash; check back soon.</p>
        )}
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
      {/* Currently Building */}
      <div className="mt-16 pt-10 border-t border-line">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-8">
          Currently Building &amp; Exploring
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <h3 className="text-[15px] font-bold text-ink mb-2">Raft in Go</h3>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              Leader election &rarr; log replication &rarr; persistence
            </p>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-ink mb-2">Distributed Systems</h3>
            <p className="text-[15px] text-ink/80 leading-relaxed">
              Consistency, Sharding, MapReduce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
