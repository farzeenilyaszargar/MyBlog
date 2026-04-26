import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" flex justify-center items-center flex-col">
    <div className="sm:w-175 gap-10 flex flex-col">

      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
    </div>
   </div>
  );
}
