import useObserver from '@/app/utils/observer';
import React, { useRef, useState } from 'react'

type Props = {}

export default function PastaFlores({}: Props) {

    let colorMenu = useRef() as any;
    const showClass = useObserver(colorMenu);
    let foundantImage = useRef() as any;
    const showFoundantImage = useObserver(foundantImage);
  return (
    <section className="pt-4">
       <h2 className="text-center font-Nunito font-bold text-[20px] pb-4 pt-8  opacityScrollAnimation">
       Pasta de Flores
      </h2>
      <p className="font-hind text-[#00000090] text-center opacityScrollAnimation pt-4"><span className="font-bold">Envase:</span> 200gr</p>
      <div className="pt-4 flex justify-center">
        <img className={`w-[250px] h-[200px] opacityAnimation`} src={`./pastaFlores.png`} alt="" />
      </div>
    <aside ref={colorMenu} className={`flex  flex-wrap justify-around my-4 ${showClass ? 'animate-fade-up' : 'opacity-0'}`}>
      <div className="flex flex-col items-center max-w-[48px]">
      <button className="w-6 h-6 bg-[#ffffff] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Blanco"></button>
    <p title="Rojo" className="font-hind text-[#00000090] text-center max-w-[48px] overflow-hidden text-ellipsis">Blanco</p>
      </div>
      <div className="flex flex-col items-center max-w-[48px]">
      <button className="w-6 h-6 bg-[#0000ff] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Azul"></button>
      <p title="Azul" className="font-hind text-[#00000090] text-center max-w-[48px] overflow-hidden text-ellipsis">Azul</p>
      </div>
      <div className="flex flex-col items-center max-w-[48px]">
      <button className="w-6 h-6 bg-[#379358] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Verde"></button>
      <p title="Verde" className="font-hind text-[#00000090] text-center max-w-[48px] overflow-hidden text-ellipsis">Verde</p>
      </div>
      <div className="flex flex-col items-center max-w-[48px]">
      <button className="w-6 h-6 bg-[#000000] border-[1px] border-black rounded-full hover:scale-[1.1]" title="Negro"></button>
      <p title="Celeste" className="font-hind text-[#00000090] text-center max-w-[48px] overflow-hidden text-ellipsis">Negro</p>
      </div>
    </aside>
  </section>
  )
}