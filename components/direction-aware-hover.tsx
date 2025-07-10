"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface DirectionAwareHoverProps {
  title: string;
  icon: Array<React.ReactNode>;
  description?: string;
  img: string;

  className?: string;
}
const DirectionAwareHoverDemo = ({
  title,
  icon,
  description,
  img,
}: DirectionAwareHoverProps) => {
  return (
    <div className="bg-blue-500 p-3 rounded-lg">
      <DirectionAwareHover className=" w-full  space-y-reverse" imageUrl={img}>
        <h1 className="font-bold text-xl">{title}</h1>
        <h2 className="font-normal text-sm">{description}</h2>
        <span className="font-normal text-sm flex flex-row gap-2">{icon}</span>
      </DirectionAwareHover>
    </div>
  );
};

export default DirectionAwareHoverDemo;
