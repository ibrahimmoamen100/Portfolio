import React from "react";
import { CardHoverEffectDemo } from "./ui/CardHoverEffectDemo";

function SkillSection() {
  return (
    <div className="mt-10 relative ">
      <h1 className="text-3xl relative text-gray-300 text-center mb-20 font-bold underline underline-offset-8 decoration-yellow-300 -rotate-2">
        Skills 🥇
      </h1>
      <CardHoverEffectDemo />
    </div>
  );
}

export default SkillSection;
