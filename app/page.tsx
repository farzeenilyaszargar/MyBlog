import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
   </div>
  );
}
