import BurguerIcon from '@/atoms/burguerIcon'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="flex justify-between z-10 relative pt-4">
        <h3 className="font-nunito text-[#16a34a] text-[36px] font-semibold">
          <span className="text-white">Found</span>ecor
        </h3>
        <button className="">
          <BurguerIcon />
        </button>
      </div>
  )
}