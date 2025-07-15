'use client'

import Image from "next/image"
import Link from "next/link"
import mask from "@/assets/room.png"

export default function Hero() {
  return (
    <section
      id="home"
      className=" h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center min-w-[320px]"
      style={{ backgroundImage: `url(${mask.src})` }}>
     <div className="bg-[#DFE9F4] max-h-[70%] sm:max-h-none w-[70%] sm:w-[60%]  xl:w-[50%] ml-auto mr-10 sm:mr-20 pl-10 text-left">
        <p className="text-[12px] sm:text-[16px]  font-[600] text-[#333333] pt-10">New Arrival</p>
        <p className="font-[700] text-[24px] sm:text-[36px] md:text-[52px] text-[#054C73] sm:max-w-[60%] 2xl:max-w-[45%] pt-10">Discover Our New Collection</p>
        <p className="hidden md:block font-[500] text-[18px] text-black pt-10  max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="font-[700] text-[16px] text-[#FFFFFF] bg-[#054C73] mt-10 mb-10 py-4 px-8 rounded-2xl">BUY NOW</button>
     </div>
    </section>
  )
}
