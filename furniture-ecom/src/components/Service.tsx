import car from "@/assets/car.svg"
import hour from "@/assets/hours.svg"
import sheild from "@/assets/shield.png"
import Image from "next/image"
export default function Service(){
    return(
        <section
           id="services"
           className="min-w-[320px]">
            <div className="bg-[#F2F5FF] flex flex-col md:flex-row  md:items-center md:justify-around py-8">
                <div className="flex gap-4 mt-4 md:mt-0 ml-10 md:ml-0">
                    <Image
                          src={car}
                        />
                    <div>
                    <p className="font-[600] md:text-[24px] text-[18px] text-[#333333]">Free delivery</p>
                    <p className="font-[400] md:text-[16px]  text-[12px]text-[#000000]">At the step of your dor</p>
                    </div>
                </div>

                <div className="flex gap-4 mt-10 md:mt-0 ml-14 md:ml-0">
                    <Image
                          src={hour}
                        />
                    <div>
                    <p className="font-[600] md:text-[24px] text-[18px] text-[#333333]">Support 24/7</p>
                    <p className="font-[400] md:text-[16px]  text-[12px] text-[#000000]">Always with yoou</p>
                    </div>
                </div>

                <div className="flex gap-4 mt-10 md:mt-0 ml-14 md:ml-0">
                    <Image
                          src={sheild}
                        />
                    <div>
                    <p className="font-[600] text-[24px] text-[#333333]">100% Authentic</p>
                    <p className="font-[400] text-[16px] text-[#000000]">Built with Quality and Trust</p>
                    </div>
                </div>

            </div>
        </section>
    )
}