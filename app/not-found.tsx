import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-10 sm:px-10">
      <p className="text-sm text-[var(--muted)]">404</p>
      <h1 className="font-title mt-2 text-3xl">Not found</h1>
      <Link href="/" className="mt-6 inline-block text-sm underline">
        Back to Home
      </Link>
    </main>
  );
}
