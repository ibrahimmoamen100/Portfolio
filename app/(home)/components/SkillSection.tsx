"use client";
import React from "react";
import { CardHoverEffectDemo } from "./ui/CardHoverEffectDemo";
import { motion } from "framer-motion";

function SkillSection() {
  return (
    <div className="mt-10 relative ">
      <motion.h1
        initial={{ y: -400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="text-3xl relative text-gray-300 text-center mb-20 font-bold underline underline-offset-8 decoration-yellow-300 -rotate-2"
      >
        Skills 🥇
      </motion.h1>
      <CardHoverEffectDemo />
    </div>
  );
}

export default SkillSection;
