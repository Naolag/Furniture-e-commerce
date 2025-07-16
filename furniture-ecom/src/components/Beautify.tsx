import Bg from "@/assets/bgBeuitify.png"
import sofa from "@/assets/sofa.png"
import ellipse from "@/assets/Ellipse.png"
import Image from "next/image"
export default function Beautify(){
    return(
        <section className="min-w-[320px]">
            <div className="flex md:flex-row flex-col-reverse  justify-between md:items-center bg-[#F2F5FF]">
                <div className="md:max-w-[30%] mx-10 text-center sm:mr-[20] sm:text-start sm:ml-52 md:ml-[10%] mb-20"> 
                    <p className="font-[700] text-[32px] text-[#333333]">Beautify Your Space</p>
                    <p className="font-[400] text-[20px] text-[#666666] mt-4 text-end sm:text-start">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <button className="bg-[#054C73] font-[700] text-[16px] text-white px-8 py-4 rounded-3xl mt-4">LEARN MORE</button>
                </div>
                <div className="relative w-[250] h-[350] sm:w-[350px] sm:h-[450]  md:w-[350px] md:h-[650px] bg-[#F2F5FF] rounded-2xl ml-4 sm:ml-20 md:ml-0  mr-[10%] my-20 md:my-40">
  {/* Ellipse in the back */}
  <div className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-[#226D5C] rounded-full right-[-40px] sm:right-[-70px] top-[30%] "></div>

  {/* Background image */}
  <Image
    src={Bg} // the woman portrait image
    alt="background"
    fill
    className=""
  />

  {/* Foreground card/image */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <Image
      src={sofa} // the living room / sofa image
      alt="sofa"
      className="w-[150px] sm:w-[250px] rounded-xl shadow-xl"
    />
  </div>
</div>

            </div>
        </section>
    )
}