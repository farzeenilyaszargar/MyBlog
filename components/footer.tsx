import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-sm ">
      <p>© {new Date().getFullYear()} Farzeen Ilyas Zargar</p>
      <div className="flex gap-4">
        <Link href="https://x.com/farzeenilya" target="_blank" rel="noreferrer">
          X
        </Link>
        <Link href="https://github.com/farzeenilya" target="_blank" rel="noreferrer">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/farzeenilya" target="_blank" rel="noreferrer">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
