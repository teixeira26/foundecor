import About from "@/organisms/about";
import Initial from "@/organisms/initial";
import Navbar from "@/organisms/navbar";
import Products from "@/organisms/products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-8">
      <div className="skewed w-full z-0"></div>
      <Navbar/>
     <Initial/>
     <About/>
    <Products/>
    </main>
  );
}
