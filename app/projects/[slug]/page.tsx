import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto mb-4 flex min-h-screen w-full max-w-3xl flex-col px-4 sm:px-0">
      <Navbar />
      <section className="border-t border-[var(--line)] py-8 sm:py-12">
        <div className="mb-10 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          <Link href="/about" className="transition-colors hover:text-[var(--ink)]">
            <span aria-hidden="true">←</span> About
          </Link>
          <span>Project / {project.slug}</span>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Featured project</p>
          <h1 className="font-title text-5xl font-semibold leading-[1.05] tracking-tight max-sm:text-4xl">{project.title}</h1>
          <p className="max-w-2xl text-xl leading-8 text-[var(--muted)] max-sm:text-lg max-sm:leading-7">{project.subtitle}</p>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={960}
          height={560}
          sizes="(max-width: 768px) 100vw, 768px"
          className="mt-10 h-auto w-full rounded-3xl border border-[var(--line)] bg-[var(--card-bg)] p-2 object-cover shadow-[0_14px_40px_rgba(43,38,33,0.08)] sm:p-3"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_13rem] md:gap-10">
          <div className="space-y-10">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card-bg)] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">About the project</p>
              <p className="mt-5 text-xl leading-9 text-[var(--ink)] max-sm:text-lg max-sm:leading-8">{project.summary}</p>
              <div className="mt-7 border-t border-[var(--line)] pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">The idea</p>
                <p className="mt-3 leading-8 text-[var(--muted)]">{project.overview}</p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
                <h2 className="font-title text-3xl font-semibold tracking-tight">What I worked on</h2>
                <span className="text-sm text-[var(--muted)]">{project.details.length} highlights</span>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {project.details.map((detail, index) => (
                  <li key={detail} className="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card-bg)] p-4 leading-7 text-[var(--muted)]">
                    <span className="font-title text-lg font-semibold text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-[var(--line)] bg-[var(--card-bg)] p-5 md:sticky md:top-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Focus areas</p>
            <div className="mt-4 flex flex-wrap gap-2 md:flex-col md:items-start">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--paper-bg)] px-3 py-1.5 text-sm text-[var(--ink)]">
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
