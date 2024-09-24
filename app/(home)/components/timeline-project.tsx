import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import store1 from "@/public/images/store1.png";
import store2 from "@/public/images/store mobile.png";
import store3 from "@/public/images/store3.png";
import store4 from "@/public/images/store4.png";
import pure1 from "@/public/images/pure1.png";
import pure2 from "@/public/images/pure2.png";
import pure3 from "@/public/images/pure3.png";
import pure5 from "@/public/images/pure5.png";
import we1 from "@/public/images/we1.png";
import we2 from "@/public/images/we2.png";
import we3 from "@/public/images/we3.png";
import we4 from "@/public/images/we4.png";
import el1 from "@/public/images/el1.png";
import el2 from "@/public/images/el2.png";
import el3 from "@/public/images/el3.png";
import el4 from "@/public/images/el4.png";
import tarteel1 from "@/public/images/tarteel1.png";
import tarteel2 from "@/public/images/tarteel2.png";
import tarteel3 from "@/public/images/tarteel3.png";
import tarteel4 from "@/public/images/tarteel4.png";
import Link from "next/link";

export function TimelineDemo() {
  const data = [
    {
      title: "Agus, 2024",
      content: (
        <div>
          <p className="text-neutral-300  text-xs md:text-sm font-normal mb-8">
            I developed Khadijah Store using technologies like{" "}
            <span className="text-yellow-300">Next.js</span> and{" "}
            <span className="text-yellow-300">Axios</span> for data fetching. I
            also used <span className="text-yellow-300">TypeScript</span> for
            type safety. For styling, I used{" "}
            <span className="text-yellow-300">Tailwind CSS</span> , and for
            animations,
            <span className="text-yellow-300">Framer Motion</span> was my
            choice.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://front-ecommerce-store.vercel.app/">
              <Image
                src={store1}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://front-ecommerce-store.vercel.app/">
              <Image
                src={store2}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://front-ecommerce-store.vercel.app/">
              <Image
                src={store3}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://front-ecommerce-store.vercel.app/">
              <Image
                src={store4}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Mar, 2024",
      content: (
        <div>
          <p className="text-neutral-300  text-xs md:text-sm font-normal mb-8">
            Purestreamco is a solution provider company in Saudi Arabia. I
            developed this website using{" "}
            <span className="text-yellow-300"> Next.js, </span>focusing on
            making the user interface more engaging by implementing animations
            with <span className="text-yellow-300">Framer Motion</span> . I also
            used <span className="text-yellow-300"> i18next </span> to make the
            website multilingual,The project is still under development.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link href="https://www.purestreamco.com/">
              <Image
                src={pure1}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://www.purestreamco.com/">
              <Image
                src={pure2}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://www.purestreamco.com/">
              <Image
                src={pure3}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://www.purestreamco.com/">
              <Image
                src={pure5}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg  object-contain border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Nov, 2023",
      content: (
        <div>
          <p className="text-neutral-300  text-xs md:text-sm font-normal mb-8">
            Tarteel Academy is for teaching Arabic for non -Arabic speakers. I
            developed this website using{" "}
            <span className="text-yellow-300"> Next js</span> and{" "}
            <span className="text-yellow-300">Tailwind</span> and for
            authentication i used{" "}
            <span className="text-yellow-300">NextAuth</span>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link href="https://tarteel-acadimy.vercel.app/">
              <Image
                src={tarteel1}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://tarteel-acadimy.vercel.app/">
              <Image
                src={tarteel2}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://tarteel-acadimy.vercel.app/">
              <Image
                src={tarteel3}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg  object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://tarteel-acadimy.vercel.app/">
              <Image
                src={tarteel4}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg  object-contain border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Feb, 2021 ",
      content: (
        <div>
          <p className="text-neutral-300  text-xs md:text-sm font-normal mb-4">
            It’s a clone of the WE Internet website, which I developed using
            <span className="text-yellow-300"> React.js </span>. For state
            management, I used <span className="text-yellow-300"> Redux</span> .
            I focused on making the website fully responsive across all devices.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link href="https://we-internet-msil.vercel.app/">
              <Image
                src={we1}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://we-internet-msil.vercel.app/">
              <Image
                src={we2}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://we-internet-msil.vercel.app/">
              <Image
                src={we3}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://we-internet-msil.vercel.app/">
              <Image
                src={we4}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-contain border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Dec, 2020",
      content: (
        <div>
          <p className="text-neutral-300  text-xs md:text-sm font-normal mb-4">
            that was my first project using{" "}
            <span className="text-yellow-300"> HTML </span> &
            <span className="text-yellow-300"> CSS </span> &
            <span className="text-yellow-300"> JavaScript </span>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link href="https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#">
              <Image
                src={el1}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#">
              <Image
                src={el2}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#">
              <Image
                src={el3}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#">
              <Image
                src={el4}
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-contain border border-slate-600 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
