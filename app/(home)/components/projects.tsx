"use client";
import DirectionAwareHoverDemo from "@/components/direction-aware-hover";
import React from "react";
import { SiCss3, SiJavascript } from "react-icons/si";
import store from "@/public/images/store.png";
import tarteel from "@/public/images/tarteel.png";
import we from "@/public/images/we.png";
import pure from "@/public/images/pure.png";
import por from "@/public/images/por.png";
import el from "@/public/images/el.png";

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
} from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  const data = [
    {
      title: "Khadijah Store",
      icon: [
        <SiNextdotjs className="w-10 h-10" />,
        <SiStripe className="w-10 h-10" />,
        <SiFramer className="w-10 h-10" />,
        <SiTailwindcss className="w-10 h-10" />,
        <SiAxios className="w-10 h-10" />,
      ],
      img: store.src,
      url: "https://front-ecommerce-store.vercel.app/",
    },
    {
      title: "Tarteel Academy",
      icon: [
        <SiNextdotjs className="w-10 h-10" />,
        <SiReact className="w-10 h-10" />,
        <SiTailwindcss className="w-10 h-10" />,
        <SiFramer className="w-10 h-10" />,
      ],
      description: `Tarteel Academy is `,
      img: tarteel.src,
      url: "https://tarteel-acadimy.vercel.app/",
    },
    {
      title: "Purestreamco",
      icon: [
        <SiNextdotjs className="w-10 h-10" />,
        <SiReact className="w-10 h-10" />,
        <SiTailwindcss className="w-10 h-10" />,
        <SiFramer className="w-10 h-10" />,
      ],
      img: pure.src,
      url: "https://www.purestreamco.com/",
    },
    {
      title: "WE Internet Clone",
      icon: [
        <SiReact className="w-10 h-10" />,
        <SiRedux className="w-10 h-10" />,
      ],
      img: we.src,
      url: "https://we-internet-msil.vercel.app/",
    },
    {
      title: "Old Portfolio",
      icon: [
        <SiJavascript className="w-10 h-10" />,
        <SiCss3 className="w-10 h-10" />,
      ],
      img: por.src,
      url: "https://ibrahimmoamen100.github.io/My-Resume/",
    },
    {
      title: "El badr Group Store",
      icon: [
        <SiJavascript className="w-10 h-10" />,
        <SiCss3 className="w-10 h-10" />,
      ],
      img: el.src,
      url: "https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#",
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
            className="flex justify-center"
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
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
