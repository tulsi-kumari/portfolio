import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tulsikumari.dev";

  const itemsXml = posts
    .map((post) => {
      const fullPost = getPostBySlug(post.slug);
      const postUrl = `${siteUrl}/posts/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      ${post.tags.map((t) => `<category>${t}</category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tulsi Kumari — Backend Software Engineer</title>
    <link>${siteUrl}</link>
    <description>Notes on backend engineering, transaction correctness, performance engineering, and distributed systems.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
