import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    keywords: post.frontmatter.keywords,
    image: post.frontmatter.coverImage,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Organization",
      name: post.frontmatter.author ?? siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
    image: post.frontmatter.coverImage ?? `${siteConfig.url}/og-default.png`,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.frontmatter.title, path: `/blog/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbs]} />

      <header className="page-header">
        <span className="section-label">{post.frontmatter.tag ?? "Long Beach Wellness"}</span>
        <h1>{post.frontmatter.title}</h1>
        <p className="page-sub">{post.frontmatter.description}</p>
        <p style={{ color: "var(--text-light)", fontSize: 14, marginTop: 12 }}>
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingMinutes} min read
        </p>
      </header>

      <section className="section">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>

      <section className="cta-banner">
        <h2>Looking for a wellness program in Long Beach?</h2>
        <p>
          Long Beach School of Yoga partners with{" "}
          <a href={siteConfig.mynUrl} style={{ color: "white", textDecoration: "underline" }}>
            My Yoga Network
          </a>{" "}
          to bring corporate wellness, yoga therapy, and hotel guest programming to Long Beach
          businesses.
        </p>
        <a
          href={`${siteConfig.mynUrl}/corporate-wellness-programs`}
          className="btn-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Proposal
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      <section className="section section-alt">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <Link href="/blog" className="btn-secondary">
            ← Back to the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
