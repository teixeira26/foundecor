'use client'
import Image from "next/image";
import React, { useRef } from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="pt-16">
              <hr className="pt-8" />
    <h2 className="text-center font-Nunito font-bold text-[20px] pt-8 opacityScrollAnimation">Descubre Nuestra Selección Exclusiva</h2>
    <article className="text-center opacityScrollAnimation">
      <div className="flex justify-center py-4 items-center h-[190px]">
      <div className="flex justify-center py-4 bg-[#f8202050] w-[120px] h-[120px] rounded-[5px] z-10 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f8202090] w-[112px] h-[112px] rounded-[5px] z-20 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f82020] w-[104px] h-[104px] rounded-[5px] z-30 items-center absolute rotate-45"></div>
        <div className="z-40 invert">
        <Image width={64} height={64} src="/calidad.png" alt="ícono de una medalla" />

        </div>
      </div>
      <h3 className="pb-4 font-fanwood font-bold text-[16px] opacityScrollAnimation">Fondant para Repostería de Alta Calidad</h3>
      <p className="font-hind text-[#00000090] opacityScrollAnimation">Nuestro fondant ofrece calidad excepcional para decorar pasteles con facilidad y lograr resultados sorprendentes.</p>
    </article>
    <article className="text-center pt-4">
      <div className="flex justify-center py-4 items-center h-[190px] opacityScrollAnimation">
      <div className=" flex justify-center py-4 bg-[#f8202050] w-[120px] h-[120px] rounded-[5px] z-10 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f8202090] w-[112px] h-[112px] rounded-[5px] z-20 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f82020] w-[104px] h-[104px] rounded-[5px] z-30 items-center absolute rotate-45"></div>
        <div className="z-40 invert">
        <Image width={64} height={64} src="/escultura.png" alt="ícono de una escultura" />

        </div>
      </div>
      <h3 className="pb-4 opacityScrollAnimation font-fanwood font-bold text-[16px]">Pasteles Personalizados con Pasta Americana</h3>
      <p className="font-hind opacityScrollAnimation text-[#00000090]">Nuestra pasta americana de calidad garantiza detalles visuales y sabores excepcionales para tus celebraciones.</p>
    </article>
    <article className="text-center pt-4">
      <div className="flex justify-center py-4 items-center h-[190px] opacityScrollAnimation">
      <div className="flex justify-center py-4 bg-[#f8202050] w-[120px] h-[120px] rounded-[5px] z-10 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f8202090] w-[112px] h-[112px] rounded-[5px] z-20 items-center absolute rotate-45"></div>
        <div className="flex justify-center py-4 bg-[#f82020] w-[104px] h-[104px] rounded-[5px] z-30 items-center absolute rotate-45"></div>
        <div className="z-40 invert">
        <Image width={64} height={64} src="/mariposas.png" alt="ícono de dos mariposas con brillos" />

        </div>
      </div>
      <h3 className="pb-4 font-fanwood font-bold text-[16px] opacityScrollAnimation">Figuras y Modelado en Fondant</h3>
      <p className="font-hind text-[#00000090] opacityScrollAnimation">Desde adorables figuras hasta elegantes adornos, encuentra la herramienta perfecta para expresar tu creatividad.</p>
    </article>
  </section>
  );
}
