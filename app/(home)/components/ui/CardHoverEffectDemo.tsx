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
  SiFigma,
  SiFramer,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 ">
      <HoverEffect items={projects} />
    </div>
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
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];
