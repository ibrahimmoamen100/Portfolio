import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className=" min-h-screen bg-slate-950 overflow-hidden">
      <div className="dark:bg-slate-950 bg-white  h-full  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
          <SkillSection />
          <Projects />
        </div>
      </div>
    </main>
  );
}
