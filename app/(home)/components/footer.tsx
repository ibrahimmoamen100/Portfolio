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
      link: "https://drive.google.com/file/d/1lQMIHCR6kAwxLvsWvGcOQgWS5WSZMG0e/view?usp=sharing",
      icon: BsFiletypePdf,
      label: "Rusme",
    },
  ];
  return (
    <div className="md:pb-20 pb-8 flex w-full max-w-7xl m-auto flex-col justify-between items-center p-2">
      {" "}
      <h1 className="text-3xl font-bold text-slate-200 underline underline-offset-8 decoration-yellow-300 mb-6">
        IBrahim 👨🏻‍💻{" "}
      </h1>
      <div className="flex flex-row justify-center items-center gap-5">
        {socials.map((social, index) => {
          const Icons = social.icon;
          return (
            <Link key={index} href={social.link} target="_blank">
              <Icons className="w-10 h-10 hover:scale-125 transition-all translate-x-2 text-slate-200" />
            </Link>
          );
        })}
      </div>
      <p className="text-slate-400 text-center mt-8">
        © 2023 Ibrahim-Moamen, inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
