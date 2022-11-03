import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is " + pageInfo?.name,
      "Guy-who-loves-☕.tsx",
      "<But❤️ToCodeMore />",
      "Nice to meet you :)",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.image).url()}
        alt="hero"
        objectFit="cover"
        width={150}
        height={150}
        className="relative rounded-full w-32 mx-auto object-cover"
      />
      <div className="isolate">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]  md:tracking-[13px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>
      <div className="flex h-16 md:hidden" />
      <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 isolate w-2/4 md:w-fit">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
