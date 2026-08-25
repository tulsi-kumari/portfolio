import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tulsikumari.dev";

export const metadata: Metadata = {
  title: {
    default: "Tulsi Kumari — Backend Software Engineer",
    template: "%s | Tulsi Kumari",
  },
  description:
    "Notes on backend engineering, transaction correctness, database performance, and distributed systems.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    title: "Tulsi Kumari — Backend Software Engineer",
    description:
      "Notes on backend engineering, transaction correctness, database performance, and distributed systems.",
    url: siteUrl,
    siteName: "Tulsi Kumari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulsi Kumari — Backend Software Engineer",
    description:
      "Notes on backend engineering, transaction correctness, database performance, and distributed systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Tulsi Kumari's Blog RSS Feed"
          href="/feed.xml"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
