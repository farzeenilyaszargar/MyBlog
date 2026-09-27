import Navbar from "@/components/navbar"
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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
                url: "/blog-social-card.png",
                width: 1874,
                height: 1094,
                alt: "Farzeen Ilyas Zargar portfolio preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Farzeen Ilyas Zargar",
        description: "About Farzeen Ilyas Zargar, a software developer building startups, AI tools, web products, and open-source experiments.",
        images: ["/blog-social-card.png"],
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

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">Things I have built</h2>
                <ul className="space-y-3 leading-8 text-[var(--muted)]">
                    <li>🥱 <Link href="https://nap-code.com/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Nap</Link> - run your agents anywhere anytime [+3k users]</li>
                    <li>✈️ <Link href="https://www.superflights.co.in/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">SuperFlights</Link> - optimised flight booking [₹25 Lakh raised]</li>
                    <li>☘️ <Link href="https://www.unleaf.lol/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Unleaf</Link> - online LaTex editor which compiles instantaneously [+1k users]</li>
                    <li>📰 <Link href="https://thelightpost.vercel.app/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">News App</Link> - news feed using ai, api&apos;s and ranking algos</li>
                    <li>👕 <Link href="https://www.lunoirwear.com/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Lunoir Store</Link> - online merchandise enterprise</li>
                    <li>📈 <Link href="https://www.github.com/farzeenilyaszargar/quant" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Quant Algo</Link> - my personal quant trading bot</li>
                    <li>📚 <Link href="https://tayyari.online" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Tayyari | Do JEE Prep</Link> - a jee preparation ai questionaiare [~200 users | Need to optimise and build better iteration]</li>
                    <li>🧑‍💻 <Link href="https://fizlint.vercel.app/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Fizlint</Link> - a live linting cli tool for js and ts</li>
                    <li>📷 <Link href="https://itemio.vercel.app" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Itemio</Link> - identify products from photos, estimate their value, and find marketplace listings</li>
                    <li>⚖️ <Link href="https://caseway.vercel.app" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Caseway</Link> - AI tooling for automating legal and government workflows [underrated project, could scale well]</li>
                    <li>📰 <Link href="https://morvane.vercel.app/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Morvane</Link> - techcrunch website lookalike!</li>
                    <li>⏰ <Link href="https://sip-and-focus-8fbjfc58h-farzeenilyaszargars-projects.vercel.app/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Promodoro Timer</Link> - basic ass timer with classical music</li>
                    <li>📰 <Link href="https://stackflux.online" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Stackflux</Link> - discover and read interesting articles about software, engineering, and technology. just a tech blog.</li>
                    <li>✨ <Link href="https://www.glametric.fun/" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">Glammetrics</Link> - AI-powered facial analysis and appearance scoring [exploring insta ads and products]</li>
                    <li>𝕏 <Link href="https://github.com/farzeenilyaszargar/XExtension" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]">XExtension</Link> - analytics and see stats inline extension on the app itself</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
