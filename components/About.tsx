import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center select-none"
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
        ABOUT
      </h3>

      <motion.img
        alt="author image"
        src="http://forumcinemaslv.blob.core.windows.net/1012/Event_6922/gallery/dictator-picture1.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[550px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab08]/60">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am Artur. Here is a liitle bit about me... I&apos;ve been coding for
          5 years now. As a Frontend developer I&apos;ve worked both with a
          mid-sized product company and large consulting corporations where I
          successfully participated in developement of different types of web
          applications Fintech, Goverment, Information systems as well as my
          private projects.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
