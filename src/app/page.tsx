import Intro from "@/components/intro";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute bg-black/40 w-full h-[49rem] z-0 top-0"></div>
      <img src="../../bg/bg.jpg" alt="bg" className="h-[50rem] absolute  top-0 -z-10 w-full" />
      <Intro />
      <div id="about" className="bg-white">
        <About />
      </div>
      <FAQ />
    </div>
  );
}
