"use client";
import useObserver from "@/app/utils/observer";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

export default function Products({}: Props) {
  const [color, setColor] = useState("rojo.webp");

  let colorMenu = useRef() as any;
  const showClass = useObserver(colorMenu);
  return (
    <>
    <section className="pt-16">
      <hr className="pt-8" />
      <h2 className="text-center font-Nunito font-bold text-[20px] pb-4 pt-8  opacityScrollAnimation">
        Variedad de Colores y Texturas
      </h2>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation">Desde tonos vibrantes hasta opciones versátiles, nuestra variedad te permite personalizar tus creaciones de repostería de manera única.</p>
      <h2 className="text-center font-Nunito font-bold text-[20px] pb-4 pt-8  opacityScrollAnimation">
        Pasta Americana
      </h2>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Envase:</span> 200gr, 500gr, 1kg o 3,5kg
</p>


      <div className="pt-4 flex justify-center">
        <img className={`w-[250px] h-[250px] opacityAnimation ${color.split(' ')[1]? 'opacity-[30%]' : ''}`} src={`./${color.split(' ')[0]}`} alt="" />
      </div>
      <aside ref={colorMenu} className={`flex space-x-4 flex-wrap justify-between my-4 ${showClass ? 'animate-fade-right' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
        <button onClick={()=>{
          setColor('blanco.png 30')
          setTimeout(()=>{
            setColor('rojo.webp')
          },200)
         }} className="w-6 h-6 bg-[#CD2117] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Rojo"></button>
      <p title="Rojo" className="font-hind text-[#00000090] text-center max-w-[40px] overflow-hidden text-ellipsis">Rojo</p>
        </div>
        <div className="flex flex-col items-center">
        <button onClick={()=>{
          setColor('blanco.png 30')
          setTimeout(()=>{
            setColor('azul.webp')
          }, 200)
         }} className="w-6 h-6 bg-[#0000ff] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Azul"></button>
        <p title="Azul" className="font-hind text-[#00000090] text-center max-w-[40px] overflow-hidden text-ellipsis">Azul</p>
        </div>
        <div className="flex flex-col items-center">
        <button onClick={()=>{
          setColor('blanco.png 30')
          setTimeout(()=>{
            setColor('verde.webp')
          }, 200)
          }} className="w-6 h-6 bg-[#379358] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Verde"></button>
        <p title="Verde" className="font-hind text-[#00000090] text-center max-w-[40px] overflow-hidden text-ellipsis">Verde</p>
        </div>
        <div className="flex flex-col items-center">
        <button onClick={()=>{
          setColor('blanco.png 30')
          setTimeout(()=>{
            setColor('celeste.webp')
          }, 200)
          }} className="w-6 h-6 bg-[rgb(37,150,242)] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Celeste"></button>
        <p title="Celeste" className="font-hind text-[#00000090] text-center max-w-[40px] overflow-hidden text-ellipsis">Celeste</p>
        </div>
        <div className="flex flex-col items-center">
        <button onClick={()=>{
          setColor('blanco.png 30')
          setTimeout(()=>{
            setColor('blanco.png')
          }, 100)
          }} className="w-6 h-6 bg-[#FFFFFF] border-[1px] border-black rounded-full hover:scale-[1.1]" title="blanco"></button>
        <p title="Blanco" className="font-hind text-[#00000090] text-center max-w-[40px] overflow-hidden text-ellipsis">Blanco</p>
        </div>
        
     
        
       
      </aside>
    </section>
    <section>
         <h2 className="text-center font-Nunito font-bold text-[20px] pb-4 pt-8  opacityScrollAnimation">
       Pasta de goma
      </h2>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Envase:</span>  200gr, 500gr </p>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Colores:</span> rojo, azul, verde</p>
      <div className="pt-4 flex justify-center">
        <img className={`w-[250px] h-[200px] opacityAnimation ${color.split(' ')[1]? 'opacity-[30%]' : ''}`} src={`./pastaGoma.png`} alt="" />
      </div>
    </section>
    <section>
         <h2 className="text-center font-Nunito font-bold text-[20px] pb-4 pt-8  opacityScrollAnimation">
       Pasta de Flores
      </h2>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Envase:</span> 200gr</p>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Colores:</span> rosa, azul, negro, blanco</p>
      <div className="pt-4 flex justify-center">
        <img className={`w-[250px] h-[200px] opacityAnimation ${color.split(' ')[1]? 'opacity-[30%]' : ''}`} src={`./pastaFlores.png`} alt="" />
      </div>
    </section>
    </>
  );
}
