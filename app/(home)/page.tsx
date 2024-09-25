import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillSection";
import { HeroHoverSection } from "./components/ui/hero-section";
import { Separator } from "@/components/ui/separator";

import DImage from "./components/3d-image";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className=" min-h-screen bg-slate-950 overflow-hidden">
      <div className="dark:bg-slate-950 bg-slate-950  h-full  dark:bg-grid-white/[0.05] bg-grid-slate-600/[0.2]">
        <div className=" mx-auto  ">
          <HeroHoverSection className="bg-transparent ">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center  h-full">
              <div className=" text-center lg:text-left m-auto flex flex-col ">
                <HeroSection />
              </div>
              <DImage />
            </div>
          </HeroHoverSection>
          <SkillSection />
          <Projects />

          <Separator className="max-w-7xl m-auto my-4 bg-gray-500" />
          <Footer />
        </div>
      </div>
    </main>
  );
}
