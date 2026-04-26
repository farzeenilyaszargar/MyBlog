import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col">
      <div className="flex flex-col ">
        <Navbar />  
        <Hero />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}
