import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Fizzy's Blog",
    };
  }

  return {
    title: `${post.title} | Fizzy's Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto mb-4 flex min-h-screen w-full max-w-3xl flex-col">
      <Navbar />

      <article className=" border-t border-[var(--line)] py-10">
        <h1 className="font-title text-4xl font-semibold leading-tight">{post.title}</h1>
        <div className="mt-3 text-sm text-[var(--muted)]">{formatDate(post.date)}</div>

        <div className="prose-block mt-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
            components={{
              h1: ({ children }) => <h1 className="font-title text-4xl font-bold leading-tight">{children}</h1>,
              h2: ({ children }) => <h2 className="font-title text-3xl font-bold leading-tight">{children}</h2>,
              h3: ({ children }) => <h3 className="font-title text-2xl font-bold leading-tight">{children}</h3>,
              h4: ({ children }) => <h4 className="font-title text-xl font-bold leading-tight">{children}</h4>,
              strong: ({ children }) => <strong className="font-bold text-[var(--ink)]">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <Footer />
    </main>
  );
}
