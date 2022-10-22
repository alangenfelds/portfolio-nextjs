import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      className="h-screen relative flex flex-col xl:flex-row justify-center items-center xl:space-y-0 text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
        <Skill imgSrc="./images/sanity.webp" />
      </div>
    </motion.div>
  );
};

export default Skills;
