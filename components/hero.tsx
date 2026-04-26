import Image from "next/image"

export default function Hero() {
    return (
        <section className="border-b border-t border-[var(--line)] py-7 flex gap-5 justify-between items-center">
            <Image
                src="/profile.png"
                alt="Profile Picture"
                width={150}
                height={150}
                className="profile-image rounded-full scale-x-[-1]"
                style={{ width: "150px", height: "auto" }}
            />


            <div className="flex flex-col ">
                <h1 className="font-title mt-2 text-4xl font-semibold">Hi, I&apos;m @farzeenilyaszargar</h1>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                    I like to write about programming, technology, and more. I also like building things and sharing my thoughts on the internet. 
                </p>
                <div className="mt-3 flex items-center gap-3 text-[var(--muted)]">
                    <a href="https://x.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
                        <Image src="/x.png" alt="X" width={24} height={24} />
                    </a>
                    <a href="https://github.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                        <Image src="/github.png" alt="GitHub" width={24} height={24} />
                    </a>
                    <a href="https://linkedin.com/in/farzeenilya" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                        <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                    </a>
                    <a href="mailto:farzeenilyaszargar@gmail.com" aria-label="Email" className="social-icon">
                        <Image src="/email.png" alt="Email" width={24} height={24} />
                    </a>
                </div>
            </div>

        </section>
    );
}
