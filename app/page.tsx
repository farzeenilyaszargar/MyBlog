import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farzeen's Blog",
  description: "Blogs by Farzeen Ilyas Zargar. Notes, research, and thoughts on various topics.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farzeen's Blog",
    description: "Blogs by Farzeen Ilyas Zargar. Notes, research, and thoughts on various topics.",
    url: "/",
    images: [{ url: "/og-image.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzeen's Blog",
    description: "Blogs by Farzeen Ilyas Zargar. Notes, research, and thoughts on various topics.",
    images: ["/og-image.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col max-sm:px-4">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}
