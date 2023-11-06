import React from "react";

type Props = {};

export default function Initial({}: Props) {
  return (
    <section className="z-10 relative text-white pt-6 flex flex-col gap-4 items-center text-center">
      <h2 className="text-[32px] font-nunito font-bold">
        <span className=" border-b-solid border-b-4 border-b-[#16a34a]">
          Crea
        </span>{" "}
        y decora tus propias tortas con pasta americana
      </h2>
      <aside className="flex gap-4">
        <div className="flex flex-col gap-2 justify-baseline font-fanwood ">
            <p className="text-[#16a34a] text-[32px] text-left max-w-[80px]">18+</p>
            <p className="text-white text-[16px] text-left max-w-[80px]">Años en el mercado</p>
        </div>
        <div className="flex flex-col gap-2 justify-baseline font-fanwood ">
            <p className="text-[#16a34a] text-[32px] text-left max-w-[100px]">1000+</p>
            <p className="text-white text-[16px] text-left max-w-[100px]">Ventas en Mercado Libre</p>
        </div>
        <div className="flex flex-col gap-1 justify-baseline font-fanwood ">
            <p className="text-[#16a34a] text-[32px] text-left max-w-[80px]">200 +</p>
            <p className="text-white text-[16px] text-left max-w-[80px]">Evaluaciones positivas</p>
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
