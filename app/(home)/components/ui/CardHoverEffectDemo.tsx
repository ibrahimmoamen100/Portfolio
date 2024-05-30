import { HoverEffect } from "./card-hover-effect";
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiFigma,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
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
    title: "Figma",

    icon: <SiFigma />,
  },
  {
    title: "Javascript ",

    icon: <SiJavascript />,
  },
  {
    title: "RestAPI",

    icon: <SiJavascript />,
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
    title: "Postgress",
    icon: <SiPostgresql />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];
