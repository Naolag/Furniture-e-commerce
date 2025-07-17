import Image from "next/image";
import Link from "next/link";
import Insta1 from "@/assets/IG-1.jpg"
import Insta2 from "@/assets/IG-2.jpg"
import Insta3 from "@/assets/IG-3.jpg"
import Insta4 from "@/assets/IG-4.jpg"

export default function Footer(){
    return(
        <section className="min-w-[320px]">
            <div className="flex flex-col lg:flex-row justify-around items-center bg-[#03344F] ">
                <div className="lg:ml-[10%] flex flex-col sm:flex-row lg:flex-col  items-center lg:items-start ">
                    <div className="ml-10 lg:ml-0">
                    <p className="font-[700] text-[24px] text-white mt-10">Beauty Care</p>
                    <p className="font-[300] text-[16px] text-[#FFFFFF] max-w-[80%] mt-4">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div >
                    <p className="font-[700] text-[24px] text-white mt-4 mr-40 lg:text-start ml-9 sm:ml-0">Follow Us</p>
                    </div>
                </div>
                <div className="xl:min-w-[50%] mr-10 mb-20 ml-8">
                    <p className="font-[700] text-[24px] text-white my-10 text-center sm:text-right lg:text-start mr-10 lg:mr-0 ">Instagram Shop</p>
                    <div className="hidden sm:flex gap-10 ml-10 lg:ml-0">
                        
                        <Link href={""}>
                            <Image src={Insta1}/>
                        </Link>
                        <Link href={""}>
                            <Image src={Insta2}/>
                        </Link>
                        <Link href={""}>
                            <Image src={Insta3}/>
                        </Link>
                        <Link href={" "}>
                            <Image src={Insta4}/>
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <div className="flex items-center gap-10">
                        <Link href={""}>
                            <Image src={Insta1}/>
                        </Link>
                        <Link href={""}>
                            <Image src={Insta2}/>
                        </Link>
                        </div>
                        <div className="flex items-center justify-around gap-10 mt-10">
                        <Link href={""}>
                            <Image src={Insta3}/>
                        </Link>
                        <Link href={" "}>
                            <Image src={Insta4}/>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}