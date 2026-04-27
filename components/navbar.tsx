import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-title text-2xl font-semibold tracking-tight">
          fizzy
        </Link>
        
        <div className="flex justify-between items-center gap-5">
          <Link href="/about" className="text-md font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
