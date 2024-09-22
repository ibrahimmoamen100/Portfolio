import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import { TimelineDemo } from "./components/timeline-project";
import { HeroHoverSection } from "./components/ui/hero-section";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-slate-950 overflow-hidden">
      <div className="dark:bg-slate-950 bg-slate-950  h-full  dark:bg-grid-white/[0.05] bg-grid-slate-600/[0.2]">
        <div className=" mx-auto  ">
          {/* <HeroSection /> */}
          <HeroHoverSection className="bg-transparent ">
            <Navbar />
            <div className="space-y-10 text-center lg:text-left m-auto h-[60vh]">
              <h1 className="text-4xl lg:text-7xl text-gray-300 translate-x-2">
                Nice to meet you 👋
                <br />
                <span className="underline underline-offset-8 decoration-yellow-300 text-gray-300 translate-x-2">
                  {"I'm Ibrahim."}
                </span>
              </h1>
              <p className="md:w-96 text-lg text-gray-300 translate-x-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                explicabo iusto cumque aperiam consequuntur dicta?
              </p>
              <Link
                href={"mailto:WU6Xv@example.com"}
                className="flex   translate-x-2 "
              >
                <div>
                  <h1 className="text-3xl text-gray-300 font-bold hover:text-yellow-300 ">
                    Contact Me 📨
                  </h1>
                  <div className="w-32 h-2 bg-yellow-300  rounded-full group  transition-all"></div>
                  <div className="w-32 h-2 bg-blue-500 rounded-full translate-x-2"></div>
                </div>
              </Link>
            </div>
          </HeroHoverSection>
          <SkillSection />
          <TimelineDemo />
        </div>
      </div>
    </main>
  );
}
