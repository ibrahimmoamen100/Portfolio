"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const word2 = " Nice to meet you 👋";
const word3 = `            I'm Ibrahim`;
const words1 = ` I Live in Cairo-Egypt, I'm a Frontend web developer passionate about building a modern web application that users love.`;
export default function HeroSection() {
  return (
    <>
      <h1>
        <TextGenerateEffect
          words={word2}
          className="text-4xl lg:text-7xl font-semibold text-gray-300 translate-x-2 mt-8 mb-0"
        />
        <br />
        <TextGenerateEffect
          words={word3}
          className="text-4xl lg:text-7xl font-semibold text-gray-300 translate-x-2  mb-2"
        />
        <span className="underline underline-offset-8 decoration-yellow-300 text-gray-300 translate-x-2"></span>
      </h1>
      <TextGenerateEffect
        words={words1}
        className="md:w-96 md:text-lg text-sm text-gray-300 translate-x-2 my-4"
      />

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "backInOut" }}
      >
        <Link
          href={"mailto:ibrahim.moamen100@gmail.com"}
          className="flex  lg:m-0 m-auto  translate-x-2 space-y-8"
        >
          <div>
            <h1 className="md:text-3xl text-xl text-gray-300 font-bold hover:text-yellow-300 ">
              Contact Me 📨
            </h1>
            <div className="w-32 h-2 bg-yellow-300  rounded-full group  transition-all"></div>
            <div className="w-32 h-2 bg-blue-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
