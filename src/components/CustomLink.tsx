"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { ReactNode } from 'react';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

export default function CustomLink({href, children}: CustomLinkProps){
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
    <Link 
      href={href}
      className={`${isActive ? 'flex items-center font-bold bg-white/5 rounded-2xl text-white gap-2 text-[1.1rem] px-2' :
      'flex items-center hover:font-bold gap-2 hover:text-white hover:text-[1.1rem] text-lg px-2 text-white/70'}
      transition-all duration-300`}>
      {children}
    </Link>
  );
}