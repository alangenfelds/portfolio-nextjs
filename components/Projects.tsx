import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      className="relative h-screen flex flex-col text-left max-w-full justify-evenly mx-auto items-center overflow-hidden isolate"
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
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
        {projects.map((project, idx) => (
          <div
            key={project._id}
            className="w-full h-screen flex-shrink-0 flex flex-col justify-center items-center space-y-5 p-20 md:p-44 snap-center"
          >
            <div className="relative hover:cursor-pointer hover:scale-[200%] transition-transform duration-150 z-10">
              <motion.img
                src={urlFor(project?.image)?.url()}
                alt="project image"
                width={150}
                height={80}
                initial={{
                  y: -100,
                }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              />
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <>
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case Study {idx + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </>
              </h4>

              <div className="relative flex items-center justify-center space-x-5">
                {project.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology?.image)?.url()}
                    alt="technology logo"
                    width={40}
                    height={40}
                    objectFit="contain"
                    className="h-10 w-10"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}{" "}
                {project?.linkToBuild && (
                  <a
                    href={project?.linkToBuild ?? ""}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto text-center underline text-base font-semibold decoration-[#f7ab0a]/40 animate-pulse text-[#f7ab0a]"
                  >
                    (Open link)
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] left-0 bg-[#f7ab0a]/10 h-[250px] -skew-y-12"></div>
      <div className="w-full absolute top-[27%] left-0 bg-[#e2808c]/10 h-[130px] skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
