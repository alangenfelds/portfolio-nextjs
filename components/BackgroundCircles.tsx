import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      className="relative flex justify-center items-center isolate"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute mt-60 md:52 border dark:border-[#333] h-[80px] w-[80px] md:h-[200px] md:w-[200px] rounded-full  animate-ping-slow" />
      <div className="absolute mt-60 md:52 border dark:border-[#333] h-[130px] w-[130px] md:h-[300px] md:w-[300px] rounded-full animate-ping-slow" />
      <div className="absolute mt-60 md:52 border dark:border-[#333] h-[205px] w-[205px] md:h-[450px] md:w-[450px] rounded-full  animate-ping-slow" />
      <div className="absolute mt-60 md:52  border dark:border-[#f7ab0a] border-[#f8b500] h-[380px] w-[380px] md:h-[700px] md:w-[700px] rounded-full animate-pulse" />
      <div className="absolute mt-60 md:52 border dark:border-[#2e2d2d] h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full  animate-ping-slow" />
    </motion.div>
  );
};

export default BackgroundCircles;
