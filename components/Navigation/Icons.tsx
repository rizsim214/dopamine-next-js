import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Icons = () => {
  const gridStyles = `grid grid-cols-2 md:gap-3 `;
  const navButtonStyles = `hover:text-orange-700 text-orange-500 flex items-center justify-center hover:bg-orange-100 md:hover:bg-white py-3`;
  return (
    <div className={gridStyles}>
      <a href="#" className={navButtonStyles}>
        {"My Account"}
      </a>
      <a href="#" className={navButtonStyles}>
        <ShoppingBagIcon className="size-7 " />
      </a>
    </div>
  );
};
