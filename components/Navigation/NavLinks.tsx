"use client";

import { useStore } from "@/libs/store/NavigationStore";
import { Icons } from "./Icons";
import { motion } from "framer-motion";

interface NavLinkProps {
  title: string;
  url: string;
}

export const NavLinks = () => {
  const { isHamburgerNavigationClicked } = useStore();
  const links: NavLinkProps[] = [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#" },
    { title: "Products", url: "#" },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.7,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const navLinkWrapperStyles = `bg-white md:flex justify-center items-center gap-20 md:bg-white md:me-5 ${
    !isHamburgerNavigationClicked ? "hidden" : ""
  }`;
  const navListStyles = `text-center md:flex md:justify-evenly items-center md:bg-white `;
  const navListItemStyles = `font-normal text-orange-500 hover:bg-orange-100 py-5 hover:text-orange-700 md:my-0 md:ml-8 md:hover:bg-white ;`;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={navLinkWrapperStyles}
    >
      <ul className={navListStyles}>
        {links.map((link, index) => (
          <li className={navListItemStyles} key={index}>
            <a href={link.url} className="tracking-widest">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <Icons />
    </motion.div>
  );
};
