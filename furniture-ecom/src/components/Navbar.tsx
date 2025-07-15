'use client'
import Link from "next/link";
import { useState,useEffect,useRef} from "react";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
    const menuRef=useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        const handleClickOutside=(event: MouseEvent)=>{
            if(menuRef.current && !menuRef.current.contains(event.target as Node))
                setIsOpen(false)
        }
        if(isOpen)
            window.addEventListener("mousedown",handleClickOutside)
        return()=>{window.removeEventListener("mousedown",handleClickOutside)}
    },[isOpen])

    return(
        <div>
            <div>
                <div className=" flex flex-row justify-between w-full items-center  fixed z-50 bg-white   ">
                    <div>
                        <a href="#home" className="text-[34px] text-[#054C73] ml-10 lg::ml-16 font-sans">Furniture</a>
                    </div>
                    <div className=" hidden md:flex flex-row justify-center items-center gap-8 mr-16 font-sans text-[14px] text-[#333333]">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#collection">Collections</a>
                        <a href="#products">Products</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                    <div>
                        <button onClick={toggleMenu} className="md:hidden mr-10 sm:mr-20"><FaBarsStaggered size={20}/></button>
                    </div>
                </div>
            </div>
            {isOpen&& (
                <div ref={menuRef} className=" md:hidden bg-black absolute top-[9%] left-40 right-0 buttom-10 bg-opacity-80 ">
                    <div className="flex flex-col ml-10 justify-center font-sans text-[30px] text-white gap-16 mt-32 pb-10 ">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#collection">Collections</a>
                        <a href="#products">Products</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                </div>
            )}
        </div>
    )
}

