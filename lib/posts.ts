import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & {
  content: string;
};

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

function getMarkdownFiles() {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  return fs.readdirSync(BLOGS_DIR).filter((file) => file.endsWith(".md"));
}

function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(BLOGS_DIR, fileName), "utf8");
  const { data, content } = matter(source);
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 220));

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    summary: typeof data.summary === "string" ? data.summary : "",
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    readingMinutes,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getMarkdownFiles()
    .map(parsePost)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      summary: post.summary,
      tags: post.tags,
      readingMinutes: post.readingMinutes,
    }));
}

export function getPostBySlug(slug: string): Post | null {
  const fileName = `${slug}.md`;
  const fullPath = path.join(BLOGS_DIR, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return parsePost(fileName);
}

export function getPostSlugs() {
  return getMarkdownFiles().map((file) => file.replace(/\.md$/, ""));
}
