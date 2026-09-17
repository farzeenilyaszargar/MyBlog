import Navbar from "@/components/navbar"
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import Footer from "@/components/footer";
import GitHubActivity from "@/components/github-activity";

export const metadata: Metadata = {
    title: "About Farzeen Ilyas Zargar",
    description: "About Farzeen Ilyas Zargar, a software developer building startups, AI tools, web products, and open-source experiments.",
    keywords: [
        "Farzeen Ilyas Zargar",
        "Fizzy",
        "software developer",
        "startup builder",
        "AI tools",
        "SuperFlights",
        "Surfers",
        "Nap Inc",
        "open source",
        "web development",
    ],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Farzeen Ilyas Zargar",
        description: "About Farzeen Ilyas Zargar, a software developer building startups, AI tools, web products, and open-source experiments.",
        url: "/about",
        images: [
            {
                url: "/social-screenshot.png",
                width: 1200,
                height: 630,
                alt: "Journey At Mumbai by Farzeen Ilyas Zargar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Farzeen Ilyas Zargar",
        description: "About Farzeen Ilyas Zargar, a software developer building startups, AI tools, web products, and open-source experiments.",
        images: ["/social-screenshot.png"],
    },
};

export default function About() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 sm:px-0">
            <Navbar />
            <div className="flex flex-col gap-8 border-t border-[var(--line)] py-10 sm:flex-row">
                <div className="flex flex-col gap-8 sm:w-2/3">
                    <h1 className="font-title text-4xl font-bold tracking-tight">About Me</h1>
                    <p className="text-lg text-[var(--ink)]">
                        hi 👋 i am a developer from delhi building cool stuff. i love ml, math, computers and philosophy. currently contemplating the machinations of reality. i enjoy turning abstract ideas into useful products, learning in public, and following questions that sit at the edge of technology and human curiosity.
                    </p>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="resume-link group"
                    >
                        <span>View Resume</span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                        >
                            <path d="M3 8h10" />
                            <path d="m9 4 4 4-4 4" />
                        </svg>
                    </Link>
                </div>
                <div className="mx-auto sm:ml-10 sm:w-1/3">
                    <Image
                        src="/about-profile.png"
                        alt="Farzeen Ilyas Zargar"
                        width={400}
                        height={600}
                        priority
                        sizes="(max-width: 640px) 280px, 33vw"
                        className="h-auto w-full max-w-[280px] rounded-xl  object-cover profile-image"
                    />
                </div>
            </div>

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">GitHub Activity</h2>
                <p className="text-[var(--muted)]">
                    Recent coding activity of my GitHub profile.
                </p>
                <GitHubActivity />

            </div>

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">Notable Projects & Companies</h2>
                <p className="text-[var(--muted)]">
                    Though I have worked on several projects and companies, here are some of the most notable ones.
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group relative block overflow-hidden rounded-2xl"
                            aria-label={project.title}
                        >
                            <div className="relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={640}
                                    height={420}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/35 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="font-title text-3xl font-semibold text-white transition-all duration-300">
                                        {project.title}
                                    </p>
                                    <p className="mt-1 hidden translate-y-2 text-sm font-medium text-gray-200 transition-all duration-300 group-hover:block group-hover:translate-y-0">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>
                            
                        </Link>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    );
}
