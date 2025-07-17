import purchase from "@/assets/Purchase Securely.png"
import ships from "@/assets/Ships From Warehouse.png"
import style from "@/assets/Style Your Room.png"
import Image from "next/image"
export default function HowItWorks(){
    return(
        <section className="min-w-[320px]">
          <div>
            <p className="font-[700] text-[32px] text-[#333333] mt-20">How It Works</p>
            <p className="font-[400] text-[20px] text-[#666666] mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-20 mb-10 gap-10 mx-10">
                <div>
                    <Image
                      src={purchase}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Purchase Securely</p>
                    <p className="font-[400] text-[18px] text-[#666666] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <Image
                      src={ships}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Ships From Warehouse</p>
                    <p className="font-[400] text-[18px] text-[#666666] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <Image
                      src={style}
                    />
                    <p className="font-[700] text-[24px] text-[#333333] mt-10">Style Your Room</p>
                    <p className="font-[400] text-[18px] text-[#666666] mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
         </div> 
        </section>
    )
}