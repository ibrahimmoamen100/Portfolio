"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import proj1 from "../../../Images/proj1.png";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: proj1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: proj1,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: proj1,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
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
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: proj1,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: proj1,
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

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: proj1,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: proj1,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: proj1,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: proj1,
  },
];
