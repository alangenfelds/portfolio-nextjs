import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 transition-opacity duration-200 cursor-pointer overflow-hidden z-10">
      <motion.img
        alt="brand image"
        src="/images/sm-icons-facebook-logo.webp"
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
        <h4 className="text-4xl font-light">QA Automation Engineer</h4>
        <p className="font-bold text-2xl mt-1">ACCENTURE</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="/images/css.png"
            width={32}
            height={32}
            objectFit="contain"
            alt="tech logo"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src="/images/javascript.png"
            width={32}
            height={32}
            objectFit="contain"
            alt="tech logo"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src="/images/html.png"
            width={32}
            height={32}
            objectFit="contain"
            alt="tech logo"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src="/images/react.png"
            width={32}
            height={32}
            objectFit="contain"
            alt="tech logo"
            className="h-10 w-10 rounded-full"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started work ... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
