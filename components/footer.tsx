import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-sm ">
      <p>© {new Date().getFullYear()} Farzeen Ilyas Zargar</p>
      <div className="flex items-center gap-3 text-[var(--muted)]">
        <Link href="https://x.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.8-6.7L6.5 22H3.4l7.3-8.4L1 2h6.3l4.3 6L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
          </svg>
        </Link>
        <Link href="https://github.com/farzeenilya" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 2.8 3.4 2 .1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.2 3.2.8.8 1.2 1.9 1.2 3.3 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
        </Link>
        <Link href="https://linkedin.com/in/farzeenilya" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3Zm1.8 13.1H3.2V9h3.6v11.5Z" />
          </svg>
        </Link>
        <Link href="mailto:farzeenilyaszargar@gmail.com" aria-label="Email" className="social-icon">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7L4.2 7h15.6L12 12Zm-8 5h16V8.2l-7.4 4.8a1 1 0 0 1-1.1 0L4 8.2V17Z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
