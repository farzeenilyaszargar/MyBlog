import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="space-y-8 border-t border-[var(--line)] py-10">
        

        <div className="space-y-3 text-center">
          <h1 className="font-title text-4xl font-semibold leading-tight">{project.title}</h1>
          <p className="text-lg text-[var(--muted)]">{project.subtitle}</p>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={960}
          height={560}
          className="mx-auto h-auto w-full max-w-2xl rounded-2xl border border-[var(--line)] object-cover"
        />

        <div className="space-y-5 rounded-2xl  p-6">
          <p className="leading-8 text-[var(--muted)]">{project.summary}</p>
          <p className="leading-8 text-[var(--muted)]">{project.overview}</p>
          <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          
        </div>
      </section>
      <Footer />
    </main>
  );
}
