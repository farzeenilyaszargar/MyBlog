import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-4 text-sm max-sm:flex-col max-sm:items-start max-sm:gap-3">
      <p className="max-sm:text-xs">© {new Date().getFullYear()} Farzeen Ilyas Zargar</p>
      <div className="flex items-center gap-3 text-[var(--muted)]">
        <Link href="https://x.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
          <Image src="/x.png" alt="X" width={24} height={24} />
        </Link>
        <Link href="https://github.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com/in/farzeenilya" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="mailto:farzeenilyaszargar@gmail.com" aria-label="Email" className="social-icon">
          <Image src="/email.png" alt="Email" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
}
