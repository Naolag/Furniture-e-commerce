'use client'
import { useState } from "react";
import toast from "react-hot-toast";

export default function MailingList(){
    const [email,setEmail]=useState("")
    const handleSubmit = () => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      
        if (!email) {
          toast.error("Email is required 💀")
          return
        }
      
        if (!isValidEmail) {
          toast.error("Bruh… that's not a valid email 📛")
          return
        }
      
        toast.success(`You're in! 🎉`)
        setEmail("")
      }
    return(
        <section className="min-w-[320px]">
            <div className="bg-[#F2F5FF]">
                <p className="font-[700] text-[32px] text-[#333333] pt-10">Join Our Mailing List</p>
                <p className="font-[400] text-[20px] text-[#666666] mt-5 text-center max-w-[60%] lg:max-w-[30%] mx-auto">Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <div className="flex py-10 items-center justify-center">
                    <input
                        type="email"
                        placeholder="naolggonfa@gmail.com"
                        className=" px-4 sm:px-16 py-[22px] border-[#054C73] border-2"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button
                        className="bg-[#054C73] px-2  sm:px-10 py-6"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}