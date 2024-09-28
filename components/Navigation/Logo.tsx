import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

interface LogoProps {
  text?: string;
  spanText?: string;
}

export const Logo: React.FC<LogoProps> = ({ text = "", spanText = "" }) => {
  const logoStyles = `"text-[26px] font-bold ps-5 tracking-widest sm:text-[20px] md:text-[24px] lg:text-[28px] flex justify-center items-center gap-2"`;
  const logoIconStyles = `size-7 hover:animate-spin md:size-10`;
  const logoTextStyle = `inline-block align-top text-sm md:text-[1.3rem] py-12 text-orange-500 pointer-cursor font-sans italic font-normal`;
  return (
    <a href="#" className={logoStyles}>
      <ArrowPathRoundedSquareIcon className={logoIconStyles} />
      <span className={logoTextStyle}>{spanText}</span>
    </a>
  );
};
