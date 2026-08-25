import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6">
      <p className="text-base text-ink/80 leading-relaxed mb-10 max-w-xl">
        I write about backend systems, transaction correctness, performance
        problems I've actually hit, and things I'm teaching myself along the
        way &mdash; currently distributed systems, one Raft implementation
        at a time.
      </p>

      <div>
        {posts.length === 0 && (
          <p className="text-sm text-muted">No posts yet &mdash; check back soon.</p>
        )}
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
