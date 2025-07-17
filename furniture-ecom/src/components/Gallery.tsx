import purchase from "@/assets/Purchase Securely.png"
import dining from "@/assets/Mask Group (1).png"
import Bedroom from "@/assets/Mask Group (2).png"
import Image from "next/image"
export default function Gallery(){
    return(
        <section id="gallery" className="min-w-[320px]">
          <div>
            <p className="font-[700] text-[32px] text-[#333333] mt-20">Browse the Range</p>
            <p className="font-[400] text-[20px] text-[#666666] mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-20 mb-10 gap-10 mx-10">
                <div>
                    <Image
                      src={dining}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Dining</p>
                </div>
                <div>
                    <Image
                      src={purchase}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Living</p>
                   
                </div>
                <div>
                    <Image
                      src={Bedroom}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Bedroom</p>
                    
                </div>
            </div>
         </div> 
        </section>
    )
}