import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillSection";
import { TimelineDemo } from "./components/timeline-project";
import { HeroHoverSection } from "./components/ui/hero-section";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import DImage from "./components/3d-image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-slate-950 overflow-hidden">
      <div className="dark:bg-slate-950 bg-slate-950  h-full  dark:bg-grid-white/[0.05] bg-grid-slate-600/[0.2]">
        <div className=" mx-auto  ">
          {/* <HeroSection /> */}
          <HeroHoverSection className="bg-transparent ">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center  h-full">
              <div className=" text-center lg:text-left m-auto flex flex-col ">
                <h1 className="text-4xl lg:text-7xl font-semibold text-gray-300 translate-x-2 my-8">
                  Nice to meet you 👋
                  <br />
                  <span className="underline underline-offset-8 decoration-yellow-300 text-gray-300 translate-x-2">
                    {"I'm Ibrahim."}
                  </span>
                </h1>
                <p className="md:w-96 md:text-lg text-sm text-gray-300 translate-x-2 my-4">
                  I Live in Cairo-Egypt, I&apos;m a Frontend web developer
                  passionate about building a modern web application that users
                  love.
                </p>
                <Link
                  href={"mailto:ibrahim.moamen100@gmail.com"}
                  className="flex  lg:m-0 m-auto  translate-x-2 space-y-8"
                >
                  <div>
                    <h1 className="md:text-3xl text-xl text-gray-300 font-bold hover:text-yellow-300 ">
                      Contact Me 📨
                    </h1>
                    <div className="w-32 h-2 bg-yellow-300  rounded-full group  transition-all"></div>
                    <div className="w-32 h-2 bg-blue-500 rounded-full translate-x-2"></div>
                  </div>
                </Link>
              </div>
              <DImage />
            </div>
          </HeroHoverSection>
          <SkillSection />
          <TimelineDemo />

          <Separator className="max-w-7xl m-auto my-4 bg-gray-500" />
          <Footer />
        </div>
      </div>
    </main>
  );
}
