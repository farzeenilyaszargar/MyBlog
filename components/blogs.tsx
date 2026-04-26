import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function Blogs() {
  const posts = getAllPosts();

  return (
    <section className="space-y-4 py-4">
      {posts.map((post) => (
        <article key={post.slug} className="py-1">
          <h3 className="font-title mt-2 text-2xl leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs tracking-[0.04em] ">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h3V2Zm12 8H5v10h14V10ZM6 8h12V6H6v2Z" />
            </svg>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>•</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <p className="mt-2 leading-7">{post.summary}</p>
        </article>
      ))}
    </section>
  );
}
