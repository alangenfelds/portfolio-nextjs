import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Arturs Langenfelds",
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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://avatars.githubusercontent.com/u/17031305?v=4"
        alt="hero"
        objectFit="cover"
        width={128}
        height={128}
        className="relative rounded-full w-32 mx-auto object-cover"
      />

      <div className="isolate">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]">
          Frontend Developer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="mt-6 space-x-3">
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
    </div>
  );
};

export default Hero;
