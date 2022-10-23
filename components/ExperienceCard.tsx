import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-start md:snap-center bg-[#292929] p-5 hover:opacity-100 opacity-50 transition-opacity duration-200 cursor-pointer overflow-hidden z-10">
      <motion.img
        alt="brand image"
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center rounded-full "
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology?.image).url()}
              width={32}
              height={32}
              objectFit="contain"
              alt="tech logo"
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {`${new Date(experience.dateStarted).toDateString()} - ${
            experience?.isCurrentWorkPlace
              ? "Present"
              : new Date(experience.dateEnded).toDateString()
          }`}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-72 md:h-64  pr-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#f7ab0a]/60 scrollbar-track-black">
          {experience?.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
