import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

interface LogoProps {
  text?: string;
  spanText?: string;
}

export const Logo: React.FC<LogoProps> = ({ text = "", spanText = "" }) => {
  return (
    <a
      href="#"
      className="text-[26px] font-bold ps-5 tracking-wider sm:text-[20px] md:text-[24px] lg:text-[28px] flex justify-center items-center gap-2"
    >
      <ArrowPathRoundedSquareIcon
        className={`size-7 hover:rotate-90 md:size-8`}
      />
      <span className="text-sm text-[1rem] py-12 text-orange-500 pointer-cursor">
        {spanText}
      </span>
    </a>
  );
};
