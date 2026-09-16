"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-title text-2xl font-semibold tracking-tight">
          fizzy
        </Link>
        
        <div className="font-ui flex items-center justify-between gap-5">
          <Link
            href="/about"
            className={`text-md font-medium text-[var(--muted)] hover:text-[var(--ink)] ${isAboutPage ? "underline decoration-2 underline-offset-4 decoration-wavy decoration-[var(--muted)]" : ""}`}
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
