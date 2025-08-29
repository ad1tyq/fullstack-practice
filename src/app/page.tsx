import Intro from "@/components/intro";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import { Background } from "../../Images";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute bg-black/40 w-full h-[42rem] z-0 top-0"></div>
      <Background/>
      <Intro />
      <div id="about" className="bg-white">
        <About />
      </div>
      <FAQ />
    </div>
  );
}
