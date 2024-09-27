"use client";

import { useStore } from "@/libs/store/NavigationStore";

interface NavLinkProps {
  title: string;
  url: string;
}

export const NavLinks = () => {
  const { isHamburgerNavigationClicked } = useStore();
  const links: NavLinkProps[] = [
    { title: "Home", url: "#" },
    { title: "About", url: "#" },
    { title: "Products", url: "#" },
  ];

  return (
    <div
      className={` ${
        isHamburgerNavigationClicked ? "" : "hidden "
      } bg-white md:flex justify-center items-center gap-20 md:bg-white md:me-5`}
    >
      <ul
        className={`text-center md:flex md:justify-evenly items-center md:bg-white `}
      >
        {links.map((link, index) => (
          <li
            className="font-normal text-orange-500 hover:bg-orange-100 py-5 hover:text-orange-700 md:my-0 md:ml-8 md:hover:bg-white "
            key={index}
          >
            <a href={link.url} className="tracking-widest">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
