import AboutPoints from "../../data/aboutdata";
import { AboutImage } from "../../Images";
import Image from "next/image";
function About(){
    return(
        <div className="mt-78 flex flex-col text-black items-center gap-15 py-15 pb-15">
            <h1 className="text-center text-xl font-bold md:text-4xl py-3 w-[10rem] border-amber-700 border-b-3 ">About Us</h1>
            <div className="flex gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl">Genesis NFT Concert Experience</h1>
                    <p className="font-light w-[40vw]">Join us for an unforgettable night featuring top Indian electronic artists and an immersive visual experience at the iconic Jawaharlal Nehru Stadium in New Delhi. This is the first concert in India where your ticket is a collectible NFT, giving you access to exclusive digital content and future events.</p>
                    {AboutPoints.map((point,index)=>{
                        return(
                            <div key={index} className="flex gap-5">
                                <Image src={point.image} alt="point img" height={26} width={26}/>
                                <div>
                                    <p className="font-bold">{point.title}</p>
                                    <p className="font-light">{point.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <AboutImage/>
            </div>
        </div>
    )
}
export default About;