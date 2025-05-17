import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsFiletypePdf } from "react-icons/bs";

function Navbar() {
  const socials = [
    {
      link: "https://github.com/ibrahimmoamen100",
      icon: BsGithub,
      label: "Github",
    },

    {
      link: "https://www.linkedin.com/in/ibrahim-moamen/",
      icon: BsLinkedin,
      label: "Linkedin",
    },
    {
      link: "https://drive.google.com/file/d/1nf6_0Fr4_5dOiev0R0PUydm5Rla5klpm/view?usp=sharing",
      icon: BsFiletypePdf,
      label: "Rusme",
    },
  ];

  return (
    <nav className="md:pb-20 pb-8 flex w-full max-w-7xl m-auto flex-row justify-between items-center p-2">
      <h1 className="text-2xl font-bold text-slate-200 underline underline-offset-8 decoration-yellow-300 -rotate-2">
        IBrahim 👨🏻‍💻{" "}
      </h1>
      <div className="flex flex-row justify-center items-center gap-5">
        {socials.map((social, index) => {
          const Icons = social.icon;
          return (
            <Link key={index} href={social.link} target="_blank">
              <Icons className="w-5 h-5 hover:scale-125 transition-all translate-x-2 text-slate-200" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
