import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const PROJECTS = ["Accenture", "ABC Software", "28Stone Consulting"];

const Projects = (props: Props) => {
  return (
    <motion.div
      className="relative h-screen flex flex-col text-left max-w-full justify-evenly mx-auto items-center overflow-hidden"
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
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="w-full h-screen flex-shrink-0 flex flex-col justify-center items-center space-y-5 p-20 md:p-44 snap-center"
          >
            <div className="relative">
              <motion.img
                src="/images/mu5.png"
                alt="project image"
                width={100}
                height={70}
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
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {idx + 1} of {PROJECTS.length}:
                </span>{" "}
                {project}
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
