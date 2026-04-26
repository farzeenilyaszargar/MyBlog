import type { Metadata } from "next";
import { Source_Serif_4, Playfair_Display } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Farzeen's Blog",
  description: "Blogs by Farzeen Ilyas Zargar. Notes, research, and thoughts on various topics.",
  keywords: ["blog", "fizzy", "farzeen", "notes", "research", "farzeen ilyas zargar", "fizzy's blog", "farzeen's blog", "thoughts", "articles"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
