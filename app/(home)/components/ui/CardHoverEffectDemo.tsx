"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "./card-hover-effect";

import {
  SiNextdotjs,
  SiReact,
  SiStripe,
  SiAxios,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGoogletranslate,
  SiFramer,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 "
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.4,
        type: "spring",
        bounce: 50,
        stiffness: 500,
      }}
    >
      <HoverEffect items={projects} />
    </motion.div>
  );
}

export const projects = [
  {
    title: "Next JS",

    icon: <SiNextdotjs />,
  },
  {
    title: "React Js",

    icon: <SiReact />,
  },
  {
    title: "Framer Motion",

    icon: <SiFramer />,
  },

  {
    title: "Axios ",

    icon: <SiAxios />,
  },
  {
    title: "Redux",
    icon: <SiRedux />,
  },
  {
    title: "Git",
    icon: <SiGit />,
  },
  {
    title: "Next i18n",
    icon: <SiGoogletranslate />,
  },
  {
    title: "Stripe ",
    icon: <SiStripe />,
  },
  {
    title: "Tailwind ",
    icon: <SiTailwindcss />,
  },
];
