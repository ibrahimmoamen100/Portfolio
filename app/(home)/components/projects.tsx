"use client";
import DirectionAwareHoverDemo from "@/components/direction-aware-hover";
import React from "react";
import { SiCss3, SiJavascript } from "react-icons/si";
import tarteel from "@/public/images/tarteel.png";
import we from "@/public/images/we.png";
import pure from "@/public/images/pure.png";
import menus1 from "@/public/menus1.png";
import menus from "@/public/menus.png";
import sooqna1 from "@/public/sooqna1.png";
import sooqna from "@/public/sooqna.png";
import spark from "@/public/spark.png";
import spark1 from "@/public/spark1.png";


import {
  SiNextdotjs,
  SiReact,
  SiStripe,
  SiAxios,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGoogletranslate,
  SiFigma,
  SiFramer,
  SiZod,
  SiTypescript,
  SiReactquery,
  SiZulip,
} from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  const data = [
    {
      title: "Suoqna Store",
      icon: [
        <SiTypescript key="ts" className="w-10 h-10" />,
        <SiFramer key="fr" className="w-10 h-10" />,
        <SiReact key="react" className="w-10 h-10" />,
        <SiRedux key="redux" className="w-10 h-10" />,
        <SiZod key="zod" className="w-10 h-10" />,
        <SiTailwindcss key="tailwind" className="w-10 h-10" />,
      ],
      img: sooqna1.src,
      url: "https://suoqna-egypt.vercel.app/",
    },
    {
      title: "Menus Foods",
      icon: [
        <SiTypescript key="ts" className="w-10 h-10" />,
        <SiFramer key="fr" className="w-10 h-10" />,
        <SiReact key="react" className="w-10 h-10" />,
        <SiRedux key="redux" className="w-10 h-10" />,
        <SiZod key="zod" className="w-10 h-10" />,
        <SiTailwindcss key="tailwind" className="w-10 h-10" />,
      ],
      img: menus1.src,
      url: "https://menus-foods.vercel.app/",
    },
    {
      title: "Spark Electronics",
      icon: [
        <SiTypescript key="ts" className="w-10 h-10" />,
        <SiFramer key="fr" className="w-10 h-10" />,
        <SiReact key="react" className="w-10 h-10" />,
        <SiRedux key="redux" className="w-10 h-10" />,
        <SiZod key="zod" className="w-10 h-10" />,
        <SiTailwindcss key="tailwind" className="w-10 h-10" />,
      ],
      img: spark1.src,
      url: "https://spark-azure.vercel.app/",
    },
    {
      title: "Tarteel Academy",
      icon: [
        <SiNextdotjs key="next" className="w-10 h-10" />,
        <SiReact key="react" className="w-10 h-10" />,
        <SiTailwindcss key={"tailwind"} className="w-10 h-10" />,
        <SiFramer key={"framer"} className="w-10 h-10" />,
      ],
      description: `Tarteel Academy is `,
      img: tarteel.src,
      url: "https://tarteel-acadimy.vercel.app/",
    },
    {
      title: "Purestreamco",
      icon: [
        <SiNextdotjs key="next" className="w-10 h-10" />,
        <SiReact key="react" className="w-10 h-10" />,
        <SiTailwindcss key={"tailwind"} className="w-10 h-10" />,
        <SiFramer key={"framer"} className="w-10 h-10" />,
      ],
      img: pure.src,
      url: "https://www.purestreamco.com/",
    },
    {
      title: "WE Internet Clone",
      icon: [
        <SiReact key="react" className="w-10 h-10" />,
        <SiRedux key={"redux"} className="w-10 h-10" />,
      ],
      img: we.src,
      url: "https://we-internet-msil.vercel.app/",
    },

  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 50, stiffness: 300 }}
        className="text-3xl text-gray-300 text-center mt-48 mb-16 font-bold underline underline-offset-8 decoration-yellow-300 -rotate-2 "
      >
        Projects 🚀
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-auto  gap-8  ">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="flex justify-center "
          >
            <Link
              href={item.url}
              key={index}
              target="_blank"
              className="w-fit m-auto"
            >
              <DirectionAwareHoverDemo
                title={item.title}
                img={item.img}
                description={item.description}
                icon={item.icon}
                className="w-full  object-contain"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
