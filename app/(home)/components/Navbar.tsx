import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Navbar() {
  const socials = [
    {
      link: "https://github.com/ibrahim-ibrahim",
      icon: BsGithub,
      label: "Github",
    },
    {
      link: "https://github.com/ibrahim-ibrahim",
      icon: BsGithub,
      label: "Github",
    },
    {
      link: "https://github.com/ibrahim-ibrahim",
      icon: BsLinkedin,
      label: "Linkedin",
    },
  ];

  return (
    <nav className="py-10 flex w-full flex-row justify-between items-center ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-yellow-300 -rotate-2">
        IBrahim 👨🏻‍💻{" "}
      </h1>
      <div className="flex flex-row justify-center items-center gap-5">
        {socials.map((social, index) => {
          const Icons = social.icon;
          return (
            <Link key={index} href={social.link}>
              <Icons className="w-5 h-5 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
