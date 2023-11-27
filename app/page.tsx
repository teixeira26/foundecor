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
    <a href="https://wa.link/ya5vf9" target="_blank">
    <Image className="sticky right-8 bottom-8 z-30" alt="ícono de whatsapp" width={64} height={64} src={'/whatsapp.png'}></Image>
    </a>
    <footer className="bg-[#fa47b7] w-[100vw] absolute left-0 text-white text-[11px] mt-8">
      
    <h3 className="pt-4 font-nunito text-[#47fa8a] text-[36px] font-semibold flex justify-center">
          <span className="text-white">Found</span>ecor
        </h3>
        <p className="py-4 px-4 text-center">Copyright © {new Date().getFullYear()} Foundecor</p>
    </footer>
    </main>
  );
}
