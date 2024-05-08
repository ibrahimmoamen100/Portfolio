"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import Link from "next/link";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {/* My Content */}
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl text-gray-300">
            Nice to meet you 👋
            <br />
            <span className="underline underline-offset-8 decoration-yellow-300 text-gray-300">
              {"I'm Ibrahim."}
            </span>
          </h1>
          <p className="md:w-96 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            explicabo iusto cumque aperiam consequuntur dicta?
          </p>
          <Link href={"mailto:WU6Xv@example.com"} className="inline-block ">
            <div>
              <h1 className="text-3xl text-gray-300 font-bold hover:text-yellow-300 ">
                Contact Me 📨
              </h1>
              <div className="w-32 h-2 bg-yellow-300  rounded-full group  transition-all"></div>
              <div className="w-32 h-2 bg-blue-500 rounded-full translate-x-2"></div>
            </div>
          </Link>
        </div>{" "}
      </motion.h1>
    </LampContainer>
  );
}
