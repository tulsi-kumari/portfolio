import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tulsi-dev.vercel.app";
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
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col md:border-l border-line md:min-h-screen">
            <main className="flex-1 pt-6 md:pt-12 pb-12 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
