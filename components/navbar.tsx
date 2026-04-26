import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-title text-2xl font-semibold tracking-tight">
          fizzy
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
