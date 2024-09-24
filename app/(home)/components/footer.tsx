import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsFiletypePdf } from "react-icons/bs";

function Footer() {
  const socials = [
    {
      link: "https://github.com/ibrahim-ibrahim",
      icon: BsGithub,
      label: "Github",
    },

    {
      link: "https://www.linkedin.com/in/ibrahim-moamen/",
      icon: BsLinkedin,
      label: "Linkedin",
    },
    {
      link: "https://drive.google.com/file/d/1vefSju89TFBAPj3smMFk6x_a9jNy_Iwg/view?usp=sharing",
      icon: BsFiletypePdf,
      label: "Rusme",
    },
  ];
  return (
    <div className="md:pb-20 pb-8 flex w-full max-w-7xl m-auto flex-col justify-between items-center p-2">
      {" "}
      <h1 className="text-2xl font-bold text-slate-200 underline underline-offset-8 decoration-yellow-300 mb-6">
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
    </div>
  );
}

export default Footer;