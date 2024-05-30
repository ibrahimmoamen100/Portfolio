"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import proj1 from "../../../Images/proj1.png";
import weProj from "../../../Images/proj2.png";
import tarteel from "@/public/tarteel.png";
import konpol from "@/public/konpol.png";
import elbadr from "@/public/elbadrgroup.png";
import we from "@/public/we.png";

// import collect from "../";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Collection Favorite Links",
    link: "https://ibrahimmoamen100.github.io/Collection-Icons-App/",
    thumbnail: proj1,
  },
  {
    title: "WE Telecom EG",
    link: "https://we-internet-msil.vercel.app/",
    thumbnail: we,
  },

  {
    title: "ElBadr Group Store ",
    link: "https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#",
    thumbnail: elbadr,
  },

  {
    title: "Shopping-Cart",
    link: "https://ibrahimmoamen100.github.io/Shopping-Cart/",
    thumbnail: proj1,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: proj1,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: proj1,
  },

  {
    title: "konpol",
    link: "https://www.konpol-sa.com/",
    thumbnail: konpol,
  },
  {
    title: "Tarteel",
    link: "https://rttel-acadimy-9k1wfwp73-ibrahimmoamen100s-projects.vercel.app/",
    thumbnail: tarteel,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: proj1,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: proj1,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: proj1,
  },
];
