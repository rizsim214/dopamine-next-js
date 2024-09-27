"use client";

import { useStore } from "@/libs/store/NavigationStore";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Hamburger = () => {
  const { isHamburgerNavigationClicked, expandNavigation } = useStore();
  return (
    <button
      type="button"
      className="rounded-full p-1 text-orange-500 border border-orange-500 hover:border-orange-700 hover:text-orange-700 md:hidden"
      onClick={expandNavigation}
    >
      {!isHamburgerNavigationClicked ? (
        <Bars3Icon className="size-6" />
      ) : (
        <XMarkIcon className="size-6" />
      )}
    </button>
  );
};
