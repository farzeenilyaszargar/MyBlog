import Image from "next/image"

export default function Hero() {
    return (
        <section className=" border-b border-t border-(--line)] py-7 flex gap-5 justify-between items-center">
            <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full " />


            <div className="flex flex-col ">
                <h1 className="font-title mt-2 text-4xl font-semibold">Hi, I&apos;m @farzeenilyaszargar</h1>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                    I like to write about programming, technology, and more. I also like building things and sharing my thoughts on the internet. 
                </p>
                <div className="flex">
                    <a href="https://x.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/x.png" alt="X" width={24} height={24} /></a>
                    <a href="github.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/github.png" alt="GitHub" width={24} height={24} /></a>
                    <a href="linkedin.com/in/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
                    <a href="mailto:farzeenilyaszargar@gmail.com" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/email.png" alt="Email" width={24} height={24} /></a>
                </div>
            </div>
        </section>
    );
}
