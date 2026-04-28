import Navbar from "@/components/navbar"
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Footer from "@/components/footer";

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
                    <Link href="/resume.pdf" target="_blank" rel="noreferrer" className="w-[200px] rounded-lg border px-3 py-2 text-sm flex justify-center items-center gap-1 text-[--muted] border-[--muted] hover:bg-[var(--code-inline-bg)] transition-colors">
                        <p>View My Resume</p>
                        <Image src="/link.png" alt="External Link Icon" width={10} height={10} className="scale-x-[-1] w-3 h-3 " />
                    </Link>
                </div>
                <div className="mx-auto sm:ml-10 sm:w-1/3">
                    <Image
                        src="/meee.png"
                        alt="Profile Picture"
                        width={400}
                        height={600}
                        className="h-auto w-full max-w-[280px] rounded-xl  object-cover profile-image"
                    />
                </div>
            </div>

            <div className="space-y-5 border-t border-[var(--line)] py-10">
                <h2 className="font-title text-3xl font-semibold tracking-tight">GitHub Activity</h2>
                <p className="text-[var(--muted)]">
                    Recent coding activity of my GitHub profile.
                </p>
                <div className="space-y-4">
                    <Link
                        href="https://github.com/farzeenilyaszargar"
                        target="_blank"
                        rel="noreferrer"
                        className="block overflow-hidden"
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
                            <div className="space-y-3 border border-t-0 border-[var(--line)] bg-[var(--card-bg)] p-4">
                                <p className="text-sm text-[var(--muted)]">
                                    {project.summary}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.slice(0, 3).map((item) => (
                                        <span
                                            key={`${project.slug}-${item}`}
                                            className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
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
