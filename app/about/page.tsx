import Navbar from "@/components/navbar"
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import GitHubActivity from "@/components/github-activity";
import { socialImage } from "@/lib/social-image";
import BuiltProjects from "@/components/built-projects";

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
        images: [socialImage],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Farzeen Ilyas Zargar",
        description: "About Farzeen Ilyas Zargar, a software developer building startups, AI tools, web products, and open-source experiments.",
        images: [socialImage.url],
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
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                        src="/about-profile.webp"
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

            <BuiltProjects />
            <Footer />
        </div>
    );
}
