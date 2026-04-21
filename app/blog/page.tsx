import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = buildMetadata({
  title: "Long Beach Wellness Blog — Events, Yoga Therapy, Corporate Wellness",
  description:
    "Weekly updates on Long Beach wellness events, yoga therapy insights, and corporate wellness strategies for local companies.",
  path: "/blog",
  keywords: [
    "long beach wellness blog",
    "long beach yoga blog",
    "long beach events",
    "long beach wellness events",
    "yoga therapy blog",
  ],
});

export default async function BlogIndex() {
  const posts = await getAllPostsMeta();

  return (
    <>
      <header className="page-header">
        <span className="section-label">Long Beach Wellness Blog</span>
        <h1>Wellness Insights from Long Beach</h1>
        <p className="page-sub">
          Weekly writing on Long Beach events, yoga therapy for real health
          conditions, and corporate wellness programs for local businesses.
        </p>
      </header>

      <section className="section">
        <div className="section-inner">
          {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>
              No posts yet — first weekly post drops soon.
            </p>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => (
                <article key={p.slug} className="blog-card">
                  <div className="blog-card-image">
                    <span>{p.tag ?? "Long Beach Wellness"}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-tag">{p.tag ?? "Wellness"}</div>
                    <h3>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p>{p.description}</p>
                    <p style={{ fontSize: 13, color: "var(--text-light)", marginTop: 12 }}>
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      · {p.readingMinutes} min read
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
