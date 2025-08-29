"use client"
import Image from "next/image"

export function Background(){
    return(
        <Image src="/bg/bg.jpg"
      alt="background" fill style={{ objectFit: 'cover' }}
      className="absolute  top-0 -z-10" />
    )
}

export function Instagram(){
    return(
      <Image src="/socials/instagram.svg" width={18} height={18} alt="instgaram"/>
    )
}
export function Facebook(){
    return(
      <Image src="/socials/facebook.svg" width={18} height={18} alt="facebook"/>
    )
}
export function Twitter(){
    return(
      <Image src="/socials/twitter-x.svg" width={18} height={18} alt="twitter-x"/>
    )
}
export function Mail(){
    return(
      <Image src="/socials/envelope.svg" width={18} height={18} alt="mail"/>
    )
}

export function AboutImage(){
    return(
      <Image src="/bg/bg1.png" width={99} height={99} style={{ objectFit: 'cover' }}
       alt="about us" className="w-150 h-120 rounded-lg shadow-lg object-cover"/>
    )
}