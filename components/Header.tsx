import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
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
        <SocialIcon
          url="https://www.linkedin.com/in/arturs-langenfelds/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/alangenfelds"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCMvFcA4RF1w1FUi_nryzYtg"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/artur.langenfeld"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
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
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
