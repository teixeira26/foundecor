import React from "react";

type Props = {};

export default function Initial({}: Props) {
  return (
    <section className="z-10 relative text-white pt-6 flex flex-col gap-4 items-center text-center animate-fade">
      <h1 className="text-[32px] font-nunito font-bold">
        Conocé la <span className=" border-b-solid border-b-4 border-b-[#16a34a]">{" "}mejor
        </span>{" "}
        pasta para cubrir tortas.
      </h1>
      <aside className="flex gap-4">
        <div className="flex flex-col gap-2 justify-baseline font-fanwood ">
            <p className="text-[#16a34a] text-[32px] max-w-[140px] text-center">18+</p>
            <p className="text-white text-[16px] max-w-[140px] text-center">Años en el mercado</p>
        </div>
        <div className="flex flex-col gap-2 justify-baseline font-fanwood ">
            <p className="text-[#16a34a] text-[32px] max-w-[140px] text-center">1000+</p>
            <p className="text-white text-[16px] max-w-[140px] text-center">Ventas en Mercado Libre</p>
        </div>
        <div className="flex flex-col gap-1 justify-baseline font-fanwood text-center ">
            <p className="text-[#16a34a] text-[32px] max-w-[140px] text-center">200 +</p>
            <p className="text-white text-[16px] max-w-[140px] text-center">Evaluaciones positivas</p>
        </div>
      </aside>
      <button className="px-4 py-2 bg-[#16a34a] font-hind rounded-[5px]">
        Comprar
      </button>
      <img
        className="ball"
        src="./blanco.png"
        alt="Imagen de la pasta Decor en su version blanca"
        title="pasta Blanca"
      />
    </section>
  );
}
