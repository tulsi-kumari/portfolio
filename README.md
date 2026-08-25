# Tulsi Kumari — Portfolio & Writing

A minimal Next.js site: a short "writing" feed of real posts (production
incidents, things learned, self-study notes) plus an About page and a
Resume page. Structurally similar to andreagrandi.it, rebuilt as a
Next.js/React app instead of Hugo.

## Getting started locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  page.tsx              -> home page, lists all posts
  about/page.tsx         -> About page
  resume/page.tsx         -> Resume page (expects /public/resume.pdf)
  posts/[slug]/page.tsx  -> individual post page, renders markdown
  layout.tsx             -> shared header/footer shell
  globals.css            -> design tokens + typography for post content
components/
  Header.tsx, Footer.tsx, PostCard.tsx, Tag.tsx, StatusTag.tsx
lib/
  posts.ts               -> reads & parses markdown files from content/posts
content/
  posts/*.md             -> your actual posts, one file per post
```

## Adding a new post

Create a new file in `content/posts/`, e.g. `content/posts/my-new-post.md`:

```md
---
title: "Your Post Title"
date: "2026-08-01"
excerpt: "One or two sentences shown in the list view."
tags: ["Java", "Performance"]
status: "shipped"
---

Your content here, in normal markdown.
```

`status` is optional and can be `shipped`, `in-progress`, or `note` — it
renders as a small colored badge. Leave it out if you don't want a badge.

The post list on the home page sorts by `date`, newest first, automatically
— no manual index to maintain.

## Adding your resume

Drop your resume PDF into `public/resume.pdf` (exact filename). The
`/resume` page already links and embeds it — no code changes needed.

## Before you deploy — personalize these

- `components/Header.tsx` — update the GitHub/LinkedIn URLs if they change,
  and swap the "TK" avatar circle for an actual photo if you want one
  (replace it with an `<img>` pointing at something in `/public`).
- `app/about/page.tsx` — this is drafted from what we've discussed; read
  through and adjust anything that doesn't sound like you.
- `content/posts/*.md` — all four are real technical content drafted from
  your actual work, but the **dates are placeholders**. Adjust them to
  whenever you actually publish each one, and add new posts over time
  rather than backdating everything at once.
- `app/layout.tsx` — update the `metadataBase` / add your real domain once
  you have one, for correct social-share previews.

## Deploying to Vercel

Since you already have Vercel connected:

```bash
npm install -g vercel   # if not already installed
vercel
```

Or push this to a GitHub repo and import it in the Vercel dashboard the
normal way — either works identically since this is a standard Next.js
app with no special build config.

## A note on content honesty

The Raft post is deliberately framed as in-progress, and the AI cost post
is framed as an open question rather than a solved one. Keep that framing
as you write more — the credibility of this whole site comes from it
reading like an accurate running log, not a highlight reel. That's also
what makes it different from a generic portfolio.
