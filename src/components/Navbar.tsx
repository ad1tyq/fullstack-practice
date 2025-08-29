"use client";
import CustomLink from "./CustomLink";
import { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isScrolled ? "bg-black/20 backdrop-blur-lg shadow-sm" : "bg-emerald-900"} w-full h-[5rem] flex items-center justify-between px-10 sticky top-0 z-20 transition-all duration-300`}>
            <CustomLink href="/">
                <Image src="/assets/leaf.png" alt="icon" width={44} height={44}/>
                <span className="font-semibold text-[1.25rem] pr-4">Plantventory</span>
            </CustomLink>
            <div className="flex text-md font-semibold gap-10">
                <CustomLink href="/#about">
                    <i className="bi bi-info-circle-fill pl-[10px]"></i>
                    <span className="py-2 pr-2">About</span>
                </CustomLink>
                <CustomLink href="/CRUD">
                    <i className="bi bi-database pl-[10px]"></i>
                    <span className="py-2 pr-2">CRUD</span>
                </CustomLink>
            </div>
        </div>
    );
}
export default Navbar;
