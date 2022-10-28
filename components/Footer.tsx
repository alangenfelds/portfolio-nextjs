import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-5 w-full">
      <Link href="#hero">
        <div className="absolute bottom-10 md:bottom-7 right-12 h-8 w-8 bg-gray-400 flex items-center justify-center  hover:cursor-pointer z-50 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#f7ab08"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
