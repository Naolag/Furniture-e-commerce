import left from "@/assets/left.png"
import right from "@/assets/bulb.png"
import middel from "@/assets/middel.png"
import Image from "next/image"
export default function Collection(){
    return(
        <section 
          id="collection"
          className="min-w-[320px]">
            <div>
                <p className="font-[600] text-[32px] text-[#333333] text-center mt-16">Inspiration Collection</p>
                <p className="font-[400] text-[20px] text-[#666666] text-center mb-10">Products that uniquely define Us.</p>
                <div className="flex flex-col md:flex-row justify-center gap-10 xl:gap-20 pb-36">
                    <Image className="ml-4 sm:ml-40 md:ml-0 mt-10 md:mt-20 max-w-[90%] sm:max-w-none md:max-w-[27%] xl:max-w-none"
                      src={left}
                    />
                    <Image className="ml-8 sm:ml-28 md:ml-0 max-w-[90%] sm:max-w-none  md:mb-10 md:max-w-[27%] xl:max-w-none "
                      src={middel}
                    />
                    <Image className="ml-4 sm:ml-40 md:ml-0 max-w-[90%] sm:max-w-none  md:mt-20 md:max-w-[27%] xl:max-w-none"
                      src={right}
                    />

                </div>
            </div>
        </section>
    )
}