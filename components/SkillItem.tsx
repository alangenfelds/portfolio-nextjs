import React from "react";
import { motion } from "framer-motion";

import { Technology } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Technology;
  idx: number;
};

const Skill = ({ skill, idx }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2 + idx * 0.2,
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full group-hover:opacity-80 group-hover:bg-gray-100 transition duration-300 ease-in-out">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
