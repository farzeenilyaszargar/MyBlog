import Navbar from "@/components/navbar"
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 sm:px-0">
            <Navbar />
            <div className="flex flex-col gap-8 border-t border-[var(--line)] py-10 sm:flex-row">
                <div className="flex flex-col gap-8 sm:w-2/3">
                    <h1 className="font-title text-4xl font-bold tracking-tight">About Me</h1>
                    <p className="text-lg text-[var(--muted)]">
                        Hi, I&apos;m Farzeen Ilyas Zargar, a passionate software developer and lifelong learner. I have a strong interest in web development, machine learning, and open-source software. I enjoy building projects that solve real-world problems and contribute to the tech community.
                    </p>
                    <p className="text-lg text-[var(--muted)]">
                        In my free time, I like to explore new technologies, read about advancements in AI, and work on personal projects. I&apos;m always eager to connect with like-minded individuals and collaborate on exciting ventures.
                    </p>
                </div>
                <div className="mx-auto sm:ml-10 sm:w-1/3">
                    <Image
                        src="/meee.png"
                        alt="Profile Picture"
                        width={400}
                        height={600}
                        className="h-auto w-full max-w-[280px] rounded-xl  object-cover"
                    />
                </div>
            </div>

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">GitHub Activity</h2>
                <p className="text-[var(--muted)]">
                    Recent coding activity from my open-source work.
                </p>
                <div className="space-y-4">
                    <Link
                        href="https://github.com/farzeenilyaszargar"
                        target="_blank"
                        rel="noreferrer"
                        className="block overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card-bg)] transition-transform duration-200 hover:-translate-y-1"
                    >
                        <Image
                            src="https://ghchart.rshah.org/22c55e/farzeenilyaszargar"
                            alt="Farzeen's GitHub contribution lights in green"
                            width={1000}
                            height={180}
                            className="h-auto w-full"
                            unoptimized
                        />
                    </Link>
                </div>
                
            </div>

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">Connect With Me</h2>
                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="mailto:farzeenilyaszargar@gmail.com"
                        aria-label="Email"
                        className="social-icon rounded-full  p-3 transition-colors hover:bg-[var(--code-inline-bg)]"
                    >
                        <Image src="/email.png" alt="Email" width={28} height={28} />
                    </Link>
                    <Link
                        href="https://github.com/farzeenilyaszargar"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="social-icon rounded-full  p-3 transition-colors hover:bg-[var(--code-inline-bg)]"
                    >
                        <Image src="/github.png" alt="GitHub" width={28} height={28} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/farzeenilyaszargar"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="social-icon rounded-full  p-3 transition-colors hover:bg-[var(--code-inline-bg)]"
                    >
                        <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
                    </Link>
                    <Link
                        href="https://x.com/farzeenilya"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="X"
                        className="social-icon rounded-full  p-3 transition-colors hover:bg-[var(--code-inline-bg)]"
                    >
                        <Image src="/x.png" alt="X" width={28} height={28} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
