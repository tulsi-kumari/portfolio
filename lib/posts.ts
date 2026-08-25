import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// Configure marked with highlight.js renderer
const renderer = new marked.Renderer();
renderer.code = function (args: any) {
  const text = typeof args === "string" ? args : args.text;
  const lang = typeof args === "object" ? args.lang : arguments[1];
  const validLang = lang && hljs.getLanguage(lang) ? lang : null;
  const highlighted = validLang
    ? hljs.highlight(text, { language: validLang }).value
    : hljs.highlightAuto(text).value;
  return `<div class="code-block-wrapper my-5 rounded-lg overflow-hidden border border-[#2d333b]">
    <div class="flex items-center justify-between px-4 py-1.5 bg-[#161b22] text-[#8b949e] text-xs font-mono border-b border-[#2d333b]">
      <span>${validLang || "code"}</span>
    </div>
    <pre class="bg-[#0d1117] p-4 overflow-x-auto text-sm text-[#c9d1d9] m-0"><code class="hljs ${validLang || ""}">${highlighted}</code></pre>
  </div>`;
};

marked.use({ renderer });

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  status?: "shipped" | "in-progress" | "note";
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
  rawContent: string;
};

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function readSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = readSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(POSTS_DIR, `${slug}.md`);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) || [],
      status: data.status as PostMeta["status"],
      readingTime: calculateReadingTime(content),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content) as string;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) || [],
    status: data.status as PostMeta["status"],
    readingTime: calculateReadingTime(content),
    contentHtml,
    rawContent: content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

