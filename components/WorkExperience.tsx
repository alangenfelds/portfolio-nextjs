import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center overflow-hidden isolate"
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
        Experience
      </h3>

      <div className="w-full flex space-x-5 md:space-x-10 overflow-x-scroll  snap-x snap-mandatory scroll-smooth mt-32 p-10 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
