import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import { Technology } from "../typings";

type Props = {
  skills: Technology[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="h-screen relative flex flex-col xl:flex-row justify-center items-center xl:space-y-0 text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the skill for current proficiency
      </h3>

      <div className="pt-44 md:pt-0 xl:pt-10 grid grid-cols-4 md:grid-cols-5 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, idx) => (
          <SkillItem key={skill._id} skill={skill} idx={idx} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill, idx) => (
          <SkillItem
            key={skill._id}
            skill={skill}
            idx={skills.length / 2 + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
