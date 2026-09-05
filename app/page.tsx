import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farzeen's Blog",
  description: "Personal essays and notes by Farzeen Ilyas Zargar on startups, software, AI tools, distribution, and building things on the internet.",
  keywords: [
    "Farzeen Ilyas Zargar",
    "Fizzy blog",
    "startup essays",
    "software developer blog",
    "AI tools",
    "indie startup",
    "SuperFlights",
    "startup distribution",
    "Mumbai startup journey",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farzeen's Blog",
    description: "Personal essays and notes by Farzeen Ilyas Zargar on startups, software, AI tools, distribution, and building things on the internet.",
    url: "/",
    images: [
      {
        url: "/social-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Journey At Mumbai by Farzeen Ilyas Zargar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzeen's Blog",
    description: "Personal essays and notes by Farzeen Ilyas Zargar on startups, software, AI tools, distribution, and building things on the internet.",
    images: ["/social-screenshot.png"],
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
