import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  imgSrc: string;
};

const Skill = ({ directionLeft, imgSrc }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={imgSrc}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 w-24 h-24 xl:w-28 xl:h-28 rounded-full group-hover:opacity-80 group-hover:bg-gray-100 transition duration-300 ease-in-out">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
