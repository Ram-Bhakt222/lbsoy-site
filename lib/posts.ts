import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string; // ISO
  tag?: string;
  author?: string;
  coverImage?: string;
  keywords?: string[];
  city?: string; // e.g. "Long Beach"
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  html: string;
  readingMinutes: number;
}

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
}

export function getAllPostSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDir();
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);
  const html = processed.toString();
  const words = content.split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(words / 220));

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    html,
    readingMinutes,
  };
}

export async function getAllPostsMeta(): Promise<(PostFrontmatter & { slug: string; readingMinutes: number })[]> {
  ensureDir();
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) return null;
      return { slug, readingMinutes: post.readingMinutes, ...post.frontmatter };
    })
  );
  return posts
    .filter((p): p is PostFrontmatter & { slug: string; readingMinutes: number } => Boolean(p) && !p!.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
