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
    <footer className="bg-[#ff0000] w-[100vw] absolute left-0 text-white text-[11px] mt-8">
      <p className="py-8 px-4">Foundecor {new Date().getFullYear()}, todos los derechos reservados</p>
    </footer>
    </main>
  );
}
