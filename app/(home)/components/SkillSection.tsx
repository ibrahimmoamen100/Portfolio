import React from "react";
import { CardHoverEffectDemo } from "./ui/CardHoverEffectDemo";

function SkillSection() {
  return (
    <div className="py-8">
      <h1 className="text-3xl text-gray-300 text-center mb-20 font-bold underline underline-offset-8 decoration-yellow-300 -rotate-2">
        Skills Section 🥇
      </h1>
      <CardHoverEffectDemo />
    </div>
  );
}

export default SkillSection;
