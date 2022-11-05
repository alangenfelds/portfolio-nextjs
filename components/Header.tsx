import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 p-5 flex justify-between items-start xl:items-center max-w-7xl mx-auto z-10 overflow-x-hidden">
      <motion.div
        className="flex items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        {socials.map((item) => (
          <SocialIcon
            key={item._id}
            url={item.url}
            fgColor={`${theme === "dark" ? "gray" : "#5c636e"}`}
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="flex items-center mr-2 ">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setTheme(
                theme === "light" || theme === "system" ? "dark" : "light"
              );
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label cursor-pointer"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        <Link href="#contact">
          <>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor={`${theme === "dark" ? "gray" : "#5c636e"}`}
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm dark:text-gray-400 text-[#5c636e] pr-5">
              Get in touch
            </p>
          </>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
