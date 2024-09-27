import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Icons = () => {
  return (
    <div className="grid grid-cols-2 md:gap-3 ">
      <a
        href="#"
        className="hover:text-orange-700 text-orange-500 flex items-center justify-center hover:bg-orange-100 md:hover:bg-white py-3 "
      >
        {"My Account"}
      </a>
      <a
        href="#"
        className="hover:text-orange-700 text-orange-500 flex items-center justify-center hover:bg-orange-100 md:hover:bg-white py-3"
      >
        <ShoppingBagIcon className="size-7 " />
      </a>
    </div>
  );
};
