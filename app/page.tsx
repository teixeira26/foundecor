import Initial from "@/organisms/initial";
import Navbar from "@/organisms/navbar";

export default function Home() {
  return (
    <main className="px-8">
      <div className="skewed w-full z-0"></div>
      <Navbar/>
     <Initial/>
    </main>
  );
}
