import Image from "next/image"

export default function Hero() {
    return (
        <section className="flex items-center justify-between gap-5 border-b border-t border-[var(--line)] py-7 max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:py-5">
            <Image
                src="/profile.png"
                alt="Profile Picture"
                width={150}
                height={150}
                className="profile-image rounded-full scale-x-[-1] max-sm:w-[112px]"
                style={{ width: "150px", height: "auto" }}
            />


            <div className="flex flex-col  sm:text-left text-center ">
                <h1 className="font-title mt-2 text-4xl font-semibold max-sm:mt-0 max-sm:text-3xl">Hi, I&apos;m @farzeenilyaszargar</h1>
                <p className="mt-3 text-base leading-8 text-[var(--muted)] max-sm:text-[15px] max-sm:leading-7">
                    I like to write about programming, technology, and more. I also like building things and sharing my thoughts on the internet. 
                </p>
                <div className="mt-3 flex items-center gap-3 text-[var(--muted)] justify-start max-sm:justify-center">
                    <a href="https://x.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
                        <Image src="/x.png" alt="X" width={24} height={24} />
                    </a>
                    <a href="https://github.com/farzeenilyaszargar" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                        <Image src="/github.png" alt="GitHub" width={24} height={24} />
                    </a>
                    <a href="https://linkedin.com/in/farzeenilyaszargar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
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
